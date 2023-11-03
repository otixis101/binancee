import { db } from "@/lib/db";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";




export async function POST(req: Request){

  try {
    
    const body = await req.json();
    
    const {userId, address, city, country, postal_code, state} = body;
    

    const kyc = await db.kyc.findFirst({
      where:{
        ownerId: userId
      },
    })

    if(kyc){
      await db.kyc.update({
        where:{
          id: kyc.id
        },
        data:{
          address,
          city,
          country,
          postal_code,
          state,
          ownerId: userId,
          status: 'PENDING'
        }
      })
      return NextResponse.json({message:'User Verification Error', isError: true},{status: 208});
    }
    else{
      await db.kyc.create({
        data:{
          address,
          city,
          country,
          postal_code,
          state,
          ownerId: userId,
          status: 'PENDING'
        }
      })
    }


    return NextResponse.json({message: "KYC Verification is Submitted and being Proccessed!", isError: false},{status: 200});
  } catch (error) {
    if (error instanceof PrismaClientValidationError) {
      // console.error("Validation Errors:", error.message);
      // console.error("Validation Error Details:", error.cause);
      return NextResponse.json({message: error.stack}, {status: 502});
      // Handle the error appropriately
    }
    return NextResponse.json({message: error}, {status: 501});
  } 

}

