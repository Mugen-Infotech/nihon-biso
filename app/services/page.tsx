"use client"

import { Truck, CalendarDays, Package, Home, Recycle, Factory, FileText, ArrowRight } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ServiceCard from "../components/ServiceCard"
import CTAButton from "../components/CTAButton"
import PageHeader from "../components/PageHeader"
import { motion } from "framer-motion"

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

const services = [
  {
    title: "臨時回収（法人様）",
    description: "オフィスの移転や改装、在庫廃棄等に伴う大量の廃棄物を、迅速かつ効率的に回収します。",
    icon: Truck,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "大型家具や電化製品にも対応",
      "機械類、金庫等の重量物にも対応",
      "柔軟なスケジュール調整",
      "環境に配慮した適切な処理",
    ],
    steps: [
      "お問い合わせ・見積もり依頼",
      "現地調査（必要な場合）",
      "契約締結",
      "回収日時の決定",
      "回収作業の実施",
      "適切な処理と処分",
    ],
  },
  {
    title: "定期回収（法人様）",
    description:
      "オフィス、店舗、工場、福祉施設、美容院、サロン、飲食店など、あらゆる業種において日々発生する日常的な廃棄物を回収いたします。",
    icon: CalendarDays,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "安定した廃棄物処理（月～土の回収対応、年末年始の回収も応相談）",
      "リサイクル率の向上（お客様の状況に応じて、リサイクル提案を行います）",
      "法令遵守（法定伝票、処理委託契約書、電子化対応、法改正対応）",
      "幅広い業種に対応",
    ],
    steps: [
      "初回相談・ニーズヒアリング",
      "回収条件の策定",
      "契約締結",
      "定期的な回収の実施",
      "月次の重量報告（請求書に記載）",
    ],
  },
  {
    title: "不用品回収（個人様）",
    description:
      "引っ越し、空き家等で多量に発生する家庭ゴミを、丁寧かつ迅速に回収し、行政処分場で適切に処分いたします。",
    icon: Package,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "幅広い品目に対応",
      "予算に応じた片付けプランを提案",
      "分別、運び出し、家具解体など片付けを全般サポート",
      "プライバシーに配慮した作業",
      "いわゆるゴミ屋敷状態の物件も対応可能",
      "提携企業と連携し、リユース、ハウスクリーニングの対応も可能",
    ],
    steps: ["お問い合わせ・見積もり依頼", "回収範囲、回収内容の確認", "料金の提示と合意", "回収作業の実施", "ご集金"],
  },
  {
    title: "生前整理・遺品整理",
    description: "ご家族の方々に寄り添い、丁寧かつ敬意を持って生前整理や遺品の整理をサポートいたします。",
    icon: Home,
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "プライバシーへの配慮",
      "思い出の品の丁寧な取り扱い",
      "必要書類の作成サポート",
      "心のケアも重視",
      "資格者（生前整理・遺品整理・収納アドバイザー）在籍",
      "女性スタッフも在籍",
    ],
    steps: [
      "初回相談・現地確認",
      "提案内容の策定とすり合わせ",
      "整理作業の実施",
      "貴重品・思い出の品の仕分け",
      "不用品の回収と処分",
    ],
  },
]

const processes = [
  {
    title: "一般廃棄物の流れ",
    description: "オフィスから出る日常的な可燃ゴミの処理プロセスを説明します。",
    icon: Recycle,
    steps: ["排出事業者による保管", "収集運搬業者による運搬", "行政処分場での処理", "適正処理に向けた啓発活動"],
  },
  {
    title: "産業廃棄物の流れ",
    description: "事業活動に伴って生じる不燃物の廃棄物処理プロセスを詳しく解説します。",
    icon: Factory,
    steps: ["排出事業者による保管", "収集運搬業者による運搬", "中間処理施設での処理", "リサイクルまたは最終処分"],
  },
  {
    title: "ご契約までの流れ",
    description: "お客様とのご契約から実際のサービス提供までの手順を説明します。",
    icon: FileText,
    steps: ["お問い合わせ・ご相談", "現地調査・お見積り", "契約内容の確認", "契約締結", "回収開始"],
  },
]

const caseStudies = [
  {
    title: "過去の提案事例 その1",
    problem:
      "お客様は可燃物、不燃物、古紙類の定期回収に加えて、粗大ゴミ、電池、バッテリー類、蛍光管等の多種多様な廃棄物処理が必要で業者選定に困っていた。",
    challenges: [
      "定期回収では、事業系一般廃棄物、産業廃棄物、古紙に該当するものをお客様にわかりやすく伝え、定期回収の範囲の擦り合わせが必要であった。",
      "電池、バッテリー類、蛍光管は適正処分できる処分場が限られており、それぞれ処分場を選定し、最適な処理方法を提案する必要があった.",
    ],
    solution:
      "イラスト付きの分別表を作成し、ご担当者様やその他スタッフ様の方で定期回収の対象とその他を視覚的に認識ができるよう配慮した。また、各種廃棄物の品目と適正処理できる処分場を選定し、一定量を保管して頂いた段階で回収を行うスキームを策定し、運搬効率を上げてコストを抑えつつ、処理が難しい廃棄物の適正処理を実現した。",
  },
  {
    title: "過去の提案事例 その2",
    problem:
      "大型機械（３Dプリンター）の廃棄をしたいが、重量物（350㎏程度）であり階段からの運び出しが必要で、どのように処理してよいかわからない。階段の幅が狭く、人力で運び出す必要があり困っている。",
    challenges: [
      "大型機械をお客様の事務所内から地上まで人力で安全に運び出さなくてはいけない。",
      "運び出した機械を車両の荷台まで積込を行わなくてはいけない.",
    ],
    solution:
      "現地下見を行い、搬出経路、対象物と接触の可能性がある注意すべきポイントを確認し、安全な搬出経路を確保。また、重量物の運び出しに関して、ジャッキ、ロープを用いて複数人で安全に運び出しができるよう作業段取りを行った。地上に荷下ろしした後は、ユニック車のクレーンを用いて、機械類の積込を実施。結果として、重量物を安全に車両まで運び出す事に成功した。",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader title="業務案内" subtitle="Services" imageUrl="/placeholder.svg?height=300&width=1920" />
      <main className="container mx-auto px-4 py-16">
        <motion.section className="mb-16" initial="initial" animate="animate" variants={stagger}>
          <motion.h2 className="text-3xl font-semibold mb-8 text-center text-gray-800" variants={fadeInUp}>
            業務一覧
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ServiceCard {...service} isDetailed={true} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-16" initial="initial" animate="animate" variants={stagger}>
          <motion.h2 className="text-3xl font-semibold mb-8 text-center text-gray-800" variants={fadeInUp}>
            廃棄物処理の流れ
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
                variants={fadeInUp}
              >
                <process.icon className="w-16 h-16 text-[#4CAF50] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">{process.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{process.description}</p>
                <ol className="list-decimal list-inside text-gray-600">
                  {process.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="mb-2 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-[#4CAF50]" />
                      {step}
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-16" initial="initial" animate="animate" variants={stagger}>
          <motion.h2 className="text-3xl font-semibold mb-8 text-center text-gray-800" variants={fadeInUp}>
            過去の提案事例
          </motion.h2>
          <div className="space-y-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div key={index} className="bg-white rounded-lg shadow-md p-6" variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-4 text-[#4CAF50]">{caseStudy.title}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2 text-[#4CAF50] flex items-center">
                    <Package className="w-5 h-5 mr-2" />
                    お客様の抱える問題
                  </h4>
                  <p className="text-gray-600">{caseStudy.problem}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-2 text-[#4CAF50] flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    営業が解決すべき課題
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {caseStudy.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-[#4CAF50] flex items-center">
                    <Recycle className="w-5 h-5 mr-2" />
                    営業の提案した解決策
                  </h4>
                  <p className="text-gray-600">{caseStudy.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <CTAButton />
      </main>
      <Footer />
    </div>
  )
}
