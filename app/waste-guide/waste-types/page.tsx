"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PageHeader from "../../components/PageHeader"
import CTAButton from "../../components/CTAButton"
import BackToGuideButton from "../../components/BackToGuideButton"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Factory, AlertTriangle, Building2, Users, Scale } from "lucide-react"

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

const wasteCategories = [
  {
    title: "一般廃棄物",
    icon: Trash2,
    description:
      "産業廃棄物以外の廃棄物を指し、主に家庭から出る家庭系一般廃棄物と事業活動に伴う事業系一般廃棄物に分類されます。",
    items: [
      "家庭ごみ（生ごみ、紙くず、プラスチック等）",
      "事業系一般廃棄物（オフィスの紙くず、飲食店の生ごみ等）",
      "し尿・浄化槽汚泥",
      "特別管理一般廃棄物（PCB使用部品、ばいじん等）",
    ],
    responsibility: "市町村が処理責任を持つ",
    details: [
      "地域によって分別方法が異なる",
      "定期的な収集がある",
      "処理手数料は自治体で定められる",
      "リサイクル可能なものは分別が必要",
      "事業系は事業者が適正処理の責任を負う",
    ],
    laws: ["廃棄物処理法", "各自治体の条例"],
  },
  {
    title: "産業廃棄物",
    icon: Factory,
    description: "事業活動に伴って生じた廃棄物のうち、廃棄物処理法で定められた20種類の廃棄物を指します。",
    items: [
      "燃え殻、汚泥、廃油、廃酸、廃アルカリ",
      "廃プラスチック類、紙くず、木くず、繊維くず",
      "動植物性残渣、ゴムくず、金属くず、ガラスくず・コンクリートくず・陶磁器くず",
      "鉱さい、がれき類、動物系固形不要物",
      "動物のふん尿、動物の死体",
      "ばいじん、13号廃棄物（上記の処理物）",
    ],
    responsibility: "排出事業者が処理責任を負う",
    details: [
      "排出事業者責任の原則",
      "マニフェスト管理が必要",
      "委託契約の締結が必須",
      "保管基準の遵守が必要",
      "許可業者への委託が義務",
    ],
    laws: ["廃棄物処理法", "各種リサイクル法"],
  },
  {
    title: "特別管理産業廃棄物",
    icon: AlertTriangle,
    description:
      "産業廃棄物のうち、爆発性、毒性、感染性その他の人の健康または生活環境に係る被害を生ずるおそれがある廃棄物です。",
    items: [
      "廃油（揮発油類、灯油類、軽油類）",
      "廃酸（pH2.0以下）、廃アルカリ（pH12.5以上）",
      "感染性廃棄物（医療関係機関等から発生）",
      "特定有害産業廃棄物（PCB、石綿、重金属等を含有）",
    ],
    responsibility: "排出事業者が特別な管理責任を負う",
    details: [
      "特別な許可を持つ業者による処理",
      "厳格な保管・運搬基準がある",
      "特別管理産業廃棄物管理責任者の設置が必要",
      "より厳密な管理体制が求められる",
      "特別管理産業廃棄物管理票の使用",
    ],
    laws: ["廃棄物処理法", "PCB特措法", "石綿障害予防規則"],
  },
]

