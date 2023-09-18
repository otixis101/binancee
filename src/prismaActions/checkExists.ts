"use server"

import { db } from "@/lib/db";
import { NextResponse } from 'next/server';



export async function checkExists(userData: any) {
    const existingUser = await db.user.findUnique({
        where:{
            email: userData.email
        }
    });

    if(existingUser){
        console.log('email exists')
        return { message: 'email has already been used.. try another or login instead'}
    }
    

}