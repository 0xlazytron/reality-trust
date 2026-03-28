import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { NoPressureSection } from "@/components/home/NoPressureSection";
import { SituationsSection } from "@/components/home/SituationsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { CharitySection } from "@/components/home/CharitySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { TrustFeaturesSection } from "@/components/home/TrustFeaturesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <section className="bg-card">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8 py-6">
          <Link
            to="/contact"
            className="block w-full rounded-2xl border border-border bg-cream px-6 py-5 text-center text-secondary font-semibold hover:bg-cream/80 transition-colors"
          >
            Sell your St. Louis house fast for cash, as-is, on your own terms, with zero repairs, no home visits, and complete control over your timeline.
          </Link>
        </div>
      </section>
      <NoPressureSection />
      <SituationsSection />
      <HowItWorksSection />
      <section className="bg-card">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8 py-6">
          <Link
            to="/contact"
            className="block w-full rounded-2xl border border-border bg-cream px-6 py-5 text-center text-secondary font-semibold hover:bg-cream/80 transition-colors"
          >
            Ready to sell your St. Louis house fast? Get a transparent cash offer, avoid repairs, skip the sales calls, and decide on your timeline with ease.
          </Link>
        </div>
      </section>
      <ComparisonSection />
      <TrustFeaturesSection/>
      <CharitySection />
      <TestimonialsSection />
      <FAQSection/>
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
