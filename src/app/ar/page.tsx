import type { Metadata } from "next";
import { ExploreProjects } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/ExploreProjects";
import { FeaturedProject } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/FeaturedProject";
import { Hero } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/Hero";
import { NewsSection } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/NewsSection";
import { OtherBusinesses } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/OtherBusinesses";
import { StatsIntro } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/StatsIntro";
import { VideoSection } from "@/components/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/VideoSection";
import { PageShell } from "@/components/sites/www-qataridiar-com-24dfe100/shared/PageShell";
import { LandingDisclosure } from "@/components/sites/www-qataridiar-com-24dfe100/shared/LandingDisclosure";

const PATTERN =
  "/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/images/pattern-upper-content.svg";

export const metadata: Metadata = {
  title: "نظرة عامة على مشاريعنا وأخبارنا",
  description:
    "فير دايركشن، الوكيل المعتمد لمشاريع الديار القطرية في مصر. تصفح علم الروم بالساحل الشمالي، وسيتي جيت القاهرة الجديدة، ونيو جيزا، وسانت ريجيس القاهرة.",
  alternates: { canonical: "/ar/" },
};

export default function ArHome() {
  return (
    // gac footer marker: {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
    <PageShell>
      <Hero />
      <div
        className="bg-qd-cream bg-no-repeat"
        style={{ backgroundImage: `url(${PATTERN})`, backgroundPosition: "0 0" }}
      >
        <StatsIntro />
        <FeaturedProject />
        <ExploreProjects />
        <VideoSection />
      </div>
      <NewsSection />
      <OtherBusinesses />
      {/* gac:start:disclosure-ar */}
      <LandingDisclosure />
      {/* gac:end:disclosure-ar */}
    </PageShell>
  );
}
