import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.wildflow.ai",

  integrations: [
    starlight({
      title: "wildflow docs",
      social: {
        github: "https://github.com/wildflowai/platform",
      },
      sidebar: [
        { label: "Overview", link: "/overview" },
        {
          label: "Applications",
          // Not using autogenerate to keep custom order.
          // autogenerate: { directory: "applications" },
          items: [
            {
              label: "Marine Protected Areas",
              link: "/applications/marine-protected-areas",
            },
            {
              label: "Coral Bleaching Events",
              link: "/applications/coral-bleaching",
            },
            {
              label: "Harmful Algae Blooms",
              link: "/applications/algae-blooms",
            },
            {
              label: "Offshore Wind Farms",
              link: "/applications/wind-farms",
            },
            {
              label: "Biodiversity Credits",
              link: "/applications/biodiversity-credits",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
