"use server"

import {hash,compare} from 'bcrypt'
import { db } from "@/lib/db";


export async function checkPasswordMacth(userData: any) {
    const getUser = await db.user.findUnique({
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