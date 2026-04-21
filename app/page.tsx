import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import TeamGrid from '@/components/TeamGrid'
import CaseStudiesGrid from '@/components/CaseStudiesGrid'
import TestimonialsGrid from '@/components/TestimonialsGrid'
import SectionHeader from '@/components/SectionHeader'

export default async function HomePage() {
  const [services, team, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  return (
    <div>
      <Hero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Services"
            description="Comprehensive solutions designed to drive your business forward"
          />
          <ServicesGrid services={services.slice(0, 6)} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Success Stories"
            title="Case Studies"
            description="Real results for real clients"
          />
          <CaseStudiesGrid caseStudies={caseStudies.slice(0, 3)} />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Meet The Team"
            title="Our Experts"
            description="Talented professionals dedicated to your success"
          />
          <TeamGrid members={team.slice(0, 4)} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand-900 to-brand-700">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Client Love"
            title="What Our Clients Say"
            description="Don't just take our word for it"
            light
          />
          <TestimonialsGrid testimonials={testimonials.slice(0, 3)} />
        </div>
      </section>
    </div>
  )
}