import { db } from "@/lib/db";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";



export async function PUT(req: Request){

  try {
    
    const body = await req.json();
    
    const {btc, usdt, ltc , eth, bnb, leverage} = body;
    

    const result = await db.wallet.update({
      where:{
        id: 0
      },
      data:{
        btc,
        usdt,
        bnb,
        ltc,
        eth,
        leverage
      }
    })
    if(result){
      return NextResponse.json({message: "Update was made successfully!", isError: false},{status: 200});
    }

  } catch (error) {
    if (error instanceof PrismaClientValidationError) {
      return NextResponse.json({message: error.stack}, {status: 502});
      // Handle the error appropriately
    }
    return NextResponse.json({message: error}, {status: 501});
  } 

}

