import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">

      <h1 className="text-6xl font-bold text-red-600">
        404
      </h1>

      <p className="mt-4 text-gray-600 text-lg">
        Page not found
      </p>

      <Link href="/">
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
          Go Home
        </button>
      </Link>

    </div>
  )
}