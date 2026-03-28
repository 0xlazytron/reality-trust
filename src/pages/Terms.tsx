import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="bg-gradient-hero py-20 lg:py-28">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-secondary mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>
      
      <section className="py-20 bg-cream">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-secondary mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">Use of Website</h2>
              <p className="text-muted-foreground">
                This website is provided for informational purposes and to facilitate 
                communication with Realty Trust Company regarding potential property sales. 
                The content on this site does not constitute legal, financial, or real estate advice.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">No Guarantee</h2>
              <p className="text-muted-foreground">
                While we strive to provide accurate information, we make no guarantees about 
                the completeness, reliability, or accuracy of this information. Any action you 
                take based on the information on this website is strictly at your own risk.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">Property Offers</h2>
              <p className="text-muted-foreground">
                Any offer made through our website or portal is subject to property inspection, 
                title verification, and other standard due diligence procedures. Offers are 
                non-binding until a formal purchase agreement is signed by all parties.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Realty Trust Company shall not be liable for any damages arising from the use 
                of this website or reliance on any information provided herein.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Your continued use 
                of the website after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl text-secondary mb-4">Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at 
                info@realtytrustco.com or (314) 480-3800.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
