import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-600 to-brand-900 rounded-lg flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="text-xl font-bold text-gray-900">My Company</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-brand-600 font-medium transition">
              Services
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-brand-600 font-medium transition">
              Team
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-brand-600 font-medium transition">
              Case Studies
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-brand-600 font-medium transition">
              Testimonials
            </Link>
          </nav>
          <Link
            href="/services"
            className="hidden md:inline-flex items-center px-5 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 font-medium transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}