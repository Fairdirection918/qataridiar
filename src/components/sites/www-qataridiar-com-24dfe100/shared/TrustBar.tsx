import Link from "next/link";

// gac disclosure marker: {/* gac:start:identity-bar */}{/* gac:end:identity-bar */}
export function TrustBar() {
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
          href="/ar/privacy-policy"
          className="underline decoration-white/50 underline-offset-2 hover:decoration-white"
        >
          Privacy
        </Link>{" "}
        ·{" "}
        <Link
          href="/ar/terms"
          className="underline decoration-white/50 underline-offset-2 hover:decoration-white"
        >
          Terms
        </Link>
      </p>
    </div>
  );
}
