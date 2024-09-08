export default function ModalCard({
    children,
    clickable
}: {
    children: React.ReactNode,
    clickable?: boolean
}) {
    return (
        <div className={`border p-5 rounded-md bg-[#171d27] ${clickable ? 'border-orange-200' : 'border-black'} md:w-2/4 h-2/4 mx-auto my-[10%]`}>
            {children}
        </div>
    )
}