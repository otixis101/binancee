import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'


export const options: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID ?? "",
        clientSecret: process.env.GOOGLE_SECRET ?? "",
      }),
      
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
  };