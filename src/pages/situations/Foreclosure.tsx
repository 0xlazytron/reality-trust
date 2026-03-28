import { SituationPageTemplate } from "@/components/situations/SituationPageTemplate";
import foreclosureHero from "@/components/home/Pictures/Foreclosure.jpg";
import { useEffect } from "react";

export default function ForeclosurePage() {
  useEffect(() => {
    const title = "Stop Foreclosure in St. Louis | Sell House Fast for Cash";
    const description =
      "Sell your St. Louis home before foreclosure to trusted cash buyers. Close quickly, protect your credit, and get emergency foreclosure solutions anytime.";
    const canonicalUrl = "https://realtytrustco.com/situations/foreclosure";

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

    const schemaId = "ld-json-situations-foreclosure";
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
      title="Stop Foreclosure in St. Louis | Cash Home Buyers & Emergency Foreclosure Solutions "
      subtitle="Facing foreclosure is scary enough without aggressive investors making it worse"
      description="Facing foreclosure is overwhelming, but you have options. Sell your St. Louis home before foreclosure to trusted cash home buyers in St. Louis and avoid the stress of the auction. We provide emergency foreclosure sale solutions in St. Louis and work directly with your lender to close quickly often in just 7–14 days. Protect your credit, walk away with dignity, and access potential proceeds in your pocket. Get your private offer today."
      btn="Get Your Foreclosure Solution Offer"
      bgImage={foreclosureHero}
      trustBadges={[
        "Stop Foreclosure Before Auction",
        "Close in as Little as 7 Days",
        "Work Directly With Your Lender",
        "Protect Your Credit & Future",
      ]}
      belowHeroCta={{
        href: "/contact",
        text: "Get your private cash offer today, sell your St. Louis home before foreclosure, protect your credit, close in 7–14 days, and regain control of your financial future!",
      }}
      challenges={{
        heading: "Foreclosure Doesn't Have to Ruin Your Financial Future",
        subheading:
          "If you're behind on mortgage payments in St. Louis, you're facing serious financial and personal consequences:",
        reassurance:
          "You're not a bad person. You're facing a crisis. There IS a way out.",
        blocks: [
          {
            title: "Immediate Crisis",
            items: [
              "Notice of default or lis pendens filed against your property",
              "Sheriff sale / foreclosure auction date set",
              "Constant calls from the lender and attorneys",
              "Overwhelming fear and shame about losing your home",
              "Not knowing where you and your family will live",
            ],
          },
          {
            title: "Long-Term Damage",
            items: [
              "Foreclosure stays on credit report for 7 years",
              "Credit score drops 200-300 points",
              "Difficulty renting (landlords check foreclosure history)",
              "Can't buy another home for 3-7 years",
              "Possible deficiency judgment if house sells for less than owed",
              "Career implications (some employers check credit)",
            ],
          },
          {
            title: "Common Causes of Foreclosure",
            items: [
              "Job loss or income reduction",
              "Medical bills and unexpected expenses",
              "Divorce or separation",
              "Adjustable rate mortgage increased",
              "Business failure",
              "Death of income-earning spouse",
              "Property taxes fell behind",
            ],
          },
        ],
      }}
      solution={{
        title: "Stop Your St. Louis Foreclosure—Here's How It Works",
        steps: [
          {
            title: "Emergency Evaluation (Same Day)",
            description:
              "Upload your property info and foreclosure notice to our portal. We review immediately—this is urgent, we know. Receive a cash offer within 24 hours (often same day). Offer includes what you'll receive after paying off the mortgage.",
          },
          {
            title: "We Contact Your Lender",
            description:
              "We call your lender/servicer directly to discuss payoff. Request postponement of sheriff sale while we close. Most lenders cooperate because they'd rather not foreclose either. We handle all lender communication—you don't have to.",
          },
          {
            title: "Close Before Auction",
            description:
              "We can close in 7-14 days (vs. months for traditional sales). Pay off your mortgage completely at closing. Stop the foreclosure immediately. You receive any equity remaining after mortgage payoff. Your credit shows 'sold' not 'foreclosed'.",
          },
          {
            title: "Move Forward With Dignity",
            description:
              "Leaseback option if you need time to find new housing. Credit repair guidance and resources. You avoided foreclosure—major win for your financial future. No deficiency judgment chasing you for years.",
          },
        ],
      }}
      specialCircumstancesSection={{
        heading: "No Matter How Behind You Are—We Can Help",
        items: [
          {
            title: "Multiple Months Behind",
            description:
              "Whether you're 3 months or 12 months behind, we can still buy your house and pay off the full amount owed. The lender gets paid, you avoid foreclosure.",
          },
          {
            title: "Sheriff Sale Scheduled",
            description:
              "Even if the auction is scheduled in 30 days, we can often close before that date. We've stopped foreclosures with 2 weeks until auction.",
          },
          {
            title: "Owe More Than It's Worth (Underwater)",
            description:
              "If your mortgage balance exceeds home value, we work with your lender on a 'short sale'—they accept less than owed to avoid foreclosure costs. This still protects your credit better than foreclosure.",
          },
          {
            title: "Second Mortgage or HELOC",
            description:
              "Multiple liens don't scare us. We negotiate with all lienholders and clear everything at closing.",
          },
          {
            title: "Tax Liens",
            description:
              "Behind on St. Louis property taxes? We pay those off too at closing.",
          },
          {
            title: "Already Received Eviction Notice",
            description:
              "Even after judgment, you may still have time. Call us immediately—every day counts.",
          },
          {
            title: "Bankruptcy Filed",
            description:
              "If you've filed Chapter 7 or 13, we can work within bankruptcy proceedings to sell the asset and satisfy creditors.",
          },
        ],
      }}
      differentiatorsSection={{
        heading: "Why Homeowners Facing Foreclosure Choose Realty Trust",
        items: [
          {
            title: "We Move FAST",
            description:
              "Foreclosure timelines are urgent. We can provide same-day offers and close in 7–14 days. Traditional sales take 3–6 months—you don't have that time.",
          },
          {
            title: "We Work With Lenders",
            description:
              "We're experienced negotiating with mortgage servicers, loss mitigation departments, and foreclosure attorneys. We speak their language and get postponements while we close.",
          },
          {
            title: "No Judgment",
            description:
              "Financial hardship happens to good people. We don't lecture, shame, or judge. We solve problems professionally and discreetly.",
          },
          {
            title: "You Might Get Money",
            description:
              "If there's equity after paying off the mortgage and liens, you receive it. Even $5,000–$10,000 can help you restart. Some foreclosures walk away with $30K+.",
          },
          {
            title: "Privacy Protected",
            description:
              "We don't advertise your situation. No yard signs, no public listings. Your neighbors don't need to know your business.",
          },
          {
            title: "Leaseback Options",
            description:
              "If you need 30–60 days to find new housing, we can rent it back to you month-to-month after closing. This buys you time without foreclosure pressure.",
          },
        ],
      }}
      testimonials={[
        {
          name: "Marcus T.",
          location: "North St. Louis County",
          rating: 5,
          text: "I lost my job and fell 6 months behind on my mortgage. Sheriff sale was set for 21 days away. I was panicking. Realty Trust gave me an offer in one day, postponed the sale, and closed in 10 days. I walked away with $12,000 and no foreclosure on my record. They literally saved my financial future.",
        },
        {
          name: "Patricia L.",
          location: "South City, St. Louis",
          rating: 5,
          text: "Medical bills destroyed us financially. I owed $185K on a house worth $170K. I thought I was stuck. Realty Trust negotiated a short sale with my lender, closed in 3 weeks, and I avoided foreclosure. My credit took a hit, but nothing like foreclosure would have done. I'm grateful.",
        },
        {
          name: "Jennifer R.",
          location: "Florissant, MO",
          rating: 5,
          text: "Divorce left me with a mortgage I couldn't afford alone. Three months behind, foreclosure notice came. I called Realty Trust on Monday, had an offer Tuesday, closed Friday of the next week. They worked with my lender and everything. The weight lifted off my shoulders was incredible.",
        },
        {
          name: "Robert S.",
          location: "Chesterfield, MO",
          rating: 5,
          text: "I was ashamed and hiding from the problem. Realty Trust didn't judge me—they just helped. Paid off my mortgage, property taxes, and HOA lien. I even got $8K at closing. Two years later, my credit is recovering and I have hope again.",
        },
      ]}
      faqs={[
        {
          question:
            "How much time do I have after receiving a foreclosure notice?",
          answer:
            "Missouri is a non-judicial foreclosure state. After default notice, you typically have 30–60 days before auction, but timelines vary. Contact us immediately—every day counts.",
        },
        {
          question:
            "Can you really stop a foreclosure that's already in progress?",
          answer:
            "Yes, if we close before the sheriff sale date. We've stopped foreclosures with as little as 2 weeks until auction by working with lenders to postpone while we close.",
        },
        {
          question: "What if I owe more than the house is worth?",
          answer:
            "We can pursue a short sale—where the lender accepts less than owed. This requires lender approval but still protects your credit better than foreclosure.",
        },
        {
          question:
            "Will I receive any money, or does it all go to the lender?",
          answer:
            "If there's equity (home value exceeds mortgage + liens), you receive the difference at closing. Even underwater properties sometimes net small amounts via short sale negotiations.",
        },
        {
          question: "What happens to my credit?",
          answer:
            "Selling shows 'paid' on your credit report. Foreclosure shows 'foreclosure.' The credit score difference is often 100+ points. Selling protects your financial future significantly.",
        },
        {
          question: "Can I stay in the house after selling?",
          answer:
            "Yes, we offer leaseback arrangements. Sell now, stop foreclosure, then rent month-to-month while you find new housing—typically 30–90 days.",
        },
        {
          question: "What if I also owe property taxes or HOA fees?",
          answer:
            "We pay all liens at closing—property taxes, HOA fees, mechanic's liens, and judgments. Everything is cleared.",
        },
        {
          question: "Is there any way to keep my house?",
          answer:
            "Our role is to buy the property, but we can refer you to foreclosure defense attorneys and housing counselors if you want to explore loan modification or other options to keep your home.",
        },
      ]}
      comparisonSection={{
        title: "The Benefits of Selling Before Foreclosure",
        leftTitle: "If You Let It Foreclose",
        rightTitle: "If You Sell to Us Before Auction",

        leftPoints: [
          "Foreclosure on credit report for 7 years",
          "Credit score drops 200–300 points",
          "Possible deficiency judgment",
          "Evicted by sheriff",
          "Can't buy home again for 3–7 years",
          "Difficulty renting",
          "Emotional trauma",
          "Lose all equity",
          "May still owe money",
        ],

        rightPoints: [
          "Credit shows 'sold', not foreclosed",
          "Credit damage minimized",
          "No deficiency judgment",
          "You choose your move-out date",
          "Can buy again in 1–2 years",
          "Rental applications easier",
          "You controlled the outcome",
          "Receive remaining equity",
          "Debt fully satisfied",
        ],

        footer: "The difference is life-changing.",
      }}
      urgentSection={{
        title: "Don’t Wait — Foreclosure Timelines Move Fast",
        timeline:
          "Default Notice → 30 days → Notice of Sale → 20 days → Sheriff’s Auction → Eviction",
        warning:
          "Once the auction happens, it’s too late. Your equity is gone and foreclosure is permanently on your credit.",

        leftTitle: "You Have Options RIGHT NOW",
        leftPoints: [
          "Get a cash offer today",
          "Close before auction",
          "Walk away with dignity",
          "Protect your credit",
          "Possibly receive cash at closing",
        ],

        rightTitle: "Emergency Contact Options",
        contacts: [
          {
            label: "Foreclosure Hotline",
            value: "(314) 480-3800",
            sub: "Answer 7 days/week",
            type: "phone",
          },
          {
            label: "Emergency Email",
            value: "foreclosure@realtytrustco.com",
            type: "email",
          },
          {
            label: "24/7 Portal",
            value: "Start your offer request anytime",
            type: "portal",
          },
        ],
        footer: "The longer you wait, the fewer options you have.",
      }}
      finalCtaSection={{
        title: "Stop Your Foreclosure Today—You Still Have Time",
        subtitle:
          "Get a fast cash offer and sell before the auction. Protect your credit, avoid deficiency judgment, and move forward with your life. We close in 7-14 days and handle all lender negotiations. This crisis doesn't have to define your future.",
        buttonText: "Get Emergency Foreclosure Offer Now →",
        phone:
          "Call Now: (314) 480-3800 (Foreclosure specialists available seven days/week)",

      }}
    />
  );
}
