import { db } from "@/lib/db";
import { PrismaClientUnknownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";




export async function POST(req: Request){

  try {
    
    const body = await req.json();
    
    const {userId, amount, token} = body;
    

    const asset = await db.asset.findFirst({
      where:{
        ownerId: userId
      },
    })

    if(!asset){
      return NextResponse.json({message:'User has no Assets', isError: true},{status: 208});
    }
        
        
        asset.balance += amount
      
        // Create a new transaction of investment
        const transaction = await db.transaction.create({
            data: {
              assetId: asset.id,
              amount: amount,
              type: "DEPOSIT",
              // status: "SUCCESS",
              userId: userId,
            }
          })

        const {id} = transaction;

        //create new investment row
        await db.deposits.create({
            data: {
                amount: amount,
                token: token,
                ownerId: userId,
                transactionId: id,
            }
        })
    
    
    

    // Save changes to the asset
    // await db.asset.update({
    //   where: { id: asset?.id },
    //   data: { balance: asset?.balance },
    // });

    return NextResponse.json({message: "Deposit Transaction created Successfully!", isError: false},{status: 200});
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

// // Usage example
// const user: User = { id: 1, /* ... other user data */ };
// const asset: Asset = { id: 1, /* ... other asset data */ balance: 100 };
// const amount: number = 10.0;
// const transactionType: TransactionType = TransactionType.DEPOSIT;

// createTransaction(user, asset, amount, transactionType);
