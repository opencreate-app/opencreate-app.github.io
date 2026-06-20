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
    <div className="max-w-full">
      <div
        className={`mb-3 flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-[0.26em] ${accentClassName}`}
      >
        {icon}
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-balance text-center md:text-left text-3xl font-black tracking-[-0.04em] text-[#1a1a1a] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm text-balance leading-6 text-[#4a4a4a] sm:text-base text-center md:text-left">
          {description}
        </p>
      ) : null}
    </div>
  );
}
