// Edit everything here to make the page yours — no need to touch components.
//
// Note: a couple of fields from your CV (KTP/ID number, exact home address,
// phone number) are intentionally left out of the public site — those are
// sensitive to publish on a page anyone on the internet can open. Add them
// back here if you want them shown, or keep them for the CV download only.

export const profile = {
  logo: "Farhan.",
  name: "Farhan Abimanyu Firmansyah",
  role: "Software developer",
  tagline:
    "Software Developer Intern experience at PT. Evolusi Teknologi Indonesia, with a background leading campus organizations and building web systems from planning to production.",
  location: "Bojonegoro, East Java, Indonesia",
  email: "farhanabimayuf@gmail.com",
  cvUrl: "/api/cv",
  photo: "/assets/photo.png",
  photoAlt: "/assets/photo2.png",
  photoResume: "/assets/photo3.png",
};

export const navLinks = [
  { label: "home", to: "/" },
  { label: "resume", to: "/resume" },
  { label: "work", to: "/work" },
  { label: "contact", to: "/contact" },
];

export const socials = [
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/farhan_bimaz/" },
  { label: "Email", icon: "mail", href: "https://mail.google.com/mail/u/0/?fs=1&to=farhanabimayuf@gmail.com&tf=cm" },
  { label: "GitHub", icon: "github", href: "https://github.com/Farhantik" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/farhan-bima-547ba4212/" },
];

export const stats = [
  { value: "1+", label: "Years of experience" },
  { value: "11+", label: "Project completed" },
  { value: "8+", label: "Technologies mastered" },
  { value: "2", label: "Certifications earned" },
];

// Shown as floating chips in the hero code-window
export const stack = ["React", "Node.js", "Laravel", "PHP", "Tailwind"];

// Home page skills strip — swap/add icons from public/assets/skills
export const skills = [
  { name: "HTML", icon: "/assets/skills/html.svg" },
  { name: "CSS", icon: "/assets/skills/css.svg" },
  { name: "JavaScript", icon: "/assets/skills/js.svg" },
  { name: "React", icon: "/assets/skills/react.svg" },
  { name: "Next.js", icon: "/assets/skills/next.svg" },
  { name: "Tailwind CSS", icon: "/assets/skills/tailwind.svg" },
];

// Resume page — tech icons row
export const resumeSkills = [
  { name: "HTML5", icon: "/assets/resume/icons/html5.svg" },
  { name: "CSS3", icon: "/assets/resume/icons/css3.svg" },
  { name: "JavaScript", icon: "/assets/resume/icons/javascript.svg" },
  { name: "PHP", icon: "/assets/resume/icons/php.svg" },
  { name: "React", icon: "/assets/resume/icons/react.svg" },
  { name: "Next.js", icon: "/assets/resume/icons/nextjs.svg" },
  { name: "Bootstrap", icon: "/assets/resume/icons/bootstrap.svg" },
  { name: "Tailwind CSS", icon: "/assets/resume/icons/tailwind.svg" },
];

// Resume page — one-line professional summary (from "Pencapaian Prestasi")
export const summary =
  "Software Developer Intern at PT. Evolusi Teknologi Indonesia, with experience leading campus activities as Ketua Pelaksana and Direktur Kominfo at Universitas Hayam Wuruk Perbanas — building skills in programming, web development, and teamwork through both organizations and technology projects.";

// Resume page — education / certification entries
export const education = [
  {
    icon: "/assets/resume/cap.svg",
    title: "S1 — Sistem Informasi",
    place: "Universitas Hayam Wuruk Perbanas, Surabaya — 2022 to 2026",
    description: "GPA 3.65 / 4.00.",
  },
];

export const certifications = [
  {
    icon: "/assets/resume/badge.svg",
    title: "SCM100 — Business Processes in Planning",
    place: "SAP University Partnership Program (Edugate) — 2026",
    description: "Score 100. Valid for life.",
  },
  {
    icon: "/assets/resume/badge.svg",
    title: "SAP01 — SAP Overview",
    place: "SAP University Partnership Program (Edugate) — 2024",
    description: "Score 100. Valid for life.",
  },
];

// Resume page — work experience timeline
export const workExperience = [
  {
    role: "Software Developer Intern",
    org: "PT. Evolusi Teknologi Indonesia (EVOTEK)",
    place: "Sidoarjo, East Java, Indonesia",
    period: "Sep 2024 — Jan 2025",
    description:
      "Developed and improved features for web-based systems, and tested the system before production release.",
  },
];

// Resume page — organizational experience timeline
export const organizations = [
  {
    role: "Direktur Kominfo",
    org: "Badan Eksekutif Mahasiswa UHW Perbanas",
    place: "Surabaya, East Java",
    period: "Aug 2024 — Aug 2025",
    description:
      "Managed the organization's communications and information, and supported publication of campus activities.",
  },
];

// Work page — featured case studies, each linked to real sample
// documents from public/assets/project (Bondowoso / Karawang / Kediri
// hospital information system modules).
export const featuredWork = [
  {
    title: "Bondowoso hospital records module",
    description:
      "Print-ready medical record forms for a hospital information system: cytology results, histopathology requests, and a claims module for eyewear.",
    thumbs: ["/assets/work/thumb10.png", "/assets/work/thumb11.png"],
    docs: [
      { label: "Cytology fluid exam result", href: "/assets/project/bondowoso_Hasil_Pemeriksaan_Sitologi.html" },
      { label: "Histopathology request form", href: "/assets/project/bondowoso_PERMINTAAN_HISTOPATOLOGI.html" },
      { label: "Eyewear claim input module", href: "/assets/project/bondowoso_Ditambahkan_modul_inputan_Kacamata_untuk_kebutuhan_klaim_Mockup.html" },
    ],
  },
  {
    title: "Karawang hospital records module",
    description:
      "Print templates covering general record forms and ICU discharge criteria for a regional hospital's records system.",
    thumbs: ["/assets/work/thumb7.png", "/assets/work/thumb4.png"],
    docs: [
      { label: "RM-R1-15 print form", href: "/assets/project/Karawang_RM-R1-15_Cetak.html" },
      { label: "ICU discharge criteria (RM.P.KRITIS-03D)", href: "/assets/project/Karawang_RM.P.KRITIS-03D_Cetak_kriteria_Keluar_ICU.html" },
      { label: "RM.UM-7 print form", href: "/assets/project/Karawang_RM.UM-7_cetak.html" },
    ],
  },
  {
    title: "Kediri hospital records module",
    description:
      "Pain re-assessment forms using the Numeric Rating Scale and Wong-Baker Faces scale, built for repeat clinical use.",
    thumbs: ["/assets/work/thumb5.png", "/assets/work/thumb6.png"],
    docs: [
      { label: "Numeric rating scale re-assessment", href: "/assets/project/kediri_ASESMEN_NYERI_ULANG_NUMERIC_RATING_SCALE.html" },
      { label: "Wong-Baker faces re-assessment", href: "/assets/project/kediri_Asesmen_nyeri_ulang_wong_baker_faces.html" },
    ],
  },
];

// Work page — additional gallery thumbnails without a written case study yet
export const moreWork = [
  "/assets/work/thumb7.png",
  "/assets/work/thumb8.png",
  "/assets/work/thumb9.png",
  "/assets/work/thumb10.png",
  "/assets/work/thumb11.png",
];

// Work page — full application projects (Laravel apps you sent over).
// These don't ship with a screenshot yet — icon stands in until you have one.
export const appProjects = [
  {
    title: "Simonpay",
    icon: "wallet",
    image: "/assets/work/simonpay-screenshot.png",
    description:
      "Payment and investment monitoring system for a cooperative (koperasi): tracks income, payments, and cash flow, with role-based access for super admin, admin, cooperative, and investor accounts, plus exportable reports.",
    tech: ["Laravel 12", "MySQL", "Tailwind CSS", "Vite", "DomPDF"],
  },
  {
    title: "WPOS (Tokosaha)",
    icon: "shopping-cart",
    image: "/assets/work/wpos-screenshot.png",
    description:
      "Point-of-sale system for small businesses: cashier sessions, transactions with printed and thermal-printer receipts, product/inventory management, supplier and customer records, receivables tracking, and financial reports.",
    tech: ["Laravel 12", "MySQL", "Tailwind CSS", "Vite", "Maatwebsite Excel"],
  },
];