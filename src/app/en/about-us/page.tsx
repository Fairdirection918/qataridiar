import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";

const PAGE_KEY = "en-about-us";

export const metadata: Metadata = {
  title: "About Qatar Diar",
  description:
    "Fair Direction, the authorized sales agent for Qatar Diar Real Estate Investment Company's projects in Egypt. Founded in 2005 as one of the companies of the Qatar Investment Authority.",
  alternates: { canonical: "/en/about-us/" },
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
