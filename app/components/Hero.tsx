"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect()
        const x = (event.clientX - left) / width
        const y = (event.clientY - top) / height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const backgroundX = useTransform(() => mousePosition.x, [0, 1], [-10, 10])
  const contentX = useTransform(() => mousePosition.x, [0, 1], [10, -10])
  const contentY = useTransform(() => mousePosition.y, [0, 1], [5, -5])

  return (
    <div ref={containerRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000_F_409638809_xPCFQ2yeYHLvhokHZpj9CwpLRrXNbiTP.jpg-0s86aukyIfj9ovNkBub5q9HHg5SJdZ.jpeg')`,
          y,
          x: backgroundX,
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <motion.div
        className="relative z-10 flex items-center justify-center h-full"
        style={{
          x: contentX,
          y: contentY,
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4 [text-shadow:_0_1px_12px_rgb(0_0_0_/_40%)]">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            廃棄物処理の
            <br />
            プロフェッショナル
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            横浜・川崎を中心に、安全で確実な廃棄物処理サービスを提供
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}
