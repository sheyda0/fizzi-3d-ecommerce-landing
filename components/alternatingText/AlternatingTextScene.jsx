import { Environment } from "@react-three/drei";
import FloatingCan from "../FloatingCan";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const bgColors = ["#ffa6b5", "#e9cff6", "#cbef9a"];

const AlternatingTextScene = () => {
  const canRef = useRef(null);

  useGSAP(() => {
    if (!canRef.current) return;

    const sections = gsap.utils.toArray(".alternating-section");

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".alternating-text-view",
        endTrigger: ".alternating-text-container",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    sections.forEach((_, index) => {
      if (!canRef.current) return;
      if (index === 0) return;

      const isOdd = index % 2 !== 0;

      scrollTl
        .to(canRef.current.position, {
          x: isOdd ? "-1" : "1",
          ease: "circ.inOut",
          delay: 0.5,
        })
        .to(
          canRef.current.rotation,
          {
            y: isOdd ? "0.4" : "-0.4",
            ease: "back.inOut",
          },
          "<"
        )
        .to(".alternating-text-container", {
          backgroundColor: bgColors[index],
        });
    });
  });

  return (
    <group ref={canRef} position-x={1} rotation-y={-0.3}>
      <FloatingCan flavor="strawberryLemonade" />
      <Environment files="/hdrs/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
};

export default AlternatingTextScene;
