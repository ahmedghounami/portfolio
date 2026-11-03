import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { profile } from "@/lib/data"

export const alt = "Ahmed Ghounami — Full-Stack & Systems Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** The link preview: photo on the right, name and role on the left. */
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "app/og-photo.jpg"))
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#07070a", color: "#ededef" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: 72 }}>
          <div style={{ display: "flex", fontSize: 26, color: "#c5f74f", fontFamily: "monospace" }}>ahmedghounami.tech</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
            <div style={{ marginTop: 24, fontSize: 36, color: "#9a9aa3" }}>Full-stack & systems engineer</div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#9a9aa3" }}>Next.js · React · TypeScript · Node.js · C/C++ · Paris</div>
        </div>
        <img src={src} width={630} height={630} alt="" style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  )
}
