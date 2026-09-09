// ─────────────────────────────────────────────────────────────
// Everything personal lives here. Edit this file, not the pages.
//
// Content is drawn from Nakul's UC activities document. Anything
// marked CHECK is a detail I inferred or paraphrased — worth a
// second look before this goes public.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Nakul Banka",
  role: "Student at UC Berkeley",
  location: "Berkeley, California",
  email: "nakulbanka@berkeley.edu",
  url: "https://nakulbanka.com", // CHECK: your eventual domain
  description:
    "Nakul Banka is a student at UC Berkeley working at the intersection of economics, social advocacy, and research — and a photographer.",
} as const;

export const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nakul-banka-946731283",
  },
  { label: "GitHub", href: "https://github.com/nakulbanka-dot" },
] as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Photography", href: "/photography" },
] as const;

// Homepage lead paragraph.
export const intro =
  "I'm a student at UC Berkeley working where economics meets social impact. I've published research on a bank collapse, helped a tribe campaign for federal recognition, built a debate coaching business, and spent four years learning to argue well. I also photograph.";

// About page — one string per paragraph.
export const bio = [
  "I'm a student at UC Berkeley. Most of what I've spent my time on connects two things I care about separately: how money and institutions actually work, and who gets left out when they don't work well.",
  "That's taken a few different shapes. I independently researched the Silicon Valley Bank collapse and published the results in two academic journals. I interned at a venture firm backing social-innovation startups in India, where my risk analysis contributed to a food-sanitation company getting funded. And I spent two years as a media intern for the Muwekma Ohlone Tribe, a Bay Area tribe removed from the Federal Register in 1927 — work that took me to Washington, D.C. to lobby for their recognition.",
  "The through-line is speech and debate. I competed for seven years, captained my Public Forum team, and ranked among the top 100 debaters nationally. Then I started coaching — first at a middle school, then through DebateToday, a company I co-founded to teach public speaking to 11-to-14-year-olds. Teaching argument turned out to be a better education than winning at it.",
  "Outside of that, I photograph. It's the one thing I do that isn't an argument.",
];

export const currently = [
  "Studying at UC Berkeley", // CHECK: add your major once declared
  "Media intern with the Muwekma Ohlone Tribe's Indigenous Justice Coalition",
  "Co-founder of DebateToday",
  "Shooting and building out a photography portfolio",
];

// ── Experience ───────────────────────────────────────────────

export type Category =
  | "Advocacy"
  | "Research"
  | "Entrepreneurship"
  | "Finance"
  | "Leadership";

export type Experience = {
  slug: string;
  org: string;
  role: string;
  period: string;
  category: Category;
  summary: string;
  highlights: string[];
  featured?: boolean;
};

export const experience: Experience[] = [
  {
    slug: "muwekma-ohlone",
    org: "Muwekma Ohlone Tribe",
    role: "Media Intern, Indigenous Justice Coalition",
    period: "2024 — Present",
    category: "Advocacy",
    summary:
      "The Muwekma Ohlone were removed from the Federal Register in 1927. I work with the Indigenous Justice Coalition to make the case for restoring their federal recognition.",
    highlights: [
      "Grew the coalition's media reach by 400% by securing news interviews",
      "Helped expand the coalition to 75+ school chapters",
      "Travelled to Washington, D.C. to lobby legislators directly",
    ],
    featured: true,
  },
  {
    slug: "svb-research",
    org: "Independent Research",
    role: "Researcher, published",
    period: "2024 — 2025",
    category: "Research",
    summary:
      "An independent analysis of the Silicon Valley Bank collapse — reconstructing the losses from limited public data, then writing it up for publication with Dr. Kapadia of UMass.",
    highlights: [
      "Published in the International Journal for Multidisciplinary Research",
      "Published in the Curieux Academic Journal",
      "Modeled the bank's losses where disclosed data was incomplete",
    ],
    featured: true,
  },
  {
    slug: "debatetoday",
    org: "DebateToday",
    role: "Co-founder & CEO",
    period: "2025 — Present",
    category: "Entrepreneurship",
    summary:
      "A small business teaching public speaking and debate to 6th–8th graders, one-on-one and in groups, online and at a local community center.",
    highlights: [
      "Coached 20–30 students aged 11–14",
      "Built the marketing and client pipeline from nothing",
      "Grew out of four years coaching middle school debate voluntarily",
    ],
    featured: true,
  },
  {
    slug: "3i-partners",
    org: "3i Partners",
    role: "Research Intern",
    period: "Summer 2025",
    category: "Finance",
    summary:
      "A venture capital firm investing in social-innovation startups across India, focused on expanding access to medical care and raising standard of living.",
    highlights: [
      "Ran market and company research to support investment recommendations",
      "Risk analysis contributed to Tan90, a food-sanitation startup, receiving investment",
    ],
    featured: true,
  },
  {
    slug: "usc-business",
    org: "USC Business Department",
    role: "Research Intern to Dr. Arvind Bhambri",
    period: "2025",
    category: "Research",
    summary:
      "Developed a case study on platform and software-as-a-service business models, and how model choice shapes a company's financial direction.",
    highlights: [
      "Reviewed and synthesized case studies on SaaS and platform economics",
      "Analyzed academic literature and argued an interpretation of it",
    ],
  },
  {
    slug: "investment-club",
    org: "Investment Club",
    role: "President",
    period: "2024 — 2026",
    category: "Leadership",
    summary:
      "Took over a club that had been inactive for a year and rebuilt it, then took the team into national competition.",
    highlights: [
      "Grew membership from 3 to 40",
      "Led the team account to a 39% return",
      "Competed in the Wharton Global Youth Investment Challenge",
    ],
  },
  {
    slug: "debate",
    org: "Speech & Debate",
    role: "Public Forum Captain, and coach",
    period: "2019 — 2026",
    category: "Leadership",
    summary:
      "Seven years of competitive debate, then four years teaching it — as a volunteer coach at Stratford Fremont Osgood Middle School alongside my own competition.",
    highlights: [
      "Ranked among the top 100 debaters in the nation",
      "League Champion and League Finalist in Public Forum",
      "Coached middle schoolers to finalist or champion in 4 of 9 tournaments a year",
    ],
  },
];

