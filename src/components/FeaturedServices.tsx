"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Product = {
  name: string;
  image: string;
  description: string;
  available: boolean;
};

type Category = {
  id: string;
  label: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "spices",
    label: "Spices",
    products: [
      {
        name: "Black Pepper",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
        description: "Premium-grade black pepper from Kerala, known for bold aroma and high piperine content.",
        available: true,
      },
      {
        name: "Cardamom",
        image: "https://images.unsplash.com/photo-1642255500170-2637b4e4cecd?w=600&q=80",
        description: "Aromatic green cardamom from the Western Ghats, handpicked and oil-rich.",
        available: true,
      },
      {
        name: "Turmeric",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
        description: "High-curcumin Alleppey turmeric, sun-dried and polished for purity.",
        available: true,
      },
      {
        name: "Red Chilli",
        image: "https://images.unsplash.com/photo-1583506522440-b2639ef4c1d8?w=600&q=80",
        description: "Fiery Guntur red chillies with intense color and heat, graded for export.",
        available: true,
      },
    ],
  },
  {
    id: "food-products",
    label: "Food Products",
    products: [
      {
        name: "Rice",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
        description: "Premium basmati and non-basmati rice, aged and milled to international standards.",
        available: true,
      },
      {
        name: "Millets",
        image: "https://images.unsplash.com/photo-1768729341679-8a2da8e5b5fa?w=600&q=80",
        description: "Organic pearl millet, foxtail millet, and ragi from traditional South Indian farms.",
        available: true,
      },
      {
        name: "Pulses",
        image: "https://images.unsplash.com/photo-1763368403529-0b8d9108cf9c?w=600&q=80",
        description: "High-protein toor dal, urad dal, and moong dal, cleaned and sorted.",
        available: true,
      },
      {
        name: "Ready-to-Cook Foods",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",
        description: "Traditional South Indian meal kits and authentic spice mixes for global kitchens.",
        available: true,
      },
    ],
  },
  {
    id: "bamboo-salt",
    label: "Bamboo Salt",
    products: [
      {
        name: "Premium Bamboo Salt",
        image: "https://images.unsplash.com/photo-1645007489014-235185d38791?w=600&q=80",
        description: "Artisan bamboo salt roasted nine times for enhanced mineral content and purity.",
        available: true,
      },
      {
        name: "Wellness Products",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
        description: "Bamboo salt infused wellness range including toothpastes, soaps, and supplements.",
        available: true,
      },
    ],
  },
  {
    id: "coconut-products",
    label: "Coconut Products",
    products: [
      {
        name: "Coconut Oil",
        image: "https://images.unsplash.com/photo-1546662608-aec5228e9a74?w=600&q=80",
        description: "Pure cold-pressed virgin coconut oil from fresh Kerala coconuts.",
        available: true,
      },
      {
        name: "Desiccated Coconut",
        image: "https://images.unsplash.com/photo-1767893813372-757457c91511?w=600&q=80",
        description: "Fine and medium grade desiccated coconut for food and confectionery industries.",
        available: true,
      },
      {
        name: "Coconut Milk Powder",
        image: "https://images.unsplash.com/photo-1668762924684-a9753a0a887c?w=600&q=80",
        description: "Premium coconut milk powder with rich creaminess and long shelf life.",
        available: true,
      },
    ],
  },
  {
    id: "textiles",
    label: "Textiles & Garments",
    products: [
      {
        name: "Cotton Wear",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
        description: "Premium cotton garments made from handpicked South Indian cotton.",
        available: true,
      },
      {
        name: "Traditional South Indian Clothing",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
        description: "Authentic silk sarees, dhotis, and traditional wear with handwoven patterns.",
        available: true,
      },
      {
        name: "Home Textiles",
        image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&q=80",
        description: "Bed linens, towels, and upholstery fabrics crafted from premium cotton.",
        available: true,
      },
    ],
  },
  {
    id: "home-appliances",
    label: "Home Appliances",
    products: [
      {
        name: "Kitchen Appliances",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
        description: "Energy-efficient mixers, grinders, and kitchen appliances built to global standards.",
        available: true,
      },
      {
        name: "Smart Home Products",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
        description: "IoT-enabled smart home devices with modern design and automation features.",
        available: true,
      },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure Materials",
    products: [
      {
        name: "Construction Materials",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        description: "Granite, tiles, and dimensional stones from South Indian quarries.",
        available: true,
      },
      {
        name: "Industrial Components",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
        description: "Steel components, pipes, fittings, and hardware for large-scale projects.",
        available: true,
      },
      {
        name: "Engineering Supplies",
        image: "https://images.unsplash.com/photo-1769971361788-ceda92ad2263?w=600&q=80",
        description: "Precision-engineered components for industrial and infrastructure applications.",
        available: true,
      },
    ],
  },
  {
    id: "coffee-tea",
    label: "Coffee & Tea",
    products: [
      {
        name: "South Indian Coffee",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
        description: "Premium Arabica and Robusta beans from the hills of Chikmagalur and Coorg.",
        available: true,
      },
      {
        name: "Tea",
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
        description: "Single-origin black and green teas from the Nilgiri highlands.",
        available: true,
      },
    ],
  },
  {
    id: "agricultural",
    label: "Agricultural Products",
    products: [
      {
        name: "Fresh Produce",
        image: "https://images.unsplash.com/photo-1768734831381-39336657aae9?w=600&q=80",
        description: "Farm-fresh fruits and vegetables sourced directly from South Indian growers.",
        available: true,
      },
      {
        name: "Cashew Nuts",
        image: "https://images.unsplash.com/photo-1641718085818-2f0432d84fe4?w=600&q=80",
        description: "Premium W180 and W320 cashew kernels from the coastal regions.",
        available: true,
      },
      {
        name: "Areca Nut",
        image: "https://images.unsplash.com/photo-1649667220072-f0ef76ba4530?w=600&q=80",
        description: "High-grade areca nut processed and dried for international markets.",
        available: true,
      },
    ],
  },
  {
    id: "handicrafts",
    label: "Handicrafts",
    products: [
      {
        name: "Wooden Crafts",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
        description: "Intricately carved wooden artifacts and decor from master craftsmen.",
        available: true,
      },
      {
        name: "Brass & Bronze Items",
        image: "https://images.unsplash.com/photo-1559510561-c1514a789f3e?w=600&q=80",
        description: "Traditional brass lamps, bronze idols, and temple art collectibles.",
        available: true,
      },
      {
        name: "Home Decor",
        image: "https://images.unsplash.com/photo-1762970782860-575f62ba05a8?w=600&q=80",
        description: "Handcrafted decorative pieces blending traditional art with modern design.",
        available: true,
      },
    ],
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37]/25 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-[#D4AF37]/5 hover:-translate-y-0.5">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-transparent opacity-60" />
          {product.available && (
            <span className="absolute right-3 top-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#D4AF37] backdrop-blur-sm">
              Export Ready
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
            {product.name}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-white/40">
            {product.description}
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-[#D4AF37]/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#D4AF37]/70 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/8 hover:text-[#D4AF37]"
          >
            Request Quote
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedServices() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const activeData = categories.find((c) => c.id === activeCategory)!;

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#050B1A] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute left-1/2 top-0 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]/70">
            Premium Exports
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our Export Categories
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#D4AF37]/60" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/40 sm:text-base">
            Delivering Premium South Indian Products and Industrial Solutions to
            Global Markets.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 md:grid-cols-5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300 sm:text-[11px] ${
                  isActive
                    ? "border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/15 to-[#E8C84A]/10 text-[#D4AF37] shadow-lg shadow-[#D4AF37]/10"
                    : "border-white/[0.06] bg-white/[0.02] text-white/50 hover:border-white/20 hover:bg-white/[0.05] hover:text-white/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
                {activeData.products.map((product, i) => (
                  <ProductCard key={product.name} product={product} index={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex justify-center sm:mt-16"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#D4AF37]/80 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
          >
            View All Export Categories
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
