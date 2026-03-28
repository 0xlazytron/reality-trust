import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Check, Mail, Phone, Star, Monitor } from "lucide-react";


interface SituationPageProps {
  title: string;
  subtitle: string;
  description: string;
  btn: string;
  bgImage: string;
  trustBadges: string[];
  belowHeroCta?: {
    text: string;
    href: string;
  };
  challenges: {
    heading: string;
    subheading: string;
    reassurance?: string;
    blocks: {
      title: string;
      items: string[];
    }[];
  };

  solution: { title: string; steps: { title: string; description: string }[] };
  specialCircumstancesSection?: {
    heading: string;
    items: { title: string; description: string }[];
  };
  differentiatorsSection?: {
    heading: string;
    items: { title: string; description: string }[];
  };
  charityProgram?: {
    title: string;
    description: string;
    howItWorks: string[];
    popularDonations?: string[];
  };
  testimonials?: {
    name: string;
    location: string;
    rating: number;
    text: string;
  }[];
  faqs?: { question: string; answer: string }[];
  serviceAreas?: {
    title: string;
    areas: { category: string; locations: string }[];
    footer: string;
  };
  comparisonSection?: {
    title: string;
    leftTitle: string;
    rightTitle: string;
    leftPoints: string[];
    rightPoints: string[];
    footer: string;
  };
  urgentSection?: {
    title: string;
    timeline: string;
    warning: string;
    leftTitle: string;
    leftPoints: string[];
    rightTitle: string;
    contacts: {
      label: string;
      value: string;
      sub?: string;
      type: "phone" | "email" | "portal";
    }[];
    footer: string;
  };

  finalCtaSection?: {
    title: string;
    subtitle: string;
    buttonText: string;
    phone: string;
  };
}

