import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { fetchLatestRelease } from "../src/hooks/useForgeRelease";
import { ForgePage } from "../src/pages/ForgePage";
import { HomePage } from "../src/pages/HomePage";
import { NotFoundPage } from "../src/pages/NotFoundPage";
import { FORGE_META, HOME_META, NOT_FOUND_META } from "../src/siteMeta";

type RenderedPage = {
  outputPath: string;
  markup: string;
  meta: typeof HOME_META;
};

const distDir = join(process.cwd(), "dist");
const templatePath = join(distDir, "index.html");

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function replaceSingleTag(
  html: string,
  regex: RegExp,
  replacement: string,
  fallbackInsertBeforeHeadClose = false,
) {
  if (regex.test(html)) {
    return html.replace(regex, replacement);
  }

  if (fallbackInsertBeforeHeadClose) {
    return html.replace("</head>", `${replacement}\n  </head>`);
  }

  return html;
}

function buildHtml(template: string, markup: string, meta: typeof HOME_META) {
  let html = template.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${markup}</div>`,
  );

  html = replaceSingleTag(
    html,
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(meta.title)}</title>`,
  );
  html = replaceSingleTag(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
  );
  html = replaceSingleTag(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
  );
  html = replaceSingleTag(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
  );
  html = replaceSingleTag(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeHtml(
      meta.description,
    )}" />`,
  );
  html = replaceSingleTag(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${escapeHtml(meta.canonical)}" />`,
  );
  html = replaceSingleTag(
    html,
    /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="twitter:title" content="${escapeHtml(meta.title)}" />`,
  );
  html = replaceSingleTag(
    html,
    /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="twitter:description" content="${escapeHtml(
      meta.description,
    )}" />`,
  );
  html = replaceSingleTag(
    html,
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="twitter:url" content="${escapeHtml(meta.canonical)}" />`,
  );
  html = replaceSingleTag(
    html,
    /<meta\s+name="theme-color"\s+content="[^"]*"\s*\/>/,
    `<meta name="theme-color" content="${escapeHtml(meta.themeColor)}" />`,
    true,
  );

  if (meta.robots) {
    html = replaceSingleTag(
      html,
      /<meta\s+name="robots"\s+content="[^"]*"\s*\/>/,
      `<meta name="robots" content="${escapeHtml(meta.robots)}" />`,
      true,
    );
  }

  return html;
}

async function writePage({ outputPath, markup, meta }: RenderedPage) {
  const template = await readFile(templatePath, "utf8");
  const html = buildHtml(template, markup, meta);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
}

async function main() {
  const latestRelease = await fetchLatestRelease();

  const pages: RenderedPage[] = [
    {
      outputPath: join(distDir, "index.html"),
      markup: renderToStaticMarkup(<HomePage />),
      meta: HOME_META,
    },
    {
      outputPath: join(distDir, "forge", "index.html"),
      markup: renderToStaticMarkup(
        <ForgePage initialRelease={latestRelease || undefined} />,
      ),
      meta: FORGE_META,
    },
    {
      outputPath: join(distDir, "404.html"),
      markup: renderToStaticMarkup(<NotFoundPage />),
      meta: NOT_FOUND_META,
    },
  ];

  await Promise.all(pages.map(writePage));
}

await main();
