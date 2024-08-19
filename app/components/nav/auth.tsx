'use client'
import { useContext } from 'react';

import { useSession } from 'next-auth/react';

import { UserAuthContext } from '@/app/context/loggedUserProvider';

import BaseLoader from '../loaders/loaderOne';
import SmallProfile from '../profile/smallProfile';

export default function AuthProfile() {
    const {
        userData
    } = useContext(UserAuthContext)

    const {
        status,
        data
    } = useSession()

    return (
        <div>
            <section className='flex justify-end'>
                {status === 'loading' && <BaseLoader label='Connecting..' size={24} direction='right' />}
                {status === 'authenticated' && (
                    <SmallProfile
                        name={userData?.name!}
                        icon={data.user?.image!}
                    />
                )}
            </section>
        </div>
    )
}