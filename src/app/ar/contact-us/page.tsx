import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sites/www-qataridiar-com-24dfe100/shared/ContactForm";
import { InteriorBanner } from "@/components/sites/www-qataridiar-com-24dfe100/shared/InteriorBanner";
import { LandingDisclosure } from "@/components/sites/www-qataridiar-com-24dfe100/shared/LandingDisclosure";
import { PageShell } from "@/components/sites/www-qataridiar-com-24dfe100/shared/PageShell";
import { PAGES } from "@/components/sites/www-qataridiar-com-24dfe100/shared/content";
import { NOINDEX } from "@/lib/seo";

const PAGE_KEY = "ar-contact-us";

export const metadata: Metadata = {
  title: "Contact Us | QatariDiar",
  description:
    "We welcome your inquiries. Please fill out the form or contact us by phone or email.",
  robots: NOINDEX,
};

export default function Page() {
  const page = PAGES[PAGE_KEY];
  if (!page) notFound();

  return (

    // gac footer marker: {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
    <PageShell darkHeader>
      <InteriorBanner title={page.title} subtitle={page.subtitle} image={page.banner} />

      <section className="bg-qd-cream py-[70px] max-[767px]:py-[40px]">
        <Container>
          <div className="grid gap-[50px] lg:grid-cols-2">
            <ContactForm title="أرسل رسالة" />
            {/* gac:start:contact-details-ar */}
            <div className="border-t border-qd-rule pt-[24px] text-[15px] leading-[28px] text-qd-text">
              <p className="mb-[4px] text-[18px] font-bold text-qd-navy">
                Fair Direction
              </p>
              <p className="mb-[4px]">
                124 Othman Ibn Affan St, Floor 7, Apartment 73, New Cairo, Cairo,
                Egypt
              </p>
              <p className="mb-[4px]">
                Phone:{" "}
                <a href="tel:+201515124909" className="underline">
                  +20 1515124909
                </a>
              </p>
              <p className="mb-[12px]">
                Email:{" "}
                <a href="mailto:operation@fairdirection.com" className="underline">
                  operation@fairdirection.com
                </a>
              </p>
              <p className="text-[13px] leading-[24px] text-qd-text/70">
                Fair Direction is an independent and authorized sales agent for
                Qatar Diar — this is not the official website of Qatar Diar or
                one of its entities.
              </p>
            </div>
            {/* gac:end:contact-details-ar */}
          </div>
        </Container>
      </section>

      {/* gac:start:disclosure-ar */}
      <LandingDisclosure />
      {/* gac:end:disclosure-ar */}
    </PageShell>
  );
}