import Link from 'next/link'
import { TeamMember, getMetafieldValue } from '@/types'

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  if (!members || members.length === 0) {
    return <p className="text-center text-gray-500">No team members available.</p>
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map(member => {
        const name = getMetafieldValue(member.metadata?.name) || member.title
        const jobTitle = getMetafieldValue(member.metadata?.job_title)
        const photo = member.metadata?.photo

        return (
          <Link
            key={member.id}
            href={`/team/${member.slug}`}
            className="group text-center"
          >
            <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-gray-100">
              {photo ? (
                <img
                  src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl text-gray-400">
                  👤
                </div>
              )}
            </div>
            <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition">
              {name}
            </h3>
            {jobTitle && <p className="text-sm text-gray-600">{jobTitle}</p>}
          </Link>
        )
      })}
    </div>
  )
}