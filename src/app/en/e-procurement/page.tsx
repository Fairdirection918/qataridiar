import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";

const PAGE_KEY = "en-e-procurement";

export const metadata: Metadata = {
  title: "E-Procurement",
  description:
    "Qatar Diar Real Estate Investment Company's e-procurement policy, the developer behind Fair Direction's authorized projects in Egypt.",
  alternates: { canonical: "/en/e-procurement/" },
};

export default function Page() {
  const page = PAGES_EN[PAGE_KEY];
  if (!page) notFound();
  return (
    <>
      {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
      <InteriorPageView page={page} />
    </>
  );
}
