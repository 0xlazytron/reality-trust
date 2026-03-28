import { Check, X } from "lucide-react";

const comparisonData = [
  {
    others: "Show up at your door uninvited",
    us: "100% online offer process—no home visit required",
  },
  {
    others: 'Pressure you to decide "today only"',
    us: "Take weeks to decide—we won't rush you",
  },
  {
    others: "Blow up your phone with daily calls",
    us: "We email your offer—you call us (if you want)",
  },
  {
    others: "Make you feel guilty for declining",
    us: "Decline with one click—stay anonymous",
  },
  {
    others: "Use scare tactics about market conditions",
    us: "Honest market analysis, not fear tactics",
  },
  {
    others: "Push for immediate access to your home",
    us: "Virtual walkthrough option—keep your privacy",
  },
  {
    others: 'Give lowball offers and call them "fair"',
    us: "Fair offers based on real data, explained clearly",
  },
];

export function ComparisonSection() {
  return (
    <section className="py-10 lg:py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-secondary mb-4">
            Tired of Pushy "We Buy Houses" Companies?{" "}
            <span className="block mt-2">Us Too.</span>
          </h2>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[28rem]">
            <div className="bg-cream rounded-2xl overflow-hidden shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-2 bg-secondary text-secondary-foreground p-5 lg:p-7 gap-4">
                <div className="font-semibold text-center text-base lg:text-lg">
                  Other House Buyers:
                </div>
                <div className="font-semibold text-center text-gold text-base lg:text-lg">
                  Realty Trust Company:
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 p-5 lg:p-7 gap-4 border-b last:border-b-0 border-forest/10 items-center ${
                    index % 2 === 0 ? "bg-cream/50" : "bg-card"
                  }`}
                >
                  <div className="flex items-center gap-3 text-muted-foreground text-sm lg:text-base">
                    <X className="w-5 h-5 lg:w-6 lg:h-6 text-rust flex-shrink-0" />
                    <span className="text-left">{row.others}</span>
                  </div>
                  <div className="flex items-center gap-3 text-secondary font-medium text-sm lg:text-base bg-primary/10 rounded-xl p-3 lg:p-4">
                    <Check className="w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                    <span className="text-left">{row.us}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}