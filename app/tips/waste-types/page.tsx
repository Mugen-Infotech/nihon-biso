"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Factory, AlertTriangle } from "lucide-react"

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

const wasteTypes = [
  {
    category: "一般廃棄物",
    examples: ["家庭ごみ", "オフィスの紙くず", "飲食店の生ごみ", "小売店の梱包材"],
    disposal: "市町村または市町村が許可した業者",
    notes: "地域によって分別方法や収集方法が異なります",
  },
  {
    category: "産業廃棄物",
    examples: ["廃プラスチック類", "金属くず", "がれき類", "木くず"],
    disposal: "都道府県知事の許可を受けた産業廃棄物処理業者",
    notes: "20種類の廃棄物が法令で定められています",
  },
  {
    category: "特別管理産業廃棄物",
    examples: ["廃油", "廃酸", "廃アルカリ", "感染性廃棄物"],
    disposal: "特別管理産業廃棄物処理の許可を受けた業者",
    notes: "特に厳重な管理が必要です",
  },
]

export default function WasteTypesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="一般廃棄物と産業廃棄物"
        subtitle="Waste Types"
        imageUrl="/placeholder.svg?height=400&width=1920"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">廃棄物の種類と特徴</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              廃棄物は法律によって明確に区分されており、それぞれ適切な処理方法が定められています。
              ここでは、主な廃棄物の種類とその特徴について解説します。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="space-y-8">
            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                    <Trash2 className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">一般廃棄物の特徴</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      一般廃棄物は、産業廃棄物以外の廃棄物を指し、主に家庭から出る一般ごみと、事業活動に伴って生じる事業系一般廃棄物に分類されます。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>市町村が処理責任を持つ</li>
                      <li>地域ごとに収集方法が定められている</li>
                      <li>分別方法は自治体によって異なる</li>
                      <li>処理手数料は地域によって異なる</li>
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
                    <h3 className="text-xl font-bold mb-3">産業廃棄物の特徴</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      事業活動に伴って生じた廃棄物のうち、法令で定められた20種類のものを指します。
                      排出事業者には適正な処理の責任があります。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>事業者に処理責任がある</li>
                      <li>マニフェスト管理が必要</li>
                      <li>専門の処理業者による処理が必要</li>
                      <li>保管基準が法令で定められている</li>
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
                    <h3 className="text-xl font-bold mb-3">特別管理産業廃棄物の特徴</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      産業廃棄物のうち、爆発性、毒性、感染性その他の人の健康または生活環境に係る被害を生ずるおそれがある性状を有するものを指します。
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>特別な管理が必要</li>
                      <li>専門の資格を持った管理責任者の設置が必要</li>
                      <li>特別な保管・運搬基準がある</li>
                      <li>より厳格な処理基準が適用される</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">廃棄物の種類別比較表</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>種類</TableHead>
                        <TableHead>主な例</TableHead>
                        <TableHead>処理方法</TableHead>
                        <TableHead>備考</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {wasteTypes.map((type, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{type.category}</TableCell>
                          <TableCell>{type.examples.join("、")}</TableCell>
                          <TableCell>{type.disposal}</TableCell>
                          <TableCell>{type.notes}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
