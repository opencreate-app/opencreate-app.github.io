# Especificação do Layout: Página do OpenCreate Forge (`PAGE_FORGE.md`)

Esta página (na rota `/forge` do site) é focada no produto **OpenCreate Forge**. Seu objetivo principal é apresentar a ferramenta, convencer profissionais de criação digital a baixá-la e destacar suas características técnicas inovadoras.

---

## 🎨 Tema e Identidade Visual da Página

- **Cor Principal**: Laranja #ff6a00
- **Cor do texto**: Preto #331500
- **Cor do fundo**: Branco #fff0e5

## 🗺️ Divisão de Sessões da Página

### 1. Cabeçalho do Produto

- **Propósito:** Identificar o software, mostrar a versão atual e fornecer links diretos para Download ou Execução Web rápida.
- **Layout:**
  - Sub-barra abaixo do cabeçalho principal da organização.
  - Lado esquerdo: Nome do produto e badge da versão atual (ex: `v0.2.0`).
  - Lado direito: Botões de ação direta ("Iniciar Web Editor", "Baixar para Desktop").
- **Textos:**
  - Título: `Forge` (com o ícone de uma bigorna estilizada ou faíscas digitais).
  - Badge: `v0.2.0` (verde ciano sutil).
  - CTA: `Baixar App` (cor principal).

---

### 2. Seção Hero (O Editor em Ação)

- **Propósito:** Capturar a atenção do usuário mostrando o software em funcionamento de forma limpa e dinâmica.
- **Layout:**
  - Centralizado para grande impacto.
  - A logo do OpenCreate Forge acima dos textos.
- **Textos:**
  - Título Principal: `Forge your creations without speed limits.`
  - Subtítulo: `High-performance image manipulation featuring a double-buffered Canvas rendering engine, layers support, layer styles, and pixel-perfect precision tools.`
  - CTA: `Download for Linux / macOS / Windows`.
- **Imagens:**
  - _Logo:_ Imagem presente em `public/OpenCreate-Forge-Logo.svg`.

---

### 3. Recursos Chave (Funcionalidades de Destaque)

- **Propósito:** Enumerar as capacidades do editor e explicar brevemente os benefícios práticos.
- **Layout:**
  - Grade de 4 colunas com cards minimalistas contendo micro-ilustrações.
- **Textos:**
  - Título da Seção: `Features Built for Performance`
  - **Card 1: Motor ForgeEngine**
    - Título: `Double-Buffered Canvas`
    - Descrição: `Real-time edits rendered at a constant 60fps. No stutters on ultra-high-resolution images thanks to our offscreen rendering strategy.`
  - **Card 2: Sistema de Camadas**
    - Título: `Non-Destructive Layers`
    - Descrição: `Group, blend, and order Raster, Text, or Vector layers. Modify properties without permanently altering the original pixels.`
  - **Card 3: Ferramentas de Precisão**
    - Título: `Pixel-Perfect Precision`
    - Descrição: `Dynamic rulers, adjustable magnetic guides, and mathematical transformations for rotation, scaling, and distortion without loss of visual quality.`
  - **Card 4: Formato Nativo .ocfd**
    - Título: `OpenCreate Forge Document (.ocfd)`
    - Descrição: `Save your work in the native OpenCreate Forge Document format. Compact, JSON-based with smart binary encoding, preserving your history and editor state.`
- **Imagens:**
  - _Micro-ilustrações para cada card:_
    1.  Ícone de seta de rotação rápida (Duplo Buffer).
    2.  Ícone de camadas empilhadas (Sistema de Camadas).
    3.  Ícone de mira de precisão (Guias de Precisão).
    4.  Ícone de arquivo com extensão `.ocfd` (Formato de arquivo).

---

### 4. Visão do Desenvolvedor (Arquitetura e Extensibilidade)

- **Propósito:** Atrair desenvolvedores e estúdios que querem customizar o editor ou criar ferramentas próprias.
- **Layout:**
  - Duas colunas: à esquerda, explicações sobre a arquitetura e links de desenvolvimento; à direita, um bloco de código simulado realçado (Syntax Highlighting) demonstrando como é simples criar uma ferramenta estendendo a classe `BaseTool`.
- **Textos:**
  - Título: `Extensível por Design`
  - Subtítulo: `Quer criar seu próprio pincel, filtro ou ferramenta de seleção? A arquitetura do Forge permite a criação de novas ferramentas herdando da classe base.`
  - Lista de benefícios de código:
    - _Clean Architecture:_ Separação entre processos Electron (Main) e UI (Renderer).
    - _TypeScript Nativo:_ Tipagem estrita de ações de ferramentas para evitar falhas em tempo de execução.
    - _Zustand Stores:_ Gerencie a seleção de ferramentas e histórico sem poluir a árvore de componentes React.
- **Código Demonstrativo (Coluna da Direita):**

  ```typescript
  import { BaseTool, ToolContext, ToolId } from "@core/tools/BaseTool";

  export class CustomTool extends BaseTool {
    id: ToolId = "custom";

    async onMouseDown(e: MouseEvent, context: ToolContext): Promise<void> {
      // Custom logic on click here
    }

    onMouseMove(e: MouseEvent, context: ToolContext): void {
      // Instant rendering on mouse cursor here
    }
  }
  ```

---

### 5. Seção de Downloads e Suporte

- **Propósito:** Prover os arquivos finais de instalação para todas as plataformas principais de forma clara e visível.
- **Layout:**
  - Layout de cartões grandes horizontais para cada sistema operacional (macOS, Windows, Linux) com botões grandes de download e tags indicando suporte a chips M1/M2/M3 e arquiteturas Intel.
- **Textos:**
  - Título da Seção: `Download OpenCreate Forge`
  - Subtítulo: `Choose your platform and start creating right now.`
  - **Card macOS:**
    - Título: `macOS`
    - Nota: `Available for Apple Silicon (M1/M2/M3) and Intel.`
    - Botão: `Download .dmg`
    - Link do botão: `https://github.com/gabrielborgesweb/OpenCreate-Forge/releases/download/v0.2.0/OpenCreate.Forge-0.2.0-arm64.dmg`
  - **Card Windows:**
    - Título: `Windows`
    - Nota: `Compatible with 64-bit Windows 10 and 11.`
    - Botão: `Download .exe installer`
    - Link do botão: `https://github.com/gabrielborgesweb/OpenCreate-Forge/releases/download/v0.2.0/OpenCreate.Forge.Setup.0.2.0.exe`
  - **Card Linux:**
    - Título: `Linux`
    - Nota: `Available in Flatpak package.`
    - Botão: `Download .flatpak`
    - Link do botão: `https://github.com/gabrielborgesweb/OpenCreate-Forge/releases/download/v0.2.0/OpenCreate.Forge-0.2.0-x86_64.flatpak`
- **Imagens:**
  - Logotipos discretos e modernos dos sistemas operacionais (Apple, Windows, Linux) em tom monocromático.
