"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import { Card } from "@/components/ui/card"
import { Trash2, Recycle, Factory, Building2 } from "lucide-react"

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

export default function ClassificationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="廃棄物の分類方法"
        subtitle="Waste Classification"
        imageUrl="/placeholder.svg?height=400&width=1920"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">廃棄物の基本的な分類</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              廃棄物は大きく分けて「一般廃棄物」と「産業廃棄物」に分類されます。
              適切な処理を行うためには、まず廃棄物の正しい分類を理解することが重要です。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Trash2 className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">一般廃棄物とは</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      産業廃棄物以外の廃棄物を指します。主に一般家庭から出るごみや、オフィスや商店から出る紙くず、生ごみなどが該当します。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>家庭から出る日常的なごみ</li>
                      <li>オフィスでの事業活動から出る紙くず</li>
                      <li>飲食店から出る生ごみ</li>
                      <li>小売店での梱包材</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Factory className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">産業廃棄物とは</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      事業活動に伴って生じた廃棄物のうち、法令で定められた20種類のものを指します。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>工場での製造過程で出る廃プラスチック類</li>
                      <li>建設現場から出る木くず、コンクリートがら</li>
                      <li>工場から出る金属くず、ガラスくず</li>
                      <li>特定の業種から出る紙くず、繊維くず</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">事業系一般廃棄物とは</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      事業活動に伴って生じた廃棄物のうち、産業廃棄物以外のものを指します。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>オフィスから出る紙くず</li>
                      <li>飲食店から出る生ごみ</li>
                      <li>小売店での梱包材</li>
                      <li>事務所から出る弁当がら</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">適切な分別の重要性</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      廃棄物の適切な分別は、リサイクルの促進や処理コストの削減、環境負荷の低減につながります。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>資源の有効活用</li>
                      <li>処理コストの最適化</li>
                      <li>環境負荷の低減</li>
                      <li>法令遵守の徹底</li>
                    </ul>
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
