import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Satellite = () => {
  const satelliteRef = useRef();

  let radius = 3;
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
        <sphereGeometry args={[0.1, 64, 32]} />
        <meshNormalMaterial wireframe={true} />
      </mesh>
      ƒ
    </>
  );
};
