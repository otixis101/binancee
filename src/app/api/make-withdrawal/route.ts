import { db } from "@/lib/db";
import { PrismaClientUnknownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";




export async function POST(req: Request){

  try {
    
    const body = await req.json();
    
    const {userId, amount, token, address} = body;

    const asset = await db.asset.findFirst({
      where:{
        ownerId: userId
      },
    })

    if(!asset){
      return NextResponse.json({message:'User has no Assets', isError: true},{status: 208});
    }
        
        //check if asset has enought balance 
        if (asset.balance >= amount) {
          asset.balance -= amount;
      } else {
          return NextResponse.json({message: 'Insufficient balance for withdrawal', isError: true},{status: 203});
      }
      
        // Create a new transaction of investment
        const transaction = await db.transaction.create({
            data: {
              assetId: asset.id,
              amount: amount,
              type: "WITHDRAWAL",
              // status: "SUCCESS",
              userId: userId,
            }
          })

        const {id} = transaction;

        //create new investment row
        await db.withdrawals.create({
            data: {
                amount: amount,
                token: token,
                ownerId: userId,
                address: address,
                transactionId: id,
            }
        })
    
    
    

    // Save changes to the asset
    await db.asset.update({
      where: { id: asset?.id },
      data: { balance: asset?.balance },
    });

    return NextResponse.json({message: "Withdrawal Transaction created Successfully!", isError: false},{status: 200});
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
