import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";

const PAGE_KEY = "ar-about-us";

export const metadata: Metadata = {
  title: "معلومات عن الديار القطرية",
  description:
    "فير دايركشن، الوكيل المعتمد لمشاريع شركة الديار القطرية للاستثمار العقاري في مصر. تأسست الشركة عام 2005 كإحدى شركات جهاز قطر للاستثمار.",
  alternates: { canonical: "/ar/about-us/" },
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
