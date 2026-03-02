import Link from "next/link"

export default function CenterNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">

      <h1 className="text-5xl font-bold text-red-600">
        Center Not Found
      </h1>

      <p className="mt-4 text-gray-600">
        This badminton center does not exist.
      </p>

      <Link href="/centers">
        <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg">
          View All Centers
        </button>
      </Link>

    </div>
  )
}