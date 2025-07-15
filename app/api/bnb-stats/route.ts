import { NextResponse } from 'next/server';

const CMC_API_KEY = process.env.CMC_API_KEY || '';
const CMC_API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

interface CacheData {
  price: number;
  marketCap: number;
  volume24h: number;
}

let cache: {
  data: CacheData;
  timestamp: number;
} | null = null;

export async function GET() {
  try {
    // Check if we have valid cached data
    if (cache && (Date.now() - cache.timestamp) < CACHE_DURATION) {
      return NextResponse.json({
        ...cache.data,
        lastUpdated: cache.timestamp,
        fromCache: true
      });
    }

    // Fetch fresh data from CoinMarketCap
    const response = await fetch(`${CMC_API_URL}?symbol=BNB&convert=USD`, {
      headers: {
        'X-CMC_PRO_API_KEY': CMC_API_KEY,
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch BNB data');
    }

    const data = await response.json();
    const bnbData = data.data.BNB;
    
    const result = {
      price: bnbData.quote.USD.price,
      marketCap: bnbData.quote.USD.market_cap,
      volume24h: bnbData.quote.USD.volume_24h,
    };

    // Update cache
    cache = {
      data: result,
      timestamp: Date.now()
    };

    return NextResponse.json({
      ...result,
      lastUpdated: cache.timestamp,
      fromCache: false
    });
  } catch (error) {
    console.error('Error fetching BNB stats:', error);
    
    // If we have cached data, return it even if expired
    if (cache) {
      return NextResponse.json({
        ...cache.data,
        lastUpdated: cache.timestamp,
        fromCache: true,
        error: 'Using cached data due to API error'
      });
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch BNB statistics' },
      { status: 500 }
    );
  }
}