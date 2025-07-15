import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  // Use static values for now to ensure it works
  const bnbPrice = '$723.45';
  const marketCap = '$112.5B';
  const volume24h = '$1.8B';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0E11',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1A1D1F 0%, #0B0E11 100%)',
          position: 'relative',
        }}
      >
        {/* Subtle hexagon pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: `repeating-linear-gradient(60deg, transparent, transparent 40px, #F3BA2F 40px, #F3BA2F 41px)`,
          }}
        />
        
        {/* Logo with glow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 140,
            height: 140,
            borderRadius: '50%',
            background: 'rgba(26, 29, 31, 0.5)',
            border: '2px solid rgba(243, 186, 47, 0.2)',
            boxShadow: '0 0 40px rgba(243, 186, 47, 0.3)',
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FCD535 0%, #F3BA2F 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              fontWeight: 'bold',
              color: '#0B0E11',
            }}
          >
            BNB
          </div>
        </div>
        
        {/* Company Name */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: '#F3BA2F',
            marginBottom: 12,
          }}
        >
          Build and Build Co
        </div>
        
        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: '#F0F0F0',
            opacity: 0.8,
            marginBottom: 40,
          }}
        >
          Providing institutional-grade access to Binance Smart Chain
        </div>
        
        {/* BNB Stats */}
        <div
          style={{
            display: 'flex',
            gap: 60,
            marginTop: 20,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: '#F3BA2F' }}>
              {bnbPrice}
            </div>
            <div style={{ fontSize: 14, color: '#9CA3AF', marginTop: 4 }}>
              BNB Price (USD)
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: '#F3BA2F' }}>
              {marketCap}
            </div>
            <div style={{ fontSize: 14, color: '#9CA3AF', marginTop: 4 }}>
              BNB Market Cap
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 'bold', color: '#F3BA2F' }}>
              {volume24h}
            </div>
            <div style={{ fontSize: 14, color: '#9CA3AF', marginTop: 4 }}>
              24h Volume (USD)
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}