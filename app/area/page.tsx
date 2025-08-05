"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import VehicleCard from "../components/VehicleCard"
import CTAButton from "../components/CTAButton"
import { motion } from "framer-motion"
import { FileText, MapPin, Truck, Building2, Home, Factory } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

const generalWasteAreas = [
  {
    city: "横浜市",
    license: "一般廃棄物収集運搬業許可証 第1033号",
    description: "事業系一般廃棄物の収集運搬を行っています",
    coverage: "全区対応",
    specialNotes: "定期回収・臨時回収ともに対応",
  },
  {
    city: "川崎市",
    license: "一般廃棄物収集運搬業許可証 第0032号",
    description: "事業系一般廃棄物の収集運搬を行っています",
    coverage: "全区対応",
    specialNotes: "2tパッカー車による効率的な回収",
  },
]

const industrialWasteAreas = [
  {
    prefecture: "神奈川県",
    license: "産業廃棄物収集運搬業許可証 第01402009863号",
    specialLicense: "特別管理産業廃棄物収集運搬業許可証 第01450009863号",
    coverage: "県内全域",
    mainCities: ["横浜市", "川崎市", "相模原市", "藤沢市", "茅ヶ崎市", "平塚市"],
  },
  {
    prefecture: "東京都",
    license: "産業廃棄物収集運搬業許可証 第13-00-009863号",
    specialLicense: "特別管理産業廃棄物収集運搬業許可証 第13-56-009863号",
    coverage: "都内全域",
    mainCities: ["23区", "多摩地域", "島嶼部"],
  },
  {
    prefecture: "千葉県",
    license: "産業廃棄物収集運搬業許可証 第01200009863号",
    specialLicense: "特別管理産業廃棄物収集運搬業許可証 第01250009863号",
    coverage: "県内全域",
    mainCities: ["千葉市", "船橋市", "柏市", "市川市", "松戸市"],
  },
  {
    prefecture: "埼玉県",
    license: "産業廃棄物収集運搬業許可証 第01100009863号",
    specialLicense: "特別管理産業廃棄物収集運搬業許可証 第01150009863号",
    coverage: "県内全域",
    mainCities: ["さいたま市", "川口市", "所沢市", "越谷市", "草加市"],
  },
]

const vehicles = [
  {
    name: "塵芥車（パッカー車）",
    description:
      "車両に投入したごみを自動的に荷箱に押し込み、圧縮する装置を装備した車両です。生ゴミやダンボール・ビニールなど柔らかい廃棄物の収集に適しています。",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    name: "コンテナ車",
    description: "コンテナをお客様の事業所に設置し、廃棄物が溜まった段階で回収をすることも可能です。",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    name: "２tパッカー（川崎市）",
    description: "川崎市内で一般廃棄物の収集運搬を行っている車両になります。",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    name: "アルミバン",
    description: "密閉型車両で、機密性の高い廃棄物や臭気の強い廃棄物の回収に適しています。",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    name: "ユニック車",
    description:
      "重量物の積込みに適したクレーン付きの車両です。先端のアタッチメントを変更することで剪定枝等の積込みにも利用することができます。",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function AreaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="対応エリア"
        subtitle="Service Area"
        imageUrl="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />

      <main className="container mx-auto px-4 py-8">
        <motion.section className="mb-16" initial="initial" animate="animate" variants={stagger}>
          <motion.div className="max-w-3xl mx-auto text-center mb-12" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              横浜・川崎を中心とした
              <br />
              確実な廃棄物処理サービス
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              地域密着だからこそ実現できる迅速な対応と、
              <br />
              各種許認可を持つ信頼できる廃棄物処理のプロフェッショナルとして、
              <br />
              お客様の多様なニーズにお応えします。
            </p>
          </motion.div>

          {/* 一般廃棄物対応エリア */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Home className="w-8 h-8 text-[#4CAF50] mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">一般廃棄物収集運搬対応エリア</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {generalWasteAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <Building2 className="w-6 h-6 text-[#4CAF50] mr-2" />
                    <h4 className="text-xl font-bold">{area.city}</h4>
                    <Badge className="ml-auto bg-green-100 text-green-800">事業系一般廃棄物</Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{area.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">許可証：</span>
                      <span className="text-gray-600">{area.license}</span>
                    </div>
                    <div>
                      <span className="font-medium">対応範囲：</span>
                      <span className="text-gray-600">{area.coverage}</span>
                    </div>
                    <div>
                      <span className="font-medium">特記事項：</span>
                      <span className="text-gray-600">{area.specialNotes}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="text-[#4CAF50] hover:text-[#3a8a3a] text-sm flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      許可証を確認 [PDF]
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 産業廃棄物対応エリア */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Factory className="w-8 h-8 text-[#4CAF50] mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">産業廃棄物収集運搬対応エリア</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {industrialWasteAreas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-[#4CAF50] mr-2" />
                    <h4 className="text-xl font-bold">{area.prefecture}</h4>
                    <div className="ml-auto flex gap-2">
                      <Badge className="bg-blue-100 text-blue-800">産業廃棄物</Badge>
                      <Badge className="bg-red-100 text-red-800">特管</Badge>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">産業廃棄物許可：</span>
                      <p className="text-gray-600">{area.license}</p>
                    </div>
                    <div>
                      <span className="font-medium">特別管理産業廃棄物許可：</span>
                      <p className="text-gray-600">{area.specialLicense}</p>
                    </div>
                    <div>
                      <span className="font-medium">対応範囲：</span>
                      <span className="text-gray-600">{area.coverage}</span>
                    </div>
                    <div>
                      <span className="font-medium">主要対応都市：</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {area.mainCities.map((city, cityIndex) => (
                          <Badge key={cityIndex} variant="outline" className="text-xs">
                            {city}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href="#" className="text-[#4CAF50] hover:text-[#3a8a3a] text-sm flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      産廃許可証 [PDF]
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-700 text-sm flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      特管許可証 [PDF]
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* エリア外対応 */}
          <motion.div variants={fadeInUp} className="mb-16">
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <h3 className="text-xl font-bold mb-3 text-center">対応エリア外のお客様へ</h3>
              <p className="text-gray-700 text-center">
                上記エリア外でも、廃棄物の種類や量によっては対応可能な場合があります。
                <br />
                まずはお気軽にお問い合わせください。提携業者のご紹介も可能です。
              </p>
            </Card>
          </motion.div>
        </motion.section>

        <motion.section className="mb-16" initial="initial" animate="animate" variants={stagger}>
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center"
            variants={fadeInUp}
          >
            <Truck className="w-8 h-8 mr-2 text-[#4CAF50]" />
            車両一覧
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={stagger}>
            {vehicles.map((vehicle, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <VehicleCard {...vehicle} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
