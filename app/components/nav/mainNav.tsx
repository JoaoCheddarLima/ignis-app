'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import BaseLoader from '../../loaders/loaderOne';
import SmallProfile from '../smallProfile';

export default function MainTopNav() {
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

    console.log(user)

    return (
        <div className='mx-auto place-items-center grid grid-cols-3 content-center py-2 border-b-2 border-[#141414] flex-wrap font-thin'>
            <Link
                className='flex items-center'
                href='/'
            >
                <Image
                    src='/logo.png'
                    alt='logo'
                    width={64}
                    height={64}
                />
                <h1 className='text-lg'>
                    Fire Automate
                </h1>
            </Link>
            <div className='flex items-center gap-5 text-sm text-gray-300'>
                {
                    [
                        'Services',
                        'FAQ',
                        'About',
                        'Contact'
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href={`/${item.toLowerCase()}`}
                        >
                            {item}
                        </Link>
                    ))
                }
            </div>
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

    );
}
