import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CharitySection() {
  return (
    <section className="bg-gradient-hero pt-12 pb-16 sm:pb-20">
      <div className="container px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">

          <div className="w-20 h-20 bg-[#1c354e] rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-primary">
            <Heart className="w-10 h-10 text-primary-foreground fill-primary-foreground" />
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-[2.5rem] text-secondary mb-6">
            Sell Your House & Give Back to St. Louis
          </h2>

          <p className="text-md sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            We're in this business to help people, not just profit from their difficult situations. When you sell
            to Realty Trust, we'll sell your unwanted furniture, appliances, and belongings—and donate
            100% of the proceeds to a St. Louis charity of your choice.
          </p>

          <p className="text-md sm:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            This isn't a gimmick—it's our values in action. We donate to local St. Louis charities because we believe
            your home sale should create positive impact, not just another transaction.
          </p>

          <div className="mb-12">
            <h4 className="text-lg mb-4 text-secondary">
              Popular charities our clients support:
            </h4>
            <ul className="space-y-2 text-muted-foreground inline-block text-left">
              <li>• St. Louis Area Agency on Aging (SLAAA)</li>
              <li>• St. Patrick Center</li>
              <li>• Operation Food Search</li>
              <li>• Stray Rescue of St. Louis</li>
              <li>• Or any local charity close to your heart</li>
            </ul>
          </div>

          <Link to="/charity">
            <Button variant="hero" size="xl" className="text-sm sm:text-base">
              Learn More About Our Charity Program →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
