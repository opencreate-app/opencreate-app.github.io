import { useEffect, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import { I18nContext, type Copy, type Language } from "./i18n-context";

const english: Copy = {
  nav: {
    about: "Why OpenCreate",
    values: "Values",
    solutions: "Solutions",
    forge: "Get Forge",
    community: "Community",
    language: "Language",
  },
  home: {
    eyebrow: "Free creative software",
    title: "Create freely, without asking permission.",
    description:
      "OpenCreate makes fast, respectful tools for designers and artists who want professional work without subscriptions, or surveillance.",
    primary: "Meet OpenCreate Forge",
    secondary: "Read our values",
    valuesEyebrow: "Our promise",
    valuesTitle: "The tools are yours. The work is yours. The future is yours.",
    valuesDescription:
      "We are building an open alternative for people who make things for a living, for learning, and simply because they can.",
    pillars: [
      {
        title: "Open by default",
        description:
          "The source is public, auditable, and open to improvement. The community can understand how its creative tools work.",
      },
      {
        title: "Fast where it matters",
        description:
          "Your attention belongs on the canvas. We focus on responsive interactions so the tool disappears behind the work.",
      },
      {
        title: "Private and local",
        description:
          "Your files stay under your control. No account, subscription, or invasive telemetry is required to create.",
      },
    ],
    productsEyebrow: "Start creating",
    productsTitle: "A calmer home for serious creative work.",
    productsDescription:
      "OpenCreate Forge is our first step: a powerful image editor for people who want familiar creative workflows with more freedom.",
    forgeLabel: "Featured tool",
    forgeTitle: "OpenCreate Forge",
    forgeDescription:
      "Edit images with layers, typography, precision tools, and a responsive canvas. Save in an open, native format and keep ownership of the work you make.",
    forgePrimary: "Explore Forge",
    forgeSecondary: "Download Forge",
    moreTitle: "More tools are on the way.",
    moreDescription:
      "We are keeping the catalog focused so every tool can feel thoughtful, capable, and ready for real creative work.",
    communityTitle: "Help make creative freedom the default.",
    communityDescription:
      "OpenCreate is built in public. Report a bug, share an idea, or contribute code and design. Every useful contribution helps make better tools available to more people.",
    communityPrimary: "Join on GitHub",
    communitySecondary: "Share an idea",
  },
  forge: {
    nav: {
      product: "Product",
      features: "Features",
      architecture: "Architecture",
      community: "Community",
    },
    latest: "Latest release",
    downloadNow: "Download Forge",
    heroTitle: "A serious image editor, without the lock-in.",
    heroDescription:
      "OpenCreate Forge gives you a focused canvas, non-destructive layers, precise tools, and a local workflow designed for people moving beyond Photoshop or Photopea.",
    heroSecondary: "See what it feels like",
    screenshotEyebrow: "Made for the canvas",
    screenshotTitle: "Everything you need to turn an idea into an masterpiece.",
    screenshotDescription:
      "Type, compose, adjust, and refine in a workspace that keeps the important things close: your canvas, your layers, and your decisions.",
    screenshotAlt:
      "OpenCreate Forge editing a typography composition with a text layer, canvas controls, and layers panel visible.",
    featuresEyebrow: "The everyday difference",
    featuresTitle: "More control over the work. Less friction around it.",
    featuresDescription:
      "Forge is designed around the moments that matter when you are making something: seeing changes immediately, keeping edits reversible, and saving work in a format you control.",
    features: [
      {
        title: "A responsive canvas",
        description:
          "A double-buffered rendering engine keeps interactions smooth while you work on detailed, high-resolution images.",
      },
      {
        title: "Edits you can change",
        description:
          "Organize raster, text, and vector layers without permanently damaging the pixels underneath.",
      },
      {
        title: "Precision when it counts",
        description:
          "Use rulers, guides, and accurate transforms to place ideas exactly where you want them.",
      },
      {
        title: "A file that respects your work",
        description:
          "The native .ocfd format preserves your layers, history, and editor state instead of flattening your process.",
      },
    ],
    developerEyebrow: "For people who extend tools",
    developerTitle: "Open enough to adapt, focused enough to use.",
    developerDescription:
      "Creators come first. For developers and advanced teams, Forge also offers a typed architecture that makes new tools possible without rewriting the editor.",
    architectureTitle: "The product stays understandable as it grows.",
    architectureDescription:
      "Separate responsibilities, strong types, and focused state management help the project stay approachable for contributors.",
    cleanArchitecture: "Clear boundaries",
    cleanArchitectureDescription:
      "The desktop shell and editor interface keep their responsibilities separate.",
    typescript: "Native TypeScript",
    typescriptDescription:
      "Strongly typed tool actions catch mistakes before they reach a creator's workflow.",
    state: "Focused state",
    stateDescription:
      "Selection and history stay organized without making the interface harder to evolve.",
    extensibleNote: "New tools can grow alongside the engine.",
    downloadsEyebrow: "Take it with you",
    downloadsTitle: "Download Forge and make something yours.",
    downloadsDescription:
      "Choose your platform, install the latest release, and keep creating locally.",
    downloadActions: {
      linux: "Download for Linux",
      macos: "Download for macOS",
      windows: "Download for Windows",
    },
    downloadNotes: {
      linux: "AppImage for x86_64",
      macos: "Apple Silicon (arm64)",
      windows: "Windows 10/11 (x86_64)",
    },
  },
  footer: {
    tagline: "Professional creative tools with freedom built in.",
    resources: "Resources",
    products: "Products",
    social: "Social",
    source: "Source code",
    bug: "Report a bug",
    copyright: "© 2026 OpenCreate.",
    created: "Created with love by Gabriel Borges.",
  },
  notFound: {
    title: "Page not found",
    description: "The route you opened does not exist on this site.",
    back: "Back home",
  },
};

const portuguese: Copy = {
  nav: {
    about: "Por que OpenCreate",
    values: "Valores",
    solutions: "Soluções",
    forge: "Obter o Forge",
    community: "Comunidade",
    language: "Idioma",
  },
  home: {
    eyebrow: "Software criativo gratuito",
    title: "Crie livremente, sem pedir permissão.",
    description:
      "A OpenCreate cria ferramentas rápidas e respeitosas para designers e artistas que querem trabalho profissional sem assinaturas, ou vigilância.",
    primary: "Conheça o OpenCreate Forge",
    secondary: "Leia nossos valores",
    valuesEyebrow: "Nosso compromisso",
    valuesTitle: "As ferramentas são suas. O trabalho é seu. O futuro é seu.",
    valuesDescription:
      "Estamos construindo uma alternativa aberta para quem cria profissionalmente, aprende ou simplesmente transforma ideias em coisas novas.",
    pillars: [
      {
        title: "Aberto por padrão",
        description:
          "O código é público, auditável e aberto a melhorias. A comunidade pode entender como suas ferramentas criativas funcionam.",
      },
      {
        title: "Rápido onde importa",
        description:
          "Sua atenção pertence à tela. Priorizamos interações responsivas para que a ferramenta desapareça atrás do trabalho.",
      },
      {
        title: "Privado e local",
        description:
          "Seus arquivos ficam sob seu controle. Não exigimos conta, assinatura ou telemetria invasiva para criar.",
      },
    ],
    productsEyebrow: "Comece a criar",
    productsTitle: "Um lugar mais tranquilo para trabalho criativo sério.",
    productsDescription:
      "O OpenCreate Forge é nosso primeiro passo: um editor de imagens poderoso para quem quer fluxos familiares com mais liberdade.",
    forgeLabel: "Ferramenta em destaque",
    forgeTitle: "OpenCreate Forge",
    forgeDescription:
      "Edite imagens com camadas, tipografia, ferramentas de precisão e um canvas responsivo. Salve em um formato nativo aberto e mantenha a propriedade do que você cria.",
    forgePrimary: "Explorar o Forge",
    forgeSecondary: "Baixar o Forge",
    moreTitle: "Mais ferramentas estão a caminho.",
    moreDescription:
      "Estamos mantendo o catálogo focado para que cada ferramenta seja cuidadosa, capaz e pronta para trabalho criativo real.",
    communityTitle: "Ajude a tornar a liberdade criativa o padrão.",
    communityDescription:
      "A OpenCreate é construída em público. Relate um bug, compartilhe uma ideia ou contribua com código e design. Cada contribuição útil ajuda a levar ferramentas melhores a mais pessoas.",
    communityPrimary: "Participar no GitHub",
    communitySecondary: "Compartilhar uma ideia",
  },
  forge: {
    nav: {
      product: "Produto",
      features: "Recursos",
      architecture: "Arquitetura",
      community: "Comunidade",
    },
    latest: "Lançamento recente",
    downloadNow: "Baixar o Forge",
    heroTitle: "Um editor de imagens sério, sem aprisionamento.",
    heroDescription:
      "O OpenCreate Forge oferece canvas focado, camadas não destrutivas, ferramentas precisas e um fluxo local para quem está migrando do Photoshop ou Photopea.",
    heroSecondary: "Veja como é",
    screenshotEyebrow: "Feito para a tela",
    screenshotTitle:
      "Tudo o que você precisa para transformar uma ideia em uma obraprima.",
    screenshotDescription:
      "Digite, componha, ajuste e refine em um espaço que mantém perto o que importa: seu canvas, suas camadas e suas decisões.",
    screenshotAlt:
      "OpenCreate Forge editando uma composição tipográfica com camada de texto, controles do canvas e painel de camadas visíveis.",
    featuresEyebrow: "A diferença no dia a dia",
    featuresTitle:
      "Mais controle sobre o trabalho. Menos atrito ao redor dele.",
    featuresDescription:
      "O Forge foi pensado para os momentos que importam: ver mudanças imediatamente, manter edições reversíveis e salvar em um formato sob seu controle.",
    features: [
      {
        title: "Canvas responsivo",
        description:
          "Um motor de renderização com double buffering mantém as interações suaves em imagens detalhadas e de alta resolução.",
      },
      {
        title: "Edições que você pode mudar",
        description:
          "Organize camadas raster, de texto e vetoriais sem danificar permanentemente os pixels abaixo delas.",
      },
      {
        title: "Precisão quando importa",
        description:
          "Use réguas, guias e transformações precisas para colocar cada ideia exatamente onde deseja.",
      },
      {
        title: "Um arquivo que respeita seu trabalho",
        description:
          "O formato nativo .ocfd preserva camadas, histórico e estado do editor em vez de achatar seu processo.",
      },
    ],
    developerEyebrow: "Para quem amplia ferramentas",
    developerTitle:
      "Aberto o bastante para adaptar, focado o bastante para usar.",
    developerDescription:
      "Creators vêm primeiro. Para desenvolvedores e equipes avançadas, o Forge também oferece uma arquitetura tipada que permite criar novas ferramentas sem reescrever o editor.",
    architectureTitle: "O produto continua compreensível enquanto cresce.",
    architectureDescription:
      "Responsabilidades separadas, tipos fortes e estado organizado ajudam o projeto a continuar acessível para colaboradores.",
    cleanArchitecture: "Limites claros",
    cleanArchitectureDescription:
      "A camada desktop e a interface do editor mantêm suas responsabilidades separadas.",
    typescript: "TypeScript nativo",
    typescriptDescription:
      "A tipagem forte nas ações das ferramentas encontra erros antes que cheguem ao fluxo de criação.",
    state: "Estado organizado",
    stateDescription:
      "Seleção e histórico ficam organizados sem tornar a interface mais difícil de evoluir.",
    extensibleNote: "Novas ferramentas podem crescer junto com o motor.",
    downloadsEyebrow: "Leve com você",
    downloadsTitle: "Baixe o Forge e faça algo seu.",
    downloadsDescription:
      "Escolha sua plataforma, instale o lançamento mais recente e continue criando localmente.",
    downloadActions: {
      linux: "Baixar para Linux",
      macos: "Baixar para macOS",
      windows: "Baixar para Windows",
    },
    downloadNotes: {
      linux: "AppImage para x86_64",
      macos: "Apple Silicon (arm64)",
      windows: "Windows 10/11 (x86_64)",
    },
  },
  footer: {
    tagline:
      "Ferramentas criativas profissionais com liberdade desde o início.",
    resources: "Recursos",
    products: "Produtos",
    social: "Social",
    source: "Código-fonte",
    bug: "Relatar um bug",
    copyright: "© 2026 OpenCreate.",
    created: "Feito com amor por Gabriel Borges.",
  },
  notFound: {
    title: "Página não encontrada",
    description: "A rota acessada não existe neste site.",
    back: "Voltar ao início",
  },
};

const STORAGE_KEY = "opencreate-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "pt") return stored;
  return window.navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>("en");
  const setLanguage = (next: Language) => {
    setLanguageState(next);
    if (typeof window !== "undefined")
      window.localStorage.setItem(STORAGE_KEY, next);
  };
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: language === "pt" ? portuguese : english,
    }),
    [language],
  );

  useEffect(() => {
    setLanguageState(getInitialLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
