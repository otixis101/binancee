import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request){

  try {
    
    const body = await req.json();
    
    const {email} = body;
    
    const user = await db.user.findUnique({
      where:{
        email: email,
      },
    })

    // const {id} = user;

    if(user){
        const asset = await db.asset.findFirst({
        where:{
          ownerId: user?.id
        },
      })

      if(!asset)
      {
        console.log('not exists')
        // return NextResponse.json({message:'Asset Dont Exist'}, {status: 401});
        //create asset for user
        const newAsset = await db.asset.create({
              data:{
                  symbol: '$',
                  name: 'usd',
                  balance: 0.00,
                  ownerId: user?.id,
              }
          })

          return NextResponse.json(newAsset,{status: 201});
      }
      else{
        return NextResponse.json(asset,{status: 201});
      }
  }
  else{
    throw new Error("user does not exists");
  }

  } catch (error) {
    return NextResponse.json({message: 'Something went wrong'}, {status: 501});
  } 

}

