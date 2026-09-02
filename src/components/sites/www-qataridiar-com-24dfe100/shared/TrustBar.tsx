import Link from "next/link";

// gac disclosure marker: {/* gac:start:identity-bar */}{/* gac:end:identity-bar */}
export function TrustBar({ locale = "ar" }: { locale?: "en" | "ar" }) {
  const privacyHref = locale === "en" ? "/en/privacy-policy" : "/ar/privacy-policy";
  const termsHref = locale === "en" ? "/en/terms" : "/ar/terms";
  return (
    <div className="fixed inset-x-0 top-0 z-[900] bg-[#0F172A] px-3 py-2 text-center text-[11px] leading-tight text-white sm:text-xs">
      <p>
        <strong>Fair Direction</strong> — independent marketing partner, not
        Qatar Diar&apos;s official site.{" "}
        <a
          href="https://www.qataridiar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-white/50 underline-offset-2 hover:decoration-white"
        >
          Official site
        </a>{" "}
        ·{" "}
        <Link
          href={privacyHref}
          className="underline decoration-white/50 underline-offset-2 hover:decoration-white"
        >
          Privacy
        </Link>{" "}
        ·{" "}
        <Link
          href={termsHref}
          className="underline decoration-white/50 underline-offset-2 hover:decoration-white"
        >
          Terms
        </Link>
      </p>
    </div>
  );
}
