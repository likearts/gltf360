import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props:any) {
  const { scene } = useGLTF(
    "https://storage.googleapis.com/webar-dev-bd3d4.appspot.com/Owner/asus/SA002-TW-21110019/Zen_UX8402_Laptop_Def_Def/Zen_UX8402_Laptop_Def_Def.gltf"
  );
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [-10, 15, 15], fov: 50 }}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
