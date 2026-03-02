// components/Footer.jsx

import React from "react"

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
          WE'RE PROUD TO BE THE BEST
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-6 tracking-wider">
              LOCATIONS —
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>Navi Mumbai, Maharashtra</li>
              <li>Pune, Maharashtra</li>
              <li>Jalandhar, Punjab</li>
              <li>Dibrugarh, Assam</li>
            </ul>
          </div>

          {/* Say Hello */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-6 tracking-wider">
              SAY HELLO —
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="mailto:info@dipankarbadmintonacademy.com"
                  className="border-b border-gray-500 hover:text-white"
                >
                  info@dipankarbadmintonacademy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919082229728"
                  className="border-b border-gray-500 hover:text-white"
                >
                  +91-90822 29728
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-6 tracking-wider">
              SOCIALS —
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-6 tracking-wider">
              FAQ —
            </h4>
            <p className="text-gray-300 hover:text-white cursor-pointer">
              Frequently Asked Questions
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-gray-400 text-sm">
          Dipankar Badminton Academy © 2026. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer