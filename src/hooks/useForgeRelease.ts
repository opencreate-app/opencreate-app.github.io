import { useState, useEffect } from "react";

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  assets: GitHubAsset[];
}

export type Platform = "Windows" | "macOS" | "Linux" | "";

export function useForgeRelease() {
  const [downloadUrl, setDownloadUrl] = useState(
    "https://github.com/gabrielborgesweb/opencreate-forge/releases/latest",
  );
  const [platform, setPlatform] = useState<Platform>("");
  const [allUrls, setAllUrls] = useState<{
    windows: string;
    macos: string;
    linux: string;
  }>({
    windows: "https://github.com/gabrielborgesweb/opencreate-forge/releases/latest",
    macos: "https://github.com/gabrielborgesweb/opencreate-forge/releases/latest",
    linux: "https://github.com/gabrielborgesweb/opencreate-forge/releases/latest",
  });

  useEffect(() => {
    const detectPlatform = (): Platform => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf("win") !== -1) return "Windows";
      if (userAgent.indexOf("mac") !== -1) return "macOS";
      if (userAgent.indexOf("linux") !== -1) return "Linux";
      return "";
    };

    const currentPlatform = detectPlatform();
    setPlatform(currentPlatform);

    fetch(
      "https://api.github.com/repos/gabrielborgesweb/opencreate-forge/releases/latest",
    )
      .then((res) => res.json())
      .then((data: GitHubRelease) => {
        if (data.assets) {
          const windowsAsset = data.assets.find(
            (a: GitHubAsset) =>
              a.name.endsWith(".exe") && !a.name.includes("Setup"),
          ) || data.assets.find((a: GitHubAsset) => a.name.endsWith(".exe"));

          const macosAsset = data.assets.find((a: GitHubAsset) =>
            a.name.endsWith(".dmg"),
          );

          const linuxAsset = data.assets.find((a: GitHubAsset) =>
            a.name.endsWith(".AppImage"),
          );

          setAllUrls({
            windows: windowsAsset?.browser_download_url || "https://github.com/gabrielborgesweb/opencreate-forge/releases/latest",
            macos: macosAsset?.browser_download_url || "https://github.com/gabrielborgesweb/opencreate-forge/releases/latest",
            linux: linuxAsset?.browser_download_url || "https://github.com/gabrielborgesweb/opencreate-forge/releases/latest",
          });

          let asset;
          if (currentPlatform === "Windows") {
            asset = windowsAsset;
          } else if (currentPlatform === "macOS") {
            asset = macosAsset;
          } else if (currentPlatform === "Linux") {
            asset = linuxAsset;
          }
          if (asset) {
            setDownloadUrl(asset.browser_download_url);
          }
        }
      })
      .catch(() => {});
  }, []);

  return { downloadUrl, platform, allUrls };
}
