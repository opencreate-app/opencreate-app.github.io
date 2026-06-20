import {
  ArrowRight,
  Cable,
  Download,
  FileJson,
  Gauge,
  Layers3,
  MonitorCog,
  // Sparkles,
  Zap,
  WandSparkles,
  // Sparkle,
  // Cpu,
  ExternalLink,
  Network,
  CodeXml,
  DatabaseZap,
  // Package,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppLink } from "../components/AppLink";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { LinuxLogo, MacOSLogo, WindowsLogo } from "../components/Icons";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const features: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Double-Buffered Canvas",
    description:
      "Real-time edits rendered at a constant 60fps. No stutters on ultra-high-resolution images thanks to our offscreen rendering strategy.",
    icon: MonitorCog,
  },
  {
    title: "Non-Destructive Layers",
    description:
      "Group, blend, and order Raster, Text, or Vector layers. Modify properties without permanently altering the original pixels.",
    icon: Layers3,
  },
  {
    title: "Pixel-Perfect Precision",
    description:
      "Dynamic rulers, adjustable magnetic guides, and mathematical transformations for rotation, scaling, and distortion without loss of visual quality.",
    icon: Gauge,
  },
  {
    title: "OpenCreate Forge Document",
    description:
      "Save your work in the native OpenCreate Forge Document format. Compact, JSON-based with smart binary encoding, preserving your history and editor state.",
    icon: FileJson,
  },
];

const downloads = [
  {
    name: "macOS",
    note: "Available for Apple Silicon (M1/M2/M3) and Intel.",
    action: "Download .dmg",
    href: "https://github.com/gabrielborgesweb/OpenCreate-Forge/releases/download/v0.2.0/OpenCreate.Forge-0.2.0-arm64.dmg",
    icon: MacOSLogo,
  },
  {
    name: "Windows",
    note: "Compatible with 64-bit Windows 10 and 11.",
    action: "Download .exe installer",
    href: "https://github.com/gabrielborgesweb/OpenCreate-Forge/releases/download/v0.2.0/OpenCreate.Forge.Setup.0.2.0.exe",
    icon: WindowsLogo,
  },
  {
    name: "Linux",
    note: "Available in Flatpak package.",
    action: "Download .flatpak",
    href: "https://github.com/gabrielborgesweb/OpenCreate-Forge/releases/download/v0.2.0/OpenCreate.Forge-0.2.0-x86_64.flatpak",
    icon: LinuxLogo,
  },
];

function ForgeTopBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-[#ffd7bf] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <AppLink href="./" className="flex items-center gap-3">
          <img
            src="/OpenCreate-Forge-Logo.svg"
            alt="OpenCreate Forge"
            className="w-40"
          />
        </AppLink>

        <div className="flex items-center gap-2">
          <a
            href="#downloads"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff6a00] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(255,106,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e85e00]"
          >
            Download Now
            <Download className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex flex-col h-full rounded-[28px] border border-[#ffd9bf] bg-white p-6 shadow-[0_20px_60px_rgba(51,21,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(51,21,0,0.08)]">
      <div className="mb-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-[#1a1a1a]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#555] text-pretty">
        {description}
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,106,0,0.12),_transparent_38%),linear-gradient(180deg,_#fff0e5_0%,_#fffaf6_100%)]">
      <div className="absolute inset-0 -z-0 opacity-80 [background-image:linear-gradient(rgba(255,106,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,106,0,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="mx-auto grid min-h-[70vh] w-full max-w-7xl place-items-center px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="relative z-10 flex max-w-5xl flex-col items-center text-center">
          <img
            src="/OpenCreate-Forge-Logo.svg"
            alt="OpenCreate Forge"
            className="mb-8 w-80 drop-shadow-[0_20px_40px_rgba(255,106,0,0.18)]"
          />
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd0b2] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#b85a17]">
            <Sparkles className="h-5 w-5 text-[#ff6a00]" />
            Double-buffered image editing
          </div> */}
          <h1 className="max-w-4xl text-balance text-3xl font-black tracking-[-0.04em] text-[#101010] sm:text-5xl lg:text-5xl">
            Forge your creations freely.
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-base leading-8 text-[#4b4b4b] sm:text-lg">
            High-performance image manipulation featuring a double-buffered
            Canvas rendering engine, layers support, layer styles, and
            pixel-perfect precision tools.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#downloads"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(255,106,0,0.26)] transition hover:-translate-y-0.5 hover:bg-[#e85e00]"
            >
              Download for Linux / macOS / Windows
              <Download className="h-5 w-5" />
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ffc7a4] bg-white px-6 py-3.5 text-sm font-semibold text-[#331500] transition hover:-translate-y-0.5 hover:border-[#ff6a00] hover:text-[#ff6a00]"
            >
              Extendable by Design
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Developer view"
            title="Extendable by Design"
            description="Want to create your own brush, filter, or selection tool? Forge's architecture allows you to create new tools by inheriting from the base class."
            accentClassName="text-[#ff6a00]"
            icon={<Cable className="h-5 w-5" />}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[32px] border border-[#ffd9bf] bg-[#fffaf7] p-8 shadow-[0_20px_60px_rgba(51,21,0,0.05)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,106,0,0.08),_transparent_35%)]" />
              <div className="relative">
                {/* <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd0b2] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#b85a17]">
                  <WandSparkles className="h-5 w-5 text-[#ff6a00]" />
                  Extendable by design
                </div> */}

                <h3 className="text-2xl font-black tracking-[-0.04em] text-[#101010]">
                  Architecture that stays out of your way.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#555] text-pretty">
                  Forge keeps the editor logic split, typed, and stateful only
                  where it matters, so tools can evolve without turning the UI
                  into a maintenance burden.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex items-start gap-4 rounded-3xl border border-[#ecd5c4] bg-white p-4">
                    <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
                      <Network className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1a1a1a]">
                        Clean architecture
                      </div>
                      <p className="mt-1 text-sm text-[#555] text-balance">
                        Electron Main and Renderer responsibilities stay
                        isolated.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-3xl border border-[#ecd5c4] bg-white p-4">
                    <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
                      <CodeXml className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1a1a1a]">
                        Native TypeScript
                      </div>
                      <p className="mt-1 text-sm text-[#555] text-balance">
                        Tool actions are strongly typed to catch mistakes early.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-3xl border border-[#ecd5c4] bg-white p-4">
                    <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
                      <DatabaseZap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1a1a1a]">
                        Zustand stores
                      </div>
                      <p className="mt-1 text-sm text-[#555] text-balance">
                        Selection and history live outside the React tree.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 inline-flex rounded-full bg-[#fff1e7] px-4 py-2 text-sm font-semibold text-[#ff6a00]">
                  <WandSparkles className="h-5 w-5 mr-2 text-[#ff6a00]" />
                  Tools can be extended without rewriting the engine
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[32px] border border-[#ffd9bf] bg-[#171510] shadow-[0_30px_90px_rgba(51,21,0,0.18)] hidden md:block">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>
              {/* <pre className="overflow-x-auto p-6 text-sm leading-6 text-[#f7d7c2]">
                <code>{`import { BaseTool, ToolContext, ToolId } from "@core/tools/BaseTool"

export class CustomTool extends BaseTool {
  id: ToolId = "custom"

  async onMouseDown(e: MouseEvent, context: ToolContext): Promise<void> {
    // Custom logic on click here
  }

  onMouseMove(e: MouseEvent, context: ToolContext): void {
    // Instant rendering on mouse cursor here
  }
}`}</code>
              </pre> */}
              <div>
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: "1rem",
                    backgroundColor: "#1e1e1e", // Cor idêntica ao fundo do VS Code Dark
                    fontSize: "0.875rem",
                    lineHeight: "1.7",
                  }}
                >
                  {`import { BaseTool, ToolContext, ToolId } from "@core/tools/BaseTool"

export class CustomTool extends BaseTool {
  id: ToolId = "custom"

  async onMouseDown(e: MouseEvent, context: ToolContext): Promise<void> {
    // Custom logic on click here
  }

  onMouseMove(e: MouseEvent, context: ToolContext): void {
    // Instant rendering on mouse cursor here
  }
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Downloads() {
  return (
    <section id="downloads" className="bg-[#fff7f0] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Downloads"
            title="Download OpenCreate Forge"
            description="Choose your platform and start creating right now."
            accentClassName="text-[#ff6a00]"
            icon={<Download className="h-5 w-5" />}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {downloads.map(({ name, note, action, href, icon: Icon }, index) => (
            <Reveal key={name} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-[30px] border border-[#ffd9bf] bg-white p-7 shadow-[0_20px_60px_rgba(51,21,0,0.05)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#1a1a1a]">
                  {name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#555]">{note}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#ff6a00] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e85e00]"
                >
                  {action}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
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

      <div className="mx-auto mt-12 max-w-7xl border-t border-black/5 pt-6 text-sm text-[#777]">
        © 2026 OpenCreate. Created with ❤️ by Gabriel Borges.
      </div>
    </footer>
  );
}

export function ForgePage() {
  useDocumentMeta({
    title: "OpenCreate Forge",
    description:
      "OpenCreate Forge is a professional image editor with double-buffered Canvas rendering, layers, and native .ocfd support.",
    canonical: window.location.href.split("#")[0],
    themeColor: "#ff6a00",
  });

  return (
    <div className="min-h-screen bg-[#fff0e5] text-[#331500]">
      <ForgeTopBar />
      <main>
        <Hero />
        <section className="bg-white/70 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Performance"
                title="Features Built for Performance"
                description="Every part of Forge is designed to keep complex workspaces responsive and precise."
                accentClassName="text-[#ff6a00]"
                icon={<Zap className="h-5 w-5" />}
              />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 0.06}>
                  <FeatureCard {...feature} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <Architecture />
        <Downloads />
      </main>
      <Footer />
    </div>
  );
}
