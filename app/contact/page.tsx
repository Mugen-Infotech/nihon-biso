"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import CTAButton from "../components/CTAButton"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock, Upload, Camera } from "lucide-react"
import { submitContactForm } from "./actions"

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
  "一般廃棄物（事業系）",
  "産業廃棄物",
  "特別管理産業廃棄物",
  "不用品回収",
  "遺品整理・生前整理",
  "その他",
]

const serviceAreas = ["横浜市", "川崎市", "東京都", "千葉県", "埼玉県", "その他"]

export default function ContactPage() {
  const [clientType, setClientType] = useState<"individual" | "corporate" | "">("")
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setSelectedFiles((prev) => [...prev, ...files].slice(0, 5)) // 最大5ファイル
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitMessage("お問い合わせを受け付けました。担当者より3営業日以内にご連絡いたします。")
      } else {
        setSubmitMessage("送信に失敗しました。お手数ですが、お電話でお問い合わせください。")
      }
    } catch (error) {
      setSubmitMessage("送信に失敗しました。お手数ですが、お電話でお問い合わせください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="お問い合わせ"
        subtitle="Contact Us"
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" variants={stagger} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* お問い合わせフォーム */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">お問い合わせフォーム</h2>

                <form action={handleSubmit} className="space-y-6">
                  {/* お客様区分 */}
                  <div>
                    <label className="block text-sm font-medium mb-2">お客様区分 *</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="clientType"
                          value="individual"
                          checked={clientType === "individual"}
                          onChange={(e) => setClientType(e.target.value as "individual")}
                          className="mr-2"
                          required
                        />
                        個人のお客様
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="clientType"
                          value="corporate"
                          checked={clientType === "corporate"}
                          onChange={(e) => setClientType(e.target.value as "corporate")}
                          className="mr-2"
                          required
                        />
                        法人のお客様
                      </label>
                    </div>
                  </div>

                  {/* 基本情報 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {clientType === "corporate" ? "会社名" : "お名前"} *
                      </label>
                      <Input name="name" required />
                    </div>
                    {clientType === "corporate" && (
                      <div>
                        <label className="block text-sm font-medium mb-2">ご担当者名 *</label>
                        <Input name="contactPerson" required />
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">電話番号 *</label>
                      <Input name="phone" type="tel" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">メールアドレス *</label>
                      <Input name="email" type="email" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">住所</label>
                    <Input name="address" />
                  </div>

                  {/* サービス関連 */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">廃棄物の種類</label>
                      <Select name="wasteType">
                        <SelectTrigger>
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          {wasteTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">対応エリア</label>
                      <Select name="serviceArea">
                        <SelectTrigger>
                          <SelectValue placeholder="選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceAreas.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">概算数量・重量</label>
                    <Input name="quantity" placeholder="例：2tトラック1台分、段ボール箱10箱分など" />
                  </div>

                  {/* 画像アップロード */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Camera className="inline w-4 h-4 mr-1" />
                      廃棄物の写真（最大5枚）
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-2">写真をドラッグ&ドロップまたはクリックして選択</p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        ファイルを選択
                      </Button>
                    </div>
                    {selectedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                            <span className="text-sm">{file.name}</span>
                            <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                              削除
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">お問い合わせ内容 *</label>
                    <Textarea name="message" rows={5} required placeholder="ご質問やご要望をお聞かせください" />
                  </div>

                  {/* 希望連絡方法 */}
                  <div>
                    <label className="block text-sm font-medium mb-2">希望連絡方法</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <Checkbox name="contactMethod" value="phone" />
                        <span className="ml-2">電話</span>
                      </label>
                      <label className="flex items-center">
                        <Checkbox name="contactMethod" value="email" />
                        <span className="ml-2">メール</span>
                      </label>
                    </div>
                  </div>

                  {/* プライバシーポリシー同意 */}
                  <div className="flex items-start">
                    <Checkbox name="privacyAgreement" required className="mt-1" />
                    <label className="ml-2 text-sm">
                      <a href="/privacy-policy" className="text-[#4CAF50] hover:underline">
                        プライバシーポリシー
                      </a>
                      に同意します *
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#3a8a3a]" disabled={isSubmitting}>
                    {isSubmitting ? "送信中..." : "お問い合わせを送信"}
                  </Button>

                  {submitMessage && (
                    <div
                      className={`p-4 rounded-lg ${submitMessage.includes("受け付けました") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </Card>
            </motion.div>

            {/* 会社情報・アクセス */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">会社情報</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#4CAF50] mt-1" />
                    <div>
                      <p className="font-medium">本社</p>
                      <p className="text-sm text-gray-600">
                        〒221-0014
                        <br />
                        横浜市神奈川区入江2-18
                        <br />
                        PPIH大口ビル208
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#4CAF50] mt-1" />
                    <div>
                      <p className="font-medium">TEL: 045-401-7778</p>
                      <p className="text-sm text-gray-600">FAX: 045-401-6948</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#4CAF50] mt-1" />
                    <div>
                      <p className="font-medium">info@nihon-biso.co.jp</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#4CAF50] mt-1" />
                    <div>
                      <p className="font-medium">受付時間</p>
                      <p className="text-sm text-gray-600">8:00〜17:00（土日祝除く）</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">緊急時のお問い合わせ</h3>
                <p className="text-sm text-gray-600 mb-4">緊急の廃棄物処理が必要な場合は、お電話にてご連絡ください。</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  緊急連絡: 045-401-7778
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">よくあるご質問</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Q. 見積もりは無料ですか？</p>
                    <p className="text-gray-600">A. はい、お見積もりは無料です。</p>
                  </div>
                  <div>
                    <p className="font-medium">Q. 土日の対応は可能ですか？</p>
                    <p className="text-gray-600">A. 事前にご相談いただければ対応可能です。</p>
                  </div>
                  <div>
                    <p className="font-medium">Q. 少量でも回収してもらえますか？</p>
                    <p className="text-gray-600">A. 少量でも対応いたします。お気軽にご相談ください。</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <CTAButton />
      <Footer />
    </div>
  )
}
