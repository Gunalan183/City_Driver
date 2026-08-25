/**
 * City Driver Logo
 * Uses the real logo image from /public/city_Driver_logo.png
 */
export default function Logo({ className = '', size = 'md' }) {
  const sizes = {
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-16',
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/city_Driver_logo.png"
        alt="City Driver Kollidam Logo"
        className={`${sizes[size]} w-auto object-contain`}
        loading="eager"
      />
    </div>
  )
}
