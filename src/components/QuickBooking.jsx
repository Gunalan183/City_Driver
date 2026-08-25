import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Calendar, Users, Car, MessageCircle } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

const vehicleOptions = ['4 Seater', '5 Seater', '6 Seater', '8 Seater', 'Any Vehicle']

export default function QuickBooking() {
  const [form, setForm] = useState({
    pickup: '',
    destination: '',
    date: '',
    passengers: '',
    vehicle: '',
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.pickup.trim()) newErrors.pickup = 'Please enter pickup location'
    if (!form.destination.trim()) newErrors.destination = 'Please enter destination'
    if (!form.date) newErrors.date = 'Please select travel date'
    if (!form.passengers) newErrors.passengers = 'Please select passenger count'
    if (!form.vehicle) newErrors.vehicle = 'Please select vehicle type'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const message = waMessages.booking({
      pickup: form.pickup,
      destination: form.destination,
      date: form.date,
      passengers: form.passengers,
      vehicle: form.vehicle,
    })
    openWhatsApp(message)
  }

  return (
    <section id="booking" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" aria-label="Quick booking section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#f97316] text-sm font-semibold uppercase tracking-widest">Quick Enquiry</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0f1f3d]">Plan Your Journey With Us</h2>
          <p className="mt-3 text-gray-500 text-lg">Fill in your trip details and send directly via WhatsApp</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10"
        >
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pickup */}
              <div>
                <label htmlFor="pickup" className="block text-sm font-semibold text-gray-700 mb-2">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f97316]" size={18} />
                  <input
                    id="pickup"
                    type="text"
                    placeholder="e.g. Kollidam, Chennai"
                    value={form.pickup}
                    onChange={(e) => handleChange('pickup', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316] transition ${
                      errors.pickup ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                </div>
                {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup}</p>}
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                  Destination
                </label>
                <div className="relative">
                  <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f97316]" size={18} />
                  <input
                    id="destination"
                    type="text"
                    placeholder="e.g. Pondicherry, Chennai"
                    value={form.destination}
                    onChange={(e) => handleChange('destination', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316] transition ${
                      errors.destination ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                </div>
                {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
              </div>

              {/* Date */}
              <div>
                <label htmlFor="travel-date" className="block text-sm font-semibold text-gray-700 mb-2">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f97316]" size={18} />
                  <input
                    id="travel-date"
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316] transition ${
                      errors.date ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                </div>
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>

              {/* Passengers */}
              <div>
                <label htmlFor="passengers" className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Passengers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f97316]" size={18} />
                  <select
                    id="passengers"
                    value={form.passengers}
                    onChange={(e) => handleChange('passengers', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316] transition appearance-none bg-white ${
                      errors.passengers ? 'border-red-400' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Select passengers</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                {errors.passengers && <p className="text-red-500 text-xs mt-1">{errors.passengers}</p>}
              </div>

              {/* Vehicle */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Vehicle Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {vehicleOptions.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => handleChange('vehicle', v)}
                      className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                        form.vehicle === v
                          ? 'border-[#f97316] bg-orange-50 text-[#f97316]'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      <Car size={15} />
                      {v}
                    </button>
                  ))}
                </div>
                {errors.vehicle && <p className="text-red-500 text-xs mt-1">{errors.vehicle}</p>}
              </div>
            </div>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold py-4 rounded-2xl text-lg shadow-lg transition-all duration-200"
              >
                <MessageCircle size={22} />
                Continue on WhatsApp
              </motion.button>
              <p className="text-center text-gray-400 text-xs mt-3">
                Your details will be sent directly via WhatsApp. No account required.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
