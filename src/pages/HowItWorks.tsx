import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import screenshot from "../../public/Screenshot_2.png";
import { Link } from "react-router-dom";
import howItWorksImage from "@/assets/images/compressed-HowItWorks.webp";


import {
  Check,
  Home,
  Upload,
  FileSearch,
  Eye,
  Key,
  Clock,
  Shield,
  Heart,
  Phone,
  Mail,
  Download,
  ChevronRight,
  MapPin,
  ChevronDown,
} from "lucide-react";

const processSteps = [
  { icon: Home, label: "Create Account" },
  { icon: Upload, label: "Upload Info" },
  { icon: FileSearch, label: "Receive Offer" },
  { icon: Eye, label: "Review & Decide" },
  { icon: Key, label: "Close on Your Terms" },
];
export const detailedSteps = [
  {
    number: "1",
    title: "Step 1: Create Your Free Account",
    time: "3 Minutes",
    intro: "Getting started is simple and completely private.",
    blocks: [
      {
        heading: "What You'll Need",
        bullets: [
          "Property address",
          "Your name and email",
          "Phone number (optional - only for closing coordination if you accept)",
        ],
      },
      {
        heading: "What Happens",
        bullets: [
          "Instant access to your secure portal",
          "No credit check",
          "No obligation whatsoever",
          "Your information stays 100% private",
          "We don't share, sell, or spam your email",
        ],
      },
      {
        heading: "When To Do This",
        bullets: [
          "Midnight after the kids are asleep? Perfect.",
          "Sunday afternoon? Great.",
          "During your lunch break? Absolutely.",
          "The portal is available 24/7 because life doesn't happen on a 9-5 schedule.",
        ],
      },
    ],
    trust:
      "Unlike companies that require phone calls to 'qualify' you, we believe you deserve privacy and control from the very first step.",
  },

  {
    number: "2",
    title: "Step 2: Tell Us About Your Property",
    time: "10 Minutes",
    intro:
      "Once logged in, you'll upload details about your St. Louis home. Don't worry—you don't need to be a real estate expert. Just answer the questions as best you can.",
    blocks: [
      {
        heading: "Basic Information",
        bullets: [
          "Property address (we auto-fill public records data)",
          "Bedrooms, bathrooms, square footage",
          "Year built and lot size (pre-filled from records)",
          "Current condition (we provide simple multiple choice)",
        ],
      },
      {
        heading: "Property Condition Questions",
        bullets: [
          "We ask about:",
          "Roof age and condition (approximate is fine)",
          "HVAC, plumbing, electrical systems",
          "Foundation issues or structural concerns",
          "Any major repairs needed",
          "Overall condition: Excellent / Good / Fair / Poor / Very Poor",
        ],
      },
      {
        heading: "Photos & Videos (The Secret to Fast Offers)",
        bullets: [
          "Upload photos from your smartphone:",
          "Front and back exterior",
          "Each room (even if messy - we don't judge)",
          "Any damage or issues",
          "Attic, basement, garage if applicable",
          "Optional: Short video walkthrough",
        ],
      },
    ],
  },

  {
    number: "3",
    title: "Step 3: We Prepare Your Cash Offer",
    time: "Within 24 Hours",
    intro:
      "Once you submit your property information, our team gets to work immediately. Here's what happens behind the scenes:",
    blocks: [
      {
        heading: "1. Comparable Sales Research",
        bullets: [
          "We pull recent sales of similar homes in your St. Louis neighborhood",
          "Analyze sold prices (not listing prices—actual sales)",
          "Adjust for size, condition, and features",
          "Consider current market trends in your specific area",
        ],
      },
      {
        heading: "2. Property Condition Assessment",
        bullets: [
          "Review all photos and videos carefully",
          "Estimate repair costs based on condition you described",
          "Factor in any major systems needing replacement",
          "Account for any code violations or title issues",
        ],
      },
      {
        heading: "3. Market Timing Consideration",
        bullets: [
          "Current St. Louis real estate market conditions",
          "Seasonal factors and neighborhood-specific demand",
          "Time it would take us to resell after repairs",
        ],
      },
      {
        heading: "4. Fair Offer Calculation",
        bullets: [
          "Market value if fully updated (ARV - After Repair Value)",
          "Minus: Estimated repair costs",
          "Minus: Our holding costs, selling costs, and profit margin",
          "Result: Your final transparent cash offer",
        ],
      },
    ],
    trust:
      "Unlike companies that give you a number with no explanation, we show you our math. You'll see exactly how we arrived at the offer price.",
  },

  {
    number: "4",
    title: "Step 4: Review Your Offer (On Your Timeline)",
    time: "Your Timeline",
    intro:
      "When your offer is ready, we email it to you. That's it. No phone call ambush, no pressure tactics—just a detailed offer you can review privately.",
    blocks: [
      {
        heading: "What Your Offer Includes:",
        bullets: [],
      },
      {
        heading: "1. Cash Purchase Price",
        bullets: ["The total amount we're offering for your property."],
      },
      {
        heading: "2. Detailed Pricing Breakdown",
        bullets: [
          "Comparable sales we used",
          "Repair cost estimates with explanation",
          "How we calculated the final number",
          "Any adjustments made and why",
        ],
      },
      {
        heading: "3. Closing Cost Coverage",
        bullets: [
          "We pay typical closing costs including:",
          "Title insurance",
          "Title company fees",
          "Transfer taxes",
          "Recording fees",
          "You owe $0 in closing costs",
        ],
      },
      {
        heading: "4. Net Proceeds Estimate",
        bullets: [
          "Offer price",
          "Minus: Your existing mortgage payoff",
          "Minus: Any liens or back taxes (if applicable)",
          "= Actual cash you'll receive",
          "No surprises. No hidden fees. What we show is what you get.",
        ],
      },
      {
        heading: "5. Flexible Closing Options",
        bullets: [
          "Close in 7 days for urgent situations",
          "Standard 14-21 days",
          "Extended 30-90+ days if you need time",
          "Leaseback option if you want to stay temporarily",
        ],
      },
      {
        heading: "Your Next Steps (You Decide):",
        bullets: [],
      },
      {
        heading: "Option 1: Accept the Offer",
        bullets: [
          "Click 'Accept Offer' in your portal and select your preferred closing date. We'll immediately begin coordinating with the title company.",
        ],
      },
      {
        heading: "Option 2: Ask Questions",
        bullets: [
          "Message us through the portal or schedule a phone call. We'll clarify anything and can adjust terms if needed (closing date, leaseback, etc.).",
        ],
      },
      {
        heading: "Option 3: Decline",
        bullets: [
          "Click 'No Thank You' with one button. No explanation needed. We won't follow up repeatedly or try to change your mind.",
        ],
      },
      {
        heading: "Option 4: Think About It",
        bullets: [
          "Take days or weeks to decide. Share with family, consult your attorney, get other opinions. Most offers are good for 30 days—we won't pressure you.",
        ],
      },
    ],
    trust: "Most offers are valid for 30 days — you take the time you need.",
  },

  {
    number: "5",
    title: "Step 5: Due Diligence & Title Work",
    time: "You Relax",
    intro:
      "Once you accept our offer, we coordinate everything while you prepare for your move.",
    blocks: [
      {
        heading: "Title Work",
        bullets: [
          "We order the title search immediately",
          "Title company researches your property's legal ownership",
          "Identifies any liens, judgments, or encumbrances",
          "We clear any title issues before closing",
        ],
      },
      {
        heading: "Common Title Issues We Resolve",
        bullets: [
          "Property tax liens",
          "HOA liens or assessments",
          "Mechanic's liens from unpaid contractors",
          "Judgment liens",
          "Old mortgages not properly released",
          "Estate/probate complications",
        ],
      },
      {
        heading: "What We Need From You",
        bullets: [
          "Sign purchase agreement (we send electronically)",
          "Provide mortgage account information (for payoff)",
          "Answer any title company questions",
          "Choose your closing date",
        ],
      },
      {
        heading: "What We Handle",
        bullets: [
          "All communication with title company",
          "Ordering title insurance",
          "Coordinating with your lender for payoff",
          "Scheduling closing",
          "Preparing all documents",
          "Ensuring everything is ready",
        ],
      },
    ],
    trust:
      "You don't pay to fix any title issues — we handle payoffs at closing.",
  },

  {
    number: "6",
    title: "Step 6: Closing Day",
    time: "30–60 Minutes",
    intro:
      "Closing day is simple and straightforward—nothing like the traditional home sale with mountains of confusing paperwork.",
    blocks: [
      {
        heading: "Where Closing Happens",
        bullets: [
          "Title company office (we can come to you if needed)",
          "Mobile notary option for remote/out-of-state sellers",
          "Virtual closing available in some situations",
        ],
      },
      {
        heading: "What to Bring",
        bullets: [
          "Photo ID (driver's license or passport)",
          "Keys to the property",
          "Garage door openers, gate remotes",
          "Any appliance manuals, warranties (if you have them)",
        ],
      },
      {
        heading: "What Happens",
        bullets: [
          "Title agent reviews all documents",
          "You sign deed transferring ownership",
          "We wire funds to title company (already done before you arrive)",
          "Mortgage is paid off",
          "Any liens cleared",
          "Your net proceeds are calculated",
          "You receive payment",
        ],
      },
      {
        heading: "How You Get Paid",
        bullets: [
          "Wire transfer to your bank (fastest - same day)",
          "Cashier's check (if you prefer)",
          "Multiple wires if splitting proceeds (divorce, multiple heirs)",
        ],
      },
    ],
    trust: "After closing, you have zero responsibility for the property.",
  },
];
const optionalServices = [
  {
    title: "Leaseback Program",
    subtitle: "Sell Now, Move Later",
    description:
      "Need to sell immediately for financial reasons but not ready to move?",
    features: [
      "Sell the house and stop mortgage payments",
      "Rent it back from us month-to-month",
      "Typically $XXX-$XXX per month (below market rate)",
      "30-90 day agreements (sometimes longer)",
      "Gives you breathing room to find new housing",
    ],
    whoHelps: [
      "Foreclosure situations where you need to sell NOW but need time to relocate",
      "Divorce where one spouse isn't ready to move",
      "Waiting for new home to be ready",
      "Kids finishing school year",
      "Elderly parents who need time to transition",
    ],
  },
  {
    title: "Estate Cleanout Service",
    subtitle: "We Handle Your Belongings",
    description: "Don't want to sort through decades of accumulated items?",
    features: [
      "Our team removes all belongings",
      "We separate: keep items, sellable items, donation items, trash",
      "Family heirlooms and photos set aside for you to review",
      "Furniture and usable items sold",
    ],
    charityProgram: {
      title: "Our Charity Program:",
      description:
        "100% of proceeds from selling your belongings donated to a St. Louis charity you choose:",
      charities: [
        "St. Louis Area Agency on Aging",
        "St. Patrick Center",
        "Stray Rescue",
        "Your church or favorite local nonprofit",
        "Any charity meaningful to you",
      ],
    },
    provides: {
      title: "We provide:",
      items: [
        "Receipts for tax deduction purposes",
        "Final report of items sold and donated",
        "Photos of items before disposal (if you want them)",
      ],
    },
    valuableFor: {
      title: "This service is particularly valuable for:",
      items: [
        "Nursing home transitions",
        "Inherited properties",
        "Divorce situations",
        "Downsizing seniors",
        "Hoarder cleanouts",
      ],
    },
  },
  {
    title: "Repair Coordination (If You Want To)",
    subtitle: "Want to Fix Some Things First?",
    description:
      "While we buy as-is, sometimes sellers want to make minor repairs to increase the offer:",
    features: [
      "We can recommend trusted, fair-priced contractors",
      "Provide repair cost estimates",
      "Show you projected offer increase if repairs are made",
      "Help you decide if repairs are worth it financially",
    ],
    note: "We never require repairs, but we'll help if you want to make them.",
  },
];
const pricingExamples = [
  {
    title: "Good Condition Home",
    arv: "$300,000",
    repairs: "$15,000",
    costs: "$48,000",
    offer: "$237,000",
    comparison:
      "Traditional sale (after repairs, commission, months of carrying costs): ~$270,000. You save time, effort, and net similar after expenses.",
  },
  {
    title: "Needs Major Work",
    arv: "$180,000",
    repairs: "$60,000",
    costs: "$38,000",
    offer: "$82,000",
    comparison:
      "Traditional sale: Most buyers would walk away after inspection or demand YOU make repairs you can't afford. Your alternative: No sale for months, or spending $60K you don't have.",
  },
  {
    title: "Foreclosure Situation",
    arv: "$220,000",
    repairs: "$30,000",
    mortgage: "$195,000",
    costs: "$39,000",
    offer: "$151,000",
    comparison:
      "Your net: $0 (pays off mortgage). But you avoided foreclosure, protected credit, and have a fresh start.",
  },
];

