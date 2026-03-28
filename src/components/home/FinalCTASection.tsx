import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, Mail, Clock, Ban } from "lucide-react";
import { Phone } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-navy text-primary-foreground text-center">
      <div className="container max-w-4xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
          Ready to Get Your Offer—Without the Sales Pitch?
        </h2>

        <p className="text-base sm:text-lg lg:text-xl mb-10 opacity-90 leading-relaxed">
          See what your St. Louis house is worth to us. Upload your details in
          10 minutes, get a fair offer in 24 hours, and decide on your own
          terms. No sales calls, no home visits, no pressure. Just an honest
          option when you need one.
        </p>

        {/* Trust Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 text-sm sm:text-base opacity-90">
          <div className="flex items-center justify-center gap-2">
            <Lock className="w-5 h-5 text-gold" />
            Your Information Stays Private
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-gold" />
            Offer Delivered Via Email
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-gold" />
            You Control The Timeline
          </div>
          <div className="flex items-center justify-center gap-2">
            <Ban className="w-5 h-5 text-gold" />
            Zero Pressure Guarantee
          </div>
        </div>

        <Link to="/get-offer">
          <Button
            variant="hero"
            size="xl"
            className="mb-6 text-sm sm:text-base lg:text-lg px-6 sm:px-10"
          >
            Get My Private Offer Now →
          </Button>
        </Link>

        <p className="text-sm sm:text-base mb-8 opacity-90 flex flex-col sm:flex-row justify-center items-center sm:gap-2 gap-1 text-center">
          Want to talk first? That’s fine too. Call{" "}
          <a
            href="tel:+13144803800"
            className="flex items-center text-gold hover:text-gold/60 gap-1 mt-1 sm:mt-0"
          >
            <Phone className="w-4 h-4" />
            (314) 480-3800
          </a>
        </p>

        {/* Guarantee */}
        <div className="bg-primary-foreground/10 p-6 sm:p-8 rounded-xl border-l-4 border-gold max-w-2xl mx-auto text-left">
          <p className="opacity-90 text-sm sm:text-base leading-relaxed italic">
            “We promise: No aggressive follow-up. No surprise visits. No
            manufactured urgency. Just respect for your situation and an honest
            offer you can review privately. If you decline, we respect that
            completely.”
          </p>
        </div>
      </div>
    </section>
  );
}
