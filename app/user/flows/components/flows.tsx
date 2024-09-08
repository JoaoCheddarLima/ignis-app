'use client';

import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

import BaseCard from '@/app/components/cards/baseCard';
import Description from '@/app/components/text/description';
import Title from '@/app/components/text/title';

export default function FlowsPage() {

    return (
        <div className="flex flex-col gap-12 mx-auto w-3/4 h-full py-10">
            <div>
                <BaseCard>
                    <div className='flex flex-col gap-2'>
                        <Title>
                            My automation flows
                        </Title>
                        <Description>
                            This is where you can create and manage your automation flows.
                        </Description>
                    </div>
                </BaseCard>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 text-center gap-5 md:gap-12'>
                <Link href='/user/flows/discord'>
                    <BaseCard>
                        <div className='flex gap-2 justify-center items-center'>
                            <FaDiscord size={50} className='text-blue-500' />
                            <h1 className='text-blue-500'>
                                Discord
                            </h1>
                            Flows
                        </div>
                    </BaseCard>
                </Link>
                {/* <Link href='/user/flows/twitter' aria-disabled>
                    <BaseCard>
                        <div className='flex gap-2 justify-center items-center'>
                            <FaTwitter size={50} className='text-blue-500' />
                            <h1 className='text-blue-500'>
                                Twitter
                            </h1>
                            Flows
                        </div>
                    </BaseCard>
                </Link> */}
            </div>
        </div>
    );
}
