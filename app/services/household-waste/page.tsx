"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import { Card } from "@/components/ui/card"
import { Home, Truck, Heart, CheckCircle, Package, ArrowRight } from "lucide-react"

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
    title: "空き家の片付け",
    description:
      "空き家になっているご自宅のお片付けは、多量の不用品が発生するケースが多く、ご自身でのお片付けは労力がかかります。分別～搬出～回収処分までプロにお任せ下さい！",
    icon: Home,
    features: [
      "大量の不用品にも対応",
      "分別から搬出まで一括対応",
      "適切な処分とリサイクル",
      "清掃作業も含めて対応可能",
    ],
  },
  {
    title: "引越し時の不用品回収",
    description:
      "引越しの際は、引っ越し業者とのやりとりに加えて、廃棄する不用品の手続きも必要になります。行政の回収手続きがご面倒な方は是非当社へご相談下さい！",
    icon: Truck,
    features: ["引越し前後の柔軟な対応", "行政手続きの代行", "大型家具・家電の回収", "梱包材の処分も対応"],
  },
  {
    title: "生前整理・遺品整理",
    description:
      "ご家族の思い出が詰まった大切な品々を、心を込めて丁寧に整理いたします。故人への敬意を持ち、ご遺族の気持ちに寄り添ったサービスを提供します。",
    icon: Heart,
    features: [
      "思い出の品の丁寧な取り扱い",
      "貴重品の仕分けサポート",
      "必要書類の整理支援",
      "心のケアも重視したサービス",
    ],
  },
]

const wasteItems = [
  "家具（タンス、ソファ、ベッド等）",
  "家電製品（冷蔵庫、洗濯機、テレビ等）",
  "布団・マットレス",
  "自転車・バイク",
  "楽器類",
  "スポーツ用品",
  "園芸用品",
  "書籍・雑誌類",
]

const serviceFlow = [
  "お問い合わせ・ご相談",
  "現地確認・お見積り",
  "作業日程の調整",
  "回収作業の実施",
  "分別・リサイクル処理",
  "作業完了報告",
]

export default function HouseholdWastePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="個人向け不用品回収"
        subtitle="Household Waste Collection"
        imageUrl="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">個人向け不用品回収サービス</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              ご家庭で不要になった物品を、丁寧かつ迅速に回収いたします。
              空き家の片付けから引越し時の不用品処分まで、様々なシーンでお役に立ちます。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={fadeInUp}>
              <Card className="p-8 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">回収可能な品目</h3>
                    <div className="space-y-3">
                      {wasteItems.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-3" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">サービスの流れ</h3>
                    <div className="space-y-3">
                      {serviceFlow.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <span className="bg-[#4CAF50] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
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
