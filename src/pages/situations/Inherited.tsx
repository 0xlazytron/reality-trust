import { SituationPageTemplate } from "@/components/situations/SituationPageTemplate";
import inheritedHero from "@/components/home/Pictures/Inherited-Property.webp";
import { useEffect } from "react";

export default function InheritedPage() {
  useEffect(() => {
    const title = "Sell Inherited house in St. Louis for Cash Fast";
    const description =
      "Sell your inherited house in St. Louis as-is for a fair cash offer. Probate home buyers handle cleanouts, title issues, and close fast—stress-free and easy.";
    const canonicalUrl = "https://realtytrustco.com/situations/inherited";

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

    const schemaId = "ld-json-situations-inherited";
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
      title="Sell Inherited House in St. Louis for Cash | Probate Home Buyers"
      subtitle="Inheriting property should come with peace, not chaos"
      description="Inheriting a house in St. Louis can be stressful between probate, estate taxes, sibling disagreements, and a property that may need major repairs. Skip the hassle and sell your inherited house for cash quickly. Our trusted inherited home buyers in St. Louis purchase properties as-is, handle probate complications, and manage cleanouts and title issues. Get a fair cash offer through our private online portal and close on your schedule, without repairs, showings, or stress"
      btn="Get Your Private Offer on Inherited Property"
      bgImage={inheritedHero}
      trustBadges={[
        "We Handle Probate Properties",
        "Buy Multiple Heir Situations",
        "No Repairs or Cleaning Required",
        "Close in 14 Days or Take 90+ Days",
      ]}
      belowHeroCta={{
        href: "/contact",
        text: "Get your fair cash offer for your inherited St. Louis home today sell as-is, avoid repairs or cleanouts, close on your schedule, and turn a stressful probate process into a fast, simple solution!",
      }}
      challenges={{
        heading: "Inheriting a House Isn't Always a Gift—We Get It",
        subheading: "When you inherit property in St. Louis, you often face:",
        reassurance:
          "You didn't ask for this burden. We're here to make it manageable.",
        blocks: [
          {
            title: "Emotional Challenges",
            items: [
              "Sorting through a lifetime of a loved one's belongings",
              'Feeling guilty about "getting rid of" family memories',
              "Disagreements with siblings about what to do with the property",
              "Making decisions while still grieving",
            ],
          },
          {
            title: "Financial Burdens",
            items: [
              "Property taxes, insurance, and utilities on a house you don't live in",
              "Repair costs for deferred maintenance",
              "Potential capital gains taxes",
              "Estate debts that need to be paid",
            ],
          },
          {
            title: "Legal Complications",
            items: [
              "Navigating Missouri probate court",
              "Title issues or unclear ownership",
              "Multiple heirs who need to agree",
              "Out-of-state executors managing everything remotely",
            ],
          },
          {
            title: "Practical Problems",
            items: [
              "House is in poor condition after years of neglect",
              "Located hours away from where you live",
              "In a neighborhood you're unfamiliar with",
              "Full of belongings that need to be removed",
            ],
          },
        ],
      }}
      solution={{
        title: "A Simple Solution for St. Louis Inherited Property Sales",
        steps: [
          {
            title: "Private Online Evaluation",
            description:
              "Upload photos from your phone during your probate attorney visit. No need to travel to St. Louis repeatedly for home inspections. We work from the information you have—even if it's limited. Receive a fair cash offer via email in 24 hours. Share with all heirs to review privately—no pressure to decide immediately.",
          },
          {
            title: "We Navigate the Legal Stuff",
            description:
              "Work directly with your probate attorney or estate representative. Accept properties in probate (we understand the timeline). Handle title issues, liens, and judgments. Work with multiple heirs—everyone gets paid their share at closing. Coordinate with out-of-state executors via email and our portal.",
          },
          {
            title: "Complete Estate Cleanout",
            description:
              "Remove all belongings, furniture, and personal items. Set aside family heirlooms, photos, and documents for heirs to review. Sell usable items and donate 100% of proceeds to a St. Louis charity in your loved one's memory. Haul away everything else responsibly. You never have to visit the property if you don't want to.",
          },
          {
            title: "Close on Your Schedule",
            description:
              "Court approval timeline is 4-6 weeks? We'll wait. Need to close before the next tax bill? We can expedite. Multiple heirs coordinating schedules? We work around everyone. Title company handles disbursement to all heirs automatically.",
          },
        ],
      }}
      specialCircumstancesSection={{
        heading: "Complicated Inherited Property? We've Seen It All",
        items: [
          {
            title: "Multiple Heirs/Siblings",
            description:
              "Disagreements are common. One sibling wants to sell, another wants to rent it, a third wants to keep it in the family. Our fair cash offer often becomes the neutral solution everyone can accept. We split proceeds exactly as the will directs or as heirs agree.",
          },
          {
            title: "Out-of-State Inheritance",
            description:
              "Inherited your grandmother's St. Louis home but live in Texas? Seattle? Florida? Our online portal means you never have to fly in for inspections, meetings, or walkthroughs. We handle everything remotely.",
          },
          {
            title: "Property in Probate",
            description:
              "Missouri probate can take 6-12 months. We buy properties during probate (subject to court approval) so you're not carrying an empty house for a year. We work within the probate court timeline and provide all necessary documentation.",
          },
          {
            title: "Liens, Back Taxes, or Judgments",
            description:
              "Inherited a house with a tax lien? Reverse mortgage? Unpaid contractor bills? We can still buy it. We handle payoffs at closing and you receive the net proceeds.",
          },
          {
            title: "Hoarder Estates",
            description:
              "If your relative was a hoarder, you're facing a massive cleanout job. We handle these situations regularly, discreetly, and without judgment. You don't have to spend months filling dumpsters.",
          },
          {
            title: "Severe Disrepair",
            description:
              "Roof caved in? Foundation cracked? Hasn't been updated since 1960? We buy inherited homes in ANY condition. Don't spend your inheritance on repairs.",
          },
          {
            title: "Title Issues",
            description:
              "Missing heirs? Unclear ownership? Life estate complications? We work with title companies and attorneys to resolve issues and clear title.",
          },
        ],
      }}
      differentiatorsSection={{
        heading: "Why St. Louis Families Trust Us With Inherited Properties",
        items: [
          {
            title: "We Don't Prey on Grieving Families",
            description:
              "Some investors send mass mailers to probate filings hoping to catch vulnerable heirs. That's not us. We're here when you're ready, and we treat your family's property with respect.",
          },
          {
            title: "Honoring Their Memory Through Charity",
            description:
              "Our charity program takes on special meaning with inherited properties. Your loved one's belongings help St. Louis causes they cared about—a fitting tribute to their life and legacy.",
          },
          {
            title: "One Point of Contact",
            description:
              "Even with multiple heirs across different states, you get one dedicated contact who coordinates everything. No passing you between departments or call centers.",
          },
          {
            title: "Fair Pricing for All Heirs",
            description:
              "When siblings inherit together, everyone wants to ensure the price is fair. We provide a detailed market analysis showing comparable sales and how we calculated our offer. This transparency helps families make unified decisions.",
          },
          {
            title: "No Rush During Grief",
            description:
              "You're dealing with the loss of a loved one. We don't add pressure with \"expires Friday\" offers. Take the time you need to process, coordinate with family, and make the right decision.",
          },
        ],
      }}
      charityProgram={{
        title: "Honor Their Legacy—Turn Belongings Into Community Impact",
        description:
          "When you inherit a home full of belongings, you face painful decisions about what to keep, sell, or discard. Our charity program offers a meaningful alternative:",
        howItWorks: [
          "We carefully sort through all belongings",
          "Family heirlooms, photos, and special items are set aside for heirs",
          "Furniture, tools, and usable items are sold",
          "100% of sale proceeds go to a St. Louis charity you choose",
          "You receive documentation for estate tax purposes",
          "Remaining items are donated or responsibly disposed",
        ],
        popularDonations: [
          "The charity your loved one supported during their lifetime",
          "Their church, synagogue, or religious organization",
          "Disease-specific foundations (Alzheimer's, Cancer, Heart, etc.)",
          "Veterans organizations if they served",
          "Their alma mater or favorite St. Louis institution",
          "Animal rescue if they loved pets",
        ],
      }}
      testimonials={[
        {
          name: "David K.",
          location: "Denver, CO (Inherited Property in South St. Louis)",
          rating: 5,
          text: "I inherited my uncle's South City home and live in Denver. The house needed $50K in work and was full of 60 years of belongings. I couldn't take time off work to deal with it. Realty Trust handled everything remotely—bought it as-is, cleaned it out, and donated the furniture sale to St. Patrick Center in my uncle's memory. Closed in 3 weeks. I never had to fly to St. Louis even once.",
        },
        {
          name: "Margaret R.",
          location: "Kirkwood, MO",
          rating: 5,
          text: "My three siblings and I inherited mom's Kirkwood home. We couldn't agree on anything—one wanted to rent it, I wanted to sell, another wanted to renovate and flip it. After 6 months of arguing, Realty Trust's offer became the compromise we all accepted. Fair price, split evenly, done. Saved our family relationships.",
        },
        {
          name: "Thomas W., Executor",
          location: "Clayton, MO",
          rating: 5,
          text: "Dad's estate was in probate for 8 months. The house sat empty, costing us $800/month in taxes, insurance, and utilities. Realty Trust bought it subject to probate court approval, so we stopped hemorrhaging money while waiting for legal stuff. They worked directly with our probate attorney and made the whole thing painless.",
        },
        {
          name: "Jennifer S.",
          location: "Springfield, MO (Inherited Property in Webster Groves)",
          rating: 5,
          text: "Inherited grandma's Webster Groves home with a $35K tax lien and reverse mortgage we didn't know about. Thought we were stuck with a mess. Realty Trust paid off everything at closing and we still received $60K to split between heirs. They solved a problem we thought was unsolvable.",
        },
      ]}
      faqs={[
        {
          question: "Can you buy a house still in probate?",
          answer:
            "Yes. We buy properties during probate subject to court approval. This stops the carrying costs while you wait for probate to close.",
        },
        {
          question: "What if there are multiple heirs who need to agree?",
          answer:
            "Our online portal allows all heirs to review the offer privately. At closing, the title company distributes proceeds according to the will or heir agreement. Everyone gets their share automatically.",
        },
        {
          question: "Do we have to clean out the house first?",
          answer:
            "No. We buy inherited homes with all belongings inside and handle the entire cleanout. You can take what you want first, or let us sort everything and set aside family items for your review.",
        },
        {
          question: "What if the property has liens or back taxes?",
          answer:
            "We handle payoffs at closing. Liens, judgments, back taxes, reverse mortgages—we clear them and you receive the net proceeds.",
        },
        {
          question: "Can you buy if one heir lives out of state?",
          answer:
            "Yes. We coordinate remote closings all the time. Out-of-state heirs can sign via mobile notary or electronic signature.",
        },
        {
          question:
            "How do you handle situations where heirs disagree on selling?",
          answer:
            "We provide a fair, detailed offer that families can use as a neutral baseline for discussion. Often a fair cash offer resolves deadlocks because it removes emotion from the decision.",
        },
        {
          question: "What about capital gains taxes on inherited property?",
          answer:
            'We can\'t give tax advice, but we can connect you with local CPAs who specialize in estate sales. Generally, inherited property gets a "step-up in basis" which can minimize capital gains. Consult your tax professional.',
        },
        {
          question: "Do you buy properties that have been vacant for years?",
          answer:
            "Yes. Vacant properties often have additional issues (vandalism, frozen pipes, overgrown yards), but we buy them as-is.",
        },
      ]}
      serviceAreas={{
        title: "We Buy Inherited Properties Throughout the St. Louis Metro",
        areas: [
          {
            category: "St. Louis City Neighborhoods",
            locations:
              "South City • North City • Central West End • Tower Grove • The Hill • Soulard • Lafayette Square • Shaw • Dutchtown • Carondelet",
          },
          {
            category: "St. Louis County",
            locations:
              "Clayton • Ladue • University City • Webster Groves • Kirkwood • Brentwood • Richmond Heights • Creve Coeur • Maryland Heights • Ballwin • Chesterfield • Florissant • Hazelwood • Ferguson",
          },
          {
            category: "Surrounding Counties",
            locations:
              "St. Charles County • Jefferson County • Franklin County",
          },
        ],
        footer:
          "Even if the property is in poor condition, in a rough neighborhood, or hours from St. Louis metro, we'll make you a fair offer.",
      }}
      finalCtaSection={{
        title: "Ready to Solve Your Inherited Property Problem?",
        subtitle:
          "Get a fair cash offer in 24 hours. No obligation, no repairs, no pressure. We handle cleanouts, work with your probate attorney, and coordinate with all heirs. Turn an inherited burden into a simple sale and honor your loved one's memory through our charity program.",
        buttonText: "Get Your Free Inherited Property Offer →",
        phone:
          "Executor or administrator? Call (314) 480-3800 for probate-specific questions",

      }}
    />
  );
}
