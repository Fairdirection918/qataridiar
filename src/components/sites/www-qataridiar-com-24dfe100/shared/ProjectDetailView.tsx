import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { ProjectDetail } from "@/types/qataridiar";
import { LandingDisclosure } from "./LandingDisclosure";
import { PageShell } from "./PageShell";

const TEXT = {
  en: {
    region: "Region",
    location: "Location",
    area: "Area",
    status: "Status",
    backToProjects: "Back to Projects",
    inquire: "Inquire",
    visitWebsite: "Visit Website",
    projectGallery: "Project Gallery",
    faqs: "Frequently Asked Questions",
    projectsHref: "/en/projects",
    inquireHref: "/en/inquire",
  },
  ar: {
    region: "المنطقة",
    location: "الموقع",
    area: "المساحة",
    status: "الحالة",
    backToProjects: "العودة للمشاريع",
    inquire: "إستعلم",
    visitWebsite: "زيارة الموقع",
    projectGallery: "صور المشروع",
    faqs: "الأسئلة الشائعة",
    projectsHref: "/ar/projects",
    inquireHref: "/ar/inquire",
  },
} as const;

export function ProjectDetailView({
  project,
  locale = "ar",
}: {
  project: ProjectDetail;
  locale?: "en" | "ar";
}) {
  const t = TEXT[locale];
  const details = [
    project.region && { label: t.region, value: project.region },
    project.location && { label: t.location, value: project.location },
    project.area && { label: t.area, value: project.area },
    project.status && { label: t.status, value: project.status },
  ].filter(Boolean) as { label: string; value: string }[];

  return (

    // gac footer marker: {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
    <PageShell darkHeader locale={locale}>
      <section className="relative bg-qd-navy pt-[140px] pb-0 max-[767px]:pt-[110px]">
        <Container>
          <Link
            href={t.projectsHref}
            className="mb-[30px] inline-block text-[14px] font-bold text-qd-gold uppercase"
          >
            {t.backToProjects}
          </Link>
          <div className="grid items-end gap-[30px] md:grid-cols-2">
            <div>
              <h1 className="mb-[24px] text-[42px] leading-[50px] font-bold text-white uppercase max-[767px]:text-[28px] max-[767px]:leading-[36px]">
                {project.title}
              </h1>
              <dl className="mb-[24px] space-y-[10px]">
                {details.map((d) => (
                  <div key={d.label} className="flex flex-wrap gap-[8px]">
                    <dt className="text-[13px] font-bold text-qd-gold">
                      {d.label}
                    </dt>
                    <dd className="text-[14px] text-white">{d.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-[16px]">
                <Link
                  href={t.inquireHref}
                  className="bg-qd-gold px-[22px] py-[10px] text-[13px] font-bold text-white uppercase"
                >
                  {t.inquire}
                </Link>
                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white px-[22px] py-[10px] text-[13px] font-bold text-white uppercase"
                  >
                    {t.visitWebsite}
                  </a>
                ) : null}
              </div>
            </div>
            {project.banner ? (
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={project.banner}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="bg-qd-cream py-[70px] max-[767px]:py-[40px]">
        <Container>
          {project.summary ? (
            <h2 className="mb-[30px] max-w-[900px] text-[22px] leading-[34px] font-bold text-qd-navy">
              {project.summary}
            </h2>
          ) : null}
          <div className="max-w-[820px] space-y-[18px]">
            {project.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="text-[16px] leading-[28px] text-qd-text"
              >
                {p}
              </p>
            ))}
          </div>

          {project.gallery.length > 1 ? (
            <div className="mt-[60px]">
              <h2 className="mb-[24px] text-[28px] font-bold text-qd-navy">
                {t.projectGallery}
              </h2>
              <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((g) => (
                  <div
                    key={g.src}
                    className="relative aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={g.src}
                      alt={g.alt || project.title}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {project.sections?.length ? (
            <div className="mt-[60px] max-w-[820px] space-y-[40px]">
              {project.sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="mb-[18px] text-[24px] font-bold text-qd-navy">
                    {s.heading}
                  </h2>
                  <div className="space-y-[18px]">
                    {s.paragraphs.map((p) => (
                      <p
                        key={p.slice(0, 48)}
                        className="text-[16px] leading-[28px] text-qd-text"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {project.faqs?.length ? (
            <div className="mt-[60px] max-w-[820px]">
              <h2 className="mb-[24px] text-[28px] font-bold text-qd-navy">
                {t.faqs}
              </h2>
              <div className="space-y-[24px]">
                {project.faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="mb-[8px] text-[16px] font-bold text-qd-navy">
                      {f.question}
                    </h3>
                    <p className="text-[16px] leading-[28px] text-qd-text">
                      {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      {/* gac:start:disclosure-ar */}
      <LandingDisclosure />
      {/* gac:end:disclosure-ar */}
    </PageShell>
  );
}
