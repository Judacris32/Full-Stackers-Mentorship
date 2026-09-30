import { Check } from "lucide-react";
import Image from "next/image";
import { steps } from "@/data/site";
import { Reveal } from "./Reveal";

/** /how-it-works: a vertical timeline with a photo per step. */
export function StepsDetailed() {
  return (
    <ol className="relative mx-auto max-w-5xl">
      <span className="absolute bottom-10 left-[27px] top-10 w-px bg-gradient-to-b from-accent via-highlight to-transparent md:left-1/2" aria-hidden />
      {steps.map((s, i) => {
        const right = i % 2 === 1;
        return (
          <li key={s.n} className="relative grid gap-6 pb-16 pl-20 last:pb-0 md:grid-cols-2 md:gap-16 md:pl-0">
            <span className="absolute left-0 top-0 z-10 grid h-14 w-14 place-items-center rounded-2xl bg-brand font-display text-lg font-semibold text-brand-ink shadow-card md:left-1/2 md:-translate-x-1/2">
              {s.n}
            </span>
            <Reveal className={right ? "md:order-2 md:pl-4" : "md:pr-4 md:text-right"}>
              <h2 className="text-2xl font-semibold sm:text-3xl">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              <ul className={`mt-5 flex flex-col gap-2 ${right ? "" : "md:items-end"}`}>
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm font-medium">
                    <Check size={16} className="shrink-0 text-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className={right ? "md:order-1 md:pr-4" : "md:pl-4"}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] shadow-card">
                <Image src={s.photo.src} alt={s.photo.alt} fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover" />
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
