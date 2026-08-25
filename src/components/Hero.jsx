import { motion, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  MessageCircle, Car, MapPin, Phone,
  ArrowRight, Star, Shield, Clock, ChevronDown,
} from 'lucide-react'
import { openWhatsApp, waMessages, PHONE_RAW, WA_PHONE } from '../utils/whatsapp'
import heroCar from '../assets/hero.png'

/* ── Animated counter ── */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const ctrl = animate(0, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return ctrl.stop
  }, [to])
  return <>{val}{suffix}</>
}

const stats = [
  { value: 500, suffix: '+', label: 'Happy Rides', color: '#f97316' },
  { value: 100, suffix: '+', label: 'Destinations', color: '#8b5cf6' },
  { value: 5,   suffix: '',  label: 'Fleet Types',  color: '#06b6d4' },
  { value: 24,  suffix: '/7',label: 'Support',      color: '#10b981' },
]

const fleet = [
  { seats: '4',   type: 'Sedan',    color: '#6366f1' },
  { seats: '5',   type: 'SUV',      color: '#8b5cf6' },
  { seats: '6',   type: 'MUV',      color: '#f97316' },
  { seats: '7',   type: 'Innova',   color: '#06b6d4' },
  { seats: '18+', type: 'Van',      color: '#10b981' },
]

const routes = ['Chennai', 'Trichy', 'Madurai', 'Coimbatore', 'Ooty', 'Pondicherry']

