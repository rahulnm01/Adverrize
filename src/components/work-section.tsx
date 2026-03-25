"use client"

import { Play, Heart, MessageCircle, Send, Bookmark, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function WorkSection() {
  return (
    <section id="work" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,212,255,0.03),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">
            How Your Brand Will Rise{" "}
            <span className="text-muted-foreground font-normal">(Ad Previews)</span>
          </h2>
        </div>

        {/* Ad Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 max-w-5xl mx-auto">
          
          {/* Instagram Story Card */}
          <div className="md:col-span-3 group">
            <div className="relative bg-card/80 rounded-2xl border border-border overflow-hidden h-full min-h-[320px] flex flex-col">
              {/* Platform Badge */}
              <div className="flex items-center gap-2 p-4 pb-0">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Story</span>
              </div>
              
              {/* Story Content */}
              <div className="flex-1 flex items-center justify-center p-4 relative">
                <div className="relative w-full aspect-[9/16] max-h-[200px] bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Background Arrow Graphics */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-primary/30" viewBox="0 0 100 100" fill="none">
                      <path d="M20 80 L50 20 L80 80 L50 60 Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 12l8-8v6h8v4h-8v6z" />
                    </svg>
                  </div>
                  
                  {/* Play Button */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              
              {/* Preview Link */}
              <div className="p-4 pt-0">
                <span className="text-xs text-muted-foreground">preview</span>
              </div>
            </div>
          </div>

          {/* Instagram Feed Card */}
          <div className="md:col-span-4 group">
            <div className="relative bg-card/80 rounded-2xl border border-border overflow-hidden h-full">
              {/* Platform Badge */}
              <div className="flex items-center gap-2 p-4 pb-3">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Instagram Feed</span>
              </div>
              
              {/* Feed Post */}
              <div className="px-4">
                <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl aspect-square flex items-center justify-center overflow-hidden">
                  {/* Carousel Navigation */}
                  <button className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                  
                  {/* Shopping Bag Icon */}
                  <div className="text-blue-400">
                    <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Instagram Actions */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                    <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                    <Send className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  </div>
                  <Bookmark className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                </div>
                
                {/* Carousel Dots */}
                <div className="flex items-center justify-center gap-1 mt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Google Ads Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Product Carousel Ad */}
            <div className="bg-card/80 rounded-2xl border border-border p-4 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-medium text-foreground">Search</span>
              </div>
              
              <h3 className="text-base font-semibold text-foreground mb-2">Product Carousel Ad</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Creative product for products and tags product carousel.
              </p>
              
              <span className="text-xs text-primary cursor-pointer hover:underline">preview</span>
            </div>

            {/* Google Search Ad */}
            <div className="bg-card/80 rounded-2xl border border-border p-4 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-medium text-foreground">Ad</span>
              </div>
              
              <h3 className="text-base font-semibold text-foreground mb-1">Google Search Ad</h3>
              <p className="text-sm font-medium text-primary mb-2">Highly optimized</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Text based search ad, highly optimized, highly optimized.
              </p>
              
              <span className="text-xs text-primary cursor-pointer hover:underline">preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
