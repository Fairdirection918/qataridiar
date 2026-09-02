import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPageView } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorPageView";
import { PAGES_EN } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content.en";

const PAGE_KEY = "en-careers";

export const metadata: Metadata = {
  title: "Careers at Qatar Diar",
  description:
    "Career opportunities at Qatar Diar Real Estate Investment Company, the developer behind Fair Direction's authorized projects in Egypt.",
  alternates: { canonical: "/en/careers/" },
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
