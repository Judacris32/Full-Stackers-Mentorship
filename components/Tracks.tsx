import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { tracks } from "@/data/site";
import { getIcons } from "@/lib/stack";
import { Reveal, SectionHeading } from "./Reveal";
import { StackIcon } from "./StackIcon";

/** Home page grid: every career path as an image card linking to its section on /career-paths. */
export function Tracks() {
  return (
    <section className="bg-tint relative overflow-hidden py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Career paths"
          title="Full stack isn't one skill. <em>It's a whole team.</em>"
          body="Pick the job you want to grow into. Each path is led by people doing that job right now, and ends with a project you can show."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t, i) => {
            const tools = getIcons(t.tools).slice(0, 4);
            return (
              <Reveal key={t.key} delay={(i % 4) * 0.07}>
                <Link
                  href={`/career-paths#${t.key}`}
                  className="card group flex h-full flex-col overflow-hidden p-2 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                    <Image
                      src={t.photo.src}
                      alt={t.photo.alt}
                      fill
                      sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-2.5 py-1 font-display text-[11px] font-semibold text-ink backdrop-blur">
                      0{i + 1}
                    </span>
                    <div className="absolute bottom-3 left-3 flex gap-1.5">
                      {tools.map((icon) => (
                        <span key={icon.slug} className="grid h-8 w-8 place-items-center rounded-full bg-white/95 shadow-sm" title={icon.title}>
                          <StackIcon icon={{ ...icon, darkIcon: false }} size={15} />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                    <h3 className="flex items-start justify-between gap-3 text-lg font-semibold leading-tight">
                      {t.title}
                      <ArrowUpRight size={18} className="mt-0.5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t.short}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Link href="/career-paths" className="btn-ghost">
            Explore all career paths <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
