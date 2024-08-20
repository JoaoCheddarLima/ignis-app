'use client';

import { useContext } from 'react';

import { BaseSideBars } from '../components/baseBars';
import { UserAuthContext } from '../context/loggedUserProvider';
import Settings from './components/page';

export default function Home() {
    const {
        loaded
    } = useContext(UserAuthContext)
    return (
        <div className="flex w-full h-full">
            <BaseSideBars>
                <Settings />
            </BaseSideBars>
        </div>
    );
}