const industrialWasteDetails = [
  { type: "燃え殻", description: "石炭がら、焼却炉の残灰、炉清掃排出物等", industries: "全業種" },
  { type: "汚泥", description: "排水処理後の泥状物、各種製造業の汚泥等", industries: "全業種" },
  { type: "廃油", description: "鉱物性油、動植物性油脂等", industries: "全業種" },
  { type: "廃酸", description: "写真定着液、酸洗浄液、各種の有機廃酸等", industries: "全業種" },
  { type: "廃アルカリ", description: "写真現像液、アルカリ洗浄液等", industries: "全業種" },
  { type: "廃プラスチック類", description: "合成樹脂くず、合成繊維くず、廃タイヤ等", industries: "全業種" },
  { type: "紙くず", description: "建設業、パルプ・紙・紙加工品製造業等の紙くず", industries: "限定業種" },
  { type: "木くず", description: "建設業、木材・木製品製造業等の木材片等", industries: "限定業種" },
  { type: "繊維くず", description: "建設業、繊維工業等の天然繊維くず", industries: "限定業種" },
  {
    type: "動植物性残渣",
    description: "食料品製造業等の原料として使用した動植物に係る固形状の不要物",
    industries: "限定業種",
  },
  { type: "動物系固形不要物", description: "と畜場、食鳥処理場での固形状不要物", industries: "限定業種" },
  { type: "ゴムくず", description: "天然ゴムくず", industries: "全業種" },
  { type: "金属くず", description: "鉄鋼、非鉄金属の研磨くず、切削くず等", industries: "全業種" },
  {
    type: "ガラスくず・コンクリートくず・陶磁器くず",
    description: "ガラス類、製品の製造過程等で生じるコンクリートくず等",
    industries: "全業種",
  },
  { type: "鉱さい", description: "鋳物廃砂、電炉等のスラグ等", industries: "全業種" },
  { type: "がれき類", description: "工作物の新築、改築又は除去により生じたコンクリート破片等", industries: "全業種" },
  {
    type: "動物のふん尿",
    description: "畜産農業から排出される牛、馬、豚、めん羊、にわとり等のふん尿",
    industries: "限定業種",
  },
  {
    type: "動物の死体",
    description: "畜産農業から排出される牛、馬、豚、めん羊、にわとり等の死体",
    industries: "限定業種",
  },
  { type: "ばいじん", description: "大気汚染防止法に規定するばい煙発生施設等のばいじん", industries: "全業種" },
  { type: "13号廃棄物", description: "上記の産業廃棄物を処分するために処理したもの", industries: "全業種" },
]

const managementPoints = [
  {
    title: "排出事業者責任",
    icon: Users,
    points: [
      "最終処分まで責任を負う（排出事業者責任の原則）",
      "適切な処理業者の選定義務",
      "処理状況の確認義務",
      "委託基準の遵守",
      "マニフェストの適正運用",
    ],
  },
  {
    title: "必要な手続き",
    icon: Building2,
    points: [
      "処理委託契約の締結（書面契約必須）",
      "マニフェストの発行・管理",
      "保管場所の届出（必要に応じて）",
      "定期報告の提出（都道府県等への報告）",
      "帳簿の作成・保存",
    ],
  },
  {
    title: "管理のポイント",
    icon: Scale,
    points: [
      "適正な分別の徹底",
      "保管基準の遵守（囲い、掲示板等）",
      "記録の保持（5年間保存）",
      "従業員教育の実施",
      "緊急時対応計画の策定",
    ],
  },
]

export default function WasteTypesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="一般廃棄物と産業廃棄物"
        subtitle="廃棄物の種類と特徴"
        imageUrl="/placeholder.svg?height=400&width=1920"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              廃棄物は法律によって明確に区分されており、それぞれ適切な処理方法と責任の所在が定められています。
              ここでは、主な廃棄物の種類とその特徴、管理方法について詳しく解説します。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8 mb-12">
            {wasteCategories.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">主な例：</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                            {category.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">特徴・管理要件：</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                            {category.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="bg-blue-100 px-3 py-1 rounded-full">
                          <span className="font-semibold">処理責任：</span>
                          {category.responsibility}
                        </div>
                        <div className="bg-green-100 px-3 py-1 rounded-full">
                          <span className="font-semibold">関連法令：</span>
                          {category.laws.join("、")}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-12">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">産業廃棄物20種類の詳細</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/4">種類</TableHead>
                      <TableHead className="w-1/2">説明・具体例</TableHead>
                      <TableHead className="w-1/4">対象業種</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {industrialWasteDetails.map((waste, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{waste.type}</TableCell>
                        <TableCell className="text-sm">{waste.description}</TableCell>
                        <TableCell className="text-sm">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              waste.industries === "全業種"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {waste.industries}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-8 mb-12">
            {managementPoints.map((point, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {point.points.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
