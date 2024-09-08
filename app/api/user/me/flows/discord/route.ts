import { getServerSession } from 'next-auth';
import {
  NextRequest,
  NextResponse,
} from 'next/server';

import { authOptions } from '@/app/lib';
import { DiscordFlow } from '@/app/models/discordFlow';
import {
  DiscordAutomationType,
  IFowardMessagesAutomation,
  IMirrorMessagesAutomation,
} from '@/app/types/discord_automation';

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.redirect(process.env.BASE_WEBSITE_URL + '/api/auth/signin')
    }

    const discordFlows = await DiscordFlow.find({
        user: session.user.name
    }).select({
        automationName: 1
    })

    return NextResponse.json(discordFlows.map(flow => flow.automationName))
}

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.redirect(process.env.BASE_WEBSITE_URL + '/api/auth/signin')
    }

    const body: {
        automationName: string,
        automationType: DiscordAutomationType,
        channels: IMirrorMessagesAutomation | IFowardMessagesAutomation
    } = await req.json()

    if (!body.automationName || !body.automationType) {
        return NextResponse.redirect(process.env.BASE_WEBSITE_URL + '/flows/discord')
    }

    const newFlow = new DiscordFlow({
        user: session.user.name,
        automationName: body.automationName,
        automationType: body.automationType,
        channels: body.channels
    })

    try {
        await newFlow.create({
            user: session.user.name,
            automationName: body.automationName,
            automationType: body.automationType,
            channels: body.channels
        })

        return NextResponse.json(await newFlow.findOne({
            user: session.user.name,
            automationName: body.automationName
        }).select({
            _id: 0,
            _v: 0
        }))
    } catch (err) {
        return NextResponse.json({
            error: err
        })
    }
}