import Link from 'next/link'
import { CaseStudy, getMetafieldValue } from '@/types'

export default function CaseStudiesGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  if (!caseStudies || caseStudies.length === 0) {
    return <p className="text-center text-gray-500">No case studies available.</p>
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map(cs => {
        const title = getMetafieldValue(cs.metadata?.title) || cs.title
        const clientName = getMetafieldValue(cs.metadata?.client_name)
        const industry = getMetafieldValue(cs.metadata?.industry)
        const image = cs.metadata?.featured_image

        return (
          <Link
            key={cs.id}
            href={`/case-studies/${cs.slug}`}
            className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all"
          >
            <div className="aspect-video overflow-hidden bg-gray-100">
              {image ? (
                <img
                  src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl text-gray-300">
                  📊
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {clientName && (
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                    {clientName}
                  </span>
                )}
                {industry && clientName && <span className="text-xs text-gray-400">•</span>}
                {industry && (
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {industry}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition">
                {title}
              </h3>
            </div>
          </Link>
        )
      })}
    </div>
  )
}