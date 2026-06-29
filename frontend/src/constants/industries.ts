import type { IndustryDetail } from "@/types/pages";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTRUCTION
// ─────────────────────────────────────────────────────────────────────────────
const construction: IndustryDetail = {
  slug: "construction",
  title: "Construction & Architecture",
  tagline: "Structural sections, curtain wall systems, and architectural profiles for the built environment.",
  description:
    "The construction industry is the largest consumer of aluminium extrusions globally. From window frames and curtain wall systems to structural columns and flooring sections, the profiles demand consistent dimensional accuracy across long production runs. Our dies are designed for high-volume output with minimal correction cycles — reducing press downtime on large construction projects.",
  heroImage: "/images/industries/construction.jpg",
  heroImageAlt: "Aluminium curtain wall facade on a modern commercial building",
  icon: "building",
  color: "bg-blue-600",
  profiles: [
    { name: "Window & Door Frames", description: "Single and double-glazed frame sections with drainage channels and thermal break slots", icon: "frame" },
    { name: "Curtain Wall Mullions", description: "Vertical and horizontal members for unitised and stick-built curtain wall systems", icon: "grid" },
    { name: "Structural Sections", description: "Angles, channels, T-sections, and hollow rectangular sections for load-bearing applications", icon: "structure" },
    { name: "Flooring & Decking", description: "Anti-slip decking planks, access floor sections, and stair nosing profiles", icon: "layers" },
    { name: "Roofing Systems", description: "Standing seam support sections, coping covers, and fascia extrusions", icon: "home" },
    { name: "Cladding Profiles", description: "Rainscreen panel support sections, cassette frame sections, and drainage profiles", icon: "panel" },
  ],
  stats: [
    { value: "40%", label: "of our dies serve construction" },
    { value: "6063", label: "primary alloy — T5 & T6 temper" },
    { value: "15m+", label: "longest profile length supported" },
    { value: "48h", label: "correction turnaround for urgent jobs" },
  ],
  challenges: [
    "Long production runs demand consistent bearing surfaces with no pick-up",
    "Thermal break slots require tight width tolerances (±0.05mm) for polyamide strip fit",
    "Curtain wall mullions must be straight to < 1mm per 6m — zero twist acceptable",
    "Multi-chamber hollow sections need balanced flow through all voids simultaneously",
  ],
  solutions: [
    "Mirror-polished bearings to Ra 0.2μm reduce pick-up risk on long runs",
    "Precision EDM machining of thermal break slots holds ±0.02mm width tolerance",
    "Metal-flow simulation eliminates twist before the die is machined",
    "Porthole die weld chamber geometry optimised per void count and alloy",
  ],
  metaTitle: "Aluminium Extrusion Dies for Construction Industry — Window, Curtain Wall & Structural",
  metaDescription:
    "Precision extrusion dies for construction profiles — window frames, curtain wall mullions, structural sections. CMM verified, mirror polished. Vadodara, Gujarat.",
};

// ─────────────────────────────────────────────────────────────────────────────
// AUTOMOTIVE
// ─────────────────────────────────────────────────────────────────────────────
const automotive: IndustryDetail = {
  slug: "automotive",
  title: "Automotive & EV",
  tagline: "Crash management systems, battery enclosures, and structural body profiles for modern vehicles.",
  description:
    "Automotive extrusion dies are among the most technically demanding we produce. Tight tolerances, complex multi-void geometries, and the requirement for 100% dimensional repeatability across millions of parts make automotive tooling a specialised discipline. We supply dies for passenger cars, commercial vehicles, and the rapidly growing EV sector — particularly battery tray sections and crash management beams.",
  heroImage: "/images/industries/Automotive.jpg",
  heroImageAlt: "Aluminium automotive crash management beam extrusion profile",
  icon: "car",
  color: "bg-red-600",
  profiles: [
    { name: "Crash Management Beams", description: "Front and rear bumper beam sections with designed crush zones and precise wall thickness", icon: "shield" },
    { name: "Battery Tray Sections", description: "Multi-void floor sections for EV battery enclosures — flat, straight, and watertight", icon: "battery" },
    { name: "Door Sill & Rocker Sections", description: "Structural rocker panels and door sill extrusions for side-impact protection", icon: "car" },
    { name: "Roof Rails & Crossmembers", description: "Hollow roof rail sections and body crossmember profiles for vehicle structure", icon: "frame" },
    { name: "Seat Frame Sections", description: "Seat track profiles, back frame sections, and headrest support tubes", icon: "layers" },
    { name: "Heat Shields & Thermal Management", description: "Heat sink sections and thermal management channels for EV powertrains", icon: "cpu" },
  ],
  stats: [
    { value: "±0.05mm", label: "wall thickness tolerance on crash beams" },
    { value: "6082", label: "primary alloy — T6 temper" },
    { value: "100%", label: "CMM inspection on automotive dies" },
    { value: "5-axis", label: "CNC machining for complex geometries" },
  ],
  challenges: [
    "Crash beam wall thickness must be held to ±0.05mm for consistent energy absorption",
    "Battery tray sections must be perfectly flat with no bow across 2m+ lengths",
    "High-strength 6082-T6 alloy generates higher press loads — die must handle cyclic stress",
    "EV battery profiles often have 8–12 voids with varying wall thicknesses simultaneously",
  ],
  solutions: [
    "FEA stress analysis on die body and tongue confirms fatigue life before machining",
    "Flow velocity balancing in weld chamber prevents differential elongation (bow)",
    "H13 steel hardness optimised at 48-50 HRC — tough enough for 6082, not brittle",
    "Multi-void porthole die design with individual pocket sizing per void for balanced flow",
  ],
  metaTitle: "Aluminium Extrusion Dies for Automotive & EV — Crash Beams, Battery Trays",
  metaDescription:
    "Precision automotive extrusion dies for crash management, EV battery trays, and structural body profiles. ±0.05mm tolerance. CMM verified. Vadodara, Gujarat.",
};

