"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [openCart, setOpenCart] = useState(false)

    const toggleCart = () => {
        setOpenCart(!openCart)
    }

    return (
        <div className="relative">
            {/* Overlay */}
            {openCart && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 z-40"
                    onClick={toggleCart} // Close cart when clicking on the overlay
                />
            )}

            {/* Navbar */}
            <nav className='bg-primary_dark h-[100px] flex justify-between text-white items-center px-10 z-30'>
                {/* Logo */}
                <Link href={"/"} className='text-5xl font-extrabold'>VolTronics</Link>

                {/* Navigation links */}
                <div className='flex text-4xl font-light gap-8'>
                    <Link href={"/about"}>ABOUT</Link>
                    <Link href={"/products"}>PRODUCTS</Link>
                    <Link href={"/contact"}>CONTACT</Link>
                </div>

                {/* Add to cart icon */}
                <Image
                    src='icons/cart.svg'
                    width={48}
                    height={48}
                    onClick={toggleCart}
                    alt='Shopping Cart'
                    className='cursor-pointer'
                />
            </nav>

            {/* Cart menu */}
            {openCart && (
                <div className='fixed top-0 right-0 bg-primary_light flex flex-col items-center w-[400px] h-screen text-black z-50'>
                    <h1 className='text-xl'>Cart</h1>
                </div>
            )}
        </div>
    )
}

export default Navbar
