import type {
  NavLink,
  Service,
  Industry,
  ProcessStep,
  Stat,
  USP,
} from "@/types";

// ─── Company Info ──────────────────────────────────────────────────────────
export const COMPANY = {
  name: "MULTI COMPANY SITE",
  tagline: "Engineered to Extrude. Built to Last.",
  address: "927/17 Makarpura Road, near jalaram Wood Industries, Makarpura Vadodara, Gujarat 390010",
  phone: "+91 99886 65543",
  email: "shyammengg61@gmail.com",
  established: 2023,
  gst: "24ABBCP1843Q1Y5",
} as const;

// ─── Navigation ────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Solid Extrusion Dies", href: "/products/solid-dies" },
      { label: "Hollow Extrusion Dies", href: "/products/hollow-dies" },
      { label: "Semi-Hollow Dies", href: "/products/semi-hollow-dies" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Die Design", href: "/services/die-design" },
      { label: "Die Correction", href: "/services/die-correction" },
      { label: "Die Refurbishment", href: "/services/die-refurbishment" },
    ],
  },
   {
    label: "Capabilities",
    href: "/capabilities",
    children: [
      { label: "CAD Design",         href: "/capabilities/cad-design" },
      { label: "VMC Machining",      href: "/capabilities/vmc-machining" },
      { label: "Wire EDM",           href: "/capabilities/wire-edm" },
      { label: "Heat Treatment",     href: "/capabilities/heat-treatment" },
      { label: "Quality Inspection", href: "/capabilities/quality-inspection" },
    ],
  },
  // ─────────────────────────────────────────────────────────────

  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Construction",  href: "/industries/construction" },
      { label: "Automotive",    href: "/industries/automotive" },
      { label: "Electronics",    href: "/industries/electronics" },
      { label: "Solar",         href: "/industries/solar" },
      { label: "Transport",href: "/industries/transport" },
      { label: "Industrial",    href: "/industries/industrial" },
    ],
  },

  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Services ──────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: "solid-dies",
    title: "Solid Extrusion Dies",
    description:
      "High-precision solid dies for rods, bars, angles, channels, and custom profiles. Manufactured from premium H13 tool steel with CNC accuracy to ±0.01mm.",
    icon: "solid",
    href: "/products/solid-dies",
  },
  {
    id: "hollow-dies",
    title: "Hollow Extrusion Dies",
    description:
      "Complex porthole and bridge dies for hollow profiles, tubes, and structural sections. Multi-void configurations with optimised metal flow analysis.",
    icon: "hollow",
    href: "/products/hollow-dies",
  },
  {
    id: "semi-hollow",
    title: "Semi-Hollow Dies",
    description:
      "Precision semi-hollow dies engineered for partially enclosed profiles requiring exact void ratios and consistent wall thickness throughout the run.",
    icon: "semi",
    href: "/products/semi-hollow-dies",
  },
  {
    id: "die-design",
    title: "Die Design",
    description:
      "CAD/CAM driven design using Siemens NX and AutoCAD. Finite element simulation of metal flow before machining begins — zero trial-and-error waste.",
    icon: "design",
    href: "/services/die-design",
  },
  {
    id: "die-correction",
    title: "Die Correction",
    description:
      "On-press corrections and bench corrections to restore profile dimensions, surface finish, and production speeds. Turnaround in 24–48 hours.",
    icon: "correction",
    href: "/services/die-correction",
  },
  {
    id: "die-refurbishment",
    title: "Die Refurbishment",
    description:
      "Full reconditioning — nitriding, polishing, bearing adjustment, and weld repairs — extending die life by up to 300% versus replacement.",
    icon: "refurbish",
    href: "/services/die-refurbishment",
  },
];

