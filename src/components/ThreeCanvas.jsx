import { Box } from "@/object/Box";
import { Sphere } from "@/object/Sphere";
import React, { useRef, useEffect } from "react";
import { Canvas } from "react-three-fiber";

export function ThreeCanvas(props) {
  const canvasRef = useRef(null);

  return (
    <>
      <Canvas
        id="canvas"
        style={{
          width: 100 + "vw",
          height: 100 + "vh",
        }}
        {...props}
        // gl={{ canvas: canvasRef.current }}
        onResize={e => e.gl.setPixelRatio(window.devicePixelRatio)}
      >
        <Sphere />
        {/* three.js objects */}
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
      <perspectiveCamera ref={cameraRef} fov={75} near={0.1} far={1000} position={[0, 0, 5]} />
      <mesh>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}
