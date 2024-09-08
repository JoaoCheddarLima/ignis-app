'use client';

import {
  useEffect,
  useState,
} from 'react';

import { FaPlus } from 'react-icons/fa';

import BaseCard from '@/app/components/cards/baseCard';
import DiscordChannelSelectModal
  from '@/app/components/modals/discordChannelSelect';
import Content from '@/app/components/page/content';
import Description from '@/app/components/text/description';
import Title from '@/app/components/text/title';

export default function Home() {
    const [open, setOpen] = useState(false);
    const [openChannelSelect, setOpenChannelSelect] = useState(false);
    const [selectedServer, setSelectedServer] = useState(null);
    const [selectedChannel, setSelectedChannel] = useState(null);
    const [loading, setLoading] = useState(false);

    const [channelList, setChannelList] = useState([]);
    const [serverList, setServerList] = useState([]);

    const findServers = async () => {
        setLoading(true);
        const servers = await (await fetch('/api/discord/servers')).json();
        
        if(!open) return;

        setServerList(servers);
        setLoading(false);
    }

    const handleClose = () => {
        setOpen(false);
        setOpenChannelSelect(false);
        setSelectedServer(null);
        setSelectedChannel(null);
        setChannelList([]);
        setServerList([]);
    }

    useEffect(() => {
        if (!selectedServer) return;
        setOpen(false);
        setOpenChannelSelect(true);
    }, [selectedServer, selectedChannel]);

    useEffect(() => {

        return () => {
            handleClose();
        }
    }, []);

    return (
        <Content>
            <button
                className='mx-auto border p-5 rounded-md bg-[#171D27] border-orange-200 flex flex-col gap-3 items-center'
                onClick={
                    () => {
                        setOpen(true)
                        findServers();
                    }
                }
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



            <DiscordChannelSelectModal
                onClose={handleClose}
                open={open}
            >
                <Title>
                    Choose a server
                </Title>
                <Description>
                    The server where you wish to mirror messages from.
                </Description>
                <br />
                {
                    loading ? 'Loading...' :
                        serverList.map((server, i) => (
                            <button
                                key={i}
                                className='border p-5 rounded-md bg-[#171D27] border-orange-200 w-full'
                                onClick={() => setSelectedServer(server.id)}
                            >
                                {server.name}
                            </button>
                        ))
                }
            </DiscordChannelSelectModal>
        </Content>
    )
}