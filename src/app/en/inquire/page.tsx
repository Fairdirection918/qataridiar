import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "en-inquire";

export const metadata: Metadata = {
  title: "Inquire | QatariDiar",
  description: "We'd be happy to help with any inquiry. Just fill in the form below and we'll be in touch soon.",
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
