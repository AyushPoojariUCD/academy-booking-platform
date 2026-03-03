"use client"

import Link from "next/link"
import { centers } from "@/data/centers"
import { useEffect, useState } from "react"


const title = "Our Sports Centers"

export default function CentersPage() {

    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
      if (index < title.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + title[index])
          setIndex(index + 1)
        }, 60)
  
        return () => clearTimeout(timeout)
      }
    }, [index])

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold mb-12 text-center">
            {text}
            <span className="animate-pulse text-[#C9A14A]">|</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {centers.map((center) => (
            <div
              key={center.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#C9A14A] transition-all duration-300 overflow-hidden"
            >
              <Link href={`/centers/${center.slug}`}>
                <img
                  src={center.image}
                  alt={center.name}
                  className="w-full h-60 object-cover"
                />
              </Link>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {center.name}
                </h3>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {center.address}
                </p>

                <Link href={`/centers/${center.slug}`}>
                  <button className="bg-black hover:bg-[#C9A14A] text-white px-6 py-2 rounded-lg transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}