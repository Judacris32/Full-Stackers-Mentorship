import Image from "next/image";
import { perks } from "@/data/site";
import { Reveal } from "./Reveal";

/** What's included — image cards. */
export function Perks({ limit }: { limit?: number }) {
  const list = limit ? perks.slice(0, limit) : perks;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p, i) => (
        <Reveal key={p.title} delay={(i % 3) * 0.07}>
          <article className="card group h-full overflow-hidden p-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
              <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="px-4 pb-5 pt-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.body}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
