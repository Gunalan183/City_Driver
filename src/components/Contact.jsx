import { motion } from 'framer-motion'
import { MessageCircle, Phone, MapPin } from 'lucide-react'
import { openWhatsApp, waMessages, PHONE_RAW, WA_PHONE } from '../utils/whatsapp'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0c1a30]" aria-label="Contact section">
      <div className="max-w-7xl mx-auto">
        {/* CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Ready to Start Your Journey?</h2>
          <p className="mt-3 text-blue-200/70 text-lg max-w-2xl mx-auto">
            Tell us where you want to go, and we'll help you choose the right vehicle for your journey.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => openWhatsApp(waMessages.contact())}
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold px-8 py-4 rounded-2xl shadow-lg text-lg transition-all duration-200"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={PHONE_RAW}
              className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-200"
              aria-label="Call City Driver"
            >
              <Phone size={22} />
              Call Now
            </motion.a>
          </div>
        </motion.div>

        {/* Contact info + Map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
              <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-0.5">WhatsApp</p>
                <a
                  href={`https://wa.me/918148723769`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold text-lg hover:text-[#25D366] transition-colors"
                  aria-label="Open WhatsApp chat"
                >
                  {WA_PHONE}
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
              <div className="w-12 h-12 bg-[#f97316]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-[#f97316]" />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-0.5">Phone</p>
                <a
                  href={PHONE_RAW}
                  className="text-white font-bold text-lg hover:text-[#f97316] transition-colors"
                  aria-label="Call City Driver"
                >
                  {WA_PHONE}
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-blue-400" />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-0.5">Location</p>
                <p className="text-white font-bold text-lg">Kollidam, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Tagline */}
            <div className="bg-gradient-to-r from-[#f97316]/20 to-transparent border border-[#f97316]/20 rounded-2xl p-6">
              <p className="text-[#f97316] font-bold text-lg">"Your Trusted Driver, Anytime."</p>
              <p className="text-blue-200/60 text-sm mt-1">
                Available for local trips, outstation journeys, airport transfers and more.
              </p>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px] relative"
          >
            {/* Google Maps iframe placeholder */}
            {/* Replace the div below with an actual Google Maps embed iframe */}
            <div className="w-full h-full bg-[#162850] flex flex-col items-center justify-center gap-4 min-h-[350px]">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '25px 25px',
                }}
                aria-hidden="true"
              />
              <MapPin size={40} className="text-[#f97316] relative z-10" aria-hidden="true" />
              <div className="text-center relative z-10 px-6">
                <p className="text-white font-bold text-lg">Kollidam, Tamil Nadu</p>
                <p className="text-white/50 text-sm mt-1">
                  Replace this block with a Google Maps embed iframe for your exact business location.
                </p>
                <a
                  href="https://maps.google.com/?q=Kollidam,Tamil+Nadu,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2.5 rounded-xl border border-white/20 transition-all"
                  aria-label="View Kollidam on Google Maps"
                >
                  <MapPin size={14} />
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
