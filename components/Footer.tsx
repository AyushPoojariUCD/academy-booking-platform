"use client"

import React, { useEffect, useState } from "react"

const text = "WE'RE PROUD TO BE THE BEST"

const Footer = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex(index + 1)
      }, 50)

      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        {/* Typing Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 tracking-tight text-center md:text-left">
          {displayedText}
          <span className="animate-pulse text-[#C9A14A]">|</span>
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-6 tracking-wider text-gray-400">
              LOCATIONS —
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-[#C9A14A] transition">
                Navi Mumbai, Maharashtra
              </li>
              <li className="hover:text-[#C9A14A] transition">
                Pune, Maharashtra
              </li>
              <li className="hover:text-[#C9A14A] transition">
                Jalandhar, Punjab
              </li>
              <li className="hover:text-[#C9A14A] transition">
                Dibrugarh, Assam
              </li>
            </ul>
          </div>

          {/* Say Hello */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-6 tracking-wider text-gray-400">
              SAY HELLO —
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="mailto:info@dipankarbadmintonacademy.com"
                  className="hover:text-[#C9A14A] transition border-b border-gray-700 hover:border-[#C9A14A]"
                >
                  info@dipankarbadmintonacademy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919082229728"
                  className="hover:text-[#C9A14A] transition border-b border-gray-700 hover:border-[#C9A14A]"
                >
                  +91-90822 29728
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-6 tracking-wider text-gray-400">
              SOCIALS —
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-[#C9A14A] transition cursor-pointer">
                Facebook
              </li>
              <li className="hover:text-[#C9A14A] transition cursor-pointer">
                Instagram
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-6 tracking-wider text-gray-400">
              FAQ —
            </h4>
            <p className="text-gray-300 hover:text-[#C9A14A] transition cursor-pointer">
              Frequently Asked Questions
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-gray-500 text-sm text-center md:text-left">
          Dipankar Badminton Academy © 2026. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer