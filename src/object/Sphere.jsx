import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Sphere = () => {
  const ref = useRef();

  useFrame(() => {    
    ref.current.rotation.y += 0.005;
  });

  return (
    <>
      <mesh
        visible
        userData={{ hello: "world" }}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        ref={ref}
      >
        <sphereGeometry args={[1.5, 64, 32]} />
        <meshNormalMaterial color="skyblue" wireframe={true} />
      </mesh>
    </>
  );
};
