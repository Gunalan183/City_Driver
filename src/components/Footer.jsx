import { motion } from 'framer-motion'
import { MessageCircle, Phone, MapPin, Heart } from 'lucide-react'
import Logo from './Logo'
import { openWhatsApp, waMessages, PHONE_RAW, WA_PHONE } from '../utils/whatsapp'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Local Travel',
  'Outstation',
  'Airport Transfer',
  'Tourist Trips',
  'Family Trips',
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#060e1c] text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Logo size="md" className="mb-4" />
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Comfortable and reliable car travel services from Kollidam for local and outstation journeys.
            </p>
            <p className="text-[#f97316] font-semibold text-sm italic">
              "Your Trusted Driver, Anytime."
            </p>
            <button
              onClick={() => openWhatsApp(waMessages.general())}
              className="mt-5 flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
              aria-label="WhatsApp City Driver"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </button>
          </div>

          {/* Quick Links + Services — 3-column grid */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Quick Links &amp; Services</h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
              {[
                ...quickLinks.map((l) => ({
                  label: l.label,
                  onClick: () => handleNav(l.href),
                })),
                ...serviceLinks.map((s) => ({
                  label: s,
                  onClick: () => openWhatsApp(waMessages.service(s)),
                })),
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-white/50 hover:text-[#f97316] text-sm transition-colors text-left truncate"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#f97316] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">Kollidam, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#f97316] flex-shrink-0" />
                <a href={PHONE_RAW} className="text-white/50 hover:text-white text-sm transition-colors" aria-label="Call City Driver">
                  {WA_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-[#25D366] flex-shrink-0" />
                <button
                  onClick={() => openWhatsApp(waMessages.general())}
                  className="text-white/50 hover:text-[#25D366] text-sm transition-colors"
                  aria-label="WhatsApp City Driver"
                >
                  WhatsApp
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 City Driver Kollidam. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-[#f97316]" aria-hidden="true" /> for Kollidam
          </p>
        </div>
      </div>
    </footer>
  )
}
