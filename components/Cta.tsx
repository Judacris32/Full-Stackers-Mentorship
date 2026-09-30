import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function Cta() {
  return (
    <section className="bg-tint py-24 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="bg-deep relative overflow-hidden rounded-[40px] px-6 py-16 text-center sm:px-12 lg:py-24">
            <div className="grid-lines fade-mask absolute inset-0 opacity-50 [--ink:232_246_255]" />
            <div className="relative mx-auto max-w-2xl">
              <span className="relative mx-auto block h-16 w-16">
                <Image src="/brand/fmp-mark-light.png" alt="" fill sizes="64px" className="object-contain" />
              </span>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">
                The next cohort starts soon. <em className="!text-ocean-tertiary">Save your seat.</em>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-lg text-ocean-mist/80">
                The application takes about five minutes. We read every one ourselves, and you&apos;ll hear back from us within a week.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/apply" className="btn bg-ocean-tertiary px-7 py-4 text-ocean-deep hover:-translate-y-0.5 hover:bg-white">
                  Apply as a mentee <ArrowRight size={18} />
                </Link>
                <Link href="/apply?role=mentor" className="btn border border-white/25 px-7 py-4 text-white hover:bg-white/10">
                  Apply as a mentor
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
