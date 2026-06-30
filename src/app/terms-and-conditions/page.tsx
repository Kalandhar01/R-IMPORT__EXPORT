"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText } from "lucide-react";
import Footer from "@/components/Footer";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4]">
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white/95 px-6 py-4 backdrop-blur-md sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden">
            <Image
              src="/logo.png"
              alt="RACTYSH EXIM PVT LTD"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight tracking-tight text-[#111827] sm:text-base">
              RACTYSH
            </span>
            <span className="text-[9px] font-medium tracking-[0.15em] text-[#6b7280] sm:text-[10px]">
              EXIM PVT LTD
            </span>
          </div>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-[#111827]/70 sm:flex">
          <Link href="/" className="transition hover:text-[#111827]">Home</Link>
          <Link href="/services" className="transition hover:text-[#111827]">Services</Link>
          <Link href="/#contact" className="transition hover:text-[#111827]">Contact</Link>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[#050B1A] px-6 pt-32 pb-20 sm:px-10 lg:px-16 lg:pt-40 lg:pb-28">
        <Link
          href="/"
          className="absolute left-6 top-24 z-10 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition hover:text-white sm:left-10 sm:top-28 lg:left-16"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-white/5 blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-[92rem]">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            <FileText size={14} />
            Legal
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
            These terms govern the use of RACTYSH EXIM PVT LTD&apos;s services
            and form a binding agreement between you and our organisation.
          </p>
          <p className="mt-3 text-sm text-white/30">
            Last Updated: June 15, 2025
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                1. Acceptance of Terms
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  By accessing or using the services of RACTYSH EXIM PVT LTD,
                  you agree to be bound by these Terms &amp; Conditions. If you
                  do not agree with any part of these terms, you must not use
                  our services.
                </p>
                <p>
                  These terms apply to all users of our platform, including
                  importers, exporters, logistics partners, and visitors to our
                  website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                2. Services Description
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  RACTYSH EXIM PVT LTD provides international trade services
                  including but not limited to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Import and export facilitation across multiple product
                    categories
                  </li>
                  <li>
                    Sourcing and supplier identification in global markets
                  </li>
                  <li>
                    Customs clearance and trade documentation management
                  </li>
                  <li>
                    Freight forwarding and logistics coordination
                  </li>
                  <li>
                    Supply chain consulting and trade advisory
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                3. User Obligations
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Provide accurate and complete information for all
                    transactions
                  </li>
                  <li>
                    Comply with all applicable international trade laws,
                    sanctions, and regulations
                  </li>
                  <li>
                    Ensure that goods being imported or exported meet all legal
                    and quality standards
                  </li>
                  <li>
                    Not use our services for any unlawful or prohibited
                    activities
                  </li>
                  <li>
                    Maintain the confidentiality of your account credentials
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                4. Limitation of Liability
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  RACTYSH EXIM PVT LTD shall not be liable for any indirect,
                  incidental, or consequential damages arising from the use of
                  our services. Our total liability is limited to the amount
                  paid for the specific service giving rise to the claim.
                </p>
                <p>
                  We do not guarantee uninterrupted or error-free service and
                  reserve the right to modify or discontinue services with
                  reasonable notice.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                5. Intellectual Property
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  All content, trademarks, logos, and intellectual property on
                  our website and platform are owned by RACTYSH EXIM PVT LTD
                  unless otherwise stated. You may not reproduce, distribute, or
                  create derivative works without our express written consent.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                6. Termination
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  We reserve the right to suspend or terminate access to our
                  services at any time for breach of these terms, suspicious
                  activity, or regulatory compliance reasons. Users will be
                  notified where practicable.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                7. Governing Law
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  These terms are governed by the laws of India. Any disputes
                  arising from these terms shall be subject to the exclusive
                  jurisdiction of the courts in Coimbatore, Tamil Nadu.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                8. Contact Information
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  For questions regarding these Terms &amp; Conditions, please
                  reach out to us:
                </p>
                <p className="text-[#111827]">
                  Email: ractyshexim@gmail.com
                  <br />
                  Phone: +91 98765 43210
                  <br />
                  Address: Coimbatore, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
