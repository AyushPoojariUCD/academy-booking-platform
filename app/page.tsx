import Hero from "@/components/home/Hero";
import SportsCenters from "@/components/home/SportsCentre";
import VideoHero from "@/components/home/VideoHero";
import { Video } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <SportsCenters />
      <VideoHero />
    </>
  );
}
