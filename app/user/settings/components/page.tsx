'use client';

import {
  useContext,
  useState,
} from 'react';

import toast from 'react-hot-toast';
import { IoWarning } from 'react-icons/io5';

import BaseCard from '@/app/components/cards/baseCard';
import Description from '@/app/components/text/description';
import Title from '@/app/components/text/title';
import { UserAuthContext } from '@/app/context/loggedUserProvider';
import { API } from '@/app/lib/api';
import Warning from '@/app/user/dashboard/components/notification';

export default function Settings() {
    const [api_key, setApiKey] = useState('')

    const {
        userData,
        loaded
    } = useContext(UserAuthContext)

    async function saveApiKey() {
        toast.promise(
            API.updateApiKey(api_key),
            {
                loading: 'Saving API Key...',
                success: 'API Key saved successfully',
                error: 'Failed to save API Key'
            }
        )
    }

    return (
        <div className="flex flex-col gap-12 mx-auto w-3/4 h-full py-10">
            <BaseCard>
                <Title>
                    Settings
                </Title>
                <Description>
                    Configure your preferences, setting and authentication details here.
                </Description>
            </BaseCard>
            <BaseCard>
                <div className='flex flex-col justify-center gap-3'>
                    <div className='flex gap-2 items-center justify-center'>
                        <Title>
                            <h1 className='text-blue-500'>
                                Discord
                            </h1>
                            API Key
                        </Title>
                    </div>
                    <Description>
                        Your discord account API key for making mirrors/sending automated messages on your behalf.
                    </Description>
                    <div className='flex justify-center text-sm items-center gap-2'>
                        {
                            !userData.api_key && (
                                <IoWarning className='text-yellow-500 text-2xl' />
                            )
                        }
                        <form className='flex gap-1'>
                            <input
                                onChange={(e) => setApiKey(e.target.value)}
                                type='password'
                                placeholder={`${userData.api_key ? 'Change API Key' : 'Paste API Key'}`}
                                className='px-2 border border-gray-300 rounded-md text-black' />
                            <button
                                onClick={saveApiKey}
                                className='bg-blue-500 text-white p-2 rounded-md'
                            >
                                Save
                            </button>
                        </form>
                    </div>
                    <Warning 
                        label='Tutorial'
                        level='info'
                        refTo='https://www.youtube.com/watch?v=riYk0PDJm6w'
                        refType='external'
                    />
                </div>
            </BaseCard>
        </div>
    );
}
