import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

/**
 * PLACEHOLDER TESTIMONIALS
 * Replace the content in each testimonial with real customer reviews once collected.
 */
const testimonials = [
  {
    name: 'Barani',
    location: 'Kollidam',
    rating: 5,
    review:
      'Very comfortable and smooth journey. The driver was friendly and reached on time. Good service and definitely recommended!',
    placeholder: false,
  },
  {
    name: 'Gunalan',
    location: 'Chidambaram',
    rating: 5,
    review:
      'Had a really good travel experience with City Driver. The car was clean and comfortable, and the service was excellent.',
    placeholder: false,
  },
  {
    name: 'HariKrishnan',
    location: 'Pondicherry',
    rating: 5,
    review:
      'Excellent service for our trip to Pondicherry. The journey was comfortable and the driver was very polite and professional.',
    placeholder: false,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < count ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Testimonials section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Reviews</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f1f3d]">Customer Reviews</h2>
          {/* <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            These are placeholder cards. Replace with real customer reviews once collected.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-6 relative"
            >
              {item.placeholder && (
                <span className="absolute top-3 right-3 bg-amber-100 text-amber-700 text-xs font-medium px-2 py-0.5 rounded-full">
                  Placeholder
                </span>
              )}
              <Quote size={28} className="text-[#f97316]/30 mb-3" aria-hidden="true" />
              <StarRating count={item.rating} />
              <p className="mt-3 text-gray-500 text-sm leading-relaxed italic">"{item.review}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#0f1f3d] text-sm">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <p className="text-center text-gray-400 text-sm mt-8">
          Collect real reviews from your customers and replace the placeholder content above.
        </p> */}
      </div>
    </section>
  )
}
