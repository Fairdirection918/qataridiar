import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "en-projects-map";

export const metadata: Metadata = {
  title: "Projects Map | QatariDiar",
  description:
    "Our projects are landmark, significant developments, often unmatched in scale, scope, and vision. Our developments aim to comprehensively nurture the growth of local communities and provide economic opportunities.",
  robots: NOINDEX,
};

export default function Page() {
  const page = PAGES_EN[PAGE_KEY];
  if (!page) notFound();
  return (
    <>
      {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
      {/* gac:start:disclosure-ar */}{/* gac:end:disclosure-ar */}
      <InteriorPageView page={page} />
    </>
  );
}
