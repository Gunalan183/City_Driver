import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const faqs = [
  {
    q: 'What types of vehicles are available?',
    a: 'We provide 4, 5, 6 and 8 seater travel options. All vehicles are air-conditioned and well-maintained for your comfort.',
  },
  {
    q: 'Do you provide outstation trips?',
    a: 'Yes. We provide outstation trips to destinations across Tamil Nadu and nearby states. Contact us on WhatsApp to discuss your destination and trip requirements.',
  },
  {
    q: 'Do you provide airport pickup and drop?',
    a: 'Yes. We provide reliable airport pickup and drop services. Contact us with your flight details, pickup/drop location and travel date.',
  },
  {
    q: 'How can I book a vehicle?',
    a: 'Simply contact City Driver through WhatsApp and share your travel details — pickup location, destination, date, number of passengers and vehicle preference. We will confirm availability and pricing directly with you.',
  },
  {
    q: 'How is the price calculated?',
    a: 'Pricing depends on factors such as destination, distance, vehicle type and trip requirements. Contact us through WhatsApp to get a quote for your specific journey.',
  },
  {
    q: 'Can I book a vehicle for a family trip?',
    a: 'Yes. We have 4, 5, 6 and 8 seater vehicles to accommodate families of various sizes. Choose the vehicle based on your passenger count and luggage requirements.',
  },
  {
    q: 'Do you provide one-way trips?',
    a: 'Contact us through WhatsApp to check availability and pricing for one-way trips to your destination.',
  },
  {
    q: 'How can I contact City Driver?',
    a: 'You can reach us on WhatsApp at +91 81487 23769. We are ready to help you plan your trip.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-semibold text-[#0f1f3d] text-sm sm:text-base">{item.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-[#f97316]"
          aria-hidden="true"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed bg-gray-50 border-t border-gray-100">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="FAQ section">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f1f3d]">Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            Have more questions? Reach us directly on WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              item={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 mb-4">Still have questions? We're happy to help.</p>
          <button
            onClick={() => openWhatsApp(waMessages.general())}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5c] text-white font-semibold px-7 py-3.5 rounded-2xl shadow transition-all duration-200"
            aria-label="Ask a question on WhatsApp"
          >
            <MessageCircle size={18} />
            Ask on WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  )
}
