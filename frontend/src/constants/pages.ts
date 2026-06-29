import type { CapabilityDetail } from "@/types/pages";
import type { GalleryImage } from "@/types/pages";
import type { QualityStandard, QualityProcess, QualityEquipment } from "@/types/pages";

// ═════════════════════════════════════════════════════════════════════════════
// CAPABILITIES DATA
// ═════════════════════════════════════════════════════════════════════════════

export const CAPABILITIES: CapabilityDetail[] = [
  {
    slug: "cad-design",
    title: "CAD & Die Design",
    shortTitle: "CAD Design",
    tagline: "Full 3D die modelling with metal-flow simulation in Siemens NX before any steel is cut.",
    description:
      "Our die design capability begins with your profile DXF or sample and ends with a fully simulated, customer-approved 3D die model. We use Siemens NX for 3D modelling and AutoCAD for 2D approval drawings. Metal-flow simulation maps velocity fields across the profile cross-section, identifying imbalanced flow zones before machining. This eliminates bow, twist, and speed differential problems at the design stage — not on the press.",
    heroImage: "/images/capabilities/Hollow_die_Design.jpg",
    heroImageAlt: "Engineer reviewing aluminium extrusion die CAD model on dual monitors",
    icon: "design",
    specs: [
      { label: "CAD Software", value: "Siemens NX, AutoCAD 2024" },
      { label: "Simulation Type", value: "Metal-flow velocity & pressure mapping" },
      { label: "Input Formats", value: "DXF, DWG, STEP, PDF, Physical sample" },
      { label: "Output Formats", value: "3D STEP model + 2D approval drawing" },
      { label: "Design Turnaround", value: "2–3 working days" },
      { label: "Revision Cycles", value: "Unlimited — at no charge before machining" },
      { label: "File Retention", value: "Indefinite — all designs archived" },
    ],
    features: [
      "Bearing length calculation per profile wall zone",
      "Pocket geometry and support pillar placement",
      "Porthole and bridge die weld chamber design",
      "Tongue stress analysis for semi-hollow profiles",
      "Back relief and exit geometry optimisation",
      "Customer approval drawing with all key dimensions",
    ],
    outcomes: [
      "First-trial success rate > 85% on standard profiles",
      "Zero twist or bow problems caused by design errors",
      "Permanent design record for reorder accuracy",
      "Design files available for customer's own tooling register",
    ],
    metaTitle: "Aluminium Extrusion Die CAD Design — Siemens NX & Metal Flow Simulation",
    metaDescription:
      "Professional extrusion die design using Siemens NX with metal-flow simulation. Bearing calculation, 3D modelling, 2–3 day turnaround. Vadodara, Gujarat.",
  },
 {
  slug: "vmc-machining",
  title: "VMC Machining",
  shortTitle: "VMC Machining",
  tagline: "High-precision VMC machining delivering consistent accuracy for aluminium extrusion die components.",

  description:
    "Our machining facility is equipped with advanced Vertical Machining Centers (VMCs) for manufacturing aluminium extrusion dies and critical die components. All machining operations are performed directly from Siemens NX-generated CAM programs to ensure dimensional consistency and eliminate manual programming errors. Every die component undergoes rough machining, semi-finishing, and finish machining as separate operations, with in-process inspections conducted between stages to maintain accuracy and repeatability.",

  heroImage: "/images/capabilities/Vmc_Machining.jpg",
  heroImageAlt: "VMC machine machining an aluminium extrusion die component from H13 tool steel",

  icon: "cpu",

  specs: [
    { label: "Machine Type", value: " Vertical Machining Centers (VMC)" },
    { label: "Die Tolerance", value: "±0.005mm on critical dimensions" },
    { label: "Max Die Circle Size", value: "15-inch (381mm) diameter" },
    { label: "Spindle Speed", value: "Up to 8,000–12,000 RPM" },
    { label: "Work Material", value: "H13 Tool Steel" },
    { label: "CAM Software", value: "Siemens NX CAM" },
    { label: "Inspection Method", value: "In-process dimensional verification" },
  ],

  features: [
    "Dedicated roughing, semi-finishing, and finishing operations",
    "Siemens NX CAM programming directly from 3D models",
    "Precision machining of feeder ports, pockets, and die profiles",
    "Coolant-assisted machining for improved tool life and surface finish",
    "Rigid tapping for accurate flange and mounting hole production",
    "Consistent dimensional control through stage-wise inspection",
  ],

  outcomes: [
    "±0.005mm accuracy on critical die dimensions",
    "Excellent repeatability for replacement and repeat-order dies",
    "Improved surface finish prior to polishing and lapping",
    "Reliable machining of complex extrusion die geometries",
  ],

  metaTitle:
    "VMC Machining for Aluminium Extrusion Dies | Precision Die Manufacturing | Vadodara",

  metaDescription:
    "Precision VMC machining of aluminium extrusion dies using Siemens NX CAM and H13 tool steel. Accurate, repeatable die manufacturing in Vadodara, Gujarat.",
},
  {
    slug: "wire-edm",
    title: "Wire EDM",
    shortTitle: "Wire EDM",
    tagline: "Electrical discharge machining for bearing slots, sharp corners, and ultra-thin features impossible to cut.",
    description:
      "Wire-cut EDM (Electrical Discharge Machining) is essential for features that cannot be produced by conventional milling — bearing slots on hollow die mandrels, sharp internal corners, very narrow slots (< 0.5mm), and non-circular bore sections. Our Fanuc and Mitsubishi wire EDM machines achieve ±0.003mm positional accuracy with surface finishes as fine as Ra 0.2μm in a single pass. Heatsink fin slots, thermal break grooves, and precision bore profiles are all machined by wire EDM.",
    heroImage: "/images/capabilities/Wire_Edm.jpg",
    heroImageAlt: "Wire EDM machine cutting precision slot in aluminium extrusion die bearing",
    icon: "zap",
    specs: [
      { label: "Machine Type", value: "Wire-cut EDM — Fanuc & Mitsubishi" },
      { label: "Positional Accuracy", value: "±0.003mm" },
      { label: "Surface Finish", value: "Ra 0.2μm (mirror mode)" },
      { label: "Wire Diameter", value: "0.1mm – 0.3mm brass wire" },
      { label: "Min Slot Width", value: "0.12mm (with 0.1mm wire)" },
      { label: "Max Workpiece Height", value: "300mm (die thickness)" },
      { label: "Taper Cutting", value: "Up to ±30° taper for relief angles" },
    ],
    features: [
      "No cutting force — ideal for thin walls and fragile features",
      "Sharp internal corners to R0.05mm — impossible on milling centres",
      "Taper cutting for die bearing relief angles in single operation",
      "Skim passes improve surface finish without dimensional change",
      "Unmanned overnight running for complex profiles",
      "Suitable for fully hardened H13 steel after nitriding if correction needed",
    ],
    outcomes: [
      "Heatsink fin slots to ±0.01mm width — consistent thermal performance",
      "Thermal break slots to ±0.02mm for positive polyamide strip fit",
      "Cylinder bore sections to H9 tolerance directly from wire EDM",
      "Die corrections possible on fully nitrided dies without re-heat-treating",
    ],
    metaTitle: "Wire EDM Die Machining — Precision Slots, Bearings & Bore Sections — Vadodara",
    metaDescription:
      "Wire-cut EDM for extrusion die bearing slots, heatsink fins, and precision bores. ±0.003mm accuracy, Ra 0.2μm finish. Fanuc & Mitsubishi machines. Vadodara.",
  },
  {
    slug: "heat-treatment",
    title: "Heat Treatment & Nitriding",
    shortTitle: "Heat Treatment",
    tagline: "In-house vacuum nitriding to 1000–1100 HV — the critical final step that determines die life.",
    description:
      "Vacuum nitriding is the final process step before a die is ready for press, and it is perhaps the most critical. A correctly nitrided die has a surface hardness of 1000–1100 HV with a white layer of 0.08–0.15mm — providing exceptional wear resistance while retaining the toughness of the H13 core. Over-nitriding produces a brittle white layer that spalls under load; under-nitriding leaves the bearing surfaces too soft, leading to rapid wear and pick-up. Our in-house vacuum nitriding furnace gives us precise control over both.",
    heroImage: "/images/capabilities/heat-treatment.jpg",
    heroImageAlt: "Vacuum nitriding furnace with aluminium extrusion dies being loaded for treatment",
    icon: "flame",
    specs: [
      { label: "Process Type", value: "Vacuum gas nitriding" },
      { label: "Treatment Temperature", value: "510°C ± 5°C" },
      { label: "Cycle Duration", value: "20–24 hours (standard)" },
      { label: "Surface Hardness", value: "1000–1100 HV" },
      { label: "White Layer Thickness", value: "0.08–0.15mm" },
      { label: "Diffusion Zone Depth", value: "0.3–0.5mm" },
      { label: "Furnace Load Capacity", value: "Up to 200kg per charge" },
    ],
    features: [
      "Vacuum process — no salt bath contamination or distortion",
      "Atmosphere composition controlled throughout cycle",
      "Temperature uniformity ±5°C across furnace volume",
      "White layer thickness measured on sacrificial test piece per batch",
      "Controlled cool-down rate to prevent thermal stress cracks",
      "Re-nitriding service for refurbished dies",
    ],
    outcomes: [
      "Die life 3–5× longer than non-nitrided H13 dies",
      "Pick-up resistance — aluminium does not bond to nitrided surface",
      "Consistent hardness batch to batch — documented per furnace load",
      "Thermal fatigue resistance for high-speed extrusion applications",
    ],
    metaTitle: "Vacuum Nitriding for Extrusion Dies — In-House Heat Treatment, Vadodara",
    metaDescription:
      "In-house vacuum nitriding of aluminium extrusion dies to 1000–1100 HV. Controlled white layer 0.08–0.15mm. 510°C, 24-hour cycle. Vadodara, Gujarat.",
  },
  {
    slug: "quality-inspection",
    title: "Quality Inspection",
    shortTitle: "Quality Inspection",
    tagline: "CMM verification, surface profilometry, and hardness testing on every die before dispatch.",
    description:
      "Quality inspection at PrecisionDie Engineering is not a final gate — it is woven into every stage of manufacture. In-process measurement occurs after rough machining, after semi-finish machining, and after each EDM operation. Final inspection uses our Zeiss CMM to verify all critical dimensions against the approved drawing. A dimensional report is issued with every die. No die leaves our facility without a documented inspection record.",
    heroImage: "/images/capabilities/quality-inspection.jpg",
    heroImageAlt: "CMM coordinate measuring machine inspecting aluminium extrusion die bearing dimensions",
    icon: "crosshair",
    specs: [
      { label: "CMM Make/Model", value: "Zeiss Contura — 700×1000×600mm volume" },
      { label: "CMM Accuracy", value: "±0.001mm" },
      { label: "Surface Profilometer", value: "Mitutoyo SJ-210 — Ra, Rz measurement" },
      { label: "Hardness Tester", value: "Vickers HV10 — for nitriding verification" },
      { label: "Profile Projector", value: "30× magnification optical comparator" },
      { label: "Dimensional Report", value: "Issued with every new die and correction" },
      { label: "Inspection Stage", value: "After rough, semi-finish, EDM, and nitriding" },
    ],
    features: [
      "CMM measurement against approved 3D model — no interpretation errors",
      "GD&T report with true position and profile of a surface callouts",
      "Surface roughness measured on bearing faces before dispatch",
      "Hardness test on every nitrided die — white layer thickness confirmed",
      "Profile projector for rapid 2D profile check at workpiece",
      "All inspection data stored against die serial number permanently",
    ],
    outcomes: [
      "100% of dies inspected — not sample-based",
      "Dimensional non-conformances caught before dispatch — not at customer's press",
      "Permanent inspection record enables root-cause analysis on corrections",
      "Customer receives hard-copy report with every die — traceable evidence",
    ],
    metaTitle: "Extrusion Die Quality Inspection — CMM Verification, Dimensional Reports",
    metaDescription:
      "100% CMM inspection of aluminium extrusion dies. Zeiss Contura CMM, surface profilometry, hardness testing. Dimensional report with every die. Vadodara.",
  },
];

