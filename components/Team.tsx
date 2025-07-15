import Image from "next/image";

interface TeamMember {
  name: string;
  bio: string[];
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Patrick Horsman, CFA",
    bio: [
      "Co-Founder and Managing Partner of Coral Capital, a DeFi market neutral fund. GP sold to DNA (Oct 2024)",
      "CIO of Esoteric Strategies LP, a Crypto Arbitrage fund",
      "Co-Founder of Merion Investment Management, a litigation finance fund with peak AUM of $1.2B",
      "Co-Founder of Integrated Ag, an Agriculture PE fund with peak AUM of $270M",
      "Co-Founder of Blue Sand Securities, a placement agent who raised >$15B for single manager alternative investment funds",
      "Co-Founder of Innovation Shares, an ETF sponsor providing exposure to cutting edge themes using AI and Natural Language Processing, including NYSE: KOIN one of the first Blockchain ETFs, and NYSE: THCX one of the first Cannabis ETFs",
      "Founder of Verified Organic, an Ethereum blockchain based verification system for organic food production",
      "CFA Charterholder, FINRA Series 7, 24, 66",
      "Triple major in Accounting, Finance, and Entrepreneurship from University of Arizona Eller School of Business"
    ],
    image: "/team/patrick.png"
  },
  {
    name: "Joshua Kruger",
    bio: [
      "Head of Trading & Portfolio Manager, DNA Asset Management (2024); directs multi-strategy liquid token portfolio integrating systematic regime models, discretionary thematic allocations, and market-neutral positioning",
      "Partner & Head of Trading, Coral Capital (2022); $100M+ AUM across DeFi market neutral and venture strategies; acquired by DNA in 2024",
      "Lead Architect, Tokenomics & Game Theory, Tea Protocol (2023); protocol incentive design alongside Max Howell, optimizing decentralized open-source contribution networks",
      "Founder, Fractal Ventures (2022); strategic advisory for early-stage digital asset protocols in token design, capital formation, and product architecture",
      "Co-Founder of OnChain Alpha (2020) - Hedge Fund focused on Delta Neutral Decentralized Finance alpha opportunities. Acquired by Coral Capital in 2022",
      "Co-Founder of Kruger Pasch Capital (2017) - Hedge Fund strategy focused on algorithmic funding strategies denominated in Bitcoin",
      "B.S., Computer Science, Texas A&M University; specialization in Cybersecurity"
    ],
    image: "/team/Josh.png"
  },
  {
    name: "Johnathan Pasch",
    bio: [
      "Head of Quant Research and Portfolio Manager at DNA Asset Management +50M AUM, specializing in risk adjusted returns. 2024",
      "Partner and Portfolio Manager Coral Capital, Crypto focused hedge fund with 100M+ AUM. Guided strategic asset selection and risk management",
      "Co-Founder of OnChain Alpha (2020) - Hedge Fund focused on Delta Neutral Decentralized Finance alpha opportunities. Acquired by Coral Capital in 2022",
      "Co-founded the hedge fund Kruger Pasch Capital LLC (2017) and OnChain Alpha (2021)",
      "Served as a 61A research analyst in the United States Air Force, and his 9+ years of military service bolstering education on modeling, machine learning, and simulation",
      "Founder Solution Point: +15 contracts in Web3 Strategy & Infrastructure consulting bolstering end-to-end advisory on tokenomics, governance, cross-chain architecture for DeFi, and protocol ecosystems",
      "Bachelor's Degree in Computer Science from Texas A&M University",
      "Masters Program: Systems&Systems Analysis Military Applications Course. Army Logistics University"
    ],
    image: "/team/jr.png"
  },
  {
    name: "James Haft",
    bio: [
      "Serial entrepreneur with over 35 years experience focused on building companies with disruptive digitization of information",
      "Globally recognized thought leader in Distributed Ledger and Decentralization technologies",
      "Experience in public, private and emerging capital markets. Founder at the Decentralized AI Society (www.DAIS.global), Chairman and founder of ALT-X ASA, the first publicly-listed Web3 company",
      "Chairman and co-founder of OnealCoin, first company to tokenize carbon credits",
      "Founder of PALcapital in 1996. Advisory and venture investment firm dedicated to DLT and AI businesses",
      "Former Managing Director of Asian Investment Banking at Bear Stearns, responsible for the first listing of a Chinese company on the NYSE",
      "Former MD of emerging markets investment banking at Canaccord",
      "Former head of Latin American Equity Capital Markets at NatWest",
      "Co-founder of CryptoMondays, one of the largest and best known global meetups for Cryptocurrencies and DLT globally",
      "AB in Economics from Vassar College. JD/MBA from Emory University"
    ],
    image: "/team/james.png"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Team</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the experienced professionals driving BNB accessibility in the United States
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl glass-effect p-8 hover:bg-bsc-surface transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bsc-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 relative overflow-hidden rounded-full border-2 border-bsc-yellow/20 group-hover:border-bsc-yellow transition-colors duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className={`object-cover ${member.name.includes('Patrick') ? 'object-[center_35%]' : 'object-center'}`}
                        sizes="(max-width: 768px) 96px, 96px"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-bsc-yellow transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-bsc-yellow transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {member.bio.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-bsc-yellow mr-2 mt-1.5 text-xs">•</span>
                      <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}