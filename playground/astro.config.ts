import { defineConfig } from "astro/config";
import charm from "astro-charm";
import pageInsight from "astro-page-insight";
import playformCompress from "@playform/compress";

export default defineConfig({
  prefetch: true,
  site: "https://ishi555.github.io/ishi-blog-retry/",
  base: "/ishi-blog-retry/",

  output: "static",

  integrations: [
    charm({
      config: {
        lang: "en",
        title: "ishi blog",
        description: "A beautiful blog theme for Astro",
        side: {
          title: "ishi BLOG",
          sub: "Ishi's blog. ",
          bio: "Stay chill.",
          navHome: {
            title: "Home",
            link: "/ishi-blog-retry/",
            icon: {
              default: "solar:file-text-broken",
              hover: "solar:file-smile-outline",
              active: "solar:file-smile-bold-duotone"
            }
          }
        },
        licenseId: "CC0-1.0",
      },
      pages: {},
      overrides: {
        components: {
          // override components
          // ShootingStar: "./src/components/ShootingStar.astro",
        },
        custom: {
          // it will be added to the end of `<head>`.
          CustomScriptComponent: "./src/components/CustomScriptComponent.astro",
          CustomPostHeaderBottom:
            "./src/components/CustomPostHeaderBottom.astro",
        },
      },
    }),
    pageInsight(),
    playformCompress(),
  ],
});
