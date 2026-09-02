import type { Metadata } from "next";
import { ExploreProjects } from "@/components/sites/www-qataridiar-com-24dfe100/en/ExploreProjects";
import { FeaturedProject } from "@/components/sites/www-qataridiar-com-24dfe100/en/FeaturedProject";
import { Hero } from "@/components/sites/www-qataridiar-com-24dfe100/en/Hero";
import { NewsSection } from "@/components/sites/www-qataridiar-com-24dfe100/en/NewsSection";
import { OtherBusinesses } from "@/components/sites/www-qataridiar-com-24dfe100/en/OtherBusinesses";
import { StatsIntro } from "@/components/sites/www-qataridiar-com-24dfe100/en/StatsIntro";
import { VideoSection } from "@/components/sites/www-qataridiar-com-24dfe100/en/VideoSection";
import { PageShell } from "@/components/sites/www-qataridiar-com-24dfe100/shared/PageShell";
import { LandingDisclosure } from "@/components/sites/www-qataridiar-com-24dfe100/shared/LandingDisclosure";

const PATTERN =
  "/sites/www-qataridiar-com-24dfe100/ar-75f3ac56/images/pattern-upper-content.svg";

export const metadata: Metadata = {
  title: "An Overview of Our Projects and News",
  description:
    "Fair Direction, the authorized sales agent for Qatar Diar's projects in Egypt. Explore Alam Al Roum on the North Coast, City Gate New Cairo, NEWGIZA, and The St. Regis Cairo.",
  alternates: { canonical: "/en/" },
};

export default function EnHome() {
  return (
    <PageShell locale="en">
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
