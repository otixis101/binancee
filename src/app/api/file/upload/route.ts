import { db } from '@/lib/db'
import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'

import { getServerSession } from "next-auth";

import { options } from "../../auth/[...nextauth]/options";





export async function POST(req: Request) {
    
    // console.log(session)
    try{
        const session = await getServerSession(options);
        const email = session?.user?.email
        // console.log(session?.user?.email)
        const user = await db.user.findUnique({
            where:{
              email: email!
            },
          })

        const data = await req.formData()
        const file: File | null = data.get('file') as unknown as File
        
        if (!file) {
            return NextResponse.json({message: 'not a file'},{status: 300})
        }
        if (!user) {
            return NextResponse.json({message: 'invalid user'},{status: 300})
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        
        // With the file data in the buffer, you can do whatever you want with it.
        // For this, we'll just write it to the filesystem in a new location
        // const path = `${file.name}`
        // await writeFile(path, buffer)
        // console.log(`open ${path} to see the uploaded file`)


        //check if user file already exists
        const checkFile = await db.file.findFirst({
            where:{
                ownerId: user!.id,
            }
        })

        if(checkFile){

            // Store file data in the database
            const uploadedFile = await db.file.update({
                where:{
                    id: checkFile!.id,
                },
                data: {
                    filename: file.name,
                    mimetype: file.type,
                    encoding: 'base64',
                    data: buffer,
                },
            });
        }
        else
        {
            // Store file data in the database
            const uploadedFile = await db.file.create({
                data: {
                    filename: file.name,
                    mimetype: file.type,
                    encoding: 'base64',
                    data: buffer,
                    ownerId: user!.id,
                },
            });

        }

        // Store file data in the database
        // const uploadedFile = await db.file.create({
        //     data: {
        //         filename: file.name,
        //         mimetype: file.type,
        //         encoding: 'base64',
        //         data: buffer,
        //         ownerId: user!.id,
        //     },
        // });
        
        return NextResponse.json({ success: true , status: 200})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message: "something went wrong"},{ status: 500 })

    }
}
