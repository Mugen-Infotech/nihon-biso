"use client"

import { Truck, CalendarDays, Package, Home } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const services = [
  {
    title: "臨時回収（法人様）",
    description: "オフィス家具や機器の回収",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    link: "#",
  },
  {
    title: "定期回収（法人様）",
    description: "企業向けの定期ごみ回収",
    icon: CalendarDays,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    link: "#",
  },
  {
    title: "不用品回収",
    description: "家庭の不要品や大型ごみ",
    icon: Package,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    link: "#",
  },
  {
    title: "生前整理・遺品整理",
    description: "遺品整理・生前整理のサポート",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    link: "#",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl tracking-wide text-center mb-12">
          業務案内
          <span className="block text-sm text-gray-600 mt-2">Services</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
              className="group bg-white rounded-xl shadow-lg transition-all duration-300 transform perspective-1000"
            >
              <div className="relative h-48 rounded-t-xl overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <service.icon className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl tracking-wide mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                >
                  詳しく見る
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
