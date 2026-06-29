import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryDetailView from "@/components/industries/IndustryDetailView";
import { INDUSTRY_MAP } from "@/constants/industries";

/*
 * ─── Data ──────────────────────────────────────────────────────────────────
 * Pull the transportation industry object from the central data map.
 */
const industry = INDUSTRY_MAP["transportation"];

export const metadata: Metadata = {
title: industry.metaTitle,
description: industry.metaDescription,
keywords: [
"transportation extrusion die",
"railway aluminium profile die",
"bus body extrusion tooling",
"transport infrastructure extrusion die",
"lightweight transport profiles",
],
alternates: {
canonical: "/industries/transportation",
},
openGraph: {
title: industry.metaTitle,
description: industry.metaDescription,
url: "/industries/transportation",
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
url: "https://precisiondieeng.com/industries/transportation",
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
item: "https://precisiondieeng.com/industries/transportation",
},
],
},
mainEntity: {
"@type": "Service",
name: "Aluminium Extrusion Dies for Transportation Industry",
description:
"Design and manufacture of extrusion dies for railway coaches, metro systems, commercial vehicles, bus body structures, cargo systems, and lightweight transportation profiles.",
provider: {
"@type": "Organization",
name: "PrecisionDie Engineering",
url: "https://precisiondieeng.com",
},
areaServed: ["India", "Middle East", "East Africa"],
serviceType: "Extrusion Die Manufacturing",
},
};

// ─── Page Component ───────────────────────────────────────────────────────
export default function TransportationIndustryPage() {
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

