'use client';

import { BaseSideBars } from '../components/baseBars';
import UserAuthProvider from '../context/loggedUserProvider';

export default function Home() {

    return (
        <div className="flex w-full h-full">
            <UserAuthProvider>
                <BaseSideBars />
                <div className=''>

                </div>
                <div>

                </div>
            </UserAuthProvider>
        </div>
    );
}
