"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex h-16 max-w-[1240px] items-center justify-between rounded-full border pl-3 pr-2 transition-all duration-300 sm:pl-4 ${
          scrolled || open
            ? "border-ink/10 bg-surface/85 shadow-card backdrop-blur-xl"
            : "border-white/20 bg-surface/75 backdrop-blur-xl"
        }`}
      >
        <Link href="/" aria-label="FMP home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop pills */}
        <ul className="hidden items-center gap-1 rounded-full border border-ink/[0.08] bg-surface/70 p-1 backdrop-blur lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href} className="relative">
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Link
                  href={item.href}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-brand-ink" : "text-muted hover:bg-brand/10 hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/apply" className="btn-primary hidden !py-2.5 sm:inline-flex">
            Apply now <ArrowRight size={16} />
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-surface/70 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-[1240px] rounded-[28px] border border-ink/10 bg-surface/95 p-3 shadow-card backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-full px-4 py-3 font-display text-lg font-medium transition-colors ${
                      isActive(item.href) ? "bg-brand text-brand-ink" : "hover:bg-brand/10 hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link href="/apply" className="btn-primary w-full">
                  Apply now <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
