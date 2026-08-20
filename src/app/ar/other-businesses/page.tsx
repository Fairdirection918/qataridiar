import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";

const PAGE_KEY = "ar-other-businesses";

export const metadata: Metadata = {
  title: "أعمال الديار القطرية الأخرى",
  description:
    "الشركات التابعة لمجموعة الديار القطرية في مجالات البناء والبنية التحتية، المطوّر العقاري لمشاريع فير دايركشن المعتمدة في مصر.",
  alternates: { canonical: "/ar/other-businesses/" },
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();
  return (
    <>
      {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
      <InteriorPageView page={page} />
    </>
  );
}
