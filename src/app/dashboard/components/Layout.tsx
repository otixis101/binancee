import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="./">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="./about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="./contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>{children}</div>
        </div>
    );
};

export default Layout;
