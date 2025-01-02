import AlternatingText from "@/components/alternatingText/AlternatingText";
import BigText from "@/components/BigText";
import Carousel from "@/components/carousel/Carousel";
import Hero from "@/components/hero/Hero";
import SkyDrive from "@/components/skyDrive/SkyDrive";

export default function Home() {
  return (
    <>
      <Hero />
      <SkyDrive />
      <Carousel />
      <AlternatingText />
      <BigText />
    </>
  );
}
