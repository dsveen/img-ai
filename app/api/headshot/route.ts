import Replicate from "replicate";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import prismadb from "@/lib/prismadb";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function getStaticProps() {

  return {
    props: {},
  }
}

export async function POST(
  req: Request
) {
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
      "catacolabs/headshot-pics:d833353a550733a7c8d3176eed830bbe8aacc2bc6767217702cde5fb8e006054",
      {
        input: {
          image: "https://upcdn.io/kW15bfN/raw/uploads/2023/08/31/4mCUZ6C242-2022-03-13_18-21-15_143%20Small.png",
          gender: 'woman',
        },
        webhook: "http://localhost/api/headshot/webhook",
        webhook_events_filter: ["completed"],
      }
    );


    const createData =  { userId: userId, prompt: prompt, type: 'Headshot' };
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
