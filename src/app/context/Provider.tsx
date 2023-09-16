"use client"

import { SessionProvider } from 'next-auth/react'

interface provProps {
    children: React.ReactNode;
    session: any
}

const Provider = ({ children, session }: provProps) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider