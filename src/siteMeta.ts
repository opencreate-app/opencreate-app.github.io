export type PageMeta = {
  title: string;
  description: string;
  canonical: string;
  themeColor: string;
  image: string;
  siteName: string;
  robots?: string;
};

export const SITE_ORIGIN = "https://opencreate-app.github.io";

export const HOME_META: PageMeta = {
  title: "OpenCreate",
  description:
    "OpenCreate develops high-performance, open-source creative applications for designers and artists.",
  canonical: `${SITE_ORIGIN}/`,
  themeColor: "#5555FF",
  image: `${SITE_ORIGIN}/cover.webp`,
  siteName: "OpenCreate",
};

export const FORGE_META: PageMeta = {
  title: "OpenCreate Forge",
  description:
    "OpenCreate Forge is a professional image editor with double-buffered Canvas rendering, layers, and native .ocfd support.",
  canonical: `${SITE_ORIGIN}/forge/`,
  themeColor: "#ff6a00",
  image: `${SITE_ORIGIN}/OpenCreate-Forge-Alpha3-Screenshot.webp`,
  siteName: "OpenCreate Forge",
};

export const NOT_FOUND_META: PageMeta = {
  title: "OpenCreate - Page not found",
  description: "The requested OpenCreate page could not be found.",
  canonical: `${SITE_ORIGIN}/404.html`,
  themeColor: "#5555FF",
  image: `${SITE_ORIGIN}/cover.webp`,
  siteName: "OpenCreate",
  robots: "noindex,nofollow",
};
