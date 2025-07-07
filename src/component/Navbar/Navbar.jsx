"use client";

import Image from "next/image";
import logo from "../../asstes/logo/logo.png";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="bg-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-8xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-black font-bold text-xl">
          <Image src={logo} alt="Logo" width={30} height={30} />
          FALCON
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-black transition">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-black transition">
              About
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 text-black text-xl">
          <Link href="/productcart">
            <HiOutlineShoppingCart
              size={22}
              className="hover:text-gray-600 transition"
            />
          </Link>
          <FaRegUser size={20} className="hover:text-gray-600 transition" />
        </div>
      </nav>
    </div>
  );
}
