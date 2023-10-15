import { db } from "@/lib/db";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";


enum TransactionType {
  INVESTMENT = "INVESTMENT",
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
}



export async function POST(req: Request){

  try {
    
    const body = await req.json();
    
    const {userId, amount, transactionType} = body;
    

    const asset = await db.asset.findFirst({
      where:{
        ownerId: userId
      },
    })

    //

    if(asset){

      
      //Update asset balance based on the transaction type
      switch(transactionType){
        case TransactionType.INVESTMENT:
            if (asset.balance >= amount) {
              asset.balance -= amount;
            } else {
              return NextResponse.json({message: 'Insufficient balance for investment'},{status: 303});
            }
          break;
          case TransactionType.WITHDRAWAL:
            if (asset.balance >= amount) {
              asset.balance -= amount;
            } else {
              return NextResponse.json({message: 'Insufficient balance for withdrawal'},{status: 302});
            }

          break;
          case TransactionType.DEPOSIT:
            asset.balance += amount;
          break;
      } 

      
      // Create a new transaction
      await db.transaction.create({
        data: {
          assetId: asset.id,
          amount: amount,
          type: transactionType,
          userId: userId,
        }
      })

    }
    else{
      return NextResponse.json({message:'User has no Assets'},{status: 308});
    }


    // Save changes to the asset
    // await db.asset.update({
    //   where: { id: asset?.id },
    //   data: { balance: asset?.balance },
    // });

    return NextResponse.json({message: transactionType + ': Transaction was Successful!'},{status: 201});
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
