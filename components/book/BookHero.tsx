"use client"

type BookHeroProps = {
  name: string
  image: string
  address: string
  city: string
}

export default function BookHero({
  name,
  image,
  address,
  city,
}: BookHeroProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12">

      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Book at {name}
        </h1>
        <p className="text-sm md:text-lg text-gray-200">
          {address}
        </p>
        <p className="text-sm mt-2 text-[#C9A14A] font-medium">
          📍 {city}
        </p>
      </div>

    </div>
  )
}