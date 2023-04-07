import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Satellite = () => {
  const satelliteRef = useRef();

  let radius = 200;
  let radian = 0;

  useFrame(() => {
    satelliteRef.current.position.x = radius * Math.cos(radian);
    satelliteRef.current.position.y = radius * Math.cos(radian);
    satelliteRef.current.position.z = radius * Math.sin(radian);
    radian += 0.01;    
  });

  return (
    <>
      <mesh
        visible
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        ref={satelliteRef}
      >
        <sphereGeometry args={[10, 64, 32]} />
        <meshStandardMaterial wireframe={false} />
      </mesh>
    </>
  );
};
