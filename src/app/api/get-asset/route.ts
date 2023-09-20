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

    const asset = await db.asset.findFirst({
      where:{
        ownerId: user?.id
      },
    })

    return NextResponse.json(asset,{status: 201});
  } catch (error) {
    return NextResponse.json({message:'Something went wrong!'}, {status: 501});
  } 

}

