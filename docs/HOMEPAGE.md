# Especificação do Layout: Página Inicial da Organização OpenCreate (`HOMEPAGE.md`)

Esta página é a vitrine principal da organização **OpenCreate**, focando na identidade da marca, nos seus valores de software de código aberto e alto desempenho, e apresentando o portfólio de ferramentas onde o **OpenCreate Forge** é o destaque.

---

## 🎨 Tema e Identidade Visual da Página

- **Cor Principal**: Azul #5555FF
- **Cor do texto**: Preto #1a1a1a
- **Cor do fundo**: Branco #e6e6e6

## 🗺️ Divisão de Sessões da Página

### 1. Cabeçalho de Navegação (Navbar)

- **Propósito:** Fornecer navegação rápida pelas seções do site, link para o produto `/forge` e acesso rápido ao repositório GitHub da organização.
- **Layout:**
  - Fixado no topo (`sticky`) com fundo translúcido blur (`backdrop-filter: blur(12px)`).
  - Lado esquerdo: Logotipo da OpenCreate (está em `public/OpenCreate-Logo.svg`).
  - Centro: Links de navegação: "About", "Solutions", "Manifest", "Contribute".
  - Lado direito: Botão de destaque "Acessar o Forge" redirecionando para `/forge`, seguido de um ícone discreto do GitHub que abre o repositório em nova aba.
- **Textos:**
  - Links: `About`, `Solutions`, `Manifest`, `Community`.
- **Imagens:**
  - _GitHub Icon:_ Ícone SVG padrão da marca GitHub.

---

### 2. Seção Hero (Apresentação Principal)

- **Propósito:** Impactar o visitante imediatamente com a proposta de valor principal da organização: criar softwares criativos e profissionais que respeitam o usuário e são incrivelmente velozes.
- **Layout:**
  - Centralizado para grande impacto.
  - Linha 1: Logo grande
  - Linha 2 (Texto e CTAs): Título gigante com tipografia marcante, subtítulo explicativo e dois botões de ação (Primário com gradiente, secundário com borda brilhante).
- **Textos:**
  - Título Principal: `Create freely, forever.`
  - Subtítulo: `We develop applications aimed at designers and artists. No subscriptions, no abusive telemetry, open-source.`
  - Botão Primário: `Our Solutions` (âncora para a seção de projetos).
  - Botão Secundário: `Read Manifest` (âncora para seção sobre a missão).
- **Imagens:**
  - _Logo:_ Imagem presente em `public/OpenCreate-Logo.svg`.

---

### 3. Manifesto & Pilares (Sobre, Missão, Visão e Valores)

- **Propósito:** Estabelecer a credibilidade e a filosofia da OpenCreate, diferenciando-a de gigantes proprietários de software corporativo.
- **Layout:**
  - Grid de 3 colunas para os pilares principais.
  - Design com ícones na parte superior de cada cartão.
- **Textos:**
  - Título da Seção:`Our Pillars`
  - **Cartão 1: Código Aberto (Missão)**
    - Título: `Transparent`
    - Texto: `We believe creative tools should belong to the community. All of our code is public, auditable, and free for modification and continuous improvement.`
  - **Cartão 2: Foco em Performance (Visão)**
    - Título: `Native Speed`
    - Texto: `We optimize every line of code. We use modern web technologies and hardware rendering to ensure your workflow isn't interrupted by loading screens.`
  - **Cartão 3: Privacidade em Primeiro Lugar (Valores)**
    - Título: `Your Data Is Yours`
    - Texto: `Our apps are offline-first. We do not collect invasive telemetry, we do not sell your data, and we do not require logins or subscriptions for you to work.`
- **Imagens:**
  - _Ícones dos cartões:_
    - Cartão 1: Ícone de terminal/código (`</>`).
    - Cartão 2: Ícone de velocímetro.
    - Cartão 3: Ícone de escudo.

---

### 4. Ecossistema de Softwares (Catálogo de Apps)

- **Propósito:** Apresentar as ferramentas criadas pela OpenCreate, direcionando tráfego para a página do Forge e antecipando projetos futuros.
- **Layout:**
  - Layout de lista/grade assimétrica onde o produto principal (Forge) ganha o dobro de espaço ou destaque especial.
  - Card de destaque do Forge: Imagem mock-up à esquerda ou direita, texto descritivo e botão "Explorar o Forge ->".
  - Card secundário: Espaço para "Em Breve" ou teaser do próximo utilitário (ex: editor vetorial, editor de áudio).
- **Textos:**
  - Título da Seção: `Our Solutions`
  - Subtítulo: `Tools designed to boost your creativity.`
  - **Card OpenCreate Forge (Ativo):**
    - Badge: `FEATURED`
    - Título: `OpenCreate Forge`
    - Descrição: `A professional, ultra-high-performance image manipulation editor. Raster/text layers, a double-buffering based engine, and native support for the .ocfd format. Available for Web and Desktop.`
    - CTA: `Read more`
  - **Card vazio com borda pontilhada (Mostrar que tem espaço para mais um):**
  - **Imagens:**
  - _Screenshot do Forge:_ Captura de tela do OpenCreate Forge exibindo uma imagem em edição com guias azuis de precisão, painel de camadas à direita e a ferramenta de pincel selecionada. (será importada depois)

---

### 5. Comunidade e Contribuição (Open Source)

- **Propósito:** Incentivar programadores, designers e entusiastas a colaborarem com o projeto no GitHub ou se juntarem à comunidade.
- **Layout:**
  - Banner de largura total com fundo gradiente escuro e bordas arredondadas.
  - Centralizado com ícones das tecnologias utilizadas (React, TypeScript, Electron, Tailwind) e grandes botões para ações de comunidade.
- **Textos:**
  - Título da Seção: `Made by creators, for creators.`
  - Descrição: `OpenCreate is maintained (for now) by just a single developer passionate about free software and tired of paywalls. You can help by reporting bugs, suggesting new features, or writing some code.`
  - Botão 1 (Principal): `Contribute on GitHub`
  - Botão 2 (Secundário): `Report Bugs or Submit Ideas`
- **Imagens:**
  - _Painel de Tech Stack:_ Logotipos minimalistas de React, TypeScript, Tailwind CSS, Electron, organizados lado a lado no final do banner.

---

### 6. Rodapé (Footer)

- **Propósito:** Links legais, direitos autorais, mapa do site simplificado.
- **Layout:**
  - Dividido em 4 colunas simples com links e uma assinatura de rodapé na parte inferior.
- **Textos:**
  - Coluna 1: `OpenCreate` - `Professional-quality free software.`
  - Coluna 2 (Recursos): `Source Code`, `Report Bug`.
  - Coluna 3 (Produtos): `OpenCreate Forge`.
  - Coluna 4 (Social): `GitHub`, `Threads`, `Instagram`.
  - Copyright: `© 2026 OpenCreate. Created with ❤️ by Gabriel Borges.`
- **Imagens:**
  - Apenas ícones de redes sociais pequenos.
