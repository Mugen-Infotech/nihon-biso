"use server"

export async function submitEstimateRequest(formData: FormData) {
  // フォームデータの取得
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    address: formData.get("address"),
    wasteType: formData.get("wasteType"),
    quantity: formData.get("quantity"),
    preferredDate: formData.get("preferredDate"),
    notes: formData.get("notes"),
  }

  // 画像ファイルの取得
  const images: File[] = []
  for (let i = 0; i < 10; i++) {
    const image = formData.get(`image_${i}`) as File
    if (image && image.size > 0) {
      images.push(image)
    }
  }

  // バリデーション
  if (!data.name || !data.phone || !data.email || !data.address) {
    return { success: false, error: "必須項目が入力されていません。" }
  }

  if (images.length === 0) {
    return { success: false, error: "写真を1枚以上アップロードしてください。" }
  }

  // 実際の実装では、ここで画像の保存とメール送信を行う
  // 今回はシミュレーション
  await new Promise((resolve) => setTimeout(resolve, 1500))

  console.log("見積もり依頼データ:", data)
  console.log("アップロードされた画像数:", images.length)

  return { success: true, message: "お見積もり依頼を受け付けました。" }
}
