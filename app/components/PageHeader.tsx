import Image from "next/image"

interface PageHeaderProps {
  title: string
  subtitle?: string
  imageUrl: string
}

export default function PageHeader({ title, subtitle, imageUrl }: PageHeaderProps) {
  return (
    <div className="relative w-full h-40 md:h-48 lg:h-56 mb-12">
      <Image
        src={
          imageUrl ||
          "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=400&q=80"
        }
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-center">{subtitle}</p>}
      </div>
    </div>
  )
}
