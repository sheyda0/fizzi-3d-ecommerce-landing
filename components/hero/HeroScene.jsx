import { useRef } from "react";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingCan from "../FloatingCan";
import { useStore } from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroScene = () => {
  const can1Ref = useRef();
  const can2Ref = useRef();
  const can3Ref = useRef();
  const can4Ref = useRef();
  const can5Ref = useRef();

  const can1GroupRef = useRef();
  const can2GroupRef = useRef();

  const groupRef = useRef();

  const FLOAT_SPEED = 1.5;

  const isReady = useStore((state) => state.isReady);

  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    isReady(true);

    // Set cans starting location
    gsap.set(can1Ref.current.position, { x: -1.5 });
    gsap.set(can1Ref.current.rotation, { z: -0.5 });

    gsap.set(can2Ref.current.position, { x: 1.5 });
    gsap.set(can2Ref.current.rotation, { z: 0.5 });

    gsap.set(can3Ref.current.position, { y: 5, z: 2 });
    gsap.set(can4Ref.current.position, { x: 2, y: 4, z: 2 });
    gsap.set(can5Ref.current.position, { y: -5 });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    if (window.scrollY < 20) {
      introTl
        .from(can1GroupRef.current.position, { y: -5, x: 1 }, 0)
        .from(can1GroupRef.current.position, { z: 3 }, 0)
        .from(can2GroupRef.current.position, { y: 5, x: 1 }, 0)
        .from(can2GroupRef.current.position, { z: 3 }, 0);
    }

    const scrollTl = gsap.timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      // Rotate can group
      .to(groupRef.current.rotation, { y: Math.PI * 2 })
      // Can 1 - black cherry
      .to(can1Ref.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      .to(can1Ref.current.rotation, { z: 0.3 }, 0)
      // Can 2 - lemon lime
      .to(can2Ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      .to(can2Ref.current.rotation, { z: 0 }, 0)
      // Can 3 - grape
      .to(can3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      .to(can3Ref.current.rotation, { z: -0.1 }, 0)
      // Can 4 - strawberry lemonade
      .to(can4Ref.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
      .to(can4Ref.current.rotation, { z: 0.3 }, 0)
      // Can 5 - watermelon
      .to(can5Ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      .to(can5Ref.current.rotation, { z: -0.25 }, 0)
      // Transform can group
      .to(
        groupRef.current.position,
        { x: 1, duration: 3, ease: "sine.inOut" },
        1.3
      );
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2Ref}
          flavor="lemonLime"
          floatSpeed={FLOAT_SPEED}
        />{" "}
      </group>
      <FloatingCan ref={can3Ref} flavor="grape" floatSpeed={FLOAT_SPEED} />{" "}
      <FloatingCan
        ref={can4Ref}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
      />
      <FloatingCan ref={can5Ref} flavor="watermelon" floatSpeed={FLOAT_SPEED} />
      <Environment files="/hdrs/field.hdr" environmentIntensity={1.5} />
    </group>
  );
};

export default HeroScene;
