import { SituationPageTemplate } from "@/components/situations/SituationPageTemplate";
import relocationHero from "@/components/home/Pictures/jobRelocation.webp";
import { useEffect } from "react";

export default function RelocationPage() {
  useEffect(() => {
    const title = "Sell Your St. Louis Home Fast | Job Relocation";
    const description =
      "Sell your St. Louis home fast during relocation. Get a fair cash offer, close on your schedule, avoid repairs , and move stress-free with Realty Trust Company.";
    const canonicalUrl = "https://realtytrustco.com/situations/relocation";

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

    const schemaId = "ld-json-situations-relocation";
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
      title="Sell Your St. Louis Home Fast | Stress-Free Job Relocation"
      subtitle="Already stressed about your move? We won't add to it."
      description="Submit your property details online from anywhere in the country and get your cash offer for your St. Louis home within 24 hours. Close on your timeline whether you need 7 days or 90 days and sell your home fast due to job relocation. No phone calls, no home visits, just a simple process. Our online system lets you sell your St. Louis home remotely, making moving out quickly stress-free."
      btn="Get Your Private Offer"
      bgImage={relocationHero}
      trustBadges={[
        "Close Before Your Start Date",
        "Coordinate From Any Location",
        "No Home Visits Required",
        "Flexible Closing Dates (7-90+ Days)",
      ]}
      challenges={{
        heading: "Relocation Doesn't Give You Time to Wait",
        subheading:
          "When a new job or life move forces you to sell quickly, traditional timelines and logistics create serious stress:",
        blocks: [
          {
            title: "Timing Pressure",
            items: [
              "Job start date is non-negotiable",
              "Can't manage a traditional 60-90 day sale",
              "May already be in new city",
              "Two mortgages or two rents isn't sustainable",
            ],
          },
          {
            title: "Logistics Nightmare",
            items: [
              "Can't be present for showings",
              "Coordinating from another time zone",
              "Property may need work you can't oversee",
              "Moving costs eating into budget",
            ],
          },
          {
            title: "Career Concerns",
            items: [
              "Don't want real estate stress affecting new job",
              "Need mental space for transition",
              "Employer relocation package may be limited",
              "Family adjusting to new location",
            ],
          },
        ],
      }}

      solution={{
        title: "Sell From Anywhere, Close Before You Start",
        steps: [
          {
            title: "Submit Everything Online",
            description: "Create your account from your hotel room, your new apartment, or the airport. Upload photos from your phone or have a friend snap them. Our portal works 24/7 from anywhere.",
          },
          {
            title: "Get Your Offer Via Email",
            description: "Within 24 hours, receive a detailed cash offer. Review it on your own time—during lunch break, after the kids are asleep, whenever works for your new schedule.",
          },
          {
            title: "Close on Your Schedule",
            description: "Need to close before your start date? We can close in 7 days. Need to wait until you're settled? Take 60-90 days. We'll work around your relocation timeline.",
          },
          {
            title: "Remote Closing Options",
            description: "In many cases, we can handle everything remotely. Mobile notary services, digital signatures, and direct deposit of proceeds make it possible to sell without returning to St. Louis.",
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
          question: "How quickly can I sell my St. Louis home if I’m relocating?",
          answer:
            "You can receive a fair cash offer within 24 hours and close in as little as 7 days or up to 90 days—whatever fits your relocation timeline.",
        },
        {
          question: "Can I sell my home remotely if I’m already in another city?",
          answer:
            "Yes! Our online portal lets you submit property details, upload photos, and receive your cash offer from anywhere in the country.",
        },
        {
          question: "Do I need to make repairs or stage my home?",
          answer:
            "No. We buy St. Louis homes as-is, so you can sell quickly without spending time or money on repairs or staging.",
        },
        {
          question: "What happens if my home has liens, fines, or back taxes?",
          answer:
            "We handle complex situations, including tax liens, code violations, or creditor judgments—so you can walk away clean at closing.",
        },
        {
          question: "How do I receive my proceeds if I’m relocating quickly?",
          answer:
            "We offer remote closing options with digital signatures and direct deposit of proceeds, making it easy to sell your home without returning to St. Louis.",
        },
      ]}

      finalCtaSection={{
        title: "Ready to Sell and Move Forward?",
        subtitle:
          "Get a fair cash offer you can review privately, with no repairs, no showings, and no hidden fees. Close quickly on your schedule and move forward to your new home with complete peace of mind.",
        buttonText: "Get Your Relocation Offer →",
        phone: "Call (314) 480-3800",

      }} />
  );
}
