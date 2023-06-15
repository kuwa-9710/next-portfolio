import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

export function Camera(props) {
  const { camera } = useThree();
  const width = useRef(window.innerWidth);

  const updateCameraPosition = () => {
    const newWidth = window.innerWidth;
    if (newWidth !== width.current) {
      width.current = newWidth;
      if (newWidth < 768) {
        camera.position.set(30, -50, 400);
      } else if (newWidth < 1024) {
        camera.position.set(0, 0, 500);
      } else {
        camera.position.set(30, -50, 400);
      }
      camera.updateProjectionMatrix();
    }
  };

  const orbitCenter = new Vector3(150, 0, 0); // 中心位置
  const radius = 400; // 周回半径
  const angleSpeed = 0.2; // 周回速度Ï

  useFrame(() => {
    updateCameraPosition();

    const theta = angleSpeed * performance.now() * 0.001; // 現在の時間に基づく角度
    const x = orbitCenter.x + radius * Math.cos(theta);
    const y = orbitCenter.y + radius * Math.cos(theta);
    const z = orbitCenter.z + radius * Math.sin(theta);
    camera.position.set(x, y, z);
    camera.lookAt(orbitCenter);
  });

  return null;
}
