import Image from 'next/image'
import React from 'react'

const HPbox = () => {
    return (
        <div className='w-[1230px] h-[540px] rounded-[45px] bg-[#9BA0DE] flex justify-between items-center'>
            <div className='flex flex-col gap-5 pl-20'>
                <div>
                    <h1 className='text-black text-5xl font-normal'>Store for nerds</h1>
                    <p className='text-black text-4xl font-light'>shopping with joy</p>
                </div>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder='Search'
                        className='bg-primary_lightest w-[440px] h-[50px] rounded-full pr-5 pl-12'
                    />
                    <Image
                        src='/icons/search.svg'
                        alt='search'
                        width={48}
                        height={48}
                        className='absolute top-0 left-0'
                    />
                </div>
            </div>
            <div className='flex h-full w-full flex-col items-end justify-end pr-10'>
                <Image src='/images/GuyOnPC.png' alt='hero' width={280} height={360} className='scale-x-[-1]' />
            </div>
        </div>
    )
}

export default HPbox