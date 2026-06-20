export type RoutePath = "/" | "/forge" | "not-found";

export function normalizeRoutePath(pathname: string): RoutePath {
  const normalized = pathname.replace(/\/+/g, "/");
  const stripped = normalized.replace(/\/+$/, "");

  if (stripped === "/forge") {
    return "/forge";
  }

  if (
    stripped === "" ||
    stripped === "/" ||
    stripped === "/index.html" ||
    stripped === "/404.html"
  ) {
    return "/";
  }

  return "not-found";
}
