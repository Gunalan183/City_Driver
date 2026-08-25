import { motion } from 'framer-motion'
import { MessageCircle, Car, ChevronDown, MapPin, Phone } from 'lucide-react'
import { openWhatsApp, waMessages, PHONE_RAW, WA_PHONE } from '../utils/whatsapp'
import heroCar from '../assets/hero.png'

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.7, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

const seatOptions = [
  { label: '4 Seater', icon: '🚗' },
  { label: '5 Seater', icon: '🚙' },
  { label: '6 Seater', icon: '🚐' },
  { label: '8 Seater', icon: '🚌' },
]

const stats = [
  { value: '4–8', label: 'Seater Options' },
  { value: 'AC', label: 'All Vehicles' },
  { value: '24/7', label: 'WhatsApp Support' },
  { value: '100+', label: 'Destinations' },
]

export default function Hero() {
  const handleExplore = () => {
    document.getElementById('vehicles')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero section"
      style={{ background: 'linear-gradient(135deg, #060e1c 0%, #0c1a30 55%, #112244 100%)' }}
    >
      {/* ── Decorative blobs ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orange glow bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)' }} />
        {/* Blue glow top-right */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 65%)' }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Diagonal stripe overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* ── Top contact bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 hidden md:flex items-center justify-end gap-6 px-8 pt-24 pb-2 text-white/40 text-xs"
      >
        <a href={PHONE_RAW} className="flex items-center gap-1.5 hover:text-[#f97316] transition-colors">
          <Phone size={12} /> {WA_PHONE}
        </a>
        <span className="flex items-center gap-1.5">
          <MapPin size={12} className="text-[#f97316]" /> Kollidam, Tamil Nadu
        </span>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center w-full">

          {/* ── LEFT — Text content ── */}
          <div className="flex flex-col items-start">

            {/* Availability pill */}
            <motion.div
              custom={0} variants={fadeLeft} initial="hidden" animate="visible"
              className="flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/25 text-[#fb923c] text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
              Available Now · Kollidam, Tamil Nadu
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1} variants={fadeLeft} initial="hidden" animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-5"
            >
              Your Journey.
              <br />
              <span className="relative inline-block mt-1">
                <span className="text-[#f97316]">Our Drive.</span>
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
                  className="absolute -bottom-2 left-0 h-1 w-full bg-[#f97316]/40 rounded-full origin-left"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2} variants={fadeLeft} initial="hidden" animate="visible"
              className="text-base sm:text-lg text-blue-100/65 max-w-lg mb-8 leading-relaxed"
            >
              Comfortable, reliable and affordable car travel from
              Kollidam — for local rides, outstation trips, airport
              transfers and family journeys.
            </motion.p>

            {/* Seat pills */}
            <motion.div
              custom={3} variants={fadeLeft} initial="hidden" animate="visible"
              className="flex flex-wrap gap-2 mb-9"
            >
              {seatOptions.map((opt) => (
                <span key={opt.label}
                  className="flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/85 text-xs font-semibold px-3.5 py-2 rounded-xl backdrop-blur-sm"
                >
                  <span>{opt.icon}</span>
                  {opt.label}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              custom={4} variants={fadeLeft} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 10px 35px rgba(37,211,102,0.45)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => openWhatsApp(waMessages.general())}
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold px-7 py-4 rounded-2xl shadow-lg text-base transition-all duration-200"
                aria-label="Book via WhatsApp"
              >
                <MessageCircle size={20} />
                Book via WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleExplore}
                className="flex items-center justify-center gap-2.5 bg-white/10 border border-white/20 hover:bg-white/18 text-white font-semibold px-7 py-4 rounded-2xl backdrop-blur-sm text-base transition-all duration-200"
                aria-label="Explore vehicles"
              >
                <Car size={18} />
                Explore Vehicles
              </motion.button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              custom={5} variants={fadeLeft} initial="hidden" animate="visible"
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
            >
              {['Professional Drivers', 'AC Vehicles', 'Local & Outstation', 'WhatsApp Booking'].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-white/40 text-xs">
                  <span className="text-[#f97316] text-sm">✓</span> {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Car image ── */}
          <motion.div
            variants={fadeRight} initial="hidden" animate="visible"
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow ring behind car */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-[420px] h-[420px] rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 65%)' }} />
            </div>

            {/* Car image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full max-w-[560px]"
            >
              <img
                src={heroCar}
                alt="City Driver Kollidam — comfortable car travel"
                className="w-full h-auto object-contain drop-shadow-2xl"
                loading="eager"
              />
            </motion.div>

            {/* Floating badge — WhatsApp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
              className="hidden sm:block absolute top-6 left-0 lg:-left-6 bg-[#25D366] text-white rounded-2xl px-4 py-3 shadow-xl z-20 cursor-pointer"
              onClick={() => openWhatsApp(waMessages.general())}
              role="button"
              aria-label="Book via WhatsApp"
            >
              <p className="text-xs font-medium opacity-80">Book Instantly</p>
              <p className="text-sm font-extrabold flex items-center gap-1.5 mt-0.5">
                <MessageCircle size={14} /> WhatsApp Us
              </p>
            </motion.div>

            {/* Floating badge — Location */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 200 }}
              className="hidden sm:block absolute bottom-8 right-0 lg:-right-4 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-2xl px-4 py-3 shadow-xl z-20"
            >
              <p className="text-xs font-medium opacity-60 flex items-center gap-1">
                <MapPin size={11} className="text-[#f97316]" /> Based in
              </p>
              <p className="text-sm font-extrabold mt-0.5">Kollidam, TN</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 border-t border-white/8 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-5 px-4 gap-0.5">
                <span className="text-2xl sm:text-3xl font-black text-[#f97316]">{stat.value}</span>
                <span className="text-white/45 text-xs font-medium tracking-wide uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.8, duration: 1.8, repeat: Infinity }}
        className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 text-white/25 hidden sm:block"
        aria-hidden="true"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  )
}
