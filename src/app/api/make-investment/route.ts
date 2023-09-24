import { db } from "@/lib/db";
import { NextResponse } from "next/server";




export async function POST(req: Request){

  try {
    
    const body = await req.json();
    
    const {userId, amount, leverage, roi, closedAt} = body;
    

    const asset = await db.asset.findFirst({
      where:{
        ownerId: userId
      },
    })

    if(asset){
        
        //check if asset has enought balance 
        if (asset.balance >= amount) {
            asset.balance -= amount;
        } else {
            return NextResponse.json({message: 'Insufficient balance for investment'},{status: 203});
        }
      
        // Create a new transaction of investment
        const transaction = await db.transaction.create({
            data: {
              assetId: asset.id,
              amount: amount,
              type: "INVESTMENT",
              userId: userId,
            }
          }).catch((err) => {
            throw new Error(err)
          })

        const {id} = transaction;

        //create new investment row
        await db.investments.create({
            data: {
                amount: amount,
                leverage: leverage,
                roi: roi,
                ownerId: userId,
                transactionId: id,
                closedAt: new Date(closedAt)
            }
        })
            
    }
    else{
      return NextResponse.json({message:'User has no Assets'},{status: 208});
    }
    
    

    // Save changes to the asset
    await db.asset.update({
      where: { id: asset?.id },
      data: { balance: asset?.balance },
    });

    return NextResponse.json({message: "INVESTMENT" + ' Transaction created Successfully!'},{status: 200});
  } catch (error) {
    return NextResponse.json({message: error}, {status: 501});
  } 

}

// // Usage example
// const user: User = { id: 1, /* ... other user data */ };
// const asset: Asset = { id: 1, /* ... other asset data */ balance: 100 };
// const amount: number = 10.0;
// const transactionType: TransactionType = TransactionType.DEPOSIT;

// createTransaction(user, asset, amount, transactionType);
