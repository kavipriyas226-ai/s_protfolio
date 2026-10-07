import { motion } from 'framer-motion'

export function FloorPlanSVG({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.4" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
        <path d="M0 100 H800 M0 200 H800 M0 300 H800 M0 400 H800 M0 500 H800" />
        <path d="M100 0 V600 M200 0 V600 M300 0 V600 M400 0 V600 M500 0 V600 M600 0 V600 M700 0 V600" />
      </g>
      
      <motion.g 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        stroke="currentColor" strokeWidth="2"
      >
        {/* Exterior Walls */}
        <path d="M150 150 H650 V450 H150 Z" />
        {/* Interior Walls */}
        <path d="M350 150 V350 H150" />
        <path d="M500 150 V300 H650" />
        <path d="M350 350 H500 V450" />
        
        {/* Doors (arcs) */}
        <path d="M350 200 Q 300 200 300 250" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M500 200 Q 550 200 550 250" strokeWidth="1" strokeDasharray="2 2" />
      </motion.g>

      <g opacity="0.6" fill="currentColor" fontFamily="monospace" fontSize="12">
        <text x="200" y="250">LIVING AREA</text>
        <text x="520" y="220">KITCHEN</text>
        <text x="550" y="400">BEDROOM</text>
        <text x="220" y="400">OFFICE</text>
      </g>
      
      {/* Dimension lines */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        <path d="M150 130 H650" />
        <path d="M150 125 V135 M650 125 V135" />
        <text x="380" y="120" fill="currentColor" fontFamily="monospace" fontSize="10">12500 mm</text>
      </g>
    </svg>
  )
}

export function ElevationSVG({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g 
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 5, ease: "easeOut", delay: 1 }}
        stroke="currentColor" strokeWidth="1.5"
      >
        {/* Building outline */}
        <path d="M200 500 V200 L400 100 L600 200 V500 Z" />
        {/* Floors */}
        <path d="M200 400 H600 M200 300 H600" />
        
        {/* Windows */}
        <path d="M250 250 H350 V350 H250 Z" />
        <path d="M450 250 H550 V350 H450 Z" />
        <path d="M250 420 H350 V480 H250 Z" />
        <path d="M450 420 H550 V480 H450 Z" />
        
        {/* Perspective lines */}
        <g opacity="0.3" strokeDasharray="2 4">
          <path d="M100 550 L200 500" />
          <path d="M700 550 L600 500" />
          <path d="M100 250 L200 200" />
        </g>
      </motion.g>
    </svg>
  )
}

export function StructuralSVG({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        stroke="currentColor" strokeWidth="1" opacity="0.7"
      >
        {/* Structural Grid */}
        <g strokeDasharray="5 5">
          {[100, 250, 400, 550, 700].map(x => <path key={`v${x}`} d={`M${x} 50 V550`} />)}
          {[100, 250, 400, 550].map(y => <path key={`h${y}`} d={`M50 ${y} H750`} />)}
        </g>
        
        {/* Columns & Beams */}
        <g strokeWidth="3" stroke="currentColor">
          {[100, 250, 400, 550, 700].map(x => 
            [100, 250, 400, 550].map(y => (
              <rect key={`${x}-${y}`} x={x-5} y={y-5} width="10" height="10" fill="currentColor" />
            ))
          )}
          <path d="M100 100 H700 M100 250 H700 M100 400 H700 M100 550 H700" />
        </g>
      </motion.g>
    </svg>
  )
}

export function RebarSVG({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 6, ease: "linear" }}
        stroke="currentColor" strokeWidth="1"
      >
        {/* Isometric Column */}
        <path d="M300 200 L400 150 L500 200 L400 250 Z" />
        <path d="M300 200 V400 L400 450 V250 Z" />
        <path d="M500 200 V400 L400 450" />
        
        {/* Rebar lines */}
        <g stroke="#5797D5" strokeWidth="2" opacity="0.8">
          <path d="M320 210 V400 M350 195 V385 M450 195 V385 M480 210 V400" />
          <path d="M310 230 L410 180 L490 220 L390 270 Z" />
          <path d="M310 270 L410 220 L490 260 L390 310 Z" />
          <path d="M310 310 L410 260 L490 300 L390 350 Z" />
          <path d="M310 350 L410 300 L490 340 L390 390 Z" />
        </g>
      </motion.g>
    </svg>
  )
}
