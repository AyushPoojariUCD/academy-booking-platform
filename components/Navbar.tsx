"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "CENTERS", href: "/centers" },
    { name: "BOOK", href: "/book" },
  ]

  return (
    <nav className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Dipankar Academy"
            className="h-12 object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-[#C9A14A] transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C9A14A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            className="
              bg-black
              hover:bg-[#C9A14A]
              text-white
              font-semibold
              px-6
              py-2
              transition-all duration-300
            "
          >
            Login / Sign In
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-gray-700 hover:text-[#C9A14A] transition"
              >
                {link.name}
              </Link>
            ))}

            <Button
              className="
                bg-black
                hover:bg-[#C9A14A]
                text-white
                font-semibold
                px-6
                py-2
                transition-all duration-300
              "
            >
              Login / Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar