import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FAQSection() {
  const faqs = [
    {
      q: "Do I really not have to talk to anyone on the phone?",
      a: "Correct. The entire offer process can be completed online. We only call if you request a call or after you've accepted an offer and we need to coordinate closing details.",
    },
    {
      q: "What if I upload my info and then change my mind?",
      a: "No problem at all. Your account stays private, and you can simply not respond or click \"not interested.\" We won't follow up repeatedly. Your information is yours.",
    },
    {
      q: "Will someone come to my house to inspect it?",
      a: "Only if you want us to. We can make accurate offers based on photos and videos. If you prefer an in-person visit, you schedule it through the portal at a time that works for you.",
    },
    {
      q: "How long do I have to accept or decline your offer?",
      a: "As long as you need. Most offers are good for 30 days, but if you need more time, just message us. We're not going to manufacture urgency that doesn't exist.",
    },
    {
      q: "What if other companies offered me more?",
      a: "Great! You should absolutely take the best offer. We're confident in our pricing, but we respect that you need to do what's best for you. No hard feelings.",
    },
    {
      q: "Do you put me on a mailing list if I decline?",
      a: "No. If you decline, you're removed from our system. We won't send monthly \"are you ready to sell yet?\" emails. One and done.",
    },
    {
      q: "Can I sell my St. Louis house fast without making repairs?",
      a: "Yes! We are trusted st Louis home buyers and buy homes as-is, so you don’t need to fix or renovate anything. Get a fair cash offer quickly and easily.",
    },
    {
      q: "How quickly can I get a cash offer in St. Louis?",
      a: "Once you upload your property details, our team of cash home buyers in St. Louis will review it. Most homeowners receive their offer within 24 hours, giving you the flexibility to decide on your timeline.",
    },
    {
      q: "Do I have to meet anyone in person to sell my house fast in St. Louis?",
      a: "No. You can handle everything online through our secure portal. No home visits, no pushy sales calls, and no pressure perfect for anyone looking to sell home fast in St. Louis.",
    },
    {
      q: "Is there an obligation if I accept or decline the offer?",
      a: "Absolutely not. You can sell your house for cash in St. Louis if you accept, or decline with one click. There are no hidden fees, and you are never added to a mailing list.",
    },
    {
      q: "Can I sell my St. Louis house fast even if it’s an inherited property or facing foreclosure?",
      a: "Yes! We help homeowners in all situations including inherited homes, divorce, or foreclosure. As professional home buyers in St. Louis, MO, we make the process simple, fast, and stress-free.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 lg:py-20">
      <div className="container max-w-4xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl text-secondary md:text-4xl lg:text-5xl text-center mb-12">
          Questions About Our No-Pressure Process
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border text-[#1c3541] border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left p-5 hover:bg-muted transition"
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className="p-5 pt-0 text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <Link to="/faq">
            <Button variant="hero" size="xl" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8">
              See All FAQs →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
