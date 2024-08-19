import Link from 'next/link';
import { BiSolidCreditCardFront } from 'react-icons/bi';
import { FaDiscord } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa6';
import { HiCog } from 'react-icons/hi';
import { PiTreeStructureBold } from 'react-icons/pi';
import { RiHistoryLine } from 'react-icons/ri';

import { Texts } from '@/app/lib/texts';

export function SideBarNav() {
    return (
        <div className='flex flex-col justify-between p-4 w-20 border-r h-full border-gray-950 bg-[#171d27] items-center'>
            <div className='flex flex-col gap-8'>
                <Link className="cursor-pointer w-11 hover:bg-gray-800 rounded-md"
                    href='/dashboard'
                >
                    <img src="/logo.png" alt={`${Texts.BRAND_NAME} Logo`} />
                </Link>
                <Link className="cursor-pointer w-11 flex justify-center hover:bg-gray-800 rounded-md p-2"
                    href='/flows'
                >
                    <PiTreeStructureBold className='text-white text-2xl' />
                </Link>
                <Link className="cursor-pointer w-11 flex justify-center hover:bg-gray-800 rounded-md p-2"
                    href='/history'
                >
                    <RiHistoryLine className='text-white text-2xl' />
                </Link>
                <Link className="cursor-pointer w-11 flex justify-center hover:bg-gray-800 rounded-md p-2"
                    href='/settings'
                >
                    <HiCog className='text-white text-2xl' />
                </Link>
                <Link className="cursor-pointer w-11 flex justify-center hover:bg-gray-800 rounded-md p-2"
                    href='/billing'
                >
                    <BiSolidCreditCardFront className='text-white text-2xl' />
                </Link>
            </div>
            <div className='flex flex-col gap-8 pb-4'>
                <Link className="cursor-pointer w-11 flex justify-center hover:bg-gray-800 rounded-md p-2"
                    href='/discord'
                >
                    <FaDiscord className='text-white text-2xl' />
                </Link>
                <Link className="cursor-pointer w-11 flex justify-center hover:bg-gray-800 rounded-md p-2"
                    href='/docs'
                >
                    <FaBook className='text-white text-2xl' />
                </Link>
            </div>
        </div>
    )
}