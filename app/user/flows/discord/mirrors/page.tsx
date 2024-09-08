import { FaPlus } from 'react-icons/fa';

import BaseCard from '@/app/components/cards/baseCard';
import Content from '@/app/components/page/content';
import Description from '@/app/components/text/description';
import Title from '@/app/components/text/title';

export default function Home() {
    return (
        <Content>
            <button
                className='w-max mx-auto border p-5 rounded-md bg-[#171D27] border-orange-200 flex flex-col gap-3 items-center'
            >
                <Title>
                    <FaPlus
                        className='text-green-400'
                    />
                    New mirror
                </Title>
            </button>
            <BaseCard>
                <Title>
                    My mirrors
                </Title>
                <Description>
                    Manage your created mirrors here.
                </Description>
            </BaseCard>
        </Content>
    )
}