import React from "react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "CENTERS", href: "/centers" },
    { name: "BOOK", href: "/book" },
  ]

  return (
    <nav className="w-full bg-white border-b">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Dipankar Academy"
            className="h-12 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>


        {/* Center — Nav Links */}
        <div className="flex items-center gap-10">

          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="
                text-sm font-semibold text-gray-700
                hover:text-[#C9A14A]
                transition-colors duration-300
                relative group
              "
            >
              {link.name}

              {/* Golden underline hover */}
              <span className="
                absolute left-0 -bottom-1 w-0 h-[2px]
                bg-[#C9A14A]
                transition-all duration-300
                group-hover:w-full
              " />
            </a>
          ))}

        </div>


        {/* Right — Single Button */}
        <div>
          <Button
            className="
              bg-[#C9A14A]
              hover:bg-[#b8913f]
              text-white
              font-semibold
              px-6
              py-2
            "
          >
            Login / Sign In
          </Button>
        </div>


      </div>

    </nav>
  )
}

export default Navbar