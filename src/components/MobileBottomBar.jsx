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
      <div className="flex gap-2 px-3 py-2">
        <a
          href={PHONE_RAW}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#0f1f3d] text-white text-xs font-semibold active:opacity-80 transition-opacity"
          aria-label="Call City Driver"
        >
          <Phone size={14} />
          Call Now
        </a>
        <button
          onClick={() => openWhatsApp(waMessages.general())}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-semibold active:opacity-80 transition-opacity"
          aria-label="WhatsApp City Driver"
        >
          <MessageCircle size={14} />
          WhatsApp
        </button>
      </div>
    </motion.div>
  )
}
