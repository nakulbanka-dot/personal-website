// ─────────────────────────────────────────────────────────────
// Everything personal lives here. Edit this file, not the pages.
//
// Facts are taken from Nakul's resume (Sept 2026). Anything marked
// CHECK is inferred or paraphrased — worth a look before publishing.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Nakul Banka",
  role: "Economics & Data Science at UC Berkeley",
  location: "Berkeley, California",
  email: "nakulbanka@berkeley.edu",
  url: "https://nakulbanka.com", // CHECK: your eventual domain
  description:
    "Nakul Banka studies Economics and Data Science at UC Berkeley. Venture capital research, published finance research, and advocacy for the Muwekma Ohlone Tribe.",
  // Served by the Resume button. Lives in public/.
  resume: "/resume.pdf",
} as const;

export const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nakul-banka-946731283",
  },
] as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Photography", href: "/photography" },
] as const;

export const intro =
  "I study Economics and Data Science at UC Berkeley. I've published research on the collapse of Silicon Valley Bank, evaluated startups for two venture funds, and spent two years helping the Muwekma Ohlone Tribe campaign for federal recognition.";

// ── The homepage showcase ────────────────────────────────────
// Order here is the order on screen. Hovering the list swaps the panel.

export type Showcase = {
  slug: string;
  org: string;
  /** Short label for the constellation node — keep it to ~2 words. */
  short: string;
  role: string;
  period: string;
  category: string;
  summary: string;
  highlights: string[];
  stat: {
    /** Numeric part — this is what counts up on screen. */
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
  };
};

export const showcase: Showcase[] = [
  {
    slug: "svb-research",
    short: "SVB Research",
    org: "Silicon Valley Bank Research",
    role: "Independent Researcher, under Prof. Nikunj Kapadia — UMass Amherst",
    period: "Jul 2024 — Feb 2025",
    category: "Published Research",
    summary:
      "A published post-mortem of the Silicon Valley Bank collapse, examining how media coverage and portfolio composition drove the run — written under a finance professor at UMass Amherst.",
    highlights: [
      "Published a 10+ page analysis of the collapse",
      "Interviewed Andrew McCarty, SVB's VP of Finance, on the hour-by-hour decisions around the failure",
      "Traced the path to First Citizens Bank's acquisition amid the FDIC bailout",
    ],
    stat: { value: 2, label: "academic journals published in" }, // CHECK: IJMR + Curieux
  },
  {
    slug: "investment-club",
    short: "Investment Club",
    org: "Investment Club",
    role: "President",
    period: "Aug 2024 — May 2026",
    category: "Leadership",
    summary:
      "Ran the club as president, rebuilding membership and taking a team into national competition while teaching the fundamentals to anyone who turned up.",
    highlights: [
      "Directed 30+ members competing in the Wharton Investment Competition",
      "Taught 60+ students P/E ratios, portfolio diversification, simulations and pitch practice",
    ],
    stat: { value: 225, suffix: "%", label: "growth in membership" },
  },
  {
    slug: "3i-partners",
    short: "3i Partners",
    org: "3i Partners",
    role: "Venture Capital Research Intern",
    period: "Apr 2025 — Oct 2025",
    category: "Venture Capital",
    summary:
      "Diligence work for a venture firm investing in sustainability and social-innovation companies, largely across India.",
    highlights: [
      "Analyzed funding and growth metrics across 4+ startups, leading to an investment from the firm",
      "Evaluated investment strategy for TAN 90, an India-based cold chain solutions company",
    ],
    stat: { value: 4, suffix: "+", label: "startups analyzed for investment" },
  },
  {
    slug: "usc-marshall",
    short: "USC Marshall",
    org: "USC Marshall School of Business",
    role: "Research Intern, under Prof. Arvind Bhambri",
    period: "May 2025 — Nov 2025",
    category: "Business Strategy",
    summary:
      "A growth-strategy engagement with Exxat, a workflow and healthcare education company weighing a pivot between SaaS and platform models.",
    highlights: [
      "Wrote a 10+ page growth analysis of the potential strategy pivot",
      "Met with 5+ Exxat executives to pressure-test the SaaS versus platform question",
    ],
    stat: { value: 5, suffix: "+", label: "company executives consulted" },
  },
  {
    slug: "debate",
    short: "Speech & Debate",
    org: "Speech & Debate",
    role: "Public Forum Captain",
    period: "Aug 2023 — May 2026",
    category: "Debate",
    summary:
      "One of two Public Forum captains leading a team of 50+, competing at the national level while rebuilding the program's size from the inside.",
    highlights: [
      "Ranked T70 nationally and T10 at the California State Championships",
      "Grew team membership by 350%",
      "Now coaching 150+ students across three debate academies",
    ],
    stat: { value: 5, suffix: "x", label: "TOC bids — the most in event history" },
  },
  {
    slug: "muwekma-ohlone",
    short: "Muwekma Ohlone",
    org: "Muwekma Ohlone Tribe",
    role: "Media and Marketing Intern",
    period: "Feb 2025 — May 2026",
    category: "Advocacy",
    summary:
      "The Muwekma Ohlone were struck from the Federal Register in 1927. I worked on the public and legislative case for restoring their federal recognition.",
    highlights: [
      "Contributed to efforts earning $500k+ in non-profit grants",
      "Worked with Reps. Ro Khanna, Eric Swalwell and Emily Randall, and Sen. Alex Padilla",
      "Helped introduce a letter of support for federal recognition",
    ],
    stat: { value: 500, prefix: "$", suffix: "k+", label: "in grants supported" },
  },
];

