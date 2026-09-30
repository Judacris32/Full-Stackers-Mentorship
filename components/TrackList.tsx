import { ArrowRight, Check, Flag, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { tracks } from "@/data/site";
import { getIcons } from "@/lib/stack";
import { Reveal } from "./Reveal";
import { StackChip } from "./StackIcon";

/** /career-paths page: one detailed, alternating row per track. */
export function TrackList() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32">
      {tracks.map((t, i) => {
        const flip = i % 2 === 1;
        return (
          <article key={t.key} id={t.key} className="scroll-mt-28">
            <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal className="relative">
                <div className={`absolute -inset-3 -z-10 rounded-[40px] blur-2xl ${flip ? "bg-highlight/25" : "bg-accent/25"}`} />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-card">
                  <Image src={t.photo.src} alt={t.photo.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className="card absolute -bottom-6 right-4 flex items-center gap-3 p-4 sm:right-8">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-highlight text-ocean-deep">
                    <Flag size={18} />
                  </span>
                  <span className="max-w-[240px]">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">You&apos;ll finish with</span>
                    <span className="block text-sm font-semibold leading-snug">{t.project}</span>
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <span className="font-display text-sm font-semibold text-brand">Path 0{i + 1}</span>
                <h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-[2.6rem]">{t.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{t.intro}</p>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">What you&apos;ll learn</h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {t.learn.map((l) => (
                    <li key={l} className="flex gap-2.5 text-[0.95rem]">
                      <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                      {l}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {getIcons(t.tools).map((icon) => (
                    <StackChip key={icon.slug} icon={icon} />
                  ))}
                </div>

                <p className="mt-7 flex gap-2.5 rounded-2xl bg-brand/[0.06] p-4 text-sm leading-relaxed">
                  <Users size={18} className="mt-0.5 shrink-0 text-brand" />
                  <span>
                    <strong className="font-semibold">Good fit if: </strong>
                    {t.forYou}
                  </span>
                </p>

                <Link href={`/apply?track=${t.key}`} className="btn-primary mt-8">
                  Apply for this path <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </article>
        );
      })}
    </div>
  );
}
