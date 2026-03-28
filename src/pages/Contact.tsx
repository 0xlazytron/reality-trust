/* eslint-disable no-useless-escape */
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Home } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast"; // Assuming standard shadcn/ui toast hook
import contactImage from "@/assets/images/compressed-ContactUs.webp";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  useEffect(() => {
    const title = "Contact Realty Trust Company | Sell Your House Fast in St. Louis";
    const description =
      "Reach out to Realty Trust Company in St. Louis to request a cash offer, ask questions, or start selling your house fast, as-is, and hassle-free today";
    const canonicalUrl = "https://realtytrustco.com/contact";

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
      "@type": "ContactPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Realty Trust Company",
        url: "https://realtytrustco.com/",
      },
    };

    const schemaId = "ld-json-contact";
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

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const allowedChars = /^[\d\s\-\(\)\+]*$/;
    if (allowedChars.test(value)) {
      setForm({ ...form, phone: value });
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const allowedChars = /^[a-zA-Z\s'-]*$/;
    if (allowedChars.test(value)) {
      setForm({ ...form, name: value });
    }
  };

  const validate = (): boolean => {
    const e: FormErrors = {};

    if (!form.name.trim()) {
      e.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      e.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!emailRegex.test(form.email.trim())) {
      e.email = "Please enter a valid email address";
    }

    const phoneDigits = form.phone.replace(/[\s\-\(\)\+]/g, "");
    if (!form.phone.trim()) {
      e.phone = "Phone number is required";
    } else if (phoneDigits.length < 10) {
      e.phone = "Phone number must be at least 10 digits";
    }

    if (!form.message.trim()) {
      e.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api-yu7d2q3xrq-uc.a.run.app/property/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
          variant: "default",
        });
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        // ✅ Extract backend error message if available
        const data = await response.json();
        toast({
          title: "Error",
          description: data?.message || "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const consultations = [
    {
      title: "Free Home Valuation",
      text: "Not sure what your house is worth? Jeff Camilleri offers free 30-minute consultations to discuss your property value and options.",
    },
    {
      title: "Free Foreclosure Prevention",
      text: "Facing foreclosure? Get a free confidential call to discuss your alternatives and timeline.",
    },
    {
      title: "Free Estate Planning",
      text: "Need to sell an inherited property? Free consultation to discuss probate, taxes, and your best options.",
    },
  ];

  return (
    <Layout>
      <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 min-h-[50vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactImage}
            alt="Contact Us Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-white mb-4 lg:mb-6 tracking-tight">
            Expert Guidance for All Your Property Needs
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            Whether you're looking for a cash offer or professional advice, we provide the clarity and resources needed to move forward.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 lg:p-12 rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.15)] text-secondary space-y-6"
          >
            <h2 className="text-3xl font-serif mb-6 text-center text-secondary font-bold">
              Contact Us
            </h2>

            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={handleNameChange}
                className="w-full p-4 rounded-xl border border-border/50 bg-muted/30 focus:ring-2 focus:ring-secondary outline-none transition shadow-sm"
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-4 rounded-xl border border-border/50 bg-muted/30 focus:ring-2 focus:ring-secondary outline-none transition shadow-sm"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handlePhoneChange}
                className="w-full p-4 rounded-xl border border-border/50 bg-muted/30 focus:ring-2 focus:ring-secondary outline-none transition shadow-sm"
              />
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full p-4 rounded-xl border border-border/50 bg-muted/30 focus:ring-2 focus:ring-secondary outline-none transition shadow-sm resize-none"
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              size="xl"
              disabled={isSubmitting}
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="flex flex-col justify-between space-y-6">
            {consultations.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg border border-border/30 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <h3 className="text-xl text-secondary font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            We're here to help you navigate your unique property situation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="tel:3144803800"
              className="flex items-center gap-3 text-xl font-medium hover:text-gold transition-colors"
            >
              <Phone className="w-6 h-6 text-gold" />
              (314) 480-3800
            </a>
            <Link
              to="/get-offer"
              className="flex items-center gap-3 text-xl font-medium hover:text-gold transition-colors"
            >
              <Home className="w-6 h-6 text-gold" />
              Get Your Cash Offer
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
