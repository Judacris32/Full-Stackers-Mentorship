"use client";

import { ArrowRight, ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { contact, nav, tracks } from "@/data/site";
import { Logo } from "./Logo";

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.8v1.6h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.55 4.77 5.87v6h-4v-5.3c0-1.27-.02-2.9-1.84-2.9-1.84 0-2.12 1.39-2.12 2.8v5.4h-4V9.75Z",
  },
  {
    label: "X",
    href: "#",
    path: "M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.6c2.7 0 3.1 0 4.1.06 2.8.13 4.1 1.45 4.2 4.2.05 1.07.06 1.4.06 4.14s0 3.07-.06 4.14c-.13 2.74-1.43 4.07-4.2 4.2-1.07.05-1.4.06-4.1.06s-3.07 0-4.14-.06c-2.8-.13-4.07-1.47-4.2-4.2C3.6 15.07 3.6 14.74 3.6 12s0-3.07.06-4.14c.13-2.75 1.43-4.07 4.2-4.2C8.93 3.6 9.26 3.6 12 3.6Z",
  },
];

/** A footer link: mint colour, sliding underline and a small arrow on hover. */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 text-[0.95rem] text-ocean-mist/65 transition-colors duration-300 hover:text-ocean-tertiary">
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-ocean-tertiary transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
      <ArrowRight size={14} className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-ocean-tertiary">
      <span className="h-1.5 w-1.5 rounded-full bg-ocean-tertiary" />
      {children}
    </h4>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071B45] text-ocean-mist">
      {/* layered brand background — always dark, in both themes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_0%_0%,rgb(59_167_242/0.28),transparent_70%),radial-gradient(45%_60%_at_100%_100%,rgb(127_231_214/0.16),transparent_70%),linear-gradient(160deg,#0B3D91_0%,#071B45_45%,#040E24_100%)]" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.35] [--ink:232_246_255] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      {/* mint accent line on top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ocean-tertiary to-transparent" />

      <div className="container relative">
        {/* CTA strip */}
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 py-14 text-center lg:flex-row lg:py-16 lg:text-left">
          <div>
            <p className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Ready when you are. <em className="font-serif font-normal italic text-ocean-tertiary">Let&apos;s build.</em>
            </p>
            <p className="mt-3 text-ocean-mist/65">Applications for the next cohort are open. It takes about five minutes.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/apply"
              className="group btn bg-ocean-tertiary px-7 py-3.5 text-ocean-deep shadow-[0_12px_30px_-10px_rgb(127_231_214/0.55)] hover:-translate-y-0.5 hover:bg-white"
            >
              Apply as a mentee
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/apply?role=mentor" className="btn border border-white/20 bg-white/5 px-7 py-3.5 text-white backdrop-blur hover:border-ocean-tertiary/60 hover:bg-white/10">
              Become a mentor
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.3fr] lg:gap-12">
          <div>
            <Link href="/" aria-label="FMP home" className="inline-block transition-opacity hover:opacity-85">
              <Logo onDark />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-ocean-mist/65">
              A mentorship community for people building careers across every part of tech, from the first line of code to the first offer letter.
            </p>
            <div className="mt-7 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-ocean-mist/80 transition-all duration-300 hover:-translate-y-1 hover:border-ocean-tertiary hover:bg-ocean-tertiary hover:text-ocean-deep hover:shadow-[0_10px_24px_-8px_rgb(127_231_214/0.6)]"
                >
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <ColumnTitle>Explore</ColumnTitle>
            <ul className="mt-6 space-y-3.5">
              <li><FooterLink href="/">Home</FooterLink></li>
              {nav.map((n) => (
                <li key={n.href}><FooterLink href={n.href}>{n.label}</FooterLink></li>
              ))}
              <li><FooterLink href="/apply">Apply</FooterLink></li>
            </ul>
          </div>

          <div>
            <ColumnTitle>Career paths</ColumnTitle>
            <ul className="mt-6 grid gap-x-6 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-1">
              {tracks.map((t) => (
                <li key={t.key}>
                  <FooterLink href={`/career-paths#${t.key}`}>{t.title.replace(" (UI/UX)", "")}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>Talk to us</ColumnTitle>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition-all duration-300 hover:border-ocean-tertiary/50 hover:bg-white/[0.08]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ocean-tertiary/15 text-ocean-tertiary transition-colors group-hover:bg-ocean-tertiary group-hover:text-ocean-deep">
                    <Mail size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-wider text-ocean-mist/50">Email</span>
                    <span className="block truncate text-sm font-medium text-white">{contact.email}</span>
                  </span>
                  <ArrowUpRight size={16} className="ml-auto shrink-0 text-ocean-mist/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ocean-tertiary" />
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ocean-tertiary/15 text-ocean-tertiary">
                  <MapPin size={17} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-ocean-mist/50">Where</span>
                  <span className="block text-sm font-medium text-white">{contact.location}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Big wordmark */}
        <p
          aria-hidden
          className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[12.5vw] font-bold leading-[0.85] tracking-tight text-transparent [-webkit-text-stroke:1px_rgb(232_246_255/0.14)] xl:text-[9.75rem]"
        >
          FULL STACKERS
        </p>

        {/* Bottom bar */}
        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-ocean-mist/55 sm:flex-row">
          <p>© {new Date().getFullYear()} Full Stackers Mentorship Program. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-ocean-mist/80 transition-all duration-300 hover:border-ocean-tertiary hover:text-ocean-tertiary"
          >
            Back to top
            <ArrowUp size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
