import Link from 'next/link';

import ExitToApp from '@mui/icons-material/ExitToApp';

export function DashboardButton(
    {
        label = 'Get started'
    }:
        {
            label?: string
        }
) {
    return (
        <Link href="/user/dashboard" className='flex gap-1 items-center px-4 py-1 rounded-md bg-blue-600 w-fit'>
            {label}
            <ExitToApp />
        </Link>
    )
}