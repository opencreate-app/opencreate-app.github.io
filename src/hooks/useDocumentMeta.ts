import { useEffect } from "react";

type MetaInput = {
  title: string;
  description: string;
  canonical: string;
  themeColor: string;
  image?: string;
  siteName?: string;
  robots?: string;
};

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(
    selector,
  );

  if (!element) {
    const tag = selector.startsWith("link") ? "link" : "meta";
    element = document.createElement(tag) as HTMLMetaElement | HTMLLinkElement;
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function useDocumentMeta({
  title,
  description,
  canonical,
  themeColor,
  image,
  siteName,
  robots,
}: MetaInput) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    setMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: themeColor,
    });
    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    setMeta('link[rel="canonical"]', {
      rel: "canonical",
      href: canonical,
    });
    if (robots) {
      setMeta('meta[name="robots"]', {
        name: "robots",
        content: robots,
      });
    }
    setMeta('meta[name="twitter:url"]', {
      name: "twitter:url",
      content: canonical,
    });
    if (image) {
      setMeta('meta[property="og:image"]', {
        property: "og:image",
        content: image,
      });
      setMeta('meta[name="twitter:image"]', {
        name: "twitter:image",
        content: image,
      });
    }
    if (siteName)
      setMeta('meta[property="og:site_name"]', {
        property: "og:site_name",
        content: siteName,
      });
  }, [canonical, description, image, robots, siteName, themeColor, title]);
}
