"use client"

import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import CTAButton from "../components/CTAButton"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Heart, Truck, Phone, Mail } from "lucide-react"

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

const jobOpenings = [
  {
    title: "廃棄物収集運搬ドライバー",
    type: "正社員",
    location: "横浜市・川崎市",
    salary: "月給 25万円〜35万円",
    experience: "要普通免許（中型免許歓迎）",
    description: "一般廃棄物・産業廃棄物の収集運搬業務を担当していただきます。未経験者歓迎、丁寧に指導いたします。",
    requirements: ["普通自動車免許（AT限定可）", "中型免許があれば尚良い", "体力に自信のある方", "責任感のある方"],
    benefits: ["社会保険完備", "賞与年2回", "昇給年1回", "退職金制度", "免許取得支援制度"],
    urgent: true,
  },
  {
    title: "営業スタッフ",
    type: "正社員",
    location: "横浜市神奈川区（本社）",
    salary: "月給 28万円〜40万円",
    experience: "営業経験2年以上",
    description: "法人のお客様への廃棄物処理サービスの提案営業を行っていただきます。既存顧客のフォローが中心です。",
    requirements: ["営業経験2年以上", "普通自動車免許", "コミュニケーション能力", "PC基本操作"],
    benefits: ["社会保険完備", "賞与年2回", "営業手当", "車両貸与", "研修制度充実"],
    urgent: false,
  },
  {
    title: "事務スタッフ",
    type: "パート・アルバイト",
    location: "横浜市神奈川区（本社）",
    salary: "時給 1,200円〜1,500円",
    experience: "PC基本操作ができる方",
    description: "マニフェスト管理、請求書作成、電話対応などの一般事務を担当していただきます。",
    requirements: ["PC基本操作（Excel、Word）", "電話対応ができる方", "週3日以上勤務可能な方"],
    benefits: ["交通費支給", "社会保険加入可", "時間相談可", "研修あり"],
    urgent: false,
  },
]

const companyValues = [
  {
    title: "環境への貢献",
    description: "循環型社会の実現に向けて、適正な廃棄物処理とリサイクルを推進しています。",
    icon: Heart,
  },
  {
    title: "チームワーク",
    description: "お互いを尊重し、協力し合いながら、より良いサービスを提供しています。",
    icon: Users,
  },
  {
    title: "成長支援",
    description: "従業員一人ひとりのスキルアップと成長を全力でサポートします。",
    icon: Truck,
  },
]

const workEnvironment = [
  "アットホームな職場環境",
  "先輩社員による丁寧な指導",
  "資格取得支援制度",
  "定期的な安全教育",
  "働きやすい勤務時間",
  "充実した福利厚生",
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader title="採用情報" subtitle="Careers" imageUrl="/placeholder.svg?height=400&width=1920" />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-6xl mx-auto">
          {/* 会社の魅力 */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">日本ビソーで働く魅力</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#4CAF50]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* 募集要項 */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">募集要項</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        {job.urgent && <Badge className="bg-red-100 text-red-800">急募</Badge>}
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-[#4CAF50] hover:bg-[#3a8a3a]">応募する</Button>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">応募資格</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">待遇・福利厚生</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {job.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* 職場環境 */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">職場環境</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">働きやすい環境づくり</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {workEnvironment.map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">勤務条件</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">勤務時間：</span>
                      <span className="text-gray-600">8:00〜17:00（実働8時間）</span>
                    </div>
                    <div>
                      <span className="font-medium">休日：</span>
                      <span className="text-gray-600">日曜日、祝日、その他会社指定日</span>
                    </div>
                    <div>
                      <span className="font-medium">休暇：</span>
                      <span className="text-gray-600">有給休暇、夏季休暇、年末年始休暇</span>
                    </div>
                    <div>
                      <span className="font-medium">昇給：</span>
                      <span className="text-gray-600">年1回（4月）</span>
                    </div>
                    <div>
                      <span className="font-medium">賞与：</span>
                      <span className="text-gray-600">年2回（7月・12月）</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 応募方法 */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-center mb-8">応募方法</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">お電話でのお問い合わせ</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#4CAF50]" />
                    <div>
                      <p className="font-medium">045-401-7778</p>
                      <p className="text-sm text-gray-600">受付時間：8:00〜17:00（土日祝除く）</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    「採用の件で」とお伝えください。担当者が詳しくご説明いたします。
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">メールでのお問い合わせ</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#4CAF50]" />
                    <div>
                      <p className="font-medium">info@nihon-biso.co.jp</p>
                      <p className="text-sm text-gray-600">件名に「採用について」と記載</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    履歴書（写真貼付）を添付してお送りください。追って面接日程をご連絡いたします。
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Card className="p-6 bg-blue-50">
                <h3 className="text-lg font-bold mb-2">見学も歓迎しています</h3>
                <p className="text-gray-600">
                  実際の職場を見てみたい方は、事前にご連絡いただければ職場見学も可能です。
                  お気軽にお問い合わせください。
                </p>
              </Card>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
