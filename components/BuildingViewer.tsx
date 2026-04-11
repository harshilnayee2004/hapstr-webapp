"use client";

import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Center, Html, useProgress } from "@react-three/drei";
import { OBJLoader } from "three-stdlib";

function Loader() {
  const { progress } = useProgress();
  return <Html center><div style={{ color: 'white', fontFamily: 'sans-serif' }}>{progress.toFixed(0)}% loaded</div></Html>;
}

function Model() {
  // uses useLoader to fetch and parse the OBJ file from /public/model.obj
  const obj = useLoader(OBJLoader, "/model.obj");
  return <primitive object={obj} />;
}

export default function BuildingViewer() {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#1a1a2e" }}>
      <Canvas camera={{ position: [15, 15, 15], fov: 45 }}>
        {/* Sets the scene background color */}
        <color attach="background" args={["#1a1a2e"]} />

        {/* Add ambient and directional lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 15]} intensity={1.5} />
        <directionalLight position={[-10, 10, -10]} intensity={0.5} />

        <Suspense fallback={<Loader />}>
          <Center>
            <Model />
          </Center>
        </Suspense>

        {/* Controls to rotate and zoom */}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
