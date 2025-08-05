"use client"

import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CTAButton from "../../components/CTAButton"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

// サンプル記事データ（実際の実装では動的に取得）
const blogPost = {
  id: 1,
  title: "2024年度の廃棄物処理法改正について",
  content: `
    <h2>廃棄物処理法改正の背景</h2>
    <p>2024年4月より施行される廃棄物処理法の改正は、循環型社会の形成促進と適正処理の確保を目的としています。事業者の皆様には、新たな義務や手続きが追加されるため、事前の準備が重要です。</p>
    
    <h2>主な改正点</h2>
    <h3>1. 排出事業者責任の強化</h3>
    <p>排出事業者の責任がより明確化され、処理委託先の選定基準が厳格化されました。適正な処理業者の選定と定期的な確認が義務付けられています。</p>
    
    <h3>2. マニフェスト制度の見直し</h3>
    <p>電子マニフェストの利用促進を図るため、一定規模以上の事業者には電子マニフェストの使用が義務化されます。</p>
    
    <h3>3. 処理業者の許可要件の見直し</h3>
    <p>処理業者の技術的能力や財政的基礎に関する要件が強化され、より安定した処理体制の確保が求められています。</p>
    
    <h2>事業者への影響</h2>
    <p>これらの改正により、事業者の皆様には以下の対応が必要となります：</p>
    <ul>
      <li>委託先処理業者の再評価と選定基準の見直し</li>
      <li>電子マニフェストシステムの導入検討</li>
      <li>社内の廃棄物管理体制の強化</li>
      <li>従業員への教育・研修の実施</li>
    </ul>
    
    <h2>当社のサポート体制</h2>
    <p>日本ビソー株式会社では、法改正に対応するためのサポートを提供しております。お客様の状況に応じた最適な処理方法をご提案いたします。</p>
  `,
  category: "法令・制度",
  author: "日本ビソー編集部",
  date: "2024.03.15",
  image: "/placeholder.svg?height=400&width=800",
  tags: ["法改正", "廃棄物処理法", "事業者"],
}

const relatedPosts = [
  {
    id: 2,
    title: "産業廃棄物の適正処理チェックポイント",
    category: "廃棄物処理",
    date: "2024.03.10",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 6,
    title: "特別管理産業廃棄物の取り扱い注意点",
    category: "廃棄物処理",
    date: "2024.02.20",
    image: "/placeholder.svg?height=150&width=250",
  },
]

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <motion.article initial="initial" animate="animate" className="max-w-4xl mx-auto">
          {/* パンくずナビ */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Link href="/blog" className="flex items-center text-[#4CAF50] hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ブログ一覧に戻る
            </Link>
          </motion.div>

          {/* 記事ヘッダー */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Card className="overflow-hidden">
              <Image
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{blogPost.category}</Badge>
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
                <div className="flex items-center gap-6 text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blogPost.author}
                  </div>
                </div>

                {/* シェアボタン */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">シェア:</span>
                  <Button size="sm" variant="outline" className="text-blue-600">
                    <Facebook className="w-4 h-4 mr-1" />
                    Facebook
                  </Button>
                  <Button size="sm" variant="outline" className="text-blue-400">
                    <Twitter className="w-4 h-4 mr-1" />
                    Twitter
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-1" />
                    その他
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 記事本文 */}
          <motion.div variants={fadeInUp} className="mb-12">
            <Card className="p-8">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </Card>
          </motion.div>

          {/* 関連記事 */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold mb-6">関連記事</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="md:flex">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={250}
                      height={150}
                      className="w-full md:w-32 h-24 md:h-full object-cover"
                    />
                    <div className="p-4 flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {post.category}
                      </Badge>
                      <h3 className="font-bold mb-2 text-sm line-clamp-2">{post.title}</h3>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.article>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
