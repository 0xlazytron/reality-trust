import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoFull from "../../../public/main rtc logo opaque copy (1).svg";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground/80">
      <div className="container max-w-7xl mx-auto px-4 py-10 md:px-8 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Contact */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logoFull}
                alt="Realty Trust Company Logo"
                className="h-10 filter invert"
              />
            </Link>

            <p className="text-sm mb-4 text-secondary-foreground/70">
              Helping St. Louis homeowners sell their homes fast, fairly, and
              without pressure since 1994.
            </p>

            <div className="space-y-2 text-sm">
              {/* Phone */}
              <a
                href="tel:+13144803800"
                className="flex items-center gap-2 hover:text-gold transition cursor-pointer pointer-events-auto"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>314-480-3800</span>
              </a>

              {/* Email → Contact Us page */}
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-gold transition"
              >
                <Mail className="w-4 h-4 text-gold" />
                <span>Contact Us</span>
              </Link>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=St.+Louis+Missouri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span>St. Louis, Missouri</span>
              </a>
            </div>
          </div>

          {/* Situations We Help */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-secondary-foreground mb-4">
              Situations We Help
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/situations/nursing-home"
                  className="hover:text-gold transition-colors"
                >
                  Nursing Home Transitions
                </Link>
              </li>
              <li>
                <Link
                  to="/situations/inherited"
                  className="hover:text-gold transition-colors"
                >
                  Inherited Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/situations/divorce"
                  className="hover:text-gold transition-colors"
                >
                  Divorce & Separation
                </Link>
              </li>
              <li>
                <Link
                  to="/situations/foreclosure"
                  className="hover:text-gold transition-colors"
                >
                  Foreclosure Prevention
                </Link>
              </li>
              <li>
                <Link
                  to="/situations/relocation"
                  className="hover:text-gold transition-colors"
                >
                  Job Relocation
                </Link>
              </li>
              <li>
                <Link
                  to="/situations/as-is"
                  className="hover:text-gold transition-colors"
                >
                  Any As-Is Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-secondary-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/meet-jeff"
                  className="hover:text-gold transition-colors"
                >
                  Meet Jeff Camilleri
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-gold transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/charity"
                  className="hover:text-gold transition-colors"
                >
                  Charity Program
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-gold transition-colors"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-secondary-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/resources"
                  className="hover:text-gold transition-colors"
                >
                  Free Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-gold transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/get-offer"
                  className="hover:text-gold transition-colors"
                >
                  Get Your Free Offer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-4 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Realty Trust Company. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
