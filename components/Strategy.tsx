export default function Strategy() {
  const strategies = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Regulatory Compliance",
      description: "Fully compliant with US regulations, providing institutional-grade security and legal certainty for BNB investments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Optimized Performance",
      description: "Advanced trading algorithms and liquidity management ensure optimal entry and exit points for maximum returns."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure Custody",
      description: "Multi-signature wallets and cold storage solutions protect your BNB assets with bank-grade security protocols."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Management",
      description: "Seasoned crypto professionals with deep BSC ecosystem knowledge manage your investments 24/7."
    }
  ];

  return (
    <section id="strategy" className="py-20 relative bg-bsc-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Strategy</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive approach to bringing Binance Smart Chain opportunities to US investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="group glass-effect p-8 rounded-xl hover:bg-bsc-surface transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-bsc-yellow/10 flex items-center justify-center text-bsc-yellow group-hover:bg-bsc-yellow group-hover:text-bsc-dark transition-all duration-300">
                  {strategy.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-effect rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-bsc-yellow">
            Technical Infrastructure
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">&lt;50ms</div>
              <div className="text-gray-400">Trade Execution</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">256-bit</div>
              <div className="text-gray-400">Encryption</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}