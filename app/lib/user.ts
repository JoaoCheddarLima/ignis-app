import { Session } from 'next-auth';

import { IUserResponse } from '@/app/types';

import { User } from '../models';
import connectToDb from './db';

export class UserHandler {
    private static async connect() {
        await connectToDb();
    }

    private static async findAndParseUser(user: Session): Promise<IUserResponse> {
        const parsedUser = (await User.findOne({
            name: user.user?.name
        }).select({
            _id: 0,
            __v: 0
        })).toObject();

        const res: IUserResponse = {
            ...parsedUser,
            api_key: parsedUser.api_key !== null
        }

        return res;
    }

    public static async getUser(user: Session): Promise<IUserResponse> {
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

        return await this.findAndParseUser(user);;
    }

    public static async updateApiKey(user: Session, data: {
        discordApiKey: string
    }): Promise<IUserResponse> {
        await UserHandler.connect();

        await this.getUser(user);

        await User
            .updateOne(
                {
                    name: user.user?.name
                },
                {
                    api_key: data.discordApiKey
                }
            );

        return await this.findAndParseUser(user);
    }
}