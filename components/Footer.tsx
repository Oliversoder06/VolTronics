import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full mt-20 bg-primary_dark flex justify-center'>
            <div className='h-[570px] px-20 w-full py-24 max-w-[1440px]'>
                <div className='h-full w-full flex justify-between'>
                    <div className='flex flex-col justify-between h-full'>
                        <h1 className='text-white text-5xl font-extrabold'>VolTronics</h1>
                        <p className='text-[#afafaf]'>©2024 VolTronics AB. All Rights reserved. <br />Organization number: 556471-4474.</p>
                        <div className='flex flex-col text-white underline text-xl'>
                            <Link href='' className=''>Terms of purchase</Link>
                            <Link href=''>Product categories</Link>
                            <Link href=''>Trademarks</Link>
                            <Link href=''>Cookie settings</Link>
                        </div>
                    </div>

                    <div className='text-white flex items-center h-full gap-20 text-xl'>
                        <div className='flex flex-col gap-4'>
                            <p>Customer Service</p>
                            <div className='flex flex-col text-white underline'>
                                <Link href=''>Customer Service</Link>
                                <Link href=''>Track you delivery</Link>
                                <Link href=''>Contact us</Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p>Customer Service</p>
                            <div className='flex flex-col text-white underline'>
                                <Link href=''>Customer Service</Link>
                                <Link href=''>Track you delivery</Link>
                                <Link href=''>Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer