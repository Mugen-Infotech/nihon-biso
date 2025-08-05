"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import { Card } from "@/components/ui/card"
import { FileText, ClipboardCheck, AlertTriangle, HelpCircle } from "lucide-react"

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

export default function ManifestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="なるほどマニフェスト"
        subtitle="Manifest Guide"
        imageUrl="/placeholder.svg?height=400&width=1920"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">産業廃棄物管理票（マニフェスト）について</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              マニフェストは、産業廃棄物の処理を委託する際に必要な管理票です。
              適正処理を確保するための重要な書類として、法令で作成と保管が義務付けられています。
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
                    <h3 className="text-xl font-bold mb-3">マニフェストとは</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      産業廃棄物管理票（マニフェスト）は、産業廃棄物の処理の流れを管理・把握するための帳票です。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>排出事業者が作成義務を負う</li>
                      <li>運搬・処分の確認に使用</li>
                      <li>紙マニフェストと電子マニフェストがある</li>
                      <li>5年間の保存義務がある</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">マニフェストの記載事項</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      マニフェストには以下の事項を記載する必要があります。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>排出事業者の名称と住所</li>
                      <li>産業廃棄物の種類と数量</li>
                      <li>運搬業者の名称と住所</li>
                      <li>処分業者の名称と住所</li>
                      <li>取扱い上の注意事項</li>
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
                    <h3 className="text-xl font-bold mb-3">マニフェスト管理の注意点</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      マニフェストの管理には以下の点に注意が必要です。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>記載内容の正確性確保</li>
                      <li>返送期限の管理</li>
                      <li>未返送分の確認</li>
                      <li>保管期限の遵守</li>
                      <li>交付状況の報告</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">よくある質問</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Q1: マニフェストの保存期間は？</h4>
                        <p className="text-gray-600">A: 交付した日から5年間の保存が義務付けられています。</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Q2: 電子マニフェストのメリットは？</h4>
                        <p className="text-gray-600">
                          A: 保管の手間が省け、情報の即時確認や集計が容易になります。また、紛失のリスクもありません。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Q3: マニフェストの義務違反の罰則は？</h4>
                        <p className="text-gray-600">
                          A:
                          未交付や虚偽記載などの違反には、最大6ヶ月以下の懲役または50万円以下の罰金が科されることがあります。
                        </p>
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