// ── Programs, awards, service ────────────────────────────────

export const programs = [
  {
    name: "Leangap Startup Incubator",
    detail: "UC Berkeley summer program — won Best Pitch, Leangap San Francisco",
  },
  {
    name: "Economics for Leaders",
    detail:
      "Cornell University — 1 of 40 students accepted; won the program pitch competition",
  },
  {
    name: "UCSD Research Scholar",
    detail: "Business Research for Innovation, Design, Growth and Entrepreneurship",
  },
  {
    name: "iStartValley",
    detail: "Three-month startup pitch competition",
  },
];

export const awards = [
  "Top 100 debater in the nation",
  "League Champion & League Finalist, Public Forum Debate",
  "Best Pitch — Leangap San Francisco",
  "Pitch competition winner — Economics for Leaders, Cornell",
  "Bronze Presidential Service Medal — 125+ volunteer hours",
  "Second stage: Diamond Challenge, Conrad Challenge, Blue Ocean Competition",
  "First Robotics Competition — team ranked top 5 nationally",
];

export const service = [
  {
    org: "Second Harvest Food Bank",
    detail: "Prepared and served food boxes for families across Silicon Valley",
  },
  {
    org: "Our City Forest",
    detail: "Planted trees and ran lawn renovations across California",
  },
  {
    org: "India Community Center",
    detail: "Assistant robotics coach — taught 30 beginners to build and code robots",
  },
];

// ── Photography ──────────────────────────────────────────────
//
// TO ADD YOUR PHOTOS:
//   1. Drop image files into  public/photography/
//   2. Set `src` below to  "/photography/your-file.jpg"
//   3. Set width/height to the image's real pixel dimensions
//
// Any entry without a `src` renders as a styled placeholder tile,
// so the page looks intentional until the real photos land.

export type Photo = {
  id: string;
  title: string;
  location?: string;
  src?: string;
  width?: number;
  height?: number;
  /** Rough shape — controls how much room the tile takes in the grid. */
  orientation: "portrait" | "landscape" | "square";
};

// CHECK: all placeholders. Replace titles and locations with real ones.
export const photos: Photo[] = [
  { id: "p1", title: "Untitled", location: "Berkeley, CA", orientation: "landscape" },
  { id: "p2", title: "Untitled", location: "San Francisco, CA", orientation: "portrait" },
  { id: "p3", title: "Untitled", location: "Bay Area", orientation: "square" },
  { id: "p4", title: "Untitled", location: "Washington, D.C.", orientation: "landscape" },
  { id: "p5", title: "Untitled", location: "Berkeley, CA", orientation: "portrait" },
  { id: "p6", title: "Untitled", orientation: "square" },
];

export const photographyIntro =
  "Mostly people and places, shot as I find them. This is the one thing I do that isn't an argument.";
