import { motion } from 'framer-motion'
import { Car, MapPin, Plane, Users, Camera, Star, MessageCircle } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'
import carLogo from '../assets/car_logo.png'

const highlights = [
  { icon: Car, label: '4 / 5 / 6 / 8 Seater Vehicles' },
  { icon: MapPin, label: 'Local & Outstation Travel' },
  { icon: Plane, label: 'Airport Transfers' },
  { icon: Users, label: 'Family Trips' },
  { icon: Camera, label: 'Tourist Trips' },
  { icon: Star, label: 'Temple Pilgrimage Trips' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="About section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-6 flex items-center justify-center">
              <img
                src={carLogo}
                alt="City Driver Kollidam — Your Trusted Travel Partner"
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#f97316] text-white rounded-2xl px-5 py-3 shadow-xl z-10">
              <p className="text-xs font-medium opacity-80">Serving</p>
              <p className="text-base font-extrabold">Kollidam</p>
              <p className="text-xs font-medium opacity-80">& Beyond</p>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">About City Driver</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] leading-tight">
              Your Trusted Travel Partner in Kollidam
            </h2>
            <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
              <p>
                City Driver is a car travel service based in Kollidam, Tamil Nadu, providing comfortable and
                reliable transportation for local trips, outstation journeys and special occasions.
              </p>
              <p>
                We offer a range of seating options — from compact 4 seater vehicles for couples and small
                groups, to spacious 8 seater vehicles ideal for families and large groups. Every vehicle is
                air-conditioned, well-maintained and driven by a responsible driver.
              </p>
              <p>
                Whether you need a ride to the airport, a trip to a temple, a family outing or a long
                outstation journey across Tamil Nadu — City Driver is ready to serve you. All bookings and
                price discussions happen directly through WhatsApp for a simple, personal experience.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-[#f97316]" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                  </div>
                )
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openWhatsApp(waMessages.general())}
              className="mt-8 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold px-7 py-3.5 rounded-2xl shadow-md transition-all duration-200"
              aria-label="Chat with City Driver on WhatsApp"
            >
              <MessageCircle size={18} />
              Chat with City Driver
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
