'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Capstone from '@/components/Capstone'
import Roadmap from '@/components/Roadmap'
import Contact from '@/components/Contact'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-[#07111f] min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Capstone />
      <Roadmap />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#1a3050] text-center">
        <p className="text-slate-600 text-sm font-mono">
          Shahul SHAIK · Paris, France · Available July 2026
        </p>
      </footer>
    </main>
  )
}
