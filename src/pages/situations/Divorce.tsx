import { SituationPageTemplate } from "@/components/situations/SituationPageTemplate";
import divorceHero from "@/components/home/Pictures/divorce.webp";
import { useEffect } from "react";
export default function DivorcePage() {
  useEffect(() => {
    const title = "Sell Your St. Louis Home During Divorce | Realty Trust Co";
    const description =
      "Get a fair cash offer to sell your marital property in St. Louis during divorce. Split proceeds easily, close fast, & sell your home stress-free with Realty Trust Co.";
    const canonicalUrl = "https://realtytrustco.com/situations/divorce";

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

    const schemaId = "ld-json-situations-divorce";
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
      title="Sell Your St. Louis Home Fast During Divorce | Fair Cash Offers, Zero Pressure"
      subtitle="When emotions are already running high, you don't need sales pressure"
      description="Divorce is stressful enough without arguing over home repairs or buyer contingencies. We help families sell home during divorce in St. Louis with a fair cash offer for divorce property. Both parties can review the offer privately, avoid realtor commissions, and close on your timeline. Whether you need to sell marital property in St. Louis or split proceeds from a St. Louis home sale, we handle everything as-is no pressure, no showings, just a clean, stress-free solution so you can move forward with your lives."
      btn="Get Your Private Cash Offer"
      bgImage={divorceHero}
      trustBadges={[
        "Both Parties Review Offer Separately",
        "No Arguments About Repairs or Staging",
        "Close in 14 Days or Take Your Time",
        "Direct Payment to Each Party Available",
      ]}
      belowHeroCta={{
        href: "/contact",
        text: "Start your divorce home sale in St. Louis today receive a fair cash offer, handle everything online, and split proceeds smoothly and securely.",
      }}
      challenges={{
        heading: "We Know Selling During Divorce Adds Stress — We're Here to Reduce It",
        subheading:
          "When couples divorce, the family home becomes a complicated asset that adds pressure, delays, and conflict:",
        reassurance:
          "Our cash offer removes most of these pain points and provides a neutral solution both parties can accept.",
        blocks: [
          {
            title: "Emotional Complications",
            items: [
              "Neither party wants to be in the house together for showings",
              "Disagreements about listing price and repair costs",
              "One spouse may be uncooperative or difficult",
              "The house holds painful memories you both want to escape",
            ],
          },
          {
            title: "Financial Pressures",
            items: [
              "Can't afford to carry the mortgage on one income",
              "Need to split equity quickly to move on",
              "Don't have cash for repairs or staging traditional buyers demand",
              "Concerned about losing money if the market shifts during a 6-month listing",
            ],
          },
          {
            title: "Timing Issues",
            items: [
              "Divorce decree says house must be sold by a certain date",
              "One spouse already moved out and doesn't want to maintain the property",
              "Need proceeds to secure separate housing",
              "Children's school year or custody schedule complicates moving timeline",
            ],
          },
          {
            title: "Practical Challenges",
            items: [
              "Who pays for repairs if a traditional buyer demands them?",
              "How do you coordinate schedules for showings when you're not speaking?",
              "What if one party is living in the house and the other isn't?",
              "Who handles the sale if you can't agree on a realtor?",
            ],
          },
        ],
      }}

      solution={{
        title:
          "A Fair, Drama-Free Way to Sell Your St. Louis Home During Divorce",
        steps: [
          {
            title: "Private Review for Both Parties",
            description:
              "Either spouse can create the free account and upload property info. We send the cash offer via email. BOTH parties receive login access to review the offer independently. No pressure to decide immediately—take time to consult attorneys. Each person reviews privately without having to discuss it together first.",
          },
          {
            title: "Transparent, Fair Pricing",
            description:
              "Detailed breakdown of how we calculated the offer. Based on comparable sales, condition, and current St. Louis market. No games, no last-minute 'adjustments'. One fair price both parties can evaluate objectively. Your divorce attorneys can review and confirm fairness.",
          },
          {
            title: "No Repairs, No Showings, No Fighting",
            description:
              "We buy as-is—no arguments about who pays for new carpet or roof repairs. No staging the house you both hate being in. No weekend showings coordinating schedules. No buyer inspection negotiations adding more conflict. Just a straightforward sale that removes a major stressor.",
          },
          {
            title: "Close on Terms You Both Accept",
            description:
              "Need to close before divorce is final? We can do that. Waiting for court approval? We'll wait. One spouse still living there? We offer leaseback options. Want proceeds split directly at closing? Title company handles it. Each party gets their share wired immediately—no arguing about dividing a check.",
          },
        ],
      }}
      specialCircumstancesSection={{
        heading: "Every Divorce Is Different—We Adapt to Your Specific Situation",
        items: [
          {
            title: "High-Conflict Divorces",
            description:
              "When communication is toxic, our self-service portal minimizes required interaction. Upload info, review offer separately, communicate through attorneys. We've sold homes where the spouses never spoke directly during the entire process.",
          },
          {
            title: "One Spouse Uncooperative",
            description:
              "If one party is dragging their feet or being difficult, a court-ordered sale with a clear buyer (us) and firm closing date can force resolution. We work with attorneys to execute court-mandated sales.",
          },
          {
            title: "Restraining Orders or Safety Concerns",
            description:
              "If there's domestic violence or restraining orders, coordinating home showings is impossible and dangerous. Our no-showing, online process keeps both parties safe and separated.",
          },
          {
            title: "One Party Living in the Home",
            description:
              "The spouse still living there can review the offer privately, continue living there until closing (or rent it back afterward if needed), and coordinate everything without the other party being involved in day-to-day details.",
          },
          {
            title: "Hidden Condition Issues",
            description:
              "Spouse A knows the furnace is dying but Spouse B doesn't. Rather than fighting about disclosure and repair costs, our as-is offer makes condition irrelevant. We buy it with whatever problems exist.",
          },
          {
            title: "Equity Disputes",
            description:
              "When you can't agree on value, our third-party offer provides an objective data point. Often both attorneys accept our offer as fair resolution.",
          },
          {
            title: "Quick Sales Required",
            description:
              "Divorce decree says house must be sold within 90 days? We can close in 14 days and solve the problem immediately.",
          },
        ],
      }}

      differentiatorsSection={{
        heading: "Why Divorcing Couples Choose Realty Trust Company",
        items: [
          {
            title: "Neutral Third Party",
            description:
              "We're not working for one spouse or the other—we provide an objective solution both parties can evaluate fairly. This neutrality reduces conflict.",
          },
          {
            title: "Minimize Required Interaction",
            description:
              "Our online process means you don't have to sit together at listing appointments, coordinate showing schedules, or argue about buyer offers. Do everything remotely and independently.",
          },
          {
            title: "Fair to Both Parties",
            description:
              "We explain our pricing clearly. Both divorce attorneys can review our calculations. There's no 'one spouse getting a better deal'—it's one price, split per your divorce agreement.",
          },
          {
            title: "Eliminate Repair Arguments",
            description:
              "“Should we fix the deck or sell as-is?” becomes irrelevant. We buy as-is, so there's nothing to fight about.",
          },
          {
            title: "Respect Your Privacy",
            description:
              "Divorces are personal. We don't gossip, we don't post your home on social media, and we handle everything discreetly. Your neighbors don't need to know your business.",
          },
          {
            title: "Coordinated Attorney Communication",
            description:
              "We're experienced working with divorce attorneys and can provide documentation, coordinate closing timing, and structure payments as your settlement requires.",
          },
        ],
      }}

      testimonials={[
        {
          name: "Michael P.",
          location: "Ballwin, MO",
          rating: 5,
          text: "My ex and I couldn't agree on anything—especially not home repairs. Realty Trust's as-is offer ended the arguments. We both reviewed it separately, our attorneys confirmed it was fair, and we closed in 3 weeks. Honestly, it was the easiest part of the entire divorce.",
        },
        {
          name: "Sarah K.",
          location: "Chesterfield, MO",
          rating: 5,
          text: "I had a restraining order and couldn't be in the house while my ex was there. Traditional showings were impossible. Realty Trust bought it without a walkthrough—I just uploaded photos. They wired my half of the proceeds directly to my account. Professional and understanding of my situation.",
        },
        {
          name: "Jason & Amanda T.",
          location:
            "Webster Groves, MO (separate reviews, names changed for privacy)",
          rating: 5,
          text: "The divorce decree required we sell within 90 days. After 60 days on the market with no offers, we were panicking. Realty Trust closed in 12 days and we met the court deadline. Their offer was actually better than what traditional buyers were offering after inspection negotiations anyway.",
        },
        {
          name: "Rachel M.",
          location: "University City, MO",
          rating: 5,
          text: "My ex refused to contribute to repairs traditional buyers wanted. We were stuck. Realty Trust's as-is purchase solved the deadlock—no repairs meant no fight about who pays. We both got our equity and moved on with our lives.",
        },
      ]}
      faqs={[
        {
          question: "Can both spouses review the offer separately?",
          answer:
            "Yes. Both parties get independent portal access to review all details privately before discussing with each other or attorneys.",
        },
        {
          question: "What if we can't agree on selling?",
          answer:
            "If one spouse refuses to sell, your attorney can seek a court order. We buy court-ordered sales and work within the legal process your attorneys establish.",
        },
        {
          question: "How are proceeds divided?",
          answer:
            "The title company distributes funds according to your divorce settlement or court order—typically 50/50, but whatever your agreement specifies.",
        },
        {
          question: "What if one of us is still living in the house?",
          answer:
            "The resident spouse can stay until closing, or rent the property back from us month-to-month if they need more time to find new housing.",
        },
        {
          question: "Can you close before the divorce is final?",
          answer:
            "Usually yes, if both parties agree and sign. Your attorney can advise on timing relative to your specific divorce proceedings.",
        },
        {
          question: "What if there's a mortgage we're both liable for?",
          answer:
            "We pay off the mortgage at closing, releasing both parties from that joint liability immediately.",
        },
        {
          question: "Do you work directly with divorce attorneys?",
          answer:
            "Absolutely. We communicate with attorneys, provide necessary documentation, and structure the sale according to your settlement terms.",
        },
        {
          question: "What if we disagree about the home's value?",
          answer:
            "Our detailed pricing analysis often resolves valuation disputes. Both attorneys can review our comparable sales data and methodology.",
        },
      ]}
      finalCtaSection={{
        title: "Ready to Sell and Move Forward?",
        subtitle:
          "Get a fair cash offer both parties can review privately. No repairs, no showings, no arguments. Close quickly and split proceeds cleanly. Let us remove this major stressor from your divorce so you can both start your new lives.",
        buttonText: "Get Your Private Divorce Sale Offer →",
        phone: "Divorce attorney wants to discuss? Call (314) 480-3800",

      }}
    />
  );
}
