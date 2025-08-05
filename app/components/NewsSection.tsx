import { Card, CardContent } from "@/components/ui/card"

const newsItems = [
  { date: "2024.12.26", title: "電子公告を掲載しました" },
  { date: "2024.11.29", title: "年末年始の回収について" },
  { date: "2023.12.27", title: "電子公告を掲載しました" },
  { date: "2023.12.04", title: "★★一緒に働いてくださる方を募集中★★" },
  { date: "2022.12.23", title: "電子公告を掲載しました" },
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="inline-block border-b-2 border-red-500 pb-2">NEWS</span>
          <span className="block text-sm text-gray-600 mt-2">ニュース</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              {newsItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 py-4 border-b last:border-b-0">
                  <time className="text-sm text-gray-500 whitespace-nowrap">{item.date}</time>
                  <p className="text-gray-800 hover:text-blue-600 cursor-pointer">{item.title}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
