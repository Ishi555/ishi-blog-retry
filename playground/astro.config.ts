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
          },
          footer: [
            {
              title: "About",
              link: "/ishi-blog-retry/about/",
              icon: {
                default: "solar:user-id-broken",
                hover: "solar:user-id-outline",
                active: "solar:user-id-bold-duotone"
              }
            },
            {
              title: "Projects",
              link: "/ishi-blog-retry/projects/",
              icon: {
                default: "solar:folder-with-files-broken",
                hover: "solar:folder-with-files-outline",
                active: "solar:folder-with-files-bold-duotone"
              }
            },
            {
              title: "Search",
              link: "/ishi-blog-retry/search/",
              icon: {
                default: "solar:search-broken",
                hover: "solar:search-outline",
                active: "solar:search-bold-duotone"
              }
            }
          ]
        },
        licenseId: "CC0-1.0",
        categories: {
          "Getting Started": {
            description: "Getting started with the blog",
            icon: {
              default: "solar:rocket-broken",
              hover: "solar:rocket-outline",
              active: "solar:rocket-bold-duotone"
            }
          },
          "Tutorials": {
            description: "Step-by-step guides",
            icon: {
              default: "solar:book-broken",
              hover: "solar:book-outline",
              active: "solar:book-bold-duotone"
            }
          }
        }
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
