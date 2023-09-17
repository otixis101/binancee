import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import {db} from "@/lib/db"
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import { validateUser } from '@/prismaActions/validateUser';


export const options: NextAuthOptions = {
  adapter: PrismaAdapter(db),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID ?? "",
        clientSecret: process.env.GOOGLE_SECRET ?? "",
      }),
      CredentialsProvider({
        name: 'credentials',
        type: 'credentials',
        credentials: {
          email: {label: "Email",type: "text", placeholder: "Enter your Email"},
          password: {label: "Password",type: "password" }
        },
        async authorize(credentials){
          // Add your custom validation logic here
          const user = await validateUser(credentials);
          if (user) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
              // const user = {id: '1', email: "email@mail.com", password: "passcode123"}
              // return user
          },

      })
      
    ],
    callbacks: {
      async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token
        }
        return token
      }

    },
    
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },

    debug: process.env.NODE_ENV === "development",
  };