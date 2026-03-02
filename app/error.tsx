"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
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
        Something went wrong
      </h1>

      <p className="mt-2 text-gray-600">
        {error.message}
      </p>

      <div className="flex gap-4 mt-6">

        <button
          onClick={() => reset()}
          className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Try Again
        </button>

        <Link href="/">
          <button className="bg-gray-600 text-white px-6 py-3 rounded-lg">
            Go Home
          </button>
        </Link>

      </div>

    </div>
  )
}