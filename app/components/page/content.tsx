export default function Content(
    {
        children
    }
) {
    return (
        <section className='flex flex-col gap-12 mx-auto w-3/4 py-10'>
            {children}
        </section>
    );
}