import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        q: "How long does it take to sell a house for cash in St. Louis?",
        a: "Cash sales can close in as little as 7 days, though 14-21 days is more typical to allow for title work and coordination. You choose your closing date anywhere from 7 to 90+ days based on your needs.",
      },
      {
        q: "What's the difference between selling to a cash buyer vs. listing with a realtor?",
        a: "Cash buyers offer speed (7-21 days vs. 60-90+ days), certainty (no financing contingencies), and convenience (no repairs, showings, or agent commissions). Traditional listings may get a higher price but come with more risk and hassle.",
      },
      {
        q: "Do I need to make repairs before selling?",
        a: "Not when selling to a cash buyer like Realty Trust. We buy houses in completely as-is condition—no repairs, no cleaning, no improvements required.",
      },
      {
        q: "How do you determine your offer price?",
        a: "We analyze comparable sales in your area, estimate repair costs, calculate our holding and selling costs, and apply a fair profit margin. Every offer includes a detailed breakdown so you understand exactly how we arrived at the price.",
      },
      {
        q: "Will I pay any fees or closing costs?",
        a: "No. We cover all typical closing costs including title insurance, title company fees, transfer taxes, and recording fees.",
      },
      {
        q: "Can I sell if I'm behind on property taxes?",
        a: "Yes. We pay off property tax liens at closing as part of the purchase.",
      },
      {
        q: "What if I owe more than the house is worth?",
        a: "We can potentially negotiate a short sale with your lender where they accept less than the full amount owed. This is often better for your credit than foreclosure.",
      },
    ],
  },
  {
    title: "Foreclosure Questions",
    faqs: [
      {
        q: "How close to the auction can you still buy my house?",
        a: "We've successfully stopped foreclosures with as little as 7-10 days before the sheriff sale, though more time is always better for everyone involved.",
      },
      {
        q: "Will selling before foreclosure save my credit?",
        a: "Yes. Selling shows as 'paid' on your credit report, while foreclosure is a much more severe mark that stays for 7 years and can drop your score 200+ points.",
      },
      {
        q: "Can you really stop a foreclosure that's already scheduled?",
        a: "Yes. We work directly with lenders to postpone the sale while we close on the purchase. Time is critical, so contact us immediately if you're facing an imminent sale date.",
      },
    ],
  },
  {
    title: "Estate & Probate Questions",
    faqs: [
      {
        q: "Can you buy a house that's still in probate?",
        a: "Yes. We buy properties during probate subject to court approval. This stops carrying costs (taxes, insurance, utilities) while you wait for probate to close.",
      },
      {
        q: "What if there are multiple heirs who need to agree?",
        a: "Our online portal allows all heirs to review the offer independently. At closing, proceeds are distributed according to the will or heir agreement. We've handled sales with 10+ heirs successfully.",
      },
      {
        q: "How do you handle estate cleanouts?",
        a: "We can coordinate full-service cleanouts, allowing heirs to take what they want while we handle the rest. We work with estate sale companies and donation services to maximize value and minimize waste.",
      },
    ],
  },
  {
    title: "Divorce Questions",
    faqs: [
      {
        q: "Can you buy before the divorce is finalized?",
        a: "Usually yes, if both parties agree and sign the necessary documents. Your attorney can advise on timing and any court approvals needed.",
      },
      {
        q: "How are proceeds divided in a divorce sale?",
        a: "The title company distributes funds according to your divorce settlement or court order at closing. We're happy to work with your attorneys to ensure proper documentation.",
      },
      {
        q: "What if my spouse won't cooperate?",
        a: "In some cases, a court can order the sale of marital property. We've worked with attorneys to facilitate court-ordered sales. Contact us to discuss your specific situation.",
      },
    ],
  },
];

export default function FAQ() {
  useEffect(() => {
    const title = "FAQ – Sell Your House Fast in St. Louis | Realty Trust Co";
    const description =
      "Find answers to common questions about selling your St. Louis house fast with Realty Trust Company — cash offers, online process, as‑is sales, and no pressure.";
    const canonicalUrl = "https://realtytrustco.com/faq";

    document.title = title;

    const existing = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (existing) {
      existing.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      meta.setAttribute("content", description);
      document.head.appendChild(meta);
    }

    const existingCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute("href", canonicalUrl);
    } else {
      const canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonical);
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqCategories.flatMap((category) =>
        category.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      ),
    };

    const schemaId = "ld-json-faq";
    const existingSchema = document.getElementById(schemaId);
    if (existingSchema) existingSchema.remove();

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById(schemaId);
      if (s) s.remove();
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-8 lg:py-16">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-secondary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Get answers to common questions about selling your St. Louis home for cash. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-10 sm:py-20 bg-cream">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8 space-y-12">
          {faqCategories.map((category, i) => (
            <div key={i}>
              <h2 className="text-2xl md:text-3xl text-secondary mb-6 text-center sm:text-start">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, j) => (
                  <AccordionItem 
                    key={j} 
                    value={`${i}-${j}`} 
                    className="bg-card rounded-xl px-6 border-none shadow-soft"
                  >
                    <AccordionTrigger className="text-left text-xs sm:text-lg font-semibold text-secondary hover:text-primary py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs sm:text-lg pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-20 bg-gradient-navy text-primary-foreground text-center">
        <div className="container max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl sm:text-4xl mb-6">Still Have Questions?</h2>
          <p className="text-base sm:text-lg mb-8 opacity-90">
            We're here to help. Get personalized answers for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="xl" className="w-full sm:w-auto">Contact Us</Button>
            </Link>
            <Link to="/get-offer">
              <Button variant="heroSecondary" size="xl" className="border-primary-foreground/30 w-full sm:w-auto text-primary-foreground hover:bg-primary-foreground/10">
                Get Your Free Offer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
