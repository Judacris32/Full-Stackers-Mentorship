"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { tracks } from "@/data/site";

type Role = "mentee" | "mentor";

const levels = ["Complete beginner", "I know the basics", "I've built a few projects", "I already work in tech"];
const hours = ["3–5 hours", "6–10 hours", "10+ hours"];

const field =
  "w-full rounded-2xl border border-ink/10 bg-surface px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-muted/60 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10";

/**
 * Frontend-only for now: the form validates and shows a success state,
 * but doesn't send anything. Hook `onSubmit` up to Supabase/Formspree later.
 */
export function ApplyForm() {
  const params = useSearchParams();
  const [role, setRole] = useState<Role>(params.get("role") === "mentor" ? "mentor" : "mentee");
  const [track, setTrack] = useState(params.get("track") ?? "");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send `new FormData(e.currentTarget)` to your backend
    setSent(true);
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (sent) {
    return (
      <motion.div id="apply-form" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="card p-10 text-center">
        <CheckCircle2 size={48} className="mx-auto text-emerald-500" />
        <h2 className="mt-5 text-3xl font-semibold">
          Got it. <em>Thank you.</em>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          We read every application ourselves. Expect an email from us within a week. While you wait, keep building.
        </p>
      </motion.div>
    );
  }

  return (
    <form id="apply-form" onSubmit={onSubmit} className="card p-6 sm:p-10">
      {/* role switch */}
      <div className="inline-flex rounded-full border border-ink/10 bg-bg-2 p-1" role="radiogroup" aria-label="I want to apply as">
        {(["mentee", "mentor"] as Role[]).map((r) => (
          <button
            key={r}
            type="button"
            role="radio"
            aria-checked={role === r}
            onClick={() => setRole(r)}
            className="relative rounded-full px-5 py-2 text-sm font-semibold"
          >
            {role === r && <motion.span layoutId="role-pill" className="absolute inset-0 rounded-full bg-brand" />}
            <span className={`relative ${role === r ? "text-brand-ink" : "text-muted"}`}>As a {r}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Full name
          <input required name="name" autoComplete="name" placeholder="Adaeze Okafor" className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Phone / WhatsApp
          <input name="phone" type="tel" autoComplete="tel" placeholder="+234" className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Career path
          <select required name="track" value={track} onChange={(e) => setTrack(e.target.value)} className={field}>
            <option value="" disabled>Choose a career path</option>
            {tracks.map((t) => (
              <option key={t.key} value={t.key}>{t.title}</option>
            ))}
          </select>
        </label>

        <AnimatePresence mode="wait" initial={false}>
          {role === "mentee" ? (
            <motion.div key="mentee" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-5 sm:col-span-2 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium">
                Where are you right now?
                <select required name="level" defaultValue="" className={field}>
                  <option value="" disabled>Pick one</option>
                  {levels.map((l) => <option key={l}>{l}</option>)}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                Hours you can give each week
                <select required name="hours" defaultValue="" className={field}>
                  <option value="" disabled>Pick one</option>
                  {hours.map((h) => <option key={h}>{h}</option>)}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium sm:col-span-2">
                What do you want to be able to do in 12 weeks?
                <textarea required name="goal" rows={4} placeholder="Be honest. 'Build my first real app and stop feeling lost' is a great answer." className={field} />
              </label>
            </motion.div>
          ) : (
            <motion.div key="mentor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-5 sm:col-span-2 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium">
                Current role and company
                <input required name="role" placeholder="Senior Frontend Engineer, Acme" className={field} />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                Years in tech
                <input required name="years" type="number" min={1} placeholder="5" className={field} />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium sm:col-span-2">
                Why do you want to mentor?
                <textarea required name="why" rows={4} placeholder="A sentence or two is plenty." className={field} />
              </label>
            </motion.div>
          )}
        </AnimatePresence>

        <label className="flex flex-col gap-2 text-sm font-medium sm:col-span-2">
          Portfolio, GitHub or LinkedIn <span className="font-normal text-muted">(optional)</span>
          <input name="link" type="url" placeholder="https://" className={field} />
        </label>
      </div>

      <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-muted">We&apos;ll only use your details to review your application.</p>
        <button type="submit" className="btn-primary px-7 py-3.5">
          Send application <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
