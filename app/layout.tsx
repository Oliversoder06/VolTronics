import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import AddProduct from "@/components/AddProduct";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VolTronics",
  description: "An ecommerce store for practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary_lightest`}>
        <Toaster />
        <Navbar />
        <div className="px-3 flex items-center">
          <AddProduct />
          <Breadcrumbs homeIcon={
            <>
              <Image src='/icons/home1.svg' alt='homeicon' className='block group-hover:hidden' width={16} height={16} />
              <Image src='/icons/home2.svg' alt='homeicon' className='hidden group-hover:block cursor-pointer' width={16} height={16} />
            </>
          } />
        </div>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
