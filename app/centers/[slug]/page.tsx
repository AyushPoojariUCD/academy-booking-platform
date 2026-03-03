import { centers } from "@/data/centers"
import { notFound } from "next/navigation"
import CenterHeader from "@/components/centre/CenterHeader"
import CenterHero from "@/components/centre/CenterHero"
import CenterStats from "@/components/centre/CenterStats"

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
  const { slug } = await params

  const center = centers.find((c) => c.slug === slug)
  if (!center) return notFound()

  return (
    <section className="w-full bg-white">

      <CenterHeader name={center.name} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        <CenterHero center={center} />
        <CenterStats mentors={center.mentors} courts={center.courts} />
      </div>

    </section>
  )
}