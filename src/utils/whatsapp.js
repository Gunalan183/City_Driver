const WA_NUMBER = '918148723769'

/**
 * Opens WhatsApp with a pre-filled message
 * @param {string} message - The message to pre-fill
 */
export function openWhatsApp(message = '') {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank')
}

export const waMessages = {
  general: () =>
    `Hi City Driver Kollidam, I would like to enquire about your car travel service.`,

  vehicle: (seats) =>
    `Hi City Driver Kollidam, I would like to enquire about booking a ${seats} Seater vehicle.`,

  destination: (place) =>
    `Hi City Driver Kollidam, I would like to enquire about a trip to ${place}.`,

  booking: ({ pickup, destination, date, passengers, vehicle }) =>
    `Hi City Driver Kollidam,\n\nI would like to book a vehicle.\nPickup: ${pickup}\nDestination: ${destination}\nTravel Date: ${date}\nPassengers: ${passengers}\nVehicle: ${vehicle}\n\nPlease share the availability and price.`,

  service: (serviceName) =>
    `Hi City Driver Kollidam, I would like to enquire about your ${serviceName} service.`,

  contact: () =>
    `Hi City Driver Kollidam, I would like to get in touch with you regarding your car travel services.`,
}

export const WA_PHONE = '+91 81487 23769'
export const WA_PHONE_RAW = '918148723769'
export const PHONE_NUMBER = '+91 81487 23769'
export const PHONE_RAW = 'tel:+918148723769'
