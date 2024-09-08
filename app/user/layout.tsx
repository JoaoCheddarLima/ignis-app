'use client'

import { BaseSideBars } from '../components/baseBars';
import UserAuthProvider from '../context/loggedUserProvider';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <UserAuthProvider>
            <BaseSideBars>
                {children}
            </BaseSideBars>
        </UserAuthProvider>
    );
}
