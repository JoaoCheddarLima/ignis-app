import {
  useEffect,
  useState,
} from 'react';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import ms from 'pretty-ms';
import { FaShieldHeart } from 'react-icons/fa6';
import { IoMdInformationCircle } from 'react-icons/io';

import { API } from '@/app/lib/api';
import { IUser } from '@/app/types';

import AuthProfile from '../../nav/auth';

export function UserProfileNav() {
    const [userData, setUserData] = useState({} as IUser)
    const [planExpired, setPlanExpired] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const {
        status,
        data
    } = useSession({
        required: true,
        onUnauthenticated() {
            return window.location.href = '/api/auth/signin';
        },
    })

    useEffect(() => {
        if (data?.user) {
            API.getMe(data)
                .then((user) => {
                    console.log(user)
                    if (user) {
                        setUserData(user)
                        setPlanExpired(new Date(user.planExpiration).getTime() < Date.now())
                        setLoaded(true)
                    } else {
                        return window.location.href = '/api/auth/signin';
                    }
                }
                )
        }
    }, [data?.user])

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
                        {data?.user?.name}!
                    </strong>
                </div>
            }
            <AuthProfile />
        </div>
    )
}