// Scrolling ticker across the homepage.
export const ticker = [
  "5x TOC bids in Public Forum",
  "T70 debater nationally",
  "Published on the collapse of Silicon Valley Bank",
  "$500k+ in grants supported",
  "Venture Capital Fellow, Pier 70 Ventures",
  "T10 at California States",
  "Coached 150+ debate students",
];

// ── About page ───────────────────────────────────────────────

export const education = [
  {
    school: "University of California, Berkeley",
    detail: "B.A. Economics and B.S. Data Science — expected May 2030",
  },
  {
    school: "Bellarmine College Preparatory",
    detail: "August 2022 — May 2026",
  },
];

export const bio = [
  "I study Economics and Data Science at UC Berkeley. Most of what I've spent my time on connects two things I care about separately: how money and institutions actually work, and who gets left out when they don't work well.",
  "That's taken a few shapes. I researched the collapse of Silicon Valley Bank under a finance professor at UMass Amherst — interviewing the bank's VP of Finance about the hour-by-hour decisions that ended in an FDIC bailout — and published the analysis. I've done diligence for two venture funds, one backing sustainability companies in India and one investing against social determinants of health. And for over a year I worked on media and marketing for the Muwekma Ohlone Tribe, a Bay Area tribe struck from the Federal Register in 1927, on a campaign that reached members of Congress and helped bring in half a million dollars in grants.",
  "The through-line is speech and debate. I competed through high school, captained Public Forum, earned five TOC bids and finished top 70 nationally. Then I started coaching — 150+ students across three academies, and middle school teams into the top 8 at Cal, Stanford and UCLA. Teaching argument turned out to be a better education than winning at it.",
  "Outside of that I photograph, play pickleball and basketball, cook, thrift, and travel.",
];

export const currently = [
  "First year at UC Berkeley — Economics and Data Science",
  "Debate coach at Golden State Academy, Brooks Debate Institute and Stratford",
  "Shooting and building out a photography portfolio",
];

export const otherExperience = [
  {
    org: "Pier 70 Ventures — Venture Capital Fellow",
    detail:
      "Oct 2025 — May 2026. Researched companies working on social determinants of health and health equity. Built an impact report for the fund's 17-company portfolio, quantifying social impact for prospective LPs, alongside managing partner Preetha Ram.",
  },
  {
    org: "Debate Coach — Golden State Academy, Brooks Debate Institute, Stratford",
    detail:
      "May 2026 — Present. Coached 150+ students through mock debates, drills, topic analysis and research lectures. Took 6+ middle school teams to the top 8 of fields of 60–70 at Cal Berkeley, Stanford and UCLA.",
  },
];

export const awards = [
  "5x TOC bids in Public Forum — most in the event in program history",
  "Ranked T70 nationally in Public Forum Debate",
  "T10 at California State Championships",
  "Grew Speech & Debate membership by 350%",
  "Contributed to $500k+ in non-profit grants for the Muwekma Ohlone Tribe",
];

export const interests = [
  "Photography",
  "Pickleball",
  "Basketball",
  "Video games",
  "Thrifting",
  "Writing",
  "Traveling",
  "Cooking",
  "Music",
];

// ── Photography ──────────────────────────────────────────────
//
// TO ADD YOUR PHOTOS:
//   1. Drop image files into  public/photography/
//   2. Set `src` below to  "/photography/your-file.jpg"
//   3. Set width/height to the image's real pixel dimensions
//
// Any entry without a `src` renders as a styled placeholder tile.

export type Photo = {
  id: string;
  title: string;
  location?: string;
  src?: string;
  width?: number;
  height?: number;
  orientation: "portrait" | "landscape" | "square";
};

// CHECK: all placeholders. Replace titles and locations with real ones.
export const photos: Photo[] = [
  { id: "p1", title: "Untitled", location: "Berkeley, CA", orientation: "landscape" },
  { id: "p2", title: "Untitled", location: "San Jose, CA", orientation: "portrait" },
  { id: "p3", title: "Untitled", location: "Bay Area", orientation: "square" },
  { id: "p4", title: "Untitled", location: "San Francisco, CA", orientation: "landscape" },
  { id: "p5", title: "Untitled", location: "Berkeley, CA", orientation: "portrait" },
  { id: "p6", title: "Untitled", orientation: "square" },
];

export const photographyIntro =
  "Mostly people and places, shot as I find them. This is the one thing I do that isn't an argument.";
