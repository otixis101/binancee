"use server"

import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt';

const prisma = new PrismaClient()


export async function createUser(userData: any) {
    //check if user exist
    const existingUser = await prisma.user.findUnique({
        where:{
            email: userData.email
        }
    });

    if(existingUser){
        return {message: "email has already been used"}
    }

    //hash user password
    const hashedPassword = await hash(userData.password, 10)
    //create new user
    const newUser = await prisma.user.create({
        data:{
            email: userData.email,
            password: hashedPassword
        }
    }).catch(() => {
        return {message: "something went wrong"} 
    })

    
}

        