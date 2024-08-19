'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import { Texts } from '@/app/lib/texts';

import SmallProfile from '../profile/smallProfile';

export default function MainTopNav() {
    const {
        status,
        data
    } = useSession()

    const user = data?.user;

    return (
        <div className='
        mx-auto place-items-center grid grid-cols-2 content-center py-2 border-b-2 border-[#141414] flex-wrap font-thin
        md:grid-cols-3
        '>
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
                    {Texts.BRAND_NAME}
                </h1>
            </Link>
            <div className='items-center gap-5 text-sm text-gray-300 hidden md:flex'>
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
            {
                data?.user ?
                    (
                        <SmallProfile
                            name={user?.name!}
                            icon={user?.image!}
                        />
                    ) :
                    (
                        <Link
                            href='/api/auth/signin'
                            className='flex gap-1 items-center px-4 py-1 rounded-md bg-blue-600'
                        >
                            Sign in
                        </Link>
                    )
            }
        </div>

    );
}
