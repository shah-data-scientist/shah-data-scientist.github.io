const certs = [
  { name: 'CISA', org: 'ISACA', year: '2025', color: 'emerald' },
  { name: 'AAIA™', org: 'ISACA — Advanced in AI Audit', year: 'Jun 2026', color: 'blue' },
  { name: 'RNCP Level 7', org: 'OpenClassrooms — Data Scientist ML', year: '2026', color: 'purple' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">01 / about</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The auditor who can build the systems he audits
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a multidisciplinary expert with a{' '}
                <span className="text-slate-200 font-semibold">15-year career spanning finance, SAP GRC consulting, and IT audit</span>{' '}
                — including 8+ years specialising in IT Audit and governance since 2016.
                CISA-certified (2025) and pursuing the AAIA™ Advanced in AI Audit credential from ISACA.
              </p>
              <p>
                At Alstom I designed and owned the group-level IT audit programme — 6 audits led directly,
                material findings with financial exposure in the millions of euros, and a full SAP GRC Access
                Control deployment covering 40+ countries. SOX, GDPR, ISO 27001, Trade Secret and Competition
                Law compliance across a global industrial group.
              </p>
              <p>
                Since 2024 I have complemented that career with a{' '}
                <span className="text-slate-200 font-semibold">Master-level qualification in AI/ML</span>{' '}
                (RNCP Level 7) and 12 production projects — including an{' '}
                <span className="text-emerald-400">IAM anomaly detection platform</span>{' '}
                that applies NMF role mining and XGBoost drift scoring to exactly the access review workflows
                I audited at Alstom.
              </p>
              <p>
                My target: senior <span className="text-slate-200 font-semibold">AI Governance</span>,
                AI Audit, or IT Audit roles — open to{' '}
                <span className="text-slate-200 font-semibold">interesting opportunities worldwide</span>.
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

          {/* Right — certifications + languages */}
          <div className="space-y-6">
            {/* Certifications */}
            <div>
              <h3 className="text-slate-500 text-xs font-mono tracking-wider uppercase mb-3">Certifications</h3>
              <div className="space-y-3">
                {certs.map((c) => (
                  <div
                    key={c.name}
                    className={`flex items-start gap-4 p-4 border rounded-xl bg-[#0d1b2e]/60 ${
                      c.color === 'emerald'
                        ? 'border-emerald-500/25'
                        : c.color === 'blue'
                        ? 'border-blue-500/25'
                        : 'border-purple-500/25'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold font-mono shrink-0 ${
                        c.color === 'emerald'
                          ? 'bg-emerald-500/15 text-emerald-400'
                          : c.color === 'blue'
                          ? 'bg-blue-500/15 text-blue-400'
                          : 'bg-purple-500/15 text-purple-400'
                      }`}
                    >
                      {c.name.slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-slate-200 font-semibold text-sm">{c.name}</div>
                      <div className="text-slate-500 text-xs">{c.org}</div>
                      <div className="text-slate-600 text-xs mt-0.5">{c.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-slate-500 text-xs font-mono tracking-wider uppercase mb-3">Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { lang: 'French', level: 'Fluent' },
                  { lang: 'English', level: 'Fluent' },
                  { lang: 'Hindi', level: 'Fluent' },
                  { lang: 'Chinese (Mandarin)', level: 'Conversational' },
                ].map(({ lang, level }) => (
                  <div key={lang} className="flex items-center justify-between px-3 py-2 bg-[#07111f] border border-[#1a3050] rounded-lg">
                    <span className="text-slate-300 text-xs">{lang}</span>
                    <span className="text-slate-600 text-xs">{level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community */}
            <div className="p-4 border border-[#1a3050] rounded-xl bg-[#0d1b2e]/60">
              <h3 className="text-slate-500 text-xs font-mono tracking-wider uppercase mb-2">Community</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                <span className="text-slate-200">Co-Lead</span> — SAP GRC Governance Risk &amp; Compliance Workgroup,
                SAP ERP French Clients Community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
