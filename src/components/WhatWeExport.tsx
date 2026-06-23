"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Product = {
  name: string;
  image: string;
  countries: string[];
  description: string;
};

type Category = {
  id: string;
  icon: string;
  label: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "spices",
    icon: "🌶️",
    label: "Spices & Masala",
    products: [
      {
        name: "Black Pepper",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
        countries: ["USA", "Germany", "UAE", "UK"],
        description: "Premium-grade black pepper sourced from Kerala, known for its bold aroma and high piperine content.",
      },
      {
        name: "Cardamom",
        image: "https://images.unsplash.com/photo-1642255500170-2637b4e4cecd?w=600&q=80",
        countries: ["Saudi Arabia", "Japan", "Netherlands", "France"],
        description: "Aromatic green cardamom from the Western Ghats, handpicked and dried to preserve essential oils.",
      },
      {
        name: "Turmeric",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
        countries: ["Bangladesh", "Malaysia", "UK", "Canada"],
        description: "High-curcumin Alleppey turmeric, sun-dried and polished for vibrant color and purity.",
      },
      {
        name: "Red Chilli",
        image: "https://images.unsplash.com/photo-1583506522440-b2639ef4c1d8?w=600&q=80",
        countries: ["China", "Vietnam", "Thailand", "Mexico"],
        description: "Fiery Guntur red chillies with intense color and heat, graded for export quality.",
      },
      {
        name: "Coriander",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
        countries: ["UAE", "UK", "Sri Lanka", "USA"],
        description: "Clean, sun-dried coriander seeds with strong citrusy aroma, sorted and graded for international buyers.",
      },
    ],
  },
  {
    id: "food",
    icon: "🍚",
    label: "Food Products",
    products: [
      {
        name: "Rice",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
        countries: ["Saudi Arabia", "UAE", "USA", "Qatar"],
        description: "Premium basmati and non-basmati rice varieties, aged and milled to international standards.",
      },
      {
        name: "Millets",
        image: "https://images.unsplash.com/photo-1768729341679-8a2da8e5b5fa?w=600&q=80",
        countries: ["USA", "Australia", "Germany", "Japan"],
        description: "Organic pearl millet, foxtail millet, and ragi sourced from traditional South Indian farms.",
      },
      {
        name: "Pulses",
        image: "https://images.unsplash.com/photo-1763368403529-0b8d9108cf9c?w=600&q=80",
        countries: ["Canada", "UK", "Singapore", "Malaysia"],
        description: "High-protein toor dal, urad dal, and moong dal, cleaned and sorted for direct consumption.",
      },
      {
        name: "Coconut Products",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
        countries: ["UAE", "UK", "USA", "Netherlands"],
        description: "Desiccated coconut, coconut oil, and coconut milk powder from premium Kerala coconuts.",
      },
      {
        name: "Ready-to-Cook Foods",
        image: "https://images.unsplash.com/photo-1668762924684-a9753a0a887c?w=600&q=80",
        countries: ["USA", "UK", "Australia", "Canada"],
        description: "Traditional South Indian ready-to-cook meal kits and authentic spice mixes.",
      },
    ],
  },
  {
    id: "bamboo-salt",
    icon: "🧂",
    label: "Bamboo Salt",
    products: [
      {
        name: "Premium Bamboo Salt",
        image: "https://images.unsplash.com/photo-1645007489014-235185d38791?w=600&q=80",
        countries: ["South Korea", "Japan", "USA", "Germany"],
        description: "Artisan bamboo salt roasted nine times at high temperatures for enhanced mineral content.",
      },
      {
        name: "Health Products",
        image: "https://images.unsplash.com/photo-1606913089601-245dab5e0a3c?w=600&q=80",
        countries: ["Singapore", "Hong Kong", "UK", "Australia"],
        description: "A wellness range featuring bamboo salt infused toothpastes, soaps, and dietary supplements.",
      },
      {
        name: "Organic Wellness Products",
        image: "https://images.unsplash.com/photo-1649667220072-f0ef76ba4530?w=600&q=80",
        countries: ["Germany", "Switzerland", "USA", "Canada"],
        description: "Certified organic bamboo salt wellness products for health-conscious consumers worldwide.",
      },
    ],
  },
  {
    id: "infrastructure",
    icon: "🏗️",
    label: "Infrastructure Materials",
    products: [
      {
        name: "Construction Materials",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        countries: ["Maldives", "Sri Lanka", "UAE", "Singapore"],
        description: "High-quality granite, tiles, and dimensional stones from South Indian quarries.",
      },
      {
        name: "Industrial Supplies",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
        countries: ["Nigeria", "Kenya", "Bangladesh", "Indonesia"],
        description: "Steel components, pipes, fittings, and industrial hardware for large-scale projects.",
      },
      {
        name: "Building Components",
        image: "https://images.unsplash.com/photo-1769971361788-ceda92ad2263?w=600&q=80",
        countries: ["Oman", "Kuwait", "Qatar", "Bahrain"],
        description: "Precast concrete elements, roofing solutions, and modular building systems.",
      },
      {
        name: "Engineering Products",
        image: "https://images.unsplash.com/photo-1768734831381-39336657aae9?w=600&q=80",
        countries: ["Germany", "UAE", "Saudi Arabia", "India"],
        description: "Precision-engineered components for industrial and infrastructure applications.",
      },
    ],
  },
  {
    id: "home-appliances",
    icon: "🏠",
    label: "Home Appliances",
    products: [
      {
        name: "Kitchen Appliances",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
        countries: ["UAE", "Singapore", "Malaysia", "Kenya"],
        description: "Energy-efficient mixers, grinders, and kitchen appliances compliant with global standards.",
      },
      {
        name: "Household Electronics",
        image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&q=80",
        countries: ["Nigeria", "Ghana", "Nepal", "Bangladesh"],
        description: "Reliable home electronics and consumer appliances built for durability and performance.",
      },
      {
        name: "Smart Home Products",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
        countries: ["USA", "Australia", "UAE", "Singapore"],
        description: "IoT-enabled smart home devices with modern design and advanced automation features.",
      },
    ],
  },
  {
    id: "textiles",
    icon: "👕",
    label: "Textiles & Garments",
    products: [
      {
        name: "Cotton Wear",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
        countries: ["USA", "UK", "Germany", "France"],
        description: "Premium cotton garments made from handpicked South Indian cotton with superior stitching.",
      },
      {
        name: "Traditional Wear",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
        countries: ["Singapore", "Malaysia", "Mauritius", "Trinidad"],
        description: "Authentic silk sarees, dhotis, and traditional wear with intricate handwoven patterns.",
      },
      {
        name: "Export Quality Clothing",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
        countries: ["UAE", "Qatar", "Saudi Arabia", "Oman"],
        description: "Bulk export-ready garments meeting international quality standards and compliance.",
      },
      {
        name: "Home Textiles",
        image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&q=80",
        countries: ["Japan", "Australia", "Canada", "Netherlands"],
        description: "Bed linens, towels, and upholstery fabrics crafted from premium South Indian cotton.",
      },
    ],
  },
  {
    id: "agro",
    icon: "🥥",
    label: "Agro Products",
    products: [
      {
        name: "Coconut",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",
        countries: ["China", "USA", "UK", "Netherlands"],
        description: "Fresh and mature coconuts from Kerala farms, sorted and packed for export.",
      },
      {
        name: "Copra",
        image: "https://images.unsplash.com/photo-1767893813372-757457c91511?w=600&q=80",
        countries: ["Indonesia", "Philippines", "Vietnam", "Sri Lanka"],
        description: "Sun-dried copra with optimal moisture content for oil extraction and food processing.",
      },
      {
        name: "Banana Products",
        image: "https://images.unsplash.com/photo-1641718085818-2f0432d84fe4?w=600&q=80",
        countries: ["Japan", "South Korea", "UAE", "Singapore"],
        description: "Banana chips, banana flour, and freeze-dried banana products from South Indian plantains.",
      },
      {
        name: "Agricultural Commodities",
        image: "https://images.unsplash.com/photo-1635862136-dc862ba1e4ff?w=600&q=80",
        countries: ["USA", "Germany", "UAE", "Bangladesh"],
        description: "Raw agricultural commodities including areca nut, cashew, and coffee beans.",
      },
    ],
  },
  {
    id: "handicrafts",
    icon: "💎",
    label: "Handicrafts & Heritage",
    products: [
      {
        name: "Wooden Crafts",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
        countries: ["USA", "Germany", "France", "Japan"],
        description: "Intricately carved wooden artifacts and home decor from master craftsmen of Tamil Nadu.",
      },
      {
        name: "Temple Arts",
        image: "https://images.unsplash.com/photo-1559510561-c1514a789f3e?w=600&q=80",
        countries: ["Singapore", "Malaysia", "USA", "Australia"],
        description: "Bronze idols, brass lamps, and traditional temple art crafted using centuries-old techniques.",
      },
      {
        name: "Handmade Decor",
        image: "https://images.unsplash.com/photo-1762970782860-575f62ba05a8?w=600&q=80",
        countries: ["UAE", "Qatar", "UK", "Italy"],
        description: "Handcrafted decorative pieces blending traditional art with contemporary interior design.",
      },
      {
        name: "Traditional Products",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
        countries: ["Mauritius", "Fiji", "Trinidad", "Guyana"],
        description: "Authentic South Indian traditional products including kolam powders, oil lamps, and puja items.",
      },
    ],
  },
  {
    id: "architecture",
    icon: "🏛️",
    label: "Architecture",
    products: [
      {
        name: "Lighting Solutions",
        image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&q=80",
        countries: ["UAE", "Singapore", "Qatar", "UK"],
        description: "Decorative lighting, architectural lighting, and smart lighting systems for modern spaces.",
      },
      {
        name: "Furniture Solutions",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
        countries: ["USA", "Germany", "UAE", "Australia"],
        description: "Residential furniture, commercial furniture, and custom interior furniture solutions.",
      },
      {
        name: "Granite & Stone",
        image: "https://images.unsplash.com/photo-1666034039348-0cf2eae58ebf?w=600&q=80",
        countries: ["China", "Vietnam", "India", "Italy"],
        description: "Premium granite, natural stone finishes, and imported stone products for luxury projects.",
      },
      {
        name: "Tiles & Surface Materials",
        image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
        countries: ["Spain", "Italy", "UAE", "USA"],
        description: "Floor tiles, wall tiles, and premium surface finishes for residential and commercial spaces.",
      },
      {
        name: "Building Materials",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
        countries: ["Saudi Arabia", "Qatar", "Oman", "Kuwait"],
        description: "Construction materials, structural components, and interior finishing products for large-scale projects.",
      },
      {
        name: "Architectural Products",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
        countries: ["Germany", "Singapore", "USA", "UAE"],
        description: "Facade systems, interior design materials, and exterior design solutions for modern architecture.",
      },
    ],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      <div       className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-white/5">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-transparent opacity-60" />
          <div className="absolute right-3 top-3 flex flex-wrap gap-1.5">
            {product.countries.slice(0, 3).map((country) => (
              <span
                key={country}
                className="rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/70 backdrop-blur-sm"
              >
                {country}
              </span>
            ))}
            {product.countries.length > 3 && (
              <span className="rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[9px] text-white/50 backdrop-blur-sm">
                +{product.countries.length - 3}
              </span>
            )}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-white">
            {product.name}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-white/40">
            {product.description}
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center gap-1.5 rounded-sm border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 transition-all duration-300 hover:border-white hover:bg-white/10 hover:text-white"
          >
            Request Quote
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryButton({
  category,
  isActive,
  onClick,
}: {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-shrink-0 rounded-xl border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
        isActive
          ? "border-white bg-white/10 text-white shadow-lg shadow-white/10"
          : "border-white/[0.06] bg-white/[0.02] text-white/50 hover:border-white/20 hover:bg-white/[0.05] hover:text-white/80"
      }`}
    >
      <span className="mr-1.5 text-base">{category.icon}</span>
      {category.label}
    </button>
  );
}

export default function WhatWeExport() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeData = categories.find((c) => c.id === activeCategory)!;

  return (
    <section className="relative w-full overflow-hidden bg-[#050B1A] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute left-1/2 top-0 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
            Export Excellence
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            South Indian Products<br className="sm:hidden" /> Exported Worldwide
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-white/60" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/40 sm:text-base">
            Connecting Global Markets with Premium South Indian Products and
            Industrial Solutions.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0"
        >
          {categories.map((cat) => (
            <CategoryButton
              key={cat.id}
              category={cat}
              isActive={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>

        <div className="mt-10 sm:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeData.products.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
                  {activeData.products.map((product, i) => (
                    <ProductCard key={product.name} product={product} index={i} />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-white/10">
                  <p className="text-sm text-white/30">Products coming soon.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 text-center sm:mt-20 sm:p-12"
        >
          <div className="mx-auto mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Looking for a specific product?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/40">
            Tell us what you need and our export team will source the finest
            South Indian products tailored to your requirements.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex h-12 items-center gap-2.5 rounded-sm bg-white px-7 text-xs font-bold uppercase tracking-[0.15em] text-[#050B1A] transition-all duration-300 hover:shadow-xl hover:shadow-white/10 sm:h-[52px] sm:px-9"
          >
            Talk to Our Export Experts
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
