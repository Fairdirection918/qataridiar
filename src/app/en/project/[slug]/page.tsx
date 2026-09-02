import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/ProjectDetailView";
import {
  getProjectEn,
  PROJECT_SLUGS_EN,
} from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, residenceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

/** Phase 1 scope: only the 4 indexable Egypt projects have English detail
 *  content today (see src/lib/seo.ts INDEXABLE_PROJECT_SLUGS). The other 24
 *  global projects are deferred — see the Qatari Diar plan. */
export function generateStaticParams() {
  return PROJECT_SLUGS_EN.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectEn(slug);
  if (!project) return { title: "Project | QatariDiar" };

  const title = project.title;
  const description = project.summary || project.paragraphs[0] || project.title;
  const canonical = `/en/project/${slug}/`;
  const ogImage = `/og/${slug}.jpg`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: "Fair Direction — Authorized Sales Agent for Qatar Diar",
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectEn(slug);
  if (!project) notFound();

  return (

    // gac footer marker: {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
    <>
      {/* gac:start:disclosure-ar */}{/* gac:end:disclosure-ar */}
      <JsonLd data={residenceSchema(project, "en")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/en` },
          { name: project.title, url: `${SITE_URL}${project.route}/` },
        ])}
      />
      <ProjectDetailView project={project} locale="en" />
    </>
  );
}
