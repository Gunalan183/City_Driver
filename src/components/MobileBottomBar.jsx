import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { openWhatsApp, waMessages, PHONE_RAW } from '../utils/whatsapp'

export default function MobileBottomBar() {
  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 150, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-gray-200 shadow-lg"
      role="complementary"
      aria-label="Mobile contact bar"
    >
      <div className="flex">
        <a
          href={PHONE_RAW}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#0f1f3d] text-white active:bg-[#162850] transition-colors"
          aria-label="Call City Driver"
        >
          <Phone size={20} />
          <span className="text-xs font-semibold">Call Now</span>
        </a>
        <button
          onClick={() => openWhatsApp(waMessages.general())}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] text-white active:bg-[#20bd5c] transition-colors"
          aria-label="WhatsApp City Driver"
        >
          <MessageCircle size={20} />
          <span className="text-xs font-semibold">WhatsApp</span>
        </button>
      </div>
    </motion.div>
  )
}
