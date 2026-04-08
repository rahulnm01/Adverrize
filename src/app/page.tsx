import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WorkSection } from "@/components/work-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Adverrize",
      url: "https://www.adverrize.in",
      logo: "https://www.adverrize.in/og-image.png",
      sameAs: [
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
      ],
    }),
  }}
/>