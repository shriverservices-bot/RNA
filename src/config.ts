export const SITE_CONFIG = {
  name: 'RNA',
  ticker: '$RNA',
  network: 'Solana',
  // Replace with your live Solana SPL contract address before deploying
  contractAddress: 'RNAs7x9kL2mP4qV8wN3bT6yH1jC5fD9eG2uK4vX8pump',
  tagline: 'The Black Card Experience for Real Niggas.',
  subheadline:
    'High end banking rewards programs for real ass niggas. Every holder who acquires $RNA through our verified Solana contract address receives the Black Card — a dynamic NFT artifact.',
  links: {
    buy: 'https://jup.ag',
    dexscreener: 'https://dexscreener.com/solana',
    solscan: 'https://solscan.io',
    x: 'https://x.com',
    telegram: 'https://t.me',
  },
  specs: [
    { label: 'Network', value: 'Solana SPL' },
    { label: 'Ticker', value: '$RNA' },
    { label: 'Total Supply', value: '1,000,000,000' },
    { label: 'Artifact', value: 'Black Card (NFT)' },
    { label: 'Mint Mechanics', value: '1 Card per Verified Holder' },
    { label: 'Tax / Fees', value: '0% Buy / 0% Sell' },
  ],
} as const;
