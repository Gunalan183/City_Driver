import { motion } from 'framer-motion'
import { Users, Wind, Luggage, CheckCircle, MessageCircle, Zap } from 'lucide-react'
import { openWhatsApp, waMessages } from '../utils/whatsapp'

import car4 from '../assets/Car images/4 Seater Car.jpg'
import car5 from '../assets/Car images/5 Seater Car.jpg'
import car6 from '../assets/Car images/6 Seater Car.jpg'
import car7 from '../assets/Car images/7 Seater.jpg'
import carVan from '../assets/Car images/Van Image.jpg'

const vehicles = [
  {
    id: 1,
    seats: '4',
    label: '4 Seater',
    badge: 'Sedan',
    image: car4,
    ac: true,
    glowColor: '#6366f1',
    glowColorRgb: '99, 102, 241',
    features: [
      '4 Passengers',
      'Air Conditioned',
      'Comfortable Seating',
      'Suitable for Small Families & Couples',
      'Local & Outstation Trips',
    ],
  },
  {
    id: 2,
    seats: '5',
    label: '5 Seater',
    badge: 'SUV',
    image: car5,
    ac: true,
    glowColor: '#8b5cf6',
    glowColorRgb: '139, 92, 246',
    features: [
      '5 Passengers',
      'Air Conditioned',
      'Comfortable Seating',
      'Spacious Luggage Area',
      'Local & Outstation Trips',
    ],
  },
  {
    id: 3,
    seats: '6',
    label: '6 Seater',
    badge: 'MUV',
    image: car6,
    popular: true,
    ac: true,
    glowColor: '#f97316',
    glowColorRgb: '249, 115, 22',
    features: [
      '6 Passengers',
      'Air Conditioned',
      'Comfortable Seating',
      'Family Friendly',
      'Local & Outstation Trips',
    ],
  },
  {
    id: 4,
    seats: '7',
    label: '7 Seater',
    badge: 'Ertiga',
    image: car7,
    ac: true,
    glowColor: '#06b6d4',
    glowColorRgb: '6, 182, 212',
    features: [
      '7 Passengers',
      'Air Conditioned',
      'Spacious Interior',
      'Ideal for Groups & Families',
      'Long Distance Travel',
    ],
  },
  {
    id: 5,
    seats: '18+',
    label: 'Van',
    badge: 'Travels Van',
    image: carVan,
    ac: false,
    glowColor: '#10b981',
    glowColorRgb: '16, 185, 129',
    features: [
      'Large Group Capacity',
      'Spacious Seating',
      'Ideal for Tours & Events',
      'Long Distance Travel',
    ],
  },
]

/* Inline SVG 3D car silhouette used as a decorative overlay */
function Car3DIcon({ color }) {
  return (
    <svg
      viewBox="0 0 200 80"
      className="absolute bottom-2 right-2 w-20 h-8 opacity-10 pointer-events-none"
      aria-hidden="true"
    >
      {/* Simple perspective-style car shape */}
      <ellipse cx="100" cy="70" rx="85" ry="8" fill={color} />
      <path
        d="M30 55 Q35 30 65 28 L90 20 Q115 16 140 28 L170 55 Q175 58 172 62 L28 62 Q25 58 30 55Z"
        fill={color}
        opacity="0.8"
      />
      <path d="M65 28 Q85 14 115 14 Q138 14 145 28Z" fill={color} opacity="0.6" />
      <circle cx="58" cy="62" r="10" fill="#0f172a" stroke={color} strokeWidth="2" />
      <circle cx="58" cy="62" r="5" fill={color} opacity="0.5" />
      <circle cx="142" cy="62" r="10" fill="#0f172a" stroke={color} strokeWidth="2" />
      <circle cx="142" cy="62" r="5" fill={color} opacity="0.5" />
    </svg>
  )
}

