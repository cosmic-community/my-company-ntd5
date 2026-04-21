import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-600 to-brand-900 rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-xl font-bold text-white">My Company</span>
            </div>
            <p className="text-sm text-gray-400">
              Professional services delivering exceptional results for our clients.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/team" className="hover:text-white transition">Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition">All Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm">Ready to transform your business?</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} My Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}