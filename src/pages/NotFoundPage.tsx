import { SearchX } from "lucide-react";
import { AppLink } from "../components/AppLink";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { NOT_FOUND_META } from "../siteMeta";

export function NotFoundPage() {
  useDocumentMeta(NOT_FOUND_META);

  return (
    <div className="grid min-h-screen place-items-center bg-[#f7f8ff] px-4 text-[#1a1a1a]">
      <div className="max-w-xl rounded-[32px] border border-[#dfe3ff] bg-white p-8 text-center shadow-[0_24px_80px_rgba(16,24,40,0.06)]">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f4ff] text-[#5555FF]">
          <SearchX className="h-6 w-6" />
        </div>
        <h1 className="mt-6 text-3xl font-black tracking-[-0.04em]">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#555]">
          The route you opened does not exist in this site.
        </p>
        <div className="mt-8 flex justify-center">
          <AppLink
            href="./"
            className="inline-flex items-center gap-2 rounded-full bg-[#5555FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Back home
          </AppLink>
        </div>
      </div>
    </div>
  );
}
