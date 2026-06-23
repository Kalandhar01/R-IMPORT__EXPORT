"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: "lighting",
    label: "Lighting Design",
    description: "Interior lighting solutions · Decorative lighting concepts",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&q=80",
    items: ["Interior Lighting Solutions", "Decorative Lighting Concepts"],
  },
  {
    id: "furniture",
    label: "Furniture Design",
    description: "Residential furniture · Commercial furniture · Custom solutions",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    items: ["Residential Furniture", "Commercial Furniture", "Custom Furniture Solutions"],
  },
  {
    id: "granite",
    label: "Granite & Stone Solutions",
    description: "Premium granite · Natural stone finishes",
    image: "https://images.unsplash.com/photo-1666034039348-0cf2eae58ebf?w=600&q=80",
    items: ["Premium Granite", "Natural Stone Finishes"],
  },
  {
    id: "tiles",
    label: "Tiles & Surface Design",
    description: "Floor tiles · Wall tiles · Luxury finishes",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
    items: ["Floor Tiles", "Wall Tiles", "Luxury Finishes"],
  },
  {
    id: "building-materials",
    label: "Building Materials",
    description: "Construction materials · Structural products · Interior finishing",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
    items: ["Construction Materials", "Structural Products", "Interior Finishing Materials"],
  },
  {
    id: "architectural-products",
    label: "Architectural Products",
    description: "Facade systems · Interior solutions · Exterior solutions",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
    items: ["Facade Systems", "Interior Solutions", "Exterior Solutions"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ArchitectureServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f7f4] px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-black/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-black/5 blur-[100px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#111827]"
          >
            Architecture Services
          </motion.span>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#0f172a] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Design & Build Solutions
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 h-0.5 w-16 bg-[#111827] origin-center"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#475569]"
          >
            Premium architectural products and design services for residential,
            commercial, and institutional projects worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300">
                    {cat.label}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-[#6b7280]">
                  {cat.description}
                </p>
                <ul className="mt-3 space-y-1">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#475569]">
                      <span className="h-1 w-1 rounded-full bg-[#111827]/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pointer-events-none absolute inset-0 translate-x-[-100%] skew-x-12 bg-gradient-to-r from-transparent via-black/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
