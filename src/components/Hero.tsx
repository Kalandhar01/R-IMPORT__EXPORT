"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Shield, Globe, ClipboardCheck } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

const slides = [
  {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1920&auto=format",
    title: "South Indian Spices Export",
    items: ["Pepper", "Cardamom", "Turmeric", "Export Packaging"],
  },
  {
    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=1920&auto=format",
    title: "Textiles & Garments",
    items: ["Cotton Fabrics", "Traditional Textiles", "Export-Quality Clothing"],
  },
  {
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1920&auto=format",
    title: "Bamboo Salt & Wellness",
    items: ["Premium Bamboo Salt", "Organic Wellness Products"],
  },
  {
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1920&auto=format",
    title: "Home Appliances Export",
    items: ["Kitchen Appliances", "Household Products", "Smart Home Devices"],
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format",
    title: "Global Shipping & Logistics",
    items: ["Container Ships", "International Ports", "Cargo Operations"],
  },
  {
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1920&auto=format",
    title: "Food Products Export",
    items: ["Rice", "Millets", "Coconut Products", "Agricultural Exports"],
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format",
    title: "Infrastructure & Industrial",
    items: ["Construction Materials", "Engineering Components", "Industrial Supplies"],
  },
];

const statsData = [
  { value: 100, suffix: "+", label: "Global Partners" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 1000, suffix: "+", label: "Successful Shipments" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const trustItems = [
  { icon: Shield, text: "Verified Global Suppliers" },
  { icon: Globe, text: "International Logistics Network" },
  { icon: ClipboardCheck, text: "Customs & Compliance Support" },
];

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 60);
      setHidden(sy > 120 && sy > lastScrollY.current);
      lastScrollY.current = sy;

      if (heroRef.current) {
        const scrolled = sy / window.innerHeight;
        heroRef.current.style.setProperty("--parallax-offset", `${scrolled * 30}px`);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
  }, []);

  useEffect(() => {
    if (!isPaused) startAutoPlay();
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, startAutoPlay]);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#050B1A]"
      style={{ "--parallax-offset": "0px" } as React.CSSProperties}
    >
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ transform: `translateY(var(--parallax-offset))` }}
              priority={i === 0}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
          </div>
        ))}

        {/* Dark Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1A]/80 via-[#050B1A]/60 to-[#050B1A]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/40 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Top gold accent line */}
      <div className="absolute left-0 right-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "bg-[#050B1A]/90 shadow-lg shadow-black/30 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex h-[72px] items-center justify-between sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden sm:h-14 sm:w-14">
                <Image
                  src="/logo.png"
                  alt="Ractysh Global Trade"
                  fill
                  sizes="56px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight tracking-tight text-white sm:text-lg">
                  RACTYSH
                </span>
                <span className="text-[10px] font-medium tracking-[0.15em] text-[#D4AF37] sm:text-[11px]">
                  Global Trade
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-10 md:flex">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative text-xs tracking-[0.15em] text-white/50 uppercase transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="/#contact"
                className="rounded-sm bg-[#D4AF37] px-5 py-2.5 text-xs font-bold tracking-[0.15em] text-[#050B1A] uppercase transition-all duration-300 hover:bg-[#E0C042]"
              >
                Get a Quote
              </Link>
            </div>

            <button
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white transition-all hover:border-white/25 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`fixed left-0 right-0 top-[72px] z-40 transition-all duration-300 sm:top-20 ${
            mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="mx-4 overflow-hidden rounded-xl border border-white/10 bg-[#050B1A]/95 backdrop-blur-xl">
            <div className="space-y-1 px-5 pb-5 pt-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-4 py-3.5 text-sm tracking-wider text-white/50 uppercase transition-all hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  href="/#contact"
                  className="block rounded-lg bg-[#D4AF37] px-5 py-3.5 text-center text-xs font-bold tracking-[0.15em] text-[#050B1A] uppercase shadow-lg shadow-[#D4AF37]/20"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-10 pt-24 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12 lg:gap-20">
          <div className="flex-1 pt-6 sm:pt-10">
            {/* Badge */}
            <div
              className={`mb-5 transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] text-[#D4AF37] uppercase backdrop-blur-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                Trusted Global Trade Partner
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`font-serif text-[clamp(2.2rem,8vw,4rem)] font-bold leading-[1.05] tracking-tight text-white transition-all duration-700 delay-100 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              Connecting Businesses<br className="hidden sm:block" /> Across{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8C84A] bg-clip-text text-transparent">
                Global Markets
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={`mt-4 max-w-xl text-sm leading-relaxed text-white/50 transition-all duration-700 delay-200 sm:text-base ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              We provide end-to-end sourcing, import, export, logistics, and international trade solutions for businesses worldwide.
            </p>

            {/* CTAs */}
            <div
              className={`mt-6 flex flex-col gap-3 transition-all duration-700 delay-300 sm:flex-row sm:gap-4 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Link
                href="/#contact"
                className="group flex h-14 items-center justify-center gap-2.5 rounded-sm bg-gradient-to-r from-[#D4AF37] to-[#E8C84A] px-8 text-sm font-bold tracking-[0.15em] text-[#050B1A] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/30 sm:h-[56px] sm:w-auto sm:px-10"
              >
                Start Trading
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="flex h-14 items-center justify-center gap-2.5 rounded-sm border border-white/20 px-8 text-sm font-bold tracking-[0.15em] text-white/70 uppercase backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:text-white sm:h-[56px] sm:w-auto sm:px-10"
              >
                Book Consultation
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className={`mt-6 flex flex-wrap gap-x-6 gap-y-2 transition-all duration-700 delay-[400ms] ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.text} className="inline-flex items-center gap-1.5 text-[11px] text-white/40">
                    <Icon className="h-3 w-3 text-[#D4AF37]/60" />
                    {item.text}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Slide Category Card */}
          <div
            className={`hidden items-end justify-center transition-all duration-700 delay-200 md:flex md:justify-end ${
              visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            <div className="w-full max-w-[280px] rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md sm:max-w-[300px] sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]/70">
                Current Export
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold leading-tight text-white sm:text-xl">
                {slides[currentSlide].title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {slides[currentSlide].items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/50">
                    <span className="h-1 w-1 rounded-full bg-[#D4AF37]/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-28 left-0 right-0 z-20 flex justify-center gap-2 sm:bottom-32">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentSlide
                ? "w-8 bg-[#D4AF37]"
                : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.04] bg-gradient-to-b from-transparent to-[#050B1A]/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
            {statsData.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                visible={statsVisible}
                delay={i * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  visible,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  visible: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const counted = useRef(false);

  useEffect(() => {
    if (!visible || counted.current) return;
    counted.current = true;
    const duration = 800;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div
      className={`rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-center backdrop-blur-sm transition-all duration-700 sm:px-4 sm:py-3 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-serif text-lg font-bold text-white sm:text-xl">
        {count}
        {suffix}
      </div>
      <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.15em] text-white/35 sm:text-[10px]">
        {label}
      </div>
    </div>
  );
}
