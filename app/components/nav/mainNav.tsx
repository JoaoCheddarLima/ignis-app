'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Texts } from '@/app/lib/texts';

export default function MainTopNav() {
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
                    {Texts.BRAND_NAME}
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
            <Link
                href='/api/auth/signin'
                className='flex gap-1 items-center px-4 py-1 rounded-md bg-blue-600'
            >
                Sign in
            </Link>
        </div>

    );
}
