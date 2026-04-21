interface Props {
  eyebrow?: string
  title: string
  description?: string
  light?: boolean
}

export default function SectionHeader({ eyebrow, title, description, light = false }: Props) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      {eyebrow && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${light ? 'text-brand-100' : 'text-brand-600'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? 'text-brand-100' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}