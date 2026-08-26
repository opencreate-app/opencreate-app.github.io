import { createContext, useContext } from "react";

export type Language = "en" | "pt";

export type Copy = {
  nav: {
    about: string;
    values: string;
    solutions: string;
    forge: string;
    community: string;
    language: string;
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    valuesEyebrow: string;
    valuesTitle: string;
    valuesDescription: string;
    pillars: Array<{ title: string; description: string }>;
    productsEyebrow: string;
    productsTitle: string;
    productsDescription: string;
    forgeLabel: string;
    forgeTitle: string;
    forgeDescription: string;
    forgePrimary: string;
    forgeSecondary: string;
    moreTitle: string;
    moreDescription: string;
    communityTitle: string;
    communityDescription: string;
    communityPrimary: string;
    communitySecondary: string;
  };
  forge: {
    nav: {
      product: string;
      features: string;
      architecture: string;
      community: string;
    };
    latest: string;
    downloadNow: string;
    heroTitle: string;
    heroDescription: string;
    heroSecondary: string;
    screenshotEyebrow: string;
    screenshotTitle: string;
    screenshotDescription: string;
    screenshotAlt: string;
    featuresEyebrow: string;
    featuresTitle: string;
    featuresDescription: string;
    features: Array<{ title: string; description: string }>;
    developerEyebrow: string;
    developerTitle: string;
    developerDescription: string;
    architectureTitle: string;
    architectureDescription: string;
    cleanArchitecture: string;
    cleanArchitectureDescription: string;
    typescript: string;
    typescriptDescription: string;
    state: string;
    stateDescription: string;
    extensibleNote: string;
    downloadsEyebrow: string;
    downloadsTitle: string;
    downloadsDescription: string;
    downloadActions: { linux: string; macos: string; windows: string };
    downloadNotes: { linux: string; macos: string; windows: string };
  };
  footer: {
    tagline: string;
    resources: string;
    products: string;
    social: string;
    source: string;
    bug: string;
    copyright: string;
    created: string;
  };
  notFound: { title: string; description: string; back: string };
};

export type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: Copy;
};
export const I18nContext = createContext<I18nContextValue>({
  language: "en",
  setLanguage: () => undefined,
  copy: {} as Copy,
});
export const useI18n = () => useContext(I18nContext);
