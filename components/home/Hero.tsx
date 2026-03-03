import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Slide = {
  id: number
  image: string
}

const slides: Slide[] = [
  { id: 1, image: "/slides/slide-1.png" },
  { id: 2, image: "/slides/slide-1.png" },
  { id: 3, image: "/slides/slide-1.png" },
  { id: 4, image: "/slides/slide-1.png" },
]

export default function Hero() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-6">

      <Carousel
        opts={{ loop: true }}
        className="
          w-full
          rounded-2xl
          border border-gray-200
          shadow-md
          hover:shadow-[0_10px_40px_rgba(201,161,74,0.2)]
          transition-all duration-300
          overflow-hidden
        "
      >

        <CarouselContent className="m-0">

          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="p-0">

              <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6] overflow-hidden">

                <img
                  src={slide.image}
                  alt="hero"
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    transition-transform duration-700
                    hover:scale-105
                  "
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />

              </div>

            </CarouselItem>
          ))}

        </CarouselContent>

        {/* Styled Navigation */}
        <CarouselPrevious
          className="
            left-4
            bg-black/70
            text-white
            hover:bg-[#C9A14A]
            border-none
            transition
          "
        />

        <CarouselNext
          className="
            right-4
            bg-black/70
            text-white
            hover:bg-[#C9A14A]
            border-none
            transition
          "
        />

      </Carousel>

    </section>
  )
}