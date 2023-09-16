"use server"

import {hash,compare} from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function checkPasswordMacth(userData: any) {
    const getUser = await prisma.user.findUnique({
        where:{
            email: userData.email
        }
    });

    if(getUser?.password){
        const result = await compare(userData.password, getUser.password);

        if(!result){
            return { message: "passwords don't match"}
        }
    }

}