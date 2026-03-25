"use client"

import { CheckCircle2, Zap, Shield, Clock, Award, HeartHandshake } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Every decision is backed by data. We optimize relentlessly for ROI, not vanity metrics.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description: "Real-time dashboards and weekly reports. You always know exactly where your budget goes.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Launch campaigns within 48 hours. We move fast without compromising quality.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "Google & Meta certified team with 5+ years managing multi-crore ad budgets.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Direct access to your account manager. No ticket systems, just real conversations.",
  },
  {
    icon: CheckCircle2,
    title: "Results Guaranteed",
    description: "100% client retention speaks for itself. We don't rest until you see results.",
  },
]

const services = [
  "Social Media Management",
  "Meta Ads (Facebook & Instagram)",
  "Google Ads (Search & Display)",
  "SEO & Content Strategy",
  "Website Design & Development",
  "Analytics & Reporting",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,217,95,0.03),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5 border-primary/30 text-primary">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Your Growth Partner in Digital
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're not just an agency – we're an extension of your team, committed to scaling your business through strategic advertising.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Services */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Services We Offer
            </h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl border border-border bg-card/30 hover:bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-muted/50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