const comparisonData = [
  {
    factor: "Timeline",
    us: "7-90 days (your choice)",
    traditional: "3-6 months average",
    others: "7-30 days",
  },
  {
    factor: "Repairs",
    us: "None - we buy as-is",
    traditional: "Buyers demand repairs",
    others: "None",
  },
  {
    factor: "Showings",
    us: "No showings",
    traditional: "Constant showings",
    others: "Maybe 1 walkthrough",
  },
  {
    factor: "Commissions",
    us: "$0 - we pay closing costs",
    traditional: "6% (~$18K on $300K)",
    others: "$0",
  },
  {
    factor: "Buyer Financing",
    us: "Cash - no loan issues",
    traditional: "30-40% fall through",
    others: "Cash",
  },
  {
    factor: "Offer Certainty",
    us: "Guaranteed closing",
    traditional: "Can cancel after inspection",
    others: "Often lowball offers",
  },
  {
    factor: "Process",
    us: "Online, private, no pressure",
    traditional: "Open houses, negotiations",
    others: "High-pressure tactics",
  },
  {
    factor: "Your Net Proceeds",
    us: "75-85% of ARV",
    traditional: "90-94% after costs/time",
    others: "60-75% of ARV",
  },
  {
    factor: "Convenience",
    us: "Highest",
    traditional: "Lowest",
    others: "Medium",
  },
  {
    factor: "Condition Required",
    us: "Any - even hoarder homes",
    traditional: "Good showing condition",
    others: "Any",
  },
  {
    factor: "Best For",
    us: "Quick sale, as-is, certainty",
    traditional: "Maximize price, have time",
    others: "Need cash fast",
  },
];

