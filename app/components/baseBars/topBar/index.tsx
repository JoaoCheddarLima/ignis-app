import { useContext } from 'react';

import Link from 'next/link';
import ms from 'pretty-ms';
import { FaShieldHeart } from 'react-icons/fa6';
import { IoMdInformationCircle } from 'react-icons/io';

import { UserAuthContext } from '@/app/context/loggedUserProvider';

import AuthProfile from '../../nav/auth';

export function UserProfileNav() {
    const {
        loaded,
        planExpired,
        userData
    } = useContext(UserAuthContext)

    return (
        <div className='flex justify-around w-full h-20 border-b border-black bg-[#171d27] items-center align-middle p-5'>
            {
                loaded &&
                <div className='flex flex-col gap-1'>
                    {
                        planExpired && loaded &&
                        <Link href='/billing' className='flex gap-2 items-center'>
                            <IoMdInformationCircle className='text-yellow-300' />
                            <span className='text-yellow-300'>
                                No active plan
                            </span>
                        </Link>
                    }
                    {
                        !planExpired && loaded &&
                        <Link href='/billing'>
                            <FaShieldHeart />
                            <span className='text-white'>
                                Renew in
                            </span>
                            <strong className='text-orange-400'>
                                {ms(Date.now() - new Date(userData.planExpiration).getMilliseconds() || 0)}
                            </strong>
                        </Link>
                    }
                </div>
            }
            {
                loaded &&
                <div className='
                gap-2 hidden
                md:flex
                '>
                    👋 Hello,
                    <strong className='text-orange-400'>
                        {userData?.name}!
                    </strong>
                </div>
            }
            <AuthProfile />
        </div>
    )
}