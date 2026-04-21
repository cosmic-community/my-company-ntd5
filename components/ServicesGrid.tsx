import Link from 'next/link'
import { Service, getMetafieldValue } from '@/types'

export default function ServicesGrid({ services }: { services: Service[] }) {
  if (!services || services.length === 0) {
    return <p className="text-center text-gray-500">No services available.</p>
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map(service => {
        const name = getMetafieldValue(service.metadata?.name) || service.title
        const shortDesc = getMetafieldValue(service.metadata?.short_description)
        const icon = getMetafieldValue(service.metadata?.icon)

        return (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="group bg-white border border-gray-200 rounded-xl p-7 hover:border-brand-500 hover:shadow-xl transition-all"
          >
            {icon && (
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-3xl mb-5 group-hover:bg-brand-100 transition">
                {icon}
              </div>
            )}
            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-brand-600 transition">
              {name}
            </h3>
            {shortDesc && <p className="text-gray-600 mb-4">{shortDesc}</p>}
            <span className="inline-flex items-center text-brand-600 font-medium text-sm">
              Learn more
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        )
      })}
    </div>
  )
}