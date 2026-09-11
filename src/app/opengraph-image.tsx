import { ImageResponse } from 'next/og';

export const alt = 'Eternity Techsoft — Software Services & Flagship Products (K-Sign & Geomeridian)';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#06080d',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.18), transparent 45%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.18), transparent 45%)',
          padding: '70px 80px',
        }}
      >
        {/* Top Header / Brand Badge */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(168, 85, 247, 0.25))',
              border: '2px solid rgba(56, 189, 248, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 12c-2-2.67-4-4-6.5-4a4.5 4.5 0 1 0 0 9c2.5 0 4.5-1.33 6.5-4z" />
              <path d="M12 12c2 2.67 4 4 6.5 4a4.5 4.5 0 1 0 0-9c-2.5 0-4.5 1.33-6.5 4z" />
              <circle cx="12" cy="12" r="1.5" fill="#38bdf8" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '34px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginRight: '8px' }}>
                Eternity
              </span>
              <span style={{ fontSize: '34px', fontWeight: 800, color: '#38bdf8', letterSpacing: '-0.02em' }}>
                Techsoft
              </span>
            </div>
            <span style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8', fontFamily: 'monospace' }}>
              Software Services & Flagship Products
            </span>
          </div>
        </div>

        {/* Hero Title & Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1040px' }}>
          <div
            style={{
              fontSize: '54px',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '20px',
            }}
          >
            <span style={{ marginRight: '16px' }}>High-Impact Software Services &</span>
            <span style={{ color: '#38bdf8' }}>Flagship Products</span>
          </div>
          
          <div
            style={{
              fontSize: '24px',
              color: '#cbd5e1',
              lineHeight: 1.45,
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ marginRight: '8px' }}>Engineering digital solutions while actively building proprietary platforms:</span>
            <span style={{ color: '#38bdf8', fontWeight: 700, marginRight: '8px' }}>K-Sign</span>
            <span style={{ marginRight: '8px' }}>(Cryptographic Trust) &</span>
            <span style={{ color: '#c084fc', fontWeight: 700, marginRight: '8px' }}>Geomeridian</span>
            <span>(Geospatial Intelligence).</span>
          </div>
        </div>

        {/* Bottom Proof Badges */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              color: '#38bdf8',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'monospace',
              marginRight: '16px',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#34d399', marginRight: '10px' }} />
            <span>99.99% Availability SLA</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              color: '#c084fc',
              fontSize: '15px',
              fontWeight: 600,
              fontFamily: 'monospace',
              marginRight: '16px',
            }}
          >
            <span>Sub-85ms Latency Engine</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              color: '#f8fafc',
              fontSize: '15px',
              fontWeight: 600,
            }}
          >
            <span>https://eternitytechsoft.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
