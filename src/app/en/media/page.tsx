import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";

const PAGE_KEY = "en-media";

export const metadata: Metadata = {
  title: "Media Center",
  description:
    "Latest news and press releases about Qatar Diar, presented by Fair Direction, the authorized sales agent for its real estate projects in Egypt.",
  alternates: { canonical: "/en/media/" },
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
