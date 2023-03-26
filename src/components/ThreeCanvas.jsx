import { Box } from "@/object/Box";
import React, { useRef, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

export function ThreeCanvas(props) {
  const canvasRef = useRef(null);

  return (
    <>
      <Canvas id="canvas" {...props} gl={{ canvas: canvasRef.current }}>
        <Box />
        {/* three.js objects */}
      </Canvas>
    </>
  );
}

// const [sizes, setSizes] = React.useState({
//   width: undefined,
//   height: undefined,
// });

// // Scene
// const scene = new THREE.Scene();

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   1000
// );
// camera.position.z = 5;

// // Renderer
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(window.devicePixelRatio);

// scene.add(box);

// console.log(scene);

// /* ブラウザのリサイズ操作
//      ----------------------------------------------------------------- */
// window.addEventListener("resize", () => {
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;

//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(window.devicePixelRatio);
// });

// const animate = () => {
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(animate);
// };

// animate();
