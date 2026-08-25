import { motion } from 'framer-motion'
import { Users, Wind, Luggage, CheckCircle, MessageCircle } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const vehicles = [
  {
    id: 1,
    seats: '4',
    label: '4 Seater',
    badge: 'Sedan',
    color: 'from-blue-600 to-blue-800',
    features: [
      '4 Passengers',
      'Air Conditioned',
      'Comfortable Seating',
      'Suitable for Small Families & Couples',
      'Local & Outstation Trips',
    ],
    // Placeholder SVG car image - replace with real photo
    imgBg: '#1e3a5f',
  },
  {
    id: 2,
    seats: '5',
    label: '5 Seater',
    badge: 'SUV',
    color: 'from-[#0f1f3d] to-[#162850]',
    features: [
      '5 Passengers',
      'Air Conditioned',
      'Comfortable Seating',
      'Spacious Luggage Area',
      'Local & Outstation Trips',
    ],
    imgBg: '#0f1f3d',
  },
  {
    id: 3,
    seats: '6',
    label: '6 Seater',
    badge: 'MUV',
    color: 'from-orange-600 to-orange-700',
    popular: true,
    features: [
      '6 Passengers',
      'Air Conditioned',
      'Comfortable Seating',
      'Family Friendly',
      'Local & Outstation Trips',
    ],
    imgBg: '#c2410c',
  },
  {
    id: 4,
    seats: '8',
    label: '8 Seater',
    badge: 'Tempo Traveller',
    color: 'from-slate-700 to-slate-900',
    features: [
      '8 Passengers',
      'Air Conditioned',
      'Spacious Interior',
      'Ideal for Groups & Families',
      'Long Distance Travel',
    ],
    imgBg: '#334155',
  },
]

function CarPlaceholder({ seats, bg }) {
  return (
    <div
      className="w-full h-48 rounded-2xl flex items-center justify-center relative overflow-hidden"
      style={{ background: bg }}
      aria-hidden="true"
    >
      {/* Simple car SVG illustration */}
      <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 opacity-80">
        {/* Car body */}
        <rect x="20" y="40" width="160" height="35" rx="8" fill="white" fillOpacity="0.15" />
        {/* Car roof */}
        <path d="M55 40 C65 18 135 18 145 40" fill="white" fillOpacity="0.2" />
        {/* Windshield */}
        <path d="M60 40 C68 24 100 22 140 40" fill="white" fillOpacity="0.1" />
        {/* Wheels */}
        <circle cx="58" cy="75" r="14" fill="white" fillOpacity="0.25" />
        <circle cx="58" cy="75" r="8" fill="white" fillOpacity="0.15" />
        <circle cx="142" cy="75" r="14" fill="white" fillOpacity="0.25" />
        <circle cx="142" cy="75" r="8" fill="white" fillOpacity="0.15" />
        {/* Headlight */}
        <rect x="170" y="50" width="10" height="6" rx="3" fill="#f97316" fillOpacity="0.8" />
        {/* Taillight */}
        <rect x="20" y="50" width="8" height="6" rx="3" fill="#ef4444" fillOpacity="0.7" />
      </svg>
      {/* Seat count overlay */}
      <div className="absolute top-3 right-3 bg-[#f97316] text-white text-xs font-bold px-2 py-1 rounded-lg">
        {seats} Seats
      </div>
      <p className="absolute bottom-2 left-0 right-0 text-center text-white/40 text-xs">
        Replace with actual vehicle photo
      </p>
    </div>
  )
}

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

              {/* Car image placeholder */}
              <div className="p-4">
                <CarPlaceholder seats={vehicle.seats} bg={vehicle.imgBg} />
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
