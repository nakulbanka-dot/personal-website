// ─────────────────────────────────────────────────────────────
// Everything personal lives here. Edit this file, not the pages.
//
// Anything marked PLACEHOLDER is invented — replace it with the
// real thing. Nothing outside this file needs to change.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Nakul Banka",
  // Shown under your name in the header of every page.
  role: "Student & software builder",
  location: "Berkeley, California",
  // PLACEHOLDER: swap for whichever address you want public.
  email: "nakulbanka@berkeley.edu",
  url: "https://nakulbanka.com", // PLACEHOLDER: your eventual domain
  // One line, used for SEO and link previews.
  description:
    "Nakul Banka is a student at UC Berkeley building software for the web — tools, side projects, and writing about what he learns making them.",
} as const;

export const links = [
  { label: "GitHub", href: "https://github.com/nakulbanka-dot" },
  // PLACEHOLDER: fill in or delete any of these.
  { label: "LinkedIn", href: "https://linkedin.com/in/" },
  { label: "X", href: "https://x.com/" },
] as const;

// The lead paragraph on the homepage. Keep it to two or three sentences.
export const intro =
  "I study at UC Berkeley and spend most of my time building things on the web — small tools, side projects, and the occasional essay about what I learn making them.";

// Longer bio for the About page. Each string is its own paragraph.
export const bio = [
  // PLACEHOLDER: all three paragraphs.
  "I'm a student at UC Berkeley, where I spend a lot of time thinking about how software feels to use — not just whether it works. Most of what I build starts as a small annoyance in my own day that I decide to fix properly.",
  "I like the parts of a project where design and engineering stop being separate concerns: the loading state that makes an app feel fast, the data model that makes a feature trivial instead of impossible, the copy on an empty screen. I care about the details that survive contact with real users.",
  "Outside of that I read more than I finish, walk around Berkeley thinking about problems instead of solving them at a desk, and keep a running list of ideas that will almost certainly never get built.",
];

// The About page "Currently" list — short, present-tense, easy to keep fresh.
export const currently = [
  // PLACEHOLDER: all four.
  "Studying at UC Berkeley",
  "Building a handful of side projects, slowly and properly",
  "Learning my way deeper into systems and interface design",
  "Open to internships and interesting collaborations",
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  status: "Live" | "Building" | "Archived";
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

// PLACEHOLDER: every project below is invented to show the layout.
// Replace them with real work — or cut the list down to one honest entry.
export const projects: Project[] = [
  {
    slug: "fieldnotes",
    title: "Fieldnotes",
    year: "2026",
    status: "Building",
    blurb:
      "A note-taking tool built around the idea that most notes are never read again — so capture should cost nothing and retrieval should do the work.",
    tags: ["Next.js", "TypeScript", "SQLite"],
    repo: "https://github.com/nakulbanka-dot",
    featured: true,
  },
  {
    slug: "transit",
    title: "Transit",
    year: "2025",
    status: "Live",
    blurb:
      "A live map of East Bay transit that answers one question well: should I leave now, or in ten minutes?",
    tags: ["React", "Mapbox", "Real-time data"],
    repo: "https://github.com/nakulbanka-dot",
    featured: true,
  },
  {
    slug: "course-compass",
    title: "Course Compass",
    year: "2025",
    status: "Live",
    blurb:
      "Course planning for Berkeley students — prerequisites, workload, and schedule conflicts in one view instead of six browser tabs.",
    tags: ["Next.js", "Postgres", "Data scraping"],
    repo: "https://github.com/nakulbanka-dot",
    featured: true,
  },
  {
    slug: "semaphore",
    title: "Semaphore",
    year: "2024",
    status: "Archived",
    blurb:
      "A tiny CLI for running and comparing shell commands side by side. Built to settle an argument about which approach was faster.",
    tags: ["Go", "CLI"],
    repo: "https://github.com/nakulbanka-dot",
  },
];

export type Block =
  | { type: "p" | "h2" | "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO — used for sorting and the printed date
  summary: string;
  body: Block[];
};

// PLACEHOLDER: both posts. Delete the writing section entirely if you'd
// rather not have a blog — see the note at the bottom of this file.
export const posts: Post[] = [
  {
    slug: "building-in-public",
    title: "Notes on building in public",
    date: "2026-08-14",
    summary:
      "Sharing unfinished work is uncomfortable in a way that turns out to be the point.",
    body: [
      {
        type: "p",
        text: "The hardest part of putting a project online isn't the deploy step. It's the moment just before, when the thing is obviously unfinished and you have to decide whether unfinished is allowed to be public.",
      },
      {
        type: "p",
        text: "I've been trying to move that line. Not because visibility is valuable on its own — most of what I post gets read by nobody — but because writing about a project forces a kind of honesty that building alone doesn't.",
      },
      { type: "h2", text: "What actually changes" },
      {
        type: "p",
        text: "When I know I'll have to describe a decision, I make different decisions. Clever solutions that would be embarrassing to explain get replaced by boring ones that aren't. That's a real filter, and it's cheap.",
      },
      {
        type: "list",
        items: [
          "You find the parts you don't understand, because they're the parts you can't summarize.",
          "You stop confusing effort with progress — a paragraph about three weeks of work is either interesting or it isn't.",
          "You get corrected earlier, by people who've already made the mistake you're about to.",
        ],
      },
      {
        type: "quote",
        text: "Writing about the work is not separate from the work. It's the part where you find out what you actually think.",
      },
      {
        type: "p",
        text: "None of this requires an audience. It just requires writing as though there might be one.",
      },
    ],
  },
  {
    slug: "first-side-project",
    title: "What I learned shipping a side project nobody asked for",
    date: "2026-06-02",
    summary:
      "Scope is the whole game, and I lost it several times before I understood the rules.",
    body: [
      {
        type: "p",
        text: "I started with a weekend idea and finished four months later. The gap between those two numbers is the entire lesson, and it wasn't caused by the hard parts.",
      },
      { type: "h2", text: "The features were never the problem" },
      {
        type: "p",
        text: "The core of the thing took about a week. The rest went to everything around it: auth, empty states, what happens on a slow connection, what happens when the data is wrong. None of that is glamorous and all of it is the actual product.",
      },
      {
        type: "p",
        text: "If I did it again I'd build the ugly version end to end first — every screen, badly — and only then make any of it good. Depth-first is how side projects die at ninety percent.",
      },
      { type: "h2", text: "Shipping is a skill, separately" },
      {
        type: "p",
        text: "Deciding something is done is a muscle. Mine was weak. What helped was writing the announcement before the last round of polish, then only fixing things that made the announcement untrue.",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Removing the writing section:
//   1. delete src/app/writing/
//   2. remove the "Writing" entry from `nav` below
//   3. delete the writing block in src/app/page.tsx
// ─────────────────────────────────────────────────────────────

export const nav = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
] as const;
