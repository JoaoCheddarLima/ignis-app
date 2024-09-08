'use client';

import { FaDiscord } from 'react-icons/fa';

import BaseCard from '@/app/components/cards/baseCard';
import Content from '@/app/components/page/content';
import Description from '@/app/components/text/description';
import Title from '@/app/components/text/title';

export default function Home() {
    return (
        <Content>
            <BaseCard>
                <Title>
                    <FaDiscord
                        size={50}
                        className='text-blue-500'
                    />
                    <h1 className='text-blue-500'>
                        Discord
                    </h1>
                    flows
                </Title>
                <Description>
                    This is where you can create and manage your discord automation flows.
                </Description>
            </BaseCard>
        </Content>
    );
}
