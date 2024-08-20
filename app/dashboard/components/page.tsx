import { useContext } from 'react';

import BaseCard from '@/app/components/cards/baseCard';
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
            <div className="w-full grid grid-cols-1 md:grid-cols-2 p-5 gap-12">
                <BaseCard>
                    <div className='flex justify-center'>
                        Notifications
                    </div>
                    <div>
                        {
                            !userData?.api_key &&
                            <Warning
                                label='Discord API Key not set or expired'
                                level='warning'
                                refTo='/settings'
                                refType='internal'
                            />
                        }
                    </div>
                </BaseCard>
            </div>
        )
    )
}