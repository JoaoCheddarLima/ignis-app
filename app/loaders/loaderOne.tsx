import { CircularProgress } from '@mui/material';

export default function BaseLoader(
    {
        label,
        size = 32,
        direction = 'below'
    }: {
        label: string,
        size: number,
        direction?: 'below' | 'right' | 'left'
    }
) {
    return (
        direction === 'below' ?
            (
                <div className='flex flex-col items-center justify-center gap-2'>
                    {label}
                    <CircularProgress
                        size={size}
                    />
                </div>
            ) :
            direction === 'right' ?
                (
                    <div className='flex items-center justify-center gap-2'>
                        {label}
                        <CircularProgress
                            size={size}
                        />
                    </div>
                ) :
                (
                    <div className='flex items-center justify-center gap-2'>
                        <CircularProgress
                            size={size}
                        />
                        {label}
                    </div>
                )
    )
}