"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import { Card } from "@/components/ui/card"
import { FileText, CheckSquare, AlertTriangle, Scale } from "lucide-react"

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

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="処理委託契約とは？"
        subtitle="Waste Disposal Contracts"
        imageUrl="/placeholder.svg?height=400&width=1920"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">廃棄物処理委託契約の基礎知識</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              産業廃棄物の処理を委託する際には、法令で定められた委託基準に従って 適正に契約を締結する必要があります。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="space-y-8">
            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">委託契約に必要な記載事項</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      産業廃棄物の処理委託契約書には、法令で定められた事項を必ず記載する必要があります。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>委託する産業廃棄物の種類と数量</li>
                      <li>委託する処理の範囲（収集運搬、中間処理、最終処分）</li>
                      <li>委託料金</li>
                      <li>契約の有効期間</li>
                      <li>許可証の写しの添付</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <CheckSquare className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">契約締結時の確認事項</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      処理業者と契約を締結する際には、以下の事項を必ず確認する必要があります。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>処理業者の許可の有無と内容</li>
                      <li>処理施設の能力と稼働状況</li>
                      <li>処理料金の妥当性</li>
                      <li>処理業者の財務状況や信用度</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">委託契約における注意点</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      適正な廃棄物処理を確保するために、以下の点に注意が必要です。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>書面による契約の締結（口頭契約は無効）</li>
                      <li>契約書の保存（5年間）</li>
                      <li>適正な処理料金の設定</li>
                      <li>定期的な契約内容の見直し</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">委託基準違反の責任と罰則</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      委託基準に違反した場合、排出事業者にも責任が及ぶ可能性があります。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>改善命令</li>
                      <li>事業の停止命令</li>
                      <li>罰金刑</li>
                      <li>懲役刑</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      ※ 特に、不適正処理が発覚した場合、排出事業者にも措置命令や改善命令が発出される可能性があります。
                    </p>
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
