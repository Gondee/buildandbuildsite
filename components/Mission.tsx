export default function Mission() {
  return (
    <section id="mission" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Mission</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Democratizing access to the Binance Smart Chain ecosystem for US investors
            </p>
          </div>

          <div className="space-y-12">
            <div className="glass-effect rounded-xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-bsc-yellow mb-6">Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Build and Build Co envisions a future where US investors can seamlessly access the innovative opportunities 
                within the Binance Smart Chain ecosystem through fully compliant, secure, and professionally managed investment vehicles. 
                We bridge the regulatory gap between traditional finance and decentralized innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-xl p-8">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-bsc-yellow rounded-full mr-3"></span>
                  Accessibility
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Breaking down barriers to entry for institutional and accredited investors seeking exposure to BNB 
                  and BSC ecosystem tokens within US regulatory frameworks.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-bsc-yellow rounded-full mr-3"></span>
                  Innovation
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Pioneering new investment structures that combine the benefits of DeFi with the security and 
                  compliance requirements of traditional finance.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-bsc-yellow rounded-full mr-3"></span>
                  Transparency
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Providing clear, auditable, and real-time reporting on all investment activities, ensuring 
                  complete visibility into portfolio performance and risk metrics.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-bsc-yellow rounded-full mr-3"></span>
                  Security
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Implementing industry-leading security protocols and custody solutions to protect investor 
                  assets while maintaining the flexibility needed for optimal returns.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <blockquote className="text-2xl font-light text-gray-300 italic">
                "Building bridges between traditional finance and the future of decentralized innovation"
              </blockquote>
              <p className="text-bsc-yellow mt-4 font-semibold">- Build and Build Co</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}