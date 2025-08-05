"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  steps: string[]
  icon: React.ElementType
  image: string
  isDetailed?: boolean
}

export default function ServiceCard({
  title,
  description,
  features,
  steps,
  icon: Icon,
  image,
  isDetailed = false,
}: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Icon className="text-white w-16 h-16" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-[#4CAF50]">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {isDetailed && (
          <>
            <h4 className="font-semibold text-lg mb-2 text-[#4CAF50]">特徴</h4>
            <ul className="list-none mb-4 text-gray-600">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                  <Check className="w-4 h-4 mr-2 text-[#4CAF50]" />
                  {feature}
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-lg mb-2 text-[#4CAF50]">サービスの流れ</h4>
            <ol className="list-none mb-4 text-gray-600">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center mb-2">
                  <span className="bg-[#4CAF50] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </motion.div>
  )
}
