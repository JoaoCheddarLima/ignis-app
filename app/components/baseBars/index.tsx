import { SideBarNav } from './sidebar';
import { UserProfileNav } from './topBar';

export function BaseSideBars() {
    return (
        <div className='flex w-full'>
            <SideBarNav />
            <UserProfileNav />
            <div>
                {/* Main content */}
                <div className='flex flex-col'>
                    {/* Api Status */}
                </div>
            </div>
        </div>
    )
}