import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Ellen S.",
    location: "Brentwood",
    situation: "Inherited Property",
    quote: "After dealing with pushy investors, Realty Trust's online portal was a breath of fresh air. Zero pressure. They actually meant it. I reviewed the offer with my siblings over two weeks and made the decision together.",
    rating: 5,
  },
  {
    name: "Michael P.",
    location: "Ballwin",
    situation: "Divorce",
    quote: "During our divorce, the last thing we needed was pressure. We reviewed the offer privately and decided on our own terms. Jeff made a difficult situation so much easier.",
    rating: 5,
  },
  {
    name: "Robert & Linda M.",
    location: "Florissant",
    situation: "Nursing Home Transition",
    quote: "Moving mom to assisted living was hard enough. Jeff handled everything with such compassion. He even let mom keep her favorite rocking chair until the last day.",
    rating: 5,
  },
  {
    name: "Sandra T.",
    location: "South City",
    situation: "Foreclosure Prevention",
    quote: "I was 3 weeks from the sheriff sale. Other buyers ghosted me when they realized the timeline. Jeff moved mountains to close in 12 days and saved my credit.",
    rating: 5,
  },
  {
    name: "James W.",
    location: "St. Charles",
    situation: "Job Relocation",
    quote: "Got a job offer in Texas with a 3-week start date. Jeff closed in 9 days so I could relocate stress-free. The online process was perfect for my crazy schedule.",
    rating: 5,
  },
  {
    name: "Patricia K.",
    location: "Webster Groves",
    situation: "As-Is Property",
    quote: "My house needed $40K+ in repairs I couldn't afford. Jeff made a fair offer, handled the title issues, and closed in 3 weeks. No repairs, no cleaning, no stress.",
    rating: 5,
  },
  {
    name: "David & Marie C.",
    location: "Kirkwood",
    situation: "Inherited Property",
    quote: "My three siblings live out of state. The online portal let everyone review the offer independently. Jeff coordinated everything. Closed in 30 days with zero family drama.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    location: "Overland",
    situation: "Financial Hardship",
    quote: "Lost my job and couldn't keep up with the mortgage. Jeff gave me a fair price and let me stay rent-free for 30 days after closing. That compassion made all the difference.",
    rating: 5,
  },
];

export default function Testimonials() {
  useEffect(() => {
    const title = "Testimonials: St. Louis Homeowners Who Sold Their House Fast";
    const description =
      "Read real stories from homeowners who sold their St. Louis house fast with Realty Trust Company. Honest experiences with fair cash offers and stress‑free service.";
    const canonicalUrl = "https://realtytrustco.com/testimonials";

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
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Realty Trust Company",
        url: "https://realtytrustco.com/",
      },
    };

    const schemaId = "ld-json-testimonials";
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
      <section className="bg-gradient-hero py-8  sm:py-16">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block w-52 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-gold">
            Real Stories, Real Results
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl text-secondary mb-6">
            What Our Clients Say About Working With Us
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Don't just take our word for it. Hear from St. Louis families who've experienced 
            our no-pressure approach firsthand.
          </p>
          <div className="flex  items-center justify-center gap-2 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="ml-2 text-muted-foreground">4.9/5 Average Rating</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-10 sm:py-20 bg-cream">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-soft relative flex flex-col justify-between">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                <div className="flex gap-1 mb-4 text-gold">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-forest/10 pt-4">
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.situation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-20 bg-gradient-navy text-primary-foreground text-center">
        <div className="container max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl sm:text-4xl mb-6">Ready to Experience Our No-Pressure Approach?</h2>
          <p className="text-base sm:text-lg mb-8 opacity-90">
            Join hundreds of St. Louis families who've sold their homes with dignity.
          </p>
          <Link to="/get-offer">
            <Button variant="gold" size="xl" className="px-5 sm:px-10">Get Your Free Cash Offer →</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
