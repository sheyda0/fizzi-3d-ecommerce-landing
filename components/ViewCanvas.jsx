"use client";

import { Canvas } from "@react-three/fiber";
import { Loader, View } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

const ViewCanvas = () => {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ fov: 30 }}
      >
        {/* <Perf /> */}
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default ViewCanvas;
