"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html, Float, Torus } from "@react-three/drei"
import type { Group } from "three"

export function Donate() {
  const groupRef = useRef<Group>(null)
  const torusRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.5
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <group ref={torusRef} position={[0, 0, -2]}>
        <Torus args={[3, 0.2, 16, 100]}>
          <meshStandardMaterial color="#FFDE59" wireframe />
        </Torus>
        <Torus args={[2.5, 0.1, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#FFFFFF" wireframe />
        </Torus>
      </group>

      <Float floatIntensity={1} rotationIntensity={0.2}>
        <Html transform position={[0, 0, 2]} className="w-[300px] md:w-[500px]" distanceFactor={1.5} center>
          <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-yellow-400/30 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Donate Robux</h2>
            <p className="mb-4">
              Support our team's development efforts by donating Robux. Your contributions help us create better games
              and tools for the Roblox community.
            </p>

            <div className="space-y-4">
              <div className="border border-white/20 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Basic Supporter</h3>
                <p>R$100 - Get a special role in our Discord</p>
                <button className="mt-2 bg-yellow-400 text-black font-bold py-1 px-3 rounded-md hover:bg-yellow-500 transition-colors">
                  Donate
                </button>
              </div>

              <div className="border border-white/20 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Premium Supporter</h3>
                <p>R$500 - Get early access to our games</p>
                <button className="mt-2 bg-yellow-400 text-black font-bold py-1 px-3 rounded-md hover:bg-yellow-500 transition-colors">
                  Donate
                </button>
              </div>

              <div className="border border-white/20 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Elite Supporter</h3>
                <p>R$1000 - Get your name in our games</p>
                <button className="mt-2 bg-yellow-400 text-black font-bold py-1 px-3 rounded-md hover:bg-yellow-500 transition-colors">
                  Donate
                </button>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Custom amount (R$)"
                  className="w-full bg-black/50 border border-white/30 text-white p-2 rounded-md focus:border-yellow-400 focus:outline-none"
                />
                <button className="w-full mt-2 bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors">
                  Custom Donation
                </button>
              </div>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  )
}

