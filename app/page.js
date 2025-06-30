"use client";

import AlternatingText from "@/components/alternatingText/AlternatingText";
import BigText from "@/components/BigText";
import Carousel from "@/components/carousel/Carousel";
import Hero from "@/components/hero/Hero";
import SkyDrive from "@/components/skyDrive/SkyDrive";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      // Optional config
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Clean up
      lenis.destroy();
    };
  }, []);

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
