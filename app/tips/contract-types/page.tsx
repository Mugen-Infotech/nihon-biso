"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import { Card } from "@/components/ui/card"
import { FileText, Truck, Factory, Building2 } from "lucide-react"

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

const contractTypes = [
  {
    title: "収集運搬委託契約",
    description: "廃棄物の収集から運搬までを委託する契約",
    icon: Truck,
    points: ["収集場所と運搬先の明確化", "収集頻度の設定", "運搬車両の指定", "料金体系の設定"],
  },
  {
    title: "処分委託契約",
    description: "廃棄物の中間処理や最終処分を委託する契約",
    icon: Factory,
    points: ["処理方法の明確化", "処理施設の指定", "処理能力の確認", "処理料金の設定"],
  },
  {
    title: "継続的取引契約",
    description: "定期的な廃棄物処理を委託する長期契約",
    icon: Building2,
    points: ["契約期間の設定", "処理量の予測", "料金の定期支払い", "契約更新条件"],
  },
]

export default function ContractTypesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="契約の種類を解説！"
        subtitle="Contract Types"
        imageUrl="/placeholder.svg?height=400&width=1920"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">廃棄物処理の契約種類</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              廃棄物処理の委託契約には、処理内容や取引形態によって 様々な種類があります。ここでは主な契約の種類と
              その特徴について解説します。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="space-y-8">
            {contractTypes.map((contract, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                      <contract.icon className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{contract.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{contract.description}</p>
                      <h4 className="font-semibold mb-2">主なポイント：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {contract.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">契約選択時の注意点</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    廃棄物処理の委託契約を選択する際は、以下の点に注意が必要です。
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>排出する廃棄物の種類と量の把握</li>
                    <li>処理業者の許可内容の確認</li>
                    <li>処理料金の妥当性の検討</li>
                    <li>契約期間と更新条件の確認</li>
                    <li>緊急時の対応方法の確認</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
