import { motion } from 'framer-motion'

const galleryItems = [
  { label: 'Vehicle Exterior', gradient: 'from-blue-800 to-blue-600', span: 'col-span-1 row-span-1' },
  { label: 'Vehicle Interior', gradient: 'from-slate-700 to-slate-500', span: 'col-span-1 row-span-2' },
  { label: 'Road Trip', gradient: 'from-orange-700 to-amber-600', span: 'col-span-1 row-span-1' },
  { label: 'Family Travel', gradient: 'from-pink-700 to-rose-600', span: 'col-span-1 row-span-1' },
  { label: 'Tourist Destination', gradient: 'from-teal-700 to-emerald-600', span: 'col-span-1 row-span-1' },
  { label: 'Airport Transfer', gradient: 'from-indigo-800 to-indigo-600', span: 'col-span-1 row-span-1' },
  { label: 'Outstation Journey', gradient: 'from-purple-800 to-violet-600', span: 'col-span-1 row-span-2' },
  { label: 'Temple Trip', gradient: 'from-amber-700 to-yellow-600', span: 'col-span-1 row-span-1' },
]

function GalleryCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
      style={{ minHeight: '150px' }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
        aria-hidden="true"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <span className="text-white font-bold text-sm drop-shadow">{item.label}</span>
        <span className="text-white/60 text-xs mt-1">Replace with actual photo</span>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Gallery section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Photos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f1f3d]">Our Journey Gallery</h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            A glimpse into our comfortable vehicles and memorable journeys.
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px]">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.label} item={item} index={i} />
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Replace these placeholders with your actual vehicle and journey photos.
        </p>
      </div>
    </section>
  )
}
