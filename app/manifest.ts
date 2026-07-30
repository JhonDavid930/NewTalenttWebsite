import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NewTalentt",
    short_name: "NewTalentt",
    description:
      "Music Strategy, Growth & Technology. Built for music.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C0F18",
    theme_color: "#ff5055",
    icons: [
      {
        src: "/brand/icon-512.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
