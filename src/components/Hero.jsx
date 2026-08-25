import { motion } from 'framer-motion'
import { MessageCircle, Car, ChevronDown } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const seatOptions = ['4 Seater', '5 Seater', '6 Seater', '8 Seater']

export default function Hero() {
  const handleExplore = () => {
    const el = document.getElementById('vehicles')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f1f3d]"
      aria-label="Hero section"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #f97316 0%, transparent 50%),
                            radial-gradient(circle at 75% 20%, #1e40af 0%, transparent 50%)`
        }} />
      </div>

      {/* Grid dots */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Road illustration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20" aria-hidden="true">
        <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <rect y="40" width="1440" height="56" fill="#1e293b" />
          <rect y="60" width="1440" height="4" fill="#374151" />
          {/* Dashed lane markers */}
          {Array.from({ length: 20 }).map((_, i) => (
            <rect key={i} x={i * 80} y="66" width="40" height="3" fill="#f97316" opacity="0.6" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-[#f97316]/15 border border-[#f97316]/30 text-[#fb923c] text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          Kollidam, Tamil Nadu — Available Now
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Your Journey.{' '}
          <span className="text-[#f97316]">Our Drive.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Comfortable, reliable and affordable car travel services from Kollidam to your destination.
        </motion.p>

        {/* Seat options pills */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {seatOptions.map((option) => (
            <span
              key={option}
              className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <Car size={14} className="text-[#f97316]" />
              {option}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(37,211,102,0.4)' }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openWhatsApp(waMessages.general())}
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold px-8 py-4 rounded-2xl shadow-lg text-lg transition-all duration-200"
            aria-label="Book via WhatsApp"
          >
            <MessageCircle size={22} />
            Book via WhatsApp
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleExplore}
            className="flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm text-lg transition-all duration-200"
            aria-label="Explore vehicles"
          >
            Explore Vehicles
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-14 flex flex-wrap justify-center gap-6 text-blue-100/60 text-sm"
        >
          {['Professional Drivers', 'Air Conditioned Vehicles', 'Local & Outstation Trips', 'Easy WhatsApp Booking'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-[#f97316]">✓</span> {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
