import React from 'react';

interface DnaStrandProps {
  className?: string;
  stroke?: string;
  accent?: string;
  animated?: boolean;
}

/**
 * Fine-line monochrome double-helix DNA/RNA strand SVG,
 * styled to pair with high-contrast editorial typography.
 */
export const DnaStrand: React.FC<DnaStrandProps> = ({
  className = '',
  stroke = 'currentColor',
  accent = 'currentColor',
  animated = true,
}) => {
  const rungs = [
    { y: 24, x1: 38, x2: 82, delay: '0s' },
    { y: 40, x1: 30, x2: 90, delay: '0.18s' },
    { y: 56, x1: 34, x2: 86, delay: '0.36s' },
    { y: 72, x1: 48, x2: 72, delay: '0.54s' },
    { y: 104, x1: 46, x2: 74, delay: '0.72s' },
    { y: 120, x1: 32, x2: 88, delay: '0.9s' },
    { y: 136, x1: 28, x2: 92, delay: '1.08s' },
    { y: 152, x1: 36, x2: 84, delay: '1.26s' },
    { y: 168, x1: 50, x2: 70, delay: '1.44s' },
    { y: 200, x1: 44, x2: 76, delay: '1.62s' },
    { y: 216, x1: 32, x2: 88, delay: '1.8s' },
    { y: 232, x1: 36, x2: 84, delay: '1.98s' },
    { y: 248, x1: 46, x2: 74, delay: '2.16s' },
  ];

  return (
    <svg
      viewBox="0 0 120 276"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'helix-float' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Base-pair rungs */}
      {rungs.map((r, i) => (
        <g key={i} className={animated ? 'helix-rung' : undefined} style={{ animationDelay: r.delay }}>
          <line
            x1={r.x1}
            y1={r.y}
            x2={r.x2}
            y2={r.y}
            stroke={accent}
            strokeWidth="1.35"
            strokeLinecap="round"
            opacity="0.72"
          />
          <circle cx={r.x1} cy={r.y} r="1.5" fill={accent} opacity="0.85" />
          <circle cx={r.x2} cy={r.y} r="1.5" fill={accent} opacity="0.85" />
        </g>
      ))}

      {/* Back ribbon strand (double-line editorial ink) */}
      <path
        d="M36 8 C 88 36, 94 64, 60 88 C 26 112, 22 146, 60 184 C 96 216, 86 244, 42 268"
        stroke={stroke}
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M42 8 C 94 36, 100 64, 66 88 C 32 112, 28 146, 66 184 C 102 216, 92 244, 48 268"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Front ribbon strand (bold monochrome ink) */}
      <path
        d="M84 8 C 32 36, 26 64, 60 88 C 94 112, 98 146, 60 184 C 24 216, 34 244, 78 268"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M78 8 C 26 36, 20 64, 54 88 C 88 112, 92 146, 54 184 C 18 216, 28 244, 72 268"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
};

/**
 * Editorial "rna" wordmark emblem with descending helix strand,
 * matching the monochrome minimalist visual direction.
 */
export const RnaEmblem: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 0 8px',
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: 'clamp(5.2rem, 11vw, 7.6rem)',
          lineHeight: 0.78,
          letterSpacing: '-0.06em',
          color: '#121212',
          userSelect: 'none',
          position: 'relative',
          zIndex: 2,
        }}
      >
        rna
      </div>
      <div style={{ marginTop: '-22px', width: '112px', position: 'relative', zIndex: 1 }}>
        <DnaStrand stroke="#121212" accent="#121212" />
      </div>
    </div>
  );
};
