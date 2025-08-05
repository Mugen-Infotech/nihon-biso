import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.svg`}
          alt="日本ビソー株式会社 ロゴ"
          fill
          className="object-contain"
        />
      </div>
      <span className="text-2xl font-bold">日本ビソー株式会社</span>
    </Link>
  )
}
