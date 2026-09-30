"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { heroPoints, heroSlides } from "@/data/site";

const DURATION = 6500;

/**
 * Full-bleed hero: the slider IS the background, content is centred on top.
 */
export function Hero() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % heroSlides.length), []);

  useEffect(() => {
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [index, next]);

  const slide = heroSlides[index];

  return (
    <section
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ocean-deep text-white"
      aria-roledescription="carousel"
      aria-label="Life inside FMP"
    >
      {/* Background slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={slide.photo.src}
            alt={slide.photo.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="animate-kenburns object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays: brand-tinted so the white text always reads */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/70 via-ocean-deep/45 to-ocean-deep/85" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,rgb(11_61_145/0.45),transparent_75%)]" />
      <div className="grid-lines fade-mask pointer-events-none absolute inset-0 opacity-30 [--ink:232_246_255]" />

      {/* Centred content */}
      <div className="container relative z-10 flex flex-col items-center pb-40 pt-36 text-center">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-4 text-xs font-medium text-white/85 backdrop-blur-md"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="rounded-full bg-ocean-tertiary px-2.5 py-0.5 font-semibold text-ocean-deep">New cohort</span>
          Applications are open
        </motion.span>

        <motion.h1
          className="mt-8 max-w-5xl text-[3rem] font-semibold leading-[0.98] sm:text-7xl lg:text-[5.75rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Learn tech with someone{" "}
          <em className="relative inline-block !text-ocean-tertiary">
            in your corner.
            <svg className="absolute -bottom-3 left-0 w-full text-ocean-secondary" viewBox="0 0 300 14" fill="none" preserveAspectRatio="none" aria-hidden>
              <motion.path
                d="M3 10C80 3 220 3 297 9"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.8, ease: "easeInOut" }}
              />
            </svg>
          </em>
        </motion.h1>

        <motion.p
          className="mt-9 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          FMP pairs you with engineers, designers and product people who already do the work. You get weekly sessions,
          honest feedback on what you build, and a community that notices when you go quiet.
        </motion.p>

        <motion.div
          className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <Link href="/apply" className="btn bg-ocean-tertiary px-8 py-4 text-[0.95rem] text-ocean-deep shadow-[0_12px_30px_-10px_rgb(127_231_214/0.6)] hover:-translate-y-0.5 hover:bg-white">
            Apply as a mentee <ArrowRight size={18} />
          </Link>
          <Link href="/mentors" className="btn border border-white/25 bg-white/10 px-8 py-4 text-[0.95rem] text-white backdrop-blur-md hover:bg-white/20">
            Meet the mentors
          </Link>
        </motion.div>

        <motion.ul
          className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-medium text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {heroPoints.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-ocean-tertiary" />
              {t}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Slide caption + controls, centred along the bottom */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-4 px-5 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="max-w-xl text-sm text-white/75"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
          >
            <span className="mr-2 rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-ocean-tertiary backdrop-blur">
              {slide.tag}
            </span>
            <span className="font-serif text-base italic">{slide.caption}</span>
          </motion.p>
        </AnimatePresence>

        <div className="flex items-center gap-2" role="tablist">
          {heroSlides.map((s, i) => (
            <button
              key={s.tag}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${s.tag}`}
              onClick={() => setIndex(i)}
              className="py-2"
            >
              <span className={`block h-1.5 overflow-hidden rounded-full bg-white/25 transition-all duration-500 ${i === index ? "w-14" : "w-6 hover:bg-white/50"}`}>
                {i === index && (
                  <motion.span
                    key={index}
                    className="block h-full rounded-full bg-ocean-tertiary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        <motion.span
          className="hidden text-white/50 sm:block"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden
        >
          <ChevronDown size={20} />
        </motion.span>
      </div>
    </section>
  );
}
