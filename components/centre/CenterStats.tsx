import AnimatedCounter from "./AnimatedCounter"

export default function CenterStats({
  mentors,
  courts,
}: {
  mentors: number
  courts: number
}) {
  return (
    <div className="mt-24">

      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Excellence in Numbers
        </h2>
        <div className="w-16 h-1 bg-[#C9A14A] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Mentors Card */}
        <div className="group relative bg-black text-white rounded-2xl p-10 border border-gray-800 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A14A] hover:shadow-[0_15px_40px_rgba(201,161,74,0.25)] overflow-hidden">

          {/* Subtle gold glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C9A14A]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

          <p className="uppercase text-xs tracking-[0.3em] mb-4 text-gray-400">
            Mentors
          </p>

          <h2 className="text-6xl font-bold text-[#C9A14A]">
            <AnimatedCounter value={mentors} />
          </h2>

          <p className="mt-6 text-sm text-gray-300 max-w-xs">
            Renowned National and International Coaches.
          </p>
        </div>

        {/* Courts Card */}
        <div className="group relative bg-black text-white rounded-2xl p-10 border border-gray-800 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A14A] hover:shadow-[0_15px_40px_rgba(201,161,74,0.25)] overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-[#C9A14A]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

          <p className="uppercase text-xs tracking-[0.3em] mb-4 text-gray-400">
            Courts
          </p>

          <h2 className="text-6xl font-bold text-[#C9A14A]">
            <AnimatedCounter value={courts} />
          </h2>

          <p className="mt-6 text-sm text-gray-300 max-w-xs">
            High Quality Wooden Badminton Courts.
          </p>
        </div>

      </div>
    </div>
  )
}