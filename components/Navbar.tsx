"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import CheckoutButton from "@/components/CheckoutButton";

// Definiera typ för produkter i kundvagnen
interface CartItem {
  name: string;
  price: number;
  imageUrl: string;
}

const Navbar: React.FC = () => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // State för kundvagnsprodukter

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  // Hämta kundvagnsprodukter från cookie
  useEffect(() => {
    const cartCookie = Cookies.get("cart"); // Hämtar cookien "cart"
    if (cartCookie) {
      try {
        const cartData = JSON.parse(cartCookie) as CartItem[];
        setCartItems(cartData); // Sätter kundvagnsprodukter från cookien till state
      } catch (error) {
        console.error("Failed to parse cart cookie:", error);
      }
    }
  }, []);

  // Funktion för att ta bort en produkt från kundvagnen
  const handleRemoveFromCart = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index); // Ta bort produkten med angivet index
    setCartItems(updatedCart);
    Cookies.set("cart", JSON.stringify(updatedCart)); // Uppdatera cookien med nya kundvagnen
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

          {/* Products dropdown */}
          <div className="relative group">
            <Link href={"/products"} className="peer">
              PRODUCTS
            </Link>

            {/* First submenu */}
            <div className="absolute top-full left-0 bg-primary_dark py-2 px-4 w-full shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 rounded-lg">
              <Link
                href={"/products/computer"}
                className="block py-1 text-black"
              >
                Computer
              </Link>

              {/* Phone with secondary submenu */}
              <div className="relative group/phone">
                <Link
                  href={"/products/phone"}
                  className="block py-1 text-black peer"
                >
                  Phone
                </Link>

                {/* Second submenu (only shows when hovering over Phone) */}
                <div className="absolute top-0 left-full bg-primary_dark py-2 px-4 w-[110%] shadow-lg opacity-0 group-hover/phone:opacity-100 pointer-events-none group-hover/phone:pointer-events-auto transition-opacity duration-300 rounded-lg">
                  <Link
                    href={"/products/iphone"}
                    className="block py-1 text-black"
                  >
                    iPhone
                  </Link>
                  <Link
                    href={"/products/samsung"}
                    className="block py-1 text-black"
                  >
                    Samsung
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
          alt="Cart"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={toggleCart}
        />
      </nav>

      {/* Cart dropdown */}
      {openCart && (
        <div className="fixed top-0 right-0 bg-primary_dark flex flex-col items-center w-[400px] h-full text-black z-50">
          <h1 className="text-4xl">Your Cart</h1>
          <div className="flex flex-col gap-4 p-4 w-full bg-gray-600 overflow-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="flex justify-around w-full">
                  <Image
                    src={item.imageUrl} // Länka till produktbild
                    alt={item.name}
                    width={150}
                    height={150}
                    className="bg-green-500 rounded-2xl"
                  />
                  <div className="flex flex-col gap-2 justify-between">
                    <h4 className="text-xl">{item.name}</h4>
                    <p className="text-xl">${item.price}</p>
                    <input
                      type="button"
                      value="Remove from cart"
                      className="bg-red-700 rounded-md cursor-pointer"
                      onClick={() => handleRemoveFromCart(index)} // Hantera borttagning
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">Your cart is empty.</p>
            )}
          </div>
          <div className="bottom-2 bg-blue-500 w-[110px] h-9 content-center text-center rounded-lg m-3">
            <CheckoutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
