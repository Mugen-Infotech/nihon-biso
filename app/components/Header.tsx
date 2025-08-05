"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const navigation = [
  { name: "会社紹介", href: "/company" },
  { name: "業務案内", href: "/services" },
  { name: "対応エリア", href: "/area" },
  { name: "廃棄物ガイド", href: "/waste-guide" },
  { name: "作業実績", href: "/work-results" },
  { name: "ブログ", href: "/blog" },
  { name: "採用情報", href: "/careers" },
  { name: "お問い合わせ", href: "/contact" },
  { name: "Webお見積り", href: "/estimate" },
]

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // スクロールダウン
          setIsVisible(false)
        } else {
          // スクロールアップ
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      // クリーンアップ関数
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={`bg-[#2563eb] text-white fixed w-full top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image src="/logo.svg" alt="日本ビソー株式会社 ロゴ" width={32} height={32} className="w-full h-full" />
            </div>
            <Link href="/" className="text-lg font-bold whitespace-nowrap hover:text-blue-100 transition-colors">
              日本ビソー株式会社
            </Link>
          </div>
          <nav className="hidden md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm hover:text-blue-200 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