// ─────────────────────────────────────────────────────────────────────────────
// ELECTRICAL
// ─────────────────────────────────────────────────────────────────────────────
const electronics: IndustryDetail = {
  slug: "electronics",
  title: "Electrical & Electronics",
  tagline: "Heatsinks, busbars, LED channels, and enclosure profiles for electrical and electronic applications.",
  description:
    "Electrical and electronics applications demand the highest surface finish quality and the tightest dimensional tolerances of any sector. Heatsink fins must be straight and evenly spaced to within fractions of a millimetre — any variation in fin gap reduces thermal performance. Busbar profiles must have consistent cross-sectional area throughout to ensure uniform current carrying capacity. We specialise in the high-precision dies these applications require.",
  heroImage: "/images/industries/Electrical.jpg",
  heroImageAlt: "Precision aluminium heatsink extrusion profile with fine fins",
  icon: "zap",
  color: "bg-yellow-500",
  profiles: [
    { name: "Heatsinks & Thermal Management", description: "Pin-fin and straight-fin heatsinks for power electronics, inverters, and motor drives", icon: "cpu" },
    { name: "Busbars & Conductors", description: "Flat and shaped busbar profiles for switchgear, distribution boards, and transformers", icon: "zap" },
    { name: "LED Light Channels", description: "Surface mount and recessed LED channel bodies with optical diffuser slots", icon: "sun" },
    { name: "Enclosures & Housing", description: "Electronic equipment enclosures, DIN rail sections, and panel housing profiles", icon: "box" },
    { name: "Cable Management", description: "Cable tray sections, wireway profiles, and cable duct extrusions", icon: "cable" },
    { name: "Motor & Generator Components", description: "Stator slot liners, cooling fins, and motor frame sections", icon: "settings" },
  ],
  stats: [
    { value: "Ra 0.2μm", label: "surface finish on heatsink bearings" },
    { value: "±0.02mm", label: "fin gap tolerance on heatsinks" },
    { value: "1xxx–6xxx", label: "alloy series supported" },
    { value: "0.5mm", label: "minimum wall thickness achieved" },
  ],
  challenges: [
    "Heatsink fin gaps must be uniform to ±0.02mm — any variation affects thermal resistance",
    "Thin fins (0.8–1.2mm) are prone to drag marks if bearing finish is not mirror quality",
    "Busbar profiles need consistent cross-section area — wall variation causes hot spots",
    "LED channels require precise diffuser slot width for snap-fit optical components",
  ],
  solutions: [
    "Electro-discharge machined heatsink bearing slots to ±0.005mm accuracy",
    "Hand-lapped bearing surfaces to Ra 0.2μm before nitriding",
    "Bearing length precisely balanced per fin to equalise metal flow velocity",
    "Diffuser slots machined with wire EDM for burr-free, accurate edges",
  ],
  metaTitle: "Aluminium Extrusion Dies for Electrical Industry — Heatsinks, Busbars, LED Channels",
  metaDescription:
    "High-precision extrusion dies for heatsinks, busbars, LED channels, and enclosures. Ra 0.2μm surface finish, ±0.02mm fin gap tolerance. Vadodara, Gujarat.",
};