export const CAPABILITY_MAP = Object.fromEntries(
  CAPABILITIES.map((c) => [c.slug, c])
) as Record<string, CapabilityDetail>;

// ═════════════════════════════════════════════════════════════════════════════
// GALLERY DATA
// ═════════════════════════════════════════════════════════════════════════════

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "g01", src: "/images/gallery/Solid_Die.jpg", alt: "Precision solid extrusion die for angle profile", title: "Solid Die — Structural Angle", category: "solid-dies", width: 800, height: 600 },
  { id: "g02", src: "/images/gallery/Hollow_Die.jpg", alt: "Porthole hollow die assembly showing mandrel and die", title: "Porthole Hollow Die Assembly", category: "hollow-dies", width: 800, height: 600 },
  { id: "g03", src: "/images/gallery/Solid_LED.webp", alt: "Multi-void solid die for LED heatsink profile", title: "Solid Die — LED Heatsink", category: "solid-dies", width: 800, height: 600 },
  { id: "g04", src: "/images/gallery/Semi-hollow.jpg", alt: "Semi-hollow die for C-channel with lips profile", title: "Semi-Hollow Die — Lipped Channel", category: "semi-hollow", width: 800, height: 600 },
  { id: "g05", src: "/images/gallery/Large-Hollow-Die.webp", alt: "Large hollow die for rectangular hollow section", title: "Hollow Die — Box Section", category: "hollow-dies", width: 800, height: 600 },
  { id: "g06", src: "/images/gallery/Complex-Solid-die.jpg", alt: "Complex solid die for solar module frame profile", title: "Solid Die — Solar Module Frame", category: "solid-dies", width: 800, height: 600 },
  { id: "g07", src: "/images/gallery/Multi-void_Hollow-Die.jpg", alt: "Multi-void hollow die for railway floor panel section", title: "Hollow Die — Railway Floor Panel", category: "hollow-dies", width: 800, height: 600 },
  { id: "g08", src: "/images/gallery/Semi-hollow-die-T-slot.jpg", alt: "Semi-hollow die for T-slot machine frame section", title: "Semi-Hollow Die — T-Slot Frame", category: "semi-hollow", width: 800, height: 600 },
  { id: "g09", src: "/images/gallery/solid-die-mirror-polished-bearings.jpg", alt: "Completed solid die with mirror-polished bearings", title: "Solid Die — Mirror Polished Bearing", category: "solid-dies", width: 800, height: 600 },
];

