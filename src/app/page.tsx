import type { Metadata } from "next";
import { EgyptHero } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/EgyptHero";
import { EgyptIntro } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/EgyptIntro";
import { EgyptProjects } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/EgyptProjects";
import { FaqSection } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/FaqSection";
import { FinalCta } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/FinalCta";
import { StatsStrip } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/StatsStrip";
import { StickyCta } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/StickyCta";
import { ValueProps } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/ValueProps";
import { FAQS } from "@/components/sites/www-qataridiar-com-24dfe100/ar-egypt/data";
import { PageShell } from "@/components/sites/www-qataridiar-com-24dfe100/shared/PageShell";
import { LandingDisclosure } from "@/components/sites/www-qataridiar-com-24dfe100/shared/LandingDisclosure";
import { JsonLd } from "@/components/seo/JsonLd";
import { OG_LOCALE, SITE_NAME } from "@/lib/site";
import { faqSchema, websiteSchema } from "@/lib/schema";

const TITLE = "مشاريع عقارية في القاهرة والساحل الشمالي";
const DESCRIPTION =
  "فير دايركشن، الوكيل المعتمد لمشاريع الديار القطرية في مصر بمحفظة تتجاوز 40 مليون متر مربع بالقاهرة والساحل الشمالي والجيزة. سجّل اهتمامك وسيتواصل معك فريق المبيعات.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: OG_LOCALE,
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og/home.jpg"],
  },
};

export default function Home() {
  return (
    // gac footer marker: {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
    <PageShell>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(FAQS)} />
      <EgyptHero />
      <StatsStrip />
      <EgyptIntro />
      <EgyptProjects />
      <ValueProps />
      <FaqSection />
      <FinalCta />
      {/* gac:start:disclosure-ar */}
      <LandingDisclosure />
      {/* gac:end:disclosure-ar */}
      {/* position:fixed — DOM depth doesn't affect its viewport-relative placement */}
      <StickyCta />
    </PageShell>
  );
}
