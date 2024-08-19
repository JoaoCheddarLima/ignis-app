import {
  createContext,
  useEffect,
  useState,
} from 'react';

import { API } from '../lib/api';
import { IUser } from '../types';

export const UserAuthContext = createContext({} as {
    userData: IUser;
    planExpired: boolean;
    loaded: boolean;
})

export default function UserAuthProvider({ children }: { children: React.ReactNode }) {
    const [userData, setUserData] = useState({} as IUser)
    const [planExpired, setPlanExpired] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if(loaded) return;

        API.getMe()
            .then((user) => {
                if (user) {
                    setUserData(user)
                    setPlanExpired(new Date(user.planExpiration).getMilliseconds() < Date.now())
                    setLoaded(true)
                } else {
                    return window.location.href = '/api/auth/signin';
                }
            })
    }, [loaded])

    return (
        <UserAuthContext.Provider value={{ userData, planExpired, loaded }}>
            {children}
        </UserAuthContext.Provider>
    )
}