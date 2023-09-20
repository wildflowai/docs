import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.wildflow.ai",

  integrations: [
    starlight({
      title: "wildflow 🐳",
      social: {
        github: "https://github.com/wildflowai/platform",
      },
      sidebar: [
        { label: "Overview", link: "/overview" },
        {
          label: "Applications",
          autogenerate: { directory: "applications" },
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
