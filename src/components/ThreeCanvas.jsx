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
      >
        <Sphere />
        {/* three.js objects */}
      </Canvas>
    </>
  );
}
