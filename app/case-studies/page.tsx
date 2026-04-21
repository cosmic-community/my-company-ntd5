import { getCaseStudies } from '@/lib/cosmic'
import CaseStudiesGrid from '@/components/CaseStudiesGrid'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Case Studies - My Company',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div>
      <PageHeader
        title="Case Studies"
        description="Real results delivered for our clients"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CaseStudiesGrid caseStudies={caseStudies} />
        </div>
      </section>
    </div>
  )
}