export const GALLERY_CATEGORIES = [
  { key: "all", label: "All Photos" },
  { key: "solid-dies", label: "Solid Dies" },
  { key: "hollow-dies", label: "Hollow Dies" },
  { key: "semi-hollow", label: "Semi-Hollow Dies" },
  { key: "facility", label: "Facility" },
  { key: "inspection", label: "Inspection" },
] as const;

// ═════════════════════════════════════════════════════════════════════════════
// QUALITY DATA
// ═════════════════════════════════════════════════════════════════════════════

export const QUALITY_STANDARDS: QualityStandard[] = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    description: "Our QMS covers every process from order receipt to dispatch — design, machining, heat treatment, and inspection. Certified by Bureau Veritas.",
    icon: "badge",
  },
  {
    code: "H13 AISI / DIN 1.2344",
    title: "Tool Steel Certification",
    description: "Every steel billet is sourced from mill-certified manufacturers and accompanied by a material test certificate. Incoming ultrasonic testing on all billets.",
    icon: "shield",
  },
  {
    code: "GD&T ASME Y14.5",
    title: "Dimensional Reporting Standard",
    description: "All dimensional reports are issued per ASME Y14.5 GD&T standards — true position, profile of a surface, and flatness callouts where applicable.",
    icon: "crosshair",
  },
  {
    code: "EN ISO 14923",
    title: "Thermal Spray Coating Standard",
    description: "Our nitriding process references EN ISO 14923 for surface coating quality — white layer thickness, diffusion zone depth, and adhesion requirements.",
    icon: "flame",
  },
];

