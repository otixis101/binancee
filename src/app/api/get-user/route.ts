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

    if(user){
        return NextResponse.json(user, {status: 201})
    }
    else{
        throw new Error('Something Went Wrong')
    }

  } catch (error) {
    return NextResponse.json({message: 'Something went wrong'}, {status: 501});
  } 

}

