import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from './config';
import { RnaEmblem } from './components/RnaHelix';
import { BlackRnaCard } from './components/BlackRnaCard';

export const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCA = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.contractAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = SITE_CONFIG.contractAddress;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid-bg">
      {/* Navigation */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-brand">
            <span>rna</span>
            <span className="nav-ticker">{SITE_CONFIG.ticker}</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#artifact">Black RNA Card</a>
            <a href="#protocol">How It Works</a>
            <a href="#specs">Specifications</a>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              onClick={handleCopyCA}
              className="btn btn-outline btn-sm nav-copy-btn"
              aria-label="Copy Solana contract address"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied CA' : 'Copy CA'}
            </button>
            <a
              href={SITE_CONFIG.links.buy}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Acquire {SITE_CONFIG.ticker}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="status-dot" />
                Live on {SITE_CONFIG.network} Ecosystem
              </div>

              <h1 className="hero-title">
                Pure monochrome.
                <br />
                <em>Evolved</em> on-chain.
              </h1>

              <p className="hero-desc">{SITE_CONFIG.subheadline}</p>

              <div className="hero-cta-row">
                <a
                  href={SITE_CONFIG.links.buy}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Buy {SITE_CONFIG.ticker}
                  <ArrowUpRight size={16} />
                </a>
                <a href="#artifact" className="btn btn-outline">
                  <Sparkles size={15} />
                  Inspect Black RNA Card
                </a>
              </div>

              <div className="ca-box">
                <div className="ca-meta">
                  <span className="ca-label">Solana Contract Address (CA)</span>
                  <span className="ca-value" title={SITE_CONFIG.contractAddress}>
                    {SITE_CONFIG.contractAddress}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCA}
                  className="ca-copy-btn"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="hero-emblem-wrap">
              <RnaEmblem />
              <div className="hero-emblem-footer">
                <span>RNA Protocol</span>
                <span>{SITE_CONFIG.ticker} · SPL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Black RNA Card Showcase */}
        <section id="artifact" className="section section-dark">
          <div className="container">
            <div className="card-showcase-grid">
              <BlackRnaCard />

              <div>
                <div className="section-header" style={{ marginBottom: '28px' }}>
                  <span className="section-kicker">01 / Holder Artifact</span>
                  <h2 className="section-title">The Black RNA Card</h2>
                  <p className="section-subtitle">
                    Every wallet that purchases {SITE_CONFIG.ticker} through our official Solana
                    contract address qualifies for the Black RNA Card — a kinetic, monochrome NFT
                    etched with our signature helix strand.
                  </p>
                </div>

                <div className="card-details-list">
                  <div className="card-detail-item">
                    <span className="card-detail-num">01</span>
                    <div>
                      <h3>Kinetic 3D Artifact</h3>
                      <p>
                        Designed as a tactile obsidian collectible with reactive specular lighting
                        and an animated double-helix strand.
                      </p>
                    </div>
                  </div>

                  <div className="card-detail-item">
                    <span className="card-detail-num">02</span>
                    <div>
                      <h3>On-Chain Holder Proof</h3>
                      <p>
                        Issued directly on the Solana network to verify early and active{' '}
                        {SITE_CONFIG.ticker} community holders.
                      </p>
                    </div>
                  </div>

                  <div className="card-detail-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                    <span className="card-detail-num">03</span>
                    <div>
                      <h3>Zero-Noise Minimalism</h3>
                      <p>
                        Strict black-and-white visual architecture—no clutter, no gimmicks, pure
                        signal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="protocol" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">02 / Sequence Protocol</span>
              <h2 className="section-title">From swap to artifact in three steps.</h2>
              <p className="section-subtitle">
                Built natively for Solana speed. Acquire {SITE_CONFIG.ticker}, verify your wallet,
                and hold your Black RNA Card.
              </p>
            </div>

            <div className="steps-grid">
              <article className="step-card">
                <span className="step-index">STEP 01</span>
                <h3>Copy the Contract</h3>
                <p>
                  Copy the verified {SITE_CONFIG.ticker} Solana contract address above and open your
                  preferred Solana DEX or wallet swap interface.
                </p>
              </article>

              <article className="step-card">
                <span className="step-index">STEP 02</span>
                <h3>Acquire {SITE_CONFIG.ticker}</h3>
                <p>
                  Swap SOL for {SITE_CONFIG.ticker}. Every confirmed purchase is indexed on-chain
                  against our holder snapshot registry.
                </p>
              </article>

              <article className="step-card">
                <span className="step-index">STEP 03</span>
                <h3>Receive the Black RNA Card</h3>
                <p>
                  Qualified holders receive their Black RNA Card NFT directly to their Solana
                  wallet—displaying the helix emblem on-chain.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section id="specs" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">03 / Specifications</span>
              <h2 className="section-title">Protocol Architecture</h2>
            </div>

            <div className="specs-grid">
              {SITE_CONFIG.specs.map((item) => (
                <div key={item.label} className="spec-cell">
                  <span className="spec-label">{item.label}</span>
                  <span className="spec-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <a href="#top" className="nav-brand">
              <span>rna</span>
              <span className="nav-ticker">{SITE_CONFIG.ticker}</span>
            </a>

            <div className="footer-links">
              <a href={SITE_CONFIG.links.dexscreener} target="_blank" rel="noreferrer">
                DexScreener
              </a>
              <a href={SITE_CONFIG.links.solscan} target="_blank" rel="noreferrer">
                Solscan
              </a>
              <a href={SITE_CONFIG.links.x} target="_blank" rel="noreferrer">
                X / Twitter
              </a>
              <a href={SITE_CONFIG.links.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>

          <div className="footer-note">
            <span>© {new Date().getFullYear()} RNA Protocol · Built on Solana</span>
            <span>Ready for Vercel Deployment</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
