import ArrowDown from '@/assets/icons/arrow-down.svg'

export const Hero = () => {
    return (
        <div className='py-32'>
            <div className="container">
                <div className='max-w-lg mx-auto'>
                    <h1 className='mt-8 tracking-wide font-calis text-3xl text-center'>Building Experiences that Last</h1>
                    <p className='mt-4 text-white/60 text-center'>Bridging design and engineering to deliver performant web solutions</p>
                </div>
                <div className='flex flex-col gap-4 mt-8 items-center'>
                    <button className='inline-flex items-center gap-2 px-6 h-12 border border-white/15 rounded-xl'>
                        <span className='font-semibold'>View My Work</span>
                        <ArrowDown className='size-4'/>
                    </button>
                    <button className='inline-flex items-center gap-2 px-6 h-12 border border-white rounded-xl bg-white text-gray-900'>
                        <span>👋</span>
                        <span className='font-semibold'>Let's Connect</span>
                    </button>
                </div>
            </div>
        </div>
    );
}