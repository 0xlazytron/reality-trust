import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Star, Heart, Shield, Smartphone } from "lucide-react";
import homeVideo from "./video/homePage.mp4";

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen sm:h-[90vh] pt-1 sm:pt-6 md:pt-10 lg:pt-4 xl:pt-6 flex items-start sm:items-center lg:items-start xl:items-center overflow-hidden bg-gradient-hero">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-[0.7px] opacity-50 shadow-[0_0_60px_#ffffff]"
        >
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-primary/15 z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent clip-path-diagonal hidden lg:block z-20" />

        <div className="container max-w-7xl mx-auto px-4 lg:px-8 relative z-30 h-full flex flex-col justify-start sm:justify-center lg:justify-start xl:justify-center py-8 sm:py-0 lg:pt-16 xl:pt-0">
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-[3rem] text-secondary leading-tight mb-3 mt-4 sm:mt-0">
            Sell Your House Fast in St. Louis, MO
          </h1>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="animate-fade-in-up flex flex-col h-full">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] text-secondary mb-2 leading-snug">
                  <span className="block">No Pressure,</span>
                  <span className="block">No Hassle,</span>
                  <span className="block">Just Honest Help</span>
                </h2>

                <p className="text-sm sm:text-md md:text-lg lg:text-base text-black mb-2 leading-relaxed">
                  Tired of aggressive investors and pushy sales tactics? We're different. We buy houses in St. Louis and provide a fair cash offer through our private online portal no phone calls, no home visits, no obligation. Review your offer on your own time and make your own decision. Whether you're facing divorce, foreclosure, nursing home transition, or inherited property challenges, we’re trusted St. Louis home buyers here to help not pressure.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-2 items-start">
                  <div className="relative w-full sm:w-auto mb-4 sm:mb-0">
                    <Link to="/get-offer">
                      <Button
                        variant="hero"
                        size="sm"
                        className="w-full sm:w-auto px-4 sm:px-6 whitespace-nowrap text-sm"
                      >
                        Get Your Private Offer Online →
                      </Button>
                    </Link>
                    <span className="block mt-2 text-xs sm:text-sm">
                      (No phone call required)
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      document
                        .getElementById("no-pressure")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="heroSecondary"
                      size="sm"
                      className="w-full sm:w-auto px-4 sm:px-6 whitespace-nowrap text-sm"
                    >
                      See Why We're Different
                    </Button>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 pt-2 border-t border-forest/10">
                <TrustItem className="w-full sm:w-auto" icon={<Shield className="w-5 h-4" />} text="Zero Pressure" />
                <TrustItem className="w-full sm:w-auto" icon={<Home className="w-5 h-4" />} text="30+ Years Experience" />
                <TrustItem className="w-full sm:w-auto" icon={<Star className="w-5 h-4" />} text="A+ BBB Rating" />
                <TrustItem className="w-full sm:w-auto" icon={<Heart className="w-5 h-4" />} text="Family-Owned" />
                <TrustItem className="w-full sm:w-auto" icon={<Smartphone className="w-5 h-4" />} text="No Sales Calls" />
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[450px] hidden lg:block">
              <div className="absolute top-[10%] right-[10%] w-72 bg-card p-6 rounded-2xl shadow-float animate-float">
                <div className="flex gap-1 mb-3 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "After dealing with pushy investors, Realty Trust's online
                  portal was a breath of fresh air. Zero pressure. They actually
                  meant it."
                </p>
                <p className="font-semibold text-secondary text-sm">
                  — Ellen S., Brentwood
                </p>
              </div>

              <div className="absolute bottom-[15%] left-[18%] w-80 bg-card p-6 rounded-2xl shadow-float animate-float-delayed">
                <div className="flex gap-1 mb-3 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "During our divorce, the last thing we needed was pressure. We
                  reviewed the offer privately and decided on our own terms."
                </p>
                <p className="font-semibold text-secondary text-sm">
                  — Michael P., Ballwin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustItem({ icon, text, className }: { icon: React.ReactNode; text: string; className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className || ""}`}>
      <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-primary-foreground">
        {icon}
      </div>
      <span className="text-xs sm:text-sm text-black">{text}</span>
    </div>
  );
}