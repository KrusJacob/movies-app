"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Gallery from "./Gallery";

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 0] }}>
        <Suspense fallback={null}>
          <Gallery />
        </Suspense>
      </Canvas>
    </div>
  );
};
