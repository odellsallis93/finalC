import { Link } from "react-router-dom";
import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useGLTF, useTexture, Center, Environment } from "@react-three/drei";
import Backdrop from "../components/Backdrop";
import CameraRig from "../components/CameraRig";
import state from "../store";

function NewCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 2], fov: 25 }}
      gl={{ preserveDrawingBuffer: false }}
      className="canvas w-full max-w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="apartment" />
      <CameraRig>
        <Center>
          <Model />
        </Center>
      </CameraRig>
    </Canvas>
  );
}

export const Model = () => {
  const snap = useSnapshot(state);
  const [activeIndex, setActiveIndex] = useState(0);

  const { nodes, materials } = useGLTF(`./shirt.glb`);

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta),
  );

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      />
    </group>
  );
};

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="carousel-container">
        <NewCanvas />
      </div>
      <div className="content-container">
        <h2>Welcome to our shop!</h2>
        <p>
          Check out <Link to="/products">our products</Link> or share this site
          with others.
        </p>
      </div>
    </div>
  );
}

export default function Welcome() {
  return <HeroSection />;
}
