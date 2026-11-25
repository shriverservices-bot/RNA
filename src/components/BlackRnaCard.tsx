import React, { useRef, useState } from 'react';
import { RefreshCw, Contrast } from 'lucide-react';
import { DnaStrand } from './RnaHelix';
import { SITE_CONFIG } from '../config';

export const BlackRnaCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 24;
    const rotateX = (0.5 - py) * 20;

    setTilt({ rotateX, rotateY });
    setGlare({ x: px * 100, y: py * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const strokeColor = isLightMode ? '#121212' : '#f5f4f0';
  const accentColor = isLightMode ? '#121212' : '#ffffff';

  return (
    <div className="card-stage">
      <div
        ref={cardRef}
        className="rna-card-scene"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-label="The N-word Pass is Granted"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsFlipped((f) => !f);
          }
        }}
      >
        <div
          className="rna-card-tilt"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
        >
          <div className={`rna-card-flip ${isFlipped ? 'is-flipped' : ''}`}>
            {/* FRONT FACE */}
            <div className={`rna-card-face rna-card-front ${isLightMode ? 'is-light' : ''}`}>
              <div className="rna-card-grain" />
              <div
                className="rna-card-sheen"
                style={{
                  opacity: glare.opacity,
                  background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${isLightMode ? 0.65 : 0.28
                    }) 0%, rgba(255,255,255,0) 60%)`,
                }}
              />

              {/* Floating DNA/RNA Strand Artifact */}
              <div
                className="rna-card-helix-holder"
                style={{
                  transform: `translateY(-50%) translate3d(${tilt.rotateY * -0.45}px, ${tilt.rotateX * 0.45
                    }px, 0)`,
                }}
              >
                <DnaStrand stroke={strokeColor} accent={accentColor} />
              </div>

              {/* Card Header */}
              <div className="rna-card-top">
                <div>
                  <div className="rna-card-wordmark">rna</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      opacity: 0.6,
                      marginTop: '6px',
                    }}
                  >
                    BLACK CARD
                  </div>
                </div>
                <span className="rna-card-badge">Solana NFT</span>
              </div>

              {/* Card Middle */}
              <div className="rna-card-center">
                <div className="rna-card-chip" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              {/* Card Footer */}
              <div className="rna-card-bottom">
                <div className="rna-card-meta-group">
                  <span className="rna-card-meta-label">Artifact ID</span>
                  <span className="rna-card-meta-val">RNA-0001 / REAL NIGGA VERIFIED</span>
                </div>
                <div className="rna-card-meta-group" style={{ textAlign: 'right' }}>
                  <span className="rna-card-meta-label">Ticker</span>
                  <span className="rna-card-meta-val">{SITE_CONFIG.ticker}</span>
                </div>
              </div>
            </div>

            {/* BACK FACE */}
            <div className={`rna-card-face rna-card-back ${isLightMode ? 'is-light' : ''}`}>
              <div className="rna-card-grain" />
              <div
                className="rna-card-sheen"
                style={{
                  opacity: glare.opacity,
                  background: `radial-gradient(circle at ${100 - glare.x}% ${glare.y}%, rgba(255,255,255,${isLightMode ? 0.55 : 0.22
                    }) 0%, rgba(255,255,255,0) 60%)`,
                }}
              />

              {/* Top Magnetic Strip */}
              <div className={`rna-card-magstripe ${isLightMode ? 'is-light' : ''}`} />

              <div className="rna-card-back-body">
                <div className="rna-card-meta-label" style={{ marginBottom: '6px' }}>
                  Verified Solana Contract
                </div>
                <div className={`rna-card-ca-pill ${isLightMode ? 'is-light' : ''}`}>
                  {SITE_CONFIG.contractAddress}
                </div>
              </div>

              <div className="rna-card-bottom">
                <div className="rna-card-meta-group">
                  <span className="rna-card-meta-label">Standard</span>
                  <span className="rna-card-meta-val">SPL / Metaplex</span>
                </div>
                <div className="rna-card-meta-group" style={{ textAlign: 'right' }}>
                  <span className="rna-card-meta-label">Status</span>
                  <span className="rna-card-meta-val">HOLDER VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-controls">
        <button
          type="button"
          className="card-ctrl-btn"
          onClick={() => setIsFlipped((f) => !f)}
        >
          <RefreshCw size={13} />
          {isFlipped ? 'Show Front' : 'Flip Card'}
        </button>
        <button
          type="button"
          className="card-ctrl-btn"
          onClick={() => setIsLightMode((m) => !m)}
        >
          <Contrast size={13} />
          {isLightMode ? 'Obsidian Edition' : 'Invert Contrast'}
        </button>
      </div>
      <div className="card-hint">Hover to tilt in 3D · Click card to inspect reverse</div>
    </div>
  );
};
