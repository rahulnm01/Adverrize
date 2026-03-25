"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.05),transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Now accepting new clients for Q2 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">We Turn Clicks</span>
              <br />
              <span className="gradient-text">Into Customers.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Dominate Google and Meta through data-driven advertising. We help high-growth businesses scale with precision-targeted campaigns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold group"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-border hover:bg-muted/50"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button> */}
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Campaigns Launched</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">5Cr+</p>
                <p className="text-sm text-muted-foreground mt-1">Revenue Generated</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Client Retention</p>
              </div>
            </div> */}
          </div>

          {/* Right Content - Ad Previews */}
          <div className="relative lg:h-[600px]">
            <AdPreviewStack />
          </div>
        </div>
      </div>
    </section>
  )
}

function AdPreviewStack() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Instagram Story Preview */}
      <div className="absolute left-0 top-0 lg:top-10 w-48 sm:w-56 transform -rotate-6 hover:rotate-0 transition-all duration-500 z-10">
        <div className="bg-card rounded-2xl border border-border overflow-hidden glow-sm hover:glow transition-all">
          <div className="p-3 flex items-center gap-2 border-b border-border">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500" />
            <span className="text-xs font-medium text-foreground">Story</span>
            <span className="ml-auto text-[10px] text-primary">preview</span>
          </div>
          <div className="aspect-[9/16] bg-gradient-to-br from-secondary/50 to-muted relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Play className="w-8 h-8 text-primary fill-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Feed Preview */}
      <div className="absolute left-20 sm:left-28 top-20 sm:top-32 w-52 sm:w-64 transform rotate-3 hover:rotate-0 transition-all duration-500 z-20">
        <div className="bg-card rounded-2xl border border-border overflow-hidden glow hover:scale-105 transition-all">
          <div className="p-3 flex items-center gap-2 border-b border-border">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500" />
            <span className="text-xs font-medium text-foreground">Instagram Feed</span>
          </div>
          <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative p-4 flex flex-col justify-center items-center">
            <div className="w-20 h-20 rounded-xl bg-primary/30 mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3l-9 9-4-4-5.5 5.5 1.41 1.41L8 10.83l4 4 9.59-9.59L23 6.41 20.5 3z"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground">Boost Your Sales</p>
              <p className="text-xs text-muted-foreground mt-1">Shop Now</p>
            </div>
          </div>
          <div className="p-3 flex items-center gap-4 border-t border-border">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Google Search Ad Preview */}
      <div className="absolute right-0 top-8 sm:top-16 w-56 sm:w-72 transform rotate-6 hover:rotate-0 transition-all duration-500 z-30">
        <div className="bg-card rounded-2xl border border-border overflow-hidden glow-sm hover:glow transition-all">
          <div className="p-3 flex items-center gap-2 border-b border-border">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs font-medium text-foreground ml-1">Search</span>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">Ad</span>
              <span className="text-[10px] text-muted-foreground">www.example.com</span>
            </div>
            <h4 className="text-sm font-semibold text-primary leading-snug">
              Premium Marketing Solutions | Get Results Fast
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Transform your business with data-driven strategies. 500+ successful campaigns. Book your free audit today.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
