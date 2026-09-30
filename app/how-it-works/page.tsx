import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/Reveal";
import { StepsDetailed } from "@/components/StepsDetailed";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "How it works",
  description: "Apply, get matched with a mentor, build with support and show what you made at demo day.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        crumb="How it works"
        eyebrow="How it works"
        title="Four steps. <em>No guesswork.</em>"
        body="Here's exactly what happens from the moment you apply until you're standing in front of an audience showing what you built."
        photo={photos.howHero}
        position="center 35%"
      >
        <Link href="/apply" className="btn bg-ocean-tertiary px-7 py-3.5 text-ocean-deep hover:-translate-y-0.5 hover:bg-white">Start your application</Link>
      </PageHero>
      <section className="bg-tint py-24 lg:py-32">
        <div className="container">
          <SectionHeading center eyebrow="The process" title="From application <em>to demo day.</em>" />
          <div className="mt-16">
            <StepsDetailed />
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
