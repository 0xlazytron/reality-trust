

import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import {
  Trophy,
  Star,
  Medal,
  Briefcase,
  Handshake,
  TrendingUp,
  Phone,
  Mail,
  Home,
  Heart,
  Users,
  Check,
  ChevronRight,
  X,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    const title = "Why Choose Realty Trust Co | Sell Your House Fast St. Louis";
    const description =
      "Learn why sellers in St. Louis trust Realty Trust Company to sell their house fast for cash, as-is, with fair offers and a simple, stress-free process.";
    const canonicalUrl = "https://realtytrustco.com/why-choose-us";

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

    const schemaId = "ld-json-why-choose-us";
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

  const badges = [
    { icon: Trophy, text: "30+ Years St. Louis Experience" },
    { icon: Home, text: "500+ Homes Purchased" },
    { icon: Star, text: "A+ BBB Rating" },
    { icon: Heart, text: "Donations to Local Charities" },
    { icon: Users, text: "Family-Owned, Not Corporate" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-[#1c354e]/5
 py-12 lg:py-24">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-3xl md:text-5xl text-secondary mb-6 font-serif">
            Why Choose Realty Trust Company for Your St. Louis Home Sale
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We're not your typical "we buy houses" company. With 30+ years of
            St. Louis real estate experience, a proven no-pressure process, and
            a heart for giving back, we've helped over 500 families sell their
            homes with dignity, speed, and compassion. Here's what makes us
            different.
          </p>
          <Link to="/get-offer">
            <Button
              variant="hero"
              size="xl"
              className="px-8 py-4 mb-8 text-lg inline-flex items-center gap-2"
            >
              Get Your Private Cash Offer <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex flex-wrap gap-4">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-emerald-100"
              >
                <badge.icon className="w-4 h-4 text-[#1c354e]" />
                <span className="text-sm font-medium text-gray-700">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Realty Trust Difference Section */}
      <section className="py-10 sm:py-20 bg-secondary text-secondary-foreground">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-8 text-center font-serif">
            What Sets Realty Trust Company Apart from Other Cash Home Buyers
          </h2>
          <p className="text-lg text-secondary-foreground/90 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            The St. Louis area has dozens of "we buy houses" companies. Some are
            national franchises, others are out-of-state investors, and many use
            high-pressure tactics that leave homeowners feeling manipulated. We
            built Realty Trust Company to be the opposite—a local,
            relationship-based business that treats every homeowner the way we'd
            want our own families treated.
          </p>
          <div className="space-y-12">
            {/* 1. No-Pressure, Self-Service Process */}
            <div className="bg-secondary-foreground/10 p-8 rounded-2xl border border-gold/20 shadow-md">
              <h3 className="font-serif text-2xl text-gold mb-4">
                1. No-Pressure, Self-Service Process
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-gold mb-2">
                  The Problem with Other Buyers:
                </h4>
                <p className="text-secondary-foreground/90 mb-4">
                  Most cash home buying companies operate on high-pressure sales
                  models:
                </p>
                <ul className="list-disc list-inside text-secondary-foreground/80 space-y-1">
                  <li>Door-knocking without invitation</li>
                  <li>Daily phone calls and text messages</li>
                  <li>Manufactured urgency ("this offer expires today!")</li>
                  <li>Lowball offers disguised as "market value"</li>
                  <li>Pressure to commit before you're ready</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gold mb-2">Our Approach:</h4>
                <p className="text-secondary-foreground/90 mb-4">
                  We created a completely private, self-service online portal
                  that puts YOU in control:
                </p>
                <ul className="list-disc list-inside text-secondary-foreground/80 space-y-1">
                  <li>Upload property info on your schedule (24/7 access)</li>
                  <li>
                    Receive detailed offers via email—not pushy phone calls
                  </li>
                  <li>Review privately with family, attorneys, or advisors</li>
                  <li>Take days or weeks to decide—we won't rush you</li>
                  <li>Decline with one click if you're not interested</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">
                  Why This Matters:
                </h4>
                <p className="text-secondary-foreground/90">
                  When you're facing difficult life transitions—divorce,
                  foreclosure, caring for aging parents—the last thing you need
                  is aggressive sales tactics. Our process respects your
                  autonomy and gives you space to make the right decision for
                  your situation.
                </p>
              </div>
            </div>

            {/* 2. Deep St. Louis Roots & Local Expertise */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                2. Deep St. Louis Roots & Local Expertise
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  National Companies Can't Match Our Local Knowledge:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>We've lived and worked in St. Louis for 30+ years</li>
                  <li>Our kids attend St. Louis schools</li>
                  <li>
                    We know every neighborhood, from South City to Chesterfield
                  </li>
                  <li>
                    We understand St. Louis property values, market trends, and
                    community nuances
                  </li>
                  <li>
                    We have relationships with local title companies, attorneys,
                    and service providers
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">
                  Why This Matters:
                </h4>
                <p className="text-gray-700 mb-4">
                  Local expertise means accurate pricing, faster closings, and
                  understanding the unique challenges St. Louis homeowners
                  face—from city/county property tax differences to
                  neighborhood-specific market conditions.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>We're Not:</strong>
                </p>
                <ul className="list-none text-gray-700 space-y-1 mb-3">
                  <li className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" /> A call
                    center in another state
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" /> A
                    national franchise following corporate scripts
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />{" "}
                    Investors who'll flip and disappear
                  </li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong className="text-[#1c354e] flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />{" "}
                    Your St. Louis neighbors, invested in this community
                    long-term
                  </strong>
                </p>
              </div>
            </div>

            {/* 3. Transparent, Fair Pricing */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                3. Transparent, Fair Pricing
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  How Other Companies Operate:
                </h4>
                <p className="text-gray-700">
                  Many cash buyers give you a number with zero explanation,
                  hoping you'll accept without understanding how they calculated
                  it. Some intentionally lowball, counting on desperation.
                  Others present "two offers"—a low cash offer and a higher
                  "subject to inspection" offer that gets reduced after they
                  find problems.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  Our Pricing Philosophy:
                </h4>
                <p className="text-gray-700 mb-4">
                  Every offer we send includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    <strong>Comparable Sales Analysis:</strong> Recent sales of
                    similar homes in your neighborhood
                  </li>
                  <li>
                    <strong>Repair Cost Breakdown:</strong> Detailed estimates
                    of needed repairs with explanations
                  </li>
                  <li>
                    <strong>Our Cost Structure:</strong> Transparent breakdown
                    of our holding costs, selling costs, and profit margin
                  </li>
                  <li>
                    <strong>Net Proceeds Calculation:</strong> Exactly what
                    you'll receive after mortgage payoff and liens
                  </li>
                </ul>
                <p className="text-gray-700 italic mt-4">
                  Real Example: "Property on XYZ Street: ARV $250,000 - Repairs
                  $45,000 - Our Costs $43,000 = Your Offer $162,000"
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">
                  Why This Matters:
                </h4>
                <p className="text-gray-700">
                  You deserve to understand the math behind our offer.
                  Transparency builds trust and helps you make informed
                  decisions. Even if you ultimately decline, you'll know exactly
                  why we offered what we did.
                </p>
              </div>
            </div>

            {/* 4. Proven Track Record in Complex Situations */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                4. Proven Track Record in Complex Situations
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  We Specialize in Difficult Transitions:
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      Foreclosure Prevention
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>
                        Work directly with lenders to postpone sheriff sales
                      </li>
                      <li>Close in 7-14 days to beat auction deadlines</li>
                      <li>Negotiate short sales for underwater properties</li>
                      <li>
                        Help families avoid the devastating credit impact of
                        foreclosure
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      Divorce Home Sales
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Both parties review offers independently</li>
                      <li>Eliminate repair arguments</li>
                      <li>Fair, neutral third-party solution</li>
                      <li>Coordinate with divorce attorneys</li>
                      <li>Split proceeds cleanly at closing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      Nursing Home Transitions
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Handle entire estate cleanout process</li>
                      <li>Work with Medicaid planning attorneys</li>
                      <li>Donate belongings sale proceeds to charity</li>
                      <li>Provide leaseback options</li>
                      <li>Close on urgent timelines</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <h5 className="font-semibold text-secondary mb-2">
                    Inherited Property Sales
                  </h5>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Navigate Missouri probate court</li>
                    <li>Work with multiple heirs remotely</li>
                    <li>Clear title issues and liens</li>
                    <li>Handle hoarder situations discreetly</li>
                    <li>Coordinate with out-of-state executors</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">
                  Why This Matters:
                </h4>
                <p className="text-gray-700">
                  These aren't just transactions to us—they're life-changing
                  moments for families. We've developed specialized expertise in
                  the emotional, legal, and financial complexities of each
                  situation.
                </p>
              </div>
            </div>

            {/* 5. Comprehensive Estate Cleanout & Charity Program */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                5. Comprehensive Estate Cleanout & Charity Program
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  The Overwhelming Task of Clearing a Home:
                </h4>
                <p className="text-gray-700">
                  When selling due to nursing home moves, death of a loved one,
                  or divorce, homeowners face the daunting task of clearing
                  decades of accumulated belongings. This is physically
                  exhausting, emotionally draining, and time-consuming.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  Our Full-Service Solution:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Professional team removes ALL belongings</li>
                  <li>
                    Family heirlooms and photos carefully set aside for review
                  </li>
                  <li>
                    Usable furniture and household items professionally sold
                  </li>
                  <li>
                    100% of sale proceeds donated to YOUR choice of St. Louis
                    charity
                  </li>
                  <li>
                    Remaining items donated to St. Vincent de Paul, Salvation
                    Army
                  </li>
                  <li>Responsibly dispose of non-usable items</li>
                  <li>Complete documentation for tax purposes</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  Our Charity Impact:
                </h4>
                <p className="text-gray-700 mb-4">
                  Since launching this program, we continue to donate to St.
                  Louis charities including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>St. Louis Area Agency on Aging (SLAAA)</li>
                  <li>St. Patrick Center</li>
                  <li>Haven of Grace</li>
                  <li>St. Louis Children's Hospital</li>
                  <li>Stray Rescue of St. Louis</li>
                  <li>Local churches and religious organizations</li>
                  <li>Alzheimer's Association St. Louis Chapter</li>
                  <li>And dozens of other worthy causes chosen by sellers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">
                  Why This Matters:
                </h4>
                <p className="text-gray-700 mb-4">
                  This program transforms a painful task into something
                  meaningful. Your loved one's belongings—or the items from your
                  former marital home—create positive community impact rather
                  than ending up in a landfill. It's healing for sellers and
                  helpful for St. Louis.
                </p>
                <blockquote className="border-l-4 border-[#1c354e] pl-4 italic text-gray-700">
                  "After my mother passed, I couldn't bear the thought of just
                  throwing away her things. Realty Trust sold her furniture and
                  donated $4,200 to the Alzheimer's Association in her name. It
                  felt like honoring her memory." — Patricia M., Clayton
                </blockquote>
              </div>
            </div>

            {/* 6. Flexible Closing & Leaseback Options */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                6. Flexible Closing & Leaseback Options
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  One Size Does NOT Fit All:
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      Emergency Situations (7-Day Closings):
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Foreclosure auctions approaching</li>
                      <li>Urgent nursing home placement</li>
                      <li>Job relocation with immediate start date</li>
                      <li>Financial crisis requiring fast cash</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      Standard Timeline (14-21 Days):
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Typical for most situations</li>
                      <li>Allows proper title work and coordination</li>
                      <li>Comfortable pace without pressure</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-2">
                      Extended Timeline (30-90+ Days):
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Waiting for probate court approval</li>
                      <li>Need time to find new housing</li>
                      <li>Coordinating with multiple family members</li>
                      <li>Children finishing school year</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">
                  Leaseback Program: Sell now, move later:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Close on the sale immediately (stop mortgage payments, get
                    cash)
                  </li>
                  <li>Rent the property back from us month-to-month</li>
                  <li>Typically 30-90 days (sometimes longer)</li>
                  <li>Below-market rent rates</li>
                  <li>Gives you breathing room to relocate without pressure</li>
                </ul>
                <h4 className="font-semibold text-secondary mb-2 mt-4">
                  Why This Matters:
                </h4>
                <p className="text-gray-700">
                  Your timeline is YOUR timeline. We adapt to your needs, not
                  vice versa. Whether you need cash tomorrow or want to stay for
                  three more months, we accommodate.
                </p>
              </div>
            </div>

            {/* 7. Led by Experienced St. Louis Professionals */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                7. Led by Experienced St. Louis Professionals
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  Jeff Camilleri - Founder & Principal Broker:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>30+ years Missouri licensed real estate broker</li>
                  <li>
                    30+ years executive banking experience (EVP & Chief Banking
                    Officer at a local Bank)
                  </li>
                  <li>
                    Voted "Best Banker in St. Louis" by Small Business Monthly
                  </li>
                  <li>Serves on City of Sunset Hills Finance Committee</li>
                  <li>
                    Member of St. Louis Economic Development Partnership Finance
                    Committee
                  </li>
                  <li>
                    Deep expertise in real estate finance, construction lending,
                    and property valuation
                  </li>
                  <li>
                    Referral-only traditional real estate practice (for
                    buyers/sellers not needing cash)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">
                  Why His Background Matters:
                </h4>
                <p className="text-gray-700 mb-4">
                  Jeff's dual expertise in banking and real estate means:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Deep understanding of mortgages, liens, and title issues
                  </li>
                  <li>
                    Ability to navigate complex financial situations (short
                    sales, foreclosures, probate)
                  </li>
                  <li>
                    Relationships with lenders, attorneys, and title companies
                  </li>
                  <li>
                    Sophisticated pricing analysis based on real market data
                  </li>
                  <li>
                    Ethical approach shaped by three decades of fiduciary
                    responsibility
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Not Just a "House Flipper":</strong> Many cash buyers
                  are simply investors looking for cheap properties to flip.
                  Jeff is a licensed professional with a reputation built over
                  30 years. His standing in the St. Louis business community
                  matters to him—he won't risk it with shady practices.
                </p>
              </div>
            </div>

            {/* 8. We Buy in ANY Condition */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                8. We Buy in ANY Condition
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  Truly "As-Is" Means As-Is:
                </h4>
                <h5 className="font-semibold text-secondary mb-2">
                  Properties We've Successfully Purchased:
                </h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Fire damaged homes</li>
                  <li>Flood damaged properties</li>
                  <li>Foundation failures and structural issues</li>
                  <li>Homes with mold or water damage</li>
                  <li>Hoarder situations (severe clutter/accumulation)</li>
                  <li>Properties with code violations</li>
                  <li>Unpermitted additions or renovations</li>
                  <li>Asbestos or lead paint issues</li>
                  <li>Homes that haven't been updated since the 1950s</li>
                  <li>Properties with squatters or tenants</li>
                  <li>Condemned buildings</li>
                  <li>Houses in complete disrepair</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">
                  What "As-Is" Really Means:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>No cleaning required</li>
                  <li>No repairs of any kind</li>
                  <li>No staging or decorating</li>
                  <li>No landscaping or curb appeal work</li>
                  <li>We handle hazardous materials remediation</li>
                  <li>We deal with city code enforcement</li>
                  <li>We manage contractor bids and work</li>
                </ul>
                <h4 className="font-semibold text-secondary mb-2 mt-4">
                  Why This Matters:
                </h4>
                <p className="text-gray-700">
                  If you had the time, money, and energy to fix up the property,
                  you'd probably list it traditionally and get more money. We
                  exist for people who CAN'T or DON'T WANT TO deal with repairs.
                  We mean it when we say as-is.
                </p>
              </div>
            </div>

            {/* 9. No Hidden Fees or Costs */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="font-serif text-2xl text-secondary mb-4\">
                9. No Hidden Fees or Costs
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  What You See Is What You Get:
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Check className="w-5 h-5 text-emerald-600" /> We Pay
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Title search and title insurance</li>
                      <li>Title company closing fees</li>
                      <li>Transfer taxes</li>
                      <li>Recording fees</li>
                      <li>Notary costs</li>
                      <li>Any standard closing costs</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500" /> You Pay
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Nothing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">
                  No Commissions:
                </h4>
                <p className="text-gray-700 mb-4">
                  Traditional home sales: 6% ($18,000 on a $300,000 sale).
                  Selling to us: $0 in commissions
                </p>
                <h4 className="font-semibold text-secondary mb-2">
                  No Surprise Deductions:
                </h4>
                <p className="text-gray-700 mb-4">
                  Some cash buyers present an offer, then surprise you at
                  closing with "deductions" for repairs they "discovered" or
                  fees they didn't mention. We don't operate that way.
                </p>
                <h4 className="font-semibold text-secondary mb-2">
                  Your Net Proceeds Are Clear From Day One:
                </h4>
                <p className="text-gray-700">
                  Our offer letter shows: Purchase price - Minus: Your mortgage
                  payoff (if applicable) - Minus: Any liens or back taxes = Your
                  net check at closing. No surprises. No fine print. No
                  last-minute changes.
                </p>
              </div>
            </div>

            {/* 10. A+ BBB Rating & Stellar Reviews */}
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200 shadow-md">
              <h3 className="font-serif text-2xl text-secondary mb-4">
                10. A+ BBB Rating & Stellar Reviews
              </h3>
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-2">
                  Reputation Matters:
                </h4>
                <p className="text-gray-700 mb-4">
                  85%+ of Business Comes from Referrals from Happy Customers
                </p>
                <h5 className="font-semibold text-secondary mb-2">
                  What Clients Say:
                </h5>
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-[#1c354e] pl-4 italic text-gray-700">
                    "After dealing with two other 'we buy houses' companies that
                    tried to lowball us and use scare tactics, Realty Trust was
                    a breath of fresh air. Transparent pricing, no pressure,
                    professional throughout." — Robert S., Chesterfield
                  </blockquote>
                  <blockquote className="border-l-4 border-[#1c354e] pl-4 italic text-gray-700">
                    "We were three siblings inheriting our dad's house in South
                    City. Couldn't agree on anything. Realty Trust's fair offer
                    became the neutral solution we all accepted. They worked
                    with all of us respectfully and patiently." — Johnson
                    Family, South St. Louis County
                  </blockquote>
                  <blockquote className="border-l-4 border-[#1c354e] pl-4 italic text-gray-700">
                    "Facing foreclosure was the most stressful thing I've ever
                    experienced. Jeff and his team treated me with dignity, not
                    like a failure. They stopped the sheriff sale with 9 days to
                    spare and I walked away with my credit protected." — Marcus
                    T., North St. Louis County
                  </blockquote>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">
                  Why This Matters:
                </h4>
                <p className="text-gray-700">
                  Testimonials and ratings aren't marketing fluff—they're proof
                  that we deliver on our promises. Real people in real
                  situations vouching for our integrity and service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-secondary mb-12 font-serif text-center">
            Realty Trust vs. Other St. Louis Cash Buyers
          </h2>
          <div className="overflow-x-auto shadow-xl rounded-2xl">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="p-5 text-left font-serif text-lg">
                    What Matters to You
                  </th>
                  <th className="p-5 text-left font-serif text-lg">
                    Realty Trust Company
                  </th>
                  <th className="p-5 text-left font-serif text-lg">
                    National Franchises
                  </th>
                  <th className="p-5 text-left font-serif text-lg">
                    Local Investor Flippers
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-50/30">
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    Pressure Tactics
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    None - self-service portal
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    High - daily calls & follow-ups
                  </td>
                  <td className="p-5 text-gray-600">
                    Medium - some pushy, some not
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    Local Presence
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    30+ years in St. Louis
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    Out-of-state call centers
                  </td>
                  <td className="p-5 text-gray-600">Varies widely</td>
                </tr>
                <tr className="bg-amber-50/30">
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    Pricing Transparency
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    Detailed breakdown provided
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    Often just a number
                  </td>
                  <td className="p-5 text-gray-600">Rarely explained</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    Closing Timeline
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    7-90+ days (your choice)
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    Usually rushed (7-14 days only)
                  </td>
                  <td className="p-5 text-gray-600">Varies</td>
                </tr>
                <tr className="bg-amber-50/30">
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    Experience with Complex Situations
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    Specialized (foreclosure, probate, divorce)
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    Cookie-cutter approach
                  </td>
                  <td className="p-5 text-gray-600">Limited</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    Estate Cleanout
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    Full service included
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    Usually not offered
                  </td>
                  <td className="p-5 text-gray-600">Sometimes for extra fee</td>
                </tr>
                <tr className="bg-amber-50/30">
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    Charity Program
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    100% of belongings proceeds donated
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    No
                  </td>
                  <td className="p-5 text-gray-600">No</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    Owner Involvement
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    Jeff personally reviews every deal
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    Corporate investors never meet you
                  </td>
                  <td className="p-5 text-gray-600">Varies</td>
                </tr>
                <tr className="bg-amber-50/30">
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    BBB Rating
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    A+
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    Often unrated or complaints
                  </td>
                  <td className="p-5 text-gray-600">Varies widely</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-secondary border-r border-gray-200">
                    Professional Licensing
                  </td>
                  <td className="p-5 text-[#1c354e] font-semibold border-r border-gray-200">
                    Licensed broker 30+ years
                  </td>
                  <td className="p-5 text-gray-600 border-r border-gray-200">
                    Often unlicensed investors
                  </td>
                  <td className="p-5 text-gray-600">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f2f3f4]">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-secondary mb-6">
            How We Make Selling Easy
          </h2>
          <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg mb-20">
            A simple, pressure-free process designed around your comfort and
            timeline.
          </p>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {[
              {
                n: "1",
                t: "Private Online Portal",
                time: "3 Minutes",
                d: "Create your secure account from anywhere, anytime. No phone call required.",
              },
              {
                n: "2",
                t: "Upload Photos & Details",
                time: "10 Minutes",
                d: "Tell us about your property at your convenience. We don't need perfect staging—just honest photos.",
              },
              {
                n: "3",
                t: "Receive Detailed Offer",
                time: "24 Hours",
                d: "Fair cash offer delivered via email with complete pricing breakdown. Review privately.",
              },
              {
                n: "4",
                t: "Decide on Your Timeline",
                time: "No Pressure",
                d: "Accept, decline, or ask questions. Take days or weeks—your choice.",
              },
              {
                n: "5",
                t: "Close When You're Ready",
                time: "7–90+ Days",
                d: "We handle all paperwork and coordination. You choose the closing date.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 text-center border border-[#eff2f5] shadow-xl hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-forest flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {s.n}
                </div>

                <h3 className="font-serif text-xl text-secondary mb-1">
                  {s.t}
                </h3>
                <span className="text-sm font-semibold text-[#1c354e] block mb-3">
                  {s.time}
                </span>

                <p className="text-gray-600 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/how-it-works">
              <Button
                variant="outline"
                className="px-10 py-4 inline-flex items-center gap-2 text-base"
              >
                See Complete Process Details{" "}
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-secondary mb-8 font-serif text-center">
            Proudly Serving the Entire St. Louis Metro
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center">
            We buy houses throughout:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200">
              <h3 className="font-serif text-xl text-secondary mb-3 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#1c354e]" />
                St. Louis City:
              </h3>
              <p className="text-gray-700 text-sm">
                South City • Central West End • Tower Grove • The Hill • Soulard
                • Lafayette Square • Dutchtown • Carondelet • Shaw
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200">
              <h3 className="font-serif text-xl text-secondary mb-3 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#1c354e]" />
                St. Louis County:
              </h3>
              <p className="text-gray-700 text-sm">
                Clayton • Ladue • University City • Webster Groves • Kirkwood •
                Brentwood • Richmond Heights • Maplewood • Creve Coeur • Town &
                Country • Des Peres • Maryland Heights • Ballwin • Chesterfield
                • Wildwood • Florissant • Hazelwood
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200">
              <h3 className="font-serif text-xl text-secondary mb-3 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#1c354e]" />
                St. Charles County:
              </h3>
              <p className="text-gray-700 text-sm">
                St. Charles • O'Fallon • St. Peters • Wentzville • Lake Saint
                Louis • Dardenne Prairie
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200">
              <h3 className="font-serif text-xl text-secondary mb-3 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#1c354e]" />
                Jefferson County:
              </h3>
              <p className="text-gray-700 text-sm">
                Arnold • Festus • Hillsboro • Imperial • High Ridge
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-200">
              <h3 className="font-serif text-xl text-secondary mb-3 flex items-center gap-2">
                <Home className="w-7 h-7 text-[#1c354e]" />
                Franklin County & Surrounding Areas
              </h3>
              <p className="text-gray-700 text-sm">
                We buy homes in all neighborhoods and all conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-16 sm:py-20 bg-secondary text-secondary-foreground">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-12 font-serif text-center">
            Recognized for Excellence in St. Louis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary-foreground/10 p-6 rounded-xl shadow-md border border-gold/20 text-center hover:shadow-lg transition-shadow">
              <Trophy className="w-12 h-12 text-gold mb-4 mx-auto" />
              <h3 className="font-serif text-base text-gold mb-2 leading-tight">
                Jeff Camilleri: Best Banker in St. Louis
              </h3>
              <p className="text-secondary-foreground/80 text-sm">
                Small Business Monthly
              </p>
            </div>
            <div className="bg-secondary-foreground/10 p-6 rounded-xl shadow-md border border-gold/20 text-center hover:shadow-lg transition-shadow">
              <Star className="w-12 h-12 text-gold mb-4 mx-auto" />
              <h3 className="font-serif text-base text-gold mb-2 leading-tight">
                A+ BBB Rating
              </h3>
              <p className="text-secondary-foreground/80 text-sm">
                Better Business Bureau
              </p>
            </div>
            <div className="bg-secondary-foreground/10 p-6 rounded-xl shadow-md border border-gold/20 text-center hover:shadow-lg transition-shadow">
              <Medal className="w-12 h-12 text-gold mb-4 mx-auto" />
              <h3 className="font-serif text-base text-gold mb-2 leading-tight">
                30+ Years Licensed Real Estate Broker
              </h3>
              <p className="text-secondary-foreground/80 text-sm">
                Missouri Real Estate Commission
              </p>
            </div>
            <div className="bg-secondary-foreground/10 p-6 rounded-xl shadow-md border border-gold/20 text-center hover:shadow-lg transition-shadow">
              <Briefcase className="w-12 h-12 text-gold mb-4 mx-auto" />
              <h3 className="font-serif text-base text-gold mb-2 leading-tight">
                Executive Vice President & Chief Banking Officer
              </h3>
              <p className="text-secondary-foreground/80 text-sm">
                St Louis Community Bank
              </p>
            </div>
            <div className="bg-secondary-foreground/10 p-6 rounded-xl shadow-md border border-gold/20 text-center hover:shadow-lg transition-shadow">
              <Handshake className="w-12 h-12 text-gold mb-4 mx-auto" />
              <h3 className="font-serif text-base text-gold mb-2 leading-tight">
                City of Sunset Hills Finance Committee
              </h3>
              <p className="text-secondary-foreground/80 text-sm">
                Community Leadership
              </p>
            </div>
            <div className="bg-secondary-foreground/10 p-6 rounded-xl shadow-md border border-gold/20 text-center hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-gold mb-4 mx-auto" />
              <h3 className="font-serif text-base text-gold mb-2 leading-tight">
                St. Louis Economic Development Partnership
              </h3>
              <p className="text-secondary-foreground/80 text-sm">
                Finance Committee Member
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Trust Us Section */}
      <section className="py-16 sm:py-20 bg-amber-50">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-secondary mb-12 font-serif text-center">
            Real Stories from Real St. Louis Families
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#1c354e]">
              <h3 className="font-serif text-xl text-secondary mb-4">
                Nursing Home Transition:
              </h3>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "My 87-year-old mother needed memory care urgently. Her Webster
                Groves home was full of 50 years of belongings and needed $40K
                in repairs. I live in Seattle and couldn't fly back repeatedly.
                Realty Trust's online portal was perfect—I uploaded photos, got
                a fair offer, and they handled EVERYTHING. The estate cleanout
                took them two days. They set aside mom's photo albums and
                important papers for me, sold her furniture, and donated $3,800
                to Bethesda Dilworth (her care facility) in her name. Closed in
                16 days. I cannot imagine doing this any other way."
              </p>
              <p className="text-[#1c354e] font-semibold">
                — Jennifer M., Seattle, WA
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#1c354e]">
              <h3 className="font-serif text-xl text-secondary mb-4">
                Foreclosure Prevention:
              </h3>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "I lost my job in 2023 and fell behind on my mortgage. The
                foreclosure notice was devastating—I felt like such a failure.
                I'd called three other cash buyers and they all tried to
                pressure me to accept lowball offers 'today only.' When I found
                Realty Trust, Jeff personally called me back, explained the
                process with genuine compassion, and gave me an offer that was
                $25K higher than the other guys. He coordinated with my lender,
                postponed the sale, and we closed two days before the auction. I
                walked away with $14,000 and my credit protected."
              </p>
              <p className="text-[#1c354e] font-semibold">
                — Marcus T., North St. Louis County
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#1c354e]">
              <h3 className="font-serif text-xl text-secondary mb-4">
                Divorce:
              </h3>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "Going through divorce is humiliating enough without fighting
                over home repairs in front of lawyers. My ex and I couldn't
                agree on ANYTHING. Realty Trust's offer became our
                compromise—neither of us could argue about their transparent
                pricing and detailed comps. We both got separate portal logins,
                reviewed independently, and our attorneys confirmed it was fair.
                Closed in 19 days, proceeds split automatically by title
                company."
              </p>
              <p className="text-[#1c354e] font-semibold">
                — Sarah P., Ballwin, MO
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#1c354e]">
              <h3 className="font-serif text-xl text-secondary mb-4">
                Inherited Property:
              </h3>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "My brother, sister, and I inherited our parents' South City
                home. None of us live in St. Louis anymore. The house needed a
                ton of work and was full of belongings. After six months of
                arguing, my sister found Realty Trust. Their offer solved
                everything—fair price we all accepted, they handled the cleanout
                remotely, and donated the furniture sale to St. Patrick Center.
                Settlement checks wired to all three of us simultaneously. Saved
                our family relationships."
              </p>
              <p className="text-[#1c354e] font-semibold">
                — David K., Phoenix, AZ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl mb-6 font-serif">
            Experience the Realty Trust Difference
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join other St. Louis families who chose compassion, transparency,
            and expertise over high-pressure sales tactics. Get your fair cash
            offer today—no obligation, no pressure, just honest help when you
            need it most.
          </p>

          <Link to="/get-offer">
            <Button
              variant="gold"
              size="xl"
              className="px-10 py-4 mb-8 text-lg inline-flex items-center gap-2"
            >
              Get Your Private Cash Offer Now{" "}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>

          {/* CONTACT SECTION */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {/* CALL */}
            <a
              href="tel:13144803800"
              className="flex items-center gap-3 hover:text-gold transition-colors"
            >
              <Phone className="w-6 h-6 text-gold" />
              <div className="text-left">
                <p className="text-sm opacity-75">
                  Prefer to talk with Jeff directly?
                </p>
                <p className="font-semibold text-lg">Call (314) 480-3800</p>
              </div>
            </a>

            {/* CONTACT US FORM */}
            <a
              href="/contact"
              className="flex items-center gap-3 hover:text-gold transition-colors"
            >
              <Mail className="w-6 h-6 text-gold" />
              <div className="text-left">
                <p className="text-sm opacity-75">Have questions?</p>
                <p className="font-semibold text-lg">Contact us</p>
              </div>
            </a>
          </div>


          <div className="pt-8 border-t border-white/20">
            <p className="text-lg mb-4 opacity-90 italic leading-relaxed max-w-3xl mx-auto">
              We're not the biggest cash buyer in St. Louis—we're the most
              trusted. For over 30 years, we've built our reputation one
              relationship at a time. We'd be honored to help your family too.
            </p>
            <p className="font-semibold text-xl">— Jeff Camilleri, Founder</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
