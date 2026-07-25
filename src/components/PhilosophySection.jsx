"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LangContext";

const PhilosophySection = () => {
  const { t } = useTranslation();
  const items = t.philosophy?.items || [];

  return (
    <section className="py-22 px-12 bg-[#f5f2eb]">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-18">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#037338] mb-3.5">
              {item.label}
            </div>
            <h2 className="font-serif text-[28px] font-normal leading-snug mb-4 text-[#1a2e0e]">
              {item.heading}
            </h2>
            <p className="text-[15px] text-[#3d5228] leading-relaxed">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhilosophySection;
