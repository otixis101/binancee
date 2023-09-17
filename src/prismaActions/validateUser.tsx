import { prisma } from "@/lib/db";
import { compare } from "bcrypt";
import { boolean } from "zod";


// interface iUser {
//     email: string,
//     password: string,
//     redirect?: string,
//     csrfToken: string,
//     callbackUrl: string,
//     jwt: string
// }

export async function validateUser(credentials: any) {

    try {
        if (credentials) {

            const { email, password } = credentials;

            // Check if a user with the provided email exists in the database
            const user = await prisma.logUser.findUnique({
                where: { email },
            })

            if (!user) {
                throw new Error('User not found');
                // return null;
            }

            if (user.password) {
                const result = await compare(password, user.password);

                if (!result) {
                    // return null
                    throw new Error('Invalid Password');
                }
            }

            // const { password, ...rest } = credentials;
            console.log(credentials)
            return Promise.resolve(credentials);
        }
        else {
            return null
        }
    }
    catch (error) {
        // Handle authentication errors
        throw error;
    }

}
