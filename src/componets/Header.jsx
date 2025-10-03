"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // install lucide-react if not already

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 fixed top-0">
      <div className="w-full mx-auto py-4 px-10 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-[3.4375rem] font-bold inspiration-regular">Z Fries</h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 px-8 font-medium">
          <li>
            <Link href="#about" scroll={false} className="hover:text-indigo-600">
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              scroll={false}
              className="hover:text-indigo-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col text-[18px] space-y-4 px-6 py-4 font-medium">
            <li>
              <Link
                href="#about"
                scroll={false}
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                scroll={false}
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
