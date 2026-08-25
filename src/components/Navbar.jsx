import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'Vehicles',     href: '#vehicles' },
  { label: 'Services',     href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'About',        href: '#about' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen]        = useState(false)
  const [scrolled, setScrolled]    = useState(false)
  const [activeSection, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s))
    return () => document.querySelectorAll('section[id]').forEach(s => obs.unobserve(s))
  }, [])

  const handleNav = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-3 sm:px-5 pt-3"
      role="banner"
    >
      {/* ── Main bar ── */}
      <div className={`w-full max-w-6xl flex items-center justify-between gap-3 rounded-2xl px-3 sm:px-5 py-2.5 transition-all duration-300 ${
        scrolled
          ? 'lg:bg-[#0c1a30]/95 lg:backdrop-blur-xl lg:shadow-xl lg:border lg:border-white/10'
          : 'lg:bg-[#0c1a30]/60 lg:backdrop-blur-md lg:border lg:border-white/8'
      }`}>

        {/* LEFT — Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex-shrink-0 focus:outline-none"
          aria-label="City Driver Kollidam — Home"
        >
          <Logo size="sm" />
        </button>

        {/* CENTER — Pill nav (desktop) */}
        <nav
          className="hidden lg:flex items-center bg-white/6 border border-white/10 rounded-xl px-1.5 py-1.5 gap-0.5"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#0c1a30] font-bold shadow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        {/* RIGHT — CTA + hamburger */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openWhatsApp(waMessages.general())}
            className="hidden sm:flex items-center gap-1.5 bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg transition-all duration-200 whitespace-nowrap"
            aria-label="Book Now"
          >
            Book Now
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </motion.button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl text-white/80 hover:text-white transition-all duration-300 ${
              scrolled
                ? 'bg-[#0c1a30]/95 backdrop-blur-xl border border-white/12 shadow-lg'
                : 'bg-[#0c1a30]/70 backdrop-blur-md border border-white/10'
            }`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-3 right-3 bg-[#0c1a30]/97 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-2.5 space-y-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-white/12 text-white font-bold'
                        : 'text-white/55 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </div>
            <div className="px-2.5 pb-2.5">
              <button
                onClick={() => { setIsOpen(false); openWhatsApp(waMessages.general()) }}
                className="w-full flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold py-3.5 rounded-xl text-sm shadow-lg transition-all"
              >
                Book Now <ArrowUpRight size={15} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
