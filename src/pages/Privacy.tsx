import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="bg-gradient-hero py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-secondary mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>
      
      <section className="py-20 bg-cream">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-secondary mb-4">Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you request an offer, 
                contact us, or sign up for our newsletter. This may include your name, email address, 
                phone number, property address, and any other information you choose to provide.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services, 
                to communicate with you about your property and our services, and to send you 
                information you've requested.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share information with service providers who assist us in operating our 
                business, such as title companies and contractors, solely for the purpose of 
                completing your transaction.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                You may request access to, correction of, or deletion of your personal information 
                at any time by contacting us. You may also opt out of receiving marketing 
                communications from us.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at 
                info@realtytrustco.com or (314) 480-3800.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
