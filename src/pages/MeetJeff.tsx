import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import {
  Check,
  Trophy,
  Award,
  Briefcase,
  Phone,
  Mail,
  Linkedin,
  Building2,
  TrendingUp,
} from "lucide-react";
import logoFull from "../../public/Camilleri_Jeff-205-Edit (1).jpg";

export default function MeetJeff() {
  useEffect(() => {
    const title = "Meet Jeff at Realty Trust Company  Sell Your House Fast St. Louis";
    const description =
      "Learn about Jeff at Realty Trust Company, your trusted guide to selling your house fast in St. Louis. Get honest advice, fair cash offers, and a stress-free process.";
    const canonicalUrl = "https://realtytrustco.com/meet-jeff";

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

    const schemaId = "ld-json-meet-jeff";
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

  const stats = [
    { icon: Trophy, value: "500+", label: "Homes Purchased" },
    { icon: Award, value: "30+", label: "Years Experience" },
    { icon: Briefcase, value: "$250K+", label: "Donated to Charity" },
    { icon: Trophy, value: "A+", label: "BBB Rating" },
  ];

  const careerHighlights = [
    {
      period: "Early Career (1995-2005)",
      title: "Building Foundation",
      items: [
        "Traditional residential sales and purchases",
        "First-time homebuyers and move-up buyers",
        "Investment property sales",
        "Built foundation of St. Louis market knowledge",
      ],
    },
    {
      period: "Mid-Career (2005-2015)",
      title: "Specialization & Growth",
      items: [
        "Specialized in complex transactions",
        "Probate and estate sales",
        "Investment property analysis",
        "Commercial real estate components",
      ],
    },
    {
      period: "Current Practice (2015-Present)",
      title: "Premier Services",
      items: [
        "Realty Trust Company (cash home buying)",
        "Referral-only traditional brokerage",
        "High-value, relationship-based transactions",
        "Consultation and advisory services",
      ],
    },
  ];

  const expertise = [
    "Residential real estate valuation",
    "Investment property analysis",
    "Probate and estate sales",
    "Foreclosure prevention and short sales",
    "Complex title issues",
    "Property condition assessment",
    "Market analysis and pricing strategy",
    "St. Louis neighborhood expertise",
  ];

  const bankingSpecialties = [
    "Commercial lending and business financing",
    "Real estate loans (residential and commercial)",
    "Construction financing",
    "Business lending and lines of credit",
    "Treasury management solutions",
    "Complex loan structuring",
  ];

  const whyDualExpertise = [
    {
      title: "Navigate Complex Financial Situations",
      items: [
        "Understand mortgage payoff calculations and lien priorities",
        "Work effectively with lenders on short sales and foreclosure alternatives",
        "Structure offers that align with financing and title requirements",
        "Identify and resolve financial obstacles before they derail closings",
      ],
    },
    {
      title: "Provide Sophisticated Property Valuation",
      items: [
        "Analyze properties like a banker evaluating collateral",
        "Understand appraisal methodologies and comparable sales analysis",
        "Assess investment potential and return calculations",
        "Price properties based on market reality, not wishful thinking",
      ],
    },
    {
      title: "Solve Problems Others Can't",
      items: [
        "Clear title defects using banking and legal knowledge",
        "Negotiate with banks, lenders, and institutional sellers",
        "Handle probate sales with understanding of estate finance",
        "Structure creative solutions for unique situations",
      ],
    },
  ];

  const commitments = [
    {
      title: "Trust Is Everything",
      quote:
        "After three decades of executive experience in banking and real estate, I've learned that the most valuable transactions start with trust. That's why I choose to work exclusively by referral—partnering only with clients I've helped in the past or those personally introduced by them.",
      benefits: [
        "No high-pressure sales tactics",
        "Honest advice even when it costs a commission",
        "Long-term relationships over short-term deals",
        "Reputation built transaction by transaction",
      ],
    },
    {
      title: "Knowledge Shapes Results",
      quote:
        "Whether you're buying your next home or selling a place full of memories, I bring seasoned insight, calm guidance, and a deep understanding of the St. Louis market.",
      benefits: [
        "Witnessed multiple real estate cycles",
        "Understands neighborhood evolution",
        "Knows what drives value in different submarkets",
        "Can spot opportunities and red flags others miss",
      ],
    },
    {
      title: "Discretion and Professionalism",
      quote:
        "My clients know me for discretion, clear communication, and a results-driven approach shaped by 30 years of high-level decision-making in finance and real estate.",
      benefits: [
        "Confidentiality with sensitive transactions",
        "Professional communication with all parties",
        "Strategic thinking and problem-solving",
        "Results measured in outcomes, not activity",
      ],
    },
  ];

  const testimonials = [
    {
      text: "We were referred to Jeff by our financial advisor when buying our Clayton home. His knowledge of the St. Louis luxury market was impressive, but what stood out was his calm, strategic approach. He never pushed us toward a decision and gave brutally honest feedback about properties—saving us from several bad investments. When we found the right home, his negotiation skills saved us $40,000 off asking price. Five years later, we still thank our advisor for that referral.",
      author: "Robert & Catherine",
      context: "Clayton Homebuyers",
    },
    {
      text: "After my father's death, I needed to sell his South City home quickly. I was overwhelmed with grief and had no idea where to start. Jeff's team at Realty Trust handled everything—fair offer, estate cleanout, even donated the furniture sale proceeds to my dad's church. Jeff called personally to express condolences and ensure I understood every step. That level of care from a busy executive speaks volumes about his character.",
      author: "Maria T.",
      context: "Estate Sale",
    },
    {
      text: "As a commercial real estate developer, I need a banker who understands both the numbers and the properties. Jeff's dual expertise in banking and real estate has been invaluable. He structures loans that work for our projects and understands market dynamics other bankers miss. He's become a trusted advisor, not just a lender.",
      author: "Daniel K.",
      context: "Commercial Developer",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-sky-50 via-white to-[#1c354e]/5
 py-12 lg:py-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-20 -mr-48 -mt-48"></div>

        <div className="container max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#e9eff5] text-[#1c354e] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#8bb2da]">
                Meet Our Founder
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-secondary mb-6 font-bold leading-tight">
                Jeff Camilleri
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-700 mb-6 font-semibold">
                St. Louis Real Estate Broker & Banking Executive
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                With over 30 years of experience in both real estate and
                banking, Jeff brings a unique combination of market expertise,
                financial acumen, and relationship-driven service to every
                client. Whether you're buying, selling, or need a fast cash
                solution, Jeff's dual expertise ensures you receive professional
                guidance backed by decades of proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/get-offer">
                  <Button variant="hero" size="lg" className="text-base px-8">
                    Schedule a Consultation →
                  </Button>
                </Link>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#1c354e]" />
                  <span>Voted "Best Banker in St. Louis"</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#1c354e]" />
                  <span>30+ Years Licensed Broker</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#1c354e]" />
                  <span>EVP & Chief Banking Officer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#1c354e]" />
                  <span>A+ BBB Rating</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#dfeaf5]">
                <img
                  src={logoFull}
                  alt="Jeff Camilleri"
                  className="rounded-2xl w-full h-auto"
                />
                <h3 className="font-serif text-3xl text-secondary mb-2 text-center font-bold">
                  Jeff Camilleri
                </h3>
                <p className="text-gray-600 text-center text-lg">
                  Founder & Owner
                </p>
                <p className="text-[#1c354e] text-center font-semibold">
                  Realty Trust Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-8 text-center font-bold">
            A Unique Combination: Real Estate Expertise Meets Banking Leadership
          </h2>
          <p className="text-lg text-gray-700 text-center mb-16 leading-relaxed max-w-3xl mx-auto">
            Most real estate professionals have experience in either real estate
            or finance. Jeff has spent three decades excelling in both
            simultaneously—giving him an unmatched perspective on property
            transactions, valuation, financing, and investment strategy.
          </p>

          {/* Real Estate Career */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif text-secondary mb-6 font-bold">
              Real Estate Career (1995-Present)
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <span className="font-semibold text-secondary">
                Missouri Licensed Real Estate Broker - 30+ Years
              </span>
              <br />
              Jeff earned his Missouri real estate license in 1995 and has
              maintained it continuously for over three decades. His real estate
              practice has evolved over the years:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {careerHighlights.map((phase, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#f1f4f7] to-white p-8 rounded-2xl border border-[#cfe3f7] shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-sm font-semibold text-[#1c354e] mb-3">
                    {phase.period}
                  </div>
                  <h4 className="text-xl font-serif text-secondary mb-4 font-bold">
                    {phase.title}
                  </h4>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-[#f1f4f8] border-l-4 border-l-[#1c354e] p-8 rounded-xl mb-10">
              <h4 className="text-xl font-serif text-secondary font-bold mb-4">
                Areas of Expertise
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Banking Career */}
          <div>
            <h3 className="text-3xl font-serif text-secondary mb-6 font-bold">
              Banking Career
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold text-secondary">
                Executive Vice President & Chief Banking Officer
              </span>
              <br />
              Jeff's banking career spans over 30 years, culminating in his role
              as one of the highest-ranking executives at a St. Louis Bank.
            </p>

            <div className="bg-white border-2 border-[#cfe3f7] p-8 rounded-2xl mb-8">
              <h4 className="text-xl font-serif text-secondary font-bold mb-6">
                Responsibilities
              </h4>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Oversees commercial banking, mortgage lending, and treasury
                    management
                  </span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Drives overall loan growth across the organization
                  </span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Manages business development and production</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Leads four regional community advisory bank boards
                  </span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Supervises Commercial Banking, Treasury Management, and
                    Marketing departments
                  </span>
                </li>
              </ul>

              <h4 className="text-xl font-serif text-secondary font-bold mb-4">
                Banking Specialties
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {bankingSpecialties.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#f1f4f7] to-white p-6 rounded-lg border border-[#cfe3f7]">
                <p className="text-gray-700 italic mb-3 font-medium">
                  "I truly value the relationships I have built with my clients.
                  They give me a chance to use the knowledge that I've
                  cultivated over the past 30 years to do right by the community
                  and add value. I'm very grateful for every opportunity."
                </p>
                <p className="text-secondary font-semibold">— Jeff Camilleri</p>
                <div className="flex items-center gap-2 text-sm text-[#1c354e] mt-2">
                  <Trophy className="w-4 h-4" />
                  <span>
                    Voted "Best Banker in St. Louis" - Small Business Monthly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dual Expertise Matters */}
      {/* Why Dual Expertise Matters */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#f1f4f7] to-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-8 text-center font-bold">
            How Banking + Real Estate Experience Benefits You
          </h2>
          <p className="text-lg text-gray-700 text-center mb-16 leading-relaxed max-w-3xl mx-auto">
            Understanding Both Sides of Every Transaction: Most real estate
            agents understand property values and sales contracts. Most bankers
            understand financing and loan structures. Jeff understands
            both—which means he can:
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {whyDualExpertise.map((section, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl border-2 border-[#cfe3f7] shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-serif text-secondary mb-6 font-bold flex items-center gap-3">
                  {/* UPDATED: Gold Gradient Styling for 1, 2, 3 */}
                  <span className="w-14 h-14 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-xl flex items-center justify-center text-2xl font-bold text-black shadow-lg flex-shrink-0">
                    {i + 1}
                  </span>
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-4 text-gray-700">
                      <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-[#f1f4f7] p-10 rounded-2xl border-2 border-[#cfe3f7]">
              <h3 className="text-2xl font-serif text-secondary mb-4 font-bold flex items-center gap-3">
                {/* UPDATED: Gold Gradient Styling for 4 */}
                <span className="w-14 h-14 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-xl flex items-center justify-center text-2xl font-bold text-black shadow-lg flex-shrink-0">
                  4
                </span>
                Communicate in the Language of Finance
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                When working with attorneys, CPAs, financial advisors, or
                lenders, Jeff speaks their language—facilitating smoother
                transactions and better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Leadership */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-16 text-center font-bold">
            Committed to St. Louis
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="bg-gradient-to-br from-[#f1f4f7] to-white p-8 rounded-2xl border border-[#cfe3f7] shadow-md">
              <h3 className="text-2xl font-serif text-secondary mb-4 font-bold">
                City of Sunset Hills Finance Committee
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Advises city government on financial matters</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Reviews budgets and financial policies</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Contributes banking and real estate expertise to municipal
                    decisions
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f1f4f7] to-white p-8 rounded-2xl border border-[#cfe3f7] shadow-md">
              <h3 className="text-2xl font-serif text-secondary mb-4 font-bold">
                St. Louis Economic Development Partnership
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Supports regional economic development initiatives
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Evaluates financing structures for development projects
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Leverages professional network for community benefit
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f1f4f7] to-white p-10 rounded-2xl border-2 border-[#cfe3f7]">
            <h3 className="text-2xl font-serif text-secondary font-bold mb-4">
              Community Banking Philosophy
            </h3>
            <p className="text-gray-700 italic text-lg mb-4 leading-relaxed">
              "Community banking means reinvestment in our region, flexible
              banking products to meet the needs of our community, and local
              decision makers that live in our community and are passionate
              about helping others. For me, working in a community bank is very
              rewarding. I get to see the difference that our lenders make daily
              with the local businesses and communities we serve."
            </p>
            <p className="text-secondary font-semibold">— Jeff Camilleri</p>
          </div>
        </div>
      </section>

      {/* Referral-Only Traditional Practice */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#f1f4f7] to-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-8 text-center font-bold">
            Traditional Real Estate Services
          </h2>
          <div className="bg-emerald-100 border-4 border-emerald-200 text-secondary px-8 py-6 rounded-xl mb-12 text-center">
            <p className="text-xl font-bold">
              By Referral Only - Not Accepting General Public Inquiries
            </p>
          </div>

          <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            In addition to Realty Trust Company's cash buying service, Jeff
            maintains a highly selective traditional real estate practice for
            buying and selling homes the conventional way (listings, showings,
            traditional financing).
          </p>

          <h3 className="text-3xl font-serif text-secondary mb-8 font-bold">
            This Practice Operates Differently
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border-l-4 border-l-red-500 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-lg">✕</span>
                </div>
                <h4 className="text-xl font-serif text-gray-900 font-bold">
                  Not Open to the General Public
                </h4>
              </div>
              <p className="text-gray-700">
                Jeff works exclusively with clients who have been personally
                referred by past clients or professional contacts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-l-4 border-l-emerald-600 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Check className="w-6 h-6 text-emerald-600" />
                <h4 className="text-xl font-serif text-gray-900 font-bold">
                  Relationship-Based Business Model
                </h4>
              </div>
              <p className="text-gray-700">
                Every client relationship begins with a foundation of trust
                through mutual connections.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-l-4 border-l-emerald-600 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Check className="w-6 h-6 text-emerald-600" />
                <h4 className="text-xl font-serif text-gray-900 font-bold">
                  Personalized, White-Glove Service
                </h4>
              </div>
              <p className="text-gray-700">
                By limiting the number of clients, Jeff provides exceptional
                attention and customized service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-l-4 border-l-emerald-600 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Check className="w-6 h-6 text-emerald-600" />
                <h4 className="text-xl font-serif text-gray-900 font-bold">
                  High-Value, Complex Transactions
                </h4>
              </div>
              <p className="text-gray-700">
                Focus on sophisticated buyers and sellers who value expertise
                and discretion.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f1f4f7] to-white p-10 rounded-2xl border-2 border-[#cfe3f7] mb-12">
            <h3 className="text-2xl font-serif text-secondary font-bold mb-8">
              Why Referral-Only?
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 italic mb-2 font-medium">
                  "Quality Over Quantity"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I do not work with everyone that wants to buy or sell—only
                  those where I know I can deliver exceptional value. This means
                  clients get my full commitment, not a cookie-cutter process.
                </p>
              </div>
              <div>
                <p className="text-gray-700 italic mb-2 font-medium">
                  "Proven Track Record"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  People only refer professionals who deliver. My referral-only
                  model is proof that past clients are confident in my ability
                  to guide others with care, integrity, and results.
                </p>
              </div>
              <div>
                <p className="text-gray-700 italic mb-2 font-medium">
                  "Focused Personal Service"
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By limiting my work to referrals, I can devote more time and
                  attention to each client, ensuring a truly tailored buying or
                  selling experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#f1f4f7] p-10 rounded-2xl border-2 border-[#cfe3f7]">
            <h3 className="text-2xl font-serif text-secondary font-bold mb-6">
              Who Should Seek a Referral
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  High-net-worth individuals buying or selling luxury homes
                </span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Executives relocating to/from St. Louis</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Clients with complex real estate needs</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Buyers or sellers who value discretion and privacy</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  Those seeking sophisticated market analysis and negotiation
                </span>
              </li>
            </ul>
            <p className="text-gray-700 italic">
              If you've been referred by a past client or professional contact,
              Jeff would be honored to discuss your real estate goals.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-16 text-center font-bold">
            Jeff's Approach to Real Estate
          </h2>

          <div className="space-y-8">
            {commitments.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#f1f4f7] to-white p-10 rounded-2xl border-2 border-[#cfe3f7] shadow-lg"
              >
                <h3 className="text-2xl font-serif text-secondary mb-6 font-bold">
                  {i + 1}. {item.title}
                </h3>
                <div className="bg-white p-6 rounded-xl border border-[#cfe3f7] mb-6">
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {item.benefits.map((benefit, j) => (
                    <div key={j} className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-[#f1f4f7] to-white p-10 rounded-2xl border-2 border-[#cfe3f7] shadow-lg">
              <h3 className="text-2xl font-serif text-secondary mb-6 font-bold">
                4. Comprehensive Service
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-serif text-secondary font-bold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold">
                      A
                    </span>
                    For Traditional Buyers/Sellers (Referral-Only)
                  </h4>
                  <ul className="space-y-2 ml-8">
                    <li className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Strategic pricing and positioning</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Professional marketing and negotiation</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Network access to qualified buyers/sellers</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Transaction management from contract to closing
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-serif text-secondary font-bold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold">
                      B
                    </span>
                    For Cash Buyers (Realty Trust Company)
                  </h4>
                  <ul className="space-y-2 ml-8">
                    <li className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Fast, fair cash offers</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>No-pressure online process</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Flexible closing timelines</span>
                    </li>
                    <li className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Estate cleanout and charity program</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-100 p-4 rounded-lg border border-emerald-300 mt-4">
                  <p className="text-secondary font-semibold text-center">
                    Jeff can serve clients in whichever capacity fits their
                    needs best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Professional Development */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#f1f4f7] to-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-16 text-center font-bold">
            Continuous Learning, Continuous Improvement
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#cfe3f7] shadow-lg">
              <h3 className="text-xl font-serif text-secondary font-bold mb-6">
                Formal Education
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Real Estate License, Missouri (1995)</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Extensive banking and finance training through CNB and
                    industry organizations
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Ongoing continuing education in real estate law, finance,
                    and market analysis
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#cfe3f7] shadow-lg">
              <h3 className="text-xl font-serif text-secondary font-bold mb-6">
                Professional Experience
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>30+ years as licensed Missouri real estate broker</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>30+ years in commercial banking and lending</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Leadership roles in banking operations and management
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Thousands of real estate transactions evaluated and
                    completed
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#cfe3f7] shadow-lg">
              <h3 className="text-xl font-serif text-secondary font-bold mb-6">
                Industry Knowledge
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Deep expertise in mortgage lending and financing</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Construction lending and development finance</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Commercial real estate analysis</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Residential property valuation</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Probate and estate law (Missouri)</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Title insurance and closing procedures</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Foreclosure law and short sale negotiations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-16 text-center font-bold">
            What Clients Say About Working With Jeff
          </h2>

          <div className="grid md:grid-cols-1 gap-10">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#f1f4f7] to-white p-10 rounded-2xl border-2 border-[#cfe3f7] shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#394e62] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-serif text-xl text-secondary font-bold">
                    — {testimonial.author}
                  </p>
                  <p className="text-sm text-[#1c354e] font-medium">
                    {testimonial.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#f1f4f7] to-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-16 text-center font-bold">
            Industry Recognition
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-[#cfe3f7] shadow-lg flex flex-col items-center text-center">
              <Trophy className="w-12 h-12 text-emerald-900 mb-4" />
              <h3 className="text-xl font-serif text-secondary font-bold mb-2">
                "Best Banker in St. Louis"
              </h3>
              <p className="text-gray-600">Small Business Monthly</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#cfe3f7] shadow-lg flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-emerald-900 mb-4" />
              <h3 className="text-xl font-serif text-secondary font-bold mb-2">
                30+ Years Licensed Real Estate Broker
              </h3>
              <p className="text-gray-600">Missouri Real Estate Commission</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#cfe3f7] shadow-lg flex flex-col items-center text-center">
              <Briefcase className="w-12 h-12 text-emerald-900 mb-4" />
              <h3 className="text-xl font-serif text-secondary font-bold mb-2">
                Executive Vice President & Chief Banking Officer
              </h3>
              <p className="text-gray-600">Local St. Louis Bank</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#cfe3f7] shadow-lg flex flex-col items-center text-center">
              <Building2 className="w-12 h-12 text-emerald-900 mb-4" />
              <h3 className="text-xl font-serif text-secondary font-bold mb-2">
                City of Sunset Hills Finance Committee
              </h3>
              <p className="text-gray-600">Municipal Service</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#cfe3f7] shadow-lg flex flex-col items-center text-center">
              <TrendingUp className="w-12 h-12 text-emerald-900 mb-4" />
              <h3 className="text-xl font-serif text-secondary font-bold mb-2">
                St. Louis Economic Development Partnership
              </h3>
              <p className="text-gray-600">Finance Committee Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Working With Jeff */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-16 text-center font-bold">
            How to Work With Jeff Camilleri
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Path 1 */}
            <div className="bg-gradient-to-br from-[#f1f4f7] to-white p-10 rounded-2xl border-2 border-[#cfe3f7] shadow-lg">
              <h3 className="text-2xl font-serif text-secondary font-bold mb-6">
                Realty Trust Company
              </h3>
              <p className="text-gray-700 font-semibold mb-6 text-lg">
                (Cash Home Buying)
              </p>

              <h4 className="text-lg font-serif text-secondary font-bold mb-4">
                Best For
              </h4>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Need to sell quickly (7-90 days)</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Property needs repairs you can't/won't make</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Facing foreclosure, divorce, probate, or nursing home
                    transition
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Want a simple, no-pressure process</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Don't want showings or traditional marketing</span>
                </li>
              </ul>

              <h4 className="text-lg font-serif text-secondary font-bold mb-4">
                Process
              </h4>
              <ol className="space-y-2 text-gray-700 mb-8 list-decimal list-inside">
                <li>Visit realtytrustco.com</li>
                <li>Create free account in online portal</li>
                <li>Upload property information and photos</li>
                <li>Receive cash offer within 24 hours</li>
                <li>Accept, decline, or discuss on your timeline</li>
              </ol>

              <Link to="/get-offer">
                <Button variant="hero" className="w-full justify-center">
                  Get Your Cash Offer →
                </Button>
              </Link>
            </div>

            {/* Path 2 */}
            <div className="bg-gradient-to-br from-[#f1f4f7] to-white p-10 rounded-2xl border-2 border-[#cfe3f7] shadow-lg">
              <h3 className="text-2xl font-serif text-secondary font-bold mb-6">
                Traditional Real Estate
              </h3>
              <p className="text-gray-700 font-semibold mb-6 text-lg">
                (By Referral Only)
              </p>

              <h4 className="text-lg font-serif text-secondary font-bold mb-4">
                Best For
              </h4>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Buying or selling through traditional MLS listing</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Want to maximize sale price (have time for traditional
                    process)
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Complex or high-value transactions requiring expertise
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Prefer personalized, white-glove service</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Value discretion and professional guidance</span>
                </li>
              </ul>

              <h4 className="text-lg font-serif text-secondary font-bold mb-4">
                Process
              </h4>
              <ol className="space-y-2 text-gray-700 mb-8 list-decimal list-inside">
                <li>Must be referred by past client or professional contact</li>
                <li>Initial consultation to discuss goals</li>
                <li>Customized strategy for your situation</li>
                <li>Full-service representation through transaction</li>
              </ol>

              <p className="text-gray-700 font-semibold mb-4">
                Already have a referral?
              </p>
              <Link to="mailto:jeff@realtytrustco.com">
                <Button variant="hero" className="w-full justify-center">
                  Contact Jeff Directly →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#f1f4f7] to-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-serif text-secondary mb-16 text-center font-bold">
            Beyond Business
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-[#cfe3f7] shadow-lg">
              <h3 className="text-xl font-serif text-secondary font-bold mb-4">
                St. Louis Roots
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Jeff has been a St. Louis resident for over 30 years. He's
                deeply invested in the community—not just professionally, but
                personally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#cfe3f7] shadow-lg">
              <h3 className="text-xl font-serif text-secondary font-bold mb-4">
                Family
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Married with children in St. Louis area schools. Family values
                guide business decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-[#cfe3f7] shadow-lg">
              <h3 className="text-xl font-serif text-secondary font-bold mb-4">
                Community Involvement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Beyond professional committees, Jeff supports various St. Louis
                charitable organizations and believes in giving back to the
                community that has given him success.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f1f4f7] to-white p-12 rounded-2xl border-2 border-[#cfe3f7] mt-12 text-center">
            <p className="text-gray-700 italic text-xl leading-relaxed mb-4">
              "I measure success not by the size of my portfolio, but by the
              strength of my relationships and the positive impact I've had on
              people's lives. After 30 years, I still love what I do because I
              get to help people during important life transitions—and that
              never gets old."
            </p>
            <p className="text-secondary font-serif font-bold text-lg">
              — Jeff Camilleri
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1c354e] to-[#223f5c] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#243f5b] rounded-full opacity-20 -mr-48 -mt-48"></div>

        <div className="container max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-8 text-center">
            Let's Discuss Your Real Estate Needs
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Cash Home Buying
              </h3>
              <p className="text-white/80 mb-8">
                Get a fair cash offer for your property in 24 hours with zero
                pressure
              </p>
              <Link to="/get-offer">
                <Button
                  variant="hero"
                  className="w-full justify-center bg-gradient-to-r from-[#1c354e] to-[#243f5b]"
                >
                  Get Your Free Cash Offer at Realty Trust →
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Traditional Real Estate
              </h3>
              <p className="text-white/80 mb-8">
                If you've been referred by a past client, let's discuss your
                goals
              </p>
              <a href="mailto:jeff@realtytrustcompany.com">
                <Button className="w-full justify-center bg-white text-[#1c354e] hover:bg-white/90">
                  Contact Jeff Directly
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 text-center">
            <h3 className="text-xl font-serif font-bold mb-8">
              Contact Information
            </h3>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-gold" />
                <a
                  href="tel:+13144803800"
                  className="text-white hover:text-gold transition-colors"
                >
                  (314) 480-3800
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-gold" />
                <a
                  href="/contact"
                  className="text-white hover:text-gold transition-colors"
                >
                  Contact us
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="w-6 h-6 text-gold" />
                <a
                  href="https://linkedin.com/in/jeffcamilleri1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
