import { DashboardButton } from '../dashboard';

export function MirrorPitch() {
    return (
        <div className="
        block gap-4 justify-center px-4 py-10 border-b-2 border-[#141414]
        lg:flex lg:justify-between
        ">
            <div className='lg:w-1/2'>
                <div className="flex flex-col gap-4">
                    <div className="text-5xl font-bold flex gap-2 flex-wrap">
                        <h1 className="text-blue-500">
                            Discord
                        </h1>
                        Mirror
                    </div>
                    <p className="text-sm text-gray-400">
                        Mirror multiple channels easy and fast 24/7 to your server with our Discord Mirror bot, have all information you need in one place now.
                    </p>
                </div>
                <div className='my-5'>
                    <DashboardButton label="Mirror a channel" />
                </div>
            </div>
            
            <img src="/reading.png" alt="happy_mirror_customer" className="hidden lg:block w-40" />
        </div>
    )
}