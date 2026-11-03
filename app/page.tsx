import PortfolioClient from "../components/PortfolioClient"
import { experience, profile } from "@/lib/data"

const education = experience.find((e) => e.type === "Education")

/** Tells search engines who this site is about, so the name search shows it as one person. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.site}/#person`,
      name: profile.name,
      givenName: profile.firstName,
      familyName: profile.lastName,
      url: profile.site,
      image: `${profile.site}/profile.jpg`,
      jobTitle: "Full-Stack & Systems Engineer",
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
      sameAs: [profile.github, profile.linkedin],
      ...(education && { alumniOf: { "@type": "EducationalOrganization", name: "42 Paris", url: education.link } }),
      knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "Supabase", "React Native", "C", "C++", "Docker"],
    },
    {
      "@type": "WebSite",
      "@id": `${profile.site}/#website`,
      url: profile.site,
      name: profile.name,
      publisher: { "@id": `${profile.site}/#person` },
    },
    {
      "@type": "ProfilePage",
      url: profile.site,
      name: "Ahmed Ghounami — Full-Stack & Systems Engineer",
      mainEntity: { "@id": `${profile.site}/#person` },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <PortfolioClient />
    </>
  )
}
