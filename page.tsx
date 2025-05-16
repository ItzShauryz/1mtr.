"use client"

import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Text, Float } from "@react-three/drei"
import { Introduction } from "@/components/sections/introduction"
import { Hire } from "@/components/sections/hire"
import { Donate } from "@/components/sections/donate"
import { Games } from "@/components/sections/games"
import { Support } from "@/components/sections/support"
import { Navbar } from "@/components/navbar"
import { Loading } from "@/components/loading"

export default function Home() {
  const [activeTab, setActiveTab] = useState("introduction")

  return (
    <main className="w-full h-screen bg-black">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <color attach="background" args={["#000000"]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

          <Float rotationIntensity={0.2} floatIntensity={0.5}>
            <Text
              position={[0, 3.5, 0]}
              fontSize={1.5}
              color="#FFDE59"
              font="/fonts/Geist_Bold.json"
              anchorX="center"
              anchorY="middle"
            >
              1mtr.
            </Text>
          </Float>

          {activeTab === "introduction" && <Introduction />}
          {activeTab === "hire" && <Hire />}
          {activeTab === "donate" && <Donate />}
          {activeTab === "games" && <Games />}
          {activeTab === "support" && <Support />}

          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            rotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </main>
  )
}
