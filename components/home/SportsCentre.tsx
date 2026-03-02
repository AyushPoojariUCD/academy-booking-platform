"use client"

import Link from "next/link"

export type Center = {
  id: number
  slug: string
  name: string
  image: string
  address: string
  city: string
  sport: string
  phone: string
  time: string
}

export const centers: Center[] = [
  {
    id: 1,
    slug: "dibrugarh",
    name: "Upper Assam Shuttlers Academy Arena",
    image: "/centers/assam.png",
    address:
      "Upper Assam Shuttlers Academy Arena, Udoipur, Rajabhata, Under Godapani Flyover, Dibrugarh, Assam – 786007, India",
    city: "Dibrugarh",
    sport: "Badminton",
    phone: "+91 9082229728",
    time: "05:00 AM to 11:00 PM",
  },
  {
    id: 2,
    slug: "jalandhar",
    name: "Dipankar Badminton Academy Jalandhar",
    image: "/centers/jalandhar.webp",
    address:
      "Civil Lines, Jalandhar Cantt, Jandiala Road, Jalandhar, Punjab – 144002, India",
    city: "Jalandhar",
    sport: "Badminton",
    phone: "+91 9082229728",
    time: "05:00 AM to 11:00 PM",
  },
  {
    id: 3,
    slug: "pune",
    name: "Dipankar Badminton Academy Pune",
    image: "/centers/pune.jpeg",
    address:
      "S.No. 295/1A, Nimbalkar Nagar, Lane No. 3, D.Y. Patil College Road, Opposite Zepto Warehouse, Lohegaon, Pune – 411047, India",
    city: "Pune",
    sport: "Badminton",
    phone: "+91 9082229728, +91 8956977122",
    time: "05:00 AM to 11:00 PM",
  },
  {
    id: 4,
    slug: "navi-mumbai",
    name: "Dipankar Badminton Academy Navi Mumbai",
    image: "/centers/navi-mumbai.jpg",
    address:
      "Ramsheth Thakur International Sports Complex, Sector 19A, Ulwe, Navi Mumbai, Maharashtra – 410026, India",
    city: "Navi Mumbai",
    sport: "Badminton",
    phone: "+91 9082229728",
    time: "05:00 AM to 11:00 PM",
  },
]

export default function SportsCenters() {
  return (
    <section className="w-full py-12 bg-gray-50">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-sm tracking-[0.25em] text-[#C9A14A] font-semibold mb-3">
            OUR CENTERS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            SPORTS CENTERS
          </h2>

        </div>


        {/* Cards */}
        <div className="flex flex-col gap-6">
          {centers.map((center) => (

  <div
    key={center.id}
    className="
      flex flex-col sm:flex-row
      bg-white
      rounded-xl
      shadow-sm
      hover:shadow-lg
      transition-all duration-300
      overflow-hidden
    "
  >

    {/* Image Link */}
    <Link
      href={`/centers/${center.slug}`}
      className="w-full sm:w-44 md:w-52 h-48 sm:h-auto flex-shrink-0 block"
    >
      <img
        src={center.image}
        alt={center.name}
        className="w-full h-full object-cover hover:scale-105 transition"
      />
    </Link>


    {/* Content */}
    <div className="flex flex-col flex-1 p-5 justify-between">

      <div>

        {/* Title Link */}
        <Link href={`/centers/${center.slug}`}>
          <h3 className="font-semibold text-lg md:text-xl hover:text-[#C9A14A] transition cursor-pointer">
            {center.name}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {center.address}
        </p>

        <div className="text-sm text-gray-500 mt-2">
          📍 {center.city}
          <span className="mx-2">|</span>
          🏸 {center.sport}
        </div>

        <div className="text-sm text-gray-500 mt-1">
          📞 {center.phone}
        </div>

        <div className="text-sm text-gray-500 mt-1">
          🕒 {center.time}
        </div>

      </div>


      {/* Book Button Link */}
      <div className="mt-4 sm:mt-0 sm:self-end">

        <Link href={`/centers/${center.slug}`}>

          <button className="
            bg-red-600
            hover:bg-red-700
            text-white
            px-6 py-2
            rounded-lg
            text-sm
            font-medium
            transition
          ">
            Book now
          </button>

        </Link>

      </div>

    </div>

  </div>

))}

        </div>

      </div>

    </section>
  )
}