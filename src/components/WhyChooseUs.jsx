import { motion } from 'framer-motion'
import { Shield, Car, User, Wallet, Map, MessageCircle } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Reliable Service',
    desc: 'We value your time and provide dependable travel service you can count on.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Car,
    title: 'Comfortable Cars',
    desc: 'Choose from 4, 5, 6 and 8 seater air-conditioned vehicles for your journey.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: User,
    title: 'Experienced Drivers',
    desc: 'Professional and responsible drivers committed to a comfortable journey.',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: Wallet,
    title: 'Affordable Travel',
    desc: 'Competitive pricing based on your journey. Contact us to get a quote.',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Map,
    title: 'Local Knowledge',
    desc: 'Experienced with local and outstation routes across Tamil Nadu.',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    icon: MessageCircle,
    title: 'Easy Booking',
    desc: 'Simply contact us through WhatsApp and discuss your trip requirements.',
    color: 'bg-pink-100 text-pink-700',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1f3d]" aria-label="Why choose us section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Our Strengths</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Why Choose City Driver?</h2>
          <p className="mt-3 text-blue-200/70 text-lg max-w-xl mx-auto">
            We make every journey comfortable, easy and worry-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
