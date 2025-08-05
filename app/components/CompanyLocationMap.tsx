import type React from "react"

interface CompanyLocationMapProps {
  mapUrl: string
}

const CompanyLocationMap: React.FC<CompanyLocationMapProps> = ({ mapUrl }) => {
  return (
    <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default CompanyLocationMap
