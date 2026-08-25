import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle, Phone } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Tell Us Your Trip',
    desc: 'Send your pickup location, destination, travel date and passenger count through WhatsApp.',
    color: 'bg-orange-100 text-orange-600 border-orange-200',
    lineColor: 'bg-orange-200',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Get Availability & Price',
    desc: 'Our team will discuss vehicle availability and pricing with you directly.',
    color: 'bg-blue-100 text-blue-600 border-blue-200',
    lineColor: 'bg-blue-200',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Confirm Your Journey',
    desc: 'Confirm your booking directly through WhatsApp and prepare for a comfortable ride.',
    color: 'bg-green-100 text-green-600 border-green-200',
    lineColor: 'bg-green-200',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="How it works section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Simple Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f1f3d]">How It Works</h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            Booking with City Driver is quick, easy and entirely through WhatsApp.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[16.67%] right-[16.67%] h-0.5 bg-gray-200" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div className={`w-28 h-28 rounded-3xl border-2 ${step.color} flex flex-col items-center justify-center shadow-sm`}>
                      <span className="text-3xl font-black opacity-20 leading-none">{step.number}</span>
                      <Icon size={28} className="mt-1" />
                    </div>
                    {/* Number badge */}
                    <span className="absolute -top-2 -right-2 bg-[#0f1f3d] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-[#0f1f3d] font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(37,211,102,0.35)' }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openWhatsApp(waMessages.general())}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-lg transition-all duration-200"
            aria-label="Start a WhatsApp enquiry"
          >
            <MessageCircle size={22} />
            Start a WhatsApp Enquiry
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
