export const SportsCar = ({ color = '#ff0000' }: { color?: string }) => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sportsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    {/* Car body */}
    <path d="M 50 120 Q 50 80 120 70 L 280 70 Q 340 75 350 120 L 320 120 Q 310 100 280 100 L 250 100 L 240 80 L 160 80 L 150 100 L 120 100 Q 90 100 80 120 Z" fill="url(#sportsGrad)" stroke="#000" strokeWidth="2"/>
    {/* Windows */}
    <path d="M 160 85 L 150 105 L 240 105 L 230 85 Z" fill="#4a90e2" opacity="0.7"/>
    {/* Wheels */}
    <circle cx="100" cy="130" r="20" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="100" cy="130" r="12" fill="#666"/>
    <circle cx="300" cy="130" r="20" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="300" cy="130" r="12" fill="#666"/>
    {/* Details */}
    <line x1="50" y1="120" x2="350" y2="120" stroke="#000" strokeWidth="2"/>
    <path d="M 340 110 Q 345 110 345 115 Q 345 120 340 120" fill="none" stroke="#000" strokeWidth="1.5"/>
  </svg>
);

export const SUV = ({ color = '#2c5aa0' }: { color?: string }) => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="suvGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    {/* Car body */}
    <rect x="60" y="60" width="280" height="60" rx="10" fill="url(#suvGrad)" stroke="#000" strokeWidth="2"/>
    {/* Roof */}
    <path d="M 80 60 L 90 40 L 310 40 L 320 60" fill={color} stroke="#000" strokeWidth="2"/>
    {/* Windows */}
    <rect x="90" y="45" width="70" height="35" rx="5" fill="#4a90e2" opacity="0.7"/>
    <rect x="170" y="45" width="70" height="35" rx="5" fill="#4a90e2" opacity="0.7"/>
    <rect x="250" y="45" width="60" height="35" rx="5" fill="#4a90e2" opacity="0.7"/>
    {/* Wheels */}
    <circle cx="100" cy="130" r="25" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="100" cy="130" r="15" fill="#666"/>
    <circle cx="300" cy="130" r="25" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="300" cy="130" r="15" fill="#666"/>
    {/* Details */}
    <rect x="65" y="85" width="30" height="15" rx="3" fill="#ffd700" opacity="0.8"/>
    <rect x="305" y="85" width="30" height="15" rx="3" fill="#ff4444" opacity="0.8"/>
  </svg>
);

export const Truck = ({ color = '#ff6b35' }: { color?: string }) => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="truckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    {/* Cab */}
    <rect x="50" y="60" width="100" height="60" rx="5" fill="url(#truckGrad)" stroke="#000" strokeWidth="2"/>
    {/* Bed */}
    <rect x="150" y="70" width="180" height="50" fill={color} stroke="#000" strokeWidth="2"/>
    {/* Window */}
    <rect x="60" y="70" width="80" height="30" rx="5" fill="#4a90e2" opacity="0.7"/>
    {/* Wheels */}
    <circle cx="90" cy="135" r="22" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="90" cy="135" r="13" fill="#666"/>
    <circle cx="290" cy="135" r="22" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="290" cy="135" r="13" fill="#666"/>
    {/* Bed details */}
    <line x1="150" y1="80" x2="330" y2="80" stroke="#000" strokeWidth="1" opacity="0.5"/>
    <line x1="150" y1="90" x2="330" y2="90" stroke="#000" strokeWidth="1" opacity="0.5"/>
    <line x1="150" y1="100" x2="330" y2="100" stroke="#000" strokeWidth="1" opacity="0.5"/>
    <line x1="150" y1="110" x2="330" y2="110" stroke="#000" strokeWidth="1" opacity="0.5"/>
  </svg>
);

export const ElectricCar = ({ color = '#00c853' }: { color?: string }) => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="electricGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    {/* Car body - futuristic design */}
    <path d="M 60 110 Q 60 70 100 65 L 300 65 Q 340 70 340 110 Q 340 120 330 120 L 70 120 Q 60 120 60 110" fill="url(#electricGrad)" stroke="#000" strokeWidth="2"/>
    {/* Window */}
    <path d="M 120 70 Q 120 65 130 65 L 270 65 Q 280 65 280 70 L 275 95 L 125 95 Z" fill="#4a90e2" opacity="0.7"/>
    {/* Wheels */}
    <circle cx="100" cy="130" r="20" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="100" cy="130" r="12" fill="#666"/>
    <circle cx="300" cy="130" r="20" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="300" cy="130" r="12" fill="#666"/>
    {/* Electric bolt symbol */}
    <path d="M 190 85 L 180 100 L 190 100 L 185 110 L 200 90 L 190 90 L 195 80 Z" fill="#fff" stroke="#000" strokeWidth="1"/>
    {/* Charging port */}
    <circle cx="70" cy="90" r="8" fill="#fff" stroke="#000" strokeWidth="1.5"/>
    <circle cx="70" cy="90" r="5" fill="#4a90e2"/>
  </svg>
);

export const Sedan = ({ color = '#6b46c1' }: { color?: string }) => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sedanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.8 }} />
      </linearGradient>
    </defs>
    {/* Car body */}
    <path d="M 70 110 Q 70 90 90 85 L 110 85 L 130 65 L 270 65 L 290 85 L 310 85 Q 330 90 330 110 L 330 120 L 70 120 Z" fill="url(#sedanGrad)" stroke="#000" strokeWidth="2"/>
    {/* Windows */}
    <path d="M 135 70 L 130 85 L 180 85 L 180 70 Z" fill="#4a90e2" opacity="0.7"/>
    <path d="M 185 70 L 185 85 L 265 85 L 260 70 Z" fill="#4a90e2" opacity="0.7"/>
    {/* Wheels */}
    <circle cx="110" cy="130" r="20" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="110" cy="130" r="12" fill="#666"/>
    <circle cx="290" cy="130" r="20" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="290" cy="130" r="12" fill="#666"/>
    {/* Door handles */}
    <rect x="150" y="95" width="20" height="3" rx="1" fill="#000"/>
    <rect x="230" y="95" width="20" height="3" rx="1" fill="#000"/>
    {/* Headlights */}
    <ellipse cx="75" cy="100" rx="8" ry="6" fill="#ffd700" opacity="0.8"/>
    <ellipse cx="325" cy="100" rx="8" ry="6" fill="#ff4444" opacity="0.8"/>
  </svg>
);

export const getCarIllustration = (category: string, color?: string) => {
  switch (category) {
    case 'sports':
      return <SportsCar color={color || '#ff0000'} />;
    case 'suv':
      return <SUV color={color || '#2c5aa0'} />;
    case 'truck':
      return <Truck color={color || '#ff6b35'} />;
    case 'electric':
      return <ElectricCar color={color || '#00c853'} />;
    case 'sedan':
      return <Sedan color={color || '#6b46c1'} />;
    default:
      return <Sedan color={color || '#6b46c1'} />;
  }
};