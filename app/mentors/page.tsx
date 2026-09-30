import type { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { MentorGrid } from "@/components/Mentors";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { photos } from "@/data/photos";
import { becomeMentor, mentorPromises } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentors",
  description: "Meet the engineers, designers and product people who mentor at FMP.",
};

export default function MentorsPage() {
  return (
    <>
      <PageHero
        crumb="Mentors"
        eyebrow="The mentors"
        title="People who've been <em>where you are.</em>"
        body="Our mentors work in tech every day. They've failed interviews, shipped bugs to production and figured it out anyway. Now they want to help you get there faster."
        photo={photos.mentorsHero}
      />

      <section className="bg-tint py-20">
        <div className="container grid gap-5 md:grid-cols-3">
          {mentorPromises.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="card h-full p-7">
                <span className="font-serif text-4xl italic text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold">{m.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-aurora py-24 lg:py-28">
        <div className="container">
          <SectionHeading eyebrow="This cohort" title="Your mentors for <em>this cohort.</em>" body="Founders, CTOs, designers and engineers who build real products across Africa and beyond, and who show up for their mentees every week." />
          <div className="mt-14">
            <MentorGrid />
          </div>
        </div>
      </section>

      <section className="bg-tint py-24 lg:py-28">
        <div className="container">
          <Reveal>
            <div className="card grid overflow-hidden lg:grid-cols-2">
              <div className="relative min-h-[320px]">
                <Image src={photos.mentorsBecome.src} alt={photos.mentorsBecome.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-[30%_center]" />
              </div>
              <div className="flex flex-col items-center p-8 text-center sm:p-12">
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Become a mentor
                </span>
                <h2 className="mt-5 text-4xl font-semibold leading-tight">
                  Someone helped you once. <em>Pay it forward.</em>
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Mentoring is a couple of hours a week. For the person on the other side, it can change the direction of their career.
                </p>
                <ul className="mt-6 flex flex-col items-start gap-3 text-left">
                  {becomeMentor.map((b) => (
                    <li key={b} className="flex gap-3 text-[0.95rem]">
                      <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/apply?role=mentor" className="btn-primary mt-8">Apply to mentor</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
