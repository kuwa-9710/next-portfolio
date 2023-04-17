import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

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

  useFrame(() => {
    updateCameraPosition();
  });

  return null;
}
