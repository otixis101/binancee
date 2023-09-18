"use server"

import { db } from "@/lib/db";
import { hash } from 'bcrypt';
import { error } from "console";



export async function createUser(userData: any) {
    //check if user exist
    const existingUser = await db.user.findUnique({
        where:{
            email: userData.email
        }
    });

    if(existingUser){
        throw new Error("email has already been used")
    }

    //hash user password
    const hashedPassword = await hash(userData.password, 10)
    //create new user
    const newUser = await db.user.create({
        data:{
            email: userData.email,
            password: hashedPassword
        }
    })

    
}

        