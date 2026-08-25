import { motion } from 'framer-motion'
import { MapPin, MessageCircle } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const destinations = [
  {
    name: 'Chidambaram',
    desc: 'Famous Nataraja Temple and sacred pilgrim town',
    distance: '~25 km',
    gradient: 'from-orange-800 to-amber-700',
  },
  {
    name: 'Cuddalore',
    desc: 'Coastal city with beaches and historic attractions',
    distance: '~50 km',
    gradient: 'from-blue-800 to-blue-600',
  },
  {
    name: 'Pondicherry',
    desc: 'French colonial charm, beaches and spiritual retreats',
    distance: '~75 km',
    gradient: 'from-pink-700 to-rose-600',
  },
  {
    name: 'Mayiladuthurai',
    desc: 'Temple town on the banks of River Cauvery',
    distance: '~30 km',
    gradient: 'from-yellow-700 to-amber-600',
  },
  {
    name: 'Kumbakonam',
    desc: 'City of temples, sacred tanks and traditional culture',
    distance: '~55 km',
    gradient: 'from-teal-700 to-emerald-600',
  },
  {
    name: 'Thanjavur',
    desc: 'Home of the magnificent Brihadeeswarar Temple',
    distance: '~80 km',
    gradient: 'from-red-800 to-red-600',
  },
  {
    name: 'Trichy',
    desc: 'Gateway city with the iconic Rock Fort Temple',
    distance: '~110 km',
    gradient: 'from-purple-800 to-violet-600',
  },
  {
    name: 'Chennai',
    desc: 'Capital city with airports, hospitals and business hubs',
    distance: '~250 km',
    gradient: 'from-slate-700 to-slate-500',
  },
  {
    name: 'Mahabalipuram',
    desc: 'UNESCO World Heritage shore temples and sculptures',
    distance: '~200 km',
    gradient: 'from-sky-700 to-cyan-600',
  },
  {
    name: 'Madurai',
    desc: 'Temple city — home of the magnificent Meenakshi Amman',
    distance: '~220 km',
    gradient: 'from-orange-700 to-yellow-600',
  },
  {
    name: 'Rameswaram',
    desc: 'Sacred pilgrimage island in the Gulf of Mannar',
    distance: '~300 km',
    gradient: 'from-blue-900 to-indigo-700',
  },
  {
    name: 'Kanyakumari',
    desc: 'Southernmost tip where three oceans meet',
    distance: '~450 km',
    gradient: 'from-cyan-800 to-teal-600',
  },
  {
    name: 'Ooty',
    desc: 'Queen of hills — cool climate and scenic mountain beauty',
    distance: '~350 km',
    gradient: 'from-green-800 to-emerald-700',
  },
  {
    name: 'Coimbatore',
    desc: 'Manchester of South India — industrial and trade hub',
    distance: '~320 km',
    gradient: 'from-indigo-700 to-blue-600',
  },
]

function DestCard({ dest, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Gradient background (replace with real destination photo via CSS bg-image) */}
      <div className={`h-44 bg-gradient-to-br ${dest.gradient} relative flex items-end`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
        {/* Distance badge */}
        <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/30">
          {dest.distance}
        </span>
        {/* Pattern overlay (placeholder for real image) */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} aria-hidden="true" />
        <div className="relative z-10 p-4 w-full">
          <p className="text-xs text-white/60 mb-0.5">Replace with destination photo</p>
        </div>
      </div>

      {/* Card body */}
      <div className="bg-white p-4">
        <div className="flex items-start gap-2 mb-1">
          <MapPin size={14} className="text-[#f97316] mt-0.5 flex-shrink-0" />
          <h3 className="font-bold text-[#0f1f3d] text-base leading-tight">{dest.name}</h3>
        </div>
        <p className="text-gray-500 text-xs mb-3 leading-relaxed pl-5">{dest.desc}</p>
        <button
          onClick={() => openWhatsApp(waMessages.destination(dest.name))}
          className="w-full flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-200"
          aria-label={`Plan trip to ${dest.name} via WhatsApp`}
        >
          <MessageCircle size={13} />
          Plan This Trip
        </button>
      </div>
    </motion.div>
  )
}

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Destinations section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Popular Routes</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f1f3d]">Explore From Kollidam</h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            Comfortable travel to popular destinations across Tamil Nadu and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {destinations.map((dest, i) => (
            <DestCard key={dest.name} dest={dest} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
