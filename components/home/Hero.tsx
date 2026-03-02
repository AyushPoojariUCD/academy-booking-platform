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
    <section className="w-full">

      <Carousel opts={{ loop: true }} className="w-full">

        <CarouselContent className="m-0">

          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="p-0">

              {/* Responsive Aspect Ratio Container */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6]">

                <img
                  src={slide.image}
                  alt="hero"
                  className="absolute inset-0 w-full h-full object-cover"
                />

              </div>

            </CarouselItem>
          ))}

        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="left-2 sm:left-4" />
        <CarouselNext className="right-2 sm:right-4" />

      </Carousel>

    </section>
  )
}