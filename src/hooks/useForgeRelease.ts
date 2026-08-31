import { useState, useEffect } from "react";

export interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

export interface GitHubRelease {
  tag_name: string;
  assets: GitHubAsset[];
}

export interface ReleaseInfo {
  version: string;
  downloadUrl: string;
  allUrls: {
    windows: string;
    macos: string;
    linux: string;
  };
}

export type Platform = "Windows" | "macOS" | "Linux" | "";

const FALLBACK_URL = "https://github.com/opencreate-app/forge/releases/latest";
const CACHE_KEY = "FORGE_RELEASE_CACHE";
const CACHE_TTL = 3600000; // 1 hour

function findWindowsAsset(assets: GitHubAsset[]) {
  return (
    assets.find(
      (asset) =>
        asset.name.toLowerCase().endsWith(".exe") &&
        asset.name.toLowerCase().includes("setup"),
    ) || assets.find((asset) => asset.name.toLowerCase().endsWith(".exe"))
  );
}

export async function fetchLatestRelease(): Promise<ReleaseInfo | null> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/opencreate-app/forge/releases/latest",
    );
    if (!res.ok) return null;
    const data: GitHubRelease = await res.json();

    if (!data.assets) return null;

    const windowsAsset = findWindowsAsset(data.assets);

    const macosAsset = data.assets.find((a: GitHubAsset) =>
      a.name.endsWith(".dmg"),
    );

    const linuxAsset = data.assets.find((a: GitHubAsset) =>
      a.name.toLowerCase().endsWith(".appimage"),
    );

    return {
      version: data.tag_name,
      downloadUrl: windowsAsset?.browser_download_url || FALLBACK_URL,
      allUrls: {
        windows: windowsAsset?.browser_download_url || FALLBACK_URL,
        macos: macosAsset?.browser_download_url || FALLBACK_URL,
        linux: linuxAsset?.browser_download_url || FALLBACK_URL,
      },
    };
  } catch (error) {
    console.error("Failed to fetch latest release:", error);
    return null;
  }
}

export function useForgeRelease(initialData?: ReleaseInfo) {
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo>(() => {
    // 1. Priority: Initial data (from prerender)
    if (initialData) return initialData;

    // 2. Priority: localStorage cache
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL) {
            return data;
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          // ignore
        }
      }
    }

    // 3. Fallback: Generic latest links
    return {
      version: "",
      downloadUrl: FALLBACK_URL,
      allUrls: {
        windows: FALLBACK_URL,
        macos: FALLBACK_URL,
        linux: FALLBACK_URL,
      },
    };
  });

  const [platform, setPlatform] = useState<Platform>("");

  useEffect(() => {
    const detectPlatform = (): Platform => {
      if (typeof window === "undefined") return "";
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf("win") !== -1) return "Windows";
      if (userAgent.indexOf("mac") !== -1) return "macOS";
      if (userAgent.indexOf("linux") !== -1) return "Linux";
      return "";
    };

    const currentPlatform = detectPlatform();
    setPlatform(currentPlatform);

    // Refresh data in background
    fetchLatestRelease().then((data) => {
      if (data) {
        setReleaseInfo(data);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data, timestamp: Date.now() }),
          );
        }
      }
    });
  }, []);

  // Update downloadUrl based on detected platform
  const finalDownloadUrl =
    platform === "macOS"
      ? releaseInfo.allUrls.macos
      : platform === "Linux"
        ? releaseInfo.allUrls.linux
        : releaseInfo.allUrls.windows;

  return {
    version: releaseInfo.version,
    downloadUrl: finalDownloadUrl,
    platform,
    allUrls: releaseInfo.allUrls,
  };
}
