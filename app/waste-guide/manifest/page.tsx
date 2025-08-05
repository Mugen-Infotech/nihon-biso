"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import BackToGuideButton from "../../components/BackToGuideButton"
import { Card } from "@/components/ui/card"
import { FileText, ClipboardCheck, AlertTriangle, HelpCircle, Shield } from "lucide-react"

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

const manifestInfo = [
  {
    title: "マニフェストとは",
    icon: FileText,
    description: "産業廃棄物管理票（マニフェスト）は、産業廃棄物の処理の流れを管理・把握するための法定帳票です。",
    points: [
      "排出事業者が作成義務を負う（廃棄物処理法第12条の3）",
      "運搬・処分の各段階で確認に使用",
      "紙マニフェストと電子マニフェスト（JWNET）がある",
      "交付から5年間の保存義務がある",
      "適正処理の確保と不法投棄防止が目的",
    ],
  },
  {
    title: "マニフェストの記載事項",
    icon: ClipboardCheck,
    description: "マニフェストには廃棄物処理法で定められた必須記載事項があります。",
    points: [
      "排出事業者の氏名又は名称及び住所",
      "産業廃棄物の種類、数量、性状",
      "産業廃棄物の荷姿",
      "運搬業者の氏名又は名称及び住所",
      "処分業者の氏名又は名称及び住所",
      "取扱い上の注意事項",
      "最終処分の場所の名称、所在地",
      "交付年月日及び交付番号",
    ],
  },
  {
    title: "マニフェスト管理の注意点",
    icon: AlertTriangle,
    description: "適正なマニフェスト管理には以下の点に注意が必要です。",
    points: [
      "記載内容の正確性確保（虚偽記載は罰則対象）",
      "返送期限の管理（運搬終了後10日以内、処分終了後90日以内）",
      "未返送分の確認と督促",
      "保管期限の遵守（5年間）",
      "年度末の交付状況報告（都道府県知事等への報告義務）",
      "電子マニフェストの場合は情報処理センターへの加入が必要",
    ],
  },
]

const manifestTypes = [
  {
    title: "紙マニフェスト",
    features: [
      "7枚複写の伝票形式",
      "手書きまたは印字で記入",
      "各段階で該当する伝票を返送",
      "保管・管理は排出事業者が実施",
    ],
    pros: ["導入コストが低い", "システム不要で簡単"],
    cons: ["紛失リスクがある", "保管場所が必要", "集計作業が煩雑"],
  },
  {
    title: "電子マニフェスト（JWNET）",
    features: [
      "インターネット経由で情報登録",
      "情報処理センター（JWNET）が管理",
      "リアルタイムで処理状況確認可能",
      "自動集計・報告機能あり",
    ],
    pros: ["紛失リスクなし", "自動集計", "即座に状況確認可能", "保管不要"],
    cons: ["システム利用料が必要", "操作習得が必要"],
  },
]

const penalties = [
  {
    violation: "マニフェストの未交付",
    penalty: "6ヶ月以下の懲役又は50万円以下の罰金",
    description: "産業廃棄物の処理を委託する際にマニフェストを交付しなかった場合",
  },
  {
    violation: "虚偽記載",
    penalty: "6ヶ月以下の懲役又は50万円以下の罰金",
    description: "マニフェストに虚偽の記載をした場合",
  },
  {
    violation: "保存義務違反",
    penalty: "30万円以下の罰金",
    description: "マニフェストを5年間保存しなかった場合",
  },
  {
    violation: "報告義務違反",
    penalty: "30万円以下の罰金",
    description: "年度末の交付状況報告を怠った場合",
  },
]

const faqs = [
  {
    question: "マニフェストの保存期間は？",
    answer:
      "交付した日から5年間の保存が法律で義務付けられています。電子マニフェストの場合は、情報処理センターで自動保存されます。",
  },
  {
    question: "電子マニフェストのメリットは？",
    answer:
      "紛失リスクがなく、リアルタイムで処理状況を確認できます。また、年度末の報告書も自動作成され、事務負担が大幅に軽減されます。",
  },
  {
    question: "マニフェストが返送されない場合は？",
    answer: "期限内に返送されない場合は、速やかに処理業者に確認し、30日以内に都道府県知事等に報告する義務があります。",
  },
  {
    question: "少量排出事業者もマニフェストは必要？",
    answer: "産業廃棄物を排出する事業者は、排出量に関係なくマニフェストの交付が義務付けられています。",
  },
  {
    question: "マニフェストの交付番号はどう決める？",
    answer: "排出事業者が任意に決定できますが、同一年度内で重複しないよう連番で管理することが一般的です。",
  },
]

export default function ManifestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="なるほどマニフェスト"
        subtitle="産業廃棄物管理票の基礎知識"
        imageUrl="/images/manifest-management.jpg"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              マニフェストは、産業廃棄物の適正処理を確保するための重要な管理票です。
              法令で作成と保管が義務付けられており、違反には厳しい罰則が科されます。
              ここでは、マニフェストの基礎知識から実務上の注意点まで詳しく解説します。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8 mb-12">
            {manifestInfo.map((info, index) => (
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
            <h2 className="text-2xl font-bold mb-6 text-center">マニフェストの種類比較</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {manifestTypes.map((type, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#4CAF50]">{type.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">特徴：</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {type.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">メリット：</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {type.pros.map((pro, i) => (
                          <li key={i}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">デメリット：</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {type.cons.map((con, i) => (
                          <li key={i}>{con}</li>
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
                    {penalties.map((penalty, index) => (
                      <div key={index} className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-700">{penalty.violation}</h4>
                        <p className="text-red-600 font-medium">{penalty.penalty}</p>
                        <p className="text-gray-600 text-sm">{penalty.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-12">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">よくある質問</h3>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-2">Q. {faq.question}</h4>
                        <p className="text-gray-600">A. {faq.answer}</p>
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
