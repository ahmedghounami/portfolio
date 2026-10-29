export const profile = {
  name: "Ahmed Ghounami",
  firstName: "Ahmed",
  lastName: "Ghounami",
  roles: ["Full-stack engineer", "Systems programmer", "Product builder"],
  location: "Paris, France",
  timezone: "Europe/Paris",
  email: "ahmedghounami0@gmail.com",
  phone: "+33 7 44 27 03 26",
  phoneHref: "tel:+33744270326",
  github: "https://github.com/ahmedghounami",
  linkedin: "https://www.linkedin.com/in/ahmed-ghounami-a675b1294/",
  cv: "/cv.pdf",
  site: "https://ahmedghounami.vercel.app",
}

export const navItems = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Stack", id: "stack" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
] as const

export const portify = {
  name: "Portify",
  url: "https://portifyapp.vercel.app",
  tagline: "Build your portfolio. Your way.",
  summary:
    "A no-code portfolio builder I designed, engineered and shipped end to end. Pick one of twelve animated templates, import a CV, edit with a live multi-device preview, then publish to a Portify link, deploy an independent Vercel site, or download the full Next.js source.",
  metrics: [
    { value: 12, suffix: "", label: "Animated templates" },
    { value: 347, suffix: "", label: "Unit tests passing" },
    { value: 125, suffix: "", label: "E2E tests · 3 viewports" },
    { value: 32, suffix: "k", label: "Lines of TypeScript" },
  ],
  features: [
    {
      title: "Template engine",
      body: "A typed contract and versioned registry: every template renders the same Zod-validated content schema, so data moves freely between twelve designs.",
    },
    {
      title: "CV import",
      body: "PDF and Word parsing on the server (unpdf, mammoth). Users review every extracted field before it lands; the file is never stored.",
    },
    {
      title: "Live editor",
      body: "Real-time preview at phone, tablet and desktop widths with autosaved drafts. Nothing goes public until you publish.",
    },
    {
      title: "Three ways to ship",
      body: "Publish at /p/your-name, deploy a separate site through the Vercel API with verified aliases, or export a standalone Next.js project as a zip.",
    },
    {
      title: "Secure by default",
      body: "Supabase Auth and Postgres with Row Level Security on every table, rate limits, and an owner-only admin dashboard backed by audited security-definer functions.",
    },
    {
      title: "Motion with manners",
      body: "Every template animates with purpose and falls back to static layouts for visitors who prefer reduced motion.",
    },
  ],
  pipeline: ["CV / Form", "Zod schema", "Template registry", "Live preview", "Publish"],
  outputs: ["/p/your-name", "Vercel deploy", "Next.js export"],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Supabase",
    "PostgreSQL · RLS",
    "Zod",
    "Tailwind CSS 4",
    "shadcn/ui",
    "Motion",
    "Vercel API",
    "Vitest",
    "Playwright",
  ],
  templates: [
    { id: "prism", name: "Prism Bento", for: "Product engineers" },
    { id: "vertex", name: "Vertex Developer", for: "Developers" },
    { id: "nova", name: "Nova Minimal", for: "Engineers" },
    { id: "orbit", name: "Orbit Creative", for: "Designers" },
    { id: "noir", name: "Noir Cinema", for: "Filmmakers" },
    { id: "lumen", name: "Lumen Editorial", for: "Writers" },
    { id: "swiss", name: "Swiss Index", for: "Architects" },
    { id: "frame", name: "Frame Studio", for: "Photographers" },
    { id: "brut", name: "Brut Sticker", for: "Students" },
    { id: "terra", name: "Terra Organic", for: "Researchers" },
    { id: "atlas", name: "Atlas Professional", for: "Consultants" },
    { id: "pulse", name: "Pulse Freelancer", for: "Freelancers" },
  ],
}

export type Project = {
  title: string
  category: string
  filter: "Full-Stack" | "Real-Time" | "Systems" | "Mobile"
  year: string
  description: string
  highlights: string[]
  tech: string[]
  link: string
  image: string
}

