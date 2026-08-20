import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";

const PAGE_KEY = "ar-e-procurement";

export const metadata: Metadata = {
  title: "المشتريات الإلكترونية",
  description:
    "سياسة المشتريات الإلكترونية لدى شركة الديار القطرية للاستثمار العقاري، المطوّر العقاري لمشاريع فير دايركشن المعتمدة في مصر.",
  alternates: { canonical: "/ar/e-procurement/" },
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
