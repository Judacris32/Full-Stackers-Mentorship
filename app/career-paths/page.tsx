import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/PageHero";
import { TrackList } from "@/components/TrackList";
import { photos } from "@/data/photos";
import { tracks } from "@/data/site";

export const metadata: Metadata = {
  title: "Career Paths",
  description: "Frontend, backend, product design, mobile, cloud, data, cybersecurity and product management.",
};

export default function CareerPathsPage() {
  return (
    <>
      <PageHero
        crumb="Career Paths"
        eyebrow="Eight career paths"
        title="Choose the job <em>you want to grow into.</em>"
        body="Every path is built around a real role in tech, with its own mentor, tools and final project. Not sure which one is you? Pick the closest one. You can switch in the first two weeks."
        photo={photos.workspace}
      >
        <div className="flex max-w-3xl flex-wrap justify-center gap-2">
          {tracks.map((t) => (
            <Link key={t.key} href={`#${t.key}`} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-ocean-tertiary hover:text-ocean-deep">
              {t.title}
            </Link>
          ))}
        </div>
      </PageHero>
      <section className="bg-tint py-24 lg:py-32">
        <div className="container">
          <TrackList />
        </div>
      </section>
      <Cta />
    </>
  );
}
