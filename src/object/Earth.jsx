import useSpline from "@splinetool/r3f-spline";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Earth({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/uoFrcWBhxZfdD57T/scene.splinecode"
  );

  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });

  return (
    <>
      {/* <color attach="background" args={["#eaeaea"]} /> */}
      <group {...props} dispose={null}>
        <mesh
          name="Earth"
          geometry={nodes.Sphere.geometry}
          material={materials["Sphere Material"]}
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          rotation={[Math.PI, -1.1, Math.PI]}
          scale={0.8}
          ref={ref}
        />
      </group>
    </>
  );
}
