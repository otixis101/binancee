"use server"

import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';


const prisma = new PrismaClient()

export async function checkExists(userData: any) {
    const existingUser = await prisma.user.findUnique({
        where:{
            email: userData.email
        }
    });

    if(existingUser){
        console.log('email exists')
        return { message: 'email has already been used.. try another or login instead'}
    }
    

}