import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { TrustBar } from "./TrustBar";

export function PageShell({
  children,
  darkHeader = false,
  locale = "ar",
}: {
  children: React.ReactNode;
  darkHeader?: boolean;
  locale?: "en" | "ar";
}) {
  return (
    // gac footer marker: {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
    <div className={`qd-root ${darkHeader ? "qd-interior" : ""}`}>
      <TrustBar locale={locale} />
      <SiteHeader locale={locale} />
      <main className="relative z-0 w-full min-h-screen">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
