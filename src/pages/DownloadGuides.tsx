import { Download, FileText, Home, Heart, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import guidesImage from "@/assets/images/DownloadGuides.jpg";
import { useEffect } from "react";

const guides = [
  {
    title: "Divorce Home Sale Guide",
    filename: "Divorce_Home_Sale_Guide 3.docx",
    description:
      "Navigate the complexities of selling your home during divorce proceedings. This comprehensive guide covers legal considerations, timing strategies, and how to protect your financial interests.",
    icon: <FileText className="w-8 h-8 transition-colors duration-300" />,
  },
  {
    title: "Foreclosure Prevention Guide",
    filename: "Foreclosure_Guide_Professional_Final 3.docx",
    description:
      "Stop foreclosure in its tracks with our professional guide. Learn about your options, rights, and the steps you can take to save your home or exit gracefully.",
    icon: <Home className="w-8 h-8 transition-colors duration-300" />,
  },
  {
    title: "Inherited Property Guide",
    filename: "Inherited_Property_Guide 3.docx",
    description:
      "Dealing with inherited property can be overwhelming. Our guide simplifies the process, covering everything from probate to selling strategies.",
    icon: <Key className="w-8 h-8 transition-colors duration-300" />,
  },
  {
    title: "Nursing Home Transition Guide",
    filename: "Nursing_Home_Transition_Guide_COMPLETE.docx",
    description:
      "When a loved one needs nursing home care, selling their home becomes necessary. This complete guide helps families navigate this emotional and financial transition.",
    icon: <Heart className="w-8 h-8 transition-colors duration-300" />,
  },
];

export default function DownloadGuides() {
  useEffect(() => {
    const title = "Download Guides to Sell Your House Fast St. Louis | Realty Trust";
    const description =
      "Access free guides from Realty Trust Company to sell your house fast in St. Louis. Learn how to get cash offers, sell as-is, and close stress-free.";
    const canonicalUrl = "https://realtytrustco.com/download-guides";

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

    const schemaId = "ld-json-download-guides";
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

  const handleDownload = (filename: string, title: string) => {
    const link = document.createElement("a");
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(`Downloaded: ${title}`);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-cream">
        {/* Hero Section with Responsive Height and Padding */}
        <section className="relative pt-24 pb-16 lg:pt-0 lg:pb-0 min-h-[60vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={guidesImage}
              alt="Background"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
          </div>

          <div className="container relative z-10 max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
              Free Property Guides
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Download our comprehensive guides to help you navigate challenging
              property situations with expert actionable advice.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-24 bg-cream">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              {guides.map((guide) => (
                <Card
                  key={guide.filename}
                  className="group relative flex flex-col h-full overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
                >
                  {/* Top Accent Line (Secondary Color) */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  <CardHeader className="pt-8 pb-4 flex-grow">
                    <div className="flex items-start gap-5">
                      {/* Icon with Gold/Secondary Hover */}
                      <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                        {guide.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-serif text-secondary mb-3">
                          {guide.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-base leading-relaxed">
                          {guide.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Button pushed to the bottom */}
                  <CardContent className="pb-8 mt-auto">
                    <Button
                      onClick={() => handleDownload(guide.filename, guide.title)}
                      className="w-full bg-secondary text-white hover:bg-secondary/90 hover:scale-[1.01] transition-all duration-300 shadow-md"
                      size="lg"
                    >
                      <Download className="w-5 h-5 mr-3" />
                      Download Free Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
