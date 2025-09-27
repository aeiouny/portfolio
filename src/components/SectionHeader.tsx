export const SectionHeader = ({
    title,
    label,
    description,
}: {
    title: string;
    label: string;
    description: string;
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest">{label}</p>
            </div>
            <h2 className="mt-6 font-calis text-3xl text-center">{title}</h2>
            <p className="mt-4 max-w-md mx-auto text-white/60 text-center">{description}</p>
        </>
    );
}