export function SituationPageTemplate({
  title,
  description,
  btn,
  bgImage,
  trustBadges,
  belowHeroCta,
  challenges,
  solution,
  specialCircumstancesSection,
  differentiatorsSection,
  charityProgram,
  testimonials,
  faqs,
  comparisonSection,
  urgentSection,
  serviceAreas,
  finalCtaSection,
}: SituationPageProps) {
  return (
    <Layout>
  <section className="relative min-h-screen w-full flex flex-col justify-end lg:justify-center overflow-hidden bg-gray-900">
  {/* --- Background Image Layer --- */}
  <div className="absolute inset-0 z-0">
    <img
      src={bgImage}
      alt="Hero Background"
      className="w-full h-full object-cover"
      style={{
        objectPosition: "center center",
        filter: "brightness(0.7) contrast(1.01)",
      }}
    />
    {/* Gradient Overlay - Slightly stronger at bottom for text contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/80 lg:to-transparent"></div>
  </div>

  {/* --- Content Area --- */}
  {/* pt-24 clears header | pb-24 on mobile shifts the card up slightly to fit one screen */}
  <div className="container px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 pt-24 pb-24 lg:py-0">
    
    <div className="max-w-lg lg:max-w-xl">
      {/* COMPACT MIRROR BOX */}
      <div className="bg-white/60 backdrop-blur-md lg:bg-white/80 lg:backdrop-blur-xl p-5 sm:p-8 rounded-[2rem] border border-white/40 shadow-2xl">
        
        <div className="space-y-4">
          {/* Title - Kept text-secondary */}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-secondary leading-tight tracking-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-base text-gray-900 font-semibold leading-snug">
            {description}
          </p>

          {/* Button */}
          <div className="pt-1">
            <Link to="/get-offer" className="inline-block group/btn w-full sm:w-auto">
              <Button
                variant="hero"
                className="w-full sm:w-auto text-xs sm:text-sm px-6 py-3 bg-secondary text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {btn}
                <svg
                  className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/10">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2.5 py-1 bg-white/70 rounded-full border border-white/90 shadow-sm"
              >
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                  <Check className="w-2 h-2 text-white" strokeWidth={4} />
                </div>
                <span className="text-[9px] font-bold text-secondary uppercase tracking-tighter">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Optional: Simple indicator for desktop, hidden on mobile to keep focus on card */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block opacity-30">
    <div className="w-1 h-10 rounded-full bg-white/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary animate-bounce"></div>
    </div>
  </div>
</section>

      {belowHeroCta && (
        <section className="bg-card">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8 py-6">
            <Link
              to={belowHeroCta.href}
              className="block w-full rounded-2xl border border-border bg-cream px-6 py-5 text-center text-secondary font-semibold hover:bg-cream/80 transition-colors"
            >
              {belowHeroCta.text}
            </Link>
          </div>
        </section>
      )}



      {/* Understanding Section */}
      <section className="py-10 lg:py-20 bg-card">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mb-16 px-4">
  <h2 className="text-2xl sm:text-4xl text-secondary mb-4">
    {challenges.heading}
  </h2>
  <p className="text-md sm:text-lg text-muted-foreground">
    {challenges.subheading}
  </p>
</div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.blocks.map((challenge, index) => (
              <div key={index} className="bg-cream p-6 rounded-2xl">
                <h3 className="font-serif text-xl text-secondary mb-4">
                  {challenge.title}
                </h3>
                <ul className="space-y-3">
                  {challenge.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-rust mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {challenges.reassurance && (
            <p className="text-center text-base sm:text-lg text-muted-foreground mt-12 max-w-2xl mx-auto">
              {challenges.reassurance}
            </p>
          )}
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-10 lg:py-20 bg-cream">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl text-secondary mb-4">
              {solution.title}
            </h2>
          </div>

          <div className="space-y-6">
  {solution.steps.map((step, index) => (
    <div
      key={index}
      className="bg-card p-6 lg:p-8 rounded-2xl shadow-soft flex flex-col md:flex-row text-center sm:text-left gap-6 items-start"
    >
      {/* Updated gold background container */}
      <div className="w-14 h-14 bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-xl flex items-center justify-center mx-auto text-2xl font-bold text-black shadow-lg flex-shrink-0">
        {index + 1}
      </div>
      
      <div>
        <h3 className="font-serif text-lg sm:text-xl text-secondary mb-2">
          {step.title}
        </h3>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Comparison Section */}
      {comparisonSection && (
        <section className="py-10 lg:py-20 bg-cream">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl sm:text-4xl text-secondary mb-12 text-center">
              {comparisonSection.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Foreclosure Column */}
              <div className="bg-card p-6 lg:p-8 rounded-2xl border border-rust/20">
                <h3 className="font-serif text-xl text-rust mb-4">
                  {comparisonSection.leftTitle}
                </h3>

                <ul className="space-y-3">
                  {comparisonSection.leftPoints.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-rust mt-1">✕</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sell To Us Column */}
              <div className="bg-card p-6 lg:p-8 rounded-2xl border border-primary/20">
                <h3 className="font-serif text-xl text-primary mb-4">
                  {comparisonSection.rightTitle}
                </h3>

                <ul className="space-y-3">
                  {comparisonSection.rightPoints.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8 text-lg italic">
              {comparisonSection.footer}
            </p>
          </div>
        </section>
      )}

      {/* Special Circumstances */}
      {specialCircumstancesSection &&
        specialCircumstancesSection.items.length > 0 && (
          <section className="py-10 lg:py-20 bg-secondary text-secondary-foreground">
            <div className="container max-w-6xl mx-auto px-4 lg:px-8">
              <h2 className="text-2xl sm:text-4xl mb-10 text-center">
                {specialCircumstancesSection.heading}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {specialCircumstancesSection.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary-foreground/5 p-6 rounded-2xl border border-secondary-foreground/10"
                  >
                    <h3 className="font-serif text-xl text-gold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-secondary-foreground/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Differentiators */}
      {differentiatorsSection && differentiatorsSection.items.length > 0 && (
        <section className="py-10 lg:py-20 bg-card">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl sm:text-4xl text-secondary mb-12 text-center">
              {differentiatorsSection.heading}
            </h2>

            <div className="space-y-8">
              {differentiatorsSection.items.map((item, index) => (
                <div key={index} className="bg-cream p-6 lg:p-8 rounded-2xl">
                  <h3 className="font-serif text-xl text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Charity Program */}
      {charityProgram && (
        <section className="py-10 lg:py-20 bg-[#1c354e] text-primary-foreground">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl sm:text-4xl mb-4 text-center">
              {charityProgram.title}
            </h2>
            <p className="text-center text-primary-foreground/90 mb-12 text-lg max-w-3xl mx-auto">
              {charityProgram.description}
            </p>

            <div className="bg-primary-foreground/10 p-6 lg:p-8 rounded-2xl mb-8 backdrop-blur-sm">
              <h3 className="font-serif text-xl mb-6 text-center">
                How It Works:
              </h3>
              <ol className="space-y-4">
                {charityProgram.howItWorks.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 text-secondary font-bold">
                      {index + 1}
                    </span>
                    <span className="text-primary-foreground/90 pt-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {charityProgram.popularDonations &&
              charityProgram.popularDonations.length > 0 && (
                <div className="bg-primary-foreground/10 p-6 lg:p-8 rounded-2xl backdrop-blur-sm">
                  <h3 className="font-serif text-xl mb-6 text-center">
                    Popular charities our clients support:
                  </h3>
                  <ul className="space-y-3">
                    {charityProgram.popularDonations.map((donation, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                        <span className="text-primary-foreground/90">
                          {donation}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <p className="text-center text-primary-foreground/90 mt-8 text-lg italic">
              This transforms a painful task into something positive—your
              parent's belongings help other seniors in St. Louis.
            </p>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-10 lg:py-20 bg-cream">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl sm:text-4xl text-secondary mb-12 text-center">
              Stories from St. Louis Heirs We've Helped
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-6 lg:p-8 rounded-2xl shadow-soft"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-secondary font-semibold">
                    — {testimonial.name}, {testimonial.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-10 lg:py-20 bg-card">
          <div className="container max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl sm:text-4xl text-secondary mb-12 text-center">
              Common Questions About Selling Inherited Property in St. Louis
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-cream p-6 rounded-2xl">
                  <h3 className="font-serif text-lg text-secondary mb-3">
                    Q: {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A: {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas */}
      {serviceAreas && (
        <section className="py-10 lg:py-20 bg-cream">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl sm:text-4xl text-secondary mb-12 text-center">
              {serviceAreas.title}
            </h2>
            <div className="space-y-6">
              {serviceAreas.areas.map((area, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl">
                  <h3 className="font-serif text-lg text-secondary mb-3">
                    {area.category}:
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.locations}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-lg">
              {serviceAreas.footer}
            </p>
          </div>
        </section>
      )}

      {/* Urgent Action Section */}
      {urgentSection && (
        <section className="py-10 lg:py-20 bg-secondary text-secondary-foreground">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl sm:text-4xl text-center mb-6">
              {urgentSection.title}
            </h2>

            <p className="text-center text-secondary-foreground/80 max-w-3xl mx-auto mb-12">
              {urgentSection.timeline}
              <br />
              {urgentSection.warning}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left */}
              <div className="bg-secondary-foreground/5 p-6 lg:p-8 rounded-2xl border border-secondary-foreground/10">
                <h3 className="font-serif text-xl text-gold mb-4">
                  {urgentSection.leftTitle}
                </h3>

                <ul className="space-y-3 text-secondary-foreground/90">
                  {urgentSection.leftPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold mt-1">✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="bg-secondary-foreground/5 p-6 lg:p-8 rounded-2xl border border-secondary-foreground/10">
                <h3 className="font-serif text-xl text-gold mb-4">
                  {urgentSection.rightTitle}
                </h3>

                <ul className="space-y-4 text-white">
                  {urgentSection.contacts.map((c, i) => {
                    const Icon =
                      c.type === "phone"
                        ? Phone
                        : c.type === "email"
                        ? Mail
                        : Monitor;

                    const isLink =
                      c.type === "phone"
                        ? `tel:${c.value}`
                        : c.type === "email"
                        ? `mailto:${c.value}`
                        : "/get-offer";

                    return (
                      <li key={i}>
                        <Link
                          to={isLink}
                          className="flex items-start gap-3 hover:text-gold transition-colors"
                        >
                          <Icon className="w-5 h-5 mt-0.5 text-gold group-hover:text-gold" />
                          <div>
                            <strong>{c.label}:</strong> {c.value}
                            {c.sub && (
                              <div className="text-white/70 group-hover:text-gold/80 text-sm">
                                {c.sub}
                              </div>
                            )}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <p className="text-center text-gold mt-10 text-lg font-semibold">
              {urgentSection.footer}
            </p>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {finalCtaSection && (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 bg-[#1c354e] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container max-w-6xl mx-auto px-4 lg:px-8 text-center relative z-10">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c354e] mb-6 leading-tight">
              {finalCtaSection.title}
            </h2>

            {/* Subtitle */}
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
              {finalCtaSection.subtitle}
            </p>

            {/* CTA Button */}
            <Link to="/get-offer">
              <Button
                variant="hero"
                size="xl"
                className="mb-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {finalCtaSection.buttonText}
              </Button>
            </Link>

            {/* Contact Boxes */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Phone */}
              {finalCtaSection.phone && (
                <a
                  href="tel:+13144803800"
                  className="group bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover:border-[#1c354e]/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold/60 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Phone className="w-7 h-7 text-secondary" />
                    </div>

                    {/* Content */}
                    <div className="text-center sm:text-left">
                      {/* DYNAMIC TEXT FROM finalCtaSection.phone */}
                      <div
                        className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: finalCtaSection.phone,
                        }}
                      />
                    </div>
                  </div>
                </a>
              )}

              {/* Contact Us */}
              <Link
                to="/contact"
                className="group bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover:border-[#1c354e]/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold/60 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Mail className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-[#1c354e]  mb-1 text-base sm:text-lg">
                      Contact Us
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
