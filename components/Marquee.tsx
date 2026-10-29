const ITEMS = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Supabase",
  "PostgreSQL",
  "Socket.io",
  "React Native",
  "C++",
  "Docker",
  "Playwright",
  "Tailwind CSS",
  "FFmpeg",
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div
      aria-hidden
      className="marquee-paused relative overflow-hidden border-y border-line py-5"
      style={{ maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}
    >
      <div className="marquee" style={{ ["--marquee-duration" as string]: "50s" }}>
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 text-2xl font-medium tracking-tight text-dim transition-colors hover:text-fg sm:text-3xl">
            {item}
            <span className="text-signal text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
