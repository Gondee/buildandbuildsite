"use client";

import { useEffect, useState } from "react";

interface BNBData {
  price: number;
  marketCap: number;
  volume24h: number;
}

export default function BNBStats() {
  const [data, setData] = useState<BNBData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/bnb-stats');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching BNB data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const formatLargeNumber = (num: number) => {
    if (num >= 1e9) {
      return `$${(num / 1e9).toFixed(2)}B`;
    } else if (num >= 1e6) {
      return `$${(num / 1e6).toFixed(2)}M`;
    }
    return formatPrice(num);
  };

  if (loading) {
    return (
      <div className="mt-16 grid grid-cols-3 gap-8 text-center animate-fade-in">
        <div>
          <div className="text-3xl font-bold text-bsc-yellow animate-pulse">---</div>
          <div className="text-gray-400 text-sm">BNB Price</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-bsc-yellow animate-pulse">---</div>
          <div className="text-gray-400 text-sm">Market Cap</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-bsc-yellow animate-pulse">---</div>
          <div className="text-gray-400 text-sm">24h Volume</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="mt-16 grid grid-cols-3 gap-8 text-center animate-fade-in animation-delay-600">
      <div className="group">
        <div className="text-3xl font-bold text-bsc-yellow transition-transform duration-200 group-hover:scale-105">
          {formatPrice(data.price)}
        </div>
        <div className="text-gray-400 text-sm mt-1">BNB Price (USD)</div>
      </div>
      <div className="group">
        <div className="text-3xl font-bold text-bsc-yellow transition-transform duration-200 group-hover:scale-105">
          {formatLargeNumber(data.marketCap)}
        </div>
        <div className="text-gray-400 text-sm mt-1">Market Cap</div>
      </div>
      <div className="group">
        <div className="text-3xl font-bold text-bsc-yellow transition-transform duration-200 group-hover:scale-105">
          {formatLargeNumber(data.volume24h)}
        </div>
        <div className="text-gray-400 text-sm mt-1">24h Volume (USD)</div>
      </div>
    </div>
  );
}