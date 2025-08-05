"use client"

import { useState, useEffect } from "react"
import { Camera } from "lucide-react"
import Link from "next/link"

export default function CTAButton() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      setIsActive(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => setIsActive(false), 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Link
      href="/estimate"
      className={`fixed right-0 top-1/2 -translate-y-1/2 w-16 h-[420px] bg-[#2563eb]/70 text-white rounded-l-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:bg-[#2563eb]/90 z-50 ${
        isActive ? "transform -translate-x-2" : ""
      }`}
      title="お使いのスマートフォンやPCで回収物の画像を撮影いただいてお問い合わせする事ができます"
    >
      <span className="[writing-mode:vertical-rl] [text-orientation:upright] [letter-spacing:-1px] text-base font-bold text-center tracking-tighter">
        {"Web見積もり"}
      </span>
      <Camera className="my-4" size={24} />
      <span className="[writing-mode:vertical-rl] [text-orientation:upright] [letter-spacing:-1px] text-base font-bold text-center tracking-tighter">
        カメラで見積もり（無料）
      </span>
    </Link>
  )
}
