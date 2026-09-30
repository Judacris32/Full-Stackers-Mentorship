"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Turns "Learn with <em>people</em>" into JSX, so copy files stay plain strings. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(<em>.*?<\/em>)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("<em>") ? <em key={i}>{p.slice(4, -5)}</em> : <Fragment key={i}>{p}</Fragment>
      )}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  center = true,
  className = "",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
        <Rich text={title} />
      </h2>
      {body && <p className={`mt-5 text-base leading-relaxed text-muted sm:text-lg ${center ? "mx-auto max-w-2xl" : ""}`}>{body}</p>}
    </Reveal>
  );
}
