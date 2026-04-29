"use client";

import { useEffect, useState } from "react";
import { domainOptions, deliveryModeOptions } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  deliveryMode: string;
  location: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  company: "",
  domain: "",
  candidates: "",
  deliveryMode: "",
  location: "",
};

export default function EnquireModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-enquire-modal", handleOpen);

    return () => {
      window.removeEventListener("open-enquire-modal", handleOpen);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.company.trim()) {
      nextErrors.company = "Company name is required.";
    }

    if (!formData.domain) {
      nextErrors.domain = "Select a domain.";
    }

    if (!formData.candidates.trim()) {
      nextErrors.candidates = "Enter number of candidates.";
    }

    if (!formData.deliveryMode) {
      nextErrors.deliveryMode = "Select mode of delivery.";
    }

    if (!formData.location.trim()) {
      nextErrors.location = "Location is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          countryCode: formData.countryCode,
          phone: formData.phone,
          domain: formData.domain,
          candidates: formData.candidates,
          deliveryMode: formData.deliveryMode,
          location: formData.location,
        }),
      });

      const result = (await response.json()) as { success: boolean; message: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit form.");
      }

      setStatus("success");
      setMessage(result.message || "Thanks! We'll be in touch soon.");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Submission failed.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 py-8">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-2xl text-slate-400 transition-colors hover:text-slate-600"
          aria-label="Close"
        >
          ×
        </button>
        <div className="grid min-h-[560px] lg:grid-cols-[1fr_1.1fr]">
          <div className="hidden h-full bg-slate-100 lg:block">
            <div className="flex h-full items-center justify-center">
              <div className="flex h-full w-full items-center justify-center bg-slate-200 text-sm font-semibold text-slate-500">
                Image Placeholder
              </div>
            </div>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Enquire Now</h2>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="w-full border-b border-slate-200 pb-3 text-sm text-slate-700 focus:border-[#1A73E8] focus:outline-none"
                />
                {errors.name ? (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full border-b border-slate-200 pb-3 text-sm text-slate-700 focus:border-[#1A73E8] focus:outline-none"
                />
                {errors.email ? (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                ) : null}
              </div>
              <div className="grid grid-cols-[90px_1fr] gap-3">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="border-b border-slate-200 pb-3 text-sm text-slate-700 focus:border-[#1A73E8] focus:outline-none"
                >
                  <option value="+91">+91</option>
                </select>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone"
                  className="border-b border-slate-200 pb-3 text-sm text-slate-700 focus:border-[#1A73E8] focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="w-full border-b border-slate-200 pb-3 text-sm text-slate-700 focus:border-[#1A73E8] focus:outline-none"
                />
                {errors.company ? (
                  <p className="mt-1 text-xs text-red-500">{errors.company}</p>
                ) : null}
              </div>
              <div>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  className="w-full border-b border-slate-200 pb-3 text-sm text-slate-700 focus:border-[#1A73E8] focus:outline-none"
                >
                  <option value="">Select Domain</option>
                  {domainOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.domain ? (
                  <p className="mt-1 text-xs text-red-500">{errors.domain}</p>
                ) : null}
              </div>
              <div>
                <input
                  name="candidates"
                  value={formData.candidates}
                  onChange={handleChange}
                  placeholder="Enter No. of candidates"
                  className="w-full border-b border-slate-200 pb-3 text-sm text-slate-700 focus:border-[#1A73E8] focus:outline-none"
                />
                {errors.candidates ? (
                  <p className="mt-1 text-xs text-red-500">{errors.candidates}</p>
                ) : null}
              </div>
              <div>
                <select
                  name="deliveryMode"
                  value={formData.deliveryMode}
                  onChange={handleChange}
                  className="w-full border-b border-slate-200 pb-3 text-sm text-slate-700 focus:border-[#1A73E8] focus:outline-none"
                >
                  <option value="">Select Mode of Delivery *</option>
                  {deliveryModeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.deliveryMode ? (
                  <p className="mt-1 text-xs text-red-500">{errors.deliveryMode}</p>
                ) : null}
              </div>
              <div>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Eg: Gurgaon, Delhi, India"
                  className="w-full border-b border-slate-200 pb-3 text-sm text-slate-700 focus:border-[#1A73E8] focus:outline-none"
                />
                {errors.location ? (
                  <p className="mt-1 text-xs text-red-500">{errors.location}</p>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 rounded-full bg-[#1A73E8] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#155CC4] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
              {message ? (
                <p
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    status === "success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
