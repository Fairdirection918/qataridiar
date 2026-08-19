export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    // gac footer marker: {/* gac:start:footer-ar */}{/* gac:end:footer-ar */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
