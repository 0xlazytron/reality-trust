import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Home, Users, DollarSign, CheckCircle, HelpCircle, Zap, Camera, Download, Mail, Phone } from "lucide-react";
import charityImage from "@/assets/images/Charity.jpg";
import { useEffect } from "react";
const charitiesData = [
  {
    category: "Senior & Aging Services",
    charities: [
      { name: "St. Louis Area Agency on Aging (SLAAA)", desc: "Provides meals, transportation, and support services for St. Louis seniors" },
      { name: "Alzheimer's Association - St. Louis Chapter", desc: "Research, care, and support for families affected by Alzheimer's" },
      { name: "Specific Nursing Home Foundations", desc: "Supporting the facility where your loved one resides" }
    ]
  },
  {
    category: "Homeless & Housing",
    charities: [
      { name: "St. Patrick Center", desc: "Comprehensive services for homeless individuals and families in St. Louis" },
      { name: "Haven of Grace", desc: "Housing and support for homeless pregnant women in St. Louis" },
      { name: "Peter & Paul Community Services", desc: "Homeless services and affordable housing" }
    ]
  },
  {
    category: "Children & Families",
    charities: [
      { name: "St. Louis Children's Hospital Foundation", desc: "Pediatric care and family support programs" },
      { name: "Boys & Girls Clubs of Greater St. Louis", desc: "Youth development and education" },
      { name: "Foster & Adoptive Care Coalition", desc: "Supporting children in foster care" }
    ]
  },
  {
    category: "Animal Welfare",
    charities: [
      { name: "Stray Rescue of St. Louis", desc: "Rescue and adoption of abandoned animals" },
      { name: "Humane Society of Missouri", desc: "Animal protection and welfare" }
    ]
  },
  {
    category: "Faith-Based Organizations",
    charities: [
      { name: "Your Church, Synagogue, or Religious Organization", desc: "Support your faith community" },
      { name: "Catholic Charities", desc: "Community support and social services" },
      { name: "Jewish Federation of St. Louis", desc: "Community and cultural services" },
      { name: "Local Ministry Programs", desc: "Various faith-based initiatives" }
    ]
  },
  {
    category: "Medical & Research",
    charities: [
      { name: "Siteman Cancer Center", desc: "Cancer research and patient care" },
      { name: "American Heart Association - St. Louis", desc: "Heart disease research and education" },
      { name: "MS Society of St. Louis", desc: "Multiple sclerosis research and support" },
      { name: "Disease-Specific Foundations", desc: "Any disease-specific foundation" }
    ]
  },
  {
    category: "Veterans",
    charities: [
      { name: "USO of Missouri", desc: "Support for military members and families" },
      { name: "Veterans Community Project", desc: "Housing and support for veterans" },
      { name: "Local VFW or American Legion Posts", desc: "Veteran community organizations" }
    ]
  },
  {
    category: "Education",
    charities: [
      { name: "Your Alma Mater", desc: "Your school or university" },
      { name: "St. Louis Public Schools Foundation", desc: "Supporting K-12 education" },
      { name: "College Scholarship Funds", desc: "Education funding for students" }
    ]
  }
];

