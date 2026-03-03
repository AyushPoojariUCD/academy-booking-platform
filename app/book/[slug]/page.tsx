"use client"

import { useParams } from "next/navigation"
import { centers } from "@/data/centers"
import { notFound } from "next/navigation"
import BookingForm from "@/components/book/BookingForm"

export default function BookCenterPage() {
  const params = useParams()
  const slug = params.slug as string

  const center = centers.find((c) => c.slug === slug)
  if (!center) return notFound()

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">

      <div className="max-w-7xl mx-auto">

        {/* ===== TOP HEADING ===== */}
        <div className="text-center mb-16">

          <div className="relative inline-block group">
            <h2 className="text-xs tracking-[0.35em] uppercase text-gray-400 transition-colors duration-300 group-hover:text-[#C9A14A]">
              Book Your Court At
            </h2>

            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-[2px] bg-[#C9A14A] transition-all duration-300 group-hover:w-full" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 tracking-tight">
            {center.name}

          </h1>

          <p className="mt-4 inline-block px-5 py-2 rounded-full 
  border border-gray-300 
  text-sm font-medium text-gray-700 
  transition-all duration-300 
  hover:border-[#C9A14A]">
  {center.city} - {center.address}
</p>

        </div>

        {/* ===== MAIN CARD ===== */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="p-12 space-y-10">

              {/* Image */}
              <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                <img
                  src={center.image}
                  alt={center.name}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info Block */}
              <div>

                <h2 className="text-2xl font-bold mb-6 tracking-tight">
                  Secure Your Court
                </h2>

                <p className="text-gray-600 leading-relaxed text-base">
                  Choose your preferred date and time slot to enjoy a premium
                  badminton experience at <span className="font-semibold">{center.name}</span>.
                  Fast booking, instant confirmation, and seamless checkout.
                </p>

                <div className="mt-8 space-y-3 text-gray-700 text-sm">
                  <p>✔ Premium Wooden Flooring</p>
                  <p>✔ Professional Coaching Available</p>
                  <p>✔ Flexible Slot Timing</p>
                  <p>✔ Secure Online Booking</p>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="bg-gray-50 p-12 border-l border-gray-100">
              <BookingForm slug={center.slug} />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}