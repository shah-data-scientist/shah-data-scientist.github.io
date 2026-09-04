const experiences = [
  {
    period: 'Feb – Jul 2024',
    role: 'Director — SAP Consulting & Business Transformation',
    company: 'Devoteam',
    location: 'Paris, France',
    highlight: false,
    tags: ['SAP Signavio', 'Process Mining', 'M&A / Carve-out'],
    bullets: [
      'Led end-to-end Business Process Reengineering for a multi-billion dollar Mining sector spin-off — standardised processes across all global sites post-carve-out',
      'Used SAP Signavio Process Mining to measure efficiency KPIs: headcount per process, cycle time reduction, risk exposure metrics',
      'Managed 6 direct reports; reported directly to C-suite of client organisation',
    ],
  },
  {
    period: 'Nov 2019 – Jan 2024',
    role: 'Group IT Internal Audit Manager',
    company: 'Alstom',
    location: 'Paris, France',
    highlight: true,
    tags: ['SOX', 'GDPR', 'ISO 27001', 'SAP GRC', 'ITGC/ITAC'],
    bullets: [
      'Designed and owned the annual IT audit programme at group level — 4 to 6 audits led directly per year, plus cybersecurity and penetration testing engagements delivered through external audit firms',
      'Conducted ITGC and ITAC testing on business-critical global ERP applications — findings presented to EVPs and country CIOs / IT Directors',
      'Identified material findings with substantial financial exposure across billion-euro programmes',
      'Deployed SAP GRC Access Control from scratch — full SoD risk remediation and role redesign across global SAP landscape',
      'SOX, EU GDPR, Trade Secret and Competition Law compliance across 40+ countries',
    ],
  },
  {
    period: 'Jun 2018 – Oct 2019',
    role: 'Senior Manager — ERP Audit & Controls Consulting',
    company: 'Eviden (formerly Atos)',
    location: 'Paris, France',
    highlight: false,
    tags: ['PERFORMER Platform', 'SAP', 'Commercial Proposals'],
    bullets: [
      'Sole subject matter expert for the PERFORMER audit platform within Eviden globally post-acquisition',
      'Represented PERFORMER commercially in SAP transformation bids to large enterprises worldwide',
      'Drove product roadmap — translated client inputs into new features executed by the development team',
    ],
  },
  {
    period: 'Jan 2016 – May 2018',
    role: 'Senior Consultant — SAP GRC',
    company: 'Mazars',
    location: 'Paris, France',
    highlight: false,
    tags: ['SAP GRC', 'ABAP', 'Audit Automation'],
    bullets: [
      "Led long-term SAP GRC engagement for France's leading chemical group — primary contact for CFO office on SoD risk remediation",
      'Reduced SAP authorisation audit duration from 10 days to 1 day with Power Query automation',
      'Conducted deep analysis of custom SAP ABAP code — identified critical security vulnerabilities beyond standard risk catalogues',
    ],
  },
  {
    period: 'Sep 2013 – Dec 2014',
    role: 'Program Manager — Logistics',
    company: 'Amazon',
    location: 'Paris, France / India',
    highlight: false,
    tags: ['Logistics', 'Cross-border', 'Escalation Management'],
    bullets: [
      'Number 2 for France outbound logistics — sole responsible for all cross-border flows from France to EU (30+ carriers)',
      'Led change management for two major technology implementations',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0a1828]/60">
      <div className="max-w-5xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">02 / experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">15-Year Career · 8+ Years in IT Audit &amp; GRC</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          From financial analysis and operations to SAP GRC consulting and group-level IT audit at Alstom —
          a career built on making complex systems auditable, explainable, and compliant.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[#1a3050]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 md:left-5 top-5 w-2.5 h-2.5 rounded-full border-2 ${
                    exp.highlight
                      ? 'bg-emerald-500 border-emerald-400'
                      : 'bg-[#0d1b2e] border-[#1a3050]'
                  }`}
                />

                <div
                  className={`p-5 border rounded-xl transition-colors ${
                    exp.highlight
                      ? 'border-emerald-500/25 bg-[#0d1b2e]/80'
                      : 'border-[#1a3050] bg-[#0d1b2e]/60 hover:border-[#2a4a70]'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-slate-100 font-semibold text-sm">{exp.role}</h3>
                      <p className="text-slate-400 text-sm">
                        {exp.company}
                        <span className="text-slate-600 mx-2">·</span>
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-slate-600 font-mono text-xs shrink-0 mt-0.5">{exp.period}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#07111f] border border-[#1a3050] text-slate-500 rounded text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-emerald-600 mt-1 shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
