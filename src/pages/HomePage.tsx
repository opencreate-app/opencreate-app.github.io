import {
  ArrowRight,
  Code2,
  Download,
  // ExternalLink,
  Gauge,
  Github,
  Heart,
  Layers3,
  Puzzle,
  Rocket,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppLink } from "../components/AppLink";
import { LanguageToggle } from "../components/LanguageToggle";
import { LinuxLogo, MacOSLogo, WindowsLogo } from "../components/Icons";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useForgeRelease } from "../hooks/useForgeRelease";
import { useI18n } from "../i18n-context";
import { HOME_META } from "../siteMeta";
import { MadeInBrasilSeal } from "../components/MadeInBrasilSeal";

const pillarIcons: LucideIcon[] = [Code2, Gauge, Shield];

function SiteNav() {
  const { copy } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <AppLink href="/" className="shrink-0" aria-label="OpenCreate home">
          <img
            src="/OpenCreate-Logo.svg"
            alt="OpenCreate"
            width="200"
            height="40"
            className="h-10"
          />
        </AppLink>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-sm font-medium text-[#565656] lg:flex"
        >
          <a
            href="#about"
            className="transition hover:text-[#5555FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5555FF]"
          >
            {copy.nav.about}
          </a>
          <a
            href="#values"
            className="transition hover:text-[#5555FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5555FF]"
          >
            {copy.nav.values}
          </a>
          <a
            href="#community"
            className="transition hover:text-[#5555FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5555FF]"
          >
            {copy.nav.community}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <AppLink
            href="/forge"
            className="hidden items-center gap-2 rounded-full bg-[#ff6a00] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(255,85,85,0.25)] transition hover:-translate-y-0.5 hover:bg-[#e85e00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a00] sm:flex"
          >
            {copy.nav.forge}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </AppLink>
        </div>
      </div>
    </header>
  );
}

function PillarCard({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
}) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-[#dfe3ff] bg-white p-6 shadow-[0_20px_60px_rgba(16,24,40,0.05)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f4ff] text-[#5555FF]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold tracking-[-0.03em] text-[#1a1a1a]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#555]">{description}</p>
    </article>
  );
}

