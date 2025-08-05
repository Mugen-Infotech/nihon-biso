"use client"

import { FileText, Recycle, Scale, ClipboardList, FileCheck } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import CTAButton from "../components/CTAButton"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const wasteGuideCategories = [
  {
    title: "廃棄物の分類方法",
    description: "廃棄物の種類や分類について詳しく解説します",
    icon: FileText,
    href: "/waste-guide/classification",
  },
  {
    title: "一般廃棄物と産業廃棄物",
    description: "一般廃棄物と産業廃棄物の違いについて説明します",
    icon: Recycle,
    href: "/waste-guide/waste-types",
  },
  {
    title: "処理委託契約とは？",
    description: "廃棄物処理の委託契約について解説します",
    icon: Scale,
    href: "/waste-guide/contracts",
  },
  {
    title: "契約の種類を解説！",
    description: "様々な契約形態とその特徴を紹介します",
    icon: ClipboardList,
    href: "/waste-guide/contract-types",
  },
  {
    title: "なるほどマニフェスト",
    description: "産業廃棄物管理票（マニフェスト）について詳しく解説します",
    icon: FileCheck,
    href: "/waste-guide/manifest",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function WasteGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="廃棄物ガイド"
        subtitle="Waste Guide"
        imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
            廃棄物処理のガイド
          </motion.h2>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wasteGuideCategories.map((category, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.03 }} className="h-full">
                <Link href={category.href}>
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-16 h-16 rounded-full bg-[#4CAF50]/10 flex items-center justify-center mb-4">
                        <category.icon className="w-8 h-8 text-[#4CAF50]" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{category.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{category.description}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">廃棄物の分類分け</h3>
            <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              弊社では、横浜市・川崎市の事業系一般廃棄物収集運搬業務、東京都・神奈川県・千葉県・埼玉県の産業廃棄物収集運搬業務を行っております。
              廃棄物の適切な分類と処理方法について、お客様に分かりやすく解説いたします。
            </p>
          </motion.div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
