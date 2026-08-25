import {
  ArrowRight,
  Cable,
  CodeXml,
  DatabaseZap,
  Download,
  FileJson,
  Gauge,
  Github,
  Layers3,
  MonitorCog,
  Network,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppLink } from "../components/AppLink";
import { LanguageToggle } from "../components/LanguageToggle";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { LinuxLogo, MacOSLogo, WindowsLogo } from "../components/Icons";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useForgeRelease, type ReleaseInfo } from "../hooks/useForgeRelease";
import { useI18n } from "../i18n-context";
import { FORGE_META } from "../siteMeta";
import { Footer } from "./HomePage";

const featureIcons: LucideIcon[] = [MonitorCog, Layers3, Gauge, FileJson];
function CodeExample() {
  return (
    <code>
      <span className="text-[#c586c0]">export</span>{" "}
      <span className="text-[#569cd6]">class</span>{" "}
      <span className="text-[#4ec9b0]">CustomTool</span>{" "}
      <span className="text-[#c586c0]">extends</span>{" "}
      <span className="text-[#4ec9b0]">BaseTool</span>{" "}
      <span className="text-[#d4d4d4]">&#123;</span>
      <span className="block pl-8">
        <span className="text-[#9cdcfe]">id</span>
        <span className="text-[#d4d4d4]">: </span>
        <span className="text-[#4ec9b0]">ToolId</span>
        <span className="text-[#d4d4d4]"> = </span>
        <span className="text-[#ce9178]">&quot;custom&quot;</span>
      </span>
      <span className="block"> </span>
      <span className="block pl-8">
        <span className="text-[#dcdcaa]">onMouseMove</span>
        <span className="text-[#d4d4d4]">(</span>
        <span className="text-[#9cdcfe]">event</span>
        <span className="text-[#d4d4d4]">: </span>
        <span className="text-[#4ec9b0]">MouseEvent</span>
        <span className="text-[#d4d4d4]">, </span>
        <span className="text-[#9cdcfe]">context</span>
        <span className="text-[#d4d4d4]">: </span>
        <span className="text-[#4ec9b0]">ToolContext</span>
        <span className="text-[#d4d4d4]">) &#123;</span>
      </span>
      <span className="block pl-16 text-[#6a9955]">
        // Your tool logic stays close to the canvas.
      </span>
      <span className="block pl-8 text-[#d4d4d4]">&#125;</span>
      <span className="block text-[#d4d4d4]">&#125;</span>
    </code>
  );
}

