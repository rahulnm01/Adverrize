"use client"

import { useState } from "react"
import { Send, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
  })

  const [loading, setLoading] = useState(false)

  // ✅ UPDATED SUBMIT FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        alert("Form submitted successfully ✅")

        // reset form
        setFormData({
          name: "",
          email: "",
          website: "",
        })
      } else {
        alert("Something went wrong ❌")
      }
    } catch (error) {
      alert("Error submitting form ❌")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.05),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 rounded-full px-4 py-1.5 border-primary/30 text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Make Something Great Together!
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to scale your business? Book a free audit and discover untapped growth opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT - FORM */}
          <div className="bg-card/80 border border-border rounded-2xl p-6 lg:p-10">
            <h3 className="text-2xl font-semibold mb-2">
              Book Your Free Audit
            </h3>
            <p className="text-muted-foreground mb-8">
              Fill in your details and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* WEBSITE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Website URL
                </label>
                <Input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Get Free Audit"}
                <Send className="ml-2 w-5 h-5" />
              </Button>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center space-y-8">

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-muted-foreground mb-6">
                We'd love to hear about your goals and help you achieve them.
              </p>
              <Button className="rounded-full px-8">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* EMAIL BOX */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">adverrize@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}