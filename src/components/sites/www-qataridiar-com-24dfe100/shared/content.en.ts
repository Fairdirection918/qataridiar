import type { InteriorPage, MediaCard, ProjectDetail } from "@/types/qataridiar";

/**
 * English parallel of content.ts, Phase 1 scope: the 4 indexable Egypt
 * projects (see src/lib/seo.ts INDEXABLE_PROJECT_SLUGS) get full detail
 * translations; the remaining 24 global projects are not yet translated
 * (deferred — see the Qatari Diar plan). Every PAGES key here mirrors its
 * "ar-*" counterpart in content.ts with an "en-*" key and identical shape.
 */

export const PROJECTS_EN: Record<string, ProjectDetail> = {
  "alam-al-roum": {
    slug: "alam-al-roum",
    route: "/en/project/alam-al-roum",
    title: "Alam Al Roum",
    documentTitle: "Alam Al Roum | QatariDiar",
    banner:
      "/sites/www-qataridiar-com-24dfe100/shared/images/260701_AAR-V-01-jpg-190ce883cc.webp",
    region: "Africa",
    location: "North Coast, Egypt",
    area: "20,580,000 sqm",
    status: "Under Construction",
    summary:
      "Alam Al Roum is Qatar Diar's newest project on Egypt's North Coast, a fully integrated coastal city spanning 20.58 million sqm west of Marsa Matrouh, just 15 minutes from its international airport.",
    paragraphs: [
      "Stretching along 7.2 km of golden beach west of Marsa Matrouh, Alam Al Roum redefines coastal living in Egypt. It's Qatar Diar's newest investment in the Egyptian market, valued at over $29.7 billion across 20.58 million sqm.",
      "Alam Al Roum sits just 15 minutes from Marsa Matrouh International Airport, within a five-hour flight of most European and Gulf capitals — making it an easily reachable destination year-round, not only during the summer season.",
      "The master plan is organized into interconnected coastal districts with an international marina, artificial lagoons, international hotels, and commercial and cultural spaces, all built around a walkable-city concept where most amenities are minutes away on foot.",
      "Alam Al Roum combines the untouched natural beauty of the bay it sits on with world-class urban design, offering a complete lifestyle suited equally to permanent residence and tourism investment.",
      "With this project, Qatar Diar continues building on its presence in the Egyptian real estate market, where it has invested since 2006 — delivering in Alam Al Roum a new model for integrated coastal cities on the Mediterranean.",
    ],
    sections: [
      {
        heading: "Location & Access: What It Means for an Egyptian Buyer",
        paragraphs: [
          "For an Egyptian buyer comparing North Coast destinations, Alam Al Roum's location west of Marsa Matrouh is a clear departure from the congestion seen along the stretches closer to Alexandria at peak summer season. Being just 15 minutes from Marsa Matrouh International Airport opens up an option uncommon in this area: direct air access without the long drive down the coastal road, making short visits — or even stays outside the summer season — realistic rather than exceptional.",
          "Alam Al Roum's location within a five-hour flight of most European and Gulf capitals also gives it an extra dimension as a destination marketable to buyers outside Egypt, not only the traditional local vacation market. Exact driving distance and time from Cairo and Alexandria to the project gate [FACT: driving time and distance from Cairo and Alexandria to Alam Al Roum], and the village's actual position along the coastal road, are details the sales team provides on direct contact.",
        ],
      },
      {
        heading: "Unit Types at Alam Al Roum",
        paragraphs: [
          "Qatar Diar's North Coast portfolio, led by Alam Al Roum, includes villas and chalets overlooking the golden beach — in line with the walkable coastal city concept behind the master plan, with its interconnected districts, international marina, and surrounding artificial lagoons.",
          "The precise details of each unit type — available areas, room counts, finishing, and location within the coastal districts — are updated periodically as new phases are released [FACT: unit types and areas currently available at Alam Al Roum]. The Fair Direction team stays continuously up to date with Qatar Diar's sales team on the latest availability, to guide each client toward the option closest to their needs.",
        ],
      },
      {
        heading: "Amenities & Master Plan",
        paragraphs: [
          "Alam Al Roum's master plan is built around the idea of a fully integrated coastal city, with interconnected districts arranged around an international marina and artificial lagoons, alongside international hotels and commercial and cultural spaces designed so most amenities are minutes away on foot rather than relying entirely on a car, as is the case in many traditional North Coast villages.",
          "This planning approach gives the 7.2 km of golden beach a different character from the crowded shorelines in some other areas, since access is spread across several districts rather than a single entry point. Further details on the number and types of planned recreational and sports facilities [FACT: detailed list of Alam Al Roum's recreational and sports facilities] will be announced as construction phases progress.",
        ],
      },
      {
        heading: "Who Is Alam Al Roum For?",
        paragraphs: [
          "Alam Al Roum directly suits three types of buyers. The first is the investor looking for a brand-new coastal city within a North Coast market that has proven, over recent years, its ability to attract high seasonal demand every summer. The second is families looking for a permanent summer home close to an international airport, cutting down on the fatigue of a long seasonal drive. The third — less common in this area — is anyone considering semi-permanent or extended seasonal residence, made practical by year-round air access rather than just the summer months.",
          "Whether the project best fits a particular budget or investment horizon is something the Fair Direction team discusses individually with each client, based on their goals — whether that's seasonal rental yield, personal use, or medium-term capital appreciation.",
        ],
      },
      {
        heading: "The Purchase Process: How Fair Direction Helps",
        paragraphs: [
          "As the authorized sales agent for Qatar Diar's projects in Egypt, Fair Direction accompanies the client from the first inquiry through to signing the contract. The journey typically starts with an introductory session to understand the client's needs and budget, followed by a detailed walkthrough of what's currently available at Alam Al Roum, then a site visit — in person or virtual — where possible.",
          "Once a unit is chosen, the team helps review the reservation terms and Qatar Diar's proposed payment plan [FACT: payment plan details, down payment and installment percentages currently available for Alam Al Roum], explaining every clause clearly before signing, and follows up with the sales team through to completing registration and ownership transfer.",
        ],
      },
    ],
    faqs: [
      {
        question: "How large is Alam Al Roum?",
        answer:
          "Alam Al Roum spans 20.58 million sqm west of Marsa Matrouh, along 7.2 km of golden beach.",
      },
      {
        question: "How far is Alam Al Roum from the nearest airport?",
        answer:
          "The project is just a 15-minute drive from Marsa Matrouh International Airport.",
      },
      {
        question: "Is Alam Al Roum easy to reach from Europe or the Gulf?",
        answer:
          "Yes — the project sits within a five-hour flight of most European and Gulf capitals.",
      },
      {
        question: "What unit types are available at Alam Al Roum?",
        answer:
          "Qatar Diar's North Coast portfolio includes beachfront villas and chalets. For exact current areas and prices: [FACT: unit types, areas, and prices currently available at Alam Al Roum].",
      },
      {
        question: "Is Alam Al Roum suited to investment or seasonal living?",
        answer:
          "The project suits both seasonal investment and a family summer home, thanks to its proximity to an international airport that allows year-round access.",
      },
      {
        question: "How does Fair Direction help with buying a unit at Alam Al Roum?",
        answer:
          "As Qatar Diar's authorized sales agent in Egypt, Fair Direction presents available units, explains payment plans clearly, and follows the reservation and ownership process through with the sales team until the deal is complete.",
      },
    ],
    gallery: [
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/260701_AAR-V-01-jpg-190ce883cc.webp",
        alt: "Alam Al Roum",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/arr-6a25c72bf9.svg",
        alt: "Alam Al Roum",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/DJI_20260604111100-jpg-1a74e5731b.webp",
        alt: "Alam Al Roum",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/c07_wy-jpg-55eb0737b5.webp",
        alt: "Alam Al Roum",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/V13-jpg-079cc82751.webp",
        alt: "Alam Al Roum",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/V05-jpg-a769c6ef95.webp",
        alt: "Alam Al Roum",
      },
    ],
    website: "",
  },
  "st-regis-cairo-and-residences": {
    slug: "st-regis-cairo-and-residences",
    route: "/en/project/st-regis-cairo-and-residences",
    title: "The St. Regis Cairo Hotel and Residences",
    documentTitle: "The St. Regis Cairo Hotel and Residences | QatariDiar",
    banner:
      "/sites/www-qataridiar-com-24dfe100/shared/images/stregis_main_image-jpg-2414c5b61f.webp",
    region: "Africa",
    location: "Cairo, Egypt",
    area: "9,360 sqm",
    status: "Completed",
    summary:
      "The St. Regis Cairo Hotel and Residences is one of Qatar Diar's flagship completed projects in Egypt, set on the banks of the Nile in the heart of Cairo near the World Trade Center, combining a luxury hotel and residences designed by architect Michael Graves.",
    paragraphs: [
      "The St. Regis Cairo sits on the banks of the Nile in the heart of the Egyptian capital, near the World Trade Center, forming an architectural landmark designed by Michael Graves that overlooks the Nile and Old Cairo.",
      "The complex comprises two 36-storey towers and a dedicated retail plaza, with 366 hotel rooms, suites and serviced apartments alongside 150 luxury residential units — one of Qatar Diar's fully completed and operating projects in Egypt.",
      "The hotel offers guests the St. Regis brand's signature butler service, along with indoor and outdoor pools, a full-service spa, seven distinct restaurants, and dedicated conference and events facilities.",
      "The St. Regis Cairo is a showcase of Qatar Diar's long-term investment in Egypt, which began in 2006 and today spans projects in New Cairo, Giza, and the North Coast.",
    ],
    sections: [
      {
        heading: "Location & Access: What It Means for a Buyer",
        paragraphs: [
          "The St. Regis Cairo sits directly on the Nile near the World Trade Center — a location at the heart of modern downtown Cairo, close to the government, business, and diplomatic districts that anchor the capital. For anyone seeking a central address that combines a Nile view with proximity to business areas, this location cuts down on the long daily commute through Cairo traffic.",
          "Exact travel time from Cairo International Airport and from neighborhoods like Zamalek, Maadi, and downtown [FACT: driving time from The St. Regis Cairo to Cairo International Airport and surrounding neighborhoods] depends on traffic conditions at any given time, and can be confirmed directly with the sales team.",
        ],
      },
      {
        heading: "Unit Types in the Complex",
        paragraphs: [
          "The St. Regis Cairo complex consists of two 36-storey towers housing 366 hotel rooms, suites, and serviced apartments, alongside 150 luxury residential units entirely separate from the hotel section. This split between hotel-branded units and fully residential ones gives buyers two distinct options depending on their purpose — short-stay hospitality or permanent residential ownership.",
          "Exact details on the 150 residential units' areas, room counts, floors, and current availability for sale or resale [FACT: areas and prices of St. Regis Cairo residential units currently available], given the project is already completed and operating, require direct confirmation from the sales team.",
        ],
      },
      {
        heading: "Amenities & Services",
        paragraphs: [
          "As a project designed by architect Michael Graves and fully operated under the global St. Regis brand, the complex offers guests and residents the brand's signature butler service, alongside indoor and outdoor pools, a full-service spa, seven distinct restaurants, and dedicated conference and events facilities. This level of continuous hotel-grade service is what sets living here apart from a typical downtown Cairo apartment.",
          "Because the project has been completed and operating for years, these amenities are already running, not promises on paper — giving buyers more certainty than projects still under construction.",
        ],
      },
      {
        heading: "Who Is The St. Regis Cairo For?",
        paragraphs: [
          "Being fully completed and ready for immediate handover, The St. Regis Cairo particularly suits buyers who want a move-in-ready property without waiting through construction phases — whether as a personal residence in the heart of Cairo or a property that can benefit from the hotel operation system already in place within the complex.",
          "The project also suits buyers seeking real estate value tied to an established global hotel brand in a central Nile-front location — a rare combination specifically in downtown Cairo. Whether it fits a specific investment goal, from rental yield to personal use, is discussed in detail with the Fair Direction team.",
        ],
      },
      {
        heading: "The Purchase Process: How Fair Direction Helps",
        paragraphs: [
          "Since The St. Regis Cairo is a completed, operating project, the purchase path differs from projects still under construction — usually involving careful verification of the current unit's ownership and legal status before any other step. The Fair Direction team handles this verification in coordination with Qatar Diar's team.",
          "The team then accompanies the client through reviewing purchase or resale terms and any contractual obligations tied to operating the unit within the hotel system [FACT: current terms and prices for buying or reselling St. Regis Cairo units], through to completing registration and ownership transfer.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is The St. Regis Cairo ready for handover?",
        answer:
          "Yes — the project is fully completed and operating under the global St. Regis brand.",
      },
      {
        question: "Where exactly is The St. Regis Cairo located?",
        answer:
          "The complex sits on the banks of the Nile in the heart of Cairo, near the World Trade Center.",
      },
      {
        question: "How many residential units are separate from the hotel?",
        answer:
          "The complex has 150 luxury residential units, separate from the hotel's 366 rooms and suites.",
      },
      {
        question: "Who designed The St. Regis Cairo building?",
        answer: "The complex was designed by renowned architect Michael Graves.",
      },
      {
        question: "What are the key amenities available to residents?",
        answer:
          "These include the St. Regis brand's signature butler service, indoor and outdoor pools, a full-service spa, and seven distinct restaurants.",
      },
      {
        question: "How does Fair Direction help buy a unit at The St. Regis Cairo?",
        answer:
          "Fair Direction verifies the unit's legal status and purchase or resale terms, and accompanies the client through completing registration and ownership transfer.",
      },
    ],
    gallery: [
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/stregis_main_image-jpg-2414c5b61f.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/arr-6a25c72bf9.svg",
        alt: "The St. Regis Cairo Hotel and Residences",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_Water_FeatureJPG-jpg-045e91b633.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_stair_resized-jpg-ea25a47c82.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_The-20Royal-20Suite_Bathroom_r-7831096059.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/1054-1-jpg-4dfe338b8f.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/DJI_0856-jpg-943f19f4a0.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/DJI_0926-jpg-2dd4d8c1a6.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/DJI_0961-jpg-c5a24ba3f9.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_Apartment_KitchenJPG-jpg-c0491fe254.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_Astor_Living_RoomJPG-jpg-2befd312f2.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_Indoor_PoolJPG-jpg-b372e992f9.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_J-26G_Steakhouse_02JPG-jpg-c57333aad9.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_La-20Zisa_01JPG-jpg-51dda07cec.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_La-20Zisa_02JPG-jpg-87f23abba6.webp",
        alt: "The St. Regis Cairo",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/STR_CAIXR_LibraryJPG-jpg-bbe4fe4164.webp",
        alt: "The St. Regis Cairo",
      },
    ],
    website: "",
  },
  "city-gate-new-cairo": {
    slug: "city-gate-new-cairo",
    route: "/en/project/city-gate-new-cairo",
    title: "City Gate New Cairo",
    documentTitle: "City Gate New Cairo | QatariDiar",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/citygate_main-jpg-cd3288f98f.webp",
    region: "Africa",
    location: "New Cairo, Egypt",
    area: "",
    status: "Under Construction",
    summary:
      "City Gate New Cairo is one of Qatar Diar's flagship projects in Egypt, located in the heart of New Cairo alongside the company's portfolio, which also includes Alam Al Roum, The St. Regis Cairo, and NEWGIZA.",
    paragraphs: [
      "City Gate sits in the heart of New Cairo, one of the projects leading Qatar Diar's real estate development efforts in Egypt, alongside Alam Al Roum on the North Coast, The St. Regis Cairo, and NEWGIZA in Giza.",
      "The project is part of Qatar Diar's investment in the Egyptian market, which has exceeded $3.1 billion since 2006, and reflects the company's commitment to delivering integrated real estate projects in Cairo's most important growth corridors.",
      "The project is currently under construction; contact Qatar Diar's sales team in Egypt for the latest details on available units, payment plans, and delivery dates.",
    ],
    sections: [
      {
        heading: "Location & Access: What It Means for a Buyer",
        paragraphs: [
          "City Gate sits in the heart of New Cairo, one of the main urban growth areas east of the capital, which has over the past two decades become a leading destination for gated residential communities and modern commercial and administrative districts. This location places the project exactly where a buyer specifically searching in New Cairo would expect, well away from the congestion of old central Cairo.",
          "Exact driving distance and time from City Gate to key hubs such as Cairo International Airport, the Regional Ring Road, and neighboring New Cairo districts [FACT: driving distance and time from City Gate New Cairo to Cairo International Airport and key hubs] are details the sales team provides directly, based on each client's actual starting point.",
        ],
      },
      {
        heading: "Unit Types at City Gate",
        paragraphs: [
          "Full details on the unit types, areas, and interior layouts available at City Gate have not yet been announced [FACT: unit types available at City Gate New Cairo, their areas, and room counts]. Like the rest of Qatar Diar's Egypt portfolio, which typically combines residential units and commercial space within one integrated master plan, the project is expected to offer a range of residential options.",
          "Because the project is still under construction, the actual list of units on sale changes as work progresses — making direct contact with Qatar Diar's sales team, through Fair Direction, the most accurate way to get an up-to-date list of what's currently available.",
        ],
      },
      {
        heading: "Amenities & Master Plan",
        paragraphs: [
          "Full details on City Gate's master plan — amenities, services, and the proportion of green space to commercial areas — have not yet been published [FACT: City Gate New Cairo master plan details and planned amenities]. Based on the approach used in Qatar Diar's other Egypt projects, which typically blend residential, commercial, and service space within one integrated plan, City Gate is likely to follow a similar approach.",
          "Until further official details are released, direct contact with the sales team remains the most accurate source for any updated information on the project's amenities and construction phases.",
        ],
      },
      {
        heading: "Who Is City Gate New Cairo For?",
        paragraphs: [
          "As a project under construction from a developer with a long investment track record in Egypt dating back to 2006, worth nearly $3.1 billion, City Gate particularly suits investors looking for early entry into the New Cairo area, where units in early construction phases tend to offer more flexible payment plans compared to ready units.",
          "The project also suits those already planning ahead for a future permanent home in New Cairo and who don't mind waiting until delivery in exchange for the advantage of entering the project at an early stage. Whether it fits a specific investment goal is discussed in detail with the Fair Direction team.",
        ],
      },
      {
        heading: "The Purchase Process: How Fair Direction Helps",
        paragraphs: [
          "As Qatar Diar's authorized sales agent in Egypt, Fair Direction typically starts by gathering the latest update from the developer's sales team on the units actually on offer at City Gate, since the project is still under construction and the available list changes periodically.",
          "Once a suitable unit is identified, the team explains the payment plan and expected delivery dates as officially announced by the developer [FACT: current payment plan and expected delivery dates for City Gate units], accompanies the client through reviewing the reservation contract before signing, and follows through to completing registration.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is the City Gate New Cairo project located?",
        answer: "The project sits in the heart of New Cairo, east of the Egyptian capital.",
      },
      {
        question: "Is City Gate completed or still under construction?",
        answer:
          "The project is currently under construction; the latest progress update is available from the sales team.",
      },
      {
        question: "What unit types are available at City Gate?",
        answer:
          "Full details on unit types and areas have not yet been announced. For an up-to-date list: [FACT: unit types and areas currently available at City Gate].",
      },
      {
        question: "When will City Gate units be delivered?",
        answer:
          "[FACT: expected delivery date for City Gate New Cairo units] — it's best to confirm the latest update directly with the sales team.",
      },
      {
        question: "What payment plans are available for City Gate units?",
        answer:
          "Qatar Diar typically offers flexible payment plans, with details discussed per project and chosen unit directly with the sales team.",
      },
      {
        question: "How does Fair Direction help track City Gate?",
        answer:
          "Fair Direction follows the latest availability at City Gate with Qatar Diar's sales team, and accompanies the client from first inquiry through to signing the reservation contract.",
      },
    ],
    gallery: [
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/citygate_main-jpg-cd3288f98f.webp",
        alt: "City Gate New Cairo",
      },
    ],
    website: "",
  },
  newgiza: {
    slug: "newgiza",
    route: "/en/project/newgiza",
    title: "NEWGIZA",
    documentTitle: "NEWGIZA | QatariDiar",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/NEWGIZA-20Photo-png-a857f103d2.webp",
    region: "Africa",
    location: "Cairo, Egypt",
    area: "6,300,000 sqm",
    status: "Phases 1 to 3 completed",
    summary:
      "NEWGIZA is a fully integrated community developed by Qatar Diar in the 6th of October area of Giza, spanning 6.3 million sqm about 23 km from the Cairo–Alexandria road, with phases one through three now complete.",
    paragraphs: [
      "NEWGIZA sits on 6.3 million sqm in the 6th of October area, about 23 km from the Cairo–Alexandria road, and is the first project of its kind in Egypt in terms of the scale of its urban planning.",
      "Roughly 87% of the project's area is dedicated to green space and open streets, spread across ten residential districts — making nature a core part of the living experience rather than an added feature.",
      "The master plan includes a five-star hotel, offices, restaurants, cinemas, art galleries, a music hall, a sports club, a golf course, and retail areas, alongside a medical district expected to become one of Egypt's leading healthcare destinations.",
      "Phases one through three of NEWGIZA are complete, making it one of Qatar Diar's most mature projects in the Egyptian market, and reflecting the company's approach of building fully integrated communities rather than standalone residential units.",
    ],
    sections: [
      {
        heading: "Location & Access: What It Means for a Buyer",
        paragraphs: [
          "NEWGIZA sits in the 6th of October area, about 23 km from the Cairo–Alexandria Desert Road — a location that puts the project within easy reach for anyone who works or lives along the Sheikh Zayed, October, and West Giza corridors, without having to fight downtown Cairo traffic every day. For anyone used to comparing West Giza compounds, this location gives NEWGIZA convenient access to major routes without being tied to the congestion of Cairo's inner ring roads at peak hours.",
          "Exact driving time from specific population centers such as downtown Cairo, Nasr City, or the New Administrative Capital [FACT: driving time from NEWGIZA to downtown Cairo and the New Administrative Capital] varies by road conditions and time of day, which the sales team clarifies more precisely once the client's actual starting point is set.",
        ],
      },
      {
        heading: "Unit Types & the Ten Districts",
        paragraphs: [
          "NEWGIZA is spread across ten independent residential districts, each with its own character within the community's overall master plan — a design that allows for real variety in unit type between one district and another, rather than a single repeated housing pattern across the whole project. This division into distinct districts is what sets NEWGIZA apart from traditional single-building compounds.",
          "The precise details of unit types currently available in each district — from standalone or attached villas to apartments within completed or upcoming phases — along with their areas and prices [FACT: unit types, areas, and prices currently available at NEWGIZA across its ten districts], change according to the phase on offer, and need direct confirmation from the sales team before any decision.",
        ],
      },
      {
        heading: "Amenities & Master Plan",
        paragraphs: [
          "Roughly 87% of NEWGIZA's 6.3 million sqm is dedicated to green space and open streets — a relatively high proportion that makes nature and open space a core part of daily life, not just a central park like in other projects.",
          "The master plan includes a five-star hotel, offices, restaurants, cinemas, art galleries, a music hall, a sports club, a golf course, and retail areas, alongside a medical district expected to become one of Egypt's leading healthcare destinations. This mix of uses means NEWGIZA is built as a self-contained small city, not just a residential cluster.",
        ],
      },
      {
        heading: "Who Is NEWGIZA For?",
        paragraphs: [
          "With phases one through three complete, NEWGIZA particularly suits buyers looking for ready or near-delivery permanent housing in a fully serviced, integrated community — not only an on-paper, long-term investment. This construction maturity reduces the risks typically associated with early-stage projects.",
          "At the same time, the project remains an attractive option for investors seeking a real estate asset in the consistently in-demand West Giza area, thanks to NEWGIZA's standing as one of Qatar Diar's most mature projects in Egypt. Which category or phase best fits a given client depends on budget and purchase goal, discussed together with the Fair Direction team.",
        ],
      },
      {
        heading: "The Purchase Process: How Fair Direction Helps",
        paragraphs: [
          "Because NEWGIZA includes both completed and still-developing phases, the first thing the Fair Direction team does is pin down what's actually available in each district — whether units ready for immediate handover or others within later sales phases — to avoid any confusion between the two.",
          "The team then accompanies the client through reviewing title deeds or reservation contracts depending on the unit type, explains Qatar Diar's proposed payment plan [FACT: payment plan details, down payment and installment percentages currently available for NEWGIZA units], and follows up through to formally completing registration.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where exactly is NEWGIZA located?",
        answer:
          "NEWGIZA sits in the 6th of October area of Giza, about 23 km from the Cairo–Alexandria Desert Road.",
      },
      {
        question: "Is NEWGIZA a completed project or still under construction?",
        answer:
          "Phases one through three of the project are complete, making it one of Qatar Diar's most mature projects in Egypt.",
      },
      {
        question: "How many residential districts does NEWGIZA have?",
        answer:
          "The project is spread across ten residential districts, each with its own character within the overall master plan.",
      },
      {
        question: "What are NEWGIZA's key amenities?",
        answer:
          "The master plan includes a five-star hotel, offices, restaurants, cinemas, art galleries, a music hall, a sports club, a golf course, retail areas, and a planned medical district.",
      },
      {
        question: "What proportion of NEWGIZA is green space?",
        answer:
          "Roughly 87% of the project's 6.3 million sqm is dedicated to green space and open streets.",
      },
      {
        question: "How does Fair Direction help choose a unit at NEWGIZA?",
        answer:
          "The Fair Direction team first identifies what's actually available — ready units or those in upcoming phases — then accompanies the client through the contract and payment plan review through to completing registration.",
      },
    ],
    gallery: [
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/NEWGIZA-20Photo-png-a857f103d2.webp", alt: "NEWGIZA" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/arr-6a25c72bf9.svg", alt: "NEWGIZA" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/GOLF10_resized-jpg-07212d8386.webp", alt: "NEWGIZA" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/1_resized-jpg-58ff30b0ab.webp", alt: "NEWGIZA" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/5_resized-jpg-a44baf68dd.webp", alt: "NEWGIZA" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/16_resized-jpg-19c318776f.webp", alt: "NEWGIZA" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/19_resized-jpg-c1e8aee11c.webp", alt: "NEWGIZA" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/21_resized-jpg-76fe98d462.webp", alt: "NEWGIZA" },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/carnell-20park4-5B1-5D_resized-jpg-24183fbef6.webp",
        alt: "NEWGIZA",
      },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/carnell-20park4_resized-jpg-73ff0eed54.webp", alt: "NEWGIZA" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/carnell-20park7_resized-jpg-beac9bcd72.webp", alt: "NEWGIZA" },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/DISTRICT-20one-20kagon1_resized-jpg-f9363c9459.webp",
        alt: "NEWGIZA",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/DISTRICT-20one-20kagon-203_resized-jpg-17a21fe19d.webp",
        alt: "NEWGIZA",
      },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/GOLF5_resized-jpg-676f0d6cec.webp", alt: "NEWGIZA" },
    ],
    website: "",
  },
};

