import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryDetailView from "@/components/industries/IndustryDetailView";
import { INDUSTRY_MAP } from "@/constants/industries";

/*
 * ─── Data ──────────────────────────────────────────────────────────────────
 * Pull the electronics industry object from the central data map.
 */
const industry = INDUSTRY_MAP["electronics"];

export const metadata: Metadata = {
title: industry.metaTitle,
description: industry.metaDescription,
keywords: [
"electrical aluminium extrusion die",
"busbar extrusion die manufacturer",
"electrical enclosure profile die",
"heat sink extrusion tooling",
"electrical industry extrusion dies",
],
alternates: {
canonical: "/industries/electronics",
},
openGraph: {
title: industry.metaTitle,
description: industry.metaDescription,
url: "/industries/electronics",
images: [
{
url: industry.heroImage,
alt: industry.heroImageAlt,
width: 1200,
height: 630,
},
],
},
twitter: {
card: "summary_large_image",
title: industry.metaTitle,
description: industry.metaDescription,
images: [industry.heroImage],
},
};

const jsonLd = {
"@context": "https://schema.org",
"@type": "WebPage",
name: industry.title,
description: industry.description,
url: "https://precisiondieeng.com/industries/electronics",
image: `https://precisiondieeng.com${industry.heroImage}`,
breadcrumb: {
"@type": "BreadcrumbList",
itemListElement: [
{
"@type": "ListItem",
position: 1,
name: "Home",
item: "https://precisiondieeng.com",
},
{
"@type": "ListItem",
position: 2,
name: "Industries",
item: "https://precisiondieeng.com/industries",
},
{
"@type": "ListItem",
position: 3,
name: industry.title,
item: "https://precisiondieeng.com/industries/electronics",
},
],
},
mainEntity: {
"@type": "Service",
name: "Aluminium Extrusion Dies for Electronics Industry",
description:
"Design and manufacture of precision aluminium extrusion dies for electronic enclosures, busbars, heat sinks, cable management systems, switchgear profiles, and power distribution components.",
provider: {
"@type": "Organization",
name: "PrecisionDie Engineering",
url: "https://precisiondieeng.com",
},
areaServed: ["India", "Middle East", "East Africa"],
serviceType: "Extrusion Die Manufacturing",
},
};

/*
 * ─── Page Component ────────────────────────────────────────────────────────
 */
export default function ElectronicsIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content">
        <IndustryDetailView industry={industry} />
      </main>

      <Footer />
    </>
  );
}