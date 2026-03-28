import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export function NoPressureSection() {
  const points = [
    "Upload your info when it's convenient for you",
    "Receive your offer via email—review it privately",
    'No pushy phone calls or surprise "walk-throughs"',
    "Take days or weeks to decide—we won't rush you",
    "Decline with one click—no awkward conversations",
  ];

  return (
    <section
      id="no-pressure"
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-white text-gray-900"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, black 2%, transparent 0%), radial-gradient(circle at 75px 75px, black 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-6 left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-6 right-6 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-600 to-gold">
                NO HIGH-PRESSURE TACTICS
              </span>
            </h2>
          </div>
        </div>

        {/* Content Card - Off-white section */}
        <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 mb-8 shadow-xl">
          <div className="max-w-4xl mx-0 sm:mx-auto">
            <div className="text-base sm:text-lg mb-6 text-gray-700 leading-relaxed text-left sm:text-center">
              <p>
                Unlike typical house-buying companies, we believe you deserve
                space to make the right decision for your situation. That's why we
                created a completely private, self-service portal where:
              </p>
              {/* Requirement: Larger and on its own line */}
              <p className="block mt-4 text-xl sm:text-2xl font-bold text-gold">
                You control the entire process
              </p>
            </div>

            <div className="space-y-4 max-w-2xl mx-0 sm:mx-auto">
              {points.map((point, idx) => (
                <div key={idx} className="group">
                  {/* Hover logic: text color changes to #1c354e */}
                  <div className="flex items-start gap-4 p-2 sm:p-3 rounded-lg hover:bg-white transition-all duration-300">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="relative">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-[#1c354e] flex items-center justify-center shadow-md">
                          <Check className="w-4 h-4 text-white font-bold" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-base text-gray-700 group-hover:text-[#1c354e] transition-colors">
                        {point}
                      </p>
                    </div>
                  </div>
                  {idx < points.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-0 sm:mx-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Statement */}
        <div className="text-center">
          <div className="inline-block p-0.5 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-full mb-4">
            <div className="bg-white backdrop-blur-sm rounded-full px-6 py-3 border border-gray-100 shadow-sm">
              <p className="text-xl sm:text-2xl md:text-3xl text-secondary font-serif italic">
                "Your property. Your timeline. Your decision."
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/get-offer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-amber-400 hover:from-amber-400 hover:to-gold text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Start Your No-Pressure Offer</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}