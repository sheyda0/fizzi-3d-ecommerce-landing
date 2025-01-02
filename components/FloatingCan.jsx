import { Float } from "@react-three/drei";
import { Can } from "./Can";
import { forwardRef } from "react";

const FloatingCan = forwardRef(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <Can flavor={flavor} />
        </Float>
      </group>
    );
  }
);

export default FloatingCan;
