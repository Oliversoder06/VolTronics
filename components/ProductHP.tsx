import Image from 'next/image'
import React from 'react'
import { products_sale, products_best, products_new } from '@/constants/products'

const ProductHP = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-col w-full items-start px-8'>
            <div className='flex justify-between w-full px-16'>
                <h3 className='text-3xl  mb-2'>{title}</h3>
                <h1 className='text-4xl'>...</h1>
            </div>
            <div className='flex justify-between w-full items-center'>
                <Image src='/icons/scroll-arrow.svg' width={20} height={20} alt='scroll-left' className='scale-x-[-1] cursor-pointer' />
                <div className='flex justify-between w-full px-2'>
                    {title === 'Up to 25% SALE' && products_sale.map((product) => (
                        <div key={product.id} className='flex flex-col items-center gap-2 border-black border-[1px]'>
                            <Image src='/images/product.jpg' width={200} height={200} alt='product' className='cursor-pointer' />
                            <h4 className='text-xl'>{product.name}</h4>
                            <p className='text-lg'>{product.price}€ <span className='line-through'>{product.price + product.discount}€</span></p>
                        </div>
                    ))}
                    {title === 'Our Best Sellers' && products_best.map((product) => (
                        <div key={product.id} className='flex flex-col items-center gap-2 border-black border-[1px]'>
                            <Image src='/images/product.jpg' width={200} height={200} alt='product' className='cursor-pointer' />
                            <h4 className='text-xl'>{product.name}</h4>
                            <p className='text-lg'>{product.price}€ <span className='line-through'>{product.price + product.discount}€</span></p>
                        </div>
                    ))}
                    {title === 'New Arrivals' && products_new.map((product) => (
                        <div key={product.id} className='flex flex-col items-center gap-2 border-black border-[1px]'>
                            <Image src='/images/product.jpg' width={200} height={200} alt='product' className='cursor-pointer' />
                            <h4 className='text-xl'>{product.name}</h4>
                            <p className='text-lg'>{product.price}€ <span className='line-through'>{product.price + product.discount}€</span></p>
                        </div>
                    ))}
                </div>
                <Image src='/icons/scroll-arrow.svg' width={20} height={20} alt='scroll-right' className='cursor-pointer' />
            </div>
        </div>
    )
}

export default ProductHP