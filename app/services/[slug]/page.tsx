// app/services/[slug]/page.tsx
import { getService } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { getMetafieldValue } from '@/types'

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const description = getMetafieldValue(service.metadata?.description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const featuredImage = service.metadata?.featured_image
  const featuresRaw = service.metadata?.features

  let features: string[] = []
  if (Array.isArray(featuresRaw)) {
    features = featuresRaw.map(f => String(f))
  } else if (typeof featuresRaw === 'string' && featuresRaw) {
    features = featuresRaw.split('\n').filter(Boolean)
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
        <div className="container mx-auto px-4">
          {icon && <div className="text-6xl mb-4">{icon}</div>}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
          {shortDesc && <p className="text-xl text-brand-100 max-w-3xl">{shortDesc}</p>}
        </div>
      </section>

      {featuredImage && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <img
              src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {description && (
            <div
              className="prose prose-lg max-w-none text-gray-700 mb-12"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {features.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}