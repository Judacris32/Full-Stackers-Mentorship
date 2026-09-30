"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export function FaqList({ items, defaultOpen = 0 }: { items: { q: string; a: string }[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`rounded-[22px] border transition-colors ${isOpen ? "border-brand/25 bg-surface shadow-card" : "border-ink/[0.08] bg-surface/60"}`}>
            <button className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
              <span className="font-display text-lg font-medium">{f.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-brand text-brand-ink" : "bg-brand/10 text-brand"}`}
              >
                <Plus size={16} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <p className="max-w-2xl px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
