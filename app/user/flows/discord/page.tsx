'use client';

import { FaDiscord } from 'react-icons/fa';

import BaseCard from '@/app/components/cards/baseCard';
import ClickableLinkCard from '@/app/components/cards/clickLinkCard';
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
                    Manage your discord automation flows here.
                </Description>
            </BaseCard>
            <div className='grid md:grid-cols-2 gap-5 w-full h-max'>
                <ClickableLinkCard
                    refTo='/user/flows/discord/mirrors'
                    description='Foward messages from any channel'
                >
                    <Title>
                        Mirrors
                    </Title>
                </ClickableLinkCard>
                <ClickableLinkCard
                    refTo='/user/flows/discord/mirrors'
                    description='Send the same message across multiple channels'
                >
                    <Title>
                        Auto Foward
                    </Title>
                </ClickableLinkCard>
            </div>
        </Content>
    );
}
