import Image from 'next/image';
import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';

export default function SmallProfile(
    {
        name = 'User',
        icon = '/logo.png'
    }: {
        name?: string,
        icon?: string
    }
) {
    return (
        <div className='flex gap-2 items-center'>
            <Link
                href='/user/dashboard'
            >
                <Image
                    src={icon}
                    alt={name}
                    width={64}
                    height={64}
                    className='rounded-full'
                />
            </Link>
            <Link href="/api/auth/signout" className='flex flex-col h-full justify-center'>
                <FaSignOutAlt className='text-red-400' />
            </Link>
        </div>
    )
}