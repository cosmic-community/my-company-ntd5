import { getTeamMembers } from '@/lib/cosmic'
import TeamGrid from '@/components/TeamGrid'
import PageHeader from '@/components/PageHeader'

export const metadata = {
  title: 'Team - My Company',
}

export default async function TeamPage() {
  const members = await getTeamMembers()

  return (
    <div>
      <PageHeader
        title="Meet Our Team"
        description="Talented professionals dedicated to your success"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <TeamGrid members={members} />
        </div>
      </section>
    </div>
  )
}