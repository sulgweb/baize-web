import type { MetadataRoute } from "next";
import { baseUrl } from "@/utils/textHelper";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/image-compress",
    "/vite-cdn",
    "/webpack-cdn",
    "/baize-toolbox",
    "/quick-study",
  ];

  const now = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}