function ForgeTopBar() {
  const { copy } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-[#ffd7bf] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <AppLink href="/" aria-label="OpenCreate home">
          <img
            src="/OpenCreate-Forge-Logo.svg"
            alt="OpenCreate Forge"
            width="280"
            height="40"
            className="h-10"
          />
        </AppLink>
        <nav
          aria-label="Forge navigation"
          className="hidden items-center gap-5 text-sm font-medium text-[#565656] lg:flex"
        >
          <a
            href="#product-view"
            className="transition hover:text-[#ff6a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00]"
          >
            {copy.forge.nav.product}
          </a>
          <a
            href="#performance"
            className="transition hover:text-[#ff6a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00]"
          >
            {copy.forge.nav.features}
          </a>
          <a
            href="#architecture"
            className="transition hover:text-[#ff6a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00]"
          >
            {copy.forge.nav.architecture}
          </a>
          <a
            href="#community"
            className="transition hover:text-[#ff6a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00]"
          >
            {copy.forge.nav.community}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            href="#downloads"
            className="hidden sm:inline-flex min-h-10 items-center gap-2 rounded-full bg-[#ff6a00] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(255,106,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e85e00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a00]"
          >
            {copy.forge.downloadNow}
            <Download className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ release }: { release: ReturnType<typeof useForgeRelease> }) {
  const { copy } = useI18n();
  return (
    <section
      id="about"
      aria-labelledby="forge-title"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,106,0,0.12),_transparent_38%),linear-gradient(180deg,_#fff0e5_0%,_#fffaf6_100%)]"
    >
      <div
        className="absolute inset-0 -z-0 opacity-80 [background-image:linear-gradient(rgba(255,106,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,106,0,0.06)_1px,transparent_1px)] [background-size:44px_44px]"
        aria-hidden="true"
      />
      <div className="mx-auto grid min-h-[68vh] w-full max-w-7xl place-items-center px-6 py-20 md:px-8">
        <Reveal className="relative z-10 flex max-w-5xl flex-col items-center text-center">
          {release.version && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ff6a00] shadow-sm">
              {copy.forge.latest}: {release.version}
            </div>
          )}
          <img
            src="/OpenCreate-Forge-Logo.svg"
            alt="OpenCreate Forge"
            width="400"
            height="80"
            className="mb-8 h-20 drop-shadow-[0_20px_40px_rgba(255,106,0,0.18)]"
          />
          <h1
            id="forge-title"
            className="max-w-4xl text-balance text-4xl font-black tracking-[-0.05em] text-[#101010] sm:text-6xl"
          >
            {copy.forge.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-base leading-8 text-[#4b4b4b] sm:text-lg">
            {copy.forge.heroDescription}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={release.downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(255,106,0,0.26)] transition hover:-translate-y-0.5 hover:bg-[#e85e00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a00]"
            >
              {release.platform
                ? `${copy.forge.downloadNow} (${release.platform})`
                : copy.forge.downloadNow}
              {release.platform === "Windows" && <WindowsLogo size={20} />}
              {release.platform === "macOS" && <MacOSLogo size={20} />}
              {release.platform === "Linux" && <LinuxLogo size={20} />}
              {!release.platform && (
                <Download className="h-5 w-5" aria-hidden="true" />
              )}
            </a>
            <a
              href="#product-view"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#ffc7a4] bg-white px-6 py-3.5 text-sm font-semibold text-[#331500] transition hover:-translate-y-0.5 hover:border-[#ff6a00] hover:text-[#ff6a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a00]"
            >
              {copy.forge.heroSecondary}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProductView() {
  const { copy } = useI18n();
  return (
    <section
      id="product-view"
      aria-labelledby="product-view-title"
      className="bg-white p-6 md:p-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <figure>
              <div className="overflow-hidden rounded-[28px] border border-[#34251b] bg-[#171510] p-2 shadow-[0_30px_90px_rgba(51,21,0,0.18)]">
                <img
                  src="/OpenCreate-Forge-Alpha3-Screenshot.webp"
                  alt={copy.forge.screenshotAlt}
                  width="2880"
                  height="1800"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-[20px]"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-[#777]">
                OpenCreate Forge · Alpha 3
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <SectionHeading
                id="product-view-title"
                eyebrow={copy.forge.screenshotEyebrow}
                title={copy.forge.screenshotTitle}
                description={copy.forge.screenshotDescription}
                icon={<Layers3 className="h-5 w-5" aria-hidden="true" />}
              />
              <ul className="mt-8 grid gap-3 text-sm text-[#4b4b4b]">
                <li className="rounded-2xl border border-[#ffd9bf] bg-[#fffaf7] p-4">
                  <strong className="text-[#1a1a1a]">
                    {copy.forge.features[1].title}
                  </strong>
                  <span className="mt-1 block">
                    {copy.forge.features[1].description}
                  </span>
                </li>
                <li className="rounded-2xl border border-[#ffd9bf] bg-[#fffaf7] p-4">
                  <strong className="text-[#1a1a1a]">
                    {copy.forge.features[2].title}
                  </strong>
                  <span className="mt-1 block">
                    {copy.forge.features[2].description}
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Performance() {
  const { copy } = useI18n();
  return (
    <section id="performance" className="bg-white/70 p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            id="performance-title"
            eyebrow={copy.forge.featuresEyebrow}
            title={copy.forge.featuresTitle}
            description={copy.forge.featuresDescription}
            accentClassName="text-[#ff6a00]"
            icon={<Zap className="h-5 w-5" aria-hidden="true" />}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {copy.forge.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <Reveal key={feature.title} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-[28px] border border-[#ffd9bf] bg-white p-6 shadow-[0_20px_60px_rgba(51,21,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(51,21,0,0.08)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-[#1a1a1a]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#555]">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const { copy } = useI18n();
  const items = [
    [
      Network,
      copy.forge.cleanArchitecture,
      copy.forge.cleanArchitectureDescription,
    ],
    [CodeXml, copy.forge.typescript, copy.forge.typescriptDescription],
    [DatabaseZap, copy.forge.state, copy.forge.stateDescription],
  ] as const;
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-title"
      className="bg-[#fffaf7] p-6 md:p-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={copy.forge.developerEyebrow}
            title={copy.forge.developerTitle}
            description={copy.forge.developerDescription}
            accentClassName="text-[#ff6a00]"
            icon={<Cable className="h-5 w-5" aria-hidden="true" />}
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <article className="h-full rounded-[32px] border border-[#ffd9bf] bg-white p-4 sm:p-8 shadow-[0_20px_60px_rgba(51,21,0,0.05)]">
              <h3
                id="architecture-title"
                className="text-2xl font-black tracking-[-0.04em] text-[#101010]"
              >
                {copy.forge.architectureTitle}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#555]">
                {copy.forge.architectureDescription}
              </p>
              <div className="mt-8 grid gap-3">
                {items.map(([Icon, title, description]) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-3xl border border-[#ecd5c4] bg-[#fffaf7] p-4"
                  >
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1a1a1a]">
                        {title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-[#555]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 inline-flex rounded-full bg-[#fff1e7] px-4 py-2 text-sm font-semibold text-[#ff6a00]">
                {copy.forge.extensibleNote}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="hidden sm:block overflow-hidden rounded-[32px] border border-[#ffd9bf] bg-[#171510] shadow-[0_30px_90px_rgba(51,21,0,0.18)]">
              <div
                className="flex items-center gap-2 border-b border-white/10 px-5 py-4"
                aria-hidden="true"
              >
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <pre
                className="overflow-x-auto p-6 text-sm leading-7 text-[#f7d7c2]"
                aria-label="Example of a custom Forge tool"
              >
                <CodeExample />
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Downloads({
  release,
}: {
  release: ReturnType<typeof useForgeRelease>;
}) {
  const { copy } = useI18n();
  const downloads = [
    {
      name: "Linux",
      note: copy.forge.downloadNotes.linux,
      action: copy.forge.downloadActions.linux,
      href: release.allUrls.linux,
      Icon: LinuxLogo,
    },
    {
      name: "macOS",
      note: copy.forge.downloadNotes.macos,
      action: copy.forge.downloadActions.macos,
      href: release.allUrls.macos,
      Icon: MacOSLogo,
    },
    {
      name: "Windows",
      note: copy.forge.downloadNotes.windows,
      action: copy.forge.downloadActions.windows,
      href: release.allUrls.windows,
      Icon: WindowsLogo,
    },
  ];
  return (
    <section
      id="downloads"
      aria-labelledby="downloads-title"
      className="bg-[#fff0e5] p-6 md:p-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={copy.forge.downloadsEyebrow}
            title={copy.forge.downloadsTitle}
            description={copy.forge.downloadsDescription}
            accentClassName="text-[#ff6a00]"
            icon={<Download className="h-5 w-5" aria-hidden="true" />}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {downloads.map(({ name, note, action, href, Icon }, index) => (
            <Reveal key={name} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-[30px] border border-[#ffd9bf] bg-white p-7 shadow-[0_20px_60px_rgba(51,21,0,0.05)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#1a1a1a]">
                  {name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#555]">{note}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[#ff6a00] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e85e00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a00]"
                >
                  {action}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
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
      className="bg-[#fffaf7] p-6 md:p-8"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,_#330b00_0%,_#601100_48%,_#ff6a00_150%)] px-6 py-12 text-white sm:px-10">
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
                  href="https://github.com/opencreate-app/forge"
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

export function ForgePage({
  initialRelease,
}: {
  initialRelease?: ReleaseInfo;
}) {
  const { language } = useI18n();
  useDocumentMeta({
    ...FORGE_META,
    title:
      language === "pt"
        ? `${FORGE_META.title} — Editor de imagens gratuito`
        : `${FORGE_META.title} — Free Image Editor`,
    description:
      language === "pt"
        ? "Um editor de imagens rápido, privado e aberto para criar sem limitações."
        : FORGE_META.description,
  });
  const release = useForgeRelease(initialRelease);
  return (
    <div className="min-h-screen bg-[#fff0e5] text-[#331500]">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ForgeTopBar />
      <main id="main-content" className="page-forge">
        <Hero release={release} />
        <ProductView />
        <Performance />
        <Architecture />
        <Downloads release={release} />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
