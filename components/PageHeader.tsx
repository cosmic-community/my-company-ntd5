interface Props {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: Props) {
  return (
    <section className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl text-brand-100 max-w-2xl mx-auto">{description}</p>}
      </div>
    </section>
  )
}