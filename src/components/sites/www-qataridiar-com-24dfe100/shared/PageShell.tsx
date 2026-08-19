import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({
  children,
  darkHeader = false,
}: {
  children: React.ReactNode;
  darkHeader?: boolean;
}) {
  return (
    // gac footer marker: {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
    <div className={`qd-root ${darkHeader ? "qd-interior" : ""}`}>
      <SiteHeader />
      <main className="relative z-0 w-full min-h-screen">{children}</main>
      <SiteFooter />
    </div>
  );
}
