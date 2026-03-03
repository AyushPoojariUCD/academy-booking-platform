import Image from "next/image"
import Link from "next/link"
import { Center } from "@/data/centers"

export default function CenterHero({ center }: { center: Center }) {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* Image Section */}
      <div className="relative w-full h-[320px] md:h-[480px] group rounded-3xl overflow-hidden border border-gray-200 shadow-xl">

        {/* Image */}
        <Image
          src={center.image}
          alt={center.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />

        {/* City badge */}
        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold shadow">
          📍 {center.city}
        </div>
      </div>

      {/* Content Section */}
      <div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-lg">
          {center.description}
        </p>

        {/* Info Cards */}
        <div className="mt-10 space-y-4">

          <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-[#C9A14A] transition">
            <span className="text-[#C9A14A] text-xl">📍</span>
            <p className="text-gray-700 text-sm">{center.address}</p>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-[#C9A14A] transition">
            <span className="text-[#C9A14A] text-xl">📞</span>
            <p className="text-gray-700 text-sm">{center.phone}</p>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-[#C9A14A] transition">
            <span className="text-[#C9A14A] text-xl">🕒</span>
            <p className="text-gray-700 text-sm">{center.time}</p>
          </div>

        </div>

        {/* CTA */}
        <Link href={`/book/${center.slug}`}>
          <button className="mt-12 bg-black hover:bg-[#C9A14A] text-white px-12 py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-[0_10px_30px_rgba(201,161,74,0.3)] hover:-translate-y-1">
            Book Now
          </button>
        </Link>

      </div>
    </div>
  )
}