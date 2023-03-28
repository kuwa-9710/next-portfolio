import { useRef } from "react";
import { useFrame } from "react-three-fiber";

export const Sphere = () => {
  const ref = useRef();
  useFrame(() => {
    // ref.current.rotation.x += 0.01;
    // ref.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh
        visible
        userData={{ hello: "world" }}
        position={[0, 0, 3]}
        rotation={[0, 0, 0]}
        ref={ref}
      >
        <sphereGeometry args={[1, 64, 32]} />
        <meshNormalMaterial color="hotpink" wireframe={true} />
      </mesh>
    </>
  );
};
