import Image from "next/image";

/**
 * FMP mark + wordmark. The mark swaps to a light-S version in dark mode.
 * `onDark` forces the light version (for always-dark areas like the footer).
 */
export function Logo({ compact = false, onDark = false }: { compact?: boolean; onDark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative h-10 w-10 shrink-0">
        {onDark ? (
          <Image src="/brand/fmp-mark-light.png" alt="" fill sizes="40px" className="object-contain" />
        ) : (
          <>
            <Image src="/brand/fmp-mark.png" alt="" fill sizes="40px" className="object-contain dark:hidden" priority />
            <Image src="/brand/fmp-mark-light.png" alt="" fill sizes="40px" className="hidden object-contain dark:block" priority />
          </>
        )}
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-logo text-[1.05rem] font-semibold uppercase tracking-[0.08em] ${
              onDark ? "text-ocean-mist" : "text-[#03647A] dark:text-ocean-mist"
            }`}
          >
            Full Stackers
          </span>
          <span className={`mt-1 font-logo text-[0.6rem] font-medium uppercase tracking-[0.22em] ${onDark ? "text-ocean-mist/60" : "text-muted"}`}>
            Mentorship Program
          </span>
        </span>
      )}
      <span className="sr-only">Full Stackers Mentorship Program</span>
    </span>
  );
}