const scenarios = [
  {
    title: "Nursing Home Moves",
    situation: "When elderly parents move to assisted living or nursing care, families must empty homes full of 40-60 years of belongings. This is emotionally exhausting during an already difficult time.",
    helps: [
      "We handle the entire cleanout (families don't have to sort through everything)",
      "Proceeds go to senior charities or the nursing home foundation",
      "Creates a positive legacy from a difficult transition",
      "Tax deduction helps offset nursing care costs"
    ],
    quote: "My mother's furniture sale through Realty Trust raised $4,200, which we donated to St. Louis Area Agency on Aging in her name. She was always generous in life—this felt like continuing her spirit of giving even after she couldn't be home anymore.",
    author: "Patricia M., Clayton"
  },
  {
    title: "Estate Sales After Death",
    situation: "When a loved one passes, heirs face the painful task of disposing of their belongings. It feels wrong to just throw things away, but estate sales can feel like vultures picking over your family's life.",
    helps: [
      "We respectfully handle belongings with dignity",
      "Donation to charity honors the deceased's memory",
      "Creates positive impact from loss",
      "Heirs can focus on grieving, not logistics"
    ],
    quote: "Dad volunteered at St. Patrick Center for 20 years. When he passed, having his furniture sale support that organization felt perfect—like he was still helping others even after death.",
    author: "David K., South City"
  },
  {
    title: "Divorce Situations",
    situation: "Divorcing couples often don't want the furniture, decor, or household items from their marital home. Taking it feels like carrying baggage into new lives.",
    helps: [
      "Neither party has to deal with belongings",
      "Donation creates something positive from a negative situation",
      "Both spouses can agree on charity (rare agreement during divorce)",
      "Tax benefit can be split or assigned to one party"
    ],
    quote: "Neither of us wanted the living room furniture we'd bought together—too many bad memories. Donating the sale proceeds to St. Louis Children's Hospital felt like creating something good from our failed marriage.",
    author: "Jennifer R., Ballwin"
  },
  {
    title: "Foreclosure Prevention",
    situation: "Homeowners losing homes to foreclosure often can't afford moving costs or storage. They're forced to abandon belongings or pay for hauling.",
    helps: [
      "We remove everything at no cost",
      "Sellers receive cash from home sale (after mortgage payoff)",
      "Charity donation provides tax benefit",
      "Creates dignity in a difficult situation"
    ],
    quote: "I was embarrassed about losing my house. Having the furniture sale benefit a charity I chose made me feel less like a failure—like something good came from it.",
    author: "Robert S., North County"
  }
];

const impactStories = [
  { amount: "$4,800", charity: "Alzheimer's Association", description: "Helen's family donated her estate sale proceeds to Alzheimer's research because she died from the disease. The charity sent a beautiful letter thanking them and sharing how the donation funded research." },
  { amount: "$3,200", charity: "Local Church", description: "When Father Michael's estate was sold, his furniture supported the church where he served for 40 years. The parish used funds for their food pantry." },
  { amount: "$5,500", charity: "St. Patrick Center", description: "Tom volunteered there weekly for 20 years. After his death, his family felt it was the perfect tribute to his service." },
  { amount: "$2,900", charity: "Stray Rescue", description: "Mrs. Anderson was a lifelong dog lover with no human heirs. Her furniture sale funded animal rescue in perpetuity." },
  { amount: "$6,100", charity: "St. Louis Children's Hospital", description: "A divorcing couple agreed on little, but both loved this charity. It was the one positive thing from their split." }
];

const faqs = [
  { q: "Do I have to participate in the charity program?", a: "No. It's completely optional. If you prefer to keep all belongings, remove them before closing, or have us simply dispose of everything, we can do that instead." },
  { q: "Can I choose any charity?", a: "Yes, any legitimate 501(c)(3) nonprofit. Local St. Louis charities, national organizations with local chapters, or causes anywhere in the country." },
  { q: "What if I want to keep some items but donate others?", a: "Perfect. Before closing, you identify what you want to keep. We remove those items or coordinate pickup. Everything else goes through the program." },
  { q: "How do you determine the value of items?", a: "We research comparable sales online, consult with estate sale professionals, and use our experience from 300+ cleanouts. We aim to get fair market value." },
  { q: "What if items don't sell?", a: "We donate usable items to St. Vincent de Paul, Salvation Army, or similar organizations. Nothing goes to waste if it can help someone." },
  { q: "Do I get to see what sold and for how much?", a: "Yes. We provide a detailed report showing every item, sale price, buyer, and date. Complete transparency." },
  { q: "Can the charity be in another city?", a: "Yes, though we encourage St. Louis charities since this is our community. But if your loved one's favorite charity is in another state, we support it." },
  { q: "Is there a minimum donation amount?", a: "No. Whether proceeds are $500 or $5,000, 100% goes to charity. Every bit helps." },
  { q: "What about items with sentimental value?", a: "We're very careful with these. Before we sell anything, you identify sentimental items. We set them aside for your review. You can visit to collect them, or we can ship them." },
  { q: "Can multiple family members choose different charities?", a: "Yes. If three siblings inherit a home, we can split proceeds among three different charities if everyone agrees." }
];

