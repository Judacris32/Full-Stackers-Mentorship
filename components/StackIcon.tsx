import type { StackIcon as Icon } from "@/lib/stack";

/** A single brand icon in its real colour (near-black icons flip to light ink in dark mode). */
export function StackIcon({ icon, size = 22 }: { icon: Icon; size?: number }) {
  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      style={{ color: icon.hex }}
      data-dark-icon={icon.darkIcon}
    >
      <path d={icon.path} />
    </svg>
  );
}

export function StackChip({ icon }: { icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface/80 px-3 py-1.5 text-xs font-medium text-ink">
      <StackIcon icon={icon} size={14} />
      {icon.title}
    </span>
  );
}
