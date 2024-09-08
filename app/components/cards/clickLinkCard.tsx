import Link from 'next/link';

import Description from '../text/description';

export default function ClickableLinkCard({
    children,
    refTo,
    description
}: {
    children: React.ReactNode,
    refTo: string,
    description?: string
}) {
    return (
        <Link
            href={refTo}
        >
            <div className='border p-5 rounded-md bg-[#171D27] border-orange-200 h-full flex flex-col gap-2 items-center'>
                <div className='flex flex-col gap-3 items-center'>
                    {children}
                </div>
                {
                    description &&
                    <Description>
                        {description}
                    </Description>
                }
            </div>
        </Link>
    )
}