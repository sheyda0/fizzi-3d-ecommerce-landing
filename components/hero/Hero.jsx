"use client";

import Image from "next/image";
import Bounded from "../Bounded";
import Button from "../Button";
import TextSplitter from "../TextSplitter";

import { View } from "@react-three/drei";
import { Bubbles } from "../Bubbles";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import HeroScene from "./HeroScene";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width:768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8"
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#FDE047",
          },
          {
            backgroundColor: "#D9F99D",
            overwrite: "auto",
          },
          1
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] }
  );

  return (
    <Bounded className="hero opacity-0">
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <HeroScene />
          <Bubbles count={300} speed={2} opacity={0.3} />
        </View>
      )}
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text="live gutsy"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950j lg:text-6xl">
              Soda Perfected
            </div>
            <div className="hero-body text-2xl font-mono text-sky-950">
              3-5g sugar. 9g fiber.5 delicious flavors.
            </div>
            <Button
              buttonLink="/"
              buttonText="SHOP NOW"
              className="hero-button mt-12"
            />
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src="/images/all-cans-bunched.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full md:hidden"
          />
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-bold uppercase text-sky-950 lg:text-8xl">
              <TextSplitter text="Try all five flavors" />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
              Our soda is made with real fruit juice and a touch of cane sugar.
              We never use artificial sweeteners or high fructose corn syrup.
              Try all five flavors and find your favorite!
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
