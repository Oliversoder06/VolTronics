"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [openCart, setOpenCart] = useState(false);

    const toggleCart = () => {
        setOpenCart(!openCart);
    };

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
            <nav className="bg-primary_dark h-[100px] flex justify-between text-white items-center px-10 z-30">
                {/* Logo */}
                <Link href={"/"} className="text-5xl font-extrabold">
                    VolTronics
                </Link>

                {/* Navigation links */}
                <div className="flex text-4xl font-light gap-8">
                    <Link href={"/about"}>ABOUT</Link>
                    <div className="relative group">
                        <Link href={"/products"}>PRODUCTS</Link>
                        <div className="absolute top-full left-0 bg-white py-2 px-4 w-full shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                            <Link
                                href={"/products/computer"}
                                className="block py-1 text-black"
                            >
                                Computer
                            </Link>
                            <div className="relative group">
                                <Link
                                    href={"/products/phone"}
                                    className="block py-1 text-black"
                                >
                                    Phone
                                </Link>
                                <div className="absolute top-full bg-white py-2 px-4 w-full shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
                                    <Link
                                        href={"/products/iphone"}
                                        className="block py-1 text-black"
                                    >
                                        iphone
                                    </Link>
                                    <Link
                                        href={"/products/samsung"}
                                        className="block py-1 text-black"
                                    >
                                        samsung
                                    </Link>
                                </div>
                            </div>
                            <Link href={"/products/tv"} className="block py-1 text-black">
                                TV
                            </Link>
                        </div>
                    </div>
                    <Link href={"/contact"}>CONTACT</Link>
                </div>

                {/* Add to cart icon */}
                <Image
                    src="icons/cart.svg"
                    width={48}
                    height={48}
                    onClick={toggleCart}
                    alt="Shopping Cart"
                    className="cursor-pointer"
                />
            </nav>

            {/* Cart menu */}
            {openCart && (
                <div className="fixed top-0 right-0 bg-primary_light flex flex-col items-center w-[400px] h-screen text-black z-50">
                    <h1 className="text-xl">Cart</h1>
                </div>
            )}
        </div>
    );
};

export default Navbar;
