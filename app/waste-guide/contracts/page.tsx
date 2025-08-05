"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import BackToGuideButton from "../../components/BackToGuideButton"
import { Card } from "@/components/ui/card"
import { FileText, CheckSquare, AlertTriangle, Scale, Shield } from "lucide-react"

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

const contractInfo = [
  {
    title: "委託契約の基本原則",
    icon: FileText,
    description:
      "産業廃棄物の処理を委託する際には、廃棄物処理法で定められた委託基準に従って適正に契約を締結する必要があります。",
    points: [
      "書面による契約の締結が必須（口頭契約は無効）",
      "契約書の保存（5年間保存義務）",
      "適正な処理料金の設定（不当に安い料金は違法処理のリスク）",
      "定期的な契約内容の見直し",
      "委託先の許可内容の確認",
      "再委託の原則禁止",
    ],
  },
  {
    title: "契約締結時の確認事項",
    icon: CheckSquare,
    description: "処理業者と契約を締結する際には、以下の事項を必ず確認し、適正な業者を選定する必要があります。",
    points: [
      "処理業者の許可の有無と内容（許可証の写しの確認）",
      "処理施設の能力と稼働状況",
      "処理料金の妥当性（相場との比較）",
      "処理業者の財務状況や信用度",
      "過去の行政処分歴の確認",
      "処理実績と技術力の確認",
    ],
  },
  {
    title: "委託契約における注意点",
    icon: AlertTriangle,
    description: "適正な廃棄物処理を確保し、法令違反を防ぐために、以下の点に注意が必要です。",
    points: [
      "委託基準の遵守（廃棄物処理法第12条第5項）",
      "マニフェストの適正な運用",
      "処理状況の定期的な確認",
      "緊急時の対応方法の確認",
      "契約解除時の手続きの明確化",
      "損害賠償責任の明確化",
    ],
  },
  {
    title: "契約書の必要記載事項",
    icon: Scale,
    description: "産業廃棄物の処理委託契約書には、廃棄物処理法施行令で定められた事項を必ず記載する必要があります。",
    points: [
      "委託する産業廃棄物の種類と数量",
      "委託する処理の範囲（収集運搬、中間処理、最終処分）",
      "委託料金",
      "契約の有効期間",
      "委託者が受託者に対して支払う料金",
      "受託者の事業の範囲",
    ],
  },
]

const contractTypes = [
  {
    title: "収集運搬委託契約",
    description: "廃棄物を排出場所から処理施設まで運搬する業務の委託契約",
    requirements: [
      "収集運搬業の許可を有する業者との契約",
      "運搬する廃棄物の種類・性状の明記",
      "積替え保管の有無の確認",
      "運搬車両・容器等の指定",
      "運搬経路・方法の確認",
    ],
    points: ["許可証の写しの添付必須", "運搬途中での紛失・飛散防止対策", "緊急時連絡体制の確立", "運搬実績の報告義務"],
  },
  {
    title: "処分委託契約",
    description: "廃棄物の中間処理や最終処分を行う業務の委託契約",
    requirements: [
      "処分業の許可を有する業者との契約",
      "処分する廃棄物の種類・性状の明記",
      "処分方法の明確化",
      "処分施設の能力・稼働状況の確認",
      "最終処分場の確認",
    ],
    points: ["処理フローの確認", "リサイクル率の確認", "処理残渣の処分方法", "処理実績の定期報告"],
  },
]

const violations = [
  {
    violation: "委託基準違反",
    penalty: "3年以下の懲役又は300万円以下の罰金",
    examples: ["無許可業者への委託", "書面契約の未締結", "再委託の承諾"],
  },
  {
    violation: "不適正処理への関与",
    penalty: "5年以下の懲役又は1,000万円以下の罰金",
    examples: ["不法投棄の教唆・幇助", "虚偽の委託契約", "処理料金の不当な値下げ要求"],
  },
  {
    violation: "措置命令違反",
    penalty: "3年以下の懲役又は300万円以下の罰金",
    examples: ["支障除去等の措置命令に従わない場合"],
  },
]

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="処理委託契約とは？"
        subtitle="廃棄物処理の委託契約について"
        imageUrl="/placeholder.svg?height=400&width=1920"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              産業廃棄物の処理を委託する際には、法令で定められた委託基準に従って
              適正に契約を締結する必要があります。ここでは、処理委託契約の基本的な
              知識と注意点について詳しく解説します。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8 mb-12">
            {contractInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                      <p className="text-gray-600 mb-4">{info.description}</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {info.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">契約の種類</h2>
            <div className="grid gap-6">
              {contractTypes.map((type, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#4CAF50]">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">契約要件：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                        {type.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">注意点：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                        {type.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">違反時の罰則</h3>
                  <div className="space-y-4">
                    {violations.map((violation, index) => (
                      <div key={index} className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-700">{violation.violation}</h4>
                        <p className="text-red-600 font-medium mb-2">{violation.penalty}</p>
                        <div>
                          <span className="text-sm text-gray-600">例：</span>
                          <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                            {violation.examples.map((example, i) => (
                              <li key={i}>{example}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <BackToGuideButton />
          </motion.div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
