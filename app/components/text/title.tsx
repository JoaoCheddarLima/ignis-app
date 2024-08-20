export default function Title({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <div className='flex gap-1 justify-center text-2xl'>
            {children}
        </div>
    )
}