// ─── Industries ────────────────────────────────────────────────────────────
export const INDUSTRIES: Industry[] = [
  {
    id: "construction",
    name: "Construction",
    description: "Structural sections, curtain wall systems, window frames",
    icon: "building",
  },
  {
    id: "automotive",
    name: "Automotive",
    description: "Crash rails, heat sinks, roof rails, door frames",
    icon: "car",
  },
  {
    id: "solar",
    name: "Solar Energy",
    description: "Module frames, mounting structures, tracker rails",
    icon: "sun",
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Heatsinks, enclosures, LED light channels",
    icon: "cpu",
  },
  {
    id: "transportation",
    name: "Transportation",
    description: "Railway carriages, bus bodies, marine profiles",
    icon: "train",
  },
  {
    id: "industrial",
    name: "Industrial",
    description: "Conveyor components, machine frames, hydraulic cylinders",
    icon: "factory",
  },
];

// ─── Manufacturing Process ─────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Profile Analysis",
    description:
      "We review your extrusion profile drawings and alloy specifications. Our engineers identify critical dimensions, tolerances, and potential flow issues before any metal is cut.",
    duration: "Day 1",
  },
  {
    step: 2,
    title: "CAD Die Design",
    description:
      "Full 3D die design in Siemens NX with metal-flow simulation. Die bearing lengths, pocket geometry, and support pillar placement are optimised digitally.",
    duration: "Day 2–3",
  },
  {
    step: 3,
    title: "Steel Procurement",
    description:
      "H13 hot-work tool steel blanks are sourced from certified mills. Each billet is ultrasonic tested for internal defects before machining begins.",
    duration: "Day 3–4",
  },
  {
    step: 4,
    title: "VMC Machining",
    description:
      "High-speed VMC milling and EDM (Electrical Discharge Machining) for pocket and bearing detail. Accuracy held to ±0.005mm on critical dimensions.",
    duration: "Day 4–6",
  },
  {
    step: 5,
    title: "Heat Treatment",
    description:
      "Vacuum nitriding at 510°C for 20–24 hours achieves a surface hardness of 1000–1100 HV. This maximises wear resistance and die life at operating temperatures.",
    duration: "Day 7",
  },
  {
    step: 6,
    title: "Quality Inspection",
    description:
      "CMM (Coordinate Measuring Machine) inspection against drawing tolerances. Surface finish measured with profilometer. Trial extrusion report issued with each die.",
    duration: "Day 8",
  },
];

// ─── Statistics ────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  {
    id: "experience",
    value: 3,
    suffix: "+",
    label: "Years Experience",
    description: "Serving the aluminium extrusion industry since 2023",
  },
  {
    id: "dies",
    value: 1500,
    suffix: "+",
    label: "Dies Manufactured",
    description: "Across solid, hollow, and semi-hollow categories and as per requirements",
  },
  {
    id: "clients",
    value: 10,
    suffix: "+",
    label: "Active Clients",
    description: "Extruders across India",
  },
  {
    id: "accuracy",
    value: 0.005,
    suffix: "mm",
    label: "VMC Accuracy",
    description: "Tolerance held on all critical profile dimensions",
  },
];

// ─── Why Choose Us ─────────────────────────────────────────────────────────
export const USPS: USP[] = [
  {
    id: "precision",
    title: "Sub-Micron Precision",
    description:
      "VMC machining centres and EDM ensure die bearings are within ±0.005mm — eliminating profile twist, bow, and dimensional drift on your press.",
    icon: "crosshair",
  },
  {
    id: "turnaround",
    title: "8-Day Standard Lead Time",
    description:
      "Our streamlined workflow and in-house heat treatment deliver a complete die — from blank to nitrided and inspected — in 8 working days.",
    icon: "clock",
  },
  {
    id: "steel",
    title: "Certified H13 Tool Steel",
    description:
      "Every die starts from ultrasonic-tested, mill-certified H13 steel billets. No recycled or second-grade material enters our facility.",
    icon: "shield",
  },
  {
    id: "simulation",
    title: "Metal Flow Simulation",
    description:
      "Digital simulation before machining catches flow imbalances, dead zones, and surface defects before they cost you press time.",
    icon: "chart",
  },
  
  {
    id: "warranty",
    title: "Performance Warranty",
    description:
      "If a newly supplied die requires correction to achieve the agreed profile specification, we perform the necessary rework without labour charges. Only the cost of any additional material used during the correction process may be charged.",
    icon: "badge",
  },
];
