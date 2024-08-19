import { getServerSession } from 'next-auth';
import {
  NextRequest,
  NextResponse,
} from 'next/server';

import { authOptions } from '@/app/lib';
import { UserHandler } from '@/app/lib/user';

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.redirect(process.env.BASE_WEBSITE_URL + '/api/auth/signin')
    }

    const userData = await UserHandler.getUser(session)

    return NextResponse.json(userData)
}