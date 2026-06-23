"use client";

import { type FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Check, ArrowRight } from "lucide-react";

const exportCategories = [
  "Spices",
  "Food Products",
  "Bamboo Salt",
  "Infrastructure Materials",
  "Home Appliances",
  "Electronics & Electricals",
  "Agro Products",
  "Handicrafts & Heritage",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title)
        ? prev.filter((s) => s !== title)
        : [...prev, title]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          services: selectedServices,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      form.reset();
      setSelectedServices([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050B1A] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.03) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Get In Touch
          </span>
          <h2 className="mt-4 font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
            Let&apos;s Talk Trade
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/35 sm:text-base">
            Ready to optimize your global supply chain? Reach out and our trade
            advisors will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          {/* Left Column — Office Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Office Card */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white">
                <MapPin size={14} />
                India Office — Tamil Nadu
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                Coimbatore · Palani · Dindigul
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white">
                  <Mail size={14} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">
                    Email
                  </p>
                  <a
                    href="mailto:ractyshexim@gmail.com"
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    ractyshexim@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white">
                  <Phone size={14} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">
                    Phone
                  </p>
                  <span className="text-sm text-white/60">+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Trust Note */}
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5">
              <p className="text-xs leading-relaxed text-white/60">
                &ldquo;We typically respond within 24 hours on business days. All
                inquiries are handled with strict confidentiality.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8 md:p-10"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-white">
                    Thank You
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-white/45">
                    Your message has been received. Our trade team will contact
                    you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  {/* Name + Email */}
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <label className="block">
                      <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                        Full Name <span className="text-white">*</span>
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="h-12 w-full border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/50 focus:bg-white/[0.06]"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                        Email Address <span className="text-white">*</span>
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        className="h-12 w-full border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/50 focus:bg-white/[0.06]"
                      />
                    </label>
                  </div>

                  {/* Phone */}
                  <div className="mt-4">
                    <label className="block">
                      <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                        Phone <span className="text-white">*</span>
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className="h-12 w-full border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder-white/20 outline-none transition focus:border-white/50 focus:bg-white/[0.06]"
                      />
                    </label>
                  </div>

                  {/* Services of Interest */}
                  <div className="mt-5">
                    <span className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      Services Interested In
                    </span>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                      {exportCategories.map((category) => {
                        const isSelected = selectedServices.includes(category);
                        return (
                          <button
                            key={category}
                            type="button"
                            onClick={() => toggleService(category)}
                            className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-xs font-medium transition-all duration-200 ${
                              isSelected
                                ? "border-white/40 bg-white/10 text-white"
                                : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/30 hover:bg-white/5"
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all ${
                                isSelected
                                  ? "border-white bg-white text-[#050B1A]"
                                  : "border-white/20 bg-transparent"
                              }`}
                            >
                              {isSelected && <Check size={10} strokeWidth={3} />}
                            </span>
                            {category}
                          </button>
                        );
                      })}
                    </div>
                  </div>



                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 flex h-13 w-full items-center justify-center gap-3 bg-white px-8 text-sm font-bold uppercase tracking-wider text-[#050B1A] shadow-lg shadow-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  {error && (
                    <p className="mt-4 text-center text-sm text-white/70">{error}</p>
                  )}
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
