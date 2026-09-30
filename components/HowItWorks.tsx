import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { steps } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

/** Home page: four steps as photo cards. */
export function HowItWorks() {
  return (
    <section className="bg-deep relative overflow-hidden py-24 text-ocean-mist lg:py-32">
      <div className="grid-lines fade-mask pointer-events-none absolute inset-0 opacity-40 [--ink:232_246_255]" />
      <div className="container relative">
        <div className="flex flex-col items-center gap-8 text-center">
          <Reveal className="max-w-3xl">
            <span className="eyebrow border-white/20 bg-white/10 text-ocean-tertiary">
              <span className="h-1.5 w-1.5 rounded-full bg-ocean-tertiary" />
              How it works
            </span>
            <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[3.4rem]">
              From your first message to <em className="!text-ocean-tertiary">demo day.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ocean-mist/75">
              Twelve weeks with a clear structure, and enough room for real life to happen in between.
            </p>
          </Reveal>
          <Reveal>
            <Link href="/how-it-works" className="btn border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20">
              See the full process <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <li className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-2 backdrop-blur transition-colors hover:bg-white/[0.1]">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[22px]">
                  <Image src={s.photo.src} alt={s.photo.alt} fill sizes="(min-width:1024px) 22vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/30 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-ocean-tertiary px-2.5 py-1 font-display text-[11px] font-semibold text-ocean-deep shadow-sm">
                    Step {s.n}
                  </span>
                </div>
                <div className="px-3 pb-4 pt-5">
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ocean-mist/70">{s.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
