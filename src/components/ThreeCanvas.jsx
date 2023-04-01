import { Earth } from "@/object/Earth";
import { Satellite } from "@/object/Satellite";
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";

export function ThreeCanvas(props) {
  return (
    <>
      <Canvas
        id="canvas"
        style={{
          width: 100 + "%",
          height: 100 + "vh",
        }}
        {...props}
        onResize={(e) => e.gl.setPixelRatio(window.devicePixelRatio)}
        camera={{
          position: [0, 0, 600],
          aspect: 100 + "%" / 100 + "%",
        }}
      >
        <Satellite />
        <Earth />
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
          position={[-50, 40, 50]}
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
