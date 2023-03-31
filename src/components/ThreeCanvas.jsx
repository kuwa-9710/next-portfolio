import { Box } from "@/object/Box";
import { Earth } from "@/object/Earth";
import { Satellite } from "@/object/Satellite";
import { Sphere } from "@/object/Sphere";
import { OrthographicCamera } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";

export function ThreeCanvas(props) {
  return (
    <>
      <Canvas
        id="canvas"
        style={{
          width: 100 + "vw",
          height: 100 + "vh",
        }}
        {...props}
        onResize={(e) => e.gl.setPixelRatio(window.devicePixelRatio)}
      >
        {/* <Sphere /> */}
        <Satellite />
        <Earth />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={1.11}
          far={100000}
          near={-100000}
          position={[-979.89, 127.89, 153.18]}
          rotation={[-0.7, -1.37, -0.69]}
          scale={1}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[-90, 50, 0]}
        />
      </Canvas>
    </>
  );
}

function Scene() {
  const { viewport } = useThree();
  const cameraRef = useRef();

  // ビューポートがリサイズされたときに呼ばれる関数
  const handleResize = () => {
    const aspect = viewport.width / viewport.height;
    cameraRef.current.aspect = aspect;
    cameraRef.current.updateProjectionMatrix();
  };

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        fov={75}
        near={0.1}
        far={1000}
        position={[0, 0, 5]}
      />
      <mesh>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}
