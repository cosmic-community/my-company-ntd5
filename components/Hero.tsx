import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Professional Services You Can Trust
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Ideas Into{' '}
            <span className="bg-gradient-to-r from-brand-100 to-white bg-clip-text text-transparent">
              Results
            </span>
          </h1>
          <p className="text-xl text-brand-100 mb-8 leading-relaxed">
            We partner with ambitious companies to deliver innovative solutions that drive growth and success.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center px-7 py-3.5 bg-white text-brand-700 rounded-lg hover:bg-brand-50 font-semibold transition shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-7 py-3.5 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}