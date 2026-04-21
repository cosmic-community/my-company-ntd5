import { getServices } from '@/lib/cosmic'
import ServicesGrid from '@/components/ServicesGrid'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Services - My Company',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div>
      <PageHeader
        title="Our Services"
        description="Comprehensive professional services tailored to your needs"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ServicesGrid services={services} />
        </div>
      </section>
    </div>
  )
}