// ─────────────────────────────────────────────────────────────────────────────
// SOLAR
// ─────────────────────────────────────────────────────────────────────────────
const solar: IndustryDetail = {
  slug: "solar",
  title: "Solar Energy",
  tagline: "Module frames, mounting structures, and tracker rails engineered for 25-year outdoor service life.",
  description:
    "The solar energy sector is one of the fastest-growing consumers of aluminium extrusions in India and globally. Module frames, rail mounting systems, torque tubes, and carport structures all require high-volume, consistent extrusion from dies that run for extended periods with minimal press stoppages. We have designed and supplied dies for over 50 solar module frame profiles across major Indian module manufacturers.",
  heroImage: "/images/industries/Solar-energy.jpg",
  heroImageAlt: "Aluminium solar module frame profiles in a utility-scale solar installation",
  icon: "sun",
  color: "bg-orange-500",
  profiles: [
    { name: "Solar Module Frames", description: "Portrait and landscape module frame sections — 35mm, 40mm, 45mm, and 50mm frame depths", icon: "sun" },
    { name: "Mounting Rail Systems", description: "Slotted mounting rails for rooftop and ground-mount systems — nut-and-bolt and bonding compatible", icon: "rail" },
    { name: "Torque Tubes & Trackers", description: "Hollow torque tube sections for single-axis tracker systems — high stiffness-to-weight ratio", icon: "rotate" },
    { name: "Carport Structures", description: "Beam, purlin, and rafter sections for solar carport and canopy structures", icon: "home" },
    { name: "Junction Box Support", description: "Profiles for junction box mounting, cable management, and grounding clips", icon: "box" },
    { name: "Inverter & Equipment Enclosures", description: "Outdoor-rated enclosure sections and heat dissipation profiles for inverter housings", icon: "cpu" },
  ],
  stats: [
    { value: "50+", label: "solar frame profiles designed" },
    { value: "6063-T5", label: "standard alloy for module frames" },
    { value: "2GW+", label: "capacity served by our dies" },
    { value: "8 days", label: "frame die delivery — standard" },
  ],
  challenges: [
    "Module frame corner keys require extremely tight slot width tolerance for watertight assembly",
    "High-volume frame production (10,000+ kg/day) demands long bearing life with no pick-up",
    "Anodising quality depends on die surface — die lines create visible streaks after anodising",
    "Tracker torque tubes must be straight and twist-free for accurate sun-tracking",
  ],
  solutions: [
    "Corner key slots machined with wire EDM to ±0.02mm for interference-free assembly",
    "Extended nitriding cycle (24+ hours) increases case depth for longer bearing life",
    "Hand-polished bearings to Ra 0.2μm eliminate die lines before anodising",
    "Metal-flow simulation eliminates differential speed between tube walls — preventing twist",
  ],
  metaTitle: "Aluminium Extrusion Dies for Solar Industry — Module Frames, Rails, Tracker Tubes",
  metaDescription:
    "Precision extrusion dies for solar module frames, mounting rails, and tracker torque tubes. 50+ solar profiles supplied. 8-day delivery. Vadodara, Gujarat.",
};

// ─────────────────────────────────────────────────────────────────────────────
// TRANSPORTATION
// ─────────────────────────────────────────────────────────────────────────────
const transportation: IndustryDetail = {
  slug: "transportation",
  title: "Transportation & Rail",
  tagline: "Structural floor sections, body panels, and safety profiles for rail, bus, and marine transport.",
  description:
    "Transportation applications — particularly rail and bus body manufacturing — demand large, complex hollow sections with multiple voids, tight flatness tolerances, and consistent mechanical properties. Railway carriage floor sections can be 400–500mm wide, with 8–12 internal voids, all requiring balanced metal flow. We have designed dies for metro, suburban rail, and intercity coach body sections for manufacturers across India.",
  heroImage: "/images/industries/Transportation.jpg",
  heroImageAlt: "Wide aluminium floor panel extrusion for railway carriage application",
  icon: "train",
  color: "bg-indigo-600",
  profiles: [
    { name: "Railway Floor Sections", description: "Wide multi-void floor panels (up to 500mm) for metro and suburban rail carriages", icon: "layers" },
    { name: "Coach Body Pillars & Rails", description: "Structural pillars, cant rail, and body side rail sections for coach body frames", icon: "structure" },
    { name: "Bus Body Sections", description: "Roof sections, floor bearers, and side panel extrusions for bus body manufacturing", icon: "car" },
    { name: "Marine Deck Sections", description: "Anti-slip decking planks and structural sections for marine and offshore applications", icon: "anchor" },
    { name: "Overhead Luggage Racks", description: "Cantilever rack sections and ceiling panel support profiles for passenger vehicles", icon: "layers" },
    { name: "Door & Window Systems", description: "Sliding door frame sections and passenger window surround profiles", icon: "frame" },
  ],
  stats: [
    { value: "500mm", label: "widest floor section die produced" },
    { value: "12", label: "maximum voids in a single die" },
    { value: "15″", label: "largest circle size in our range" },
    { value: "6005A", label: "primary structural alloy for rail" },
  ],
  challenges: [
    "Wide floor sections (400–500mm) require large-diameter dies with complex porthole layouts",
    "12-void floor panels demand perfectly balanced flow across all chambers simultaneously",
    "6005A-T6 alloy used for structural rail sections — higher strength but more demanding on dies",
    "Floor panels must be flat to < 0.5mm across 500mm width for floor fitting and sealing",
  ],
  solutions: [
    "15-inch circle dies manufactured in-house with 5-axis machining for complex porthole geometry",
    "Individual pocket sizing per void with simulation verification before machining",
    "H13 die steel specification optimised for 6005A — hardness and toughness balanced",
    "Bearing length gradient across die width compensates for press temperature differential",
  ],
  metaTitle: "Aluminium Extrusion Dies for Rail & Transport — Floor Sections, Coach Profiles",
  metaDescription:
    "Large aluminium extrusion dies for railway floor sections, bus body profiles, and marine applications. Up to 500mm width, 12-void dies. Vadodara, Gujarat.",
};

