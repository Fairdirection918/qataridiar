import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";

const PAGE_KEY = "en-projects";

export const metadata: Metadata = {
  title: "Qatar Diar Projects",
  description:
    "Browse Qatar Diar's projects around the world, and discover its projects in Egypt across the North Coast, New Cairo, and Giza, with Fair Direction, the authorized sales agent.",
  alternates: { canonical: "/en/projects/" },
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
