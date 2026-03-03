"use client"

export default function VideoHero() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-6">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-black">
        
        <video
          className="absolute inset-0 w-full h-full object-contain"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

      </div>
    </section>
  )
}