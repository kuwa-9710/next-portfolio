import { useEffect, useRef } from "react";

export function Box() {
  const sceneRef = useRef();

  useEffect(() => {
    // scene
    const scene = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / window.innerHeight);
    const canvas = document.querySelector("#canvas");
    canvas.appendChild(renderer.domElement);

    // Object
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0fff });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    // ウィンドウサイズが変更されたときにThree.jsのカメラとレンダラーを更新する
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    sceneRef.current = scene;

    return () => {
      canvas.removeChild(renderer.domElement);
    };
  }, []);

  return null;
}
