import { SituationPageTemplate } from "@/components/situations/SituationPageTemplate";
import asIsHero from "@/components/home/Pictures/as-ItProperty.jpg";
import { useEffect } from "react";

export default function AsIsPage() {
  useEffect(() => {
    const title = "Sell Your St. Louis Home As-Is | Fair Cash Offers";
    const description =
      "Sell your St. Louis home as-is in any condition. No repairs, no cleaning, no staging. Get a fair cash offer, close fast, and move forward stress-free today.";
    const canonicalUrl = "https://realtytrustco.com/situations/as-is";

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

    const schemaId = "ld-json-situations-as-is";
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
    <SituationPageTemplate
      title="Sell Your St. Louis Home As-Is | Fair Cash Offer, Any Condition"
      subtitle="Whatever state your property is in, we buy it exactly as-is"
      description="No repairs, no cleaning, no staging sell your house as-is in St. Louis with ease. Leave the furniture, clutter, or even trash behind. Our trusted St. Louis home buyers and cash home buyers in Missouri provide a fair offer, so you can sell your property in any condition and move forward stress-free. Upload photos of your home today and get a fast, private cash offer without lifting a finger."
      btn="Get Your Private Offer"
      bgImage={asIsHero}
      trustBadges={[
        "Truly As-Is—We Mean It",
        "No Inspections That Reduce Offer",
        "Close In 7-90 Days",
        "We Handle All Cleanout",
      ]} challenges={{
        heading: "Selling a Home in Poor Condition Can Be Stressful",
        subheading:
          "When a property has major issues, homeowners face unique obstacles that make a traditional sale difficult:",
        blocks: [
          {
            title: "Property Condition",
            items: [
              "Major repairs needed (roof, foundation, HVAC)",
              "Water damage or mold issues",
              "Outdated systems and finishes",
              "Structural problems",
            ],
          },
          {
            title: "Situation Factors",
            items: [
              "No money or time for repairs",
              "Tenant damage or abandoned property",
              "Hoarder situations or excessive belongings",
              "Fire or storm damage",
            ],
          },
          {
            title: "Traditional Sale Barriers",
            items: [
              "Can't pass buyer inspections",
              "Banks won't finance the purchase",
              "Realtors won't list without repairs",
              "Buyer contingencies fall through",
            ],
          },
        ],
      }}

      solution={{
        title: "A True As-Is Purchase",
        steps: [
          {
            title: "Show Us the Real Condition",
            description: "Upload photos and videos showing exactly how the property looks right now. Don't clean, don't hide problems, don't fix anything. The more honest the photos, the more accurate our offer.",
          },
          {
            title: "No Post-Offer Reductions",
            description: "Unlike many 'cash buyers' who reduce their offer after seeing the property, we factor condition into our initial offer. The price we quote is the price we pay.",
          },
          {
            title: "Leave Everything Behind",
            description: "Furniture? Leave it. Clutter? Leave it. Personal belongings? Take what you want, leave the rest. We handle complete property cleanouts after closing.",
          },
          {
            title: "Close Fast, Walk Away Clean",
            description: "Close in as little as 7 days. Hand over the keys and you're done. No lingering responsibilities, no callbacks about problems found later.",
          },
        ],
      }}
      specialCircumstancesSection={{
        heading: "Special Circumstances We Handle",
        items: [
          {
            title: "Behind on Mortgage Payments",
            description:
              "Even if you're months behind, we can often negotiate with your lender to bring the loan current and close cleanly.",
          },
          {
            title: "Property Tax Liens",
            description:
              "Back taxes? We handle tax lien payoffs at closing. You walk away clean without dealing with collectors.",
          },
          {
            title: "Code Violations or Fines",
            description:
              "City citations and fines can be negotiated and paid from proceeds. We've navigated St. Louis City and County processes many times.",
          },
          {
            title: "Judgment or Liens on Title",
            description:
              "Creditor judgments complicating your title? Our title company is experienced in clearing complex situations.",
          },
        ],
      }}
      faqs={[
        {
          question: "Can I sell my house in St. Louis as-is, even if it needs major repairs?",
          answer:
            "Yes! We buy homes in any condition—damaged roofs, foundation issues, mold, outdated systems, or cluttered interiors. No repairs are required.",
        },
        {
          question: "How quickly can I get a cash offer for my St. Louis property?",
          answer:
            "Simply upload photos and details of your property online. Most homeowners receive a fair cash offer within 24 hours.",
        },
        {
          question: "Do I have to clean or remove personal belongings before selling?",
          answer:
            "No! Leave furniture, clutter, and unwanted items behind. We handle complete cleanouts after closing.",
        },
        {
          question: "Can I sell my St. Louis home if I have liens, back taxes, or code violations?",
          answer:
            "Absolutely. We work with lenders, title companies, and local authorities to manage tax liens, judgments, and fines so you can walk away stress-free.",
        },
        {
          question: "How fast can I close when selling my home as-is in St. Louis?",
          answer:
            "We offer flexible closings—some homeowners close in as little as 7 days, or choose a timeline that works for their schedule",
        },
      ]}

      finalCtaSection={{
        title: "Ready to Sell and Move Forward?",
        subtitle:
          "No matter the condition of your property—damaged, outdated, or cluttered—we buy it exactly as-is. No repairs, no cleaning, no stress, and a fair cash offer in your hands.",
        buttonText: "Get Your Private As-Is Offer →",
        phone: "Call (314) 480-3800",

      }} />
  );
}
