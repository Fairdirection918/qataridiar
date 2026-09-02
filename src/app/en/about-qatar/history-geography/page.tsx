import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";

const PAGE_KEY = "en-about-qatar-history-geography";

export const metadata: Metadata = {
  title: "History & Geography of Qatar",
  description:
    "Fair Direction, the authorized sales agent for Qatar Diar's projects in Egypt, presents the history and geography of the State of Qatar.",
  alternates: { canonical: "/en/about-qatar/history-geography/" },
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
