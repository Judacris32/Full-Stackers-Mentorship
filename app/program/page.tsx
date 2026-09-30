import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/PageHero";
import { Perks } from "@/components/Perks";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { photos } from "@/data/photos";
import { expectations, phases, weekRhythm } from "@/data/site";

export const metadata: Metadata = {
  title: "The Program",
  description: "Twelve weeks of 1:1 mentorship, honest reviews and a real project, built around WAT evenings and weekends.",
};

export default function ProgramPage() {
  return (
    <>
      <PageHero
        crumb="Program"
        eyebrow="The program"
        title="Twelve weeks that feel like <em>a first job.</em>"
        body="Tutorials teach you syntax. A team teaches you the job. FMP gives you the team part early: a mentor, clear goals, feedback on real work, and people moving at your pace."
        photo={photos.programHero}
        position="center 30%"
      >
        <Link href="/apply" className="btn bg-ocean-tertiary px-7 py-3.5 text-ocean-deep hover:-translate-y-0.5 hover:bg-white">Apply for the next cohort</Link>
      </PageHero>

      {/* What's included */}
      <section className="bg-tint py-24 lg:py-28">
        <div className="container">
          <SectionHeading eyebrow="What's included" title="Everything you'd want from a <em>good senior colleague.</em>" body="Six things every mentee gets, whatever path they choose." />
          <div className="mt-14">
            <Perks />
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="bg-deep relative overflow-hidden py-24 text-ocean-mist lg:py-28">
        <div className="grid-lines fade-mask pointer-events-none absolute inset-0 opacity-40 [--ink:232_246_255]" />
        <div className="container relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow border-white/20 bg-white/10 text-ocean-tertiary">
              <span className="h-1.5 w-1.5 rounded-full bg-ocean-tertiary" />
              How the 12 weeks go
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              A clear path, <em className="!text-ocean-tertiary">one phase at a time.</em>
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <li className="h-full rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ocean-tertiary">{p.weeks}</span>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ocean-mist/70">{p.body}</p>
                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-ocean-secondary to-ocean-tertiary" style={{ width: `${(i + 1) * 25}%` }} />
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Week rhythm + expectations */}
      <section className="bg-aurora py-24 lg:py-28">
        <div className="container">
          <SectionHeading eyebrow="A typical week" title="Busy enough to grow, <em>light enough to keep up.</em>" body="Most sessions happen in the evening or at weekends, West Africa Time." />
        </div>
        <div className="container mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <ul className="flex flex-col gap-3">
              {weekRhythm.map((d, i) => (
                <Reveal key={d.day} delay={i * 0.05}>
                  <li className="card flex items-center gap-5 p-4 pr-6">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand font-display text-sm font-semibold text-brand-ink">{d.day}</span>
                    <span>
                      <span className="block font-semibold">{d.title}</span>
                      <span className="block text-sm text-muted">{d.body}</span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <div className="card sticky top-28 p-8">
              <h3 className="text-2xl font-semibold">
                What we ask <em className="font-serif font-normal italic text-brand">from you</em>
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {expectations.map((e) => (
                  <li key={e} className="flex gap-3 text-[0.95rem]">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-highlight text-ocean-deep">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ink/10 pt-6 text-sm leading-relaxed text-muted">
                That&apos;s it. You don&apos;t need a laptop full of certificates. You need to be serious and consistent.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
