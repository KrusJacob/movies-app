"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Object3DEventMap } from "three";
import BaseView from "./BaseView";
import { IPoster } from "@/entities/movie";

const POSTER_DATA: IPoster[] = [
  { img: "posters/1+1.jpg" },
  { img: "posters/iron_man.jpg" },
  { img: "posters/the_dark_knight.jpg" },
  { img: "posters/the_godfather.jpg" },
  { img: "posters/avengers.jpg" },
  { img: "posters/interstellar.jpg" },
  { img: "posters/green_book.jpg" },
  { img: "posters/matrix.jpg" },
];

const Gallery = () => {
  const count = POSTER_DATA.length;
  const groupRef = useRef<Group<Object3DEventMap>>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0012;
  });

  return (
    <>
      <group ref={groupRef}>
        {POSTER_DATA.map((item, index) => (
          <BaseView key={index} rotationY={(index * (2 * Math.PI)) / count} data={item} />
        ))}
      </group>

      <spotLight
        position={[0, 0, 5]}
        distance={0}
        penumbra={0.8}
        angle={Math.PI / 7.5}
        color="0xffffff"
        intensity={100}
      />
    </>
  );
};

export default Gallery;
