import { useState } from "react";
import { Check, Shield, ChevronRight, ChevronLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { OwnerDetailsStep } from "@/components/OwnerDetailsStep";
import { PropertyDetailsStep } from "@/components/PropertyDetailsStep";
import { toast, Toaster } from "sonner";
import { db, uploadFile } from "@/firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  squareFeet: string;
  yearBuilt: string;
  condition: string;
  description: string;
  reasonForSelling: string;
  askingPrice: string;
  mortgageBalance: string;
  pictures: File[];
  videos: File[];
}

interface FormErrors {
  [key: string]: string;
}

export default function GetOffer() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    squareFeet: "",
    yearBuilt: "",
    condition: "",
    description: "",
    reasonForSelling: "",
    askingPrice: "",
    mortgageBalance: "",
    pictures: [],
    videos: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  // =====================
  // Validation Functions
  // =====================
  const validateStep1 = () => {
    const newErrors: FormErrors = {};
    const name = formData.name.trim();
    if (!name) newErrors.name = "Name is required";
    else if (name.length < 2) newErrors.name = "Name must be at least 2 characters";
    else if (!/^[a-zA-Z\s'-]+$/.test(name)) newErrors.name = "Name can only contain letters, spaces, apostrophes or dashes";

    const email = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email address";

    const phone = formData.phone.trim();
    if (!phone) newErrors.phone = "Phone number is required";
    else {
      const phoneDigitsOnly = phone.replace(/[\s\-\(\)]+/g, "");
      const phoneRegex = /^\+?\d{7,15}$/;
      if (!phoneRegex.test(phoneDigitsOnly))
        newErrors.phone = "Please enter a valid phone number (7-15 digits, may include +, -, parentheses)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: FormErrors = {};
    if (!formData.address.trim()) newErrors.address = "Address is required";

    const bedrooms = Number(formData.bedrooms);
    if (!formData.bedrooms) newErrors.bedrooms = "Bedrooms is required";
    else if (isNaN(bedrooms) || bedrooms <= 0) newErrors.bedrooms = "Please enter a valid number of bedrooms";

    const bathrooms = Number(formData.bathrooms);
    if (!formData.bathrooms) newErrors.bathrooms = "Bathrooms is required";
    else if (isNaN(bathrooms) || bathrooms <= 0) newErrors.bathrooms = "Please enter a valid number of bathrooms";

    const squareFeet = Number(formData.squareFeet);
    if (!formData.squareFeet) newErrors.squareFeet = "Square feet is required";
    else if (isNaN(squareFeet) || squareFeet <= 0) newErrors.squareFeet = "Please enter a valid square footage";

    const yearBuilt = Number(formData.yearBuilt);
    const currentYear = new Date().getFullYear();
    if (!formData.yearBuilt) newErrors.yearBuilt = "Year built is required";
    else if (isNaN(yearBuilt) || yearBuilt < 1800 || yearBuilt > currentYear)
      newErrors.yearBuilt = `Please enter a valid year between 1800 and ${currentYear}`;

    if (!formData.condition.trim()) newErrors.condition = "Property condition is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.reasonForSelling.trim()) newErrors.reasonForSelling = "Reason for selling is required";

    const askingPrice = Number(formData.askingPrice);
    if (!formData.askingPrice) newErrors.askingPrice = "Asking price is required";
    else if (isNaN(askingPrice) || askingPrice <= 0) newErrors.askingPrice = "Please enter a valid asking price";

    const mortgageBalance = Number(formData.mortgageBalance);
    if (!formData.mortgageBalance) newErrors.mortgageBalance = "Mortgage balance is required";
    else if (isNaN(mortgageBalance) || mortgageBalance < 0) newErrors.mortgageBalance = "Mortgage balance cannot be negative";

    if (!formData.pictures || formData.pictures.length === 0)
      newErrors.pictures = "Please upload at least 1 picture";

    if (!formData.videos || formData.videos.length === 0)
      newErrors.videos = "Please upload at least 1 video";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // =====================
  // Input & File Handlers
  // =====================
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFilesChange = (type: "pictures" | "videos", files: File[]) => {
    setFormData((prev) => ({ ...prev, [type]: [...prev[type], ...files] }));
  };

  const handleRemoveFile = (type: "pictures" | "videos", index: number) => {
    setFormData((prev) => {
      const updated = [...prev[type]];
      updated.splice(index, 1);
      return { ...prev, [type]: updated };
    });
  };

  // =====================
  // Navigation
  // =====================
  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
  };
  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  // =====================
  // Submit Handler
  // =====================
  const handleSubmit = async () => {
    if (!validateStep2()) return;
    setLoading(true);

    try {
      // 1️⃣ Upload pictures & videos
      const pictureUrls = await Promise.all(
        formData.pictures.map((file) => uploadFile("properties/pictures", file))
      );
      const videoUrls = await Promise.all(
        formData.videos.map((file) => uploadFile("properties/videos", file))
      );

      // 2️⃣ Prepare payload
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        squareFeet: Number(formData.squareFeet),
        yearBuilt: Number(formData.yearBuilt),
        condition: formData.condition.trim(),
        description: formData.description.trim(),
        reasonForSelling: formData.reasonForSelling.trim(),
        askingPrice: Number(formData.askingPrice),
        mortgageBalance: Number(formData.mortgageBalance),
        pictures: pictureUrls,
        videos: videoUrls,
        createdAt: serverTimestamp(), // Firestore server timestamp
      };

      // 3️⃣ Send to Backend API
      const response = await fetch(
        "https://api-yu7d2q3xrq-uc.a.run.app/property/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Backend API failed");

      // 4️⃣ Save to Firestore
      await addDoc(collection(db, "properties"), payload);

      // 5️⃣ Success toast
      toast.success("Property Submitted Successfully", {
        description:
          "We have received your property details. Our team will review and get back to you soon.",
        position: "top-right",
        duration: 5000,
      });

      // 6️⃣ Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        bedrooms: "",
        bathrooms: "",
        squareFeet: "",
        yearBuilt: "",
        condition: "",
        description: "",
        reasonForSelling: "",
        askingPrice: "",
        mortgageBalance: "",
        pictures: [],
        videos: [],
      });
      setStep(1);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    } catch (error) {
      console.error("Error submitting property:", error);
      toast.error("Submission Failed", {
        description:
          error instanceof Error
            ? error.message
            : "There was an error submitting your property. Please try again.",
        position: "top-right",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // =====================
  // JSX
  // =====================
  return (
    <Layout>
      <Toaster position="top-right" richColors />
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 sm:py-16 text-white">
          <div className="container max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Get Your Free Cash Offer</h1>
            <p className="text-lg text-slate-300 mb-8">Start your private property submission. No phone calls, no obligation.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {["No Phone Calls", "24-Hour Offers", "100% Private"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 sm:py-20">
          <div className="container max-w-3xl mx-auto px-4 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step === 1 ? "bg-slate-900 text-white" : "bg-green-500 text-white"}`}>1</div>
                  <span className="text-sm font-medium">Owner Details</span>
                </div>
                <div className="flex-1 h-1 mx-4 bg-slate-200"></div>
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step === 2 ? "bg-slate-900 text-white" : "bg-slate-300 text-slate-600"}`}>2</div>
                  <span className="text-sm font-medium">Property Details</span>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-8">
                {step === 1 && <OwnerDetailsStep formData={formData} errors={errors} onInputChange={handleInputChange} />}
                {step === 2 && <PropertyDetailsStep formData={formData} errors={errors} onInputChange={handleInputChange} onFilesChange={handleFilesChange} onRemoveFile={handleRemoveFile} />}

                {/* Navigation */}
                <div className="flex gap-4 pt-8 border-t border-slate-200">
                  <button
                    onClick={handlePrev}
                    disabled={step === 1 || loading}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${step === 1 ? "bg-slate-100 text-slate-400 cursor-not-allowed" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`}
                    aria-label="Previous Step"
                  >
                    <ChevronLeft className="w-4 h-4" />Previous
                  </button>

                  {step === 1 ? (
                    <button
                      onClick={handleNext}
                      className="ml-auto flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
                      aria-label="Next Step"
                    >
                      Next<ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="ml-auto px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
                      aria-label="Submit Property"
                    >
                      {loading ? "Submitting..." : "Submit Property"}
                    </button>
                  )}
                </div>
              </div>

              {/* Security Message */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">Your information is 100% private and secure. We never share or sell your data. No spam, no pressure calls.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
