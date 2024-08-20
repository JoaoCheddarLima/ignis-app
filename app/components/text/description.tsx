export default function Description({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <div className='text-xs text-gray-400 w-3/5 mx-auto text-center'>
            {children}
        </div>
    )
}