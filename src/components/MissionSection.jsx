"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LangContext";

export default function MissionSection() {
  const { t } = useTranslation();
  const m = t.mission;

  return (
    <section id="mission" className="py-22 px-12 bg-white">
      <div className="max-w-[1120px] mx-auto">
        <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.16em] uppercase text-[#037338] mb-3.5">
          <span className="block w-6 h-px bg-[#c9a84c]" />
          {m.eyebrow}
        </div>

        <h2 className="font-serif text-4xl font-normal leading-snug mb-8">
          {m.heading_line1}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-white rounded-2xl border border-[rgba(150,196,34,0.2)] p-8"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#037338] to-[#96C422]" />
            <div className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-wide mb-4 bg-[#037338]/10 text-[#037338]">
              {m.vision.badge}
            </div>
            <p className="text-sm text-[#444] leading-relaxed">
              {m.vision.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative overflow-hidden bg-white rounded-2xl border border-[rgba(150,196,34,0.2)] p-8"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]" />
            <div className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-wide mb-4 bg-[#c9a84c]/10 text-[#8a6820]">
              {m.missionCard.badge}
            </div>
            <p className="text-sm text-[#444] leading-relaxed">
              {m.missionCard.body}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
