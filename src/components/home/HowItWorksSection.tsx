import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Create Your Free Private Account",
    description: "Set up your secure portal in 3 minutes. Upload photos, videos, and property details when it's convenient for you—midnight, during lunch break, whenever. No one looking over your shoulder.",
  },
  {
    number: "2",
    title: "Receive Your Offer Via Email (Not Phone)",
    description: "Within 24 hours, you'll receive a detailed cash offer in St. Louis in your email. Review it privately. Share it with family. Sleep on it. Take your time we won't call you 10 times asking \"what you think.\""
  },
  {
    number: "3",
    title: "Accept, Decline, or Ask Questions—Your Choice",
    description: "Accept? Choose your closing date (7-90+ days). Decline? One-click, no explanation needed. Questions? Message us through the portal or schedule a call only if/when YOU want one.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 lg:px-8 pb-12 sm:pb-16 pt-10 sm:pt-12 lg:pt-14 lg:pb-18 bg-secondary text-secondary-foreground">
      <div className="container max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Requirement: Wording on two lines */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mb-2 leading-tight">
            Get Your Offer <br />
            the No-Pressure Way:
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold font-semibold mb-4 sm:mb-6">
            100% Online, On Your Timeline
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-secondary-foreground/80 px-2">
            No home visits. No sales pitches. No aggressive follow-up calls. Just a straightforward, transparent process you control from start to finish. Whether you want to sell your house fast in St. Louis or work with trusted St. Louis home buyers, our process makes it simple and stress-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold/30 to-transparent" />
              )}

              {/* STYLISH WHITE CIRCLES: Smaller & Professional */}
              <div className="
                w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 
                bg-white border border-gold/40 rounded-full 
                flex items-center justify-center 
                text-xl sm:text-2xl font-bold text-[#1c354e] 
                shadow-[0_0_15px_rgba(255,255,255,0.4)]
                relative z-10"
              >
                {step.number}
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-gold mb-2 sm:mb-3 px-2">{step.title}</h3>
              <p className="text-sm sm:text-base text-secondary-foreground/80 leading-relaxed px-2">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Driver's Seat Statement */}
        <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-gold font-medium italic">
            You're in the driver's seat. We're just here to provide an option.
          </p>
        </div>

        {/* Trust Statement */}
        <div className="mt-8 sm:mt-12 lg:mt-16 bg-secondary-foreground/10 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-soft text-center max-w-3xl mx-auto border border-gold/20">
          <p className="text-base sm:text-lg text-secondary-foreground/90 italic mb-3 sm:mb-4 leading-relaxed">
            "Unlike corporate house flippers who use high-pressure sales scripts, we're a local family business. We don't need gimmicks or pressure tactics—our reputation is built on treating St. Louis homeowners with respect and dignity."
          </p>
          <p className="font-semibold text-gold text-sm sm:text-base">— Jeff Camilleri, Founder</p>
        </div>

        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <Link to="/get-offer">
            <Button
              size="xl"
              className="
                text-sm sm:text-base lg:text-lg px-6 sm:px-8
                bg-[#1c354e] 
                hover:bg-[#102941]
                text-white
                shadow-lg hover:shadow-xl
                transition-all
              "
            >
              Get Started - No Pressure, No Obligation →
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}