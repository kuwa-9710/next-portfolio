import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Satellite = () => {
  const satelliteRef = useRef();

  let radius = 200;
  let radian = 0;

  useFrame(() => {
    satelliteRef.current.position.x = (radius * Math.cos(radian) + 100);
    satelliteRef.current.position.y = radius * Math.cos(radian);
    satelliteRef.current.position.z = radius * Math.sin(radian);
    radian += 0.01;    
    satelliteRef.current.rotation.y += 0.01;
  });

  const texture = useLoader(TextureLoader, "/moon.jpg")

  return (
    <>
      <mesh
        visible
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        ref={satelliteRef}
      >
        <sphereGeometry args={[10, 64, 32]} />
        <meshStandardMaterial map={texture} wireframe={false} />
      </mesh>
    </>
  );
};
