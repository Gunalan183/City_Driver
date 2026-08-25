import { motion } from 'framer-motion'
import {
  MapPin, Plane, Train, ArrowRight, RotateCcw, Users, Camera, Building2,
  MessageCircle, Navigation, Star
} from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const services = [
  {
    icon: MapPin,
    title: 'Local Travel',
    desc: 'Comfortable transportation for local trips within Kollidam and nearby areas.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Navigation,
    title: 'Outstation Trips',
    desc: 'Travel comfortably to destinations across Tamil Nadu and nearby states.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Plane,
    title: 'Airport Pickup & Drop',
    desc: 'Reliable airport transportation ensuring you reach on time.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Train,
    title: 'Railway Station Pickup & Drop',
    desc: 'Convenient station transfers for a stress-free travel experience.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: ArrowRight,
    title: 'One-Way Trips',
    desc: 'Easy and affordable transportation for one-way journeys.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: RotateCcw,
    title: 'Round Trips',
    desc: 'Comfortable round-trip travel with a reliable driver.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Users,
    title: 'Family Trips',
    desc: 'Spacious vehicles perfect for family travel near and far.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Camera,
    title: 'Tourist Trips',
    desc: 'Travel comfortably while exploring popular destinations.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Star,
    title: 'Temple Trips',
    desc: 'Convenient transportation for temple visits and pilgrimage trips.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Building2,
    title: 'Corporate Travel',
    desc: 'Professional transportation for business travel and events.',
    color: 'bg-slate-50 text-slate-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Services section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f1f3d]">Our Travel Services</h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            From local rides to long outstation journeys — we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-[#0f1f3d] text-sm mb-2 leading-snug">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{service.desc}</p>
                <button
                  onClick={() => openWhatsApp(waMessages.service(service.title))}
                  className="mt-4 flex items-center gap-1.5 text-[#25D366] hover:text-[#20bd5c] text-xs font-semibold transition-colors"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                >
                  <MessageCircle size={13} />
                  Enquire Now
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
