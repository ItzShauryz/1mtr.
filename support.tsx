"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html, Float, RoundedBox } from "@react-three/drei"
import type { Group } from "three"

export function Support() {
  const groupRef = useRef<Group>(null)
  const boxesRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
    if (boxesRef.current) {
      boxesRef.current.children.forEach((child, i) => {
        child.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5 + i) * 0.3
        child.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.5 + i) * 0.3
      })
    }
  })

  return (
    <group ref={groupRef}>
      <group ref={boxesRef} position={[0, 0, -3]}>
        <RoundedBox position={[-2, 2, 0]} args={[1, 1, 1]} radius={0.1}>
          <meshStandardMaterial color="#FFDE59" />
        </RoundedBox>
        <RoundedBox position={[2, -2, 0]} args={[1, 1, 1]} radius={0.1}>
          <meshStandardMaterial color="#FFFFFF" />
        </RoundedBox>
        <RoundedBox position={[2, 2, 0]} args={[1, 1, 1]} radius={0.1}>
          <meshStandardMaterial color="#FFDE59" />
        </RoundedBox>
        <RoundedBox position={[-2, -2, 0]} args={[1, 1, 1]} radius={0.1}>
          <meshStandardMaterial color="#FFFFFF" />
        </RoundedBox>
      </group>

      <Float floatIntensity={1} rotationIntensity={0.2}>
        <Html transform position={[0, 0, 2]} className="w-[300px] md:w-[500px]" distanceFactor={1.5} center>
          <div className="bg-black/80 backdrop-blur-md p-6 rounded-xl border border-yellow-400/30 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Support</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="mb-4">Have questions or need assistance? Our support team is here to help!</p>
                <form className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-white/30 text-white p-2 rounded-md focus:border-yellow-400 focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Roblox Username</label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-white/30 text-white p-2 rounded-md focus:border-yellow-400 focus:outline-none"
                      placeholder="Your Roblox username"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-black/50 border border-white/30 text-white p-2 rounded-md focus:border-yellow-400 focus:outline-none"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      className="w-full bg-black/50 border border-white/30 text-white p-2 rounded-md focus:border-yellow-400 focus:outline-none h-24"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button className="w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
                <div className="flex space-x-4 mt-2">
                  <button className="flex-1 bg-black border border-white/30 text-white py-2 px-4 rounded-md hover:border-yellow-400 transition-colors">
                    Discord
                  </button>
                  <button className="flex-1 bg-black border border-white/30 text-white py-2 px-4 rounded-md hover:border-yellow-400 transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-black border border-white/30 text-white py-2 px-4 rounded-md hover:border-yellow-400 transition-colors">
                    YouTube
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  )
}
