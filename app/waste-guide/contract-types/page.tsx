"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import BackToGuideButton from "../../components/BackToGuideButton"
import { Card } from "@/components/ui/card"
import { Truck, Factory, AlertTriangle } from "lucide-react"

const contractTypes = [
  {
    title: "収集運搬契約",
    description: "廃棄物を排出場所から処分場まで運搬する業者との契約",
    icon: Truck,
    points: ["運搬する廃棄物の種類と量", "収集場所と運搬先", "運搬方法", "運搬料金"],
  },
  {
    title: "処分契約",
    description: "廃棄物を最終的に処分する業者との契約",
    icon: Factory,
    points: ["処分する廃棄物の種類と量", "処分方法（焼却、埋立など）", "処分施設", "処分料金"],
  },
]

const checkPoints = ["許可証の有無と有効期限", "委託する廃棄物の種類", "契約期間", "再委託の禁止条項", "料金"]

export default function WasteGuideContractTypesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="契約の種類"
        subtitle="廃棄物処理に関する主な契約形態"
        imageUrl="/placeholder.svg?height=400&width=1920"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-lg text-center text-gray-700 mb-8">
            廃棄物処理に関する契約には、主に「収集運搬契約」と「処分契約」の2種類があります。
            それぞれの特徴と注意点を理解することが重要です。
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {contractTypes.map((type, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <type.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">{type.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <h3 className="font-semibold mb-2">主な記載事項：</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {type.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold">委託契約書の確認ポイント</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {checkPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </Card>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <BackToGuideButton />
        </motion.div>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
