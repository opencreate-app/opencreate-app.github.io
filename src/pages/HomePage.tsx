import {
  ArrowRight,
  Code2,
  Github,
  Layers3,
  LucideIcon,
  Shield,
  Gauge,
  Puzzle,
  Rocket,
  ExternalLink,
  Heart,
} from "lucide-react";
import { AppLink } from "../components/AppLink";
// import {
//   ElectronLogo,
//   ReactLogo,
//   TailwindLogo,
//   TypescriptLogo,
// } from "../components/Icons";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { HOME_META } from "../siteMeta";
import { MadeInBrasilSeal } from "../components/MadeInBrasilSeal";

const pillars: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Transparent",
    description:
      "We believe creative tools should belong to the community. All of our code is public, auditable, and free for modification and continuous improvement.",
    icon: Code2,
  },
  {
    title: "Speed",
    description:
      "We optimize every line of code. We use modern web technologies and hardware rendering to ensure your workflow isn't interrupted by loading screens.",
    icon: Gauge,
  },
  {
    title: "Your Data Is Yours",
    description:
      "Our apps are offline-first. We do not collect invasive telemetry, we do not sell your data, and we do not require logins or subscriptions for you to work.",
    icon: Shield,
  },
];

// const techStack = [
//   { label: "React", icon: ReactLogo },
//   { label: "TypeScript", icon: TypescriptLogo },
//   { label: "Electron", icon: ElectronLogo },
//   { label: "Tailwind", icon: TailwindLogo },
// ];

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <AppLink href="./" className="flex items-center gap-3">
          <img src="/OpenCreate-Logo.svg" alt="OpenCreate" className="w-50" />
        </AppLink>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#565656] md:flex">
          <a href="#about" className="transition hover:text-[#5555FF]">
            About
          </a>
          <a href="#solutions" className="transition hover:text-[#5555FF]">
            Solutions
          </a>
          <a href="#manifest" className="transition hover:text-[#5555FF]">
            Manifest
          </a>
          <a href="#community" className="transition hover:text-[#5555FF]">
            Community
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/opencreate-app"
            target="_blank"
            rel="noreferrer"
            aria-label="OpenCreate on GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#1a1a1a] transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-sm"
          >
            <Github className="h-5 w-5" />
          </a>

          <AppLink
            href="./forge"
            className="hidden md:flex items-center gap-2 rounded-full bg-[#ff6a00] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(255,85,85,0.25)] transition hover:-translate-y-0.5 hover:bg-[#ff5a00]"
          >
            Read Forge
            <ArrowRight className="h-5 w-5" />
          </AppLink>
        </div>
      </div>
    </header>
  );
}

function PillarCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex flex-col rounded-[28px] border border-[#dfe3ff] bg-white p-6 shadow-[0_20px_60px_rgba(16,24,40,0.05)]">
      <div className="mb-5 inline-flex h-12 w-12 mx-auto md:mx-0 items-center justify-center rounded-2xl bg-[#f3f4ff] text-[#5555FF]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-bold tracking-[-0.03em] text-[#1a1a1a] text-center md:text-left">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#555] text-pretty text-center md:text-left">
        {description}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(85,85,255,0.12),_transparent_42%),linear-gradient(180deg,_#ffffff_0%,_#f7f8ff_100%)]"
    >
      <div className="absolute inset-0 -z-0 opacity-80 [background-image:linear-gradient(rgba(85,85,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(85,85,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="mx-auto grid min-h-[70vh] w-full max-w-7xl place-items-center p-6 md:p-8">
        <Reveal className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
          <img
            src="/OpenCreate-Logo.svg"
            alt=""
            className="mb-8 w-80 drop-shadow-[0_20px_40px_rgba(85,85,255,0.18)] sm:w-100"
          />

          <h1 className="max-w-4xl text-balance text-3xl font-black tracking-[-0.04em] text-[#101010] sm:text-5xl lg:text-5xl">
            Create freely, forever.
          </h1>

          <p className="mt-6 max-w-3xl text-balance text-base leading-8 text-[#4b4b4b] sm:text-lg">
            We develop applications aimed at designers and artists. No
            subscriptions, no abusive telemetry, open-source.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5555FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(85,85,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#4444f0]"
            >
              Our Solutions
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#manifest"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cbd0ff] bg-white px-6 py-3.5 text-sm font-semibold text-[#1a1a1a] shadow-[0_18px_40px_rgba(16,24,40,0.05)] transition hover:-translate-y-0.5 hover:border-[#5555FF] hover:text-[#5555FF]"
            >
              Read Manifest
              {/* <ExternalLink className="h-5 w-5" /> */}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Manifest() {
  return (
    <section id="manifest" className="bg-white p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Manifest"
            title="Open source, native speed, privacy first."
            description="We build tools that feel precise, fast, and respectful of the person behind the screen."
            icon={<Layers3 className="h-5 w-5" />}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <PillarCard {...pillar} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="bg-[#f7f8ff] p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Our Solutions"
            title="Tools designed to boost your creativity."
            description="OpenCreate focuses on professional tools that are fast, local-first, and free to inspect or extend."
            icon={<Puzzle className="h-5 w-5" />}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <Reveal>
            <div className="relative flex flex-col sm:flex-col lg:flex-row gap-8 items-center justify-center overflow-hidden rounded-[32px] border border-[#e2e5ff] bg-[linear-gradient(135deg,_#330b00_0%,_#601100_48%,_#ff6a00_150%)] p-8 text-white shadow-[0_30px_90px_rgba(47,22,17,0.25)]">
              <div className="relative shrink-0">
                <img
                  src="/OpenCreate-Forge-Logo-dark.svg"
                  alt="OpenCreate Forge"
                  className="w-70"
                />
              </div>
              <div className="flex flex-col lg:grid-cols-[1.1fr_0.9fr] items-center lg:items-start">
                <p className="mt-4 max-w-xl text-sm leading-6 text-white text-pretty text-center lg:text-left">
                  A professional image manipulation editor. Raster/text layers,
                  a double-buffering based engine, and native support for the
                  .ocfd format. Available for Desktop.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                  <AppLink
                    href="./forge"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#11162f] transition hover:-translate-y-0.5"
                  >
                    Read more
                    <ArrowRight className="h-5 w-5" />
                  </AppLink>
                  <a
                    href="https://github.com/gabrielborgesweb/opencreate-forge/releases/latest"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    Latest release
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full gap-6">
              <div className="flex flex-col rounded-[32px] border-3 border-dashed border-[#cbd0ff] p-8">
                <div className="inline-flex h-12 w-12 mx-auto md:mx-0 items-center justify-center rounded-2xl bg-[#f2f4ff] text-[#5555FF]">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-center md:text-left">
                  More tools are coming
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#555] text-pretty text-center md:text-left">
                  The catalog is intentionally small today so each product can
                  be polished to a professional standard.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="bg-[#f7f8ff] p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,_#13162a_0%,_#222a52_48%,_#5555FF_150%)] px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl text-center">
                By creators, for creators.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base text-center text-balance">
                OpenCreate is maintained (for now) by a single developer
                passionated for creativity, focused on free software and
                practical performance. You can help by reporting bugs,
                suggesting new features, or writing some code.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/opencreate-app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#11162f] transition hover:-translate-y-0.5"
                >
                  Contribute on GitHub
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/opencreate-app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Report Bugs or Submit Ideas
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              {/* <div className="grid grid-cols-2 gap-4">
                {techStack.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-3xl flex items-center gap-4 border border-white/15 bg-white/10 p-3 backdrop-blur-sm"
                  >
                    <Icon strokeWidth={1.5} />
                    <div className="font-semibold">{label}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/OpenCreate-Logo.svg" alt="OpenCreate" className="w-50" />
          </div>
        </div>

        <div>
          <div className="text-sm font-bold text-[#1a1a1a]">Resources</div>
          <div className="mt-4 grid gap-3 text-sm text-[#666]">
            <a
              href="https://github.com/opencreate-app"
              className="transition hover:text-[#5555FF]"
            >
              Source Code
            </a>
            <a
              href="https://github.com/opencreate-app"
              className="transition hover:text-[#5555FF]"
            >
              Report Bug
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-bold text-[#1a1a1a]">Products</div>
          <div className="mt-4 grid gap-3 text-sm text-[#666]">
            <AppLink href="./forge" className="transition hover:text-[#5555FF]">
              OpenCreate Forge
            </AppLink>
          </div>
        </div>

        <div>
          <div className="text-sm font-bold text-[#1a1a1a]">Social</div>
          <div className="mt-4 grid gap-3 text-sm text-[#666]">
            <a
              href="https://github.com/opencreate-app"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#5555FF]"
            >
              GitHub
            </a>
            <a
              href="https://threads.com/opencreate.app"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#5555FF]"
            >
              Threads
            </a>
            <a
              href="https://instagram.com/opencreate.app"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#5555FF]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mx-auto mt-12 max-w-7xl border-t border-black/5 pt-6 text-sm text-[#777]">
        <div className="flex gap-1 justify-center">
          <span>© 2026 OpenCreate. Created with</span>
          <Heart size={20} className="text-red-500" />
          <span>by Gabriel Borges.</span>
        </div>
        <div className="flex gap-1 justify-center">
          <MadeInBrasilSeal
            height={56}
            className="scale-[1] hover:scale-[1.1] transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
          />
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  useDocumentMeta(HOME_META);

  return (
    <div className="min-h-screen bg-[#e6e6e6] text-[#1a1a1a]">
      <SiteNav />
      <main>
        <Hero />
        <Manifest />
        <Solutions />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
