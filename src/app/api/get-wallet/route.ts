import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(){

  try {

    
    const wallet = await db.wallet.findUnique({
      where: {
        id: 0,
      }
    })

    if(wallet){
        return NextResponse.json(wallet, {status: 201})
    }
    else{
        throw new Error('No Wallet Found')
    }

  } catch (error) {
    return NextResponse.json({message: 'Something went wrong'}, {status: 501});
  } 

}