export default function Vehicles() {
  return (
    <section
      id="vehicles"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-t-[2.5rem]"
      style={{ background: 'linear-gradient(135deg, #020817 0%, #0c1445 50%, #0a0a1a 100%)' }}
      aria-label="Vehicles section"
    >
      {/* Background grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Ambient glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#f97316] text-sm font-semibold uppercase tracking-widest mb-3">
            <Zap size={14} />
            Our Fleet
            <Zap size={14} />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg px-2 break-words">
            Choose Your{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #8b5cf6, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Perfect Ride
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-xl mx-auto px-2">
            Premium vehicles with a futuristic touch for every journey.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 w-full">
          {vehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative flex flex-col group w-full"
            >
              {/* 3D Card shell */}
              <div
                className="relative flex flex-col flex-1 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: `1px solid rgba(${vehicle.glowColorRgb}, 0.35)`,
                  boxShadow: `0 0 0 1px rgba(${vehicle.glowColorRgb},0.1), 0 8px 32px rgba(0,0,0,0.5), 0 0 60px rgba(${vehicle.glowColorRgb},0.12)`,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                {/* Top neon edge line */}
                <div
                  className="absolute top-0 left-4 right-4 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${vehicle.glowColor}, transparent)`,
                  }}
                  aria-hidden="true"
                />

                {/* Popular badge */}
                {vehicle.popular && (
                  <div
                    className="absolute top-3 left-3 z-20 text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #f97316, #ef4444)',
                      boxShadow: '0 0 12px rgba(249,115,22,0.6)',
                    }}
                  >
                    ★ Most Popular
                  </div>
                )}

                {/* Image platform */}
                <div className="relative p-4 pb-0">
                  {/* 3D platform base behind image */}
                  <div
                    className="relative rounded-xl overflow-hidden"
                    style={{
                      background: `linear-gradient(160deg, rgba(${vehicle.glowColorRgb},0.12), rgba(0,0,0,0.4))`,
                      border: `1px solid rgba(${vehicle.glowColorRgb},0.2)`,
                    }}
                  >
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.label} — City Driver Kollidam`}
                      loading="lazy"
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, rgba(${vehicle.glowColorRgb},0.25) 0%, transparent 60%)`,
                      }}
                      aria-hidden="true"
                    />

                    {/* Seats badge */}
                    <span
                      className="absolute top-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        background: `rgba(${vehicle.glowColorRgb}, 0.85)`,
                        boxShadow: `0 0 10px rgba(${vehicle.glowColorRgb}, 0.6)`,
                        border: `1px solid rgba(${vehicle.glowColorRgb}, 0.5)`,
                      }}
                    >
                      {vehicle.seats} Seats
                    </span>

                    {/* 3D bottom platform shadow strip */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-5"
                      style={{
                        background: `linear-gradient(to bottom, transparent, rgba(${vehicle.glowColorRgb},0.3))`,
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Isometric platform base — the 3D "stage" edge */}
                  <div
                    className="mx-2 h-3 rounded-b-xl"
                    style={{
                      background: `linear-gradient(to bottom, rgba(${vehicle.glowColorRgb},0.4), rgba(${vehicle.glowColorRgb},0.05))`,
                      boxShadow: `0 6px 20px rgba(${vehicle.glowColorRgb},0.35)`,
                      transform: 'perspective(100px) rotateX(5deg)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Card body */}
                <div className="px-4 pt-3 pb-5 flex flex-col flex-1">
                  {/* Title row */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-extrabold text-white">{vehicle.label}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-lg"
                      style={{
                        color: vehicle.glowColor,
                        background: `rgba(${vehicle.glowColorRgb},0.15)`,
                        border: `1px solid rgba(${vehicle.glowColorRgb},0.3)`,
                      }}
                    >
                      {vehicle.badge}
                    </span>
                  </div>

                  {/* Neon divider */}
                  <div
                    className="w-full h-px mb-3"
                    style={{
                      background: `linear-gradient(90deg, ${vehicle.glowColor}44, ${vehicle.glowColor}88, ${vehicle.glowColor}44)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Features */}
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {vehicle.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle
                          size={13}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: vehicle.glowColor }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Icon pills */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {[
                      { icon: <Users size={11} />, label: `${vehicle.seats} Seats` },
                      ...(vehicle.ac ? [{ icon: <Wind size={11} />, label: 'AC' }] : []),
                      { icon: <Luggage size={11} />, label: 'Luggage' },
                    ].map(({ icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md"
                        style={{
                          color: vehicle.glowColor,
                          background: `rgba(${vehicle.glowColorRgb},0.12)`,
                          border: `1px solid rgba(${vehicle.glowColorRgb},0.25)`,
                        }}
                      >
                        {icon}
                        {label}
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => openWhatsApp(waMessages.vehicle(vehicle.seats))}
                    className="w-full flex items-center justify-center gap-2 text-white font-semibold py-2.5 rounded-xl text-sm transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                      boxShadow: '0 0 18px rgba(37,211,102,0.35)',
                      border: '1px solid rgba(37,211,102,0.4)',
                    }}
                    aria-label={`Enquire about ${vehicle.label} on WhatsApp`}
                  >
                    <MessageCircle size={15} />
                    Enquire on WhatsApp
                  </motion.button>
                </div>

                {/* Bottom neon edge */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(${vehicle.glowColorRgb},0.5), transparent)`,
                  }}
                  aria-hidden="true"
                />

                {/* 3D car silhouette watermark */}
                <Car3DIcon color={vehicle.glowColor} />
              </div>

              {/* Card reflection / platform shadow beneath */}
              <div
                className="mx-4 h-4 rounded-b-2xl"
                style={{
                  background: `linear-gradient(to bottom, rgba(${vehicle.glowColorRgb},0.25), transparent)`,
                  filter: `blur(8px)`,
                  transform: 'scaleY(-1)',
                }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
