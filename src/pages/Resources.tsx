import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, HelpCircle, BookOpen, Phone, Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import resourcesImage from "@/assets/images/compressed-Resources.webp";


const guides = [
  {
    title: "The Complete Guide to Selling Your St. Louis Home During Foreclosure",
    description: "A comprehensive 25-page guide covering Missouri foreclosure timelines, your legal rights, alternatives to foreclosure, how to sell before auction, credit impact comparison, and step-by-step instructions.",
    topics: [
      "Missouri foreclosure timeline and legal process",
      "Your rights as a homeowner facing foreclosure",
      "How to negotiate with lenders",
      "Short sale vs. foreclosure vs. cash sale comparison",
      "Credit score impact analysis",
      "Sample letters and documents",
      "Local St. Louis resources and attorneys"
    ],
  },
  {
    title: "Estate Settlement Checklist: Selling an Inherited Property in Missouri",
    description: "A practical 15-page guide and checklist for heirs selling inherited St. Louis properties, including probate process, tax implications, and step-by-step instructions.",
    topics: [
      "Missouri probate process explained",
      "Required legal documents and forms",
      "Tax implications (capital gains, estate taxes, step-up basis)",
      "Multi-heir coordination strategies",
      "Property preparation and cleanout guidance",
      "Title issue resolution",
      "Timeline expectations"
    ],
  },
  {
    title: "Divorce Home Sale Guide: Splitting Real Estate Assets in Missouri",
    description: "A detailed 20-page resource covering legal requirements, valuation methods, buyout options, and strategies for selling your marital home during divorce.",
    topics: [
      "Missouri divorce property division laws",
      "Home valuation methods for divorce",
      "Buyout calculations and options",
      "Tax implications of divorce home sales",
      "How to handle joint mortgages",
      "Dealing with an uncooperative spouse",
      "Sample settlement language",
      "St. Louis divorce attorney referrals"
    ],
  },
  {
    title: "Navigating Nursing Home Transitions: A Family's Guide to Home Sales",
    description: "A compassionate 18-page guide for families selling a parent's home to fund senior care, including Medicaid planning, estate cleanout, and emotional support.",
    topics: [
      "When to sell vs. when to keep the home",
      "Medicaid asset limits and look-back periods",
      "Working with elder law attorneys",
      "Estate cleanout strategies",
      "How to involve your loved one in decisions",
      "Leaseback options explained",
      "Emotional support resources",
      "St. Louis senior care resources"
    ],
  },
];

const quickLinks = [
  { icon: Download, title: "Downloadable Guides" },
  { icon: HelpCircle, title: "FAQs", href: "/faq" },
  { icon: BookOpen, title: "Articles" },
  { icon: Phone, title: "Local Resources" },
];

const glossary = [
  { term: "After Repair Value (ARV)", definition: "What a property would be worth in fully renovated, updated condition. Cash buyers use ARV to calculate offers." },
  { term: "As-Is Condition", definition: "Selling property in current condition without making repairs or improvements. Buyer accepts all defects." },
  { term: "Capital Gains Tax", definition: "Tax on profit from selling an asset. Primary residence has special exemptions; inherited property has different rules." },
  { term: "Deed in Lieu of Foreclosure", definition: "Voluntarily transferring property deed to lender to avoid foreclosure. Still damages credit but less severe." },
  { term: "Deficiency Judgment", definition: "When foreclosure sale doesn't cover full loan amount, lender can sometimes pursue borrower for difference. Missouri rules vary." },
  { term: "Encumbrance", definition: "Claim against property such as mortgage, lien, easement, or restriction that affects title." },
  { term: "Lis Pendens", definition: "Public notice that legal action (usually foreclosure) has been filed affecting property title." },
  { term: "Short Sale", definition: "Selling property for less than mortgage balance with lender's approval. Alternative to foreclosure." },
  { term: "Step-Up Basis", definition: "For inherited property, cost basis resets to market value at date of death, often eliminating capital gains tax." },
  { term: "Title Search", definition: "Examination of public records to verify legal ownership and identify any liens or claims against property." },
];

