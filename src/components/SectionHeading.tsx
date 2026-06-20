import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  accentClassName?: string;
  icon?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  accentClassName = "text-[var(--accent)]",
  icon,
}: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <div
        className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] ${accentClassName}`}
      >
        {icon}
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-balance text-3xl font-black tracking-[-0.04em] text-[#1a1a1a] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4a4a4a] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
