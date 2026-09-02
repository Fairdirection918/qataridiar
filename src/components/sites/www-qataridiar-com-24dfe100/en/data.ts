import { img } from "@/components/sites/www-qataridiar-com-24dfe100/shared/assets";
import type {
  BusinessLogo,
  FeaturedProject,
  Metric,
  NavLink,
  NewsItem,
  ProjectSlide,
  RegionFilter,
  SocialLink,
} from "@/types/qataridiar";

/** English parallel of ar-75f3ac56/data.ts — same shape, same images, translated text. */

export const HERO_TITLE = "Inspiring Excellence in Real Estate";
export const HERO_LINK: NavLink = { href: "/en/projects", label: "View Projects" };

export const HERO_BACKGROUNDS = [
  img("hero-1.webp"),
  img("hero-2.webp"),
  img("hero-3.webp"),
  img("hero-chancery-rosewood.webp"),
  img("hero-5.webp"),
];
export const HERO_BACKGROUND_DEFAULT = img("hero-chancery-rosewood.webp");
export const HERO_BACKGROUNDS_MOBILE = [img("hero-mobile.webp"), img("hero-1.webp")];

export const METRICS: Metric[] = [
  { key: "20", value: ["Years in Business"] },
  { key: "18", value: ["Countries"] },
  { key: "42", value: ["Investment Projects"] },
  { key: "35", value: ["Investment Value", "USD Billion"] },
];

export const INTRO_TITLE =
  "Creating and delivering transformative real estate projects that embrace the highest international standards for our stakeholders worldwide.";
export const INTRO_LINK: NavLink = {
  href: "/en/about-us",
  label: "More About Qatar Diar",
};

export const FEATURED_HEADING = "Featured Projects in Qatar and the GCC";

export const FEATURED_PROJECT: FeaturedProject = {
  href: "/ar/project/lusail",
  title: "Lusail",
  image: img("featured-lusail-685x387.webp"),
  imageAlt: "Lusail",
  details: [
    { label: "Location", value: "Lusail, Qatar" },
    { label: "Area", value: "38,000,000 sqm" },
  ],
  inquireHref: "/en/inquire",
  inquireLabel: "Inquire",
};

export const EXPLORE_HEADING = "Explore Our Projects";
export const EXPLORE_LINK: NavLink = {
  href: "/en/projects",
  label: "View All Projects",
};

export const REGION_FILTERS: RegionFilter[] = [
  { value: "1", label: "Qatar & GCC" },
  { value: "2", label: "Asia" },
  { value: "3", label: "Africa" },
  { value: "4", label: "Europe" },
  { value: "5", label: "The Americas" },
];

export const REGION_MAP = img("map-gcc.png");

export const PROJECT_SLIDES: ProjectSlide[] = [
  {
    slide: 0,
    href: "/ar/project/doha-exhibition-and-convention-center",
    title: "Doha Exhibition and Convention Center",
    location: "Doha, Qatar",
    status: "Completed",
    image: img("project-doha-convention.webp"),
    imageAlt: "Doha Exhibition and Convention Center",
    markerLeft: "46.8895%",
    markerTop: "43.9297%",
  },
  {
    slide: 1,
    href: "/ar/project/lusail",
    title: "Lusail",
    location: "Lusail, Qatar",
    status: "Under Construction",
    image: img("project-lusail.webp"),
    imageAlt: "Lusail",
    markerLeft: "47.3538%",
    markerTop: "43.9297%",
  },
  {
    slide: 2,
    href: "/ar/project/hotel-park",
    title: "Sheraton Park",
    location: "Doha, Qatar",
    status: "Completed",
    image: img("project-sheraton-park.webp"),
    imageAlt: "Sheraton Park",
    markerLeft: "45.9610%",
    markerTop: "43.9297%",
  },
  {
    slide: 3,
    href: "/ar/project/commercial-avenue",
    title: "The Grand Commercial Avenue",
    location: "Doha, Qatar",
    status: "Completed",
    image: img("project-grand-commercial.webp"),
    imageAlt: "The Grand Commercial Avenue",
    markerLeft: "45.9610%",
    markerTop: "43.9297%",
  },
  {
    slide: 4,
    href: "/ar/project/simaisma",
    title: "Simaisma",
    location: "Simaisma, Qatar",
    status: "Under Construction",
    image: img("project-simaisma.webp"),
    imageAlt: "Simaisma",
    markerLeft: "45.7753%",
    markerTop: "43.9297%",
  },
  {
    slide: 5,
    href: "/ar/project/diar-ras-al-hadd",
    title: "Diar Ras Al Hadd",
    location: "Ras Al Hadd, Sultanate of Oman",
    status: "Under Construction",
    image: img("project-ras-al-hadd.webp"),
    imageAlt: "Diar Ras Al Hadd",
    markerLeft: "54.2247%",
    markerTop: "50.3195%",
  },
];

