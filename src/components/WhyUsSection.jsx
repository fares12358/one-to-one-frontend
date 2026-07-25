"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "@/context/LangContext";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=900&q=80";

const WhyUsSection = () => {
  const { t, isRTL } = useTranslation();
  const w = t.whyUs;
  const imgSrc = w?._images?.[0]?.url || FALLBACK_IMAGE;
  const isUnsplash = imgSrc.includes("unsplash.com");

  return (
    <section id="why" className="py-22 px-12 bg-white">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.16em] uppercase text-[#037338] mb-3.5">
              <span className="block w-6 h-px bg-[#c9a84c]" />
              {w.eyebrow}
            </div>

            <h2 className="font-serif text-4xl font-normal leading-snug mb-8">
              {w.heading_line1}<br />{w.heading_line2}
            </h2>

            <div className="space-y-4">
              {(w.body || []).map((paragraph, i) => (
                <p key={i} className="text-[15px] text-[#3d5228] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {(w.closing_label || w.closing_message) && (
              <div className={`mt-7 ${isRTL ? "pr-5 border-r-2" : "pl-5 border-l-2"} border-[#96C422]`}>
                {w.closing_label && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#037338]/10 text-[#037338] rounded-full text-xs font-semibold tracking-wide mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#037338]" />
                    {w.closing_label}
                  </div>
                )}
                {w.closing_message && (
                  <p className="text-[14px] text-[#1a2e0e] font-medium leading-relaxed">
                    {w.closing_message}
                  </p>
                )}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[460px] hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(3,115,56,0.18)]"
            >
              <Image
                src={imgSrc}
                alt={w.img_alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized={isUnsplash}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
