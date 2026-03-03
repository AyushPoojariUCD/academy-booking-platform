"use client"

import { useParams } from "next/navigation"
import { centers } from "@/data/centers"
import { notFound } from "next/navigation"
import BookHero from "@/components/book/BookHero"
import BookingForm from "@/components/book/BookingForm"

export default function BookCenterPage() {
  const params = useParams()
  const slug = params.slug as string

  const center = centers.find((c) => c.slug === slug)
  if (!center) return notFound()

  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Hero */}
        <BookHero
          name={center.name}
          image={center.image}
          address={center.address}
          city={center.city}
        />

        {/* Booking Form */}
        <BookingForm slug={center.slug} />

      </div>
    </section>
  )
}