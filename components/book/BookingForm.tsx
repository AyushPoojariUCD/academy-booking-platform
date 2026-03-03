"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function BookingForm({ slug }: { slug: string }) {
  const router = useRouter()

  const [selectedDate, setSelectedDate] = useState("")
  const [selectedSlot, setSelectedSlot] = useState("")

  const pricePerHour = 500

  const timeSlots = [
    "06:00 AM - 07:00 AM",
    "07:00 AM - 08:00 AM",
    "08:00 AM - 09:00 AM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM",
  ]

  const handleContinue = () => {
    if (!selectedDate || !selectedSlot) return

    router.push(
      `/checkout?center=${slug}&date=${selectedDate}&slot=${selectedSlot}&price=${pricePerHour}`
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">

      {/* Date */}
      <div className="mb-8">
        <label className="block text-sm font-semibold mb-2">
          Select Date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C9A14A]"
        />
      </div>

      {/* Time Slots */}
      <div className="mb-10">
        <label className="block text-sm font-semibold mb-4">
          Select Time Slot
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`
                border rounded-lg px-4 py-3 text-sm font-medium transition
                ${
                  selectedSlot === slot
                    ? "bg-[#C9A14A] text-white border-[#C9A14A]"
                    : "hover:border-[#C9A14A]"
                }
              `}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg border">
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{pricePerHour}</span>
        </div>
      </div>

      {/* Button */}
      <button
        disabled={!selectedDate || !selectedSlot}
        onClick={handleContinue}
        className="w-full bg-black hover:bg-[#C9A14A] disabled:bg-gray-300 text-white py-3 rounded-lg transition"
      >
        Continue to Checkout
      </button>

    </div>
  )
}