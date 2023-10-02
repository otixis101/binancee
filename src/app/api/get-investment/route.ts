import { db } from "@/lib/db";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

// enum InvestmentType {
//   INVESTMENT = "INVESTMENT",
//   DEPOSIT = "DEPOSIT",
//   WITHDRAWAL = "WITHDRAWAL",
// }


export async function POST(req: Request){

  try {
    
    const body = await req.json();
    
    const {userId} = body;
    

    const inv = await db.investments.findMany({
      where:{
        ownerId: userId
      },orderBy: {
        createdAt: "desc"
      }, take: 5
    })

    if (inv) {
      return NextResponse.json({inv}, {status: 200})
    } else {
      return NextResponse.json(null)
    }

    // return NextResponse.json({message: "INVESTMENT" + ' Transaction created Successfully!', error: false},{status: 200});
  } catch (error) {
    if (error instanceof PrismaClientValidationError) {
      return NextResponse.json({message: error.stack}, {status: 502});
      // Handle the error appropriately
    }
    return NextResponse.json({message: error}, {status: 501});
  } 

}

