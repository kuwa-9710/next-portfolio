export const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
      <meshStandardMaterial></meshStandardMaterial>
    </mesh>
  );
}