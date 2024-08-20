export default function BaseCard({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className='border p-5 rounded-md bg-[#171d27] border-black w-full h-max'>
            {children}
        </div>
    )
}