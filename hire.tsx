"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html, Float, Box } from "@react-three/drei"
import type { Group } from "three"

export function Hire() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float floatIntensity={1} rotationIntensity={0.2}>
        <Html transform position={[0, 0, 2]} className="w-[300px] md:w-[500px]" distanceFactor={1.5} center>
          <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-yellow-400/30 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Hire Our Team</h2>
            <div className="space-y-4">
              <div className="border border-white/20 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Game Development</h3>
                <p>Full game creation from concept to launch</p>
                <p className="text-yellow-400 font-bold mt-2">Starting at R$50,000</p>
              </div>

              <div className="border border-white/20 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Custom Scripts</h3>
                <p>Advanced gameplay mechanics and systems</p>
                <p className="text-yellow-400 font-bold mt-2">Starting at R$10,000</p>
              </div>

              <div className="border border-white/20 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">3D Modeling</h3>
                <p>High-quality assets and environments</p>
                <p className="text-yellow-400 font-bold mt-2">Starting at R$5,000</p>
              </div>

              <button className="w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </Html>
      </Float>

      {/* Decorative elements */}
      <Box position={[-3, 2, -2]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#FFDE59" />
      </Box>

      <Box position={[3, -2, -2]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#FFFFFF" />
      </Box>

      <Box position={[3, 2, -3]} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color="#FFDE59" />
      </Box>

      <Box position={[-3, -2, -3]} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color="#FFFFFF" />
      </Box>
    </group>
  )
}
