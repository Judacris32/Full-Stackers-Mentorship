import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { mentors } from "@/data/mentors";
import { MentorCard } from "./MentorCard";
import { Reveal, SectionHeading } from "./Reveal";

export function MentorGrid() {
  return (
    <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {mentors.map((m, i) => (
        <MentorCard key={m.id} mentor={m} index={i} />
      ))}
    </div>
  );
}

export function Mentors() {
  return (
    <section className="bg-aurora relative overflow-hidden py-24 lg:py-32">
      <div className="dots fade-mask pointer-events-none absolute inset-0 opacity-50" />
      <div className="container relative">
        <SectionHeading
          eyebrow="The mentors"
          title="Meet the people <em>in your corner.</em>"
          body="Engineers, designers and product leads who still remember their first job hunt, and want to make that part shorter for you."
        />
        <div className="mt-14">
          <MentorGrid />
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Link href="/mentors" className="btn-ghost">
            All mentors <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
