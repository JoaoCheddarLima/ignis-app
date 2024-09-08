export default function Title({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <div className='items-center flex gap-1 justify-center text-2xl text-center flex-wrap'>
            {children}
        </div>
    )
}