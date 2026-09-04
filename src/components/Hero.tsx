'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '15', label: 'Yr Professional Career' },
  { value: '8+', label: 'Yrs IT Audit & GRC' },
  { value: '12', label: 'AI/ML Projects' },
  { value: 'CISA', label: '+ AAIA™ obtained' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={containerRef}
        className="animate-on-scroll relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-emerald-500/30 rounded-full bg-emerald-500/5 text-emerald-400 text-xs font-mono tracking-wider">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          CISA · AAIA™ · RNCP Level 7 AI/ML — Immediately available
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Shahul{' '}
          <span className="gradient-text">SHAIK</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-slate-400 font-light mb-6">
          Senior IT Audit &amp; AI Governance Expert
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-10">
          15-year career spanning finance, SAP GRC, and IT audit — including 8+ years specialising in
          IT Audit, SAP GRC, and ERP controls. Now with a Master-level AI/ML qualification and 12 production
          ML projects. The auditor who can build the systems he evaluates.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg transition-all text-sm"
          >
            View AI/ML Projects
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border border-[#1a3050] hover:border-emerald-500/40 text-slate-300 hover:text-slate-100 rounded-lg transition-all text-sm"
          >
            Career Timeline ↓
          </a>
          <a
            href="https://github.com/shah-data-scientist"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#1a3050] hover:border-blue-500/40 text-slate-300 hover:text-slate-100 rounded-lg transition-all text-sm"
          >
            GitHub ↗
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 border border-[#1a3050] rounded-xl bg-[#0d1b2e]/60 backdrop-blur"
            >
              <div className="text-xl font-bold text-emerald-400 font-mono">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  )
}
