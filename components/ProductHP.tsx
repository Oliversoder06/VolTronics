import React from 'react'

const ProductHP = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-col w-full items-start px-8'>
            <div className='flex justify-between w-full px-16'>
                <h3 className='text-3xl  mb-2'>{title}</h3>
                <h1 className='text-4xl'>...</h1>
            </div>
            <div className='flex justify-between w-full items-center'>
                <p className='mr-5'>arrow</p>
                <div className='flex justify-between w-full'>
                    <div className='bg-black size-[270px] text-white flex items-center justify-center text-3xl'>Product</div>
                    <div className='bg-black size-[270px] text-white flex items-center justify-center text-3xl'>Product</div>
                    <div className='bg-black size-[270px] text-white flex items-center justify-center text-3xl'>Product</div>
                    <div className='bg-black size-[270px] text-white flex items-center justify-center text-3xl'>Product</div>
                </div>
                <p className='ml-5'>arrow</p>
            </div>
        </div>
    )
}

export default ProductHP