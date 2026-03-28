import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoFull from "../../public/Camilleri_Jeff-205-Edit (1).jpg";
import { useEffect } from "react";
import {
  CheckCircle,
  Heart,
  Shield,
  Users,
  Home,
  TrendingUp,
  Phone,
  Mail,
  HandHeart,
  Package,
  BookOpen,
  Search,
  Lightbulb,
  Scale,
  Handshake,
  Repeat,
  Stethoscope,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    const title = "About Us | Trusted Cash Home Buyers in St. Louis, MO";
    const description =
      "Learn about Realty Trust Company, a trusted St. Louis team helping homeowners sell their house fast for cash, as-is, hassle-free, and on their timeline.";
    const canonicalUrl = "https://realtytrustco.com/about";

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

    const schemaId = "ld-json-about";
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
   {/* Hero Section */}
<section className="bg-gradient-to-br from-sky-50 via-white to-[#1c354e]/5 py-12 lg:py-20 relative overflow-hidden">
  {/* Decorative Circle */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-20 -mr-48 -mt-48"></div>

  <div className="container max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Text Content */}
      <div>
        <span className="inline-block bg-[#e9eff5] text-[#1c354e] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#8bb2da]">
          Our Mission
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-secondary mb-6 font-bold leading-tight">
          About Realty Trust Company
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-700 mb-6 font-semibold">
          Compassionate Home Buying in St. Louis Since 1995
        </h2>

        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
          For over 30 years, we've been helping St. Louis families through life's most challenging transitions. From our founder's deep roots in banking and real estate to our mission-driven charity program, everything we do is built on one principle: treat people the way we'd want our own families treated.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link to="/get-offer">
            <Button variant="hero" size="lg" className="text-base px-8 shadow-lg hover:shadow-xl transition-shadow">
              Get Your Free Cash Offer →
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
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




      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-12 text-center">
            How Realty Trust Company Began
          </h2>

          {/* The Problem We Saw */}
          <div className="mb-12">
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6">
              The Problem We Saw:
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              In the mid-1990s, Jeff Camilleri was already an established real
              estate broker and banker in St. Louis. Through his work, he
              witnessed a troubling pattern: families facing difficult life
              transitions—elderly parents moving to nursing care, couples
              divorcing, heirs inheriting unwanted properties—were being taken
              advantage of by opportunistic investors who used high-pressure
              tactics and offered pennies on the dollar.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              These families weren't looking to maximize profit—they needed
              solutions:
            </p>
            <ul className="space-y-2 text-base text-muted-foreground mb-6 pl-6">
              <li>
                • Seniors who couldn't afford to repair homes before selling
              </li>
              <li>
                • Adult children overwhelmed by estate cleanouts after a
                parent's death
              </li>
              <li>
                • Divorcing couples who needed to split assets quickly without
                fighting
              </li>
              <li>
                • Homeowners facing foreclosure who needed help, not judgment
              </li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              But the "help" available was often predatory:
            </p>
            <ul className="space-y-2 text-base text-muted-foreground mb-6 pl-6">
              <li>
                • Investors who showed up uninvited after pulling probate
                records
              </li>
              <li>
                • Companies that manufactured urgency with "offer expires today"
                tactics
              </li>
              <li>• Lowball offers designed to exploit desperation</li>
              <li>• No explanation of pricing—just take it or leave it</li>
              <li>
                • Zero compassion for the emotional difficulty of these
                situations
              </li>
            </ul>
          </div>

          {/* Jeff saw a better way */}
          <div className="mb-12">
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6">
              Jeff saw a better way:
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Drawing on three decades of experience in real estate and banking,
              Jeff founded Realty Trust Company with a different model:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-secondary">
                    Transparent pricing
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    - Show people exactly how offers are calculated
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-secondary">
                    No pressure
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    - Give families time and space to make informed decisions
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-secondary">
                    Fair compensation
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    - Pay what properties are actually worth in as-is condition
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-secondary">
                    Full service
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    - Handle the overwhelming tasks (cleanouts, repairs,
                    coordination)
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-secondary">
                    Give back
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    - Turn a painful process into something meaningful through
                    charity
                  </span>
                </div>
              </div>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              What started as a small operation helping a few families each
              month has grown into St. Louis's most trusted cash home buying
              service—but we've never lost sight of our founding principles.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Values Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-8 text-center">
            Our Mission: Dignity, Compassion, and Community Impact
          </h2>

          <div className="bg-white p-8 rounded-3xl shadow-soft border border-border/50 mb-12">
            <p className="text-lg text-secondary italic leading-relaxed text-center">
              "To provide St. Louis homeowners facing difficult life transitions
              with fast, fair, and compassionate home buying solutions—while
              giving back to the community that has given us so much."
            </p>
          </div>

          <h3 className="text-2xl text-secondary font-serif font-semibold mb-8">
            Our Core Values:
          </h3>

          {/* Value 1: Dignity First */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl text-secondary font-semibold mb-3">
                  1. Dignity First
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Every person we work with is going through something
                  difficult. Whether it's the loss of a loved one, a marriage
                  ending, financial hardship, or health challenges, we never
                  forget that behind every property is a human story. We treat
                  everyone with the respect and dignity they deserve.
                </p>
                <div className="bg-cream p-6 rounded-2xl border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">
                    <span className="font-semibold text-secondary">
                      Real Example:
                    </span>{" "}
                    When we bought Mrs. Anderson's home after her husband's
                    death, she apologized for the house being "messy." We
                    assured her that our team has seen it all and more
                    importantly, we understood she'd been focused on caregiving,
                    not housekeeping. Her relief was palpable—she didn't need
                    judgment, she needed help.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Value 2: Transparency in Everything */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl text-secondary font-semibold mb-3">
                  2. Transparency in Everything
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  In an industry known for hidden fees and last-minute price
                  reductions, we do the opposite. Every offer includes detailed
                  pricing breakdowns showing comparable sales, repair estimates,
                  and our cost structure. If you decline our offer, you'll still
                  know exactly what your property is worth and why we offered
                  what we did.
                </p>
                <div className="bg-cream p-6 rounded-2xl border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">
                    <span className="font-semibold text-secondary">
                      Real Example:
                    </span>{" "}
                    The Martinez family was skeptical of our offer on their
                    inherited property. We sat down with all three siblings and
                    their attorney, walked through every comparable sale,
                    explained each repair estimate, and showed our full cost
                    breakdown. They ultimately accepted another offer that was
                    $8,000 higher—and we congratulated them. Two months later,
                    they referred their neighbor to us because they respected
                    our honesty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Value 3: No Pressure, Ever */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl text-secondary font-semibold mb-3">
                  3. No Pressure, Ever
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  We built a self-service online portal specifically to
                  eliminate pressure tactics. You upload information when
                  convenient, receive offers via email, and decide on your own
                  timeline. We don't call repeatedly, we don't manufacture
                  urgency, and we don't make you feel guilty for declining.
                </p>
                <div className="bg-cream p-6 rounded-2xl border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">
                    <span className="font-semibold text-secondary">
                      Real Example:
                    </span>{" "}
                    David received our offer and took three weeks to decide
                    while he got contractor bids and explored other options. We
                    never called to "follow up" or ask what he was thinking.
                    When he accepted (because repairs would cost more than he'd
                    gain), he thanked us for giving him space to make his own
                    informed decision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Value 4: Community Investment */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl text-secondary font-semibold mb-3">
                  4. Community Investment
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  We're not a national franchise extracting wealth from St.
                  Louis—we're St. Louis residents investing in St. Louis. Our
                  kids go to St. Louis schools. We shop at St. Louis businesses.
                  We serve on St. Louis civic boards. And through our charity
                  program, we've returned over $250,000 to local nonprofits.
                </p>
                <div className="bg-cream p-6 rounded-2xl border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">
                    <span className="font-semibold text-secondary">
                      Real Example:
                    </span>{" "}
                    When we buy homes in struggling neighborhoods, we don't just
                    flip them to out-of-state investors. We renovate them
                    properly, bring them up to code, and sell or rent them to
                    families who will actually live there—strengthening
                    neighborhoods rather than extracting value and leaving.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Value 5: Expertise Matters */}
          <div className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl text-secondary font-semibold mb-3">
                  5. Expertise Matters
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  With Jeff's 30+ years as a licensed broker and former banking
                  executive, we bring professional-level expertise to every
                  transaction. We understand complex title issues, probate law,
                  foreclosure prevention, Medicaid planning, and sophisticated
                  real estate finance. This isn't a side hustle—it's a career
                  built on knowledge and reputation.
                </p>
                <div className="bg-cream p-6 rounded-2xl border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">
                    <span className="font-semibold text-secondary">
                      Real Example:
                    </span>{" "}
                    When the Thompson estate had a title defect from a 1970s
                    easement that was never properly recorded, most cash buyers
                    would have walked away. Jeff's decades of experience meant
                    he knew exactly how to resolve it—working with a title
                    attorney to clear the issue and complete the sale. Other
                    buyers wouldn't have known how; we did.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-12 text-center">
            Not Your Typical "We Buy Houses" Company
          </h2>

          {/* Founded by a Licensed Professional */}
          <div className="mb-12">
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6">
              Founded by a Licensed Professional, Not a Flipper
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Jeff Camilleri isn't a real estate investor who took a weekend
              seminar—he's a Missouri licensed real estate broker with 30+ years
              of experience and a parallel career as a banking executive. His
              reputation in the St. Louis business community matters to him. He
              won't risk it with shady practices or unethical behavior.
            </p>
            <div className="bg-cream p-6 rounded-2xl">
              <h4 className="text-lg text-secondary font-semibold mb-4">
                Credentials:
              </h4>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>• Licensed Missouri Real Estate Broker (30+ years)</li>
                <li>
                  • 
Experienced Banking and Finance Executive
                </li>
                <li>
                  • Voted "Best Banker in St. Louis" by Small Business Monthly
                </li>
                <li>• City of Sunset Hills Finance Committee Member</li>
                <li>
                  • St. Louis Economic Development Partnership Finance Committee
                  Member
                </li>
                <li>
                  • Extensive experience in commercial lending, construction
                  financing, and real estate investment
                </li>
              </ul>
            </div>
          </div>

          {/* Family-Owned, Not Corporate */}
          <div className="mb-12">
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6">
              Family-Owned, Not Corporate
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              National "we buy houses" franchises are owned by private equity
              firms and venture capitalists who demand aggressive growth and
              maximum profits. We're a family business that values relationships
              over transactions.
            </p>
            <div className="bg-cream p-6 rounded-2xl">
              <h4 className="text-lg text-secondary font-semibold mb-4">
                What This Means:
              </h4>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>• Jeff personally reviews every single offer</li>
                <li>
                  • We can be flexible on terms because we're not answering to
                  corporate headquarters
                </li>
                <li>
                  • Repeat clients and referrals are our business model—not
                  aggressive marketing
                </li>
                <li>
                  • We measure success by families helped, not just deals closed
                </li>
              </ul>
            </div>
          </div>

          {/* Specialized in Complex Situations */}
          <div className="mb-12">
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6">
              Specialized in Complex Situations
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              While other buyers want easy deals in good neighborhoods, we've
              built expertise in the situations other companies avoid:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="text-lg text-secondary font-semibold mb-3">
                  Foreclosure Prevention:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Direct lender negotiations</li>
                  <li>• Short sale expertise</li>
                  <li>• Emergency 7-day closings</li>
                  <li>• Credit protection strategies</li>
                </ul>
              </div>

              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="text-lg text-secondary font-semibold mb-3">
                  Probate & Estate Sales:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Missouri probate court experience</li>
                  <li>• Multi-heir coordination</li>
                  <li>• Title issue resolution</li>
                  <li>• Remote executor support</li>
                </ul>
              </div>

              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="text-lg text-secondary font-semibold mb-3">
                  Divorce Home Sales:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Attorney coordination</li>
                  <li>• Fair neutral pricing</li>
                  <li>• Privacy protection</li>
                  <li>• Conflict reduction</li>
                </ul>
              </div>

              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="text-lg text-secondary font-semibold mb-3">
                  Nursing Home Transitions:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Medicaid planning coordination</li>
                  <li>• Estate cleanout services</li>
                  <li>• Charity donation program</li>
                  <li>• Urgent timeline accommodation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Charity Program Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-cream">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-8 text-center">
            The Charity Program That Changes Lives
          </h2>

          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            This isn't a marketing gimmick—it's central to who we are. When you
            sell to us, we handle the sale of unwanted belongings and donate
            100% of proceeds to a St. Louis charity you choose.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-soft text-center">
              <HandHeart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl text-secondary font-bold mb-2">100%</h4>
              <p className="text-base text-muted-foreground">
                All donated personal belongings to St. Louis charities
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft text-center">
              <Home className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl text-secondary font-bold mb-2">Many</h4>
              <p className="text-base text-muted-foreground">
                Typically full estate cleanouts completed
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl text-secondary font-bold mb-2">
                Numerous
              </h4>
              <p className="text-base text-muted-foreground">
                Different charities supported
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft text-center">
              <Package className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl text-secondary font-bold mb-2">Tons</h4>
              <p className="text-base text-muted-foreground">
                Items saved from landfills through donation
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-soft">
            <h4 className="text-xl text-secondary font-semibold mb-6 text-center">
              Popular Charities Supported:
            </h4>

            <div className="grid sm:grid-cols-2 gap-3 text-base text-muted-foreground">
              <div>• St. Louis Area Agency on Aging (SLAAA)</div>
              <div>• St. Patrick Center</div>
              <div>• Haven of Grace</div>
              <div>• St. Louis Children's Hospital</div>
              <div>• Stray Rescue of St. Louis</div>
              <div>• Alzheimer's Association St. Louis Chapter</div>
              <div>• Local churches and religious organizations</div>
              <div>• And many more chosen by sellers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-12 text-center">
            The People Behind Realty Trust Company
          </h2>

          {/* Jeff Camilleri */}
          <div className="mb-12">
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6">
              Jeff Camilleri - Founder & Principal Broker
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              With over 30 years of combined experience in real estate and
              banking, Jeff brings a unique perspective to cash home buying. His
              background as both a licensed broker and senior banking executive
              means he understands both sides of real estate transactions—the
              emotional family side and the complex financial/legal side.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-6">
              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="text-lg text-secondary font-semibold mb-4">
                  Professional Background:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Missouri Licensed Real Estate Broker (1995-Present)</li>
                  <li>
                    • 
Experienced Banking and Finance Executive
                  </li>
                  <li>
                    • 30+ years in commercial lending and construction financing
                  </li>
                  <li>
                    • Specialist in real estate loans, business lending, and
                    treasury management
                  </li>
                  <li>
                    • Maintains referral-only traditional real estate practice
                    for high-end buyers/sellers
                  </li>
                </ul>
              </div>

              <div className="bg-cream p-6 rounded-2xl">
                <h4 className="text-lg text-secondary font-semibold mb-4">
                  Community Involvement:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• City of Sunset Hills Finance Committee</li>
                  <li>
                    • St. Louis Economic Development Partnership Finance
                    Committee
                  </li>
                  <li>
                    • Active in various St. Louis civic and business
                    organizations
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
              <h4 className="text-lg text-secondary font-semibold mb-3">
                Why He Founded Realty Trust:
              </h4>
              <p className="text-base text-muted-foreground italic">
                "I saw too many vulnerable families being taken advantage of
                during difficult times. I knew there was a better way—one built
                on transparency, fair pricing, and genuine compassion. Realty
                Trust is my answer to the predatory practices I witnessed in
                this industry."
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl text-secondary font-semibold mb-3">
                Property Evaluators:
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our team reviews every property submission, researches
                comparable sales, estimates repair costs, and prepares detailed
                offers. Every team member has real estate experience and
                understands St. Louis neighborhoods intimately.
              </p>
            </div>

            <div>
              <h4 className="text-xl text-secondary font-semibold mb-3">
                Cleanout Specialists:
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                When we handle estate cleanouts, our team works with care and
                respect. They understand these aren't just "items"—they're
                lifetimes of memories. Family heirlooms are carefully set aside,
                sellable items are properly valued, and donations are made
                thoughtfully.
              </p>
            </div>

            <div>
              <h4 className="text-xl text-secondary font-semibold mb-3">
                Closing Coordinators:
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our coordinators work with title companies, attorneys, lenders,
                and all parties to ensure smooth closings. They're experienced
                in complex situations like probate sales, short sales, and
                multi-heir transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Process Philosophy Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-12 text-center">
            Why We Built a No-Pressure, Online-First Process
          </h2>

          {/* Traditional Approach We Reject */}
          <div className="mb-12">
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6">
              The Traditional Cash Buyer Approach (That We Reject):
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Most cash buyers operate on a high-volume, high-pressure model:
            </p>
            <ul className="space-y-2 text-base text-muted-foreground mb-4 pl-6">
              <li>
                • Pull public records to find "motivated sellers" (probate
                filings, foreclosure notices, divorce records)
              </li>
              <li>• Send mass mailers or knock on doors uninvited</li>
              <li>• Use aggressive sales tactics to get in the home</li>
              <li>• Make a lowball verbal offer with manufactured urgency</li>
              <li>• Pressure for immediate decision</li>
              <li>• Reduce price after "finding issues" during walkthrough</li>
            </ul>
            <p className="text-base text-secondary font-semibold">
              This model works for the buyer—not the seller.
            </p>
          </div>

          {/* Our Alternative Approach */}
          <div className="mb-12">
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6">
              Our Alternative Approach:
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We wanted to create a process that served the SELLER'S needs, not
              ours:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-soft">
                <h4 className="text-lg text-secondary font-semibold mb-3">
                  1. Self-Service Portal (Eliminate Pressure)
                </h4>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>
                    • No uninvited contact—sellers find us when they're ready
                  </li>
                  <li>
                    • Upload property info at midnight if that's convenient
                  </li>
                  <li>• No sales representative breathing down your neck</li>
                  <li>• Review offers privately without anyone watching</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-soft">
                <h4 className="text-lg text-secondary font-semibold mb-3">
                  2. Email-First Communication (Respect Boundaries)
                </h4>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>• Offers delivered via email, not pushy phone calls</li>
                  <li>• Detailed pricing breakdowns you can study</li>
                  <li>• Time to share with family, attorneys, or advisors</li>
                  <li>• We only call if you request it</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-soft">
                <h4 className="text-lg text-secondary font-semibold mb-3">
                  3. Transparent Pricing (Build Trust)
                </h4>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>• Show our math on every offer</li>
                  <li>• Explain comparable sales and repair estimates</li>
                  <li>• Disclose our costs and profit margin</li>
                  <li>
                    • If you decline, you still learned your property's true
                    value
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-soft">
                <h4 className="text-lg text-secondary font-semibold mb-3">
                  4. Flexible Timelines (Honor Your Needs)
                </h4>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>• Close in 7 days for emergencies</li>
                  <li>• Or take 90+ days if you need time</li>
                  <li>• Leaseback options available</li>
                  <li>• No manufactured urgency—ever</li>
                </ul>
              </div>
            </div>

            <p className="text-base text-secondary font-semibold mt-8">
              Result: Sellers make informed decisions without pressure, and we
              build long-term reputation rather than chase short-term deals.
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-soft text-center">
              <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl text-secondary font-bold mb-2">
                250+ Senior Transitions
              </h4>
              <p className="text-base text-muted-foreground">
                Families who sold homes for nursing care with dignity
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-soft text-center">
              <Repeat className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl text-secondary font-bold mb-2">
                70%+ Referral Rate
              </h4>
              <p className="text-base text-muted-foreground">
                Most business comes from past clients and their referrals—the
                ultimate endorsement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-12 text-center">
            Real Stories from Real St. Louis Families
          </h2>

          <div className="space-y-8">
            {/* The Williams Family */}
            <div className="bg-cream p-8 rounded-3xl shadow-soft border-l-4 border-primary">
              <h3 className="text-xl text-secondary font-semibold mb-4">
                The Williams Family - Three Generations of Trust
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We bought grandmother's home in 2010 when she moved to assisted
                living. Ten years later, the family called us again when
                grandfather needed nursing care. In 2023, they referred their
                neighbor who was going through divorce. Three transactions, one
                family, a decade of trust.
              </p>
            </div>

            {/* Robert */}
            <div className="bg-cream p-8 rounded-3xl shadow-soft border-l-4 border-primary">
              <h3 className="text-xl text-secondary font-semibold mb-4">
                Robert - From Foreclosure to Fresh Start
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed italic">
                "I was three months from losing my home to foreclosure. My
                credit was already trashed from missed payments, and I was
                sleeping terribly. Jeff's team stopped the sheriff sale, worked
                with my lender, and closed in 9 days. I got $11,000 at
                closing—enough for first month and security deposit on an
                apartment. A year later, I have a new job, I'm rebuilding
                credit, and I have hope again. They didn't just buy my
                house—they gave me my dignity back."
              </p>
            </div>

            {/* The Schneider Sisters */}
            <div className="bg-cream p-8 rounded-3xl shadow-soft border-l-4 border-primary">
              <h3 className="text-xl text-secondary font-semibold mb-4">
                The Schneider Sisters - An Inheritance Resolved
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed italic">
                "My sister and I inherited our parents' Kirkwood home. We live
                in different states, couldn't agree on anything, and the house
                needed $60K in work. After months of fighting, Realty Trust's
                detailed offer became our compromise. They explained every
                number so clearly that both our attorneys approved. The estate
                cleanout was incredible—they found our grandfather's WWII medals
                we thought were lost and donated $4,800 to our parents' church
                in their memory. They solved a problem and healed a
                relationship."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Commitment Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-cream">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-12 text-center">
            Deeply Rooted in St. Louis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* We Live Here */}
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <h3 className="text-xl text-secondary font-semibold mb-6">
                We Live Here:
              </h3>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li>• Our families are St. Louis families</li>
                <li>• Our kids attend St. Louis schools</li>
                <li>• We shop at St. Louis businesses</li>
                <li>• We vote in St. Louis elections</li>
                <li className="font-semibold text-secondary pt-2">
                  This isn't just where we work—it's our home
                </li>
              </ul>
            </div>

            {/* We Serve Here */}
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <h3 className="text-xl text-secondary font-semibold mb-6">
                We Serve Here:
              </h3>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li>
                  • City of Sunset Hills Finance Committee (Jeff Camilleri)
                </li>
                <li>
                  • St. Louis Economic Development Partnership (Jeff Camilleri)
                </li>
                <li>• Supporting local charities through donations program</li>
                <li>• Renovating properties to strengthen neighborhoods</li>
                <li>• Creating housing opportunities for St. Louis families</li>
              </ul>
            </div>

            {/* We Invest Here */}
            <div className="bg-white p-8 rounded-3xl shadow-soft">
              <h3 className="text-xl text-secondary font-semibold mb-6">
                We Invest Here:
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                When we buy properties, we:
              </p>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li>• Use St. Louis contractors for renovations</li>
                <li>
                  • Sell to owner-occupants when possible (not out-of-state
                  investors)
                </li>
                <li>• Bring properties up to code and improve neighborhoods</li>
                <li>
                  • Pay St. Louis property taxes and contribute to the tax base
                </li>
                <li>• Keep investment dollars circulating locally</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to You Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-12 text-center">
            What You Can Expect When Working With Realty Trust
          </h2>

          <div className="bg-cream p-8 rounded-3xl">
            <h3 className="text-2xl text-secondary font-semibold mb-8 text-center">
              We Promise:
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Honest Communication
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We'll tell you the truth even if it's not what you want to
                    hear. If we can't offer what you need, we'll tell you
                    directly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Fair Pricing
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Our offers reflect real market values in as-is condition. We
                    show our math and explain every number.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Professional Service
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Licensed, bonded, insured, and operating with the highest
                    ethical standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Respectful Treatment
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    You're going through something difficult. We won't add
                    stress with pressure tactics or judgment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Complete Transparency
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    No hidden fees, no surprise deductions, no bait-and-switch
                    tactics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Timely Response
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Offers within 24 hours. Questions answered promptly.
                    Closings on schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Confidential Handling
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Your situation is private. We don't gossip or discuss your
                    business with others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Experience Matters Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-12 text-center">
            Three Decades of Expertise Serving You
          </h2>

          <h3 className="text-2xl text-secondary font-semibold mb-8 text-center">
            What 30 Years Teaches You:
          </h3>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Every Situation Is Unique
                  </h4>
                  <p className="text-base text-muted-foreground">
                    We've seen thousands of transactions. No two are identical.
                    Cookie-cutter approaches don't work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4">
                <Search className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    The Details Matter
                  </h4>
                  <p className="text-base text-muted-foreground">
                    Title issues, lien priorities, probate procedures,
                    foreclosure timelines—expertise in these details saves you
                    time and money.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4">
                <Handshake className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Relationships Are Everything
                  </h4>
                  <p className="text-base text-muted-foreground">
                    We know the best title companies, probate attorneys, estate
                    sale companies, and contractors in St. Louis. These
                    relationships benefit you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Creative Solutions Exist
                  </h4>
                  <p className="text-base text-muted-foreground">
                    With three decades of experience, we've solved problems
                    other buyers would consider impossible. Age brings wisdom.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4">
                <Scale className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="text-lg text-secondary font-semibold mb-2">
                    Ethics Are Non-Negotiable
                  </h4>
                  <p className="text-base text-muted-foreground">
                    Jeff's reputation in the St. Louis business community took
                    30 years to build. He won't risk it for any transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-navy text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Let Our Experience Work For You
          </h2>
          <p className="text-lg sm:text-xl mb-10 opacity-90 leading-relaxed">
            For over 30 years, we've been helping St. Louis families through
            life's toughest transitions. Whether you're facing foreclosure,
            managing an estate, going through divorce, or caring for aging
            parents, we bring expertise, compassion, and integrity to every
            situation.
          </p>

          <Link to="/get-offer">
            <Button variant="gold" size="xl" className="mb-8">
              Get Your Free Cash Offer Today →
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

          <div className="bg-white/10 p-8 rounded-3xl max-w-3xl mx-auto">
            <p className="text-lg italic leading-relaxed mb-4">
              "We measure our success not by deals closed, but by families
              helped. After 500+ transactions, our greatest pride is the
              referrals from past clients who trusted us enough to recommend us
              to people they love. We'd be honored to help you too."
            </p>
            <p className="text-base font-semibold">
              — Jeff Camilleri & The Realty Trust Team
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
