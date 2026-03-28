import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoFull from "../../../public/main rtc logo opaque copy.svg";

// === Links Data ===
const situationsLinks = [
  {
    title: "Nursing Home Transitions",
    href: "/situations/nursing-home",
    description: "Help for families with aging loved ones",
  },
  {
    title: "Inherited Properties",
    href: "/situations/inherited",
    description: "Manage estate properties stress-free",
  },
  {
    title: "Divorce & Separation",
    href: "/situations/divorce",
    description: "Sell your marital home with dignity",
  },
  {
    title: "Foreclosure Prevention",
    href: "/situations/foreclosure",
    description: "Stop foreclosure and protect your credit",
  },
  {
    title: "Job Relocation",
    href: "/situations/relocation",
    description: "Quick sales for job moves",
  },
  {
    title: "Financial Hardship",
    href: "/situations/financial-hardship",
    description: "Solutions when money is tight",
  },
  {
    title: "Any As-Is Property",
    href: "/situations/as-is",
    description: "Sell any property in any condition",
  },
];

const whyChooseLinks = [
  { title: "About Us", href: "/about", description: "Our story and mission" },
  {
    title: "Meet Jeff Camilleri",
    href: "/meet-jeff",
    description: "The founder behind Realty Trust",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "What our clients say",
  },
  {
    title: "Charity Program",
    href: "/charity",
    description: "Giving back to St. Louis",
  },
];

const resourcesLinks = [
  {
    title: "Free Guides & Resources",
    href: "/resources",
    description: "Helpful guides for homeowners",
  },
  { title: "FAQ", href: "/faq", description: "Common questions answered" },
];

