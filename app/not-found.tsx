import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-bg px-6 py-10 sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      <div className="relative font-mono text-xs text-dim">ahmed@ghounami:~</div>

      <div className="relative">
        <p className="font-mono text-sm text-muted">
          <span className="text-signal">❯</span> cd ./this-page
        </p>
        <p className="mt-1 font-mono text-sm text-red-400">zsh: no such file or directory</p>
        <h1 className="mt-8 text-[28vw] font-semibold leading-[0.8] tracking-[-0.07em] text-fg sm:text-[16rem]">
          4<span className="font-serif italic font-normal text-signal">0</span>4
        </h1>
      </div>

      <div className="relative flex flex-wrap items-center gap-3">
        <Link href="/" className="rounded-full bg-signal px-6 py-3 text-sm font-semibold text-black">
          cd ~ (home)
        </Link>
        <Link href="/#work" className="rounded-full border border-line-strong px-6 py-3 text-sm text-fg hover:border-fg">
          See my work
        </Link>
      </div>
    </main>
  )
}
