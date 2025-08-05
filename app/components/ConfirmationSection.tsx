"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FileCheck, Scale, ShieldCheck, UserCheck } from "lucide-react"

const confirmationItems = [
  {
    title: "許可の確認",
    description: "廃棄物処理を行う業者は必ず許可を取得しています。業者選定の際は委託先の許可を確認しましょう。",
    icon: ShieldCheck,
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "料金体系の確認",
    description:
      "廃棄物処理費用は処理業者ごとに価格の設定が異なることが一般的です。書面で見積書を入手し料金体系を確認しましょう。また、価格のみで判断せず適正な処理を提案できる処理業者を選定しましょう。",
    icon: Scale,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "必要書類の確認",
    description:
      "廃棄物処理は契約書締結・産業廃棄物管理票（マニフェスト）の発行など法律で定められる書類の準備が求められます。このような書類作成をサポートしてくれる処理業者を選定しましょう。",
    icon: FileCheck,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "信頼できる対応",
    description:
      "廃棄物の処理は法律で様々なルールが定められています。適切な管理ができていないと法令違反につながります。廃棄物処理のプロとして細かなルールへの対応やアドバイスをしてくれる処理業者へ委託しましょう。",
    icon: UserCheck,
    color: "from-orange-400 to-red-600",
  },
]

export default function ConfirmationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="container mx-auto px-4 relative max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl tracking-wide mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            適正な廃棄物処理のために
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {confirmationItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="group">
              <Card className="h-full p-6 bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CAF50] to-[#3a8a3a] text-center max-w-3xl mx-auto">
            廃棄物の適正処理は、日本ビソーへお任せください
          </p>
        </motion.div>
      </div>
    </section>
  )
}
