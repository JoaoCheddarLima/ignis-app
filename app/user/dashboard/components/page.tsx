import { useContext } from 'react';

import BaseCard from '@/app/components/cards/baseCard';
import Content from '@/app/components/page/content';
import { UserAuthContext } from '@/app/context/loggedUserProvider';

import Warning from './notification';

export default function DashboardData() {
    const {
        loaded,
        planExpired,
        userData
    } = useContext(UserAuthContext)

    return (
        loaded && (
            <Content>
                <BaseCard>
                    <div className='flex justify-center'>
                        Notifications
                    </div>
                    {
                        !userData?.api_key &&
                        <Warning
                            label='Discord API Key not set or expired'
                            level='warning'
                            refTo='/settings'
                            refType='internal'
                        />
                    }
                </BaseCard>
            </Content>
        )
    )
}