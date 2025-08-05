"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import CTAButton from "../components/CTAButton"
import { Phone, Mail, Clock, Building2, Users, Award, TrendingUp, Leaf } from "lucide-react"
import Link from "next/link"
import RelatedCompanyCard from "../components/RelatedCompanyCard"
import CompanyLocationMap from "../components/CompanyLocationMap"
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

export default function CompanyPage() {
  const relatedCompanies = [
    {
      name: "アカルタスホールディングス株式会社",
      location: "東京都中央区銀座1-24-1 銀一パークビル4階",
      tel: "03-6441-2112",
      representative: "代表取締役社長 尾﨑 俊也",
      capital: "5,000万円",
      established: "平成30年8月",
      mapUrl: "https://goo.gl/maps/example1",
    },
    {
      name: "アースサポート株式会社",
      location: "島根県松江市八幡町882-2",
      tel: "0852-37-2890",
      representative: "代表取締役社長 尾﨑 俊也",
      capital: "5,000万円",
      established: "昭和38年2月",
      businessContent: [
        "産業廃棄物の収集運搬及び処分",
        "一般廃棄物の収集運搬",
        "不用品回収",
        "産業廃棄物の最終処理",
        "家屋等の解体",
        "リサイクルショップの運営",
      ],
      mapUrl: "https://goo.gl/maps/example2",
    },
    {
      name: "株式会社片付け堂",
      location: "東京都中央区銀座1-24-1",
      tel: "0120-3310-55",
      representative: "代表取締役社長　小澤 宏彰",
      capital: "500万円",
      established: "平成29年12月",
      businessContent: ["不用品回収サービス", "「片付け堂」フランチャイズ事業"],
      mapUrl: "https://goo.gl/maps/example3",
    },
    {
      name: "株式会社新川リサイクルセンター",
      location: "富山県黒部市荒俣487-1",
      tel: "0765-56-9850",
      representative: "代表取締役 野山 秀明",
      capital: "410万円",
      established: "平成7年3月",
      businessContent: ["廃棄物の収集運搬・適正処理及びリサイクル"],
      mapUrl: "https://goo.gl/maps/example4",
    },
    {
      name: "美濃化学スカイコーポレーション株式会社",
      location: "岐阜県美濃市極楽寺1451番地の1",
      tel: "0575-33-1888",
      representative: "代表取締役 坂東 伸剛",
      capital: "1,000万円",
      established: "令和4年10月",
      businessContent: ["プラスチックのリサイクル・原料の製造"],
      mapUrl: "https://goo.gl/maps/example5",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="会社紹介"
        subtitle="Company"
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />

      <main className="container mx-auto px-4 py-16">
        {/* 代表メッセージ */}
        <motion.section className="mb-24" initial="initial" animate="animate" variants={fadeInUp}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
              <Users className="w-8 h-8 mr-2 text-[#4CAF50]" />
              代表メッセージ
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                弊社は1968年の創業以来、廃棄物処理のエキスパートとして取り組んで参りました。環境に真摯に向かい合い持続可能な社会の実現に向け常に時代の先端を進み続けて、豊かな自然や生活環境を守ることが私たち廃棄物処理に携わっているものの使命です。
              </p>
              <p>
                地球環境の保全が最も重要な課題であると認識し、自然との調和、地域住民との共生を基調とした循環型社会を形成することで、いつまでも幸せに生活できる環境を作っていきます。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 会社概要 */}
        <motion.section className="mb-24" initial="initial" animate="animate" variants={stagger}>
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-3xl font-bold text-center py-6 bg-[#4CAF50] text-white flex items-center justify-center">
              <Building2 className="w-8 h-8 mr-2" />
              会社概要
            </h2>
            <div className="p-10">
              <motion.dl className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg" variants={stagger}>
                <motion.div variants={fadeInUp}>
                  <dt className="font-bold text-gray-700">会社名</dt>
                  <dd className="md:col-span-2">日本ビソー株式会社</dd>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <dt className="font-bold text-gray-700">代表取締役</dt>
                  <dd className="md:col-span-2">森井 健太</dd>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <dt className="font-bold text-gray-700">設立</dt>
                  <dd className="md:col-span-2">昭和47年１月</dd>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <dt className="font-bold text-gray-700">創業</dt>
                  <dd className="md:col-span-2">昭和43年</dd>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <dt className="font-bold text-gray-700">資本金</dt>
                  <dd className="md:col-span-2">5,000万円</dd>
                </motion.div>
              </motion.dl>

              <motion.div className="mt-10 space-y-6" variants={stagger}>
                <h3 className="text-2xl font-bold text-gray-700">事業所</h3>

                <div className="space-y-6">
                  <motion.div className="border-l-4 border-[#4CAF50] pl-6" variants={fadeInUp}>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">本社</h4>
                    <address className="not-italic space-y-3 text-lg">
                      <p>〒221-0014</p>
                      <p>横浜市神奈川区入江2-18 PPIH大口ビル208</p>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#4CAF50]" />
                        <span>045-401-7778（代表）</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#4CAF50]" />
                        <span>info@nihon-biso.co.jp</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-[#4CAF50]" />
                        <span>8：00〜17：00</span>
                      </div>
                    </address>
                  </motion.div>

                  <motion.div className="border-l-4 border-[#4CAF50] pl-6" variants={fadeInUp}>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">川崎事業所</h4>
                    <address className="not-italic text-lg">
                      <p>〒216-0011</p>
                      <p>川崎市宮前区犬蔵2-14-10-201</p>
                    </address>
                  </motion.div>

                  <motion.div className="border-l-4 border-[#4CAF50] pl-6" variants={fadeInUp}>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">羽沢車庫</h4>
                    <address className="not-italic text-lg">
                      <p>〒221-0863</p>
                      <p>横浜市神奈川区羽沢753-1</p>
                    </address>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div className="mt-10" variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">事業内容</h3>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
                  <li>一般廃棄物の収集・運搬業務</li>
                  <li>産業廃棄物の収集・運搬業務</li>
                  <li>特別管理産業廃棄物の収集・運搬業務</li>
                  <li>廃棄物の再資源化事業及び再資源化製品の販売</li>
                  <li>建物の清掃及び管理</li>
                  <li>不用品回収、ハウスクリーニング等の生活サービス事業</li>
                  <li>遺品整理事業</li>
                  <li>リサイクル品の買取及び販売並びに輸出入</li>
                  <li>古物営業法に基づく古物の売買</li>
                  <li>上記各項に附帯する一切の業務</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 許可証情報 */}
        <motion.section className="mb-24" initial="initial" animate="animate" variants={stagger}>
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-3xl font-bold text-center py-6 bg-[#4CAF50] text-white flex items-center justify-center">
              <Award className="w-8 h-8 mr-2" />
              許可証情報
            </h2>
            <div className="p-10">
              <div className="space-y-10">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">一般廃棄物収集運搬</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-lg">横浜市</span>
                      <span className="text-lg text-gray-600">
                        第 1033 号
                        <Link href="/placeholder.pdf" className="text-[#4CAF50] hover:text-[#4CAF50] ml-3">
                          [PDF]
                        </Link>
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-lg">川崎市</span>
                      <span className="text-lg text-gray-600">
                        第 0032 号
                        <Link href="/placeholder.pdf" className="text-[#4CAF50] hover:text-[#4CAF50] ml-3">
                          [PDF]
                        </Link>
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">産業廃棄物収集運搬</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { city: "神奈川県", number: "01402009863" },
                      { city: "東京都", number: "第 13-00-009863 号" },
                      { city: "千葉県", number: "第 01200009863 号" },
                      { city: "埼玉県", number: "第 01100009863 号" },
                    ].map((license, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="text-lg">{license.city}</span>
                        <span className="text-lg text-gray-600">
                          {license.number}
                          <Link href="/placeholder.pdf" className="text-[#4CAF50] hover:text-[#4CAF50] ml-3">
                            [PDF]
                          </Link>
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">特別管理産業廃棄物収集運搬</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { city: "神奈川県", number: "第 01450009863 号" },
                      { city: "東京都", number: "第 13-56-009863 号" },
                      { city: "千葉県", number: "第 01250009863 号" },
                      { city: "埼玉県", number: "第 01150009863 号" },
                    ].map((license, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="text-lg">{license.city}</span>
                        <span className="text-lg text-gray-600">
                          {license.number}
                          <Link href="/placeholder.pdf" className="text-[#4CAF50] hover:text-[#4CAF50] ml-3">
                            [PDF]
                          </Link>
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">その他</h3>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg">古物商 神奈川県公安委員会許可</span>
                    <span className="text-lg text-gray-600">
                      第 451390019487 号
                      <Link href="/placeholder.pdf" className="text-[#4CAF50] hover:text-[#4CAF50] ml-3">
                        [PDF]
                      </Link>
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 関連会社 */}
        <motion.section className="mb-24" initial="initial" animate="animate" variants={stagger}>
          <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-3xl font-bold text-center py-6 bg-[#4CAF50] text-white flex items-center justify-center">
              <TrendingUp className="w-8 h-8 mr-2" />
              関連会社
            </h2>
            <div className="p-10">
              <motion.div className="mb-12 text-center" variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-6">アカルタスホールディングスグループ</h3>
                <p className="mb-8 text-lg leading-relaxed max-w-4xl mx-auto">
                  アカルタスホールディングスグループは、 グループ各社の強み、ネットワークを生かし、
                  お客様の環境に関するあらゆるご要望に お応えする体制を構築しています。
                  <br />
                  <br />
                  廃棄物の収集処理、各種リサイクル、 コンプライアンス、省エネ等、 様々なご要望にお応えしております。
                </p>
                <h4 className="text-xl font-semibold mb-8 flex items-center justify-center">
                  <Leaf className="w-6 h-6 mr-2 text-[#4CAF50]" />
                  アカルタスホールディングス グループ会社
                </h4>
              </motion.div>
              <motion.div className="space-y-12" variants={stagger}>
                {relatedCompanies.map((company, index) => (
                  <motion.div key={index} className="flex flex-col lg:flex-row gap-8 items-start" variants={fadeInUp}>
                    <div className="lg:w-1/2">
                      <RelatedCompanyCard {...company} />
                    </div>
                    <div className="lg:w-1/2">
                      <CompanyLocationMap mapUrl={company.mapUrl} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
