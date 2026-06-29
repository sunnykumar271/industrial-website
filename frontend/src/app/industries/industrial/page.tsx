import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryDetailView from "@/components/industries/IndustryDetailView";
import { INDUSTRY_MAP } from "@/constants/industries";

/*
 * ─── Data ──────────────────────────────────────────────────────────────────
 * Pull the industrial industry object from the central data map.
 */

const industry = INDUSTRY_MAP["industrial"];

export const metadata: Metadata = {
title: industry.metaTitle,
description: industry.metaDescription,
keywords: [
"industrial extrusion die manufacturer",
"machine frame extrusion die",
"industrial aluminium profile tooling",
"automation profile extrusion die",
"custom industrial extrusion dies",
],
alternates: {
canonical: "/industries/industrial",
},
openGraph: {
title: industry.metaTitle,
description: industry.metaDescription,
url: "/industries/industrial",
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
url: "https://precisiondieeng.com/industries/industrial",
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
item: "https://precisiondieeng.com/industries/industrial",
},
],
},
mainEntity: {
"@type": "Service",
name: "Aluminium Extrusion Dies for Industrial Applications",
description:
"Design and manufacture of precision extrusion dies for machine frames, automation systems, conveyor structures, industrial equipment, modular assemblies, and custom engineering profiles.",
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

