import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "en-request-access-information";

export const metadata: Metadata = {
  title: "Request Access to Information | QatariDiar",
  description:
    "Request access to information from Qatar Diar Real Estate Investment Company, a private Qatari shareholding company",
  robots: NOINDEX,
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
