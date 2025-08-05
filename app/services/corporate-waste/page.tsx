"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import { Card } from "@/components/ui/card"
import { Building2, Truck, Clock, CheckCircle, Monitor, Printer, HardDrive, Cpu } from "lucide-react"

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

const oaEquipment = [
  { name: "パソコン・モニター・HDD", icon: Monitor },
  { name: "プリンター・複合機", icon: Printer },
  { name: "サーバー機器", icon: HardDrive },
  { name: "その他電子機器", icon: Cpu },
]

const officeFurniture = [
  "デスク・テーブル",
  "オフィスチェア",
  "キャビネット・書棚",
  "金庫",
  "パーテーション・アクリル板",
]

const targetIndustries = [
  "オフィス・事務所",
  "店舗・小売業",
  "工場・製造業",
  "福祉施設・介護施設",
  "美容院・サロン",
  "飲食店・レストラン",
  "医療機関・クリニック",
  "教育機関・学校",
]

export default function CorporateWastePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="法人向け廃棄物回収"
        subtitle="Corporate Waste Collection"
        imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">法人向け粗大ごみ回収サービス</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              オフィスの移転、改装、設備更新に伴う大型廃棄物の回収を承ります。
              OA機器からオフィス家具まで、幅広い品目に対応し、適切な処理とリサイクルを実施いたします。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8 mb-12">
            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">OA機器の回収</h3>
                    <p className="text-gray-600 mb-6">
                      データ消去から適切な処分まで、セキュリティに配慮したOA機器の回収を行います。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {oaEquipment.map((equipment, index) => (
                        <div key={index} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                          <equipment.icon className="w-8 h-8 text-[#4CAF50] mb-2" />
                          <span className="text-sm text-center">{equipment.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">オフィス家具の回収</h3>
                    <p className="text-gray-600 mb-6">
                      大型のオフィス家具から小物まで、オフィス環境に関わるあらゆる家具の回収に対応します。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {officeFurniture.map((furniture, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />
                          <span>{furniture}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">対象業種</h3>
                    <p className="text-gray-600 mb-6">
                      あらゆる業種において日々発生する日常的な廃棄物から、大型の設備まで幅広く対応いたします。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {targetIndustries.map((industry, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />
                          <span className="text-sm">{industry}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">サービスの特徴</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">迅速な対応</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>お急ぎの案件にも柔軟に対応</li>
                          <li>土日祝日の作業も可能</li>
                          <li>夜間作業にも対応</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">安心・安全</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>データ消去サービス</li>
                          <li>適切な分別とリサイクル</li>
                          <li>法令遵守の徹底</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