const faqs = [
  {
    q: "Is there really no obligation when I request an offer?",
    a: "Absolutely none. Create account, get offer, decline if you want. We don't call repeatedly or pressure you. One-click decline ends it.",
  },
  {
    q: "How accurate are your offers if you haven't seen the house in person?",
    a: "Very accurate if you provide good photos. We've bought hundreds of homes this way. If we're ever significantly off, we'll explain why and adjust if needed—but that's rare with quality photos.",
  },
  {
    q: "Can you really close in 7 days?",
    a: "Yes, if you need to. We're cash buyers with funds ready. The limiting factor is usually title work, but we can expedite in emergencies (foreclosure, urgent relocation, etc.).",
  },
  {
    q: "What if I'm not in St. Louis—can I still use your online process?",
    a: "Perfect for remote sellers! Everything is online and electronic. You can sell your inherited St. Louis property from anywhere in the country.",
  },
  {
    q: "Do you charge any fees?",
    a: "No. We pay all typical closing costs. What we offer is what you net (after mortgage payoff if applicable).",
  },
  {
    q: "What if I get a better offer elsewhere?",
    a: "Take it! We want you to make the best decision for your situation. No hard feelings—we respect your choice.",
  },
  {
    q: "Can I talk to someone before uploading my info?",
    a: "Of course. Call (314) XXX-XXXX or schedule a call through our website. We're happy to explain everything before you start.",
  },
  {
    q: "What happens if you find something wrong after I submit photos?",
    a: "If we discover major issues we didn't see in photos (happens rarely), we'll contact you to discuss. We might adjust the offer or proceed as-is—we're reasonable and fair.",
  },
  {
    q: "Do you buy properties in any condition—really?",
    a: "Yes. Fire damage, flood damage, foundation issues, hoarder situations, mold, code violations, unpermitted additions—we buy it all.",
  },
  {
    q: "Can I remove some items before closing?",
    a: "Absolutely. Take whatever you want. We handle whatever remains. Typical: you take personal items, we handle furniture and household goods.",
  },
];

