import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Photo } from "@/data/photos";
import { Rich } from "./Reveal";

/**
 * Inner-page header: the photo is the background, content is centred on top.
 * Same pattern as the home hero, just shorter.
 */
export function PageHero({
  crumb,
  eyebrow,
  title,
  body,
  photo,
  position = "center",
  children,
}: {
  crumb: string;
  eyebrow: string;
  title: string;
  body: string;
  photo: Photo;
  /** CSS object-position for the background photo, e.g. "center 30%" */
  position?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[72svh] items-center justify-center overflow-hidden bg-ocean-deep text-white">
      <Image src={photo.src} alt={photo.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/85 via-ocean-deep/60 to-ocean-deep/90" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(11_61_145/0.45),transparent_75%)]" />
      <div className="grid-lines fade-mask pointer-events-none absolute inset-0 opacity-30 [--ink:232_246_255]" />

      <div className="container relative z-10 flex flex-col items-center pb-20 pt-36 text-center">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-white/60">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight size={14} />
          <span className="text-white">{crumb}</span>
        </nav>
        <span className="eyebrow mt-6 border-white/20 bg-white/10 text-ocean-tertiary backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-ocean-tertiary" />
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl text-[2.7rem] font-semibold leading-[1.02] sm:text-6xl lg:text-[4.6rem] [&_em]:!text-ocean-tertiary">
          <Rich text={title} />
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{body}</p>
        {children && <div className="mt-9 flex flex-col items-center">{children}</div>}
      </div>
    </section>
  );
}
