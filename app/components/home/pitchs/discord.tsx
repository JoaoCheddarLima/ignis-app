import { DashboardButton } from '../dashboard';

export function DiscordPitch() {
    return (
        <div className="flex gap-4 justify-between px-4 py-10 border-b-2 border-[#141414]">
            <div>
                <div className="flex flex-col gap-4 w-1/2">
                    <h1 className="text-5xl font-bold flex gap-2 flex-wrap">
                        <h1 className="text-blue-500">
                            Discord
                        </h1>
                        Smart Account
                    </h1>
                    <p className="text-sm text-gray-400">
                        Stop repeating yourself, turn your account into a smart account with our Discord services, and save time for more important tasks,
                        send messages to multiple servers, and channels with a single click!
                    </p>
                </div>
                <div className='my-5'>
                    <DashboardButton label="Start now" />
                </div>
            </div>
            <img src="/satisfied.png" alt="happy_customer" className="w-[20%]" />
        </div>
    )
}