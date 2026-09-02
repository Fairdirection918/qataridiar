/**
 * The root layout (src/app/layout.tsx) owns the single <html> tag for the
 * whole app (Next.js only allows the outermost layout to render it), and
 * defaults to lang="ar" dir="rtl" since root "/" and "/ar/*" are Arabic.
 * This nested layout can't override <html>, so it wraps every /en/* page
 * in an element carrying lang="en" dir="ltr" instead — a standard, valid
 * HTML pattern: `dir` is inheritable, so Tailwind's RTL-aware utilities and
 * all descendant styling correctly cascade to LTR within this subtree.
 */
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" dir="ltr">
      {children}
    </div>
  );
}
