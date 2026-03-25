"use client"

import { Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Tanvi Sharma",
    role: "Owner, Spark Point",
    content: "ADVERRIZE is an exceptional marketing agency. Their expertise in creating engaging content has significantly grown my online presence and doubled our monthly revenue.",
    rating: 5,
  },
  {
    name: "Praveen Rana",
    role: "Manager, Quil Up",
    content: "Working with ADVERRIZE has been a game-changer for our business. They took the time to understand our brand and created a personalized strategy that resonates with our audience.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "MD, Adiyogi's",
    content: "They helped me take my photography business to the next level. They redesigned my website with a stunning portfolio and implemented a successful SEO strategy to attract more organic traffic.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5 border-primary/30 text-primary">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Clients Feedback
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/80 border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <CardContent className="p-6 lg:p-8">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
