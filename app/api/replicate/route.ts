import Replicate from "replicate";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request
) {

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
  });

  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    //Do work

    const response = await replicate.run(
      "stability-ai/sdxl:d830ba5dabf8090ec0db6c10fc862c6eb1c929e1a194a5411852d25fd954ac82",
      {
        input: {
          prompt: prompt,
          num_outputs: parseInt(amount, 10),
          seed: randomInteger(0, 2147483647),
        },
        webhook: "http://localhost/api/replicate/webhook",
        webhook_events_filter: ["completed"],
      }
    );


    const createData =  { userId: userId, prompt: prompt, type: 'Images' };
    const userGenerated = await prismadb.userGeneration.create({
      data: createData,
    });

    let urls = new Array();
    let images = [];

    const userGeneratedId = Number(userGenerated.id);

    if(response instanceof Array) {
      urls = response.map(x => ({ generation_id: userGeneratedId, item: x}));
      images = response.map(x => x);
    }
      

    console.log(images);
    const pushImages = await prismadb.userGenerationResults.createMany({
      data: urls,
      skipDuplicates: true, 
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(images);
  } catch (error) {
    console.log('[REPLICATE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}