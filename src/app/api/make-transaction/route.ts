import { db } from "@/lib/db";
import { NextResponse } from "next/server";


enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
  INVESTMENT = 'INVESTMENT',
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
      if (transactionType === TransactionType.DEPOSIT) {
        asset.balance += amount;
      } else if (transactionType === TransactionType.WITHDRAWAL) {
        if (asset.balance >= amount) {
          asset.balance -= amount;
        } else {
          return NextResponse.json({message: 'Insufficient balance for withdrawal'},{status: 202});
        }
      }
      else if(transactionType === TransactionType.INVESTMENT)
      {
        if (asset.balance >= amount) {
          asset.balance -= amount;
        } else {
          return NextResponse.json({message: 'Insufficient balance for investment'},{status: 202});
        }
      }

      

      // Create a new transaction
      const transaction = await db.transaction.create({
        data: {
          assetId: asset.id,
          amount: amount,
          type: transactionType,
          userId: userId,
        }
      })

    }
    else{
      return NextResponse.json({message:'User has no Assets'},{status: 408});
    }


    // Save changes to the asset
    await db.asset.update({
      where: { id: asset?.id },
      data: { balance: asset?.balance },
    });

    return NextResponse.json({message: transactionType + ' Transaction created Successfully!'},{status: 201});
  } catch (error) {
    return NextResponse.json({message:'Error creating transaction'}, {status: 501});
  } 

}

// // Usage example
// const user: User = { id: 1, /* ... other user data */ };
// const asset: Asset = { id: 1, /* ... other asset data */ balance: 100 };
// const amount: number = 10.0;
// const transactionType: TransactionType = TransactionType.DEPOSIT;

// createTransaction(user, asset, amount, transactionType);
