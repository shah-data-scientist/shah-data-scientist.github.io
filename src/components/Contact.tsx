export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">06 / contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Available from{' '}
          <span className="text-slate-200 font-semibold">July 2026</span> — open to senior IT Audit,
          AI Governance, and AI Engineering roles in{' '}
          <span className="text-slate-200 font-semibold">interesting opportunities worldwide</span>.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12">
          <a
            href="https://linkedin.com/in/shahulshaik"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 border border-blue-500/30 rounded-xl bg-[#0d1b2e]/80 hover:border-blue-400/60 hover:bg-[#0d1b2e] transition-all group"
          >
            <svg className="w-7 h-7 text-blue-500 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <div>
              <div className="text-slate-200 font-semibold text-sm group-hover:text-white transition-colors">Connect on LinkedIn</div>
              <div className="text-slate-500 text-xs mt-0.5">linkedin.com/in/shahulshaik</div>
            </div>
            <span className="text-blue-500/70 text-xs font-mono group-hover:text-blue-400 transition-colors">preferred ↗</span>
          </a>

          <a
            href="https://github.com/shah-data-scientist"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 border border-[#1a3050] rounded-xl bg-[#0d1b2e]/60 hover:border-slate-500/30 transition-all group"
          >
            <svg className="w-7 h-7 text-slate-500 group-hover:text-slate-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <div>
              <div className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">GitHub</div>
              <div className="text-slate-500 text-xs mt-0.5">shah-data-scientist</div>
            </div>
            <span className="text-slate-600 text-xs font-mono">12 projects ↗</span>
          </a>
        </div>

        {/* Location & availability */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-6 py-4 border border-[#1a3050] rounded-xl bg-[#0d1b2e]/60 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Paris, France — open to worldwide</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-[#1a3050]" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>Available July 2026</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-[#1a3050]" />
          <div className="flex items-center gap-2">
            <span>🇫🇷</span>
            <span>French · EU Work Rights</span>
          </div>
        </div>
      </div>
    </section>
  )
}
