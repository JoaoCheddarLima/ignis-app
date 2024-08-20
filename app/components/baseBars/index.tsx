import { Toaster } from 'react-hot-toast';

import UserAuthProvider from '@/app/context/loggedUserProvider';

import { SideBarNav } from './sidebar';
import { UserProfileNav } from './topBar';

export function BaseSideBars({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <UserAuthProvider>
            <Toaster />
            <SideBarNav />
            <div className='w-full'>
                <UserProfileNav />
                {children}
            </div>
        </UserAuthProvider>
    )
}