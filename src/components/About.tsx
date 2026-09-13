export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">01 / about</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The auditor who can build the systems he audits
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I work at the intersection of{' '}
              <span className="text-slate-200 font-semibold">IT audit, GRC, and AI governance</span>.
              CISA-certified (2025) and AAIA™ Advanced in AI Audit certified (2026), both from ISACA.
            </p>
            <p>
              Alongside those credentials I hold a{' '}
              <span className="text-slate-200 font-semibold">Master's in Data Science, ML and AI</span>{' '}
              and have built 12 end-to-end AI/ML projects — data pipeline through to
              deployable system (API, tests, containerisation) — including an{' '}
              <span className="text-emerald-400">IAM anomaly detection platform</span>{' '}
              that applies NMF role mining and XGBoost drift scoring to access review workflows.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/shahulshaik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