export const QUALITY_PROCESSES: QualityProcess[] = [
  {
    step: 1,
    title: "Incoming Material Inspection",
    description: "Every H13 steel billet is ultrasonically tested on arrival. Mill certificates are verified and retained. Any billet failing the incoming test is rejected — not used.",
    equipment: "Ultrasonic flaw detector + spectrometer",
  },
  {
    step: 2,
    title: "In-Process Measurement",
    description: "After rough machining, semi-finish machining, and each EDM operation, critical dimensions are measured. Non-conformances are corrected before the next operation begins.",
    equipment: "CMM + in-process gauges",
  },
  {
    step: 3,
    title: "Pre-Nitriding Inspection",
    description: "All critical dimensions are verified before the die enters the nitriding furnace. Nitriding cannot be undone — only correct dies enter the furnace.",
    equipment: "Zeiss CMM + surface profilometer",
  },
  {
    step: 4,
    title: "Post-Nitriding Verification",
    description: "After nitriding, hardness is tested with a Vickers tester on the bearing surface. White layer thickness is measured on a sacrificial test piece from the same furnace charge.",
    equipment: "Vickers HV10 hardness tester",
  },
  {
    step: 5,
    title: "Final CMM Inspection",
    description: "Every die receives a full CMM dimensional check against the approved drawing. All results are recorded in the dimensional report issued with the die.",
    equipment: "Zeiss Contura CMM",
  },
  {
    step: 6,
    title: "Dispatch & Documentation",
    description: "Die is cleaned, lightly oiled, packed, and dispatched with: the dimensional report, the material test certificate, and the die design approval drawing.",
    equipment: "Documentation package — every die",
  },
];

