export default function BaseCard({
    children,
    clickable
}: {
    children: React.ReactNode,
    clickable?: boolean
}) {
    return (
        <div className={`border p-5 rounded-md bg-[#171d27] ${clickable ? 'border-orange-200' : 'border-black'} w-full h-max`}>
            {children}
        </div>
    )
}