import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/sites/www-qataridiar-com-24dfe100/shared/PageShell";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description:
    "Terms of use and disclaimer for the qataridiar.dev website, operated by Fair Direction, the independent sales agent for Qatar Diar properties.",
  alternates: { canonical: "/en/terms/" },
};

export default function TermsPage() {
  return (
    <PageShell darkHeader locale="en">
      <section className="bg-qd-cream pt-[140px] pb-[70px] max-[767px]:pt-[110px]">
        <Container>
          {/* gac:start:terms-disclaimer-en */}
          <article className="max-w-[800px] text-[15px] leading-[28px] text-qd-text">
            <h1 className="mb-2 text-[28px] font-bold text-qd-navy">
              Terms & Disclaimer
            </h1>
            <p className="mb-8 text-[13px] text-qd-text/60">
              Last updated: August 17, 2026
            </p>

            <p>
              The <strong>qataridiar.dev</strong> website (&quot;the Site&quot;) is
              operated by <strong>Fair Direction</strong>, an independent and
              authorized sales agent for{" "}
              <strong>Qatar Diar Real Estate Investment</strong> properties. By
              using the Site, you agree to the following terms.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              1. Nature of the Site and Its Relationship with the Developer
            </h2>
            <p>
              Fair Direction is an independent entity and is not affiliated with
              Qatar Diar or any of its entities, and the Site is not the official
              website of Qatar Diar. All trade names, trademarks, logos, and
              project names displayed are owned by Qatar Diar and are used here
              for informational and marketing purposes as a sales
              representative.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              2. Disclaimer on Information
            </h2>
            <p>
              The information, images, and prices on the Site (such as areas,
              designs, specifications, and delivery dates) are provided for
              guidance only and may change at any time without prior notice.
              Please verify the final official information with Qatar Diar before
              making any decision. We do not guarantee the completeness or
              accuracy of any information provided by third parties.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              3. No Payment Collection
            </h2>
            <p>
              The Site does not collect or process any payments on behalf of
              Qatar Diar. Any purchase or reservation is made according to Qatar
              Diar&apos;s official terms and through its authorized channels.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              4. Acceptable Use
            </h2>
            <p>
              It is prohibited to use the Site for any unlawful purpose, to
              transmit harmful content, to attempt unauthorized access to the
              Site&apos;s systems, or to use third-party commercial content
              without permission.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              5. Intellectual Property
            </h2>
            <p>
              The content, designs, images, and texts on the Site remain the
              property of their respective owners, and using the Site does not
              grant you any ownership rights or license over them.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              6. Limitation of Liability
            </h2>
            <p>
              To the extent permitted by law, Fair Direction shall not be liable
              for any direct or indirect damages arising from the use of the Site
              or reliance on its content. The information on the Site does not
              constitute official legal, financial, or real estate advice.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              7. External Links
            </h2>
            <p>
              The Site may contain links to external websites (including the
              official website of Qatar Diar). We do not control these websites
              and are not responsible for their content or policies.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              8. Contact Us
            </h2>
            <p className="mt-3">
              Fair Direction
              <br />
              124 Othman Ibn Affan St, Floor 7, Apartment 73, New Cairo, Cairo,
              Egypt
              <br />
              Phone: +20 1515124909
              <br />
              Email: operation@fairdirection.com
            </p>

            <p className="mt-8 border-t border-qd-rule pt-6 text-[13px] leading-[24px] text-qd-text/70">
              This website is not the official website of Qatar Diar Real Estate
              Investment. For the developer&apos;s official information, please
              visit{" "}
              <a
                href="https://www.qataridiar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                www.qataridiar.com
              </a>
              .
            </p>
          </article>
          {/* gac:end:terms-disclaimer-en */}
        </Container>
      </section>
    </PageShell>
  );
}
