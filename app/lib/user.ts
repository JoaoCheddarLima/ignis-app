import {
  IUser,
  User,
} from '../models';
import connectToDb from './db';

export class UserHandler {
    private static async connect() {
        await connectToDb();
    }

    public static async getUser(user: IUser): Promise<IUser> {
        await UserHandler.connect();

        const exists = (await User.findOne({
            name: user.name
        })) !== null;

        if (!exists) {
            await User.create({ ...user });
        }

        const dbUser = await User.findOne({
            name: user.name
        });

        return dbUser;
    }
}