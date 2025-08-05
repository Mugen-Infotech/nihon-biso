"use client"

import { motion } from "framer-motion"

interface AreaMapProps {
  type: string
}

export default function AreaMap({ type }: AreaMapProps) {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  }

  const areas = type.includes("一般") ? ["エリアA", "エリアB"] : ["エリアA", "エリアB", "エリアC", "エリアD"]

  return (
    <div className="relative w-full h-80">
      <h3 className="text-center text-2xl font-bold mb-6">
        {type.includes("一般") ? "一般廃棄物収集エリア" : "産業廃棄物収集エリア"}
      </h3>
      <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {areas.map((area, index) => {
            const x = (index % 2) * 200 + 20
            const y = Math.floor(index / 2) * 150 + 20
            return (
              <motion.g key={area} {...fadeIn}>
                <motion.rect
                  x={x}
                  y={y}
                  width="160"
                  height="110"
                  rx="10"
                  fill={index === 0 ? "#4CAF50" : `rgba(76, 175, 80, ${0.7 - index * 0.15})`}
                  stroke="#333"
                  strokeWidth="2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.text x={x + 80} y={y + 60} textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                  {area}
                </motion.text>
              </motion.g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
