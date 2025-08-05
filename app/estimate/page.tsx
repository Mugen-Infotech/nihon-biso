"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Upload, X, Phone, Mail } from "lucide-react"
import { submitEstimateRequest } from "./actions"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const wasteTypes = [
  "家具（ソファ、テーブル、タンス等）",
  "家電製品（冷蔵庫、洗濯機、テレビ等）",
  "オフィス用品（デスク、チェア、キャビネット等）",
  "建設廃材（木材、コンクリート、金属等）",
  "産業廃棄物（廃プラスチック、金属くず等）",
  "その他",
]

export default function EstimatePage() {
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = (files: FileList | null) => {
    if (files) {
      const newImages = Array.from(files).slice(0, 10 - selectedImages.length)
      setSelectedImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      // 画像ファイルをFormDataに追加
      selectedImages.forEach((image, index) => {
        formData.append(`image_${index}`, image)
      })

      const result = await submitEstimateRequest(formData)
      if (result.success) {
        setSubmitMessage("お見積もり依頼を受け付けました。担当者より2営業日以内にご連絡いたします。")
        setSelectedImages([])
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
        title="カメラで見積もり"
        subtitle="Photo Estimate"
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
      />

      <main className="container mx-auto px-4 py-16">
        <motion.section initial="initial" animate="animate" className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">写真で簡単お見積もり</h2>
            <p className="text-lg text-gray-600">
              廃棄物の写真を撮影して送信するだけで、迅速にお見積もりをご提供いたします。
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-8">
              <form action={handleSubmit} className="space-y-6">
                {/* 写真撮影・アップロードエリア */}
                <div>
                  <label className="block text-lg font-medium mb-4">
                    <Camera className="inline w-5 h-5 mr-2" />
                    廃棄物の写真（最大10枚）
                  </label>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* カメラで撮影 */}
                    <div className="border-2 border-dashed border-[#4CAF50] rounded-lg p-6 text-center bg-green-50">
                      <Camera className="mx-auto h-12 w-12 text-[#4CAF50] mb-4" />
                      <p className="text-gray-700 mb-2 font-medium">カメラで撮影</p>
                      <input
                        ref={cameraInputRef}
                        type="file"
                        accept="image/*"
                        capture="environment"
                        multiple
                        onChange={(e) => handleImageSelect(e.target.files)}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        onClick={() => cameraInputRef.current?.click()}
                        className="bg-[#4CAF50] hover:bg-[#3a8a3a]"
                      >
                        写真を撮る
                      </Button>
                    </div>

                    {/* ファイルから選択 */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-2">ファイルから選択</p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleImageSelect(e.target.files)}
                        className="hidden"
                      />
                      <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                        ファイルを選択
                      </Button>
                    </div>
                  </div>

                  {/* 選択された画像のプレビュー */}
                  {selectedImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {selectedImages.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(image) || "/placeholder.svg"}
                            alt={`選択された画像 ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-gray-500">
                    ※ より正確なお見積もりのため、廃棄物全体が分かる写真を複数枚撮影してください。
                  </p>
                </div>

                {/* 基本情報 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">お名前 *</label>
                    <Input name="name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">電話番号 *</label>
                    <Input name="phone" type="tel" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">メールアドレス *</label>
                  <Input name="email" type="email" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">住所・回収場所 *</label>
                  <Input name="address" required placeholder="〒000-0000 ○○県○○市○○町1-1-1" />
                </div>

                {/* 廃棄物情報 */}
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
                  <label className="block text-sm font-medium mb-2">概算数量</label>
                  <Input name="quantity" placeholder="例：2tトラック1台分、段ボール箱10箱分など" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">希望回収日時</label>
                  <Input name="preferredDate" type="date" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">その他ご要望</label>
                  <Textarea
                    name="notes"
                    rows={3}
                    placeholder="搬出経路、作業時間の制限、その他ご要望があればお聞かせください"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#4CAF50] hover:bg-[#3a8a3a] text-lg py-3"
                  disabled={isSubmitting || selectedImages.length === 0}
                >
                  {isSubmitting ? "送信中..." : "見積もり依頼を送信"}
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

          {/* 注意事項・お急ぎの場合 */}
          <motion.div variants={fadeInUp} className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">撮影のコツ</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 廃棄物全体が写るように撮影してください</li>
                <li>• 複数の角度から撮影すると正確です</li>
                <li>• 明るい場所で撮影してください</li>
                <li>• サイズの参考になるものと一緒に撮影</li>
                <li>• 搬出経路も撮影いただけると助かります</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">お急ぎの場合</h3>
              <p className="text-sm text-gray-600 mb-4">緊急で処理が必要な場合は、お電話にて直接ご相談ください。</p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  045-401-7778
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Mail className="w-4 h-4 mr-2" />
                  info@nihon-biso.co.jp
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
