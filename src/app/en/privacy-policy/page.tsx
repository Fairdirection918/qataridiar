import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/sites/www-qataridiar-com-24dfe100/shared/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the qataridiar.dev website, operated by Fair Direction, the independent sales agent for Qatar Diar properties.",
  alternates: { canonical: "/en/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell darkHeader locale="en">
      <section className="bg-qd-cream pt-[140px] pb-[70px] max-[767px]:pt-[110px]">
        <Container>
          {/* gac:start:privacy-policy-en */}
          <article className="max-w-[800px] text-[15px] leading-[28px] text-qd-text">
            <h1 className="mb-2 text-[28px] font-bold text-qd-navy">
              Privacy Policy
            </h1>
            <p className="mb-8 text-[13px] text-qd-text/60">
              Last updated: August 17, 2026
            </p>

            <p>
              This Privacy Policy explains how{" "}
              <strong>Fair Direction</strong> (&quot;we&quot;) collects, uses, and
              protects information when you visit the <strong>qataridiar.dev</strong>{" "}
              website (&quot;the Site&quot;).
              Fair Direction is an independent and authorized sales agent for{" "}
              <strong>Qatar Diar Real Estate Investment</strong> properties and is
              not Qatar Diar itself or one of its entities.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              1. Information We Collect
            </h2>
            <p>
              We collect the information you voluntarily provide when filling out
              contact or inquiry forms on the Site, including: name, phone number,
              email address, and the content of your message. We also collect
              general usage data through cookies (such as the pages you visit) to
              improve the Site experience.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to respond to your inquiries, provide you
              with information about Qatar Diar properties, follow up on your
              requests, and improve the Site&apos;s content and services.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              3. Sharing with the Developer
            </h2>
            <p>
              As an independent sales agent, we may share the contact information
              you provide with <strong>Qatar Diar Real Estate Investment</strong>{" "}
              for the purpose of processing your inquiry or request related to its
              properties. We do not sell your personal information to any other
              party, and we do not use it for purposes unrelated to the
              Site&apos;s services.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              4. Cookies
            </h2>
            <p>
              The Site uses cookies to improve the browsing experience and measure
              Site performance. You can disable cookies through your browser
              settings at any time, which may affect some Site functions.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              5. Data Retention and Security
            </h2>
            <p>
              We retain your data as long as it is necessary for the purposes
              described above or as required by law, and we take reasonable
              measures to protect your information from unauthorized access.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              6. Your Choices
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion
              of your personal data, or to withdraw your consent to its processing
              at any time, by contacting us through the details below.
            </p>

            <h2 className="mt-8 mb-3 text-[20px] font-bold text-qd-navy">
              7. Contact Us
            </h2>
            <p>
              For any questions about this policy or your personal data, you can
              contact us at:
            </p>
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
              Investment and is operated by an independent sales agent. For the
              developer&apos;s official information, please visit{" "}
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
          {/* gac:end:privacy-policy-en */}
        </Container>
      </section>
    </PageShell>
  );
}
