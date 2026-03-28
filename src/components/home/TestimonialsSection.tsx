import { Star } from "lucide-react";

const testimonials = [
  {
    text: "After dealing with aggressive 'we buy houses' companies for months, Realty Trust was refreshing. I uploaded my photos at midnight, got an offer the next day, and took two weeks to decide. No pressure calls. They meant what they said.",
    author: "Ellen S.",
    location: "Brentwood",
    situation: "Inherited Property",
  },
  {
    text: "During our divorce, the last thing we needed was someone adding stress. Both of us reviewed the offer separately, discussed it on our own, and made the decision together. The online portal made a difficult situation so much easier.",
    author: "Michael P.",
    location: "Ballwin",
    situation: "Divorce",
  },
  {
    text: "When Mom needed to move to memory care, I was overwhelmed. Jeff's team handled the estate cleanout with such dignity—they even donated Mom's furniture to her favorite charity. I'll never forget that kindness.",
    author: "Sarah M.",
    location: "Kirkwood",
    situation: "Nursing Home Transition",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-10 lg:py-20 bg-secondary text-secondary-foreground">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-secondary-foreground mb-4">
            What St. Louis Homeowners Are Saying About Our No-Pressure Process
          </h2>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl shadow-card relative">
              {/* Quote mark */}
              <div className="absolute top-4 left-6 text-6xl font-serif text-sage/20 leading-none">
                "
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 text-gold relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6 italic relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-[#1c354e]  rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location} • {testimonial.situation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
