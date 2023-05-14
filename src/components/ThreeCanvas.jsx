import { Earth } from "@/object/Earth";
import { Satellite } from "@/object/Satellite";
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Camera } from "@/object/Camera";
import * as THREE from 'three';

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
          position: [30, -50, 400],
        }}
      >
        <Camera />
        <Satellite />
        <Earth />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={1.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[-50, 20, 20]}
          color={new THREE.Color(0xe0f2fe)} 
        />
        <ambientLight intensity={0.1} color={0xe0f2fe} />Ï
      </Canvas>
    </>
  );
}

function Scene() {
  const { viewport } = useThree();
  const cameraRef = useRef();
  
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
