"use client"

import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import CTAButton from "../components/CTAButton"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, ArrowRight } from "lucide-react"
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

const categories = [
  { name: "お知らせ", count: 12, color: "bg-blue-100 text-blue-800" },
  { name: "廃棄物処理", count: 8, color: "bg-green-100 text-green-800" },
  { name: "法令・制度", count: 6, color: "bg-purple-100 text-purple-800" },
  { name: "環境・リサイクル", count: 5, color: "bg-orange-100 text-orange-800" },
  { name: "事例紹介", count: 4, color: "bg-red-100 text-red-800" },
]

const blogPosts = [
  {
    id: 1,
    title: "2024年度の廃棄物処理法改正について",
    excerpt:
      "2024年4月より施行される廃棄物処理法の改正点について詳しく解説いたします。事業者の皆様に影響する重要な変更点をまとめました。",
    category: "法令・制度",
    author: "日本ビソー編集部",
    date: "2024.03.15",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["法改正", "廃棄物処理法", "事業者"],
    featured: true,
  },
  {
    id: 2,
    title: "産業廃棄物の適正処理チェックポイント",
    excerpt:
      "産業廃棄物を適正に処理するために確認すべきポイントを分かりやすく解説します。委託契約からマニフェスト管理まで。",
    category: "廃棄物処理",
    author: "技術部",
    date: "2024.03.10",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["産業廃棄物", "適正処理", "マニフェスト"],
    featured: false,
  },
  {
    id: 3,
    title: "オフィス移転時の廃棄物処理完全ガイド",
    excerpt:
      "オフィス移転に伴う廃棄物の処理方法について、計画から実行まで段階的に説明します。コスト削減のポイントも紹介。",
    category: "事例紹介",
    author: "営業部",
    date: "2024.03.05",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["オフィス移転", "事業系廃棄物", "コスト削減"],
    featured: false,
  },
  {
    id: 4,
    title: "リサイクル率向上の取り組み事例",
    excerpt:
      "当社が取り組んでいるリサイクル率向上の具体的な事例をご紹介します。環境負荷軽減とコスト削減を両立する方法。",
    category: "環境・リサイクル",
    author: "環境推進室",
    date: "2024.02.28",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["リサイクル", "環境", "事例"],
    featured: false,
  },
  {
    id: 5,
    title: "年末年始の廃棄物回収スケジュールについて",
    excerpt: "年末年始期間中の廃棄物回収スケジュールをお知らせいたします。通常とは異なる回収日程にご注意ください。",
    category: "お知らせ",
    author: "日本ビソー編集部",
    date: "2024.12.26",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["年末年始", "回収スケジュール", "お知らせ"],
    featured: false,
  },
  {
    id: 6,
    title: "特別管理産業廃棄物の取り扱い注意点",
    excerpt:
      "特別管理産業廃棄物の適正な取り扱いについて、保管から処分まで詳しく解説します。法令遵守のポイントを確認しましょう。",
    category: "廃棄物処理",
    author: "技術部",
    date: "2024.02.20",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["特別管理産業廃棄物", "法令遵守", "安全管理"],
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader title="ブログ" subtitle="Blog" imageUrl="/placeholder.svg?height=400&width=1920" />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-6xl mx-auto">
          {/* カテゴリー一覧 */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">カテゴリー</h2>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white">
                すべて
              </Button>
              {categories.map((category) => (
                <Button key={category.name} variant="outline" className="relative">
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* 注目記事 */}
          {featuredPost && (
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">注目記事</h2>
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      width={400}
                      height={250}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-red-100 text-red-800">注目</Badge>
                      <Badge variant="outline">{featuredPost.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button className="bg-[#4CAF50] hover:bg-[#3a8a3a]">
                        続きを読む
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* 記事一覧 */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold mb-6">最新記事</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <motion.div key={post.id} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                  <Card className="overflow-hidden h-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          続きを読む
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ページネーション */}
          <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" disabled>
                前へ
              </Button>
              <Button className="bg-[#4CAF50] hover:bg-[#3a8a3a]">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">次へ</Button>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
