import type React from "react"

interface RelatedCompanyProps {
  name: string
  location: string
  tel: string
  representative: string
  capital: string
  established: string
  businessContent?: string[]
}

const RelatedCompanyCard: React.FC<RelatedCompanyProps> = ({
  name,
  location,
  tel,
  representative,
  capital,
  established,
  businessContent,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{name}</h3>
      <dl className="space-y-2 text-sm">
        <div>
          <dt className="font-semibold text-gray-600">所在地</dt>
          <dd>{location}</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">TEL</dt>
          <dd>{tel}</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">代表者</dt>
          <dd>{representative}</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">資本金</dt>
          <dd>{capital}</dd>
        </div>
        <div>
          <dt className="font-semibold text-gray-600">設立</dt>
          <dd>{established}</dd>
        </div>
        {businessContent && (
          <div>
            <dt className="font-semibold text-gray-600">主な事業内容</dt>
            <dd>
              <ul className="list-disc list-inside">
                {businessContent.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </div>
  )
}

export default RelatedCompanyCard
