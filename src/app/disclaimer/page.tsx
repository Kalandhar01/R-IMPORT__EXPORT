"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
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
          <div className="absolute left-1/3 top-1/3 h-[400px] w-[400px] rounded-full bg-white/5 blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />
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
            <AlertTriangle size={14} />
            Legal
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Disclaimer
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
            The information provided by RACTYSH EXIM PVT LTD is for general
            informational purposes only and does not constitute professional
            advice.
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
                General Disclaimer
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  RACTYSH EXIM PVT LTD makes every effort to ensure the
                  accuracy and reliability of the information presented on our
                  website and trade services. However, the content is provided
                  on an &quot;as is&quot; basis without any representations or
                  warranties, express or implied.
                </p>
                <p>
                  We do not guarantee that the information on this site is
                  complete, current, or error-free. Trade regulations, tariffs,
                  and compliance requirements may change without notice, and
                  users should independently verify all information before
                  making decisions.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                No Professional Advice
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  The content on our website and communications does not
                  constitute legal, financial, or regulatory advice. Users
                  should consult with qualified professionals regarding their
                  specific trade situations, including customs compliance, tax
                  implications, and legal requirements.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                Limitation of Liability
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  RACTYSH EXIM PVT LTD, its directors, employees, and agents
                  shall not be held liable for any direct, indirect, incidental,
                  or consequential damages resulting from the use of our
                  website, services, or reliance on any information provided.
                </p>
                <p>
                  This includes but is not limited to damages for loss of
                  profits, business interruption, or loss of data, even if we
                  have been advised of the possibility of such damages.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                External Links
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  Our website may contain links to third-party websites for your
                  convenience. We do not endorse, control, or assume
                  responsibility for the content, privacy policies, or practices
                  of any third-party sites. Accessing these links is at your own
                  risk.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                Trade Compliance
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  While we assist with trade compliance and documentation,
                  ultimate responsibility for compliance with applicable laws,
                  sanctions, and regulations rests with the importer, exporter,
                  or relevant party. Users must ensure their transactions comply
                  with all applicable international and local trade laws.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                Updates to This Disclaimer
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  We reserve the right to update or modify this disclaimer at
                  any time without prior notice. Changes will be effective
                  immediately upon posting to our website. We encourage users to
                  review this page periodically.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111827] sm:text-3xl">
                Contact Us
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#6b7280]">
                <p>
                  If you have questions about this disclaimer, please contact
                  us:
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
