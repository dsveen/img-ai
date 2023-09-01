import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export const getUserGenerations = async () => {

    const { userId } = auth();

    if (!userId) {
      return 0;
    }

    const userApiLimit = await prismadb.userGeneration.findMany({
      where: { userId: userId },
    });

    console.log(userApiLimit);
  
    // const userApiLimit = await prismadb.userGeneration.findUnique({
    //   where: {
    //     user_id
    //   }
    // });
  
    if (!userApiLimit) {
      return 0;
    }

    return userApiLimit;
}

// export const setUserGenertations = async () => {

//   const { userId } = auth();

//   if (!userId) {
//     return 0;
//   }

//   const userApiLimit = await prismadb.userGeneration.create({
//     where: { user_id: userId },
//   });

//   await prismadb.userGeneration.create({
//     data: {
//       user_id: userId,
       
//     },
//   })


// }