/** Short title/image entries for all 28 projects, used on the EN projects listing pages. */
const ALL_PROJECT_TITLES_EN: Record<string, string> = {
  simaisma: "Simaisma",
  "alam-al-roum": "Alam Al Roum",
  "doha-exhibition-and-convention-center": "Doha Exhibition and Convention Center",
  lusail: "Lusail",
  "hotel-park": "Sheraton Park",
  "commercial-avenue": "The Grand Commercial Avenue",
  "diar-ras-al-hadd": "Diar Ras Al Hadd",
  "diar-dushanbe": "Diar Dushanbe",
  "seapearl-istanbul": "Sea Pearl Istanbul",
  "st-regis-cairo-and-residences": "The St. Regis Cairo Hotel and Residences",
  "city-gate-new-cairo": "City Gate New Cairo",
  newgiza: "NEWGIZA",
  "al-houara-resort": "Al Houara Resort",
  mushaireb: "Msheireb",
  "mora-sahara-tozeur": "The Mora Sahara Tozeur",
  "chelsea-barracks": "Chelsea Barracks",
  "east-village": "East Village",
  "elephant-and-castle": "Elephant & Castle",
  glasgow: "Glasgow",
  leeds: "Leeds",
  "lewisham-gateway": "Lewisham Gateway",
  "new-maker-yards": "New Maker Yards",
  "southbank-place": "Southbank Place",
  "chancery-rosewood": "The Chancery Rosewood",
  "panama-pacifico": "Panama Pacifico",
  "city-centre-dc": "City Centre DC",
  "conrad-hotel": "Conrad Hotel",
  jacx: "The JACX",
};

