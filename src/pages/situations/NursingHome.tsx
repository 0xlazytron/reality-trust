import { SituationPageTemplate } from "@/components/situations/SituationPageTemplate";
import nursingHero from "@/components/home/Pictures/NursingSituation.jpg";
import { useEffect } from "react";

export default function NursingHomePage() {
  useEffect(() => {
    const title = "Sell Your St. Louis House Fast As-Is | Nursing Home Moves";
    const description =
      "Moving a loved one to a nursing home? Sell your St. Louis house fast for cash, as-is, with no stress. Private offers, quick closings, and family-focused service.";
    const canonicalUrl = "https://realtytrustco.com/situations/nursing-home";

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

    const schemaId = "ld-json-situations-nursing-home";
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
      title="Sell Your St. Louis Home Fast for Nursing Home Care  No Pressure, Fair Cash Offers"
      subtitle="Moving a loved one to assisted living or memory care is emotional enough"
      description="Moving a loved one to assisted living or memory care is stressful. We help families sell your St. Louis home fast with a nursing home property sale that’s simple, dignified, and stress-free. Get a quick house sale MO with a private cash offer online, handle belongings with care, and even plan your home sale for Medicaid planning all while focusing on what matters most: your family. Whether it’s a sell my inherited house in St. Louis situation or an urgent move, we make the process smooth and private."
      btn="Get a Private Offer for Mom or Dad's Home"
      bgImage={nursingHero}
      trustBadges={[
        "30+ Years Helping St. Louis Seniors Transition",
        "$ Donated to Senior Charities",
        "No Pressure, No Home Visits Required",
        "We Handle It All—You Focus on Family",
      ]}
      belowHeroCta={{
        href: "/get-offer",
        text: "Request your private offer now for a quick house sale in St. Louis and enjoy a dignified, hassle-free process while we handle the home and belongings.",
      }}
      challenges={{
        heading: "We Know This Isn't Just About Selling a House",
        subheading:
          "When a parent or spouse needs to move to nursing care, families face overwhelming challenges:",
        reassurance:
          "We help St. Louis families through this exact situation. You're not alone, and you don't have to do this alone.",
        blocks: [
          {
            title: "The Emotional Burden",
            items: [
              "Sorting through decades of memories and belongings",
              "Making difficult decisions during an already stressful time",
              "Feeling guilty about 'getting rid of' a lifetime of possessions",
              "Coordinating family members who may not agree on next steps",
            ],
          },
          {
            title: "The Financial Pressure",
            items: [
              "Nursing home costs in St. Louis range from $4,500-$8,500/month",
              "Medicare doesn't cover long-term care",
              "Medicaid has strict asset limits",
              "Every month the house sits empty costs you money",
            ],
          },
          {
            title: "The Time Crunch",
            items: [
              "Need to move quickly when a bed becomes available",
              "Can't wait 6 months for a traditional home sale",
              "Don't have time to make repairs or stage the home",
              "May be managing this from another state",
            ],
          },
        ],
      }}
      solution={{
        title:
          "A Compassionate Solution for St. Louis Nursing Home Transitions",
        steps: [
          {
            title: "Private Online Offer (No Home Visit Needed)",
            description:
              "Create your free account from the hospital, care facility, or your own home. Upload photos with your phone—we don't need a professional walkthrough. Get a fair cash offer via email within 24 hours and review it privately with siblings, family members, or advisors.",
          },
          {
            title:
              "We Handle the Belongings — This Is Where We’re Truly Different",
            description: `
                      Our team carefully sorts through furniture, clothing, photos, and personal items  
                      • Family heirlooms and important documents are set aside for you  
                      • Usable furniture and household items are sold  
                      • 100% of proceeds go to a St. Louis senior charity of your choice (SLAAA, Alzheimer’s Association, local nursing home, etc.)  
                      • Remaining items are donated to St. Vincent de Paul, Salvation Army, or responsibly disposed
                      `,
          },
          {
            title: "Close on Your Timeline",
            description:
              "Need to close in 7 days before the next month's care bill? We can do that. Need 60 days to sort through paperwork? Take the time you need. Want your parent to stay until the facility has a bed? We offer leaseback options.",
          },
          {
            title: "Direct Payment Options",
            description:
              "We can pay proceeds directly to the care facility if that helps. We work with elder law attorneys to structure sales for Medicaid planning and provide documentation for financial and tax purposes.",
          },
        ],
      }}
      specialCircumstancesSection={{
        heading: "Every Nursing Home Transition Is Unique—We Adapt to Your Needs",
        items: [
          {
            title: "Medicaid Planning Considerations",
            description:
              "If your loved one needs to qualify for Medicaid, timing and proceeds matter. We work with your elder law attorney to structure the sale appropriately. We can't give legal advice, but we can execute the sale according to your attorney's guidance.",
          },
          {
            title: "Hoarder Situations",
            description:
              "We've seen it all, and we don't judge. If the home has excessive belongings or clutter, we handle it discreetly and respectfully. Your parent's dignity is preserved—we don't gossip with neighbors or post before/after photos online.",
          },
          {
            title: "Remote Family Coordination",
            description:
              "Children often live out of state. Our online portal means you can manage everything from California, Florida, or anywhere else. We send video updates, coordinate key exchanges, and communicate via email so you're not dealing with phone tag while managing your parent's care.",
          },
          {
            title: "Dementia & Memory Care Moves",
            description:
              "When a loved one has dementia, they may not understand the sale. We work sensitively with family decision-makers and can complete the entire process without confusing or upsetting your parent.",
          },
          {
            title: "Emergency Situations",
            description:
              "Hospital discharge planner says your mom can't go home? Facility has a bed available now? We can close in as little as 7 days and advance funds if needed.",
          },
        ],
      }}
      differentiatorsSection={{
        heading: "Why St. Louis Families Choose Realty Trust for Senior Transitions",
        items: [
          {
            title: "We're Not Vultures",
            description:
              "Some investors target seniors with predatory letters and phone calls. We don't. Families find us when they're ready, and we treat everyone the way we'd want our own parents treated.",
          },
          {
            title: "We Honor Their Legacy",
            description:
              "Your parent's home holds a lifetime of memories. We handle it with reverence—carefully sorting belongings, preserving what matters, and ensuring their possessions benefit others through our charity program.",
          },
          {
            title: "No Pressure During Crisis",
            description:
              "You're dealing with enough. We won't add to your stress with high-pressure tactics, daily follow-up calls, or manufactured urgency. Take the time you need to make the right decision for your family.",
          },
          {
            title: "Transparent Pricing",
            description:
              "We explain exactly how we calculated our offer. No games, no last-minute 'adjustments.' What we offer is what you get.",
          },
          {
            title: "Local Experience",
            description:
              "We know St. Louis senior living communities, memory care facilities, and the local resources available. We've worked with Bethesda, Delmar Gardens, Aberdeen Heights, The Gatesworth, and dozens of other facilities.",
          },
        ],
      }}
      charityProgram={{
        title: "Turn Belongings Into Community Impact",
        description:
          "Your parent spent decades accumulating furniture, dishes, tools, and household items. Rather than throwing it all away or spending weeks holding estate sales, we make the process simple and meaningful:",
        howItWorks: [
          "Sell usable items through our network of buyers, estate sale companies, and online marketplaces",
          "Donate 100% of proceeds to a St. Louis senior charity you choose",
          "Provide tax documentation for the donation",
          "Send you a final report showing what was sold, what was donated, and the total charitable impact",
        ],
        popularDonations: [
          "St. Louis Area Agency on Aging (SLAAA)",
          "Alzheimer's Association St. Louis Chapter",
          "The specific nursing home or care facility",
          "Catholic Charities Senior Services",
          "Gateway Regional Medical Center Foundation",
          "Or any charity meaningful to your family",
        ],
      }}
      testimonials={[
        {
          name: "Ellen S.",
          location: "Brentwood, MO",
          rating: 5,
          text: `"My mother fell and could no longer live alone. We needed to get her into memory care quickly, but her Brentwood home was full of 40 years of belongings. Realty Trust bought the house in 10 days, carefully sorted everything, and donated the furniture sale proceeds to the Alzheimer's Association in my mom's name. They treated her home—and our family—with such dignity during an incredibly difficult time."`,
        },
        {
          name: "Richard T.",
          location: "Phoenix, AZ (Property in Kirkwood, MO)",
          rating: 5,
          text: `"I live in Arizona and couldn't fly back to St. Louis every weekend to deal with my dad's house after his stroke. Realty Trust's online portal was perfect—I uploaded photos, got an offer, and coordinated everything via email. They even sent me videos of the cleanout process so I could identify items to keep. Closed in 14 days and dad's proceeds paid for his first 3 months at Brookdale."`,
        },
        {
          name: "Patricia M.",
          location: "Clayton, MO",
          rating: 5,
          text: `"My siblings and I were arguing about whether to list mom's house or sell as-is. The condition wasn't great, and we needed money for her care NOW, not in 6 months. Realty Trust's offer was fair, explained clearly, and we all agreed it was the right move. No repairs, no staging, no fights about who has to clean out the basement. Highly recommend."`,
        },
        {
          name: "Robert K.",
          location: "Webster Groves, MO",
          rating: 5,
          text: `"What impressed me most was how they handled my wife's lifetime of belongings. They set aside her photo albums, important papers, and jewelry for me, sold the furniture to benefit the nursing home foundation, and donated the rest. I couldn't have done it myself emotionally. They gave me the gift of time to focus on visiting her instead of emptying the house."`,
        },
      ]}
      faqs={[
        {
          question: "How quickly can you close?",
          answer:
            "As fast as 7 days if you need emergency funds for care. We can also wait 30–90 days if you need time to coordinate the move or qualify for Medicaid.",
        },
        {
          question: "What if the house is full of belongings?",
          answer:
            "We handle everything. You don't have to lift a finger. We sort, sell, donate, and dispose of items responsibly. You just tell us what (if anything) you want to keep.",
        },
        {
          question: "Can proceeds go directly to the nursing home?",
          answer:
            "Yes. We can structure payment however works best for your situation—to you, to the facility, split between family members, etc.",
        },
        {
          question: "Will this affect Medicaid eligibility?",
          answer:
            "Every situation is different. We recommend consulting an elder law attorney. We've worked with dozens and can execute the sale according to your attorney's Medicaid planning strategy.",
        },
        {
          question: "Do you buy homes that need major repairs?",
          answer:
            "Yes. Foundation issues, roof damage, outdated systems—we buy as-is. Your parent's care needs are urgent; home repairs can wait.",
        },
        {
          question: "What if my parent has dementia and can't sign paperwork?",
          answer:
            "If you have Power of Attorney or guardianship, you can handle the sale on their behalf. We work within the legal framework established by your attorney.",
        },
        {
          question:
            "What about property taxes and utilities during the transition?",
          answer:
            "We can coordinate timing to minimize your carrying costs. If needed, we can close quickly so you stop paying for an empty house while paying for care.",
        },
        {
          question: "Is your charity donation program legitimate?",
          answer:
            "Absolutely. We provide receipts from the charity, documentation of items sold, and total proceeds donated. It's not a marketing gimmick—it's our mission.",
        },
      ]}
      serviceAreas={{
        title:
          "Serving St. Louis Area Nursing Home & Senior Living Transitions",
        areas: [
          {
            category: "St. Louis City & County",
            locations:
              "Clayton • Ladue • University City • Webster Groves • Kirkwood • Brentwood • Richmond Heights • Maplewood • Creve Coeur • Maryland Heights • Ballwin • Chesterfield • Wildwood",
          },
          {
            category: "Nearby Communities",
            locations:
              "St. Charles • O'Fallon • St. Peters • Florissant • Hazelwood • Bridgeton • Fenton",
          },
          {
            category: "Transitions to Specific Facilities",
            locations:
              "The Gatesworth (Central West End) • Aberdeen Heights (Kirkwood) • Delmar Gardens (multiple locations) • Bethesda (multiple locations) • St. Andrew's (Olivette) • The Parkway (Creve Coeur) • All St. Louis area nursing homes, assisted living, and memory care facilities",
          },
        ],
        footer:
          "Even if the property is in poor condition, full of belongings, or located anywhere in the St. Louis area, we'll make you a fair offer and handle the transition with care.",
      }}

      finalCtaSection={{
        title: "Let Us Handle the House So You Can Focus on Your Loved One",
        subtitle:
          "Get a fair, private cash offer in 24 hours. No pressure, no home visits, no stress. We'll handle the belongings and donate proceeds to charity in your parent's name. You concentrate on their care—we'll take care of their home.",
        buttonText: "Get Your Private Offer Now →",
        phone: "Prefer to talk first? Call (314) 480-3800 - We understand some situations need a conversation",
      }}

    />
  );
}
