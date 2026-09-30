import { getIcons, stackRowOne, stackRowTwo, type StackIcon as Icon } from "@/lib/stack";
import { StackIcon } from "./StackIcon";

function Row({ items, reverse = false }: { items: Icon[]; reverse?: boolean }) {
  // The list is rendered twice so the loop is seamless.
  return (
    <div className="marquee-mask group flex overflow-hidden">
      <ul
        className={`flex shrink-0 gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((icon, i) => (
          <li
            key={`${icon.slug}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-ink/[0.08] bg-surface/80 py-2.5 pl-3 pr-5 shadow-sm backdrop-blur transition-colors hover:border-brand/30"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-bg-2">
              <StackIcon icon={icon} size={18} />
            </span>
            <span className="text-sm font-medium">{icon.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StackMarquee() {
  const one = getIcons(stackRowOne);
  const two = getIcons(stackRowTwo);
  return (
    <section className="bg-tint relative border-y border-ink/[0.06] py-14" aria-label="Tools you'll work with">
      <div className="container mb-9 flex flex-col items-center gap-2 text-center">
        <p className="font-display text-2xl font-semibold sm:text-3xl">
          The tools you&apos;ll use <em className="font-serif font-normal italic text-brand">on the job</em>
        </p>
        <p className="max-w-md text-sm text-muted">
          Every track uses the same tools real teams use. No outdated stacks, no toy setups.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Row items={one} />
        <Row items={two} reverse />
      </div>
    </section>
  );
}
