"use client"

import { Search, Lightbulb, Rocket, LineChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    number: "01",
    title: "Audience",
    description: "Identify and understand the target demographic who will engage with your brand and convert into customers.",
    icon: Search,
    highlights: ["Market Research", "Competitor Analysis", "Customer Personas"],
  },
  {
    number: "02", 
    title: "Plan & Sketch",
    description: "Develop a structured strategy and visual blueprint to guide campaign creation for maximum impact.",
    icon: Lightbulb,
    highlights: ["Ad Strategy", "Creative Brief", "Budget Planning"],
  },
  {
    number: "03",
    title: "Customize",
    description: "Tailor content, design, and targeting to suit your specific brand requirements and audience preferences.",
    icon: Rocket,
    highlights: ["Custom Creatives", "A/B Testing", "Personalization"],
  },
  {
    number: "04",
    title: "Tracking & Optimization",
    description: "Continuously monitor performance metrics and make data-driven adjustments to achieve desired outcomes.",
    icon: LineChart,
    highlights: ["Real-time Analytics", "Weekly Reports", "ROI Tracking"],
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5 border-primary/30 text-primary">
            Workflow
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our proven 4-step process ensures consistent results and transparent collaboration from day one.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connector Line (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
              )}
              
              <div className="relative bg-card/80 border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:bg-card transition-all duration-500">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-muted/50 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {step.highlights.map((highlight, hIndex) => (
                    <span
                      key={hIndex}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