export default function Hero() {
  const handleExplore = () =>
    document.getElementById('vehicles')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden rounded-b-[2.5rem]"
      aria-label="Hero section"
      style={{ background: 'linear-gradient(160deg, #020817 0%, #07101f 50%, #0a0118 100%)' }}
    >

      {/* ── Grid background ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.05) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(139,92,246,0.05) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── Ambient blobs ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.16) 0%,transparent 65%)' }} />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.12) 0%,transparent 65%)' }} />
        <div className="absolute bottom-0 -right-24 w-[350px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(6,182,212,0.1) 0%,transparent 65%)' }} />
      </div>

      {/* ── Top info bar (desktop only) ── */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 hidden md:flex items-center justify-between px-8 lg:px-16 pt-24 pb-0 text-white/35 text-xs"
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
          Now serving Tamil Nadu
        </span>
        <div className="flex items-center gap-6">
          <a href={PHONE_RAW} className="flex items-center gap-1.5 hover:text-[#f97316] transition-colors">
            <Phone size={11} />{WA_PHONE}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={11} className="text-[#f97316]" />Kollidam, Tamil Nadu
          </span>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════
          MAIN HERO CONTENT
      ══════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 md:pt-6 md:pb-6">

          {/* Two-column on desktop, stacked on mobile */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* ── LEFT: Text content ── */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* Available pill */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-5"
                style={{
                  background: 'rgba(249,115,22,0.1)',
                  border: '1px solid rgba(249,115,22,0.28)',
                  color: '#fb923c',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                Available Now · Kollidam, TN
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-xs italic mb-5 -mt-2"
              >
                "Your Trusted Driver, Anytime."
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="font-black leading-[1.05] tracking-tight text-white mb-5
                           text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
              >
                Your Journey.
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg,#f97316 0%,#ef4444 45%,#8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Our Drive.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4 }}
                className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-md mb-7"
              >
                Comfortable, reliable and affordable car travel from Kollidam —
                local rides, outstation trips, airport transfers &amp; family journeys.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.52 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
              >
                {[
                  { icon: <Star size={12} fill="#f97316" className="text-[#f97316]" />, text: 'Top Rated' },
                  { icon: <Shield size={12} className="text-[#10b981]" />,              text: 'Safe & Reliable' },
                  { icon: <Clock size={12} className="text-[#06b6d4]" />,               text: '24/7 Available' },
                ].map((b) => (
                  <span
                    key={b.text}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/65"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {b.icon}{b.text}
                  </span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.64 }}
                className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => openWhatsApp(waMessages.general())}
                  className="flex items-center justify-center gap-2.5 text-white font-bold
                             px-7 py-4 rounded-2xl text-sm w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg,#25D366,#128C7E)',
                    boxShadow: '0 0 28px rgba(37,211,102,0.38)',
                    border: '1px solid rgba(37,211,102,0.4)',
                  }}
                  aria-label="Book via WhatsApp"
                >
                  <MessageCircle size={18} />
                  Book via WhatsApp
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleExplore}
                  className="flex items-center justify-center gap-2 text-white font-semibold
                             px-7 py-4 rounded-2xl text-sm w-full sm:w-auto"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(12px)',
                  }}
                  aria-label="Explore vehicles"
                >
                  <Car size={16} />
                  Explore Fleet
                  <ArrowRight size={14} />
                </motion.button>
              </motion.div>

              {/* Fleet pill row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.78 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2"
              >
                {fleet.map((v) => (
                  <button
                    key={v.seats}
                    onClick={() => openWhatsApp(waMessages.vehicle(v.seats))}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold
                               text-white/70 hover:text-white transition-colors"
                    style={{
                      background: `rgba(${hexToRgb(v.color)},0.1)`,
                      border: `1px solid rgba(${hexToRgb(v.color)},0.28)`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: v.color }}
                    />
                    {v.seats} Seater {v.type}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: Car image + info cards ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 w-full max-w-lg lg:max-w-none relative"
            >
              {/* Glow behind car */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none flex items-center justify-center"
              >
                <div
                  className="w-72 h-72 sm:w-96 sm:h-96 rounded-full"
                  style={{
                    background: 'radial-gradient(circle,rgba(249,115,22,0.18) 0%,rgba(139,92,246,0.1) 50%,transparent 70%)',
                  }}
                />
              </div>

              {/* Car image — floating animation */}
              <motion.img
                src={heroCar}
                alt="City Driver Kollidam — premium car"
                loading="eager"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-full h-auto object-contain mx-auto"
                style={{
                  filter:
                    'drop-shadow(0 24px 48px rgba(249,115,22,0.28)) drop-shadow(0 0 60px rgba(139,92,246,0.18))',
                  maxHeight: '320px',
                }}
              />

              {/* Ground glow */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-4 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse,rgba(249,115,22,0.3) 0%,transparent 70%)',
                  filter: 'blur(10px)',
                }}
              />

              {/* Floating card — WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: 'spring', stiffness: 160 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => openWhatsApp(waMessages.general())}
                role="button"
                aria-label="Book via WhatsApp"
                className="absolute top-4 left-0 sm:-left-6 z-20 cursor-pointer px-4 py-3 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg,#25D366,#128C7E)',
                  boxShadow: '0 8px 28px rgba(37,211,102,0.4)',
                  border: '1px solid rgba(37,211,102,0.45)',
                }}
              >
                <p className="text-green-100/75 text-xs">Instant Booking</p>
                <p className="text-white text-sm font-extrabold flex items-center gap-1.5 mt-0.5">
                  <MessageCircle size={13} />WhatsApp Us
                </p>
              </motion.div>

              {/* Floating card — Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 160 }}
                className="absolute bottom-6 right-0 sm:-right-4 z-20 px-4 py-3 rounded-2xl"
                style={{
                  background: 'rgba(10,16,30,0.88)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  boxShadow: '0 8px 28px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <p className="text-white/45 text-xs flex items-center gap-1">
                  <MapPin size={10} className="text-[#f97316]" />Based in
                </p>
                <p className="text-white text-sm font-extrabold mt-0.5">Kollidam, TN</p>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Popular routes (mobile-friendly row) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-3 text-center lg:text-left">
              Popular Routes
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {routes.map((city) => (
                <button
                  key={city}
                  onClick={() => openWhatsApp(waMessages.destination(city))}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs
                             text-cyan-300/65 hover:text-cyan-300 transition-colors"
                  style={{
                    background: 'rgba(6,182,212,0.08)',
                    border: '1px solid rgba(6,182,212,0.18)',
                  }}
                >
                  <MapPin size={10} />{city}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 1.0 }}
        className="relative z-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08 }}
                className="relative flex flex-col items-center justify-center py-5 px-3 gap-0.5"
                style={{
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                {/* Accent line top */}
                <motion.div
                  className="absolute top-0 left-1/4 right-1/4 h-px"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                  style={{ background: s.color, opacity: 0.7 }}
                  aria-hidden="true"
                />
                <span className="text-2xl sm:text-3xl font-black" style={{ color: s.color }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                <span className="text-white/40 text-xs font-medium tracking-wide uppercase text-center">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 text-white/20 hidden sm:block"
        aria-hidden="true"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}

/* tiny util — convert hex color to "r, g, b" string for rgba() */
function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const n = parseInt(h, 16)
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`
}