export default function Resources() {
  useEffect(() => {
    const title = "Free Resources to Sell Your House Fast | Realty Trust Co";
    const description =
      "Explore free guides from Realty Trust Company to sell your house fast in St. Louis. Get cash offer tips, as‑is selling help, and stress‑free home selling advice.";
    const canonicalUrl = "https://realtytrustco.com/resources";

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

    const schemaId = "ld-json-resources";
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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Open the modal and select guide
  const handleDownloadClick = (guide) => {
    setSelectedGuide(guide);
    setModalOpen(true);
  };

  // Handle email submission
  const handleEmailSubmit = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return setError("Email is required.");
  if (!emailRegex.test(email)) return setError("Enter a valid email.");

  // Get stored emails from localStorage
  const stored = JSON.parse(localStorage.getItem("guideEmails") || "[]");

  if (!stored.includes(email)) {
    stored.push(email);
    localStorage.setItem("guideEmails", JSON.stringify(stored));
  } 

  // Trigger download only (without opening new tab)
  const pdfTitle = selectedGuide.title.replace(/\s+/g, "_") + ".pdf";
  const link = document.createElement("a");
  link.href = `/pdfs/${pdfTitle}`; // path to your PDF
  link.download = pdfTitle; // filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Reset modal
  setEmail("");
  setError("");
  setModalOpen(false);
  setSelectedGuide(null);
};


  return (
    <Layout>
     {/* Resources Hero Section - Balanced & Compact */}
      <section className="relative pt-12 pb-12 lg:pt-20 lg:pb-20 min-h-[75vh] lg:min-h-[85vh] flex items-start lg:items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src={resourcesImage}
            alt="Resources Background"
            className="w-full h-full object-cover"
          />
          {/* Neutral Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>

        {/* Content Container */}
        <div className="container relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Badge with slight more margin */}
          <span className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold mb-5 border border-gold backdrop-blur-sm">
            <FileText className="w-4 h-4" /> Free Resources
          </span>
          
          {/* Heading - Slight more breathing room */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-white font-serif font-bold mb-5 leading-tight tracking-tight">
            Free Resources for St. Louis Homeowners <br className="hidden sm:block" /> Guides, Tools & Expert Advice
          </h1>
          
          {/* Paragraph - More max-width for better flow */}
          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Everything you need to make informed decisions about selling your St. Louis home. Download guides and access expert insights—no obligation required.
          </p>

          {/* Quick Links Cards - Slightly larger for better touch target but still compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {quickLinks.map((link, i) => (
              <Link
                key={i}
                to={link.href || "#"}
                className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-gold p-4 sm:p-6 rounded-2xl flex flex-col items-center transition-all duration-300 shadow-xl"
              >
                <link.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 text-white group-hover:text-secondary group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[10px] sm:text-sm text-center text-white group-hover:text-secondary uppercase tracking-wider">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-16 sm:py-24 bg-secondary text-secondary-foreground">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-14 text-center">Most Popular Resources</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {guides.map((guide, i) => (
              <div key={i} className="bg-secondary-foreground/10 p-10 rounded-3xl shadow-soft border border-gold/20">
                <h3 className="font-serif text-xl text-gold mb-3">{guide.title}</h3>
                <p className="text-secondary-foreground/90 mb-6">{guide.description}</p>

                <h4 className="font-semibold text-sm text-gold mb-3">What's Inside:</h4>
                <ul className="space-y-2 mb-8">
                  {guide.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                      <span className="mt-2 w-1.5 h-1.5 bg-gold rounded-full" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto border-gold text-gold hover:bg-gold hover:text-secondary"
                  onClick={() => handleDownloadClick(guide)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Free Guide (PDF)
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Email Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 max-w-full">
              <h3 className="text-xl font-semibold mb-4">
                Enter your email to download
              </h3>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-secondary p-3 rounded-lg border border-gray-300 mb-3 focus:ring-2 focus:ring-[#1c354e] outline-none"
              />
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
              <div className="flex justify-end gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setModalOpen(false);
                    setEmail("");
                    setError("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleEmailSubmit}
                  className="bg-[#1c354e] hover:bg-[#16304a]"
                >
                  Submit & Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="py-16 sm:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl text-secondary font-serif font-bold mb-16 text-center">
          Helpful St. Louis Resources & Contacts
        </h2>

        <div className="space-y-12">
          {/* Legal Assistance */}
          <div>
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6 pb-3 border-b-2 border-border">
              Legal Assistance
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Elder Law Attorneys */}
              <div>
                <h4 className="text-lg text-secondary font-semibold mb-4">
                  St. Louis Elder Law Attorneys
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>[Attorney Name] - Medicaid Planning Specialist</li>
                  <li>[Attorney Name] - Estate Planning & Probate</li>
                  <li>[Attorney Name] - Elder Law & Long-Term Care</li>
                </ul>
              </div>

              {/* Divorce Attorneys */}
              <div>
                <h4 className="text-lg text-secondary font-semibold mb-4">
                  St. Louis Divorce Attorneys
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>[Attorney Name] - Family Law Specialist</li>
                  <li>[Attorney Name] - Divorce & Property Division</li>
                  <li>[Attorney Name] - Collaborative Divorce</li>
                </ul>
              </div>

              {/* Real Estate Attorneys */}
              <div>
                <h4 className="text-lg text-secondary font-semibold mb-4">
                  St. Louis Real Estate Attorneys
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>[Attorney Name] - Real Estate Transactions</li>
                  <li>[Attorney Name] - Title Issues & Foreclosure</li>
                  <li>[Attorney Name] - Probate Real Estate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financial & Housing Counseling */}
          <div>
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6 pb-3 border-b-2 border-border">
              Financial & Housing Counseling
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* HUD-Approved Housing Counselors */}
              <div>
                <h4 className="text-lg text-secondary font-semibold mb-4">
                  HUD-Approved Housing Counselors in St. Louis
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
  <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
  <div>
    <span className="text-secondary font-medium">Beyond Housing</span>
    <span className="text-muted-foreground"> - </span>
    <a href="tel:+13145330600" className="text-primary hover:underline">(314) 533-0600</a>
  </div>
</li>

                  <li className="text-muted-foreground">St. Louis Agency on Training and Employment</li>
                  <li className="text-muted-foreground">Consumer Credit Counseling Service</li>
                </ul>
              </div>

              {/* Foreclosure Prevention Resources */}
              <div>
                <h4 className="text-lg text-secondary font-semibold mb-4">
                  St. Louis Foreclosure Prevention Resources
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <div>
                      <span className="text-secondary font-medium">Legal Services of Eastern Missouri</span>
                      <span className="text-muted-foreground"> - </span>
                      <a href="tel:3145344200" className="text-primary hover:underline">(314) 534-4200</a>
                    </div>
                  </li>
                  <li className="text-muted-foreground">Metropolitan St. Louis Equal Housing Opportunity Council</li>
                  <li className="text-muted-foreground">Missouri Housing Development Commission</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Senior Services */}
          <div>
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6 pb-3 border-b-2 border-border">
              Senior Services
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* SLAAA */}
              <div className="bg-cream p-6 rounded-2xl border border-border/50">
                <h4 className="text-base text-secondary font-semibold mb-2">
                  St. Louis Area Agency on Aging (SLAAA)
                </h4>
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:3146155555" className="text-sm text-primary hover:underline font-medium">
                    (314) 615-5555
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  Information, assistance, and services for seniors and caregivers
                </p>
              </div>

              {/* Alzheimer's Association */}
              <div className="bg-cream p-6 rounded-2xl border border-border/50">
                <h4 className="text-base text-secondary font-semibold mb-2">
                  Alzheimer's Association - St. Louis Chapter
                </h4>
                <div className="mb-2">
                  <span className="text-xs text-muted-foreground block mb-1">24/7 Helpline:</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href="tel:3148010011" className="text-sm text-primary hover:underline font-medium">
                      (314) 801-0011
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Support, resources, and care consultation
                </p>
              </div>

              {/* Senior Helpline */}
              <div className="bg-cream p-6 rounded-2xl border border-border/50">
                <h4 className="text-base text-secondary font-semibold mb-2">
                  Senior Helpline
                </h4>
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:3146152400" className="text-sm text-primary hover:underline font-medium">
                    (314) 615-2400
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  Free information and referral service
                </p>
              </div>
            </div>
          </div>

          {/* Charitable Organizations */}
          <div>
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6 pb-3 border-b-2 border-border">
              Charitable Organizations
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base text-secondary font-semibold mb-1">
                    St. Patrick Center - Homeless Services
                  </h4>
                  <a href="tel:3148020700" className="text-sm text-primary hover:underline font-medium">
                    (314) 802-0700
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base text-secondary font-semibold mb-1">
                    Haven of Grace - Pregnant Women's Services
                  </h4>
                  <a href="tel:3143552600" className="text-sm text-primary hover:underline font-medium">
                    (314) 355-2600
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base text-secondary font-semibold mb-1">
                    Stray Rescue of St. Louis - Animal Welfare
                  </h4>
                  <a href="tel:3147716121" className="text-sm text-primary hover:underline font-medium">
                    (314) 771-6121
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base text-secondary font-semibold mb-1">
                    St. Louis Children's Hospital Foundation
                  </h4>
                  <a href="tel:3144544400" className="text-sm text-primary hover:underline font-medium">
                    (314) 454-4400
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Government Resources */}
          <div>
            <h3 className="text-2xl text-secondary font-serif font-semibold mb-6 pb-3 border-b-2 border-border">
              Government Resources
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base text-secondary font-semibold mb-1">
                    St. Louis City Assessor's Office
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Property tax questions and appeals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base text-secondary font-semibold mb-1">
                    St. Louis County Assessor's Office
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Property assessments and tax information
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base text-secondary font-semibold mb-1">
                    Missouri State Tax Commission
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Property tax appeals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-base text-secondary font-semibold mb-1">
                    Missouri Department of Revenue
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Tax forms and information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Glossary Section */}
      <section className="py-16 sm:py-24 bg-secondary text-secondary-foreground">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-14 text-center">Real Estate Terms Glossary</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {glossary.map((item, i) => (
              <div key={i} className="bg-secondary-foreground/10 p-6 rounded-2xl shadow-soft border border-gold/20">
                <h3 className="text-sm font-semibold text-gold mb-1">{item.term}</h3>
                <p className="text-xs text-secondary-foreground/80">{item.definition}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-secondary">
              View Full Glossary →
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
