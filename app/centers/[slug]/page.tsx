import { centers } from "@/data/centers"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return centers.map((center) => ({
    slug: center.slug,
  }))
}

export default async function CenterPage({ params }: Props) {

  const { slug } = await params   // ✅ unwrap params

  const center = centers.find(
    (c) => c.slug === slug
  )

  if (!center) return notFound()

  return (
    <section className="w-full">

      <div className="text-center py-8 px-4">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          The Center – A Legacy in Sports Excellence
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          {center.name}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-8 items-start">

          <Image
            src={center.image}
            alt={center.name}
            width={800}
            height={500}
            className="w-full h-[300px] md:h-[450px] object-cover rounded-lg"
          />

          <div>

            <p className="text-gray-600">
              {center.name}, located in {center.city}
            </p>

            <Link href={`/book/${center.slug}`}>
              <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg">
                Book Now
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}