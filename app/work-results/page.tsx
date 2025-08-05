"use client"

import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import CTAButton from "../components/CTAButton"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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

// 作業実績のサンプルデータ（実際の実装では、ブログデータから「作業実績」タグでフィルタリング）
const workResults = [
  {
    id: 1,
    title: "大型オフィスビル移転に伴う廃棄物処理",
    excerpt: "横浜市内の大型オフィスビルの移転に伴い、大量のOA機器とオフィス家具の回収・処理を実施しました。",
    location: "横浜市西区",
    duration: "3日間",
    wasteVolume: "15トン",
    category: "オフィス移転",
    author: "作業部",
    date: "2024.03.20",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
    tags: ["作業実績", "オフィス移転", "OA機器", "大型案件"],
    featured: true,
    highlights: [
      "データ消去サービスも同時実施",
      "リサイクル率85%を達成",
      "夜間作業で業務に支障なし",
      "適正処理証明書発行",
    ],
  },
  {
    id: 2,
    title: "工場設備更新に伴う産業廃棄物処理",
    excerpt: "製造業のお客様の設備更新に伴い、大型機械や金属くずなどの産業廃棄物を適正に処理いたしました。",
    location: "川崎市川崎区",
    duration: "2日間",
    wasteVolume: "8トン",
    category: "産業廃棄物",
    author: "技術部",
    date: "2024.03.15",
    image: "/images/industrial-waste-processing.jpg",
    tags: ["作業実績", "産業廃棄物", "工場", "金属くず"],
    featured: false,
    highlights: [
      "重機を使用した安全な撤去作業",
      "特別管理産業廃棄物も適正処理",
      "マニフェスト管理の徹底",
      "リサイクル可能な金属は分別回収",
    ],
  },
  {
    id: 3,
    title: "店舗改装に伴う什器・内装材の回収",
    excerpt: "飲食店の改装工事に伴い、厨房機器や内装材などの廃棄物を迅速に回収・処理いたしました。",
    location: "横浜市中区",
    duration: "1日間",
    wasteVolume: "3トン",
    category: "店舗改装",
    author: "営業部",
    date: "2024.03.10",
    image: "/images/office-waste-collection.jpg",
    tags: ["作業実績", "店舗改装", "厨房機器", "内装材"],
    featured: false,
    highlights: ["営業時間外での作業実施", "厨房機器の適正な分別処理", "内装材のリサイクル処理", "迅速な作業完了"],
  },
  {
    id: 4,
    title: "住宅解体に伴う廃棄物処理",
    excerpt: "老朽化した住宅の解体工事に伴い、建設廃材や家財道具の回収・処理を行いました。",
    location: "横浜市神奈川区",
    duration: "5日間",
    wasteVolume: "25トン",
    category: "解体工事",
    author: "作業部",
    date: "2024.03.05",
    image: "/images/household-waste-collection.jpg",
    tags: ["作業実績", "解体工事", "建設廃材", "住宅"],
    featured: false,
    highlights: [
      "アスベスト含有材料の適正処理",
      "近隣への配慮した作業",
      "分別の徹底でリサイクル率向上",
      "安全管理の徹底",
    ],
  },
  {
    id: 5,
    title: "病院の医療機器更新に伴う廃棄物処理",
    excerpt: "総合病院の医療機器更新に伴い、感染性廃棄物を含む特別管理産業廃棄物の処理を実施しました。",
    location: "川崎市高津区",
    duration: "1日間",
    wasteVolume: "2トン",
    category: "医療機関",
    author: "技術部",
    date: "2024.02.28",
    image: "/images/work-site-example.jpg",
    tags: ["作業実績", "医療機関", "感染性廃棄物", "特別管理産業廃棄物"],
    featured: false,
    highlights: [
      "感染性廃棄物の安全な処理",
      "医療機器の適正な分別",
      "院内感染防止対策の徹底",
      "特別管理産業廃棄物管理票の適正運用",
    ],
  },
  {
    id: 6,
    title: "学校施設の改修工事に伴う廃棄物処理",
    excerpt: "小学校の校舎改修工事に伴い、古い机や椅子、教材などの廃棄物を回収・処理いたしました。",
    location: "横浜市港北区",
    duration: "3日間",
    wasteVolume: "6トン",
    category: "教育施設",
    author: "営業部",
    date: "2024.02.20",
    image: "/images/office-waste-collection.jpg",
    tags: ["作業実績", "教育施設", "学校", "改修工事"],
    featured: false,
    highlights: ["夏休み期間中の集中作業", "木製家具のリサイクル処理", "教材の適正な分別処理", "安全な作業環境の確保"],
  },
]

export default function WorkResultsPage() {
  const featuredResult = workResults.find((result) => result.featured)
  const regularResults = workResults.filter((result) => !result.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="作業実績"
        subtitle="Work Results"
        imageUrl="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-6xl mx-auto">
          {/* 概要説明 */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">作業実績</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              日本ビソー株式会社では、様々な業種・規模のお客様の廃棄物処理を承っております。
              オフィス移転から工場設備更新、店舗改装まで、豊富な実績と経験でお客様のニーズにお応えします。
            </p>
          </motion.div>

          {/* 実績一覧 */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold mb-6">作業実績</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workResults.map((result) => (
                <motion.div key={result.id} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                  <Card className="overflow-hidden h-full">
                    <Image
                      src={result.image || "/placeholder.svg"}
                      alt={result.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{result.category}</Badge>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{result.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{result.excerpt}</p>

                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {result.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {result.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {result.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {result.author}
                        </div>
                      </div>

                      <div className="bg-[#4CAF50]/10 p-2 rounded mb-3">
                        <div className="text-xs font-semibold text-[#4CAF50]">処理量: {result.wasteVolume}</div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {result.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* お問い合わせCTA */}
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-r from-[#4CAF50]/10 to-[#3a8a3a]/10">
              <h3 className="text-2xl font-bold mb-4">お客様の廃棄物処理もお任せください</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                豊富な実績と経験を活かし、お客様のニーズに最適な廃棄物処理ソリューションをご提案いたします。
                まずはお気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-[#4CAF50] hover:bg-[#3a8a3a]">
                    お問い合わせ
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/estimate">
                  <Button variant="outline">
                    Webお見積り
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
