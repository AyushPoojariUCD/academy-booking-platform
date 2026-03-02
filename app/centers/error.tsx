"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function CentersError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">

      <h1 className="text-4xl font-bold text-red-600">
        Error loading center
      </h1>

      <p className="text-gray-600 mt-2">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg"
      >
        Retry
      </button>

      <Link href="/centers">
        <button className="mt-4 bg-gray-600 text-white px-6 py-3 rounded-lg">
          Back to Centers
        </button>
      </Link>

    </div>
  )
}