export const VIDEO_ID = "https://player.vimeo.com/video/708142464";

export const NEWS_HEADING = "Latest News";
export const NEWS_LINK: NavLink = { href: "/en/media", label: "View All News" };

export const NEWS_ITEMS: NewsItem[] = [
  {
    href: "/en/media",
    title:
      "Egypt's Prime Minister Receives Qatar Diar's CEO to Discuss Progress on the \"Alam Al Roum\" Project",
    date: "August 09, 2026",
    image: img("news-egypt-pm.webp"),
    imageAlt: "Egypt's Prime Minister receives Qatar Diar's CEO",
  },
  {
    href: "/en/media",
    title: "Lusail City Enters the Guinness Book of World Records with Two Global Firsts in District Cooling",
    date: "June 29, 2026",
    image: img("news-lusail-guinness.webp"),
    imageAlt: "District cooling system in Lusail City",
  },
];

export const BUSINESS_HEADING = "Other Businesses";

export const BUSINESS_LOGOS: BusinessLogo[] = [
  { href: "https://www.gord.qa/", alt: "GORD", image: img("business-gord.jpg") },
  { href: "https://qd-om.com", alt: "QDOM", image: img("business-qdom.png") },
  {
    href: "https://www.marafeq.com.qa/",
    alt: "Marafeq Qatar",
    image: img("business-marafeq.png"),
  },
  { href: "https://www.smeet.com.qa/", alt: "SMEET", image: img("business-smeet.png") },
  { href: "https://qdvc.com", alt: "QDVC", image: img("business-qdvc.png") },
  { href: "https://www.qpm.com.qa", alt: "QPM", image: img("business-qpm.jpg") },
];

export const MAIN_MENU: NavLink[] = [
  { href: "/en/about-us", label: "Qatar Diar" },
  { href: "/en/projects", label: "Projects" },
  { href: "/en/other-businesses", label: "Other Businesses" },
  { href: "/en/about-qatar", label: "About Qatar" },
];

export const SECONDARY_MENU: NavLink[] = [
  { href: "/en/media", label: "Media Center" },
  { href: "/en/careers", label: "Careers" },
  { href: "/en/contact-us", label: "Contact Us" },
  { href: "/en/e-procurement", label: "E-Procurement" },
  { href: "/en/request-access-information", label: "Request Access to Information" },
];

/** Footer lists main + secondary as one flat 9-item menu. */
export const FOOTER_MENU: NavLink[] = [...MAIN_MENU, ...SECONDARY_MENU];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://wa.me/66008088",
    label: "Whatsapp",
    icon: img("social-wa.svg"),
    iconWhite: img("social-wa-w.svg"),
    width: 26,
    height: 26,
  },
  {
    href: "https://www.facebook.com/Qatari-Diar-Real-Estate-Investment-Co-131332143599972/",
    label: "Facebook",
    icon: img("social-fb.svg"),
    iconWhite: img("social-fb-w.svg"),
    width: 8,
    height: 17,
  },
  {
    href: "https://ae.linkedin.com/company/qatari-diar",
    label: "LinkedIn",
    icon: img("social-li.svg"),
    iconWhite: img("social-li-w.svg"),
    width: 17,
    height: 17,
  },
  {
    href: "https://twitter.com/qataridiar",
    label: "Twitter",
    icon: img("social-x.svg"),
    iconWhite: img("social-x-w.svg"),
    width: 20,
    height: 20,
  },
  {
    href: "https://www.instagram.com/qatari_diar/",
    label: "Instagram",
    icon: img("social-ig.svg"),
    iconWhite: img("social-ig-w.svg"),
    width: 20,
    height: 20,
  },
];

export const FOOTER_COPYRIGHT = "© 2026 Qatar Diar";
export const FOOTER_PRIVACY: NavLink = {
  href: "/en/privacy-policy",
  label: "General Privacy Policy",
};
