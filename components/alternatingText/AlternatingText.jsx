"use client";

import { View } from "@react-three/drei";
import Bounded from "../Bounded";
import gsap from "gsap";
import AlternatingTextScene from "./AlternatingTextScene";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const texts = [
  {
    heading: "Gut-Friendly Goodness",
    body: "Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
  },
  {
    heading: "Light Calories, Big Flavor",
    body: "Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise.",
  },
  {
    heading: "Naturally Refreshing",
    body: "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It’s a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
  },
];

const AlternatingText = () => {
  const isDesktop = useMediaQuery("(min-width:768px)", true);

  return (
    <Bounded className="alternating-text-container relative text-sky-950 bg-yellow-300">
      <div>
        <div className="grid relative">
          {isDesktop && (
            <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
              <AlternatingTextScene />
            </View>
          )}

          {texts.map((text, index) => (
            <div
              key={text.heading}
              className="alternating-section grid h-[60vh] md:h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={
                  !isDesktop
                    ? "col-start-1"
                    : index % 2 === 0
                      ? "col-start-1"
                      : index % 2 !== 0
                        ? "col-start-2"
                        : ""
                }
              >
                <h2 className="text-balance text-6xl font-bold">
                  {text.heading}
                </h2>
                <div className="mt-4 text-xl">
                  <p>{text.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
