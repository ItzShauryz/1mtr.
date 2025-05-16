"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html, Float, Sphere } from "@react-three/drei"
import type { Group } from "three"

export function Games() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Decorative planets */}
      <Sphere position={[-4, 2, -5]} args={[0.5, 32, 32]}>
        <meshStandardMaterial color="#FFDE59" />
      </Sphere>

      <Sphere position={[4, -2, -5]} args={[0.7, 32, 32]}>
        <meshStandardMaterial color="#FFFFFF" />
      </Sphere>

      <Sphere position={[0, -3, -3]} args={[0.3, 32, 32]}>
        <meshStandardMaterial color="#FFDE59" />
      </Sphere>

      <Float floatIntensity={1} rotationIntensity={0.2}>
        <Html transform position={[0, 0, 2]} className="w-[300px] md:w-[500px]" distanceFactor={1.5} center>
          <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-yellow-400/30 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Our Games</h2>

            <div className="space-y-6">
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-800 flex items-center justify-center">
                  <div className="text-yellow-400 text-5xl font-bold">Game 1</div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Cosmic Defenders</h3>
                  <p className="text-sm mb-2">
                    A space-themed shooter where players defend their galaxy against alien invaders.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400">10M+ Visits</span>
                    <button className="bg-yellow-400 text-black font-bold py-1 px-3 rounded-md hover:bg-yellow-500 transition-colors">
                      Play
                    </button>
                  </div>
                </div>
              </div>

              <div className="border border-white/20 rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-800 flex items-center justify-center">
                  <div className="text-yellow-400 text-5xl font-bold">Game 2</div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Tycoon Empire</h3>
                  <p className="text-sm mb-2">
                    Build and manage your own business empire in this addictive tycoon game.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400">5M+ Visits</span>
                    <button className="bg-yellow-400 text-black font-bold py-1 px-3 rounded-md hover:bg-yellow-500 transition-colors">
                      Play
                    </button>
                  </div>
                </div>
              </div>

              <div className="border border-white/20 rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-800 flex items-center justify-center">
                  <div className="text-yellow-400 text-5xl font-bold">Game 3</div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Parkour Masters</h3>
                  <p className="text-sm mb-2">
                    Test your skills in this challenging parkour adventure with hundreds of levels.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400">3M+ Visits</span>
                    <button className="bg-yellow-400 text-black font-bold py-1 px-3 rounded-md hover:bg-yellow-500 transition-colors">
                      Play
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  )
}

