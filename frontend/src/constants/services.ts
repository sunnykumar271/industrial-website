import type { ServiceDetail } from "@/types/services";

// ─────────────────────────────────────────────────────────────────────────────
// SOLID EXTRUSION DIES
// ─────────────────────────────────────────────────────────────────────────────
const solidDies: ServiceDetail = {
  slug: "solid-dies",
  category: "product",
  title: "Solid Extrusion Dies",
  shortTitle: "Solid Dies",
  tagline: "Precision solid dies for rods, bars, angles, channels, and custom open profiles.",
  description:
    "Solid extrusion dies are the most common die type — used wherever the extruded profile has no enclosed voids. We manufacture solid dies from premium H13 hot-work tool steel, fully CNC machined and vacuum nitrided. From simple round rods to complex multi-legged structural angles, our dies are designed with metal-flow simulation to eliminate twist, bow, and surface defects before the first trial.",
  heroImage: "/images/services/solid-dies-hero.jpg",
  heroImageAlt: "Solid aluminium extrusion die with precision machined bearing surface",
  keyPoints: [
    "Tolerances held to ±0.01mm on profile dimensions",
    "H13 tool steel — ultrasonic tested before machining",
    "Vacuum nitrided to 1000–1100 HV surface hardness",
    "Metal-flow simulation before machining begins",
    "Standard delivery: 8 working days",
    "Available in 3-inch to 15-inch circle sizes",
  ],
  specs: [
    { parameter: "Die Material", value: "H13 Hot-Work Tool Steel", notes: "Mill-certified, ultrasonic tested" },
    { parameter: "Circle Size Range", value: "3″ to 15″ (76mm – 381mm)", notes: "Custom sizes available on request" },
    { parameter: "Profile Tolerance", value: "±0.01mm standard / ±0.005mm precision", notes: "On critical dimensions" },
    { parameter: "Surface Hardness", value: "1000–1100 HV", notes: "After vacuum nitriding at 510°C" },
    { parameter: "Case Depth", value: "0.10–0.15mm white layer", notes: "Controlled nitriding cycle" },
    { parameter: "Bearing Length", value: "0mm – 12mm", notes: "Calculated per profile section" },
    { parameter: "Die Thickness", value: "Per press platen specification", notes: "DIN / custom flanges available" },
    { parameter: "Surface Finish (Bearing)", value: "Ra 0.2 – 0.4 μm", notes: "Mirror polished by hand" },
    { parameter: "Lead Time (Standard)", value: "8 working days", notes: "From drawing approval" },
    { parameter: "Lead Time (Express)", value: "4 working days", notes: "Subject to scheduling" },
  ],
  applications: [
    {
      industry: "Construction",
      profiles: ["Angles", "Channels", "T-sections", "Flat bars", "Equal legs"],
      icon: "building",
    },
    {
      industry: "Automotive",
      profiles: ["Trim strips", "Seat frame rails", "Step bars", "Roof rails"],
      icon: "car",
    },
    {
      industry: "Solar Energy",
      profiles: ["Module frame rails", "Mounting channels", "Purlins"],
      icon: "sun",
    },
    {
      industry: "Furniture",
      profiles: ["Handle profiles", "Frame sections", "Decorative trims"],
      icon: "home",
    },
    {
      industry: "Industrial",
      profiles: ["Machine frame sections", "Guide rails", "Conveyor profiles"],
      icon: "factory",
    },
    {
      industry: "Electrical",
      profiles: ["Busbars", "Cable tray sections", "Earthing strips"],
      icon: "zap",
    },
  ],
  faqs: [
    {
      question: "What alloys can solid dies run?",
      answer:
        "Our solid dies are optimised for 6xxx series alloys (6061, 6063, 6082, 6005A) — the most common structural and architectural extrudable alloys. We can also design for 1xxx and 3xxx series on request.",
    },
    {
      question: "What is the typical die life for a solid die?",
      answer:
        "A well-maintained solid die running 6063 alloy typically yields 40,000–80,000 kg of aluminium before the first correction is needed. Dies running harder alloys (6082, 6061) have shorter lives of 20,000–40,000 kg. Life depends heavily on billet quality, press temperature, and quench consistency.",
    },
    {
      question: "Do you provide a trial extrusion report?",
      answer:
        "Yes. Every new solid die is accompanied by a dimensional inspection report. If you send us the extrusion for CMM verification, we issue a full GD&T report against the profile drawing.",
    },
    {
      question: "Can I send a sample profile instead of a drawing?",
      answer:
        "Yes. We can reverse-engineer a die from a physical sample using our CMM and 3D scanning equipment. We will produce a drawing for your approval before machining begins.",
    },
  ],
  relatedSlugs: ["hollow-dies", "semi-hollow-dies", "die-design"],
  metaTitle: "Solid Extrusion Dies Manufacturer — H13 Steel, 8-Day Lead Time",
  metaDescription:
    "Precision solid aluminium extrusion dies for rods, bars, angles, and channels. H13 tool steel, vacuum nitrided, ±0.01mm tolerance. Vadodara, Gujarat. 8-day delivery.",
  metaKeywords: [
    "solid extrusion die manufacturer",
    "aluminium solid die",
    "solid die manufacturer India",
    "H13 tool steel die",
    "extrusion die Vadodara",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// HOLLOW EXTRUSION DIES
// ─────────────────────────────────────────────────────────────────────────────
const hollowDies: ServiceDetail = {
  slug: "hollow-dies",
  category: "product",
  title: "Hollow Extrusion Dies",
  shortTitle: "Hollow Dies",
  tagline: "Multi-void porthole and bridge dies for tubes, box sections, and enclosed structural profiles.",
  description:
    "Hollow extrusion dies are two-piece assemblies — a mandrel (male) and a die (female) — that allow aluminium to flow around support legs, weld back together under pressure, and exit as a fully enclosed hollow section. We design and machine porthole dies, bridge dies, and spider dies for single and multi-void profiles. Our FEA metal-flow analysis ensures balanced flow velocity across every void, eliminating weld seam weakness and tongue deflection.",
  heroImage: "/images/services/hollow-dies-hero.jpg",
  heroImageAlt: "Multi-void porthole hollow extrusion die assembly showing mandrel and die components",
  keyPoints: [
    "Porthole, bridge, and spider die configurations",
    "FEA metal-flow simulation for weld seam optimisation",
    "Multi-void profiles up to 12 voids",
    "H13 steel — both mandrel and die components",
    "Weld chamber geometry optimised per alloy",
    "Tongue deflection controlled to ±0.05mm",
  ],
  specs: [
    { parameter: "Die Type", value: "Porthole / Bridge / Spider", notes: "Selected based on profile geometry" },
    { parameter: "Die Material", value: "H13 Hot-Work Tool Steel", notes: "Both mandrel and die halves" },
    { parameter: "Max Voids", value: "Up to 12 enclosed voids", notes: "Per profile cross-section" },
    { parameter: "Circle Size Range", value: "4″ to 15″", notes: "Larger sizes on request" },
    { parameter: "Wall Thickness Tolerance", value: "±0.05mm", notes: "On nominal wall thickness" },
    { parameter: "Tongue Deflection", value: "< 0.05mm at operating temp", notes: "Verified via FEA simulation" },
    { parameter: "Surface Hardness", value: "1000–1100 HV", notes: "Vacuum nitrided" },
    { parameter: "Weld Chamber Depth", value: "Optimised per alloy & speed", notes: "Impacts weld seam strength" },
    { parameter: "Lead Time (Standard)", value: "10 working days", notes: "Hollow dies require extra machining time" },
    { parameter: "Lead Time (Express)", value: "6 working days", notes: "Subject to scheduling" },
  ],
  applications: [
    {
      industry: "Construction",
      profiles: ["Square hollow sections", "Rectangular box sections", "Curtain wall mullions", "Window frames"],
      icon: "building",
    },
    {
      industry: "Automotive",
      profiles: ["Crash management beams", "Bumper systems", "Battery tray sections", "Door sills"],
      icon: "car",
    },
    {
      industry: "Transport",
      profiles: ["Railway carriage floor sections", "Bus body pillars", "Truck body rails"],
      icon: "train",
    },
    {
      industry: "Solar",
      profiles: ["Tracker torque tubes", "Pile sections", "Mounting structures"],
      icon: "sun",
    },
    {
      industry: "Furniture",
      profiles: ["Table legs", "Frame tubes", "Modular system sections"],
      icon: "home",
    },
    {
      industry: "HVAC",
      profiles: ["Duct sections", "Heat exchanger tubes", "Manifold bodies"],
      icon: "wind",
    },
  ],
  faqs: [
    {
      question: "What is the difference between a porthole die and a bridge die?",
      answer:
        "A porthole die splits the metal flow through multiple circular ports in the mandrel. A bridge die uses a single bridge (tongue) to create the void. Porthole dies are stronger and better for multi-void profiles; bridge dies are simpler and used for single-void profiles with large openings.",
    },
    {
      question: "How strong are weld seams in hollow extrusions?",
      answer:
        "When the die is correctly designed and the press runs at the right temperature and speed, weld seam strength reaches 85–95% of the parent alloy's mechanical properties. We optimise weld chamber geometry per alloy to maximise this figure.",
    },
    {
      question: "Can hollow dies run 6082 alloy?",
      answer:
        "Yes, but 6082 is more demanding — higher press pressure, stricter temperature control, and shorter die life than 6063. We adjust porthole leg geometry and bearing lengths specifically for 6082 to maintain acceptable tongue deflection.",
    },
    {
      question: "Do you supply the mandrel and die as a matched pair?",
      answer:
        "Always. Both components are machined on the same setup from the same drawing, ensuring the seating surfaces, circle size, and weld chamber dimensions are perfectly matched. We never supply replacements for one half without re-qualifying the assembly.",
    },
  ],
  relatedSlugs: ["solid-dies", "semi-hollow-dies", "die-correction"],
  metaTitle: "Hollow Extrusion Dies Manufacturer — Porthole & Bridge Dies, India",
  metaDescription:
    "Porthole and bridge hollow aluminium extrusion dies for tubes, box sections, and multi-void profiles. FEA simulation, H13 steel, vacuum nitrided. Vadodara, Gujarat.",
  metaKeywords: [
    "hollow extrusion die manufacturer",
    "porthole die manufacturer India",
    "bridge die aluminium extrusion",
    "multi void extrusion die",
    "hollow die manufacturer Vadodara",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// SEMI-HOLLOW EXTRUSION DIES
// ─────────────────────────────────────────────────────────────────────────────
const semiHollowDies: ServiceDetail = {
  slug: "semi-hollow-dies",
  category: "product",
  title: "Semi-Hollow Extrusion Dies",
  shortTitle: "Semi-Hollow Dies",
  tagline: "Engineered dies for partially enclosed profiles demanding precise void ratios and wall consistency.",
  description:
    "Semi-hollow dies occupy the challenging middle ground between solid and hollow dies. A semi-hollow profile has a partially enclosed void — where the gap-to-depth ratio (void ratio) is too high to machine as a solid die without tongue breakage, but does not form a fully closed section. The tongue in a semi-hollow die is the most stressed element in the entire die; we design tongue geometry, fillet radii, and back relief to maximise fatigue life while maintaining profile accuracy.",
  heroImage: "/images/services/semi-hollow-dies-hero.jpg",
  heroImageAlt: "Semi-hollow extrusion die showing tongue geometry for partially enclosed profile",
  keyPoints: [
    "Void ratio analysis before design begins",
    "Finite element stress analysis on tongue geometry",
    "Back relief and fillet optimisation",
    "Available in cantilever and supported tongue designs",
    "Tongue deflection held to ±0.03mm",
    "8–10 day standard lead time",
  ],
  specs: [
    { parameter: "Profile Type", value: "Partially enclosed / high void-ratio", notes: "Gap:depth > 1.0 typically" },
    { parameter: "Die Material", value: "H13 Hot-Work Tool Steel", notes: "Premium grade, ultrasonic tested" },
    { parameter: "Tongue Design", value: "Cantilever or supported", notes: "Per void geometry" },
    { parameter: "Tongue Stress Analysis", value: "FEA per profile", notes: "Ensures fatigue life at press temp" },
    { parameter: "Tongue Deflection", value: "< 0.03mm", notes: "At maximum extrusion pressure" },
    { parameter: "Void Ratio Handled", value: "Up to 3.5:1 (gap:depth)", notes: "Above this, hollow die recommended" },
    { parameter: "Circle Size Range", value: "3″ to 12″", notes: "" },
    { parameter: "Surface Hardness", value: "1000–1100 HV", notes: "Vacuum nitrided" },
    { parameter: "Lead Time (Standard)", value: "8–10 working days", notes: "Tongue design adds machining time" },
  ],
  applications: [
    {
      industry: "Construction",
      profiles: ["C-channels with lips", "Snap-fit glazing profiles", "Thermal break sections", "U-channels"],
      icon: "building",
    },
    {
      industry: "Automotive",
      profiles: ["Seat track profiles", "Clip retainer sections", "Body seal carriers"],
      icon: "car",
    },
    {
      industry: "Electronics",
      profiles: ["LED light channel bodies", "Heatsink fins with base slots", "Enclosure tongue sections"],
      icon: "cpu",
    },
    {
      industry: "Furniture",
      profiles: ["Sliding door tracks", "Glass retention channels", "Clip-in trim sections"],
      icon: "home",
    },
    {
      industry: "Industrial",
      profiles: ["T-slot sections", "Snap-fit cover profiles", "Retainer channels"],
      icon: "factory",
    },
    {
      industry: "Solar",
      profiles: ["Module clamp profiles", "Rail clip sections", "Grounding channels"],
      icon: "sun",
    },
  ],
  faqs: [
    {
      question: "How do you decide between a semi-hollow and hollow die design?",
      answer:
        "We calculate the void ratio (gap width ÷ gap depth). Below 1.0, it can usually be made as a solid die. Between 1.0 and 3.5, a semi-hollow design is appropriate. Above 3.5, the tongue stress becomes too high and we recommend redesigning as a hollow (porthole) die.",
    },
    {
      question: "Why do semi-hollow dies break more often than solid dies?",
      answer:
        "The tongue is a cantilevered beam subjected to cyclic bending stress every time the press load fluctuates. We minimise breakage risk through generous fillet radii at the tongue root, controlled hardness (avoiding over-nitriding which causes brittleness), and correct bearing lengths to balance metal flow velocity around the tongue.",
    },
    {
      question: "Can the tongue be repaired if it breaks?",
      answer:
        "In most cases yes — we can weld-repair and re-machine broken tongues for 30–40% of a new die cost, provided the break is clean and the die body is undamaged. We assess each case individually.",
    },
  ],
  relatedSlugs: ["solid-dies", "hollow-dies", "die-refurbishment"],
  metaTitle: "Semi-Hollow Extrusion Dies Manufacturer — Void Ratio Analysis, India",
  metaDescription:
    "Semi-hollow aluminium extrusion dies with FEA tongue stress analysis. C-channels, snap-fit profiles, T-slots. H13 steel, vacuum nitrided. Vadodara, Gujarat.",
  metaKeywords: [
    "semi hollow extrusion die manufacturer",
    "semi hollow die India",
    "aluminium semi hollow die",
    "extrusion die manufacturer Gujarat",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DIE DESIGN SERVICE
// ─────────────────────────────────────────────────────────────────────────────
const dieDesign: ServiceDetail = {
  slug: "die-design",
  category: "service",
  title: "Die Design Service",
  shortTitle: "Die Design",
  tagline: "CAD/CAM die design with metal-flow simulation — zero guesswork before machining begins.",
  description:
    "Our die design service covers the complete design process from profile drawing to machined die. Using Siemens NX and AutoCAD, our engineers analyse your profile geometry, select die type, calculate bearing lengths, design pockets and support pillars, and run metal-flow simulation before a single cut is made. Poor die design is the single biggest cause of extrusion problems — twisted profiles, uneven speeds, and surface defects. We eliminate these at the design stage.",
  heroImage: "/images/services/die-design-hero.jpg",
  heroImageAlt: "CAD screen showing aluminium extrusion die design with metal flow simulation vectors",
  keyPoints: [
    "Full 3D die design in Siemens NX",
    "Metal-flow simulation — velocity and pressure mapped",
    "Bearing length calculation per profile section",
    "Pocket geometry and support pillar placement",
    "Customer drawing approval before machining",
    "Design files retained for future corrections",
  ],
  specs: [
    { parameter: "CAD Software", value: "Siemens NX, AutoCAD 2D", notes: "DXF/DWG/STEP files accepted" },
    { parameter: "Input Formats Accepted", value: "DXF, DWG, STEP, PDF, Sample Profile", notes: "We can reverse-engineer from samples" },
    { parameter: "Output Deliverables", value: "3D die model, 2D machining drawing, simulation report", notes: "" },
    { parameter: "Metal Flow Simulation", value: "Velocity field, pressure map, dead zone analysis", notes: "Identifies imbalances before machining" },
    { parameter: "Bearing Length Method", value: "Empirical + FEA hybrid", notes: "Per profile wall thickness zone" },
    { parameter: "Design Review", value: "Customer approval drawing issued", notes: "Changes at no cost before machining" },
    { parameter: "Design Turnaround", value: "2–3 working days", notes: "From complete profile drawing receipt" },
    { parameter: "File Retention", value: "Indefinite", notes: "All design files stored for reorder/correction" },
  ],
  applications: [
    {
      industry: "New Profile Development",
      profiles: ["First-time die designs", "Prototype tooling", "Profile feasibility studies"],
      icon: "design",
    },
    {
      industry: "Complex Profiles",
      profiles: ["Multi-void hollow sections", "Asymmetric sections", "Tight-tolerance profiles"],
      icon: "cpu",
    },
    {
      industry: "Die Replacements",
      profiles: ["Improved redesigns of existing dies", "Material upgrades", "Geometry corrections built into new design"],
      icon: "refurbish",
    },
    {
      industry: "Export Markets",
      profiles: ["Design-only service for overseas extruders", "DXF/STEP file delivery", "Remote approval process"],
      icon: "globe",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "Profile Drawing Review",
      description:
        "We review the customer's profile DXF/DWG for extrudability — checking wall thickness ratios, minimum wall, tongue lengths, and void ratio. We flag any geometry that will cause extrusion problems and suggest modifications.",
    },
    {
      step: 2,
      title: "Die Type Selection",
      description:
        "Based on profile geometry and alloy, we select solid, semi-hollow, or hollow die configuration. For hollow profiles, we determine number of porthole ports and weld chamber geometry.",
    },
    {
      step: 3,
      title: "3D Die Modelling",
      description:
        "Full 3D model in Siemens NX — die pocket, bearings, relief angles, back relief, support pillars, and flange. The model captures every dimension that will be machined.",
    },
    {
      step: 4,
      title: "Metal Flow Simulation",
      description:
        "Velocity and pressure fields are mapped across the profile cross-section. Imbalanced flow zones (where one leg exits faster than another, causing bow or twist) are corrected by adjusting bearing lengths before machining.",
    },
    {
      step: 5,
      title: "Customer Approval",
      description:
        "A 2D approval drawing is issued to the customer. Changes can be made at no cost at this stage. Once approved, the design is released to the CNC machining team.",
    },
  ],
  faqs: [
    {
      question: "Can you design a die from a physical sample profile?",
      answer:
        "Yes. We CMM-scan the sample profile and create a 2D DXF, then proceed with full die design. This is common for replacement dies where the original drawing is unavailable.",
    },
    {
      question: "How long does design take?",
      answer:
        "Standard die design takes 2–3 working days from receipt of a complete profile drawing. Complex hollow or multi-void profiles may take 3–4 days due to simulation time.",
    },
    {
      question: "Do I own the design files?",
      answer:
        "Yes. We issue you the 2D profile approval drawing and, on request, the 3D die model in STEP format. We also retain a copy for future reorders and corrections.",
    },
    {
      question: "Can you improve an existing die design that is giving problems?",
      answer:
        "Yes — this is part of our die correction service. We review the existing die, identify the design root cause, and either correct the current die or redesign it. In both cases we update the design file so the problem is not repeated on the next die.",
    },
  ],
  relatedSlugs: ["solid-dies", "hollow-dies", "die-correction"],
  metaTitle: "Aluminium Extrusion Die Design Service — CAD/FEA Simulation, India",
  metaDescription:
    "Professional aluminium extrusion die design using Siemens NX with metal-flow simulation. Bearing length calculation, pocket design, 2–3 day turnaround. Vadodara.",
  metaKeywords: [
    "aluminium extrusion die design",
    "extrusion die design service India",
    "die design CAD simulation",
    "Siemens NX die design",
    "extrusion die design Vadodara",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DIE CORRECTION SERVICE
// ─────────────────────────────────────────────────────────────────────────────
const dieCorrection: ServiceDetail = {
  slug: "die-correction",
  category: "service",
  title: "Die Correction Service",
  shortTitle: "Die Correction",
  tagline: "On-press and bench corrections to restore profile dimensions and extrusion speed — 24–48 hour turnaround.",
  description:
    "Even a correctly designed die can develop problems over its life — metal pick-up on bearings, worn bearing surfaces, profile bow or twist developing, surface roughness increasing. Our die correction service covers both bench corrections (profile dimensional issues) and speed corrections (metal flow imbalance causing bending, twisting, or unequal leg speeds). Every correction is documented so the root cause is permanently recorded.",
  heroImage: "/images/services/die-correction-hero.jpg",
  heroImageAlt: "Die correction technician polishing bearing surface of aluminium extrusion die",
  keyPoints: [
    "24–48 hour standard correction turnaround",
    "Profile CMM measurement before and after",
    "Bearing polish, relief, and choke corrections",
    "Twist, bow, and speed imbalance corrections",
    "Correction report issued with every die",
    "Root cause recorded — permanent correction file",
  ],
  specs: [
    { parameter: "Correction Turnaround", value: "24–48 hours", notes: "From die receipt to dispatch" },
    { parameter: "Express Turnaround", value: "Same-day (if before 10am)", notes: "Subject to booking" },
    { parameter: "Measurement Equipment", value: "CMM + profile projector + surface profilometer", notes: "" },
    { parameter: "Bearing Corrections", value: "Polish, choke, relief, wipe", notes: "Per profile deviation" },
    { parameter: "Flow Corrections", value: "Bearing length adjustment, pocket choking", notes: "For speed imbalance" },
    { parameter: "Weld Repair", value: "Available for minor cracks and chips", notes: "Not structural fractures" },
    { parameter: "Report", value: "Before/after CMM data + correction description", notes: "Issued with every job" },
    { parameter: "Alloys Supported", value: "6063, 6061, 6082, 6005A, 6060", notes: "Most 6xxx series" },
  ],
  applications: [
    {
      industry: "Profile Dimensional Issues",
      profiles: ["Over/under-size dimensions", "Wall thickness variation", "Angular deviation", "Radius errors"],
      icon: "crosshair",
    },
    {
      industry: "Flow & Speed Problems",
      profiles: ["Profile bow after exit", "Twist along length", "Unequal leg speeds", "Die lines"],
      icon: "chart",
    },
    {
      industry: "Surface Defects",
      profiles: ["Pick-up on bearing", "Drag marks", "Surface roughness increase", "Streaking"],
      icon: "correction",
    },
    {
      industry: "Structural Issues",
      profiles: ["Minor tongue cracks", "Bearing edge chips", "Porthole leg erosion", "Surface pitting"],
      icon: "shield",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "Die Receipt & Measurement",
      description:
        "On arrival, the die is cleaned, inspected, and critical dimensions are measured with our CMM. The current profile issue is confirmed against the customer's reported problem and the original drawing.",
    },
    {
      step: 2,
      title: "Root Cause Analysis",
      description:
        "We identify whether the problem is bearing-related (surface, length, polish), flow-related (imbalance between sections), geometry-related (pocket erosion, tongue deflection), or material-related (wear, pick-up).",
    },
    {
      step: 3,
      title: "Correction Execution",
      description:
        "Corrections are made using bench polishing, EDM re-burning, CNC re-machining, or weld repair — depending on the root cause. Each correction is measured after execution before proceeding to the next.",
    },
    {
      step: 4,
      title: "Post-Correction Inspection",
      description:
        "The corrected die is re-measured against the original drawing. All corrected dimensions are recorded in the correction report.",
    },
    {
      step: 5,
      title: "Dispatch & Report",
      description:
        "The die is dispatched with a written correction report detailing what was measured, what was done, and the post-correction measurements. This document becomes part of the die's permanent service record.",
    },
  ],
  faqs: [
    {
      question: "How many times can a die be corrected?",
      answer:
        "Most dies can be corrected 3–5 times before the cumulative metal removal makes further correction impractical. Each correction removes a small amount of bearing material; once bearing lengths become too short or the pocket geometry is compromised, refurbishment or a new die is the better option.",
    },
    {
      question: "Can you correct a die from another manufacturer?",
      answer:
        "Yes. We correct dies made by any manufacturer. We will need the original profile drawing to measure against. If no drawing is available, we measure the current extrusion as the reference.",
    },
    {
      question: "What information should I send with the die?",
      answer:
        "Please include: the original profile drawing (or current extrusion sample), a description of the problem (bow, twist, oversize, rough surface, etc.), the alloy and press parameters you are running, and whether the die has been corrected before and by whom.",
    },
    {
      question: "Do you offer on-site correction at our facility?",
      answer:
        "Yes, for customers within Gujarat and Maharashtra. On-site correction is available for urgent situations where press downtime cannot accommodate transit time. Contact us to arrange.",
    },
  ],
  relatedSlugs: ["die-refurbishment", "die-design", "hollow-dies"],
  metaTitle: "Aluminium Extrusion Die Correction Service — 24-Hour Turnaround, India",
  metaDescription:
    "Fast aluminium extrusion die correction — bow, twist, dimensional, and surface defect corrections with 24–48 hour turnaround. CMM verified. Vadodara, Gujarat.",
  metaKeywords: [
    "extrusion die correction service",
    "die correction India",
    "aluminium die correction Gujarat",
    "die bearing correction",
    "extrusion die repair",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// DIE REFURBISHMENT SERVICE
// ─────────────────────────────────────────────────────────────────────────────
const dieRefurbishment: ServiceDetail = {
  slug: "die-refurbishment",
  category: "service",
  title: "Die Refurbishment Service",
  shortTitle: "Die Refurbishment",
  tagline: "Full die reconditioning — nitriding, polishing, weld repair — extending die life by up to 300%.",
  description:
    "Die refurbishment is the complete reconditioning of a worn or end-of-life die back to near-new condition. Unlike die correction (which addresses a specific active problem), refurbishment is a scheduled maintenance operation performed after a die has accumulated significant press runs. A refurbished die costs 35–50% of a new die and, when done correctly, runs as well as new for the next full production cycle.",
  heroImage: "/images/services/die-refurbishment-hero.jpg",
  heroImageAlt: "Aluminium extrusion die being prepared for vacuum nitriding refurbishment process",
  keyPoints: [
    "Full disassembly, cleaning, and inspection",
    "Weld repair of erosion, cracks, and chips",
    "CNC re-machining of worn bearings and pockets",
    "Vacuum re-nitriding to restore surface hardness",
    "Full CMM inspection before dispatch",
    "35–50% cost of a new die",
  ],
  specs: [
    { parameter: "Turnaround Time", value: "5–7 working days", notes: "Full refurbishment cycle" },
    { parameter: "Weld Repair", value: "TIG weld + CNC re-machine", notes: "For erosion and mechanical damage" },
    { parameter: "Re-nitriding Temperature", value: "510°C vacuum nitriding", notes: "Same spec as new die" },
    { parameter: "Re-nitriding Duration", value: "20–24 hours", notes: "Full hardness restoration" },
    { parameter: "Post-Refurb Hardness", value: "1000–1100 HV", notes: "Equivalent to new die" },
    { parameter: "Cost vs New Die", value: "35–50% of new die price", notes: "Depends on extent of damage" },
    { parameter: "Expected Life After Refurb", value: "70–90% of new die life", notes: "With correct press parameters" },
    { parameter: "Max Refurbishments", value: "2–3 cycles typically", notes: "Depends on die geometry and damage level" },
  ],
  applications: [
    {
      industry: "Scheduled Maintenance",
      profiles: ["High-volume production dies", "Dies at 60–80% of expected life", "Preventive refurbishment"],
      icon: "clock",
    },
    {
      industry: "Damage Restoration",
      profiles: ["Pocket erosion", "Porthole leg wear", "Bearing edge damage", "Surface pitting"],
      icon: "refurbish",
    },
    {
      industry: "Re-nitriding Only",
      profiles: ["Dies with intact geometry but depleted nitride layer", "After EDM rework", "After weld correction"],
      icon: "factory",
    },
    {
      industry: "Assembly Overhaul",
      profiles: ["Hollow die mandrel/die resetting", "Seating surface reconditioning", "Flange plate replacement"],
      icon: "shield",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "Incoming Inspection",
      description:
        "The die is fully cleaned and inspected under magnification. We measure all critical dimensions, document existing damage (erosion, cracks, worn surfaces), and produce a written assessment with a refurbishment scope and fixed price.",
    },
    {
      step: 2,
      title: "Weld Repair",
      description:
        "Eroded pockets, worn porthole legs, and damaged bearing surfaces are built up with TIG welding using H13-compatible filler. The weld deposit is stress-relieved before machining.",
    },
    {
      step: 3,
      title: "CNC Re-machining",
      description:
        "All welded and worn areas are re-machined to original drawing dimensions. Bearing surfaces are re-cut to specified lengths and angles. Any geometry deviations found during inspection are corrected at this stage.",
    },
    {
      step: 4,
      title: "Vacuum Re-nitriding",
      description:
        "The die goes through a full vacuum nitriding cycle at 510°C for 20–24 hours. This restores the white layer and diffusion zone to 1000–1100 HV — identical to a new die. Because all previous nitride was machined away during step 3, there is no risk of compound layer buildup.",
    },
    {
      step: 5,
      title: "Final Inspection & Dispatch",
      description:
        "CMM inspection against the original drawing. All dimensions are recorded in a post-refurbishment report. The die is cleaned, lightly oiled, and packed for dispatch with the full report and service history.",
    },
  ],
  faqs: [
    {
      question: "How do I know when a die needs refurbishment vs correction?",
      answer:
        "Correction is for a specific, active extrusion problem (bow, rough surface, oversize dimension). Refurbishment is a preventive measure — typically done when a die has completed 60–80% of its expected tonnage, or when multiple corrections have already been made and the die geometry is becoming marginal.",
    },
    {
      question: "Can you refurbish a competitor's die?",
      answer:
        "Yes. We refurbish dies from any manufacturer. We will need the original profile drawing. If the original drawing is unavailable, we measure the pre-refurbishment profile and extrusion to establish the reference geometry.",
    },
    {
      question: "Is it worth refurbishing an old die or better to buy new?",
      answer:
        "Refurbishment makes sense when: the die body is structurally sound, the damage is limited to surface and wear areas, and the profile is still in production. If the die has been corrected more than 4 times, has structural cracks, or the profile spec has changed, a new die is usually the better investment.",
    },
    {
      question: "Do you offer a service contract for ongoing refurbishment?",
      answer:
        "Yes. For customers with large die inventories (50+ dies), we offer a scheduled maintenance contract — dies are collected, assessed, and refurbished on a rolling schedule to prevent unexpected press downtime.",
    },
  ],
  relatedSlugs: ["die-correction", "die-design", "solid-dies"],
  metaTitle: "Aluminium Extrusion Die Refurbishment Service — Re-nitriding & Repair, India",
  metaDescription:
    "Complete aluminium extrusion die refurbishment — weld repair, CNC re-machining, vacuum re-nitriding. Restore die to new condition at 35–50% of replacement cost. Vadodara.",
  metaKeywords: [
    "extrusion die refurbishment",
    "die refurbishment India",
    "aluminium die reconditioning",
    "die re-nitriding service",
    "extrusion die repair Gujarat",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// MASTER MAP — slug → data
// Used by both the overview page and individual detail pages.
// ─────────────────────────────────────────────────────────────────────────────
export const SERVICE_MAP: Record<string, ServiceDetail> = {
  "solid-dies": solidDies,
  "hollow-dies": hollowDies,
  "semi-hollow-dies": semiHollowDies,
  "die-design": dieDesign,
  "die-correction": dieCorrection,
  "die-refurbishment": dieRefurbishment,
};

/*
 * Ordered arrays for rendering — products first, then services.
 * Used by the /services overview page.
 */
export const PRODUCT_SLUGS = ["solid-dies", "hollow-dies", "semi-hollow-dies"] as const;
export const SERVICE_SLUGS = ["die-design", "die-correction", "die-refurbishment"] as const;
export const ALL_SLUGS = [...PRODUCT_SLUGS, ...SERVICE_SLUGS] as const;

export type ServiceSlug = (typeof ALL_SLUGS)[number];
