import { getTestimonials } from '@/lib/cosmic'
import TestimonialsGrid from '@/components/TestimonialsGrid'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Testimonials - My Company',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div>
      <PageHeader
        title="Client Testimonials"
        description="Hear what our clients have to say about working with us"
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <TestimonialsGrid testimonials={testimonials} />
        </div>
      </section>
    </div>
  )
}