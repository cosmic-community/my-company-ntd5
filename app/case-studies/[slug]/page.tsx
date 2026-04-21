// app/case-studies/[slug]/page.tsx
import { getCaseStudy } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { getMetafieldValue } from '@/types'
import Link from 'next/link'

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name)
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const solution = getMetafieldValue(caseStudy.metadata?.solution)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const featuredImage = caseStudy.metadata?.featured_image
  const relatedServices = caseStudy.metadata?.related_services || []

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-6">
            {clientName && (
              <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium">
                {clientName}
              </span>
            )}
            {industry && (
              <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium">
                {industry}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl">{title}</h1>
        </div>
      </section>

      {featuredImage && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <img
              src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {challenge && (
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">The Challenge</h2>
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: challenge }}
              />
            </div>
          )}

          {solution && (
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Solution</h2>
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: solution }}
              />
            </div>
          )}

          {results && (
            <div className="bg-brand-50 border-l-4 border-brand-600 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">The Results</h2>
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: results }}
              />
            </div>
          )}

          {Array.isArray(relatedServices) && relatedServices.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Related Services</h2>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map(service => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-brand-100 text-gray-800 rounded-lg transition"
                  >
                    {getMetafieldValue(service.metadata?.name) || service.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}