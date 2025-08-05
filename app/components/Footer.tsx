import Link from "next/link"

const footerNavigation = {
  company: [
    { name: "会社紹介", href: "/company" },
    { name: "業務案内", href: "/services" },
    { name: "対応エリア", href: "/area" },
    { name: "廃棄物ガイド", href: "/waste-guide" },
    { name: "作業実績", href: "/work-results" },
    { name: "ブログ", href: "/blog" },
  ],
  support: [
    { name: "お問い合わせ", href: "/contact" },
    { name: "Webお見積り", href: "/estimate" },
    { name: "採用情報", href: "/careers" },
  ],
  legal: [
    { name: "プライバシーポリシー", href: "/privacy-policy" },
    { name: "利用規約", href: "#" },
    { name: "サイトマップ", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#2563eb] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="text-white text-xl tracking-wide">
              日本ビソー株式会社
            </Link>
            <p className="mt-4 text-sm">
              〒221-0014
              <br />
              横浜市神奈川区入江2-18 PPIH大口ビル208
            </p>
            <p className="mt-2 text-sm">
              TEL: 045-401-7778（代表）
              <br />
              FAX: 045-401-6948
            </p>
            <p className="mt-2 text-sm">
              メール: info@nihon-biso.co.jp
              <br />
              受付時間: 8：00〜17：00
            </p>
          </div>
          <div>
            <h3 className="text-white tracking-wide mb-4">企業情報</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-green-200 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white tracking-wide mb-4">サポート</h3>
            <ul className="space-y-2">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-green-200 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white tracking-wide mb-4">法的情報</h3>
            <ul className="space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-green-200 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-300 text-center">
          <p className="text-sm">&copy; 2024 日本ビソー株式会社 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
