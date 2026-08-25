import { motion } from 'framer-motion'
import { MessageCircle, Phone, MapPin } from 'lucide-react'
import { openWhatsApp, waMessages, PHONE_RAW, WA_PHONE } from '../utils/whatsapp'

const contactItems = [
  {
    icon: <MessageCircle size={16} />,
    label: 'WhatsApp',
    value: WA_PHONE,
    color: '#25D366',
    colorRgb: '37,211,102',
    href: 'https://wa.me/918148723769',
    external: true,
  },
  {
    icon: <Phone size={16} />,
    label: 'Phone',
    value: WA_PHONE,
    color: '#f97316',
    colorRgb: '249,115,22',
    href: PHONE_RAW,
    external: false,
  },
  {
    icon: <MapPin size={16} />,
    label: 'Location',
    value: 'Kollidam, Tamil Nadu',
    color: '#8b5cf6',
    colorRgb: '139,92,246',
    href: 'https://maps.google.com/?q=Kollidam,Tamil+Nadu,India',
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-14 px-4 sm:px-6 lg:px-8 rounded-t-[2.5rem]"
      style={{ background: 'linear-gradient(180deg,#07101f 0%,#020817 100%)' }}
      aria-label="Contact section"
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-[#f97316] text-xs font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-md mx-auto">
            Tell us where you want to go — we'll help you pick the right vehicle.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openWhatsApp(waMessages.contact())}
            className="flex items-center justify-center gap-2 text-white font-bold
                       px-6 py-3 rounded-xl text-sm"
            style={{
              background: 'linear-gradient(135deg,#25D366,#128C7E)',
              boxShadow: '0 0 20px rgba(37,211,102,0.3)',
              border: '1px solid rgba(37,211,102,0.4)',
            }}
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={PHONE_RAW}
            className="flex items-center justify-center gap-2 text-white font-semibold
                       px-6 py-3 rounded-xl text-sm"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)',
            }}
            aria-label="Call City Driver"
          >
            <Phone size={16} />
            Call Now
          </motion.a>
        </motion.div>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5"
        >
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl group transition-all"
              style={{
                background: `rgba(${item.colorRgb},0.07)`,
                border: `1px solid rgba(${item.colorRgb},0.18)`,
              }}
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: `rgba(${item.colorRgb},0.15)`,
                  color: item.color,
                }}
              >
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="text-white/40 text-xs">{item.label}</p>
                <p
                  className="text-white text-sm font-semibold truncate group-hover:transition-colors"
                  style={{ '--hover-color': item.color }}
                >
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Tagline strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-2
                     px-5 py-4 rounded-xl"
          style={{
            background: 'rgba(249,115,22,0.07)',
            border: '1px solid rgba(249,115,22,0.16)',
          }}
        >
          <p className="text-[#f97316] font-bold text-sm">
            "Your Trusted Driver, Anytime."
          </p>
          <p className="text-slate-400 text-xs text-center sm:text-right">
            Local trips · Outstation · Airport transfers · Family journeys
          </p>
        </motion.div>

      </div>
    </section>
  )
}
