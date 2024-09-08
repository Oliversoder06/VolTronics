import Image from 'next/image'
import React from 'react'

const Itempage = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col items-center w-full max-w-[1440px]'>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='w-full bg-primary_light h-[2px]' />
                    <div>
                        <h1 className='text-[40px] font-semibold'>Model Name</h1>
                        <div className='flex items-center gap-3'>
                            <span className='font-[16px] text-[#a0a0a0]'>Product code 583682</span>
                            <div className='flex gap-[2px]'>
                                <Image src='/icons/full-star.svg' width={16} height={16} alt='Rating' className='cursor-pointer' />
                                <Image src='/icons/full-star.svg' width={16} height={16} alt='Rating' className='cursor-pointer' />
                                <Image src='/icons/full-star.svg' width={16} height={16} alt='Rating' className='cursor-pointer' />
                                <Image src='/icons/half-star.svg' width={16} height={16} alt='Rating' className='cursor-pointer' />
                                <Image src='/icons/empty-star.svg' width={16} height={16} alt='Rating' className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-primary_light h-[2px]' />
                </div>

                <div className='flex justify-between w-full px-12 mt-[50px]'>
                    <div className='flex flex-col gap-4 justify-center'>
                        <div className='size-[120px] border-primary_light border-[2px] rounded-sm' />
                        <div className='size-[120px] border-primary_light border-[2px] rounded-sm' />
                        <div className='size-[120px] border-primary_light border-[2px] rounded-sm' />
                        <div className='size-[120px] border-primary_light border-[2px] rounded-sm' />
                    </div>
                    <div className='flex gap-4'>
                        <Image src='/icons/scroll-arrow.svg' width={20} height={20} alt='scroll-left' className='scale-x-[-1] cursor-pointer' />
                        <div className='h-[660px] w-[500px] border-black border-[2px]
                        flex items-center justify-center
                        '>
                            <h1 className='text-[36px]'>INSERT IMAGE HERE</h1>
                        </div>
                        <Image src='/icons/scroll-arrow.svg' width={20} height={20} alt='scroll-left' className='cursor-pointer' />
                    </div>
                    <div className='flex flex-col gap-10 mt-10'>
                        <div>
                            <p className='text-[16px] text-black'>Color: <span className='font-bold'>Midnight</span></p>
                            <div className='w-[360px] h-[70px] border-primary_light border-[2px] rounded-sm flex justify-between items-center px-[16px] select-none cursor-pointer'>
                                <p className='text-[16px] text-black'>Midnight</p>
                                <p>V</p>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-[16px] text-black'>Internal storage space <span className='text-[#777777]'>(GB):</span> <span className='font-bold'>128</span></p>
                            <div className='flex justify-between select-none'>
                                <div className='w-[175px] h-[70px] border-primary_dark border-[2px] rounded-sm flex justify-center items-center px-[16px] cursor-pointer'>
                                    <p className='text-[20px] text-black'>128</p>
                                </div>
                                <div className='w-[175px] h-[70px] border-primary_light border-[2px] rounded-sm flex justify-center items-center px-[16px] cursor-pointer'>
                                    <p className='text-[20px] text-[#777777]'>256</p>
                                </div>
                            </div>
                        </div>

                        <p className='text-[16px] text-black'>Model name: <span className='font-bold'>[MODEL NAME]</span></p>

                        <button className='w-[400px] h-[70px] rounded-full bg-primary_dark'>
                            <p className='text-[20px] text-white'>Add to cart</p>
                        </button>
                    </div>
                </div>
                <div className='flex justify-between w-full mt-16'>
                    <div className='w-[650px]'>
                        <h3 className='text-[24px] font-semibold'>About the product</h3>
                        <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates consequuntur, beatae eligendi commodi asperiores, quas magni qui rem, quis suscipit architecto adipisci minus sapiente nisi dolore aperiam cum aliquid!</p>

                        <p className='text-black underline cursor-pointer'>Read more about the product</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-[24px] font-semibold'>Technical specification</h3>
                        <p className='text-[#777777]'>69” Super Deluxe display</p>
                        <div className='w-[500px] bg-primary_light h-[2px]' />
                        <p className='text-[#777777]'>69” Super Deluxe display</p>
                        <div className='w-[500px] bg-primary_light h-[2px]' />
                        <p className='text-[#777777]'>69” Super Deluxe display</p>
                        <div className='w-[500px] bg-primary_light h-[2px]' />
                        <p className='text-[#777777]'>69” Super Deluxe display</p>
                        <div className='w-[500px] bg-primary_light h-[2px]' />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Itempage