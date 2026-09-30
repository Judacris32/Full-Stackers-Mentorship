"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Mentor } from "@/data/mentors";

/**
 * One mentor picture card. The designed image already carries the name,
 * role and focus, so nothing else is rendered on top of it.
 */
export function MentorCard({ mentor, index }: { mentor: Mentor; index: number }) {
  const label = `${mentor.name}, ${mentor.role}. Focus: ${mentor.focus}`;
  const card = (
    <div className="relative aspect-[805/1085] w-full">
      {/* soft brand glow that appears behind the card on hover */}
      <div className="absolute inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-accent/0 to-highlight/0 blur-2xl transition-all duration-500 group-hover:from-accent/40 group-hover:to-highlight/30" />
      <Image
        src={mentor.image}
        alt={label}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-contain drop-shadow-[0_18px_30px_rgb(11_61_145/0.18)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]"
      />
    </div>
  );

  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {mentor.linkedin ? (
        <a href={mentor.linkedin} target="_blank" rel="noreferrer" aria-label={`${mentor.name} on LinkedIn`} className="block">
          {card}
        </a>
      ) : (
        card
      )}
    </motion.article>
  );
}
