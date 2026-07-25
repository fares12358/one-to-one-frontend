"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DynamicIcon from "@/components/DynamicIcon";
import { useTranslation } from "@/context/LangContext";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=75";

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhoWeServeSection = () => {
  const { t } = useTranslation();
  const s = t.serve;
  const items = s?.items || [];
  const imgSrc = s?._images?.[0]?.url || FALLBACK_IMAGE;
  const isUnsplash = imgSrc.includes("unsplash.com");

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt={s?.img_alt || ""}
          fill
          sizes="100vw"
          className="object-cover"
          unoptimized={isUnsplash}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#012a14]/70 via-[#037338]/60 to-[#012a14]/88" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-[#96C422] mb-5">
            <span className="block w-8 h-px bg-[#96C422]" />
            {s?.eyebrow}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
            {s?.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="border border-white/25 rounded-2xl p-8 bg-white/[0.04] backdrop-blur-sm hover:border-[#96C422]/50 hover:bg-white/8 transition-all duration-300"
            >
              <DynamicIcon name={item.icon} className="w-6 h-6 text-[#96C422] mb-4" />
              <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
              <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
