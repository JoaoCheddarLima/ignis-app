import Link from 'next/link';
import { IoMdInformationCircle } from 'react-icons/io';
import {
  IoAlertCircle,
  IoWarning,
} from 'react-icons/io5';

import ExitToApp from '@mui/icons-material/ExitToApp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Warning({
    label,
    level,
    refTo,
    refType
}: {
    label: string,
    level: 'info' | 'warning' | 'error',
    refTo: string,
    refType: 'external' | 'internal'
}) {
    return (
        <Link
            href={refTo}
            target={refType == 'external' ? '_blank' : ''}
            className={`w-full h-full flex justify-center items-center gap-1`}
        >
            <div className='hidden md:block'>
                {
                    level == 'info' && <IoMdInformationCircle className='text-2xl' />
                }
                {
                    level == 'warning' && <IoWarning className='text-yellow-500 text-2xl' />
                }
                {
                    level == 'error' && <IoAlertCircle className='text-red-500 text-2xl' />
                }
            </div>
            <div className={
                `text-center text-${level == 'info' ? 'white' : level == 'warning' ? 'yellow' : 'red'}-500`
            }>
                {label}
            </div>
            {
                refType == 'internal' && <ExitToApp className='text-white text-2xl' />
            }
            {
                refType == 'external' && <OpenInNewIcon className='text-white text-2xl' />
            }
        </Link>
    )
}