import { SITE_NAME, SITE_URL } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Fair Direction",
    alternateName: "الاتجاه العادل",
    url: SITE_URL,
    email: "operation@fairdirection.com",
    telephone: "+20 1515124909",
    areaServed: "EG",
    address: {
      "@type": "PostalAddress",
      streetAddress: "124 Othman Ibn Affan St, Floor 7, Apartment 73",
      addressLocality: "New Cairo",
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    knowsAbout: [
      "Qatar Diar Real Estate",
      "Simaisma Qatar Diar",
      "St. Regis Marsa Arabia",
      "Luxury Real Estate Egypt",
    ],
    description:
      "Fair Direction is an independent, authorized real estate sales agent for Qatar Diar properties in Egypt. Not affiliated with or the official website of Qatar Diar Real Estate Investment Company.",
  };
}

export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#realestate-agent`,
    name: "Fair Direction – Authorized Sales Agent for Qatar Diar",
    alternateName: "الاتجاه العادل",
    url: SITE_URL,
    email: "operation@fairdirection.com",
    telephone: "+20 1515124909",
    areaServed: "EG",
    address: {
      "@type": "PostalAddress",
      streetAddress: "124 Othman Ibn Affan St, Floor 7, Apartment 73",
      addressLocality: "New Cairo",
      addressRegion: "Cairo",
      addressCountry: "EG",
    },
    knowsAbout: [
      "Qatar Diar Real Estate",
      "Simaisma Qatar Diar",
      "St. Regis Marsa Arabia",
      "Luxury Real Estate Egypt",
    ],
    description:
      "Fair Direction is an independent, authorized real estate sales agent for Qatar Diar Real Estate Investment Company. We market and sell Qatar Diar properties in Egypt. Not affiliated with or the official website of Qatar Diar.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "ar",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function residenceSchema(project: {
  title: string;
  summary: string;
  banner: string;
  location: string;
  area: string;
  route: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: project.title,
    description: project.summary,
    image: `${SITE_URL}${project.banner}`,
    url: `${SITE_URL}${project.route}/`,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressCountry: "EG",
    },
    ...(project.area
      ? {
          additionalProperty: {
            "@type": "PropertyValue",
            name: "المساحة",
            value: project.area,
          },
        }
      : {}),
  };
}
