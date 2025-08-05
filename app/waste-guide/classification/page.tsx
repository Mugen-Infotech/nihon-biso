"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import BackToGuideButton from "../../components/BackToGuideButton"
import { Card } from "@/components/ui/card"
import { Recycle, Trash2, Factory, AlertTriangle, Scale, FileCheck } from "lucide-react"

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

const wasteTypes = [
  {
    title: "リサイクル可能な廃プラスチック",
    icon: Recycle,
    description: "再生利用が可能な廃プラスチック類",
    examples: ["ペットボトル", "食品トレー", "プラスチック製容器", "レジ袋"],
    notes: "分別を徹底し、リサイクルルートに乗せることで資源の有効活用につながります。",
  },
  {
    title: "生ごみ・有機廃棄物",
    icon: Trash2,
    description: "食品廃棄物、植物性残渣など",
    examples: ["調理くず", "食べ残し", "茶がら", "剪定枝"],
    notes: "適切な処理により堆肥化やバイオガス化が可能です。",
  },
  {
    title: "産業廃棄物",
    icon: Factory,
    description: "事業活動に伴って発生する廃棄物",
    examples: ["廃プラスチック類", "金属くず", "がれき類", "木くず"],
    notes: "20種類の産業廃棄物が法令で定められています。",
  },
]

const guidelines = [
  {
    title: "分別の基本原則",
    icon: Scale,
    points: [
      "廃棄物の種類に応じた適切な分別",
      "リサイクル可能なものは分別を徹底",
      "危険物・有害物質の適切な分別",
      "自治体のルールに従った分別",
    ],
  },
  {
    title: "注意が必要な廃棄物",
    icon: AlertTriangle,
    points: ["有害物質を含む廃棄物", "引火性・爆発性のある廃棄物", "感染性廃棄物", "特別管理産業廃棄物"],
  },
  {
    title: "適切な処理のために",
    icon: FileCheck,
    points: ["許可を持つ処理業者への委託", "マニフェストの適切な運用", "保管基準の遵守", "処理状況の確認"],
  },
]

export default function WasteGuideClassificationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="廃棄物の分類方法"
        subtitle="廃棄物の種類と適切な処理方法"
        imageUrl="/images/waste-classification-guide.jpg"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              廃棄物の適切な処理のために、まずは正しい分類方法を理解することが重要です。
              ここでは、主な廃棄物の種類と、その分類方法について解説します。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8 mb-12">
            {wasteTypes.map((type, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2">主な例：</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {type.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm text-gray-500">{type.notes}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8">
            {guidelines.map((guideline, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                      <guideline.icon className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{guideline.title}</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {guideline.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <BackToGuideButton />
          </motion.div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
