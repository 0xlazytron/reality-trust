/* eslint-disable no-useless-escape */
import React from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  [key: string]: string;
}

interface OwnerDetailsStepProps {
  formData: FormData;
  errors: FormErrors;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function OwnerDetailsStep({
  formData,
  errors,
  onInputChange,
}: OwnerDetailsStepProps) {
  // Real-time input filters
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // only letters + space
    e.target.value = value;
    onInputChange(e);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d\+\-\(\)\s]/g, ""); // only numbers + symbols
    e.target.value = value;
    onInputChange(e);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Owner Information
        </h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleNameChange}
          placeholder="John Smith"
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${errors.name ? "border-red-500" : "border-slate-300"
            }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${errors.email ? "border-red-500" : "border-slate-300"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="(314) 555-0123"
            className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${errors.phone ? "border-red-500" : "border-slate-300"
              }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-200">
        <p className="text-sm text-slate-600 mb-6">
          We'll use this information to contact you with your free offer.
        </p>
      </div>
    </div>
  );
}