/** English project-card list for the projects/projects-map pages. Egypt slugs link
 *  to /en/project/{slug}; the rest link through to the existing Arabic detail page
 *  (no English detail content for them yet — see the Qatari Diar plan, deferred). */
function buildProjectCardsEn(
  cards: { slug: string; image: string; imageAlt: string; location?: string; status?: string }[],
) {
  const egyptSlugs = new Set(Object.keys(PROJECTS_EN));
  return cards.map((c) => ({
    slug: c.slug,
    href: egyptSlugs.has(c.slug) ? `/en/project/${c.slug}` : `/ar/project/${c.slug}`,
    title: ALL_PROJECT_TITLES_EN[c.slug] ?? c.slug,
    image: c.image,
    imageAlt: c.imageAlt,
    ...(c.location ? { location: c.location } : {}),
    ...(c.status ? { status: c.status } : {}),
  }));
}

const PROJECTS_MAP_CARDS_RAW = [
  { slug: "simaisma", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Simaisma_1main_image-jpg-317711f0e0.webp", imageAlt: "Simaisma" },
  { slug: "alam-al-roum", image: "/sites/www-qataridiar-com-24dfe100/shared/images/260701_AAR-V-01-jpg-a2229bba5d.webp", imageAlt: "Alam Al Roum" },
  { slug: "doha-exhibition-and-convention-center", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Doha-20Convention-20Center-jpg-047af6897a.webp", imageAlt: "Doha Exhibition and Convention Center" },
  { slug: "lusail", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Lusail_main_image-jpg-61444e3247.webp", imageAlt: "Lusail" },
  { slug: "hotel-park", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Sheraton-20Park-jpg-4255f344d4.webp", imageAlt: "Sheraton Park" },
  { slug: "commercial-avenue", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Grand-20Commerical-20Avenue_main-jpg-db118ff689.webp", imageAlt: "The Grand Commercial Avenue" },
  { slug: "diar-ras-al-hadd", image: "/sites/www-qataridiar-com-24dfe100/shared/images/S-00-FIVE-20STAR-20HOTEL-jpg-57fd774f6a.webp", imageAlt: "Diar Ras Al Hadd" },
  { slug: "diar-dushanbe", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Dia-20Dushanbe-jpg-5949766dcf.webp", imageAlt: "Diar Dushanbe" },
  { slug: "seapearl-istanbul", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Sear-20Pearl-20Istanbul-jpg-a2aa117f8c.webp", imageAlt: "Sea Pearl Istanbul" },
  { slug: "st-regis-cairo-and-residences", image: "/sites/www-qataridiar-com-24dfe100/shared/images/stregis_main_image-jpg-4e280e23eb.webp", imageAlt: "The St. Regis Cairo" },
  { slug: "city-gate-new-cairo", image: "/sites/www-qataridiar-com-24dfe100/shared/images/citygate_main-jpg-cd3288f98f.webp", imageAlt: "City Gate New Cairo" },
  { slug: "newgiza", image: "/sites/www-qataridiar-com-24dfe100/shared/images/NEWGIZA-20Photo-png-ff4a82ccb8.webp", imageAlt: "NEWGIZA" },
  { slug: "al-houara-resort", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Al-20Houara-20Resort-jpg-3026845c76.webp", imageAlt: "Al Houara Resort" },
  { slug: "mushaireb", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Mushaireb-jpg-6f880d3b56.webp", imageAlt: "Msheireb" },
  { slug: "mora-sahara-tozeur", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Anatara-jpg-6284a26b9a.webp", imageAlt: "The Mora Sahara Tozeur" },
  { slug: "chelsea-barracks", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Chelsea-20Barraacks-JPG-785fa7561f.webp", imageAlt: "Chelsea Barracks" },
  { slug: "east-village", image: "/sites/www-qataridiar-com-24dfe100/shared/images/East-20Village-jpg-2eda73f546.webp", imageAlt: "East Village" },
  { slug: "elephant-and-castle", image: "/sites/www-qataridiar-com-24dfe100/shared/images/3-20EC-20-20aerial-jpg-cf67060a07.webp", imageAlt: "Elephant & Castle" },
  { slug: "glasgow", image: "/sites/www-qataridiar-com-24dfe100/shared/images/14-20Glasgow-20-201-jpg-94aba3903f.webp", imageAlt: "Glasgow" },
  { slug: "leeds", image: "/sites/www-qataridiar-com-24dfe100/shared/images/11-20Leeds-20-20Whole-20Site-jpg-d909d3dcb3.webp", imageAlt: "Leeds" },
  { slug: "lewisham-gateway", image: "/sites/www-qataridiar-com-24dfe100/shared/images/9-20Lewisham-20-201-jpg-83d52789b7.webp", imageAlt: "Lewisham Gateway" },
  { slug: "new-maker-yards", image: "/sites/www-qataridiar-com-24dfe100/shared/images/New-20Maker-20Yards-jpg-081f67db03.webp", imageAlt: "New Maker Yards" },
  { slug: "southbank-place", image: "/sites/www-qataridiar-com-24dfe100/shared/images/SouthBank_main_image-jpg-46e6fc4fa3.webp", imageAlt: "Southbank Place" },
  { slug: "chancery-rosewood", image: "/sites/www-qataridiar-com-24dfe100/shared/images/The-20Chancery-20Rosewood-20-281-29-jpg-cbdda6dc1f.webp", imageAlt: "The Chancery Rosewood" },
  { slug: "panama-pacifico", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Panama-20Pacifico-jpg-66c2f27447.webp", imageAlt: "Panama Pacifico" },
  { slug: "city-centre-dc", image: "/sites/www-qataridiar-com-24dfe100/shared/images/CityCenterDC-20-Apts-20-20Interior-20Cou-30ca2625e5.webp", imageAlt: "City Centre DC" },
  { slug: "conrad-hotel", image: "/sites/www-qataridiar-com-24dfe100/shared/images/WASCI_Exterior_Evening_v1_current-jpg-60be7b3adc.webp", imageAlt: "Conrad Hotel" },
  { slug: "jacx", image: "/sites/www-qataridiar-com-24dfe100/shared/images/Jacx_main_image-jpg-60fdd094bc.webp", imageAlt: "The JACX" },
];

export const PAGES_EN: Record<string, InteriorPage> = {
  "en-about-qatar-history-geography": {
    key: "en-about-qatar-history-geography",
    route: "/en/about-qatar/history-geography",
    title: "About Qatar",
    subtitle: "A Nation with Vision",
    intro:
      "Qatar is a peninsula located in the middle of the western coast of the Arabian Gulf. Several islands lie within its borders, including Halul, Shraouh, and Al-Ashat, among others.",
    banner:
      "/sites/www-qataridiar-com-24dfe100/shared/images/Lusail-20D_Night-20View-282-29-jpg-343b7bc836.webp",
    paragraphs: [
      "Qatar is a peninsula located in the middle of the western coast of the Arabian Gulf. Several islands lie within its borders, including Halul, Shraouh, and Al-Ashat, among others.",
      "Annual GDP growth rate",
      "The terrain in Qatar is flat and rocky, with some low limestone hills in the Dukhan area to the west and Jebel Fuwairit in the north. The surface features a variety of landforms, such as inlets, bays, depressions, and surface rainwater drainage basins known as \"riyadh,\" found mainly in the northern and central parts of the peninsula, which contain the most fertile soil and abundant vegetation.",
      "Qatar's total area is approximately 11,521 square kilometers.",
      "Arabic is the official language of Qatar, and English is widely used.",
      "Islam is the official religion of Qatar, and Islamic Sharia is a principal source of legislation.",
      "A temperate desert climate, with long, hot summers, short, mild winters, and light winter rainfall.",
      "Doha, Al Wakrah, Al Khor, Dukhan, Al Shamal, Mesaieed, Ras Laffan, and others.",
      "Observed every December 18th, commemorating Sheikh Jassim bin Mohammed bin Thani, the founder of the State of Qatar",
      "National Day: December 18th each year",
      "Eid al-Fitr holiday: begins 28 Ramadan through 4 Shawwal (dates on the Gregorian calendar vary each year)",
      "Eid al-Adha holiday: begins 9 Dhul Hijjah through 13 Dhul Hijjah (dates on the Gregorian calendar vary each year)",
      "The national flag consists of maroon with a broad white vertical band at the hoist, separated by a nine-pointed serrated line.",
    ],
    labeled: [],
    headings: [],
    links: [
      { href: "/en/about-qatar", title: "At a Glance" },
      { href: "/en/about-qatar/history-geography", title: "History & Geography" },
      { href: "/en/about-qatar/useful-links", title: "Useful Links" },
      { href: "/en/about-qatar", title: "At a Glance" },
      { href: "/en/about-qatar/history-geography", title: "History & Geography" },
      { href: "/en/about-qatar/useful-links", title: "Useful Links" },
    ],
    gallery: [
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/Lusail-20D_Night-20View-282-29-jpg-343b7bc836.webp",
        alt: "Lusail",
      },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/Group-202-281-29-2f77c79b7c.jpg", alt: "Lusail" },
    ],
    egyptProjects: [],
  },
  "en-about-qatar-useful-links": {
    key: "en-about-qatar-useful-links",
    route: "/en/about-qatar/useful-links",
    title: "About Qatar",
    subtitle: "A Nation with Vision",
    intro: "At a Glance, Useful Links, Visit Qatar, Government Communications Office, Invest Qatar, Qatar Investment Authority",
    banner:
      "/sites/www-qataridiar-com-24dfe100/shared/images/Lusail-20D_Night-20View-286-29-jpg-ae8660568b.webp",
    paragraphs: [
      "At a Glance, Useful Links, Visit Qatar, Government Communications Office, Invest Qatar, Qatar Investment Authority",
    ],
    labeled: [],
    headings: [],
    links: [
      { href: "/en/about-qatar", title: "At a Glance" },
      { href: "/en/about-qatar/history-geography", title: "History & Geography" },
      { href: "/en/about-qatar/useful-links", title: "Useful Links" },
      { href: "/en/about-qatar", title: "At a Glance" },
      { href: "/en/about-qatar/history-geography", title: "History & Geography" },
      { href: "/en/about-qatar/useful-links", title: "Useful Links" },
    ],
    gallery: [
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/Lusail-20D_Night-20View-286-29-jpg-ae8660568b.webp",
        alt: "Lusail",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/Qatar-National-Tourism-Council-Logo-png-f17bfda895.webp",
        alt: "Visit Qatar",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/Government-20communication-20office-jpg-3beca0f3ce.webp",
        alt: "GCO",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/QatarInvestment-jpg-5d810248fc.webp",
        alt: "Qatar Investment Authority",
      },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/Rail-jpg-e9249f573e.webp", alt: "Rail" },
    ],
    egyptProjects: [],
  },
  "en-about-qatar": {
    key: "en-about-qatar",
    route: "/en/about-qatar",
    title: "About Qatar",
    subtitle: "A Nation with Vision",
    intro:
      "The State of Qatar has a vision to build a modern, inclusive society, with the finest modern infrastructure, the highest standard of education, and the highest standards of sustainable development.",
    banner:
      "/sites/www-qataridiar-com-24dfe100/shared/images/shutterstock_1444162757-20-281-29-jpg-689bebf286.webp",
    paragraphs: [
      "The State of Qatar has a vision to build a modern, inclusive society, with the finest modern infrastructure, the highest standard of education, and the highest standards of sustainable development.",
      "Wherever you travel in Qatar, you'll find a wealth of innovative architectural design.",
      "Like a jewel in the crown, Qatar sits at the top of the Arabian Peninsula, surrounded by water on three sides and looking out to the wider world through them, without compromising the stunning desert landscape that draws tourists from around the globe — visible on its fourth, land-connected side — all while preserving its environment and diverse historical heritage.",
      "Qatari citizens share a deep sense of achieving their common goals and a strong sense of identity, which enables them to embrace enormous change without diminishing traditional values they're known for, such as social cohesion and mutual cooperation in daily life. The Qatari people also share a common vision for progress, development, and community growth, which helps drive the country rapidly toward new shared horizons of advancement.",
      "Before the discovery of oil and gas, Qatar relied on fishing and pearl diving and trading, which made it a trading hub within the Arabian Peninsula. Today, these trading skills have taken on a new direction and stronger momentum in economic and development fields. Qatar continues to strengthen its position in the wider global community, and its government seeks to open broad horizons for partners and investors wishing to cooperate in achieving Qatar's future vision.",
      "Today, desert forts and traditional fishing villages coexist in Qatar alongside towering skyscrapers, high-tech oil and gas refineries, and an active international trade environment.",
      "Qatar's coastline, with all its beauty, has become appreciated by a new generation coming to enjoy its sparkling resorts or to build homes in vibrant communities. Local, regional, and international investors alike recognize the potential of Qatar's beautiful coastline to become a tourist destination. The country's development plan, outlined in Qatar National Vision 2030, calls for growth that is sustainable, environmentally responsible, and mindful of local culture.",
      "Qatar National Vision aims to transform Qatar — by 2030 — into an advanced country capable of achieving sustainable development and securing a decent standard of living for its people, generation after generation. The National Vision sets out the long-term goals Qatar seeks to achieve and provides an overarching framework for developing the comprehensive national strategy and its implementation plans.",
      "Developing Qatar's people so they are able to build a prosperous society.",
      "Developing a fair and secure society founded on high moral standards and healthcare, able to engage and interact with other societies and play an important role in the global partnership for development.",
      "Developing a diverse, competitive national economy able to meet the needs of Qatar's citizens now and in the future, and secure a high standard of living.",
      "Managing the environment in a way that ensures harmony and balance between economic development and environmental protection.",
    ],
    labeled: [],
    headings: [],
    links: [
      { href: "/en/about-qatar", title: "At a Glance" },
      { href: "/en/about-qatar/history-geography", title: "History & Geography" },
      { href: "/en/about-qatar/useful-links", title: "Useful Links" },
      { href: "/en/about-qatar", title: "At a Glance" },
      { href: "/en/about-qatar/history-geography", title: "History & Geography" },
      { href: "/en/about-qatar/useful-links", title: "Useful Links" },
    ],
    gallery: [
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/shutterstock_1444162757-20-281-29-jpg-689bebf286.webp",
        alt: "At a glance",
      },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/Group-202-1ac040d930.jpg", alt: "Lusail" },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/shutterstock_1346170343-bb2bfb8020.jpg",
        alt: "shutterstock_1346170343",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/shutterstock_776955250-jpg-ea100f70db.webp",
        alt: "Lusail",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/Hamad-Exterior-01-1900-1600x1069-4b9aa123fe.jpg",
        alt: "The new Doha international airport",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/GA-Qatar-Tour-2-Liberal-Art-Center-Arata-9e625a377b.jpg",
        alt: "Education City",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/QSTP-A-c3bee6fe0f.jpg",
        alt: "The Qatar science and technology park",
      },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/1-8377d82715.jpg", alt: "2" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/2-cc09888f66.jpg", alt: "1" },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/1-82719f9c69.jpg",
        alt: "The museum of islamic arts",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/Social-20Development-210fca1880.png",
        alt: "Social Development",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/Economic-20Development-4d90d055d6.png",
        alt: "Economic Development",
      },
    ],
    egyptProjects: [],
  },
  "en-about-us": {
    key: "en-about-us",
    route: "/en/about-us",
    title: "About Us",
    subtitle: "Qatar Diar",
    intro:
      "Qatar Diar Real Estate Investment Company was founded in 2005 as one of the companies of the Qatar Investment Authority. Qatar Diar was tasked with supporting the growing Qatari economy and coordinating the country's real estate development priorities, alongside pursuing its vision of improving quality of life, its commitment to quality, and its appreciation for community, partnership, and sustainability.",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/About-20Qatari-20Diar-jpg-2462a340c3.webp",
    paragraphs: [
      "Qatar Diar Real Estate Investment Company was founded in 2005 as one of the companies of the Qatar Investment Authority. Qatar Diar was tasked with supporting the growing Qatari economy and coordinating the country's real estate development priorities, alongside pursuing its vision of improving quality of life, its commitment to quality, and its appreciation for community, partnership, and sustainability.",
      "The Lusail City project was the most significant milestone in the company's history, launched in December 2005, and it quickly earned wide acclaim for applying innovative approaches and methods in the world of real estate.",
      "Qatar Diar holds combined capital of $8.1 billion, and manages a portfolio of 42 investments, assets, and projects under development, plus managed assets across 18 countries worldwide, with a total value of investments and assets under management of approximately $35 billion.",
    ],
    labeled: [
      {
        label: "Vision",
        value:
          "To be a leading company in the regional market, delivering high-quality, innovative lifestyle offerings in real estate development on a global scale.",
      },
      {
        label: "Mission",
        value:
          "A company operating on commercial principles in development and asset management, creating and delivering transformative real estate projects that embrace the highest international standards for stakeholders worldwide.",
      },
    ],
    headings: [],
    links: [],
    gallery: [
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/About-20Qatari-20Diar-jpg-2462a340c3.webp",
        alt: "About Qatari Diar",
      },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/shutterstock_1990209896-589971e294.jpg", alt: "Lusail" },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/shutterstock_519970543-jpg-fe2c86470b.webp",
        alt: "Lusail",
      },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/Chairman-20Photo-eb15253d7f.png", alt: "Chairman Photo" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/CEO-20Photo-20-934d37f55e.jpg", alt: "CEO Photo" },
    ],
    egyptProjects: [],
  },
  "en-careers": {
    key: "en-careers",
    route: "/en/careers",
    title: "Careers",
    subtitle: "People Come First",
    intro:
      "Qatar Diar's vision is a genuine reflection of the State of Qatar's modern thinking. Qatar's leadership has the wisdom to invest in our valuable human resources alongside our natural resources.",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/Careers-jpg-a288bb0ddc.webp",
    paragraphs: [
      "Qatar Diar's vision is a genuine reflection of the State of Qatar's modern thinking. Qatar's leadership has the wisdom to invest in our valuable human resources alongside our natural resources.",
      "Join the Qatar Diar family",
      "Enjoy the many benefits and career development programs at Qatar Diar",
      "Development plans for new graduates",
      "Strategic leadership programs",
      "Unlocking the creative and economic energies of our people through the highest levels of education and training in the region.",
      "At Qatar Diar, we're proud to draw on and build upon the best that Qatar has to offer, to help create a new generation of leaders who can serve as global ambassadors for their beloved homeland, Qatar.",
      "Every day, our talented employees around the world don't just represent Qatar Diar to the world — they also represent Qatar's steadfast vision, goals, and values. They are ambassadors for our country to the world.",
      "Qatar Diar is continually committed to developing its employees and equipping them with the tools they need to succeed and grow their careers, helping build a strong base of local skills that becomes a legacy Qatar benefits from.",
      "At Qatar Diar, we recognize that it's our people who enable us to achieve our ambitious vision, which is why we're dedicated to giving our employees an outstanding international opportunity to gain experience and learn from the best and most skilled professionals in their field.",
      "Qatar Diar is developing human capital capable of playing a leading role, with enthusiasm and innovation, in driving the real estate industry forward in today's world. At Qatar Diar, we're proud to draw on and build upon the best that Qatar has to offer, as part of our efforts to shape the next generation of leaders.",
      "Qatar Diar is also proud to have a distinguished mix within its global workforce, 45% of whom are Qatari nationals — the company's efforts are recognized in employing local talent and encouraging participation and support for local labor markets, not only in Qatar but across the GCC as well.",
      "Our strategy at Qatar Diar places significant focus on career growth and professional development. We have a range of programs that enable our employees to achieve further excellence and gain new skills, including:",
      "Suitable candidates will be contacted if a vacancy arises that matches their qualifications and experience.",
      "Qatar Diar has been entrusted with realizing Qatar's inspiring vision of building a beautiful environment and new, sustainable communities that captivate audiences around the world.",
      "With numerous projects underway in exciting destinations, from our home of Qatar to landmark projects in Egypt, Turkey, Paris, and London, Qatar Diar plays a key role in establishing Qatar as a vibrant commercial and social hub on the world stage.",
      "Send your CV to recruitment@qataridiar.com",
    ],
    labeled: [],
    headings: [],
    links: [],
    gallery: [
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/Careers-jpg-a288bb0ddc.webp", alt: "Careers" },
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/Careers-202-b9410d827c.jpg", alt: "Careers" },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/2-67374f1760.png",
        alt: "Practical training programs",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/3-a6583640d0.png",
        alt: "Higher education programs",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/4-c4adafc585.png",
        alt: "Development plans for new graduates",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/5-2487665c4d.png",
        alt: "Strategic leadership programs",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/6-5a16c4b3ae.png",
        alt: "Administrative development programs",
      },
      {
        src: "/sites/www-qataridiar-com-24dfe100/shared/images/7-222f2e5bff.png",
        alt: "Vocational degree programs",
      },
    ],
    egyptProjects: [],
  },
  "en-contact-us": {
    key: "en-contact-us",
    route: "/en/contact-us",
    title: "Contact Us",
    subtitle: "Talk to Us",
    intro: "Sales Center — Chelsea Barracks Project, United Kingdom",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/Contact-20us-jpg-041ab335f6.webp",
    paragraphs: [
      "Sales Center — Chelsea Barracks Project, United Kingdom",
      "Sales Center — Southbank Place Project, United Kingdom",
      "Qatar Diar Real Estate Investment Company — Lusail City, Doha, Qatar",
      "P.O. Box 23175, Doha, Qatar",
      "Phone: (+974) 44974444 / (+974) 44974333",
      "Customer Service: customerservice@qataridiar.com / 800 8088",
    ],
    formFields: [],
    showForm: true,
  },
  "en-e-procurement": {
    key: "en-e-procurement",
    route: "/en/e-procurement",
    title: "E-Procurement",
    subtitle: "Vendor Registration",
    intro:
      "Qatar Diar Real Estate Investment Company's purchasing operations are governed by principles of transparency and fairness, aimed at sourcing high-quality goods and services from specialized, reputable suppliers.",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/rsz_3eprocurement-jpg-9bddd9084f.webp",
    paragraphs: [
      "Qatar Diar Real Estate Investment Company's purchasing operations are governed by principles of transparency and fairness, aimed at sourcing high-quality goods and services from specialized, reputable suppliers.",
      "As part of the e-procurement portal launch initiative, all suppliers interested in working with Qatar Diar Real Estate Development must register on the e-procurement portal in order to complete all procedures required for purchasing operations. Submitted applications will be reviewed for completeness, accuracy, and legal compliance before registration is approved.",
      "Once registered, suppliers will be provided with portal login details (username and password), giving them access to view announcements and invitations to participate in public tenders.",
      "Click here to access the e-procurement portal",
      "You can refer to the user guide if you need assistance.",
    ],
    labeled: [],
    headings: [],
    links: [],
    gallery: [
      { src: "/sites/www-qataridiar-com-24dfe100/shared/images/rsz_3eprocurement-jpg-9bddd9084f.webp", alt: "procurement1" },
    ],
    egyptProjects: [],
  },
  "en-inquire": {
    key: "en-inquire",
    route: "/en/inquire",
    title: "Inquire",
    subtitle: "",
    intro: "We'd be happy to help with any inquiry. Just fill in the form below and we'll be in touch soon.",
    banner: "",
    paragraphs: ["We'd be happy to help with any inquiry. Just fill in the form below and we'll be in touch soon."],
    formFields: [],
    showForm: true,
  },
  "en-media": {
    key: "en-media",
    route: "/en/media",
    title: "Media Center",
    subtitle: "Latest Updates",
    intro: "Latest news and press releases about Qatar Diar",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/Lusail-20D_Night-20View_2-jpg-11e15f6592.webp",
    paragraphs: [],
    items: [
      {
        href: "/en/media",
        title: "Qatar Diar's CEO Receives the Ambassador of the Republic of Sudan",
        image:
          "/sites/www-qataridiar-com-24dfe100/shared/images/Ambassador-20of-20the-20Republic-20of-20-bbb6a20fdb.webp",
        imageAlt: "Qatar Diar's CEO receives the Sudanese ambassador",
        date: "February 22, 2026",
        body: "",
      },
      {
        href: "/en/media",
        title:
          "Egypt's Prime Minister Receives Qatar Diar's CEO to Discuss Progress on the \"Alam Al Roum\" Project",
        image:
          "/sites/www-qataridiar-com-24dfe100/shared/images/df3809ad-9a02-47ad-8700-39319f255b58-JPG-56e6ef7c98.webp",
        imageAlt: "Egypt's Prime Minister receives Qatar Diar's CEO",
        date: "August 9, 2026",
        body: "",
      },
      {
        href: "/en/media",
        title: "Lusail City Enters the Guinness Book of World Records with Two Global Firsts in District Cooling",
        image: "/sites/www-qataridiar-com-24dfe100/shared/images/DSC07873-jpg-3436692059.webp",
        imageAlt: "District cooling system in Lusail City",
        date: "June 29, 2026",
        body: "",
      },
      {
        href: "/en/media",
        title: "Qatar Diar's CEO Receives the Ambassador of the Republic of Tajikistan",
        image:
          "/sites/www-qataridiar-com-24dfe100/shared/images/Ambassador-20of-20the-20Republic-20of-20-94eb24f5d1.webp",
        imageAlt: "Qatar Diar's CEO receives the Tajik ambassador",
        date: "April 7, 2026",
        body: "",
      },
      {
        href: "/en/media",
        title: "Qatar Diar's CEO Receives the Ambassador of the Republic of Uzbekistan",
        image:
          "/sites/www-qataridiar-com-24dfe100/shared/images/Ambassador-20of-20the-20Republic-20of-20-78034fcc79.webp",
        imageAlt: "Qatar Diar's CEO receives the Uzbek ambassador",
        date: "April 5, 2026",
        body: "",
      },
    ] as MediaCard[],
  },
  "en-other-businesses": {
    key: "en-other-businesses",
    route: "/en/other-businesses",
    title: "Other Businesses",
    subtitle: "Leading the Way",
    intro:
      "Alongside Qatar Diar's core real estate development business, companies were established to support its vision, including firms specialized in construction and infrastructure, large-scale building materials production, and multi-utility service companies covering district cooling and gas.",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/Other-20Businesses_0-jpg-e24d2e3b69.webp",
    paragraphs: [
      "Alongside Qatar Diar's core real estate development business, companies were established to support its vision, including firms specialized in construction and infrastructure, large-scale building materials production, and multi-utility service companies covering district cooling and gas.",
    ],
    businesses: [
      {
        href: "https://www.gord.qa/",
        name: "GORD",
        image: "/sites/www-qataridiar-com-24dfe100/shared/images/Gord-20Institute_0-a162fbb869.jpg",
        body:
          "Founded in 2009, GORD is a leading research and development institution specializing in advanced environmental sustainability technologies, supporting the transformation of communities, institutional structures, and the built environment across the MENA region toward sustainability.",
        cta: "Visit Website",
      },
      {
        href: "https://qd-om.com",
        name: "QDOM",
        image: "/sites/www-qataridiar-com-24dfe100/shared/images/QD-OM-Facility-Management-2d59a05f5e.png",
        body:
          "Founded in 2018, QDOM is a leading provider of integrated facility, systems, and equipment management services, including operation and maintenance, general repairs, inspection and testing, third-party certification, and cleaning services.",
        cta: "Visit Website",
      },
      {
        href: "https://www.marafeq.com.qa/",
        name: "Marafeq Qatar",
        image: "/sites/www-qataridiar-com-24dfe100/shared/images/579942_413962905313758_1768430581_n-fa441db0ff.png",
        body:
          "Founded in March 2009, Marafeq Qatar specializes in providing integrated, sustainable utility and infrastructure services for new and existing development and real estate projects of all kinds — residential, commercial, or industrial.",
        cta: "Visit Website",
      },
      {
        href: "https://www.smeet.com.qa/",
        name: "SMEET",
        image: "/sites/www-qataridiar-com-24dfe100/shared/images/smeet-42856250c0.png",
        body:
          "Founded in 2010 by Qatar Diar Real Estate Investment Company and Barwa Real Estate, SMEET LLC is a leading manufacturer and provider of innovative, high-quality building material solutions across the Middle East.",
        cta: "Visit Website",
      },
      {
        href: "https://qdvc.com",
        name: "QDVC",
        image: "/sites/www-qataridiar-com-24dfe100/shared/images/QDVC-1540e8ace9.png",
        body:
          "Founded in 2007 as a partnership between Qatar Diar and VINCI Construction Grands Projets, QDVC develops and delivers major real estate and sustainable infrastructure projects to the highest standards in the field.",
        cta: "Visit Website",
      },
      {
        href: "https://www.qpm.com.qa",
        name: "QPM",
        image: "/sites/www-qataridiar-com-24dfe100/shared/images/QPM-dc5996118f.jpg",
        body:
          "Established in 2008 as one of the first Qatari companies specialized in this field, QPM is now among the region's leading firms applying global standards and best practices in managing real estate and infrastructure projects.",
        cta: "Visit Website",
      },
    ],
  },
  "en-projects-map": {
    key: "en-projects-map",
    route: "/en/projects/map",
    title: "Our Projects",
    subtitle: "Global. Diverse.",
    intro:
      "Our projects are landmark, significant developments, often unmatched in scale, scope, and vision. Our developments aim to comprehensively nurture the growth of local communities and provide long-term, sustainable economic opportunities, while beautifully preserving and seamlessly enhancing original natural beauty and local traditions alongside the latest modern conveniences.",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/Lusail-20D_Night-20View-286-29-jpg-359df8c99c.webp",
    paragraphs: [
      "Our projects are landmark, significant developments, often unmatched in scale, scope, and vision. Our developments aim to comprehensively nurture the growth of local communities and provide long-term, sustainable economic opportunities, while beautifully preserving and seamlessly enhancing original natural beauty and local traditions alongside the latest modern conveniences.",
    ],
    mapLink: "/en/projects",
    projects: buildProjectCardsEn(PROJECTS_MAP_CARDS_RAW),
  },
  "en-projects": {
    key: "en-projects",
    route: "/en/projects",
    title: "Our Projects",
    subtitle: "Global. Diverse.",
    intro:
      "Our projects are landmark, significant developments, often unmatched in scale, scope, and vision. Our developments aim to comprehensively nurture the growth of local communities and provide long-term, sustainable economic opportunities, while beautifully preserving and seamlessly enhancing original natural beauty and local traditions alongside the latest modern conveniences.",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/Project-20Landing-jpg-96dc015039.webp",
    paragraphs: [
      "Our projects are landmark, significant developments, often unmatched in scale, scope, and vision. Our developments aim to comprehensively nurture the growth of local communities and provide long-term, sustainable economic opportunities, while beautifully preserving and seamlessly enhancing original natural beauty and local traditions alongside the latest modern conveniences.",
    ],
    mapLink: "/en/projects/map",
    projects: buildProjectCardsEn(PROJECTS_MAP_CARDS_RAW),
  },
  "en-request-access-information": {
    key: "en-request-access-information",
    route: "/en/request-access-information",
    title: "Request Access to Information",
    subtitle: "",
    intro: "Request access to information from Qatar Diar Real Estate Investment Company, a private Qatari shareholding company",
    banner: "/sites/www-qataridiar-com-24dfe100/shared/images/Project-20Landing-jpg-96dc015039.webp",
    paragraphs: [
      "Request access to information from Qatar Diar Real Estate Investment Company, a private Qatari shareholding company",
      "Qatar Diar Real Estate Investment Company is committed to the principle of transparency and works diligently to strengthen it across all aspects of its business. In implementation of Law No. (9) of 2022 on regulating the right to access information, individuals or entities may obtain information related to Qatar Diar by following these steps: Step 1: Please click the links below to download the information request form",
      "Step 2: Submit the request. Once the form is completed, you may submit your request by emailing generalcounsel@qataridiar.com. Please be sure to include \"Request for Access to Information\" in the subject line to help process the request efficiently. Qatar Diar will review and process the request within the specified timeframe, and if additional information is required under Law No. (9) of 2022, the team will contact the applicant. Please note that some information may be subject to legal restrictions or exemptions.",
    ],
    formFields: [],
    showForm: true,
  },
};

export function getPageEn(key: string): InteriorPage | undefined {
  return PAGES_EN[key];
}

export function getProjectEn(slug: string): ProjectDetail | undefined {
  return PROJECTS_EN[slug];
}

export const PROJECT_SLUGS_EN = Object.keys(PROJECTS_EN);