const testimonials = [
  { text: "I was dreading dealing with mom's belongings—60 years of accumulated stuff. Realty Trust handled everything and donated $4,200 to SLAAA in her name. It transformed a dreaded chore into a beautiful tribute. I can't thank them enough.", author: "Ellen S., Brentwood" },
  { text: "As executor of my uncle's estate, I had no idea what to do with all his tools, furniture, and belongings. None of the heirs wanted anything. Realty Trust's charity program was perfect—they sold everything, donated to St. Patrick Center where he volunteered, and gave us complete documentation for the estate. Professional and compassionate.", author: "David K., Phoenix, AZ" },
  { text: "Going through divorce, neither of us wanted the furniture from our marital home. Donating the sale proceeds to Children's Hospital felt like creating something good from a bad situation. It was healing, honestly.", author: "Sarah M., Chesterfield" }
];

export default function Charity() {
  useEffect(() => {
    const title = "Realty Trust Company Charity Program | Sell & Give Back";
    const description =
      "Give back with Realty Trust Company in St. Louis. Sell your house fast, donate proceeds from belongings to charity, and support local causes with every sale.";
    const canonicalUrl = "https://realtytrustco.com/charity";

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

    const schemaId = "ld-json-charity";
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
      <section className="relative pt-10 pb-10 lg:pt-20 lg:pb-20 min-h-[50vh] lg:min-h-[70vh] flex items-start lg:items-center justify-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src={charityImage}
            alt="Charity Program Background"
            className="w-full h-full object-cover"
          />
          {/* Neutral Dark Overlay (Not bluish) */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>

        {/* Content Container */}
        <div className="container relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block bg-gold/20 text-gold px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-gold backdrop-blur-sm">
            <Heart className="inline w-3.5 h-3.5 mr-2" />
            Our Charity Program
          </span>
          
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif text-white mb-4 font-bold leading-tight tracking-tight">
            Turn Your Home Sale Into a Gift for St. Louis
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
            When you sell your house to Realty Trust Company, we don't just buy your property—we help you create meaningful community impact. We sell your unwanted belongings and donate 100% of the proceeds to a St. Louis charity of your choice. Since launching this program, we've donated over $250,000 to local causes while helping families during difficult transitions.
          </p>
          
          <Link to="/get-offer">
            <Button variant="gold" size="xl" className="px-8 shadow-lg hover:shadow-gold/20 py-2 h-auto text-base">
              Sell Your Home & Give Back →
            </Button>
          </Link>
        </div>
      </section>
      {/* Stats Section removed per request */}

      {/* How It Works - From Belongings to Impact */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-4 text-center font-bold">From Your Belongings to Community Impact</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">The process is simple and transparent at every step.</p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-xl flex items-center justify-center text-2xl font-bold text-black shadow-lg flex-shrink-0">1</div>
                <h3 className="font-serif text-2xl text-secondary font-bold">You Sell Your Home to Realty Trust</h3>
              </div>
              <p className="text-muted-foreground">Whether you're moving to a nursing home, settling an estate, going through divorce, or facing foreclosure, you accept our cash offer and sell your St. Louis property to us.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-xl flex items-center justify-center text-2xl font-bold text-black shadow-lg flex-shrink-0">2</div>
                <h3 className="font-serif text-2xl text-secondary font-bold">We Carefully Sort Your Belongings</h3>
              </div>
              <p className="text-muted-foreground mb-6">Our professional team goes through the property room by room:</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold" />
                    Items Set Aside for You
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Family photos and albums</li>
                    <li>• Important documents and papers</li>
                    <li>• Heirlooms and sentimental items</li>
                    <li>• Jewelry and valuables</li>
                    <li>• Anything you specifically want to keep</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-gold" />
                    Items We Sell
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Furniture in good condition</li>
                    <li>• Appliances that work</li>
                    <li>• Tools and equipment</li>
                    <li>• China, crystal, and collectibles</li>
                    <li>• Household goods and decor</li>
                    <li>• Electronics</li>
                    <li>• Books, records, and media</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-gold" />
                    Items We Donate
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Clothing</li>
                    <li>• Linens and towels</li>
                    <li>• Kitchen items</li>
                    <li>• Items with low resale value</li>
                    <li>• To: St. Vincent de Paul, Salvation Army, or similar organizations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-3">Items Responsibly Disposed</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Broken or damaged items</li>
                    <li>• Non-usable materials</li>
                    <li>• Properly disposed of according to environmental regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-xl flex items-center justify-center text-2xl font-bold text-black shadow-lg flex-shrink-0">3</div>
                <h3 className="font-serif text-2xl text-secondary font-bold">Professional Sales Process</h3>
              </div>
              <p className="text-muted-foreground mb-4">We sell usable items through:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Estate sale companies</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Online marketplaces (Facebook, Craigslist, OfferUp)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Antique dealers and collectors</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Furniture consignment stores</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Specialty buyers (tools, electronics, etc.)</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">We maximize value so the charity receives the most possible.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-card p-8 rounded-2xl shadow-soft border-2 border-gold">
              <div className="flex items-start gap-4 mb-4">
               <div className="w-14 h-14 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-xl flex items-center justify-center text-2xl font-bold text-black shadow-lg flex-shrink-0">4</div>
                <h3 className="font-serif text-2xl text-secondary font-bold">100% of Proceeds Go to YOUR Chosen Charity</h3>
              </div>
              <p className="text-muted-foreground mb-4">Every dollar from selling your belongings goes to the St. Louis charity you select. Not 90%. Not "a portion." <span className="font-bold text-secondary">100%.</span></p>
              <p className="text-muted-foreground mb-4">We write the check directly to the charity and provide you with:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>Receipt for tax deduction purposes</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>Detailed list of items sold and prices</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>Photos of the donation check presentation (if desired)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>Thank you letter from the charity (they often send these)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-12 text-center font-bold">More Than a Business—A Mission</h2>

          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-2xl text-secondary mb-6 font-bold">The Problem We Saw</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">When families sell homes during difficult transitions, they face an overwhelming secondary burden: what to do with decades of accumulated belongings.</p>
              
              <h4 className="font-semibold text-secondary mb-4">The Traditional Options Are All Painful:</h4>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <span className="font-bold text-gold flex-shrink-0">•</span>
                  <div>
                    <span className="font-semibold text-secondary">Throw it away:</span>
                    <span className="text-muted-foreground"> Heartbreaking and wasteful—lifetimes ending up in landfills</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-gold flex-shrink-0">•</span>
                  <div>
                    <span className="font-semibold text-secondary">Host an estate sale:</span>
                    <span className="text-muted-foreground"> Strangers pawing through your loved one's things, haggling over prices</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-gold flex-shrink-0">•</span>
                  <div>
                    <span className="font-semibold text-secondary">Give to family:</span>
                    <span className="text-muted-foreground"> Siblings fighting over who gets what, or no one wants anything</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-gold flex-shrink-0">•</span>
                  <div>
                    <span className="font-semibold text-secondary">Donate it all:</span>
                    <span className="text-muted-foreground"> Takes days of work sorting, boxing, hauling, and making multiple donation trips</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">None of these options honor the life that was lived or help the community.</p>
            </div>

            <div className="bg-cream p-8 rounded-2xl">
              <h3 className="font-serif text-2xl text-secondary mb-6 font-bold">Our Solution</h3>
              <p className="text-muted-foreground mb-6">We created a charity program that:</p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Removes the burden from grieving or stressed families</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Honors the deceased's or seller's legacy through giving</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Supports St. Louis charities that need funding</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Keeps usable items out of landfills</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Provides tax benefits through charitable donation receipts</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Creates meaning from a painful process</span>
                </div>
              </div>
              <p className="text-muted-foreground italic mt-6"><span className="font-semibold">It's a win for everyone—except landfills.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Helps */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-12 text-center font-bold">Creating Impact Through Life's Transitions</h2>

          <div className="space-y-10">
            {scenarios.map((scenario, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-soft">
                <h3 className="font-serif text-2xl text-secondary mb-4 font-bold">{scenario.title}</h3>
                
                <div className="mb-6">
                  <p className="text-muted-foreground mb-3"><span className="font-semibold text-secondary">The Situation:</span> {scenario.situation}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-3">How Our Program Helps:</h4>
                  <ul className="space-y-2">
                    {scenario.helps.map((help, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{help}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-l-gold">
                  <p className="text-muted-foreground italic mb-3">"{scenario.quote}"</p>
                  <p className="font-semibold text-secondary">— {scenario.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charities We Support */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-4 text-center font-bold">You Choose Where Your Impact Goes</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Popular St. Louis charities we support—or choose any legitimate 501(c)(3) charity that's meaningful to you.</p>
          
          <div className="space-y-12 mb-12">
            {charitiesData.map((category, i) => (
              <div key={i}>
                <h3 className="font-semibold text-secondary text-lg mb-6 pb-3 border-b-2 border-gold">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.charities.map((charity, j) => (
                    <div key={j} className="bg-cream p-6 rounded-2xl">
                      <h4 className="font-semibold text-secondary mb-2">{charity.name}</h4>
                      <p className="text-muted-foreground text-sm">{charity.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-forest text-primary-foreground p-8 rounded-2xl text-center">
            <p className="text-lg font-semibold mb-2">Any 501(c)(3) Charity Welcome</p>
            <p>You can choose ANY legitimate 501(c)(3) charity. If you have a personal connection to a cause—whether it's local or nationwide—we support it.</p>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-12 text-center font-bold">Real Donations, Real Impact</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {impactStories.map((story, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-gold" />
                  <h3 className="font-semibold text-secondary">{story.amount} to {story.charity}</h3>
                </div>
                <p className="text-muted-foreground">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-8 text-center font-bold">Potential Tax Advantages</h2>

          <div className="space-y-8">
            <div className="bg-cream p-8 rounded-2xl">
              <h3 className="font-semibold text-secondary mb-4">Charitable Donation Deduction</h3>
              <p className="text-muted-foreground">The IRS allows deductions for charitable contributions. When we donate proceeds from your belongings, you receive documentation including:</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Receipt from the charity acknowledging the donation</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Itemized list of items sold and values</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Our detailed sales report</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-2xl">
              <h3 className="font-semibold text-secondary mb-4">Consult Your Tax Professional</h3>
              <p className="text-muted-foreground mb-4">We're not tax advisors, but we provide all documentation your CPA needs to determine if you qualify for deductions. Factors that affect deductibility:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>Whether you itemize deductions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>The fair market value of items donated</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>Your income and tax bracket</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">•</span>
                  <span>Estate tax considerations (for inherited properties)</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-2xl">
              <h3 className="font-semibold text-secondary mb-4">We Make Documentation Easy</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Professional photos of items before sale</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Detailed inventory lists</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Sales receipts and pricing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>Direct donation receipts from charities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-8 text-center font-bold">Why Our Charity Program Is Unique</h2>

          <div className="bg-card p-8 rounded-2xl shadow-soft">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-secondary mb-4">Other Cash Buyers:</h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>• Keep everything—all items become their profit</li>
                  <li>• OR charge you to haul it away</li>
                  <li>• OR leave it for you to deal with</li>
                  <li>• Zero community benefit</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-secondary mb-4">Traditional Estate Sale Companies:</h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>• Take 30-50% commission on sales</li>
                  <li>• You deal with strangers in your home</li>
                  <li>• Keep proceeds yourself or donate separately</li>
                  <li>• Can take weeks to coordinate</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-secondary mb-4">Donation-Only (Goodwill, etc.):</h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>• You do all the hauling and sorting</li>
                  <li>• No financial benefit to charity</li>
                  <li>• Tax deduction only (not cash for charity)</li>
                  <li>• Takes multiple trips and days of work</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-secondary mb-4 text-gold">Realty Trust's Program:</h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    We handle everything—you lift nothing
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    100% of proceeds go to charity (not 50%, not 70%—all of it)
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    Professional sales maximize value for charity
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    You choose the cause that matters to you
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    Complete documentation for taxes
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    Fast process—usually 2 weeks of closing
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    Meaningful impact—belongings become community help
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process in Detail */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-12 text-center font-bold">Exactly What Happens to Your Belongings</h2>

          <div className="space-y-8">
            <div className="bg-cream p-8 rounded-2xl">
              <h3 className="font-semibold text-secondary text-lg mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                Day of Closing
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>You receive cash for home sale</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>We take ownership and possession</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>You've already identified items you want to keep (if any)</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-2xl">
              <h3 className="font-semibold text-secondary text-lg mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                Days 1-3 After Closing
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Our team does initial walkthrough</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Photograph everything for documentation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Set aside items you requested</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Begin sorting: sell, donate, dispose</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-2xl">
              <h3 className="font-semibold text-secondary text-lg mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                Days 4-10
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>List valuable items online</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Contact specialty buyers (antiques, tools, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Coordinate with estate sale companies if needed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Process sales as items sell</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-2xl">
              <h3 className="font-semibold text-secondary text-lg mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                Days 11-14
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Finalize remaining sales</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Donate unsold but usable items</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Responsibly dispose of non-usable items</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Calculate total proceeds</span>
                </li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-2xl border-2 border-gold">
              <h3 className="font-semibold text-secondary text-lg mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                Day 15
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Cut check for 100% of proceeds to your chosen charity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Send you complete documentation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">•</span>
                  <span>Provide photos of check presentation if desired</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-forest text-primary-foreground p-8 rounded-2xl text-center">
              <p className="text-lg font-semibold">Entire process typically completes within 2-3 weeks of closing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-12 text-center font-bold">Common Questions About Our Charity Program</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-cream p-6 rounded-2xl">
                <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-5xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-12 text-center font-bold">What Clients Say About the Program</h2>

          <div className="space-y-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-soft border-l-4 border-l-gold">
                <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-secondary">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
<section className="py-12 sm:py-20 bg-gradient-navy text-primary-foreground">
  <div className="container max-w-4xl mx-auto px-4 lg:px-8 text-center">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-serif mb-4 font-bold">
      Sell Your Home, Support Your Cause
    </h2>
    <p className="text-base sm:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
      Join 300+ St. Louis families who've turned difficult transitions into community impact. Get a fair cash offer on your home and choose where your belongings create positive change.
    </p>
    
    {/* Call to Action Button */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <Link to="/get-offer">
        <Button variant="gold" size="xl">
          Get Your Free Offer & Give Back →
        </Button>
      </Link>
    </div>

    {/* Contact Info Box */}
    <div className="bg-primary-foreground/10 p-8 rounded-2xl mb-8 ">
      <h3 className="font-semibold text-primary-foreground mb-6">
        Have Questions? We're Here to Help
      </h3>
      <div className="grid  sm:grid-cols-2 gap-6 text-sm justify-items-center">
        {/* Phone */}
        <a
          href="tel:+13144803800"
          className="flex items-center gap-2 hover:text-gold transition"
        >
          <Phone className="w-5 h-5 text-gold" />
          <span >Call us: (314) 480-3800</span>
        </a>

        {/* Contact Us Link */}
        <Link
          to="/contact"
          className="flex items-center gap-2 hover:text-gold transition font-semibold"
        >
          <Mail className="w-5 h-5 text-gold" />
          <span>Contact Us</span>
        </Link>
      </div>
    </div>

    {/* Quote Section */}
    <div className="pt-8 border-t border-primary-foreground/20 text-center">
      <p className="italic text-primary-foreground/90 mb-3">
        "We believe every transaction should leave the world better than we found it. Your home sale can feed hungry families, rescue animals, support seniors, fund medical research, or help any cause you care about. Let's create impact together."
      </p>
      <p className="font-semibold text-primary-foreground">
        — The Realty Trust Team
      </p>
    </div>
  </div>
</section>

    </Layout>
  );
}