// === Header Component ===
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // === Scroll to top when clicking any link ===
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-cream/95 backdrop-blur-md z-50 border-b border-forest/10">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-24 lg:h-24 xl:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={scrollToTop}
          >
            <img
              src={logoFull}
              alt="Realty Trust Company Logo"
              className="h-16 w-auto object-contain md:h-16 lg:h-18 xl:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Situations We Help */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDesktopDropdown("situations")}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <button
                className={cn(
                  "inline-flex items-center gap-1 bg-transparent hover:bg-primary/5 text-foreground font-medium rounded-md transition-colors",
                  "h-6 px-2 text-xs md:h-6 md:px-2 md:text-xs lg:h-6 lg:px-2 lg:text-xs xl:h-10 xl:px-4 xl:text-sm"
                )}
              >
                Situations We Help
                <ChevronDown
                  className={cn(
                    "w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200",
                    activeDesktopDropdown === "situations" && "rotate-180"
                  )}
                />
              </button>
              
              {/* Dropdown - Ab yeh pura area hover-able hai */}
              <div className={cn(
                "absolute left-0 top-full w-[500px] pt-2",
                activeDesktopDropdown === "situations" ? "block" : "hidden"
              )}>
                <div className="bg-cream rounded-lg shadow-lg border border-forest/10 p-4">
                  <div className="grid grid-cols-2 gap-1">
                    {situationsLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => {
                          setActiveDesktopDropdown(null);
                          scrollToTop();
                        }}
                        className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5 focus:bg-primary/5"
                      >
                        <div className="text-sm font-medium leading-none text-secondary">
                          {link.title}
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          {link.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <Link to="/how-it-works" onClick={scrollToTop}>
              <span className="group inline-flex h-6 w-max items-center justify-center rounded-md bg-transparent px-2 py-1 text-xs font-medium transition-colors hover:bg-primary/5 focus:bg-primary/5 focus:outline-none md:h-6 md:px-2 md:text-xs lg:h-6 lg:px-2 lg:text-xs xl:h-10 xl:px-4 xl:text-sm">
                How It Works
              </span>
            </Link>

            {/* Why Choose Us */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDesktopDropdown("why-choose")}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <Link to="/why-choose-us" onClick={scrollToTop}>
                <button
                  className={cn(
                    "inline-flex items-center gap-1 bg-transparent hover:bg-primary/5 text-foreground font-medium rounded-md transition-colors",
                    "h-6 px-2 text-xs md:h-6 md:px-2 md:text-xs lg:h-6 lg:px-2 lg:text-xs xl:h-10 xl:px-4 xl:text-sm"
                  )}
                >
                  Why Choose Us
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200",
                      activeDesktopDropdown === "why-choose" && "rotate-180"
                    )}
                  />
                </button>
              </Link>
              
              {/* Dropdown */}
              <div className={cn(
                "absolute left-0 top-full w-[350px] pt-2",
                activeDesktopDropdown === "why-choose" ? "block" : "hidden"
              )}>
                <div className="bg-cream rounded-lg shadow-lg border border-forest/10 p-4">
                  <div className="space-y-1">
                    {whyChooseLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => {
                          setActiveDesktopDropdown(null);
                          scrollToTop();
                        }}
                        className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5 focus:bg-primary/5"
                      >
                        <div className="text-sm font-medium leading-none text-secondary">
                          {link.title}
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          {link.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDesktopDropdown("resources")}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <button
                className={cn(
                  "inline-flex items-center gap-1 bg-transparent hover:bg-primary/5 text-foreground font-medium rounded-md transition-colors",
                  "h-6 px-2 text-xs md:h-6 md:px-2 md:text-xs lg:h-6 lg:px-2 lg:text-xs xl:h-10 xl:px-4 xl:text-sm"
                )}
              >
                Resources
                <ChevronDown
                  className={cn(
                    "w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200",
                    activeDesktopDropdown === "resources" && "rotate-180"
                  )}
                />
              </button>
              
              {/* Dropdown */}
              <div className={cn(
                "absolute left-0 top-full w-[350px] pt-2",
                activeDesktopDropdown === "resources" ? "block" : "hidden"
              )}>
                <div className="bg-cream rounded-lg shadow-lg border border-forest/10 p-4">
                  <div className="space-y-1">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => {
                          setActiveDesktopDropdown(null);
                          scrollToTop();
                        }}
                        className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/5 focus:bg-primary/5"
                      >
                        <div className="text-sm font-medium leading-none text-secondary">
                          {link.title}
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                          {link.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <Link to="/contact" onClick={scrollToTop}>
              <span className="group inline-flex h-6 w-max items-center justify-center rounded-md bg-transparent px-2 py-1 text-xs font-medium transition-colors hover:bg-primary/5 focus:bg-primary/5 focus:outline-none md:h-6 md:px-2 md:text-xs lg:h-6 lg:px-2 lg:text-xs xl:h-10 xl:px-4 xl:text-sm">
                Contact Us
              </span>
            </Link>

            {/* Download Free Guide */}
            <Link to="/download-guides" onClick={scrollToTop}>
              <span className="group inline-flex h-6 w-max items-center justify-center rounded-md bg-transparent px-2 py-1 text-xs font-medium transition-colors hover:bg-primary/5 focus:bg-primary/5 focus:outline-none md:h-6 md:px-2 md:text-xs lg:h-6 lg:px-2 lg:text-xs xl:h-10 xl:px-4 xl:text-sm">
                Download Free Guide
              </span>
            </Link>

            <Link to="/get-offer" onClick={scrollToTop}>
              <Button
                variant="hero"
                size="sm"
                className="ml-4 w-28 text-xs md:w-28 md:text-xs lg:w-28 lg:text-xs xl:w-44 xl:text-sm p-3"
              >
                Get Your Free Offer
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-cream border-t border-forest/10 max-h-[calc(100vh-5rem)] overflow-y-auto z-50">
          <div className="container px-4 py-6 space-y-4">
            <MobileDropdown
              title="Situations We Help"
              links={situationsLinks}
              onClose={() => setMobileMenuOpen(false)}
              isOpen={activeDropdown === "situations"}
              onToggle={() => handleDropdownToggle("situations")}
              scrollToTop={scrollToTop}
            />
            <Link
              to="/how-it-works"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
              className="block font-medium hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <MobileLinkWithDropdown
              title="Why Choose Us"
              mainHref="/why-choose-us"
              links={whyChooseLinks}
              onClose={() => setMobileMenuOpen(false)}
              isOpen={activeDropdown === "why-choose"}
              onToggle={() => handleDropdownToggle("why-choose")}
              scrollToTop={scrollToTop}
            />
            <MobileDropdown
              title="Resources"
              links={resourcesLinks}
              onClose={() => setMobileMenuOpen(false)}
              isOpen={activeDropdown === "resources"}
              onToggle={() => handleDropdownToggle("resources")}
              scrollToTop={scrollToTop}
            />
            <Link
              to="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
              className="block font-medium hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/download-guides"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
              className="block font-medium hover:text-primary transition-colors"
            >
              Download Free Guide
            </Link>
            <Link
              to="/get-offer"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              <Button variant="hero" size="lg" className="w-full mt-4 mb-8 p-3">
                Get Your Free Offer
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// === Mobile Dropdown Component ===
interface MobileDropdownProps {
  title: string;
  links: { title: string; href: string; description: string }[];
  onClose: () => void;
  isOpen: boolean;
  onToggle: () => void;
  scrollToTop: () => void;
}

function MobileDropdown({
  title,
  links,
  onClose,
  isOpen,
  onToggle,
  scrollToTop,
}: MobileDropdownProps) {
  return (
    <div className="border-forest/10 last:border-0">
      <button
        className="flex items-center justify-between w-full py-4 font-medium hover:text-primary transition-colors"
        onClick={onToggle}
      >
        {title}
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pl-4 pb-2 pt-1 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => {
                  onClose();
                  scrollToTop();
                }}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// === Mobile Link With Dropdown ===
interface MobileLinkWithDropdownProps {
  title: string;
  mainHref: string;
  links: { title: string; href: string; description: string }[];
  onClose: () => void;
  isOpen: boolean;
  onToggle: () => void;
  scrollToTop: () => void;
}

function MobileLinkWithDropdown({
  title,
  mainHref,
  links,
  onClose,
  isOpen,
  onToggle,
  scrollToTop,
}: MobileLinkWithDropdownProps) {
  return (
    <div className="border-forest/10 last:border-0">
      <div className="flex items-center justify-between">
        <Link
          to={mainHref}
          onClick={() => {
            onClose();
            scrollToTop();
          }}
          className="flex-1 py-4 font-medium hover:text-primary transition-colors"
        >
          {title}
        </Link>
        <button
          className="p-4 hover:text-primary transition-colors"
          onClick={onToggle}
        >
          <ChevronDown
            className={cn(
              "w-5 h-5 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </div>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pl-4 pb-2 pt-1 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => {
                  onClose();
                  scrollToTop();
                }}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}