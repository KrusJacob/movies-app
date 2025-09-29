"use client";
import React from "react";
import { useTexture } from "@react-three/drei";
import { IPoster } from "@/entities/movie";

const BaseView = ({ rotationY, data }: { rotationY: number; data: IPoster }) => {
  return (
    <group rotation={[0, rotationY, 0]}>
      <Picture img={data.img} />
    </group>
  );
};

const Picture = ({ img }: { img: string }) => {
  const texture = useTexture(img);

  return (
    <group position={[0, 0, -3.5]}>
      <mesh>
        <boxGeometry args={[2, 3.5, 0.1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh>
        <boxGeometry args={[2.05, 3.55, 0.09]} />
        <meshStandardMaterial color={"#6b6030"} />
      </mesh>
    </group>
  );
};

export default BaseView;
