import { Languages } from "lucide-react";
import { useI18n } from "../i18n-context";

export function LanguageToggle() {
  const { language, setLanguage, copy } = useI18n();
  const nextLanguage = language === "en" ? "pt" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#333] transition hover:border-[#5555FF] hover:text-[#5555FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5555FF]"
      aria-label={`${copy.nav.language}: ${nextLanguage === "pt" ? "Português" : "English"}`}
      title={copy.nav.language}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span>{language === "en" ? "EN" : "BR"}</span>
    </button>
  );
}
