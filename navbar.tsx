"use client"

import { motion } from "framer-motion"

interface NavbarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const tabs = [
    { id: "introduction", label: "Introduction" },
    { id: "hire", label: "Hire" },
    { id: "donate", label: "Donate Robux" },
    { id: "games", label: "Our Games" },
    { id: "support", label: "Support" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex space-x-1 md:space-x-4">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
                    activeTab === tab.id ? "text-black" : "text-white hover:text-yellow-300"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 bg-yellow-400 rounded-md -z-10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
