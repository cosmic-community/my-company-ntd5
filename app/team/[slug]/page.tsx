// app/team/[slug]/page.tsx
import { getTeamMember } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { getMetafieldValue } from '@/types'

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getTeamMember(slug)

  if (!member) {
    notFound()
  }

  const name = getMetafieldValue(member.metadata?.name) || member.title
  const jobTitle = getMetafieldValue(member.metadata?.job_title)
  const bio = getMetafieldValue(member.metadata?.bio)
  const email = getMetafieldValue(member.metadata?.email)
  const linkedin = getMetafieldValue(member.metadata?.linkedin)
  const photo = member.metadata?.photo

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            {photo && (
              <img
                src={`${photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                alt={name}
                className="w-full rounded-xl shadow-lg"
              />
            )}
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-2">{name}</h1>
            {jobTitle && <p className="text-xl text-brand-600 font-medium mb-6">{jobTitle}</p>}
            {bio && (
              <div
                className="prose prose-lg max-w-none text-gray-700 mb-8"
                dangerouslySetInnerHTML={{ __html: bio }}
              />
            )}
            <div className="flex flex-wrap gap-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center px-5 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 border-2 border-brand-600 text-brand-600 rounded-lg hover:bg-brand-50 transition"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}