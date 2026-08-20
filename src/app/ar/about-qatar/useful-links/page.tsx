import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";

const PAGE_KEY = "ar-about-qatar-useful-links";

export const metadata: Metadata = {
  title: "روابط مفيدة عن قطر",
  description:
    "روابط مفيدة عن دولة قطر من فير دايركشن، الوكيل المعتمد لمشاريع الديار القطرية العقارية في مصر.",
  alternates: { canonical: "/ar/about-qatar/useful-links/" },
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
