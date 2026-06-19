# OpenCreate & OpenCreate Forge - Projeto e Contexto do Website

Este arquivo serve como contexto consolidado do projeto para que outros modelos ou sessões do Gemini (ou outros modelos LLM) compreendam a essência do ecossistema **OpenCreate** e de seu principal produto atual, o **OpenCreate Forge**.

---

## 🏢 1. O que é a OpenCreate?

A **OpenCreate** é uma organização fictícia (ou iniciativa open-source) focada em desenvolver ferramentas criativas e utilitários modernos, de alta performance e código aberto para criadores digitais.

### Pilares da Organização:

- **Código Aberto & Transparência:** Todas as ferramentas são 100% open-source, sem paywalls ocultos.
- **Performance Nativa com Web Tech:** Usamos o melhor do ecossistema Web (React, Vite, Tailwind, TypeScript) emparelhado com runtimes nativos (como Electron) e APIs de baixo nível (como HTML5 Canvas/WebGL2) para entregar velocidade excepcional.
- **Privacidade & Offline-First:** Foco em manter os dados e arquivos do usuário locais, respeitando a privacidade e dando total controle sobre o fluxo de trabalho.

---

## 🎨 2. O que é o OpenCreate Forge?

O **OpenCreate Forge** é o primeiro grande software da organização. Trata-se de um editor de manipulação de imagens profissional, moderno e de alta performance que roda como aplicativo desktop via Electron.

### Arquitetura do Software:

- **Processo Principal (Main Process):** Gerencia o ciclo de vida do Electron, janelas nativas, menus de sistema e operações IPC seguras de arquivo.
- **Processo do Renderizador (Renderer Process):** Interface construída em React 19, Tailwind CSS v4, Zustand 5 para gerenciamento de estados globais (desacoplada de re-renders intensivos) e ícones via Lucide React.
- **Motor de Renderização (ForgeEngine):** Motor customizado baseado em HTML5 Canvas e estratégias de double-buffering. O projeto é renderizado em um buffer offline em escala 1:1 e desenhado na viewport com transformações de matriz rápidas para zoom, pan e rotação.
- **Sistema de Camadas (Layer System):** Suporta camadas do tipo _Raster_, _Text_, _Group_ e futuramente _Smart Objects_, de forma extensível.
- **Formato de Arquivo (.ocfd: OpenCreate Forge Document):** Formato baseado em JSON contendo metadados do projeto e dados de imagem (Raster) serializados em Base64.

---

## 🌐 3. Estrutura do Website Solicitado

Para apresentar este ecossistema ao mundo, foi planejado um website com as seguintes páginas e especificações estruturais:

1. **Página Inicial (`HOMEPAGE.md`):**
   - Foco na organização **OpenCreate**.
   - Apresenta a missão, visão, valores, quem somos, o catálogo de projetos/apps (com destaque ao Forge) e formas de contribuição/comunidade.
2. **Página de Produto (`PAGE_FORGE.md`):**
   - Rota `/forge`.
   - Focada exclusivamente no **OpenCreate Forge**.
   - Apresentação de recursos chave (Canvas Engine, Camadas, Ferramentas), link de download da última versão, documentação de início rápido e diferenciais técnicos.

---

## 🛠️ 4. Diretrizes Visuais Gerais do Website

- **Estética Simples:** O site deve seguir um design moderno, sofisticado e limpo, com fundo branco e cor principal azul (#5555FF).
- **Tipografia:** Uso de fonte geométrica e moderna: _Roboto_.
- **Micro-interações:** Efeitos suaves de hover em botões, transições de cards.
