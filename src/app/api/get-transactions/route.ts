import { db } from "@/lib/db";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";



export async function POST(req: Request){

  try {
    
    const body = await req.json();
    
    const {userId} = body;
    

    const transactions = await db.transaction.findMany({
      where:{
        userId: userId
      },orderBy: {
        createdAt: "desc"
      }, take: 10
    })

    if (transactions) {
      return NextResponse.json({transactions}, {status: 200})
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

