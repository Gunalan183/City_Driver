import { motion } from 'framer-motion'
import {
  MapPin, Plane, Train, ArrowRight, RotateCcw,
  Users, Camera, Building2, MessageCircle, Navigation, Star
} from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const services = [
  { icon: MapPin,      title: 'Local Travel',          iconBg: 'bg-blue-50',   iconColor: 'text-blue-600' },
  { icon: Navigation,  title: 'Outstation Trips',       iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
  { icon: Plane,       title: 'Airport Transfer',       iconBg: 'bg-sky-50',    iconColor: 'text-sky-600' },
  { icon: Train,       title: 'Railway Station',        iconBg: 'bg-purple-50', iconColor: 'text-purple-600' },
  { icon: ArrowRight,  title: 'One-Way Trips',          iconBg: 'bg-teal-50',   iconColor: 'text-teal-600' },
  { icon: RotateCcw,   title: 'Round Trips',            iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600' },
  { icon: Users,       title: 'Family Trips',           iconBg: 'bg-rose-50',   iconColor: 'text-rose-500' },
  { icon: Camera,      title: 'Tourist Trips',          iconBg: 'bg-amber-50',  iconColor: 'text-amber-600' },
  { icon: Star,        title: 'Temple Trips',           iconBg: 'bg-yellow-50', iconColor: 'text-yellow-600' },
  { icon: Building2,   title: 'Corporate Travel',       iconBg: 'bg-slate-50',  iconColor: 'text-slate-600' },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-label="Services section"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-[#f97316]/10 text-[#f97316] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f1f3d]">
            Our Travel Services
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Every trip handled with care — local or outstation.
          </p>
        </motion.div>

        {/* Services grid — 2 col mobile, 5 col desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.button
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -3, boxShadow: '0 10px 28px rgba(15,31,61,0.09)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openWhatsApp(waMessages.service(s.title))}
                className="group flex flex-col items-center text-center gap-2.5 bg-white border border-gray-100 hover:border-[#f97316]/30 rounded-2xl p-4 sm:p-5 shadow-sm transition-all duration-200"
                aria-label={`Enquire about ${s.title}`}
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 ${s.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={20} className={s.iconColor} />
                </div>
                <p className="text-[#0f1f3d] font-semibold text-xs sm:text-sm leading-snug group-hover:text-[#f97316] transition-colors">
                  {s.title}
                </p>
                <span className="flex items-center gap-1 text-[#25D366] text-[10px] sm:text-xs font-semibold">
                  <MessageCircle size={10} /> Enquire
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl bg-[#0f1f3d] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-base">Need help choosing a service?</p>
            <p className="text-white/50 text-xs mt-0.5">We'll suggest the best option for your trip.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openWhatsApp(waMessages.general())}
            className="flex-shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all duration-200 whitespace-nowrap"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
