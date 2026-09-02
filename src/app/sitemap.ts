import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { INDEXABLE_PROJECT_SLUGS } from "@/lib/seo";
import { PROJECT_SLUGS_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    "/",
    "/ar/",
    "/ar/about-us/",
    "/ar/about-qatar/",
    "/ar/about-qatar/history-geography/",
    "/ar/about-qatar/useful-links/",
    "/ar/careers/",
    "/ar/contact-us/",
    "/ar/e-procurement/",
    "/ar/media/",
    "/ar/other-businesses/",
    "/ar/projects/",
    "/ar/privacy-policy/",
    "/ar/terms/",
    "/en/",
    "/en/about-us/",
    "/en/about-qatar/",
    "/en/about-qatar/history-geography/",
    "/en/about-qatar/useful-links/",
    "/en/careers/",
    "/en/contact-us/",
    "/en/e-procurement/",
    "/en/media/",
    "/en/other-businesses/",
    "/en/projects/",
    "/en/privacy-policy/",
    "/en/terms/",
  ].map((path) => ({ url: `${SITE_URL}${path}`, lastModified }));

  const projects = INDEXABLE_PROJECT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/ar/project/${slug}/`,
    lastModified,
  }));

  const projectsEn = PROJECT_SLUGS_EN.map((slug) => ({
    url: `${SITE_URL}/en/project/${slug}/`,
    lastModified,
  }));

  return [...staticPages, ...projects, ...projectsEn];
}
