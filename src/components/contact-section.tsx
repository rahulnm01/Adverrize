"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.05),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 rounded-full px-4 py-1.5 border-primary/30 text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Let's Make Something Great Together!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to scale your business? Book a free audit and discover untapped growth opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Form */}
          <div className="bg-card/80 border border-border rounded-2xl p-6 lg:p-10">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Book Your Free Audit
            </h3>
            <p className="text-muted-foreground mb-8">
              Fill in your details and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted/50 border-border focus:border-primary h-12 rounded-xl"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/50 border-border focus:border-primary h-12 rounded-xl"
                  required
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                  Website URL
                </label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="bg-muted/50 border-border focus:border-primary h-12 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 text-base font-semibold group"
              >
                Get Free Audit
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Right - Contact Info & CTA */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Big CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We'd love to hear about your goals and how we can help you achieve them. Let's discuss your next big project.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Contact Details */}
<a className="cursor-pointer hover:bg-card hover:scale-[1.02] transition"
  href={`https://mail.google.com/mail/?view=cm&to=adverrize@gmail.com&su=Free Audit&body=${encodeURIComponent(
    `Name: ${formData.name}
Email: ${formData.email}
Website: ${formData.website}`
  )}`}
  target="_blank"
>
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border cursor-pointer hover:bg-card transition">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
      <Mail className="w-5 h-5 text-primary" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">Email</p>
      <p className="font-medium text-foreground">adverrize@gmail.com</p>
    </div>
  </div>
</a>

              {/* <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+91 </p>
                </div>
              </div> */}

              {/* <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Delhi NCR, India</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
     
    </section>
  )
}
