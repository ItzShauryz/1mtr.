"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Html, Float, MeshDistortMaterial } from "@react-three/drei"
import type { Group, Mesh } from "three"

export function Introduction() {
  const groupRef = useRef<Group>(null)
  const sphereRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#FFDE59"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      <Float floatIntensity={2} rotationIntensity={0.5}>
        <Html transform position={[0, 0, 2.5]} className="w-[300px] md:w-[500px]" distanceFactor={1.5} center>
          <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-yellow-400/30 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Welcome to 1mtr.</h2>
            <p className="mb-3">
              We are an advanced Roblox development team specializing in creating immersive gaming experiences with
              cutting-edge technology.
            </p>
            <p className="mb-3">
              Our team consists of skilled developers, designers, and artists who are passionate about pushing the
              boundaries of what's possible on Roblox.
            </p>
            <p>Explore our website to learn more about our services, games, and how you can support our work.</p>
          </div>
        </Html>
      </Float>

      <Text
        position={[0, -3, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={5}
        textAlign="center"
      >
        ESTABLISHED 2023
      </Text>
    </group>
  )
}
