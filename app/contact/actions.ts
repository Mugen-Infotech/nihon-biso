"use server"

export async function submitContactForm(formData: FormData) {
  // フォームデータの取得
  const data = {
    clientType: formData.get("clientType"),
    name: formData.get("name"),
    contactPerson: formData.get("contactPerson"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    address: formData.get("address"),
    wasteType: formData.get("wasteType"),
    serviceArea: formData.get("serviceArea"),
    quantity: formData.get("quantity"),
    message: formData.get("message"),
    contactMethod: formData.getAll("contactMethod"),
    privacyAgreement: formData.get("privacyAgreement"),
  }

  // バリデーション
  if (!data.name || !data.phone || !data.email || !data.message || !data.privacyAgreement) {
    return { success: false, error: "必須項目が入力されていません。" }
  }

  // 実際の実装では、ここでメール送信やデータベース保存を行う
  // 今回はシミュレーション
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("お問い合わせデータ:", data)

  return { success: true, message: "お問い合わせを受け付けました。" }
}