function Hero() {
  const { copy } = useI18n();
  return (
    <section
      id="about"
      aria-labelledby="home-title"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(85,85,255,0.12),_transparent_42%),linear-gradient(180deg,_#ffffff_0%,_#f7f8ff_100%)]"
    >
      <div
        className="absolute inset-0 -z-0 opacity-80 [background-image:linear-gradient(rgba(85,85,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(85,85,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]"
        aria-hidden="true"
      />
      <div className="mx-auto grid min-h-[72vh] w-full max-w-7xl place-items-center px-6 py-20 md:px-8">
        <Reveal className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#5555FF]">
            {copy.home.eyebrow}
          </p>
          <img
            src="/OpenCreate-Logo.svg"
            alt=""
            width="400"
            height="80"
            className="mb-8 h-10 drop-shadow-[0_20px_40px_rgba(85,85,255,0.18)]"
          />
          <h1
            id="home-title"
            className="max-w-4xl text-balance text-4xl font-black tracking-[-0.05em] text-[#101010] sm:text-6xl"
          >
            {copy.home.title}
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-base leading-8 text-[#4b4b4b] sm:text-lg">
            {copy.home.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <AppLink
              href="/forge"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#5555FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(85,85,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#4444f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5555FF]"
            >
              {copy.home.primary}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </AppLink>
            <a
              href="#values"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#cbd0ff] bg-white px-6 py-3.5 text-sm font-semibold text-[#1a1a1a] shadow-[0_18px_40px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:border-[#5555FF] hover:text-[#5555FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5555FF]"
            >
              {copy.home.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  const { copy } = useI18n();
  return (
    <section
      id="values"
      aria-labelledby="values-title"
      className="bg-white p-6 md:p-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="values-title"
            eyebrow={copy.home.valuesEyebrow}
            title={copy.home.valuesTitle}
            description={copy.home.valuesDescription}
            icon={<Layers3 className="h-5 w-5" aria-hidden="true" />}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {copy.home.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06}>
              <PillarCard {...pillar} Icon={pillarIcons[index]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const { copy } = useI18n();
  const { downloadUrl, platform } = useForgeRelease();
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-title"
      className="bg-[#f7f8ff] p-6 md:p-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="solutions-title"
            eyebrow={copy.home.productsEyebrow}
            title={copy.home.productsTitle}
            description={copy.home.productsDescription}
            icon={<Puzzle className="h-5 w-5" aria-hidden="true" />}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <Reveal>
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-[#e2e5ff] bg-[linear-gradient(135deg,_#330b00_0%,_#601100_48%,_#ff6a00_150%)] p-8 text-white shadow-[0_30px_90px_rgba(47,22,17,0.25)]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">
                  {copy.home.forgeLabel}
                </p>
                <img
                  src="/OpenCreate-Forge-Logo-dark.svg"
                  alt="OpenCreate Forge"
                  width="360"
                  height="70"
                  className="mt-5 h-10"
                />
                <p className="mt-6 max-w-xl text-sm leading-6 text-white/90 text-balance">
                  {copy.home.forgeDescription}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap flex-col sm:flex-row gap-3">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#11162f] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>
                    {copy.home.forgeSecondary}
                    {platform ? ` (${platform})` : ""}
                  </span>
                  {platform === "Windows" && <WindowsLogo size={18} />}
                  {platform === "macOS" && <MacOSLogo size={18} />}
                  {platform === "Linux" && <LinuxLogo size={18} />}
                  {!platform && (
                    <Download className="h-5 w-5" aria-hidden="true" />
                  )}
                </a>
                <AppLink
                  href="/forge"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {copy.home.forgePrimary}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </AppLink>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col justify-center rounded-[32px] border-2 border-dashed border-[#cbd0ff] p-8">
              <Rocket className="h-6 w-6 text-[#5555FF]" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#1a1a1a]">
                {copy.home.moreTitle}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#555]">
                {copy.home.moreDescription}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Community() {
  const { copy } = useI18n();
  return (
    <section
      id="community"
      aria-labelledby="community-title"
      className="bg-[#f7f8ff] p-6 md:p-8"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,_#13162a_0%,_#222a52_48%,_#5555FF_150%)] px-6 py-12 text-white sm:px-10">
            <div className="flex flex-col items-center text-center">
              <h2
                id="community-title"
                className="text-3xl font-black tracking-[-0.04em] sm:text-5xl text-balance"
              >
                {copy.home.communityTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-balance text-sm leading-6 text-white/80 sm:text-base">
                {copy.home.communityDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/opencreate-app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#11162f] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {copy.home.communityPrimary}
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
                {/* <a
                  href="https://github.com/opencreate-app/opencreate-app.github.io/issues"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {copy.home.communitySecondary}
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                </a> */}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { copy } = useI18n();
  return (
    <footer className="border-t border-black/5 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <img
            src="/OpenCreate-Logo.svg"
            alt="OpenCreate"
            width="200"
            height="40"
            className="h-10"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#666] text-balance">
            {copy.footer.tagline}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#1a1a1a]">
            {copy.footer.resources}
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-[#666]">
            <a
              href="https://github.com/opencreate-app/opencreate-app.github.io"
              target="_blank"
              rel="noreferrer"
            >
              {copy.footer.source}
            </a>
            <a
              href="https://github.com/opencreate-app/opencreate-app.github.io/issues"
              target="_blank"
              rel="noreferrer"
            >
              {copy.footer.bug}
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#1a1a1a]">
            {copy.footer.products}
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-[#666]">
            <AppLink href="/forge">OpenCreate Forge</AppLink>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-[#1a1a1a]">
            {copy.footer.social}
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-[#666]">
            <a
              href="https://github.com/opencreate-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://threads.com/opencreate.app"
              target="_blank"
              rel="noreferrer"
            >
              Threads
            </a>
            <a
              href="https://instagram.com/opencreate.app"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-4 border-t border-black/5 pt-6 text-sm text-[#777]">
        <div className="flex flex-col items-center gap-1 text-center">
          <span>{copy.footer.copyright}</span>
          <span className="inline-flex items-center gap-1">
            {copy.footer.created}
            <Heart
              size={16}
              className="text-red-500"
              fill="currentColor"
              aria-hidden="true"
            />
          </span>
        </div>
        <MadeInBrasilSeal height={56} />
      </div>
    </footer>
  );
}

export function HomePage() {
  const { language } = useI18n();
  useDocumentMeta({
    ...HOME_META,
    title:
      language === "pt"
        ? `${HOME_META.title} — Crie livremente, para sempre`
        : `${HOME_META.title} — Create freely, forever`,
    description:
      language === "pt"
        ? "Ferramentas criativas rápidas, privadas e de código aberto para designers e artistas."
        : HOME_META.description,
  });
  return (
    <div className="min-h-screen bg-[#e6e6e6] text-[#1a1a1a]">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content" className="page-home">
        <Hero />
        <Values />
        <Solutions />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
