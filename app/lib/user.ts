import { Session } from 'next-auth';

import { IUser } from '@/app/types';

import { User } from '../models';
import connectToDb from './db';

export class UserHandler {
    private static async connect() {
        await connectToDb();
    }

    private static async findAndParseUser(user: Session): Promise<IUser> {
        const parsedUser = await User.findOne({
            name: user.user?.name
        })
            .select({
                name: 1,
                isCustomer: 1,
                planExpiration: 1
            });

        return parsedUser;
    }

    public static async getUser(user: Session): Promise<IUser> {
        await UserHandler.connect();

        const exists = (await User.findOne({
            name: user.user?.name
        })) !== null;

        if (!exists) {
            await User.create({
                name: user.user?.name,
                isCustomer: false,
                mail: user.user?.email
            });
        }

        const dbUser = await this.findAndParseUser(user);

        return dbUser;
    }
}