"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Truck } from "lucide-react"

interface VehicleCardProps {
  name: string
  description: string
  image: string
}

export default function VehicleCard({ name, description, image }: VehicleCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <Truck className="text-white w-16 h-16" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
