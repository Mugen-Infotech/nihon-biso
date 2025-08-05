import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BackToGuideButton() {
  return (
    <Button asChild variant="outline" className="mt-8">
      <Link href="/waste-guide" className="flex items-center">
        <ArrowLeft className="mr-2 h-4 w-4" />
        廃棄物ガイドに戻る
      </Link>
    </Button>
  )
}
