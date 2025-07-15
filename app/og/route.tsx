import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
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
        }}
      >
        {/* Hexagon pattern effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `repeating-linear-gradient(
              60deg,
              transparent,
              transparent 35px,
              rgba(243, 186, 47, 0.03) 35px,
              rgba(243, 186, 47, 0.03) 70px
            )`,
          }}
        />
        
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #FCD535 0%, #F3BA2F 100%)',
            boxShadow: '0 0 80px rgba(243, 186, 47, 0.5)',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#0B0E11',
              letterSpacing: '-2px',
            }}
          >
            BNB
          </div>
        </div>
        
        {/* Company Name */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: '#F3BA2F',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Build and Build Co
        </div>
        
        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#F0F0F0',
            opacity: 0.9,
            textAlign: 'center',
          }}
        >
          BNB Access for US Investors
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}