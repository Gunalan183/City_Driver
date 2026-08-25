/**
 * City Driver SVG Logo
 * Replace this component with an <img> tag pointing to your actual logo file
 * once you have the logo asset ready.
 */
export default function Logo({ className = '', size = 'md' }) {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`relative flex items-center justify-center rounded-lg bg-[#f97316] ${sizes[size]} aspect-square shadow-lg`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[70%] h-[70%]"
          aria-hidden="true"
        >
          {/* Steering wheel */}
          <circle cx="20" cy="20" r="13" stroke="white" strokeWidth="2.5" fill="none" />
          <circle cx="20" cy="20" r="4" fill="white" />
          <line x1="20" y1="7" x2="20" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="9.4" y1="26.5" x2="17" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="30.6" y1="26.5" x2="23" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      {/* Logo Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-[#0f1f3d] font-extrabold tracking-tight" style={{ fontSize: size === 'lg' ? '1.3rem' : size === 'sm' ? '0.9rem' : '1.1rem' }}>
          City Driver
        </span>
        <span className="text-[#f97316] font-semibold tracking-widest uppercase" style={{ fontSize: size === 'lg' ? '0.65rem' : '0.55rem' }}>
          Kollidam
        </span>
      </div>
    </div>
  )
}
