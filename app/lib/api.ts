import { Session } from 'next-auth';

import { IUser } from '../types';

export class API {
    private static readonly BASE_URL = '/api';

    private static async get<T>(path: string): Promise<T> {
        const response = await fetch(`${API.BASE_URL}${path}`);
        return response.json();
    }

    private static async post<T>(path: string, body: any): Promise<T> {
        const response = await fetch(`${API.BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        return response.json();
    }

    public static async getMe(data: Session): Promise<IUser | null> {
        return this.get('/user/me');
    }
}