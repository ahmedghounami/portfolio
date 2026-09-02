"use client";

import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

/**
 * Obsidian & Black Luxury Animated Background:
 * - Ultra-deep dark radial base
 * - Subtle ambient monochrome & silver glow orbs
 * - Precision dark grid overlay
 * - Dynamic atmospheric light sweeps
 */
type AnimatedBackgroundProps = {
  className?: string;
  showGrid?: boolean;
  intensity?: number;
};

export default function AnimatedBackground({
  className,
  showGrid = true,
  intensity = 1,
}: AnimatedBackgroundProps) {
  const orbScale = Math.max(0.7, Math.min(1.5, intensity));

  return (
    <div
      className={clsx(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050507]",
        className
      )}
    >
      {/* Deep Obsidian Radial Spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(39,39,42,0.4) 0%, rgba(9,9,11,0.8) 50%, rgba(5,5,7,1) 100%)",
        }}
      />

      {/* Floating Ambient Dark Orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 blur-[120px] rounded-full bg-gradient-to-br from-zinc-700/20 via-zinc-800/10 to-transparent"
        style={{
          width: `${32 * orbScale}rem`,
          height: `${32 * orbScale}rem`,
        }}
        animate={{ y: [0, 20, -10, 0], x: [0, 15, -10, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-32 blur-[140px] rounded-full bg-gradient-to-br from-neutral-600/15 via-zinc-900/10 to-transparent"
        style={{
          width: `${36 * orbScale}rem`,
          height: `${36 * orbScale}rem`,
        }}
        animate={{ y: [0, -25, 15, 0], x: [0, -15, 10, 0], scale: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 left-1/4 blur-[130px] rounded-full bg-gradient-to-tr from-zinc-700/10 via-neutral-800/10 to-transparent"
        style={{
          width: `${30 * orbScale}rem`,
          height: `${30 * orbScale}rem`,
        }}
        animate={{ y: [0, 15, -15, 0], x: [0, -10, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Precision Dark Grid Overlay */}
      {showGrid && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 80%)",
          }}
        />
      )}

      {/* Subtle dynamic sheen */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ opacity: 0.03 }}
        animate={{ opacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.06) 40%, transparent 80%)",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Vignette depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050507]" />
    </div>
  );
}