// ─────────────────────────────────────────────────────────────────────────────
// INDUSTRIAL EQUIPMENT
// ─────────────────────────────────────────────────────────────────────────────
const industrial: IndustryDetail = {
  slug: "industrial",
  title: "Industrial Equipment",
  tagline: "Machine frames, conveyor components, hydraulic cylinders, and automation profiles.",
  description:
    "Industrial equipment applications span the full range of extrusion complexity — from simple conveyor side rails to complex multi-void pneumatic cylinder bodies. What unites them is the requirement for dimensional repeatability: when a profile is used as a linear guide, a hydraulic bore, or a T-slot machine frame, the dimensional accuracy of the extrusion directly determines the precision of the finished machine. Our industrial dies are held to the tightest tolerances we produce.",
  heroImage: "/images/industries/industrial-equipment.jpg",
  heroImageAlt: "Aluminium T-slot machine frame extrusion profiles in industrial automation",
  icon: "factory",
  color: "bg-slate-600",
  profiles: [
    { name: "T-Slot Machine Frames", description: "Structural machine frame sections with T-slots for modular fixturing and machine building", icon: "grid" },
    { name: "Pneumatic & Hydraulic Cylinders", description: "Precision bore cylinder body sections — round and non-round profiles with mirror-finish bores", icon: "cylinder" },
    { name: "Conveyor Components", description: "Side frames, cross-members, and guide rail sections for belt and roller conveyor systems", icon: "move" },
    { name: "Linear Guide Rails", description: "Precision guide rail sections for linear motion systems — flatness and straightness critical", icon: "rail" },
    { name: "Automation Profiles", description: "Modular aluminium profile systems for robot guarding, safety barriers, and cell structures", icon: "settings" },
    { name: "Heat Exchanger Sections", description: "Multi-port micro-channel tubes and manifold sections for industrial heat exchangers", icon: "wind" },
  ],
  stats: [
    { value: "±0.005mm", label: "bore tolerance on cylinder sections" },
    { value: "H9", label: "bore tolerance class achievable" },
    { value: "Ra 0.4μm", label: "bore surface finish on cylinders" },
    { value: "6061-T6", label: "primary alloy for structural frames" },
  ],
  challenges: [
    "Pneumatic cylinder bores require Ra 0.4μm surface finish directly from extrusion — no machining",
    "T-slot geometry must accept standard M5/M6/M8 T-nuts without adjustment",
    "Linear guide rails must be straight to < 0.1mm per metre — no bow, no twist",
    "Multi-port heat exchanger sections have wall thickness < 0.4mm between ports",
  ],
  solutions: [
    "Cylinder bore bearings lapped to Ra 0.2μm — extrusion finish meets H9 bore tolerance",
    "T-slot width and depth held to ±0.05mm with wire EDM machining",
    "Guide rail dies carry metal-flow equalisation pockets to prevent differential elongation",
    "Sub-0.5mm walls achieved with precisely balanced flow velocity and EDM pocket machining",
  ],
  metaTitle: "Aluminium Extrusion Dies for Industrial Equipment — T-Slots, Cylinders, Conveyors",
  metaDescription:
    "Precision industrial extrusion dies for machine frames, pneumatic cylinders, and conveyor profiles. ±0.005mm accuracy. Mirror bore finish. Vadodara, Gujarat.",
};

// ─── Master Map ───────────────────────────────────────────────────────────────
export const INDUSTRY_MAP: Record<string, IndustryDetail> = {
  construction,
  automotive,
  electronics,
  solar,
  transportation,
  industrial,
};

export const INDUSTRY_SLUGS = [
  "construction",
  "automotive",
  "electronics",
  "solar",
  "transportation",
  "industrial",
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];