export const projects: Project[] = [
  {
    title: "Red Tetris",
    category: "Real-time multiplayer game",
    filter: "Real-Time",
    year: "2026",
    description:
      "Networked multiplayer Tetris battle arena. Socket.io keeps every board in sync, streams live opponent spectrums, and propagates penalty lines with deterministic piece generation.",
    highlights: [
      "Multiplayer rooms with live opponent spectrum views",
      "Deterministic piece sequence shared across clients",
      "Redux Toolkit state with full Jest coverage",
    ],
    tech: ["React", "Redux Toolkit", "Node.js", "Socket.io", "TypeScript", "Jest"],
    link: "https://github.com/ahmedghounami/red-tetris",
    image: "/red-tetris.jpg",
  },
  {
    title: "Hypertube",
    category: "BitTorrent streaming platform",
    filter: "Real-Time",
    year: "2026",
    description:
      "Netflix over torrents. Streams video straight from peer swarms while downloading, transcodes on the fly with FFmpeg, and signs users in with 42 and Google OAuth.",
    highlights: [
      "Piece-prioritised BitTorrent streaming",
      "Real-time FFmpeg transcoding pipeline",
      "Subtitles and movie metadata APIs",
    ],
    tech: ["React", "Node.js", "BitTorrent", "FFmpeg", "PostgreSQL", "Docker", "OAuth 2.0"],
    link: "https://github.com/mme-sbahi/HyperTube",
    image: "/hypertube.jpg",
  },
  {
    title: "ft_transcendence",
    category: "Multiplayer web platform",
    filter: "Full-Stack",
    year: "2025",
    description:
      "Real-time gaming platform with live matchmaking, a Pong engine, WebSocket chat rooms, OAuth sign-in and TOTP two-factor authentication.",
    highlights: [
      "Tournament brackets and live matchmaking",
      "Channels, direct messages and block lists",
      "TOTP two-factor authentication",
    ],
    tech: ["Next.js", "Fastify", "SQLite", "Tailwind CSS", "WebSockets"],
    link: "https://github.com/ahmedghounami/trans",
    image: "/trans.png",
  },
  {
    title: "Swifty Companion",
    category: "Mobile application",
    filter: "Mobile",
    year: "2026",
    description:
      "Mobile companion for the 42 Network. Searches students across campuses through the 42 API and shows levels, skills, projects and evaluation points.",
    highlights: [
      "OAuth 2.0 with token refresh",
      "Radar charts for skill distribution",
      "Campus cluster location lookup",
    ],
    tech: ["React Native", "Expo", "42 API", "TypeScript", "Xcode"],
    link: "https://github.com/ahmedghounami/swifty-companion",
    image: "/swifty-companion.jpg",
  },
  {
    title: "WebServ",
    category: "HTTP server in C++98",
    filter: "Systems",
    year: "2025",
    description:
      "Non-blocking HTTP/1.1 server written from scratch. Multiplexes sockets with epoll/kqueue, runs CGI, handles chunked transfers and parses Nginx-style configs.",
    highlights: [
      "Single-threaded event loop, zero leaks",
      "HTTP/1.1 request pipeline per RFC 2616",
      "CGI execution environment",
    ],
    tech: ["C++98", "HTTP/1.1", "epoll / kqueue", "POSIX sockets"],
    link: "https://github.com/ahmedghounami/httpserver",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*age3Dgxl8sz6LZgDIwOSNQ.png",
  },
  {
    title: "Inception",
    category: "Container infrastructure",
    filter: "Systems",
    year: "2024",
    description:
      "Docker Compose infrastructure on Alpine: Nginx with TLS 1.3, WordPress on PHP-FPM and MariaDB, each in its own container with persistent volumes and an isolated network.",
    highlights: [
      "Multi-container Compose architecture",
      "TLS 1.3 termination at Nginx",
      "Isolated networking and volume persistence",
    ],
    tech: ["Docker", "Nginx", "MariaDB", "Alpine Linux"],
    link: "https://github.com/ahmedghounami/42-inception",
    image: "https://www.appsdeveloperblog.com/wp-content/uploads/2023/05/docker-tutorial-for-beginners.gif",
  },
]

export const stack = [
  {
    title: "Languages",
    code: "lang",
    items: ["TypeScript", "JavaScript", "C", "C++", "Python", "SQL", "HTML / CSS"],
  },
  {
    title: "Frontend",
    code: "web",
    items: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  },
  {
    title: "Backend",
    code: "api",
    items: ["Node.js", "NestJS", "Fastify", "Express", "FastAPI", "Socket.io", "REST", "OAuth 2.0"],
  },
  {
    title: "Data",
    code: "db",
    items: ["PostgreSQL", "Supabase", "MongoDB", "SQLite", "MySQL", "Zod"],
  },
  {
    title: "Mobile",
    code: "app",
    items: ["React Native", "Expo", "Xcode"],
  },
  {
    title: "DevOps & Quality",
    code: "ops",
    items: ["Docker", "Vercel", "Linux / POSIX", "Git", "Vitest", "Playwright", "Jest", "n8n"],
  },
]

export const experience = [
  {
    hash: "a3f9c21",
    org: "TALIO",
    role: "Full-Stack & Automation Engineer Intern",
    period: "2025 · 4 months",
    type: "Internship",
    description:
      "Shipped full-stack features with Next.js, Node.js and Supabase, and automated business workflows with n8n integrations, speeding up data pipelines across production modules.",
    skills: ["Next.js", "Node.js", "Supabase", "n8n"],
    link: "https://www.taliotalent.com/",
  },
  {
    hash: "7be04d8",
    org: "a2xcorp",
    role: "Software Engineering Intern",
    period: "2025 · 2 months",
    type: "Internship",
    description:
      "Built full-stack web features in an agile team: REST endpoints, database work and client-side state management.",
    skills: ["React", "Next.js", "Express", "Databases"],
    link: "https://a2xcorp.com/",
  },
  {
    hash: "42e1337",
    org: "42 Paris · 1337",
    role: "Software Engineering, RNCP Level 7",
    period: "2023 → now",
    type: "Education",
    description:
      "Started at 1337 Khouribga, now at 42 Paris. A project-based curriculum with no teachers or lectures: systems programming in C and C++, algorithms, UNIX, networking and full-stack development, all validated by peer code review.",
    skills: ["C", "C++", "Algorithms", "UNIX", "Networking"],
    link: "https://42.fr/en/homepage/",
  },
  {
    hash: "0dc5e7a",
    org: "Udemy",
    role: "Modern Full-Stack Web Development",
    period: "2024 – 2025",
    type: "Certification",
    description:
      "Courses on React, modern Node.js, NoSQL databases, OAuth flows and frontend state management.",
    skills: ["React", "Node.js", "MongoDB", "Auth"],
    link: "https://www.udemy.com/",
  },
]
