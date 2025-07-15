import { NextResponse } from 'next/server';

const CMC_API_KEY = process.env.CMC_API_KEY || '';
const CMC_API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';

export async function GET() {
  try {
    const response = await fetch(`${CMC_API_URL}?symbol=BNB&convert=USD`, {
      headers: {
        'X-CMC_PRO_API_KEY': CMC_API_KEY,
        'Accept': 'application/json',
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch BNB data');
    }

    const data = await response.json();
    const bnbData = data.data.BNB;
    
    return NextResponse.json({
      price: bnbData.quote.USD.price,
      marketCap: bnbData.quote.USD.market_cap,
      volume24h: bnbData.quote.USD.volume_24h,
    });
  } catch (error) {
    console.error('Error fetching BNB stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch BNB statistics' },
      { status: 500 }
    );
  }
}