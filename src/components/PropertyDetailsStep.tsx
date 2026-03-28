// src/components/PropertyDetailsStep.tsx
import React from "react";
import { toast } from "sonner";

interface FormData {
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

interface PropertyDetailsStepProps {
  formData: FormData;
  errors: FormErrors;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onFilesChange: (type: "pictures" | "videos", files: File[]) => void;
  onRemoveFile: (type: "pictures" | "videos", index: number) => void;
}

export function PropertyDetailsStep({
  formData,
  errors,
  onInputChange,
  onFilesChange,
  onRemoveFile,
}: PropertyDetailsStepProps) {
  const MAX_FILE_SIZE = 80 * 1024 * 1024; // 80MB in bytes

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: "pictures" | "videos") => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      
      // Check file sizes only for videos
      if (type === "videos") {
        const oversizedFiles = files.filter(file => file.size > MAX_FILE_SIZE);
        if (oversizedFiles.length > 0) {
          toast.error("Video files too large", {
            description: "The following video files exceed the 80MB limit",
            position: "top-right",
            duration: 5000,
          });
          e.target.value = ""; // reset input
          return;
        }
      }
      
      onFilesChange(type, files);
      e.target.value = ""; // reset input
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Property Information</h2>

      {/* Address, Bedrooms, Bathrooms, etc. */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Property Address *</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={onInputChange}
          placeholder="123 Main St"
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${
            errors.address ? "border-red-500" : "border-slate-300"
          }`}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      {/* Grid for Bedrooms, Bathrooms, SquareFeet, YearBuilt */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["bedrooms", "bathrooms", "squareFeet", "yearBuilt"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")} *
            </label>
            <input
              type="number"
              name={field}
              value={(formData as any)[field]}
              onChange={onInputChange}
              placeholder={field === "yearBuilt" ? "2010" : "0"}
              className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${
                (errors as any)[field] ? "border-red-500" : "border-slate-300"
              }`}
            />
            {(errors as any)[field] && <p className="text-red-500 text-xs mt-1">{(errors as any)[field]}</p>}
          </div>
        ))}
      </div>

      {/* Condition */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Property Condition *</label>
        <select
          name="condition"
          value={formData.condition}
          onChange={onInputChange}
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${
            errors.condition ? "border-red-500" : "border-slate-300"
          }`}
        >
          <option value="">Select condition</option>
          <option value="fair">Fair</option>
          <option value="good">Good</option>
          <option value="excellent">Excellent</option>
        </select>
        {errors.condition && <p className="text-red-500 text-sm mt-1">{errors.condition}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Property Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onInputChange}
          rows={4}
          placeholder="Describe your property features..."
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition resize-none ${
            errors.description ? "border-red-500" : "border-slate-300"
          }`}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      {/* Reason for Selling */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Reason for Selling *</label>
        <textarea
          name="reasonForSelling"
          value={formData.reasonForSelling}
          onChange={onInputChange}
          rows={3}
          placeholder="Tell us why you're selling..."
          className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition resize-none ${
            errors.reasonForSelling ? "border-red-500" : "border-slate-300"
          }`}
        />
        {errors.reasonForSelling && <p className="text-red-500 text-sm mt-1">{errors.reasonForSelling}</p>}
      </div>

      {/* Asking Price & Mortgage */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Asking Price *</label>
          <input
            type="number"
            name="askingPrice"
            value={formData.askingPrice}
            onChange={onInputChange}
            placeholder="500000"
            className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${
              errors.askingPrice ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.askingPrice && <p className="text-red-500 text-sm mt-1">{errors.askingPrice}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Mortgage Balance *</label>
          <input
            type="number"
            name="mortgageBalance"
            value={formData.mortgageBalance}
            onChange={onInputChange}
            placeholder="350000"
            className={`w-full px-4 py-3 rounded-lg border bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition ${
              errors.mortgageBalance ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.mortgageBalance && <p className="text-red-500 text-sm mt-1">{errors.mortgageBalance}</p>}
        </div>
      </div>

      {/* Pictures Upload */}
<div>
  <label className="block text-sm font-medium text-slate-700 mb-2">
    Upload Pictures *
  </label>
  <input
    type="file"
    multiple
    accept="image/*"
    onChange={(e) => handleFileSelect(e, "pictures")}
    className="w-full"
  />
  {formData.pictures.length > 0 && (
    <div className="flex flex-wrap gap-2 mt-2">
      {formData.pictures.map((file, i) => (
        <div key={i} className="relative">
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            className="w-20 h-20 object-cover rounded"
          />
          <button
            type="button"
            onClick={() => onRemoveFile("pictures", i)}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )}
  {errors.pictures && (
    <p className="text-red-500 text-sm mt-1">{errors.pictures}</p>
  )}
</div>

{/* Videos Upload */}
<div>
  <label className="block text-sm font-medium text-slate-700 mb-2">
    Upload Videos *
  </label>
  <input
    type="file"
    multiple
    accept="video/*"
    onChange={(e) => handleFileSelect(e, "videos")}
    className="w-full"
  />
  {formData.videos.length > 0 && (
    <div className="flex flex-wrap gap-2 mt-2">
      {formData.videos.map((file, i) => (
        <div key={i} className="relative">
          <video
            src={URL.createObjectURL(file)}
            className="w-32 h-20 object-cover rounded"
            controls
          />
          <button
            type="button"
            onClick={() => onRemoveFile("videos", i)}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )}
  {errors.videos && (
    <p className="text-red-500 text-sm mt-1">{errors.videos}</p>
  )}
</div>

    </div>
  );
}
