import { motion } from 'framer-motion'
import { Shield, Car, User, Wallet, Map, MessageCircle } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Reliable Service',
    desc: 'We value your time and provide dependable travel service you can count on.',
    color: '#6366f1',
    rgb: '99,102,241',
  },
  {
    icon: Car,
    title: 'Comfortable Cars',
    desc: 'Choose from 4, 5, 6 and 8 seater air-conditioned vehicles for your journey.',
    color: '#f97316',
    rgb: '249,115,22',
  },
  {
    icon: User,
    title: 'Experienced Drivers',
    desc: 'Professional and responsible drivers committed to a comfortable journey.',
    color: '#10b981',
    rgb: '16,185,129',
  },
  {
    icon: Wallet,
    title: 'Affordable Travel',
    desc: 'Competitive pricing based on your journey. Contact us to get a quote.',
    color: '#8b5cf6',
    rgb: '139,92,246',
  },
  {
    icon: Map,
    title: 'Local Knowledge',
    desc: 'Experienced with local and outstation routes across Tamil Nadu.',
    color: '#06b6d4',
    rgb: '6,182,212',
  },
  {
    icon: MessageCircle,
    title: 'Easy Booking',
    desc: 'Simply contact us through WhatsApp and discuss your trip requirements.',
    color: '#25D366',
    rgb: '37,211,102',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-t-[2.5rem] rounded-b-[2.5rem]"
      style={{ background: 'linear-gradient(180deg,#020817 0%,#07101f 100%)' }}
      aria-label="Why choose us section"
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.04) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(139,92,246,0.04) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(139,92,246,0.1) 0%,transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="text-[#f97316] text-xs font-semibold uppercase tracking-widest">
            Our Strengths
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Why Choose City Driver?
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-md mx-auto">
            We make every journey comfortable, easy and worry-free.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative group flex gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{
                  background: `rgba(${item.rgb},0.05)`,
                  border: `1px solid rgba(${item.rgb},0.15)`,
                }}
              >
                {/* Top accent line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{
                    background: `linear-gradient(90deg,transparent,rgba(${item.rgb},0.5),transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: `rgba(${item.rgb},0.12)`,
                    color: item.color,
                    border: `1px solid rgba(${item.rgb},0.2)`,
                  }}
                >
                  <Icon size={18} />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="text-white font-bold text-sm mb-1"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
