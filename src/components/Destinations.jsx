import { motion } from 'framer-motion'
import { MapPin, MessageCircle } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const destinations = [
  {
    name: 'Chidambaram',
    desc: 'Famous Nataraja Temple and sacred pilgrim town',
    distance: '~25 km',
    image: '/Places Images/Chidambaram.jpg',
  },
  {
    name: 'Cuddalore',
    desc: 'Coastal city with beaches and historic attractions',
    distance: '~50 km',
    image: '/Places Images/Cuddalore.jpg',
  },
  {
    name: 'Pondicherry',
    desc: 'French colonial charm, beaches and spiritual retreats',
    distance: '~75 km',
    image: '/Places Images/Pondychery.jpg',
  },
  {
    name: 'Mayiladuthurai',
    desc: 'Temple town on the banks of River Cauvery',
    distance: '~30 km',
    image: '/Places Images/Mayiladurai.jpg',
  },
  {
    name: 'Kumbakonam',
    desc: 'City of temples, sacred tanks and traditional culture',
    distance: '~55 km',
    image: null,
    gradient: 'from-teal-700 to-emerald-600',
  },
  {
    name: 'Thanjavur',
    desc: 'Home of the magnificent Brihadeeswarar Temple',
    distance: '~80 km',
    image: '/Places Images/Thanjalore.jpg',
  },
  {
    name: 'Trichy',
    desc: 'Gateway city with the iconic Rock Fort Temple',
    distance: '~110 km',
    image: '/Places Images/Trichy.jpg',
  },
  {
    name: 'Chennai',
    desc: 'Capital city with airports, hospitals and business hubs',
    distance: '~250 km',
    image: '/Places Images/Chennai.jpg',
  },
  {
    name: 'Mahabalipuram',
    desc: 'UNESCO World Heritage shore temples and sculptures',
    distance: '~200 km',
    image: '/Places Images/Mahaballipuram.jpg',
  },
  {
    name: 'Madurai',
    desc: 'Temple city — home of the magnificent Meenakshi Amman',
    distance: '~220 km',
    image: '/Places Images/Madurai.jpg',
  },
  {
    name: 'Rameswaram',
    desc: 'Sacred pilgrimage island in the Gulf of Mannar',
    distance: '~300 km',
    image: '/Places Images/Rameshwaram.jpg',
  },
  {
    name: 'Kanyakumari',
    desc: 'Southernmost tip where three oceans meet',
    distance: '~450 km',
    image: '/Places Images/kanyakumari the beauty.jpg',
  },
  {
    name: 'Ooty',
    desc: 'Queen of hills — cool climate and scenic mountain beauty',
    distance: '~350 km',
    image: '/Places Images/ooty.jpg',
  },
  {
    name: 'Coimbatore',
    desc: 'Manchester of South India — industrial and trade hub',
    distance: '~320 km',
    image: '/Places Images/Coimbatore.jpg',
  },
  {
    name: 'Kanchipuram',
    desc: 'City of thousand temples and famous silk sarees',
    distance: '~230 km',
    image: '/Places Images/Kanchipuram.jpg',
  },
]

function DestCard({ dest, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-white"
    >
      {/* Image area */}
      <div className="relative h-44 overflow-hidden">
        {dest.image ? (
          <img
            src={dest.image}
            alt={`${dest.name} — travel destination from Kollidam`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${dest.gradient}`} aria-label={dest.name} />
        )}

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden="true" />

        {/* Distance badge */}
        <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20">
          {dest.distance}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-1">
          <MapPin size={14} className="text-[#f97316] mt-0.5 flex-shrink-0" />
          <h3 className="font-bold text-[#0f1f3d] text-base leading-tight">{dest.name}</h3>
        </div>
        <p className="text-gray-500 text-xs mb-4 leading-relaxed pl-5 flex-1">{dest.desc}</p>
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
