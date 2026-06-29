import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryDetailView from "@/components/industries/IndustryDetailView";
import { INDUSTRY_MAP } from "@/constants/industries";

/*
 * ─── Data ──────────────────────────────────────────────────────────────────
 * Pull the solar industry object from the central data map.
 */
const industry = INDUSTRY_MAP["solar"];

export const metadata: Metadata = {
title: industry.metaTitle,
description: industry.metaDescription,
keywords: [
"solar panel frame extrusion die",
"solar mounting profile die",
"solar aluminium extrusion tooling",
"renewable energy profile dies",
"solar industry extrusion die manufacturer",
],
alternates: {
canonical: "/industries/solar",
},
openGraph: {
title: industry.metaTitle,
description: industry.metaDescription,
url: "/industries/solar",
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
url: "https://precisiondieeng.com/industries/solar",
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
item: "https://precisiondieeng.com/industries/solar",
},
],
},
mainEntity: {
"@type": "Service",
name: "Aluminium Extrusion Dies for Solar Industry",
description:
"Design and manufacture of aluminium extrusion dies for solar panel frames, mounting rails, tracker systems, support structures, and renewable energy applications requiring lightweight, corrosion-resistant profiles.",
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
export default function SolarIndustryPage() {
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
