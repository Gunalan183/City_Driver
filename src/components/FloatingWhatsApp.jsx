import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50" aria-label="Floating WhatsApp button">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-3 bg-[#0f1f3d] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg whitespace-nowrap"
          >
            Chat with City Driver
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#0f1f3d]" aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => openWhatsApp(waMessages.general())}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5c] text-white rounded-full shadow-2xl flex items-center justify-center transition-colors whatsapp-pulse"
        aria-label="Chat with City Driver on WhatsApp"
      >
        <MessageCircle size={26} />
      </motion.button>
    </div>
  )
}
