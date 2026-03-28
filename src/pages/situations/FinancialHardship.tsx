import { SituationPageTemplate } from "@/components/situations/SituationPageTemplate";
import financialHardshipHero from "@/components/home/Pictures/image.jpg";
import { useEffect } from "react";

export default function FinancialHardshipPage() {
  useEffect(() => {
    const title = "Sell Your St. Louis Home During Financial Hardship Fast";
    const description =
      "Get a fair cash offer for your St. Louis home during financial hardship. Sell quickly, avoid stress and fees, protect your credit, and close on your schedule.";
    const canonicalUrl = "https://realtytrustco.com/situations/financial-hardship";

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

    const schemaId = "ld-json-situations-financial-hardship";
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
      title=" Sell Your St. Louis Home During Financial Hardship"
      subtitle="When money is tight, you need solutions—not sales pressure"
      description="Facing financial stress can be overwhelming, but selling your St. Louis home doesn’t have to be. We provide a fair cash offer for homeowners dealing with financial hardship home sale Missouri, helping you complete a quick home sale for financial trouble without repairs, commissions, or embarrassment. Our private online portal makes it easy to sell property under financial stress, explore your options, and close on your timeline all with zero pressure and complete transparency."
      btn="Get Your Private Offer"
      bgImage={financialHardshipHero}
      trustBadges={[
        "No Judgment, Just Solutions",
        "Transparent Pricing Explained",
        "Fast Closing for Urgent Needs",
        "We Explain All Your Options",
      ]}
      belowHeroCta={{
        href: "/contact",
        text: "Get a fair cash offer today and sell your St. Louis home quickly during financial hardship avoid stress, protect your credit, and move forward with confidence.",
      }}
      challenges={{
        heading: "Financial Hardship Can Feel Overwhelming",
        subheading:
          "When money pressure starts closing in, homeowners face emotional, practical, and financial challenges all at once:",
        blocks: [
          {
            title: "Financial Stress",
            items: [
              "Bills piling up faster than income",
              "Medical expenses overwhelming budget",
              "Job loss or reduced hours",
              "Unexpected major repairs needed",
            ],
          },
          {
            title: "Limited Options",
            items: [
              "Can't afford traditional realtor commissions",
              "No money for repairs or staging",
              "Credit issues limiting refinancing",
              "Time pressure from creditors",
            ],
          },
          {
            title: "Emotional Weight",
            items: [
              "Shame about financial situation",
              "Fear of judgment from buyers",
              "Stress affecting health and relationships",
              "Uncertainty about next steps",
            ],
          },
        ],
      }}

      solution={{
        title: "A Dignified Path Forward",
        steps: [
          {
            title: "Private, Judgment-Free Process",
            description: "Upload your property details through our private portal. No embarrassing phone calls, no explaining your situation to strangers. Your circumstances are your business.",
          },
          {
            title: "Understand Your True Position",
            description: "We'll provide a detailed offer showing exactly what you'd walk away with after mortgage payoff and any liens. Clear numbers help you make informed decisions.",
          },
          {
            title: "Explore All Alternatives",
            description: "Sometimes selling isn't the best answer. We'll honestly discuss refinancing, loan modification, forbearance, and other options. Your best outcome matters more than our purchase.",
          },
          {
            title: "Fast Cash When You Need It",
            description: "If selling is right for you, we can close in as little as 7 days. Get cash in your hands when you need it most, without waiting months for a traditional sale.",
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

      finalCtaSection={{
        title: "Ready to Sell and Move Forward?",
        subtitle:
          "When money is tight and stress is high, you need clear solutions—not sales pressure. Explore your options privately and make the best choice for your situation.",
        buttonText: "Get Your Private Financial Hardship Offer →",
        phone: "Call (314) 480-3800",

      }} />
  );
}
