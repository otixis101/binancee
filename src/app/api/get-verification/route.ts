import { db } from "@/lib/db";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";


import { getServerSession } from "next-auth";

import { options } from "../auth/[...nextauth]/options";



export async function GET(){

  try {

    const session = await getServerSession(options);
    const email = session?.user?.email
    
    const user = await db.user.findUnique({
        where:{
          email: email!
        },
      })

    
    //check if user file already exists
    const checkKyc = await db.kyc.findFirst({
      where:{
          ownerId: user!.id,
      }
  })

    if (checkKyc) {
      return NextResponse.json({checkKyc}, {status: 200})
    } else {
      return NextResponse.json(null)
    }

  } catch (error) {
    if (error instanceof PrismaClientValidationError) {
      return NextResponse.json({message: error.stack}, {status: 502});
      // Handle the error appropriately
    }
    return NextResponse.json({message: error}, {status: 501});
  } 

}

