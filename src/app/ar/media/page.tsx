import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";

const PAGE_KEY = "ar-media";

export const metadata: Metadata = {
  title: "المركز الإعلامي",
  description:
    "آخر الأخبار والبيانات الصحفية عن شركة الديار القطرية، مقدَّمة من فير دايركشن، الوكيل المعتمد لمشاريعها العقارية في مصر.",
  alternates: { canonical: "/ar/media/" },
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
