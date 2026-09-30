import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/data/photos";
import { Reveal } from "./Reveal";

export function CommunityBand() {
  return (
    <section className="bg-aurora py-24 lg:py-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px]">
            <Image src={photos.community.src} alt={photos.community.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/85 via-ocean-primary/70 to-ocean-deep/90" />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center px-7 py-20 text-center sm:px-12 lg:py-28">
              <span className="eyebrow border-white/20 bg-white/10 text-ocean-tertiary">
                <span className="h-1.5 w-1.5 rounded-full bg-ocean-tertiary" />
                The community
              </span>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
                Nobody here learns <em className="!text-ocean-tertiary">alone.</em>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ocean-mist/85">
                Late-night debugging calls, study groups that turn into friendships, and people who share job links the
                moment they see them. The mentorship ends after twelve weeks. The community doesn&apos;t.
              </p>
              <Link href="/program" className="btn mt-9 bg-ocean-tertiary text-ocean-deep hover:-translate-y-0.5 hover:bg-white">
                What&apos;s inside the program <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