const trustPoints = [
  {
    icon: Clock,
    title: "30+ Years in St. Louis Real Estate",
    desc: "Our founder, Jeff Camilleri, has been a licensed Missouri real estate broker since 1995. We're not a fly-by-night operation—we're established St. Louis neighbors.",
  },
  {
    icon: Home,
    title: "Dedicated Home Buyer",
    desc: "We've bought hundreds of St. Louis properties using this exact process. Our reviews speak for themselves.",
  },
  {
    icon: Shield,
    title: "A+ BBB Rating",
    desc: "Check our Better Business Bureau record—we stand behind our word.",
  },
  {
    icon: Check,
    title: "Licensed & Insured",
    desc: "Fully licensed Missouri real estate brokerage. Bonded and insured for your protection.",
  },
  {
    icon: MapPin,
    title: "Local Company, Not National Franchise",
    desc: "We live in St. Louis. Our kids go to St. Louis schools. We shop at St. Louis businesses. This is our community—we treat it with respect.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    desc: "No bait-and-switch. No last-minute price reductions. What we offer in writing is what we pay at closing.",
  },
  {
    icon: Heart,
    title: "Charity Commitment",
    desc: "Over $250,000 donated to St. Louis charities through our belongings program. This isn't marketing—it's our mission.",
  },
];

