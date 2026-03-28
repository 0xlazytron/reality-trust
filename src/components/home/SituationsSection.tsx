import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  HeartCrack,
  AlertTriangle,
  Plane,
  ShieldPlus,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Images imports
import NursingHomeImg from "./pictures/NursingSituation.jpg";
import InheritedImg from "./pictures/Inherited-Property.webp";
import DivorceImg from "./pictures/divorce.webp";
import ForeclosureImg from "./pictures/Foreclosure.jpg";
import RelocationImg from "./pictures/jobRelocation.webp";
import AsIsImg from "./pictures/as-ItProperty.jpg";

const situations = [
  {
    icon: ShieldPlus,
    title: "Nursing Home Transitions",
    description:
      "Already stressed about a loved one's care? The last thing you need is an aggressive investor. Get your offer privately online, review it with family, decide when you're ready.",
    href: "/situations/nursing-home",
    image: NursingHomeImg,
  },
  {
    icon: Home,
    title: "Inherited Property",
    description:
      'Inherited a house and feeling overwhelmed by "cash buyer" calls? Skip the pressure. Upload photos at your pace, get an honest offer, and decide without anyone breathing down your neck.',
    href: "/situations/inherited",
    image: InheritedImg,
  },
  {
    icon: HeartCrack,
    title: "Divorce or Separation",
    description:
      "Emotions are already high. We won't add to your stress. Both parties can review the offer privately, discuss it together, and decide on your own terms—no pushy salesperson in the middle.",
    href: "/situations/divorce",
    image: DivorceImg,
  },
  {
    icon: AlertTriangle,
    title: "Foreclosure Prevention",
    description:
      "Facing foreclosure is scary enough without aggressive investors creating urgency. Get a transparent offer through our portal, understand your options, and make an informed decision without pressure.",
    href: "/situations/foreclosure",
    image: ForeclosureImg,
  },
  {
    icon: Plane,
    title: "Job Relocation",
    description:
      "Already stressed about your move? We won't add to it. Submit your property details online, get your offer within 24 hours, and decide if it works for your situation—all from wherever you are.",
    href: "/situations/relocation",
    image: RelocationImg,
  },
  {
    icon: DollarSign,
    title: "Any As-Is Property",
    description:
      "Don't want strangers walking through your home making lowball offers? Our online portal lets you share photos and details privately, then review a fair offer without any face-to-face pressure.",
    href: "/situations/as-is",
    image: AsIsImg,
  },
];

export function SituationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout>();

  // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total slides
  const totalSlides = Math.max(0, situations.length - visibleCards + 1);

  // Auto slide function
  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);

    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
  };

  // Initialize auto slide
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [totalSlides]);

  // Manual navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    restartAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    restartAutoSlide();
  };

  // Restart auto slide after manual navigation
  const restartAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    startAutoSlide();
  };

  return (
    <section id="situations" className="px-4 lg:px-8 py-12 lg:py-20 bg-cream">
      <div className="container max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-8 sm:mb-10">
          Life Happens. We're Here to Help St. Louis Homeowners—Without the
          Pressure
        </h2>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {situations.map((situation, idx) => {
                const Icon = situation.icon;
                return (
                  <div
                    key={idx}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
  {/* Image Section */}
  <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
  <img
    src={situation.image}
    alt={situation.title}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    loading={idx >= visibleCards ? "lazy" : undefined}
  />
</div>


  {/* Content Section */}
  <div className="flex flex-col p-4 sm:p-5 md:p-6 flex-1">
    {/* Heading with Icon */}
    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2 sm:mb-3 line-clamp-2 flex items-center gap-2">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1c354e]" />
      {situation.title}
    </h3>

    {/* Description */}
    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-5 line-clamp-3">
      {situation.description}
    </p>

    {/* Button always at the bottom */}
    <div className="mt-auto w-full">
      <Link to={situation.href} className="inline-block w-full">
        <Button
          variant="hero"
          size="sm"
          className="w-full py-2 sm:py-3 text-xs sm:text-sm md:text-base"
        >
          Learn More →
        </Button>
      </Link>
    </div>
  </div>
</div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white text-[#1c354e] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1c354e] hover:text-white transition-all duration-300 z-10 border border-gray-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white text-[#1c354e] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1c354e] hover:text-white transition-all duration-300 z-10 border border-gray-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center w-full px-2 sm:px-0">
          <Link to="/get-offer" className="w-full max-w-sm">
            <Button
              variant="hero"
              size="lg"
              className="w-full px-4 py-4 sm:py-4 text-sm sm:text-base whitespace-normal leading-tight sm:whitespace-nowrap"
            >
              Start Your Private Offer Request →
            </Button>
          </Link>
          <span className="text-gray-500 text-xs sm:text-sm md:text-base text-center mt-2">
            (Takes 10 minutes, zero obligation)
          </span>
        </div>
      </div>
    </section>
  );
}
