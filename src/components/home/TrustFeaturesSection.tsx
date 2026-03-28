
import { Check} from "lucide-react";

const features = [
  {
    title: "Self-Service Online Portal",
    description: "Control the entire process from your computer or phone. Upload info when YOU want, review offers privately, decide on YOUR timeline.",
  },
  {
    title: "No Surprise Home Visits",
    description: "We don't need to \"eyeball\" your property to make an offer. Photos and videos work just fine. Want us to see it in person? You schedule it—we don't show up unannounced.",
  },
  {
    title: "Email-First Communication",
    description: "We send your offer via email—no phone tag, no voicemails, no \"just following up\" calls every day. Want to talk? You initiate when you're ready.",
  },
  {
    title: "Transparent Pricing Breakdown",
    description: "Our offers include a detailed explanation of how we arrived at the price. No mystery numbers, no \"take it or leave it\" attitude.",
  },
  {
    title: "Decline Gracefully",
    description: "Not interested? Click \"no thanks\" in your portal. We won't call to \"overcome objections\" or make you feel guilty. Your decision is respected, period.",
  },
  {
    title: "Local & Family-Owned, Not a Call Center",
    description: "We're not a national franchise with sales quotas. We're St. Louis neighbors who sleep better knowing we treated you with respect.",
  },
];

const charities = [
  "St. Louis Area Agency on Aging (SLAAA)",
  "St. Patrick Center",
  "Operation Food Search",
  "Stray Rescue of St. Louis",
  "Or any local charity close to your heart",
];

const testimonials = [
  {
    text: "After getting bombarded by aggressive investors sending letters and calling constantly, Realty Trust's online portal was a breath of fresh air. I uploaded photos on a Sunday night, got my offer Monday afternoon, and took two weeks to decide. Zero pressure. They actually meant it.",
    author: "Ellen S., Brentwood, MO",
  },
  {
    text: "During our divorce, the last thing we needed was some pushy salesperson adding stress. We both logged into the portal separately, reviewed the offer, and discussed it privately. When we had questions, they answered via email—no pressure to decide 'right now.' Made a terrible situation bearable.",
    author: "Sarah & Mike T., Webster Groves, MO",
  },
  {
    text: "I was skeptical of 'we buy houses' companies after reading horror stories online. But Realty Trust was completely different—transparent pricing, no hidden fees, and they let me take my time. The charity donation program was the cherry on top. Highly recommend.",
    author: "Robert K., Kirkwood, MO",
  },
];

export function TrustFeaturesSection() {
  return (
    <>
      {/* Why Trust Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              Why St. Louis Homeowners Trust Us (Without Feeling Pressured)
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 sm:p-6 bg-cream rounded-xl shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}