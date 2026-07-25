"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LangContext";

const ProblemSection = () => {
  const { t, isRTL } = useTranslation();
  const p = t.problem;
  const items = p?.items || [];
  const rows = Math.ceil(items.length / 2);

  return (
    <section className="py-22 px-12 bg-white">
      <div className="max-w-[1120px] mx-auto">
        <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.16em] uppercase text-[#037338] mb-3.5">
          <span className="block w-6 h-px bg-[#c9a84c]" />
          {p.eyebrow}
        </div>

        <h2 className="font-serif text-4xl font-normal leading-snug mb-10 max-w-2xl">
          {p.heading}
        </h2>

        <div className="bg-[#f5f2eb] rounded-2xl border border-[rgba(150,196,34,0.18)] p-10 lg:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {items.map((item, i) => {
              const row = Math.floor(i / 2);
              const isLastRow = row === rows - 1;
              const isLeftCol = i % 2 === 0;
              const sideBorder = isRTL ? "md:border-l" : "md:border-r";
              const sidePad = isRTL ? "md:pl-10" : "md:pr-10";
              const otherPad = isRTL ? "md:pr-10" : "md:pl-10";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`py-6 border-[rgba(150,196,34,0.25)] ${!isLastRow ? "border-b" : ""} ${isLeftCol ? `${sideBorder} ${sidePad}` : otherPad}`}
                >
                  <h4 className="text-lg font-semibold text-[#037338] mb-2.5">{item.title}</h4>
                  <p className="text-sm text-[#6a8050] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
