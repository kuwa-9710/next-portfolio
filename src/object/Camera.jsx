import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "react-three-fiber";

export const Camera = () => {
  const cameraRef = useRef();
  const scrollRef = useRef(0);

  useFrame(() => {
    cameraRef.current.position.z = scrollRef.current * 0.01;
  });

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <PerspectiveCamera ref={cameraRef}/>; 
};
