'use client'
import { useSession } from 'next-auth/react';

import BaseLoader from '../../loaders/loaderOne';
import SmallProfile from '../smallProfile';

const {
    status,
    data
} = useSession({
    required: true,
    onUnauthenticated() {
        return window.location.href = '/api/auth/signin';
    },
})

const user = data?.user;

export default function AuthProfile() {

    return (
        <div>
            <section className='flex justify-end'>
                {status === 'loading' && <BaseLoader label='Connecting..' size={24} direction='right' />}
                {status === 'authenticated' && (
                    <SmallProfile
                        name={user?.name!}
                        icon={user?.image!}
                    />
                )}
            </section>
        </div>
    )
}