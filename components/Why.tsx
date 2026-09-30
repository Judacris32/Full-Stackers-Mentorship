import Image from "next/image";
import { photos } from "@/data/photos";
import { why } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Why() {
  return (
    <section className="bg-aurora relative overflow-hidden py-24 lg:py-32">
      <div className="dots fade-mask pointer-events-none absolute inset-0 opacity-60" />
      <div className="container relative">
        <SectionHeading eyebrow={why.eyebrow} title={why.title} className="!max-w-4xl" />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-[480px] pb-10 lg:pb-0">
            {/* soft brand glow behind the photo */}
            <div className="absolute -inset-5 -z-10 rounded-[48px] bg-gradient-to-br from-accent/30 via-highlight/25 to-transparent blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-white/60 shadow-card">
              <Image
                src={photos.whyTeam.src}
                alt={photos.whyTeam.alt}
                fill
                sizes="(min-width:1024px) 480px, 90vw"
                className="object-cover object-[center_40%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/30 via-transparent to-transparent" />
            </div>
            {/* quote card overlapping the corner */}
            <div className="absolute -bottom-2 -right-3 max-w-[240px] rounded-[28px] bg-brand p-5 text-brand-ink shadow-card sm:-right-8 lg:-bottom-8">
              <p className="font-serif text-2xl italic leading-tight">&ldquo;I finally stopped guessing.&rdquo;</p>
              <p className="mt-2 text-xs opacity-80">How we want every mentee to feel by week four.</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              {why.paragraphs.map((p, i) => (
                <p key={p.slice(0, 20)} className={`${i ? "mt-5" : ""} text-base leading-relaxed text-muted sm:text-lg`}>
                  {p}
                </p>
              ))}
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {why.points.map((pt, i) => (
                <Reveal key={pt.title} delay={i * 0.08}>
                  <div className="h-full border-t-2 border-accent pt-4">
                    <h3 className="text-base font-semibold">{pt.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{pt.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
