import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { photos } from "@/data/photos";
import { contact, faqGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to the questions people ask most about joining FMP.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumb="FAQ"
        eyebrow="Questions"
        title="Ask us <em>anything.</em>"
        body="These are the questions we get asked most. If yours isn't here, send us an email and a real person will reply."
        photo={photos.phoneChat}
      />
      <section className="bg-tint py-24 lg:py-28">
        <div className="container mb-14">
          <SectionHeading eyebrow="Good to know" title="The questions <em>we hear most.</em>" />
        </div>
        <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold">
                Still <em>curious?</em>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">We usually reply within a day or two.</p>
              <a href={`mailto:${contact.email}`} className="btn-primary mt-6 w-full">
                <Mail size={16} /> Email us
              </a>
            </div>
          </Reveal>
          <div className="flex flex-col gap-14">
            {faqGroups.map((g, i) => (
              <div key={g.title}>
                <h2 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand">{g.title}</h2>
                <FaqList items={g.items} defaultOpen={i === 0 ? 0 : null} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
