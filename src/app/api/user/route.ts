
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

import {hash} from 'bcrypt'


export async function POST(req: Request){
    try{
        const body = await req.json();

        const {email, password} = body;

        //check if user exist
        const existingUser = await db.logUser.findUnique({
            where:{
                email: email
            }
        });

        if(existingUser){
            return NextResponse.json({user: null, message: 'email has already been used'}, {status: 409})
        }

        //hash user password
        const hashedPassword = await hash(password, 10)
        //create new user
        const newUser = await db.logUser.create({
            data:{
                email,
                password: hashedPassword
            }
        })

        const {password: newUserPassword, ...rest} = newUser;


        return NextResponse.json({user: rest, message: 'user created successfullyy'}, {status : 201})
    }
    catch(error)
    {
        return NextResponse.json({message: "something went wrong"}, {status: 500})
    }
}
