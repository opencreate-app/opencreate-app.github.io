import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { ForgePage } from "./pages/ForgePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { normalizeRoutePath } from "./routing/useRoutePath";

export default function App() {
  const [path, setPath] = useState(() =>
    normalizeRoutePath(window.location.pathname),
  );

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizeRoutePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [path]);

  if (path === "/forge") {
    return <ForgePage />;
  }

  if (path === "/") {
    return <HomePage />;
  }

  return <NotFoundPage />;
}
