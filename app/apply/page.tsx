import type { Metadata } from "next";
import { Clock, MailCheck, Users } from "lucide-react";
import { Suspense } from "react";
import { ApplyForm } from "@/components/ApplyForm";
import { PageHero } from "@/components/PageHero";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to join the next FMP cohort as a mentee or a mentor.",
};

const notes = [
  { icon: Clock, text: "Takes about five minutes" },
  { icon: Users, text: "Read by a real person" },
  { icon: MailCheck, text: "Reply within a week" },
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        crumb="Apply"
        eyebrow="Apply"
        title="Let's get you <em>started.</em>"
        body="Tell us a bit about yourself. There are no wrong answers here. We just want to understand where you are so we can match you well."
        photo={photos.applyHero}
        position="center 35%"
      >
        <ul className="flex flex-wrap justify-center gap-3">
          {notes.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
              <Icon size={16} className="text-ocean-tertiary" />
              {text}
            </li>
          ))}
        </ul>
      </PageHero>
      <section className="bg-aurora relative py-20 lg:py-24">
        <div className="dots fade-mask pointer-events-none absolute inset-0 opacity-50" />
        <div className="container relative max-w-3xl">
          <Suspense>
            <ApplyForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
