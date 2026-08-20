import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";

const PAGE_KEY = "ar-projects";

export const metadata: Metadata = {
  title: "مشاريع الديار القطرية",
  description:
    "تصفح مشاريع الديار القطرية حول العالم، وتعرّف على مشاريعها في مصر بالساحل الشمالي والقاهرة الجديدة والجيزة، مع فير دايركشن الوكيل المعتمد.",
  alternates: { canonical: "/ar/projects/" },
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();
  return (
    <>
      {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
      {/* gac:start:disclosure-ar */}{/* gac:end:disclosure-ar */}
      <InteriorPageView page={page} />
    </>
  );
}
