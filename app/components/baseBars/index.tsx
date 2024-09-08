import { Toaster } from 'react-hot-toast';

import { SideBarNav } from './sidebar';
import { UserProfileNav } from './topBar';

export function BaseSideBars({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <div className='flex w-full h-full'>
            <Toaster />
            <SideBarNav />
            <div className='w-full'>
                <UserProfileNav />
                {children}
            </div>
        </div>
    )
}