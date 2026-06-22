"use client";

import { motion } from "motion/react";
import WorldMap from "@/components/ui/world-map";

const tradeRoutes = [
  {
    start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
    end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  },
  {
    start: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
    end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  },
  {
    start: { lat: 40.7128, lng: -74.006, label: "New York" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  {
    start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  },
  {
    start: { lat: -26.2041, lng: 28.0473, label: "Johannesburg" },
    end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  },
];

export default function WorldMapSection() {
  return (
    <section className="relative z-20 overflow-hidden bg-white px-5 py-20 text-[#111827] sm:px-8 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(59,130,246,0.02),transparent_44%)]" />

      <div className="relative mx-auto max-w-[96rem]">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b8860b]">
            Global Trade Network
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
            Connecting Markets Across Continents
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6b7280]/80 sm:text-base sm:leading-7">
            Strategically positioned across key trade corridors — from Asia-Pacific
            to the Americas, Europe, the Middle East, and Africa — enabling seamless
            global commerce.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden border border-gray-200 bg-white p-2 shadow-lg sm:p-4 lg:p-5"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(59,130,246,0.06),transparent_35%),radial-gradient(circle_at_68%_76%,rgba(59,130,246,0.05),transparent_28%)]" />
          <div className="relative">
            <WorldMap dots={tradeRoutes} lineColor="#3b82f6" mapColorMode="light" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
