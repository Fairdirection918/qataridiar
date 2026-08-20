import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";

const PAGE_KEY = "ar-about-qatar-history-geography";

export const metadata: Metadata = {
  title: "تاريخ وجغرافيا قطر",
  description:
    "فير دايركشن، الوكيل المعتمد لمشاريع الديار القطرية في مصر، يستعرض تاريخ وجغرافيا دولة قطر.",
  alternates: { canonical: "/ar/about-qatar/history-geography/" },
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