export default function HowItWorks() {
  const [openService, setOpenService] = useState<number | null>(null);
  useEffect(() => {
    const title = "How It Works | Sell Your House Fast St. Louis | Realty Trust Co";
    const description =
      "Learn how Realty Trust Company helps you sell your house fast in St. Louis with simple steps, fair cash offers, no repairs, and a stress-free online process.";
    const canonicalUrl = "https://realtytrustco.com/how-it-works";

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

    const schemaId = "ld-json-how-it-works";
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
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-12 pb-12 lg:pt-20 lg:pb-20 min-h-[70vh] lg:min-h-[85vh] flex items-start lg:items-center justify-center overflow-hidden">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src={howItWorksImage}
              alt="How it works background"
              className="w-full h-full object-cover"
            />
            {/* Neutral Dark Overlay (Not bluish) */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
          </div>

          {/* Content Container */}
          <div className="container relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center">
            {/* Smaller Heading & Reduced Margin */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-serif leading-tight tracking-tight">
              How to Sell Your St. Louis House Fast for Cash | Quick House Sale MO
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              Our self-service process puts you in complete control. As-is home buyers in St. Louis can upload property details on your schedule, receive a fair cash home offer in 24 hours via email, and decide when you’re ready no pushy sales calls, no awkward home visits. Close in as little as 7 days or take 90+ days. Learn how to achieve a quick house sale in St. Louis with our simple online process.
            </p>

            <div className="mb-8">
              <Link
                to="/download-guides"
                className="text-base lg:text-lg underline font-semibold text-white hover:text-gold transition-colors"
              >
                Free Guides (PDFs)
              </Link>
            </div>

            {/* Process Overview Icons */}
            <div className="flex justify-center items-center gap-3 md:gap-4 flex-wrap">
              {processSteps.map((step, i) => (
                <div key={i} className="flex items-center group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-xl group-hover:bg-gold transition-all duration-300">
                      <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-secondary" />
                    </div>
                    <span className="text-[10px] md:text-xs mt-2 text-white font-medium tracking-wide">
                      {step.label}
                    </span>
                  </div>

                  {/* Connector line - Hidden on mobile, visible on small screens up */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden xs:block w-4 sm:w-8 md:w-12 h-0.5 bg-white/30 mx-1 md:mx-2 mb-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Introduction Section */}
        <section className="py-16 sm:py-20 bg-secondary text-secondary-foreground">
          <div className="container max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-6 font-serif text-center">
              Tired of High-Pressure House Buyers? We Built a Better Way.
            </h2>
            <div className="space-y-6 text-secondary-foreground/90 text-lg">
              <p>
                Traditional "we buy houses" companies use aggressive tactics:
                surprise door knocks, daily phone calls, pressure to decide
                "today only," and lowball offers disguised as "fair market
                value."
              </p>
              <p className="font-semibold text-gold text-xl">
                We do the opposite.
              </p>
              <p>
                Our online portal gives YOU complete control of the selling
                process. You upload information when it's convenient, we send
                you a detailed offer via email, and you decide on your own
                timeline. Want to decline? One click. Want to talk? You call us
                when ready. Want to accept? Choose your closing date.
              </p>
              <p className="text-xl font-semibold text-gold">
                No pressure. No games. Just honest help when you need it.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Steps */}
        <section className="py-16 sm:py-20 bg-amber-50">
          <div className="container max-w-5xl mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {detailedSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-xl flex items-center justify-center mx-auto text-2xl font-bold text-black shadow-lg flex-shrink-0">
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3 mb-4">
                        <h3 className="font-serif text-2xl sm:text-3xl text-secondary">
                          {step.title}
                        </h3>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-sm font-semibold">
                          {step.time}
                        </span>
                      </div>

                      <p className="text-lg text-gray-700 mb-6">{step.intro}</p>

                      {/* Visual placeholder for Step 1: account creation mockup */}
                      {step.number === "1" && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-secondary mb-2">
                            Account Creation Preview
                          </h4>
                        </div>
                      )}

                      {step.blocks.map((block, k) => (
                        <div key={k} className="mb-6">
                          <h4 className="font-semibold text-secondary mb-2">
                            {block.heading}
                          </h4>
                          <ul className="space-y-2">
                            {block.bullets.map((b, j) => (
                              <li key={j} className="flex gap-3">
                                {/* Stylish Gold Check */}
                                <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm flex-shrink-0" />
                                <span className="text-gray-700">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Additional content for Step 2 */}
                      {step.number === "2" && (
                        <div className="mb-6">
                          <p className="text-gray-700 mb-4">
                            Don't know the answer to something? That's okay!
                            Just select "unknown" or "not sure." We'd rather
                            have honest uncertainty than guesses.
                          </p>
                          <p className="text-gray-700 mb-4">
                            Why photos matter: Quality photos allow us to make
                            accurate offers without a home visit. The better the
                            photos, the more confident we can be in our
                            pricing—which often means a better offer for you.
                          </p>
                          <p className="text-gray-700 mb-4">
                            Video option: Walk through with your phone
                            recording. This gives us the best sense of layout
                            and condition. 2-5 minutes is plenty.
                          </p>
                          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                            <h5 className="font-semibold text-secondary mb-2">
                              FAQ Callout Box
                            </h5>
                            <p className="text-gray-700 italic">
                              "Do I have to clean or stage the house for
                              photos?"
                            </p>
                            <p className="text-gray-700">
                              No! We're buying as-is. We want to see the real
                              condition so we can make an accurate offer. Dishes
                              in the sink? Unmade beds? Clutter? That's all
                              fine—we've seen it all.
                            </p>
                          </div>

                          <p className="text-gray-700 mt-4">
                            Time Estimate: Most people complete this in 10-15
                            minutes. Take longer if you need to—your account
                            saves progress automatically.
                          </p>
                        </div>
                      )}

                      {/* Additional content for Step 3 */}
                      {step.number === "3" && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-secondary mb-2">
                            Timeline
                          </h5>
                          <ul className="space-y-2">
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Most offers delivered within 24 hours
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Complex situations may take 48 hours
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Urgent foreclosures? We can do same-day
                              </span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Additional content for Step 4 */}
                      {step.number === "4" && (
                        <div className="mb-6">
                          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                            <h5 className="font-semibold text-secondary mb-2">
                              Testimonial Callout
                            </h5>
                            <p className="text-gray-700 italic">
                              "I was shocked when they actually meant 'no
                              pressure.' I took 2 weeks to decide, got quotes
                              from contractors about repairs, and even got
                              another offer from a competitor. Realty Trust
                              never called to ask 'what I was thinking' or
                              pressure me. When I was ready, I accepted. That
                              respect meant everything."
                            </p>
                            <p className="text-gray-700 text-sm mt-2">
                              — David M., Kirkwood
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Additional content for Step 5 */}
                      {step.number === "5" && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-secondary mb-2">
                            Timeline
                          </h5>
                          <p className="text-gray-700">
                            This process typically takes 7-21 days depending on
                            your chosen closing date.
                          </p>
                        </div>
                      )}

                      {/* Additional content for Step 6 */}
                      {step.number === "6" && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-secondary mb-2">
                            Time Required
                          </h5>
                          <p className="text-gray-700 mb-4">
                            Most closings take 30-60 minutes.
                          </p>
                          <h5 className="font-semibold text-secondary mb-2">
                            After Closing
                          </h5>
                          <ul className="space-y-2 mb-4">
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                You're done! House is sold.
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Mortgage is satisfied (you'll get confirmation)
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Title is transferred to us
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                You have cash in hand to start your next chapter
                              </span>
                            </li>
                          </ul>
                          <h5 className="font-semibold text-secondary mb-2">
                            What Happens to the Property After You Leave
                          </h5>
                          <p className="text-gray-700 font-semibold mb-2">
                            If You're Still Living There:
                          </p>
                          <ul className="space-y-2 mb-4">
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                We can arrange leaseback (you rent from us
                                month-to-month)
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Typically 30-90 days
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Simple rental agreement
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Gives you time to find new housing without
                                pressure
                              </span>
                            </li>
                          </ul>
                          <p className="text-gray-700 font-semibold mb-2">
                            If It's Already Vacant:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                We take possession immediately
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Begin repairs and improvements
                              </span>
                            </li>
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                Eventually resell or rent long-term
                              </span>
                            </li>{" "}
                            <li className="flex gap-3">
                              <Check className="w-5 h-5 mt-0.5 text-[#B38728] drop-shadow-sm" />
                              <span className="text-gray-700">
                                You have zero responsibility after closing
                              </span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {step.number === "1" && (
                        <div className="space-y-4">
                          <div className="rounded-lg border border-[#9cc8f5] bg-[#ebf3fa] p-6 flex justify-center">
                            <img
                              src={screenshot}
                              alt="Screenshot"
                              className="bg-white rounded-md max-w-full h-auto object-contain"
                            />
                          </div>

                          {/* Trust Statement */}
                          <div className="bg-emerald-50 border-l-4 border-emerald-700 p-4 rounded">
                            <p className="text-sm italic text-secondary">
                              Trust Statement: "Unlike companies that require
                              phone calls to 'qualify' you, we believe you
                              deserve privacy and control from the very first
                              step."
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Services Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container max-w-5xl mx-auto px-4 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-secondary mb-4 font-serif">
                Optional Services That Make Your Sale Even Easier
              </h2>
              <div className="w-24 h-1 bg-[#1c354e] mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-[#1c354e] max-w-3xl mx-auto">
                We offer additional services to help make your transition as
                smooth as possible
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {optionalServices.map((service, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg border border-emerald-100 overflow-hidden"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenService(openService === i ? null : i)}
                    className="w-full p-6 text-left hover:bg-[#ebf1f6] transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-serif text-secondary mb-1">
                          {service.title}
                        </h3>
                        <p className="text-[#1c354e] font-medium text-sm">
                          {service.subtitle}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-[#1c354e] transition-transform duration-200 ${openService === i ? "rotate-180" : ""
                          }`}
                      />
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {openService === i && (
                    <div className="px-6 pb-6 border-t border-emerald-100">
                      <p className="text-gray-700 mb-6 leading-relaxed pt-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      {service.features && (
                        <div className="mb-6">
                          <ul className="space-y-3">
                            {service.features.map((feature, j) => (
                              <li key={j} className="flex items-start gap-3">
                                {/* Stylish Royal Blue Check */}
                                <Check className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5 drop-shadow-sm" />
                                <span className="text-gray-700 text-sm leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Who This Helps */}
                      {service.whoHelps && (
                        <div className="mb-6 bg-[#f3f6f9] rounded-lg p-4">
                          <h4 className="font-semibold text-secondary mb-3 text-sm uppercase tracking-wide">
                            Who this helps:
                          </h4>
                          <ul className="space-y-2">
                            {service.whoHelps.map((help, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#2563eb] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">
                                  {help}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Charity Program */}
                      {service.charityProgram && (
                        <div className="mb-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                          <h4 className="font-semibold text-amber-900 mb-2 text-sm uppercase tracking-wide">
                            {service.charityProgram.title}
                          </h4>
                          <p className="text-gray-700 mb-3 text-sm">
                            {service.charityProgram.description}
                          </p>
                          <ul className="space-y-2">
                            {service.charityProgram.charities.map(
                              (charity, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <Check className="w-4 h-4 text-[#B38728] flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 text-sm">
                                    {charity}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}

                      {/* We Provide */}
                      {service.provides && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-secondary mb-3 text-sm uppercase tracking-wide">
                            {service.provides.title}
                          </h4>
                          <ul className="space-y-2">
                            {service.provides.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#B38728] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Valuable For */}
                      {service.valuableFor && (
                        <div className="mb-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h4 className="font-semibold text-blue-900 mb-3 text-sm uppercase tracking-wide">
                            {service.valuableFor.title}
                          </h4>
                          <ul className="space-y-2">
                            {service.valuableFor.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#2563eb] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Note */}
                      {service.note && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600 italic">
                            {service.note}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="container max-w-5xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl mb-4 font-serif text-center">
              How We Calculate Fair Offers (No Secrets, No Games)
            </h2>
            <p className="text-lg text-center mb-12 opacity-90 max-w-3xl mx-auto">
              We believe you deserve to understand exactly how we price
              properties. Here's our formula:
            </p>

            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl mb-12 border border-white/20">
              <h3 className="text-2xl font-serif mb-6 text-center">
                The Math Behind Your Offer
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Step 1: Determine After Repair Value (ARV)
                  </h4>
                  <p className="text-gray-200">
                    What your house would sell for in perfect, updated
                    condition. Based on recent comparable sales in your
                    neighborhood. Example: Similar updated homes selling for
                    $250,000
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Step 2: Calculate Repair Costs
                  </h4>
                  <p className="text-gray-200">
                    Estimate all needed repairs from photos/description. Use
                    actual contractor pricing (not inflated). Example: $45,000
                    in repairs needed
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Step 3: Factor In Our Costs
                  </h4>
                  <p className="text-gray-200">
                    Closing costs when we buy: ~2% ($5,000). Holding costs while
                    we repair (taxes, insurance, utilities): ~$3,000. Realtor
                    commission when we sell: 6% ($15,000). Our time, risk, and
                    profit margin: 8-12% ($20,000-$30,000)
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Step 4: Your Cash Offer
                  </h4>
                  <div className="space-y-4 max-w-2xl mx-auto mt-4">
                    <div className="flex items-center justify-between border-b border-white/20 pb-3">
                      <span className="text-lg">ARV: $250,000</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/20 pb-3">
                      <span className="text-lg">Minus repairs: -$45,000</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/20 pb-3">
                      <span className="text-lg">Minus our costs: -$43,000</span>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-2xl font-bold">
                        Your offer: $162,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-serif mb-6 text-center">
                Why Our Profit Margin is Fair
              </h3>
              <p className="text-lg text-center mb-4 opacity-90">
                We take on risk that traditional buyers don't:
              </p>
              <ul className="space-y-2 list-disc list-inside max-w-3xl mx-auto text-gray-200">
                <li>Buying sight unseen or with minimal inspection</li>
                <li>Paying cash (no financing contingencies)</li>
                <li>Handling all repairs ourselves</li>
                <li>Holding the property during renovation</li>
                <li>Dealing with any title or legal issues</li>
                <li>Accepting ALL condition problems</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-serif mb-6 text-center">
                Compared to Traditional Sale
              </h3>
              <p className="text-lg text-center mb-4 opacity-90">
                Yes, you'd get more selling traditionally IF:
              </p>
              <ul className="space-y-2 list-disc list-inside max-w-3xl mx-auto text-gray-200">
                <li>You can wait 3-6 months</li>
                <li>You can afford repairs upfront</li>
                <li>You can handle showings and negotiations</li>
                <li>Buyers don't cancel after inspection</li>
                <li>Market doesn't decline while listed</li>
              </ul>
              <p className="text-lg text-center mt-6 opacity-90">
                <strong>Our value proposition:</strong> Cash now, certainty,
                convenience, no repairs, no showings, fast closing.
              </p>
            </div>

            <h3 className="text-2xl font-serif mb-8 text-center">
              Pricing Examples (Real Scenarios)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingExamples.map((example, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20"
                >
                  <h4 className="text-xl font-serif mb-4">{example.title}</h4>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span>ARV:</span>
                      <span className="font-semibold">{example.arv}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Repairs needed:</span>
                      <span className="font-semibold">{example.repairs}</span>
                    </div>
                    {example.mortgage && (
                      <div className="flex justify-between">
                        <span>Mortgage owed:</span>
                        <span className="font-semibold">
                          {example.mortgage}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Our Costs:</span>
                      <span className="font-semibold">{example.costs}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-white/20">
                      <span className="font-bold">Your Offer:</span>
                      <span className="font-bold text-amber-400">
                        {example.offer}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs opacity-80">{example.comparison}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 sm:py-20 bg-amber-50">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl text-secondary mb-12 font-serif text-center">
              Selling to Us vs. Traditional Sale vs. Other Cash Buyers
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1c354e] to-[#1f3b55] text-white">
                    <th className="p-4 text-left font-serif text-lg">Factor</th>
                    <th className="p-4 text-left font-serif text-lg">
                      Realty Trust
                    </th>
                    <th className="p-4 text-left font-serif text-lg">
                      Traditional Sale
                    </th>
                    <th className="p-4 text-left font-serif text-lg">
                      Other Cash Buyers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-amber-50/50" : "bg-white"}
                    >
                      <td className="p-4 font-semibold text-[#1c354e]">
                        {row.factor}
                      </td>
                      <td className="p-4 text-[#1c354e] font-semibold">
                        {row.us}
                      </td>
                      <td className="p-4 text-[#1c354e]">{row.traditional}</td>
                      <td className="p-4 text-[#1c354e]">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-secondary text-secondary-foreground">
          <div className="container max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-12 font-serif text-center">
              Common Questions About Our Process
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-secondary-foreground/10 p-6 rounded-xl border border-gold/20"
                >
                  <h3 className="text-lg font-semibold text-gold mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-secondary-foreground/90">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Credibility */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-50 via-amber-50 to-orange-50">
          <div className="container max-w-5xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl text-secondary mb-12 font-serif text-center">
              Why St. Louis Homeowners Trust Our Process
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustPoints.map((point, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl text-center shadow-lg border border-amber-200"
                >
                  <point.icon className="w-12 h-12 text-emerald-900 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-700">{point.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-amber-200 text-center">
              <p className="text-lg text-gray-700 italic">
                "Over 500 St. Louis families have sold their homes using this
                process. Most say the same thing: 'I wish I'd known about this
                option sooner.' Don't wait—see what we can offer you today."
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl mb-6 font-serif">
              Ready to See What Your St. Louis House is Worth?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Now that you understand exactly how our process works, take the
              next step:
            </p>
            <div className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              <p className="font-semibold">Get Your Private Cash Offer:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Create your free account (3 minutes)</li>
                <li>Upload property photos and details (10 minutes)</li>
                <li>Receive detailed cash offer via email (24 hours)</li>
                <li>Review privately and decide on your timeline</li>
                <li>Close in 7-90 days if you accept</li>
              </ul>
              <p className="mt-4">
                No pressure. No gimmicks. Just an honest option when you need
                one.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="/get-offer" className="inline-block">
                <button className="bg-gold hover:bg-gold/90 text-slate-900 px-10 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all flex items-center justify-center gap-2">
                  Start Your Offer Request Now
                  <ChevronRight className="w-5 h-5" />
                </button>
              </a>
              <a href="/process-guide.pdf" download className="inline-block">
                <div className="bg-white text-slate-900 hover:bg-gray-200 px-10 py-4 rounded-lg text-lg font-semibold  transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>Download Process Guide (PDF)</span>
                </div>
              </a>
            </div>

            <div className="border-t border-white/20 pt-10">
              <p className="text-lg font-semibold mb-8 opacity-90 text-center tracking-wide">
                Alternative Contact Options
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
                {/* Phone */}
                <a
                  href="tel:+13144803800"
                  className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/20
                 hover:border-gold/60 hover:bg-white/5 transition-all"
                >
                  <Phone className="w-6 h-6 text-gold shrink-0" />
                  <div>
                    <p className="text-sm opacity-75">Prefer to talk first?</p>
                    <p className="font-semibold text-lg">(314) 480-3800</p>
                  </div>
                </a>

                {/* Contact Us Form */}
                <a
                  href="/contact"
                  className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/20
                 hover:border-gold/60 hover:bg-white/5 transition-all"
                >
                  <Mail className="w-6 h-6 text-gold shrink-0" />
                  <div>
                    <p className="text-sm opacity-75">Have questions?</p>
                    <p className="font-semibold text-lg">Contact us</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