export const QUALITY_EQUIPMENT: QualityEquipment[] = [
  {
    name: "Zeiss Contura CMM",
    specification: "700×1000×600mm volume, ±0.001mm accuracy",
    purpose: "Full 3D dimensional verification of all die geometries",
    icon: "crosshair",
  },
  {
    name: "Mitutoyo SJ-210 Profilometer",
    specification: "Ra, Rz, Rmax measurement — 0.001μm resolution",
    purpose: "Bearing surface finish verification (Ra 0.2–0.4μm target)",
    icon: "chart",
  },
  {
    name: "Vickers Hardness Tester (HV10)",
    specification: "10kg load, 0.5–1 HV resolution",
    purpose: "Post-nitriding surface hardness verification (1000–1100 HV)",
    icon: "shield",
  },
  {
    name: "Krautkrämer Ultrasonic Tester",
    specification: "Pulse-echo, 0.5–20MHz transducer range",
    purpose: "Incoming H13 billet inspection for internal defects",
    icon: "scan",
  },
  {
    name: "Optical Profile Projector",
    specification: "30× magnification, 300mm screen diameter",
    purpose: "Rapid 2D profile geometry check at workpiece",
    icon: "eye",
  },
  {
    name: "Portable Spectrometer",
    specification: "OES — 24-element simultaneous analysis",
    purpose: "Material grade verification on incoming steel",
    icon: "cpu",
  },
];