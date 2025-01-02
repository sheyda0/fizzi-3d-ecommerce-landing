import { flavorTextures } from "@/data/data";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/models/Soda-can.gltf");

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export function Can({ flavor = "blackCherry", scale = 2, ...props }) {
  const { nodes } = useGLTF("/models/Soda-can.gltf");
  const labels = useTexture(flavorTextures);

  // fixes upside down labels
  Object.values(labels).forEach((label) => {
    label.flipY = false; // Fixes upside-down labels
  });

  const label = labels[flavor];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh.geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_1.geometry}
        material={nodes.Mesh_1.material}
      >
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tab.geometry}
        material={metalMaterial}
      />
    </group>
  );
}
