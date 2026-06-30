"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield } from "lucide-react";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
          <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-white/5 blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />
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
            <Shield size={14} />
            Legal
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
            RACTYSH EXIM PVT LTD is committed to protecting the privacy and
            confidentiality of your personal information. This policy outlines
            how we collect, use, store, and safeguard your data.
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
                1. Information We Collect
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  We collect information you voluntarily provide when you
                  interact with our services, including:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Personal identification details such as name, email address,
                    phone number, and business address
                  </li>
                  <li>
                    Company information including business registration details,
                    trade licenses, and import/export documentation
                  </li>
                  <li>
                    Financial information necessary for processing transactions,
                    invoices, and trade financing
                  </li>
                  <li>
                    Communication records including emails, messages, and call
                    logs related to your trade inquiries
                  </li>
                  <li>
                    Technical data including IP address, browser type, and usage
                    patterns when you visit our website
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                2. How We Use Your Information
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  RACTYSH EXIM PVT LTD uses collected information for the
                  following purposes:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Processing and managing import, export, and logistics
                    transactions
                  </li>
                  <li>
                    Communicating with you regarding shipments, customs
                    clearance, and trade documentation
                  </li>
                  <li>
                    Complying with international trade laws, sanctions
                    screening, and regulatory obligations
                  </li>
                  <li>
                    Improving our services, website experience, and customer
                    support
                  </li>
                  <li>
                    Sending market insights, trade updates, and promotional
                    materials with your consent
                  </li>
                  <li>
                    Fraud prevention, risk assessment, and dispute resolution
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                3. Data Sharing & Disclosure
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  We may share your information with trusted third parties
                  strictly for operational purposes:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Customs authorities, port authorities, and regulatory bodies
                    for trade compliance
                  </li>
                  <li>
                    Shipping lines, freight forwarders, and logistics partners
                    for cargo movement
                  </li>
                  <li>
                    Financial institutions and insurance providers for trade
                    finance and coverage
                  </li>
                  <li>
                    Legal advisors and auditors for regulatory compliance and
                    dispute resolution
                  </li>
                </ul>
                <p>
                  We do not sell, rent, or trade your personal information to
                  third parties for marketing purposes.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                4. Data Security
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  We implement industry-standard security measures to protect
                  your information, including:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Encryption of sensitive data during transmission and storage
                  </li>
                  <li>
                    Secure access controls and authentication protocols
                  </li>
                  <li>
                    Regular security audits and vulnerability assessments
                  </li>
                  <li>
                    Staff training on data protection and confidentiality
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                5. Your Rights
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Access, update, or request deletion of your personal data
                  </li>
                  <li>
                    Withdraw consent for marketing communications at any time
                  </li>
                  <li>
                    Request a copy of the information we hold about you
                  </li>
                  <li>
                    Lodge a complaint with relevant data protection authorities
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                6. Contact Us
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  For questions, concerns, or requests regarding this Privacy
                  Policy, please contact us at:
                </p>
                <p className="text-[#111827]">
                  Email: ractyshexim@gmail.com
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
