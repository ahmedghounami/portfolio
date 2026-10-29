"use client"

import { useEffect, useRef } from "react"

const GAP = 28
const RADIUS = 170

/**
 * Fixed dot-grid field. Dots near the pointer are pushed away and light up in the
 * signal colour; a slow diagonal wave keeps the field alive when the pointer is idle.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let raf = 0
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (reduce) draw(0)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      mouse.x += (mouse.tx - mouse.x) * 0.12
      mouse.y += (mouse.ty - mouse.y) * 0.12
      const cols = Math.ceil(w / GAP) + 1
      const rows = Math.ceil(h / GAP) + 1
      const ox = (w % GAP) / 2
      const oy = (h % GAP) / 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = ox + i * GAP
          let y = oy + j * GAP
          const wave = reduce ? 0 : Math.sin(i * 0.25 + j * 0.18 - t * 0.0009) * 0.5 + 0.5
          const dx = x - mouse.x
          const dy = y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const f = dist < RADIUS ? 1 - dist / RADIUS : 0

          if (f > 0) {
            const push = f * f * 14
            x += (dx / (dist || 1)) * push
            y += (dy / (dist || 1)) * push
            ctx.fillStyle = `rgba(197, 247, 79, ${0.15 + f * 0.75})`
            ctx.beginPath()
            ctx.arc(x, y, 0.8 + f * 1.4, 0, Math.PI * 2)
            ctx.fill()
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${0.05 + wave * 0.06})`
            ctx.fillRect(x - 0.6, y - 0.6, 1.2, 1.2)
          }
        }
      }
    }

    const loop = (t: number) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX
      mouse.ty = e.clientY
    }
    const onLeave = () => {
      mouse.tx = -9999
      mouse.ty = -9999
    }
    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden && !reduce) raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener("resize", resize)
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true })
      document.addEventListener("pointerleave", onLeave)
      document.addEventListener("visibilitychange", onVisibility)
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerleave", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Signal glow from the top */}
      <div
        className="absolute inset-x-0 -top-40 h-[70vh]"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(197,247,79,0.07), transparent 70%)" }}
      />
      {/* Fade the grid out towards the edges */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 90% 80% at 50% 40%, transparent 40%, var(--bg) 100%)" }}
      />
    </div>
  )
}
