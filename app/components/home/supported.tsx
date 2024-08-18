import Image from 'next/image';

export function Supported() {
    return (
        <div className="items-center flex flex-col py-10 border-b-2 border-[#141414]">
            <h1 className="text-base font-bold pb-4 text-gray-400"> OFICIALLY SUPPORTED APPS </h1>
            <div className="flex gap-4">
                <Image
                    alt="Discord"
                    src="/discord.svg"
                    width={32}
                    height={32}
                />
                {/* <Image
                    alt="Twitter"
                    src="/twitter.svg"
                    width={32}
                    height={32}
                /> */}
            </div>
        </div>
    );
}