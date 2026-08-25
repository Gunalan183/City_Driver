import { motion } from 'framer-motion'
import { Users, Wind, Luggage, CheckCircle, MessageCircle } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

import car4 from '../assets/Car images/4 Seater Car.jpg'
import car5 from '../assets/Car images/5 Seater Car.jpg'
import car6 from '../assets/Car images/6 Seater Car.jpg'
import car8 from '../assets/Car images/8 Seater Car.jpg'

const vehicles = [
  {
    id: 1,
    seats: '4',
    label: '4 Seater',
    badge: 'Sedan',
    image: car4,
    features: [
      '4 Passengers',
      'Air Conditioned',
      'Comfortable Seating',
      'Suitable for Small Families & Couples',
      'Local & Outstation Trips',
    ],
  },
  {
    id: 2,
    seats: '5',
    label: '5 Seater',
    badge: 'SUV',
    image: car5,
    features: [
      '5 Passengers',
      'Air Conditioned',
      'Comfortable Seating',
      'Spacious Luggage Area',
      'Local & Outstation Trips',
    ],
  },
  {
    id: 3,
    seats: '6',
    label: '6 Seater',
    badge: 'MUV',
    image: car6,
    popular: true,
    features: [
      '6 Passengers',
      'Air Conditioned',
      'Comfortable Seating',
      'Family Friendly',
      'Local & Outstation Trips',
    ],
  },
  {
    id: 4,
    seats: '8',
    label: '8 Seater',
    badge: 'Tempo Traveller',
    image: car8,
    features: [
      '8 Passengers',
      'Air Conditioned',
      'Spacious Interior',
      'Ideal for Groups & Families',
      'Long Distance Travel',
    ],
  },
]

export default function Vehicles() {
  return (
    <section id="vehicles" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Vehicles section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Our Fleet</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f1f3d]">Choose Your Perfect Ride</h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">Comfortable vehicles for every journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group`}
            >
              {vehicle.popular && (
                <div className="absolute top-3 left-3 z-10 bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}

              {/* Car image */}
              <div className="p-4">
                <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.label} — City Driver Kollidam`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
                  <span className="absolute top-3 right-3 bg-[#f97316] text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">
                    {vehicle.seats} Seats
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="px-5 pb-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-extrabold text-[#0f1f3d]">{vehicle.label}</h3>
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                    {vehicle.badge}
                  </span>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className="text-[#f97316] mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Icons row */}
                <div className="flex gap-3 mb-5">
                  <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1.5 rounded-lg">
                    <Users size={13} />
                    {vehicle.seats} Seats
                  </div>
                  <div className="flex items-center gap-1.5 bg-orange-50 text-orange-700 text-xs font-medium px-2.5 py-1.5 rounded-lg">
                    <Wind size={13} />
                    AC
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1.5 rounded-lg">
                    <Luggage size={13} />
                    Luggage
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openWhatsApp(waMessages.vehicle(vehicle.seats))}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5c] text-white font-semibold py-3 rounded-xl text-sm shadow transition-all duration-200"
                  aria-label={`Enquire about ${vehicle.label} on WhatsApp`}
                >
                  <MessageCircle size={16} />
                  Enquire on WhatsApp
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
