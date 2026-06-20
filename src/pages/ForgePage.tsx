import {
  ArrowRight,
  Cable,
  Download,
  FileJson,
  Gauge,
  Layers3,
  MonitorCog,
  Sparkles,
  Workflow,
  WandSparkles,
  Sparkle,
  Cpu,
  ExternalLink,
  Package,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AppLink } from '../components/AppLink'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const features: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: 'Double-Buffered Canvas',
    description:
      'Real-time edits rendered at a constant 60fps. No stutters on ultra-high-resolution images thanks to our offscreen rendering strategy.',
    icon: MonitorCog,
  },
  {
    title: 'Non-Destructive Layers',
    description:
      'Group, blend, and order Raster, Text, or Vector layers. Modify properties without permanently altering the original pixels.',
    icon: Layers3,
  },
  {
    title: 'Pixel-Perfect Precision',
    description:
      'Dynamic rulers, adjustable magnetic guides, and mathematical transformations for rotation, scaling, and distortion without loss of visual quality.',
    icon: Gauge,
  },
  {
    title: 'OpenCreate Forge Document (.ocfd)',
    description:
      'Save your work in the native OpenCreate Forge Document format. Compact, JSON-based with smart binary encoding, preserving your history and editor state.',
    icon: FileJson,
  },
]

const downloads = [
  {
    name: 'macOS',
    note: 'Available for Apple Silicon (M1/M2/M3) and Intel.',
    action: 'Download .dmg',
    href: 'https://github.com/gabrielborgesweb/OpenCreate-Forge/releases/download/v0.2.0/OpenCreate.Forge-0.2.0-arm64.dmg',
    icon: Sparkle,
  },
  {
    name: 'Windows',
    note: 'Compatible with 64-bit Windows 10 and 11.',
    action: 'Download .exe installer',
    href: 'https://github.com/gabrielborgesweb/OpenCreate-Forge/releases/download/v0.2.0/OpenCreate.Forge.Setup.0.2.0.exe',
    icon: Package,
  },
  {
    name: 'Linux',
    note: 'Available in Flatpak package.',
    action: 'Download .flatpak',
    href: 'https://github.com/gabrielborgesweb/OpenCreate-Forge/releases/download/v0.2.0/OpenCreate.Forge-0.2.0-x86_64.flatpak',
    icon: Cpu,
  },
]

function ForgeTopBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-[#ffd7bf] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <AppLink href="./" className="flex items-center gap-3">
          <img
            src="/OpenCreate-Forge-Logo.svg"
            alt="OpenCreate Forge"
            className="h-9 w-9"
          />
          <div className="leading-tight">
            <div className="flex items-center gap-2 text-sm font-black tracking-[-0.03em] text-[#331500]">
              Forge
              <span className="rounded-full bg-[#d9fbf0] px-2 py-0.5 text-[11px] font-bold text-[#0d8c67]">
                v0.2.0
              </span>
            </div>
            <div className="hidden text-xs text-[#7d5a42] sm:block">
              OpenCreate image editor
            </div>
          </div>
        </AppLink>

        <div className="flex items-center gap-2">
          <a
            href="#downloads"
            className="inline-flex items-center gap-2 rounded-full border border-[#ffc9a8] bg-white px-4 py-2 text-sm font-semibold text-[#331500] transition hover:-translate-y-0.5 hover:border-[#ff6a00] hover:text-[#ff6a00]"
          >
            Iniciar Web Editor
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#downloads"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff6a00] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(255,106,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e85e00]"
          >
            Baixar App
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: LucideIcon
}) {
  return (
    <div className="rounded-[28px] border border-[#ffd9bf] bg-white p-6 shadow-[0_18px_60px_rgba(51,21,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(51,21,0,0.09)]">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-[#331500]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#6d4c2f]">{description}</p>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,106,0,0.12),_transparent_38%),linear-gradient(180deg,_#fff0e5_0%,_#fffaf6_100%)] px-4 py-18 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-0 opacity-80 [background-image:linear-gradient(rgba(255,106,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,106,0,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="mx-auto grid min-h-[78vh] max-w-7xl place-items-center">
        <Reveal className="relative z-10 flex max-w-5xl flex-col items-center text-center">
          <img
            src="/OpenCreate-Forge-Logo.svg"
            alt="OpenCreate Forge"
            className="h-24 w-24 drop-shadow-[0_20px_40px_rgba(255,106,0,0.18)] sm:h-28 sm:w-28"
          />
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#ffd0b2] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#b85a17]">
            <Sparkles className="h-4 w-4 text-[#ff6a00]" />
            Double-buffered image editing
          </div>
          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-black tracking-[-0.06em] text-[#331500] sm:text-7xl lg:text-8xl">
            Forge your creations without speed limits.
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-base leading-8 text-[#6d4c2f] sm:text-lg">
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
              <Download className="h-4 w-4" />
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ffc7a4] bg-white px-6 py-3.5 text-sm font-semibold text-[#331500] transition hover:-translate-y-0.5 hover:border-[#ff6a00] hover:text-[#ff6a00]"
            >
              Extensível por design
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Architecture() {
  return (
    <section id="architecture" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Developer view"
            title="Extensível por Design"
            description="Quer criar seu próprio pincel, filtro ou ferramenta de seleção? A arquitetura do Forge permite a criação de novas ferramentas herdando da classe base."
            accentClassName="text-[#ff6a00]"
            icon={<Cable className="h-4 w-4" />}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <Reveal>
            <div className="h-full rounded-[32px] border border-[#ffd9bf] bg-[#fffaf7] p-8 shadow-[0_20px_60px_rgba(51,21,0,0.05)]">
              <div className="grid gap-4 text-sm leading-7 text-[#6d4c2f]">
                <p>
                  Clean Architecture: separação entre processos Electron (Main)
                  e UI (Renderer).
                </p>
                <p>
                  TypeScript nativo: tipagem estrita de ações de ferramentas para
                  evitar falhas em tempo de execução.
                </p>
                <p>
                  Zustand stores: gerencie a seleção de ferramentas e histórico
                  sem poluir a árvore de componentes React.
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fff1e7] px-4 py-2 text-sm font-semibold text-[#ff6a00]">
                <WandSparkles className="h-4 w-4" />
                Tools can be extended without rewriting the engine
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[32px] border border-[#ffd9bf] bg-[#171510] shadow-[0_30px_90px_rgba(51,21,0,0.18)]">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff6a00]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffd26a]" />
                  <span className="h-3 w-3 rounded-full bg-[#78d878]" />
                </div>
              </div>
              <pre className="overflow-x-auto p-6 text-sm leading-7 text-[#f7d7c2]">
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
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
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
            icon={<Download className="h-4 w-4" />}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {downloads.map(({ name, note, action, href, icon: Icon }, index) => (
            <Reveal key={name} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-[30px] border border-[#ffd9bf] bg-white p-7 shadow-[0_20px_60px_rgba(51,21,0,0.05)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1e7] text-[#ff6a00]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#331500]">
                  {name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6d4c2f]">{note}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#ff6a00] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e85e00]"
                >
                  {action}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ForgeFooter() {
  return (
    <footer className="border-t border-[#ffd9bf] bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#7d5a42] sm:flex-row sm:items-center sm:justify-between">
        <div className="font-medium">
          Forge ships as a polished desktop-first tool built for creators.
        </div>
        <a
          href="https://github.com/gabrielborgesweb/OpenCreate-Forge"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-[#ff6a00] transition hover:translate-x-0.5"
        >
          View source
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}

export function ForgePage() {
  useDocumentMeta({
    title: 'OpenCreate Forge',
    description:
      'OpenCreate Forge is a professional image editor with double-buffered Canvas rendering, layers, and native .ocfd support.',
    canonical: window.location.href.split('#')[0],
    themeColor: '#ff6a00',
  })

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
                icon={<Workflow className="h-4 w-4" />}
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
      <ForgeFooter />
    </div>
  )
}
