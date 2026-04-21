import { Testimonial, getMetafieldValue } from '@/types'

function renderStars(rating: number) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  }
  return stars
}

export default function TestimonialsGrid({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials || testimonials.length === 0) {
    return <p className="text-center text-gray-500">No testimonials available.</p>
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map(t => {
        const quote = getMetafieldValue(t.metadata?.quote)
        const clientName = getMetafieldValue(t.metadata?.client_name)
        const clientTitle = getMetafieldValue(t.metadata?.client_title)
        const company = getMetafieldValue(t.metadata?.company)
        const rawRating = t.metadata?.rating
        const rating = typeof rawRating === 'number' ? rawRating : parseInt(getMetafieldValue(rawRating)) || 5
        const photo = t.metadata?.client_photo

        return (
          <div
            key={t.id}
            className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition"
          >
            <div className="flex mb-4">{renderStars(rating)}</div>
            {quote && (
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{quote}"
              </blockquote>
            )}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              {photo ? (
                <img
                  src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                  alt={clientName}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold">
                  {clientName ? clientName.charAt(0) : '?'}
                </div>
              )}
              <div>
                {clientName && <p className="font-semibold text-gray-900">{clientName}</p>}
                {(clientTitle || company) && (
                  <p className="text-sm text-gray-600">
                    {clientTitle}{clientTitle && company ? ', ' : ''}{company}
                  </p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}