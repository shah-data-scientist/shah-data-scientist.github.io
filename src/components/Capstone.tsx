export default function Capstone() {
  const results = [
    { metric: 'XGBoost ROC-AUC', value: '0.694 ± 0.010', note: 'Proxy labels (access denials)' },
    { metric: 'Roles Mined (k)', value: '15', note: 'BIC-optimised, A–O named' },
    { metric: 'NMF Coverage Rate', value: '35.1%', note: 'Top-50 threshold; expected >60% at top-200' },
    { metric: 'Fleet High Drift Rate', value: '76.8%', note: 'Requires threshold recalibration' },
    { metric: 'Balanced Risk Score (mean)', value: '0.5965', note: 'Normalises after recalibration' },
    { metric: 'API Latency (drift score)', value: '< 10ms', note: 'Per (employee, system) pair' },
  ]

  const phases = [
    { phase: 'Phase 1', name: 'Data Pipeline', status: 'done', desc: 'Download UCI dataset, preprocess, build 343×7,518 matrix' },
    { phase: 'Phase 2', name: 'NMF Role Mining', status: 'done', desc: 'BIC-optimised k=15, soft membership weights W and H' },
    { phase: 'Phase 3', name: 'Drift Scorer + XGBoost', status: 'done', desc: 'Hybrid rule + classifier with SHAP explanations' },
    { phase: 'Phase 4', name: 'FastAPI + Streamlit', status: 'done', desc: '3-page dashboard, 7 REST endpoints, fleet analytics' },
    { phase: 'Phase 5', name: 'Docker + PostgreSQL + Redis', status: 'done', desc: 'Full containerised stack, simulation persistence, audit trail' },
    { phase: 'Phase 6', name: 'Auth + LDAP + Retraining', status: 'deferred', desc: 'OAuth2/JWT, Active Directory enrichment, scheduled retraining' },
  ]

  return (
    <section id="capstone" className="py-24 px-6 bg-[#0a1828]/60">
      <div className="max-w-5xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">04 / capstone</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Access Management Platform
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl">
          Projet 13 capstone — an open-source IAM anomaly detection system built on the UCI Amazon
          Employee Access dataset. Comparable to what SailPoint and Saviynt commercialise at
          €50–200k/yr licensing, deployable on CPU-only infrastructure.
        </p>

        {/* Architecture diagram */}
        <div className="mb-10 p-5 border border-[#1a3050] rounded-xl bg-[#07111f]">
          <p className="text-slate-500 font-mono text-xs mb-3 tracking-wider">ARCHITECTURE</p>
          <pre className="text-slate-400 text-xs leading-relaxed font-mono overflow-x-auto">
{`Browser / corporate network
           │
      ┌────▼──────┐
      │   Nginx   │  :80
      └──┬──────┬─┘
  /api/*          /
┌──▼────────┐  ┌─▼──────────┐
│  FastAPI  │  │ Streamlit  │
│ gunicorn  │  │ Dashboard  │
│ 2 workers │  │            │
│           │  │ 01 Access  │
│ /users    │  │    Intel   │
│ /roles    │  │ 02 User    │
│ /drift    │  │    Review  │
│ /analytics│  │ 03 Simulate│
└──┬──────┬─┘  └────────────┘
   │      │
┌──▼───┐ ┌▼──────────┐
│Redis │ │ PostgreSQL │
│cache │ │ Simulations│
│ 24h  │ │ Audit Log  │
└──────┘ └────────────┘
   ↑
Alembic migrate (startup)`}
          </pre>
        </div>

        {/* Results table */}
        <div className="mb-10">
          <h3 className="text-slate-200 font-semibold mb-4">Model Evaluation Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a3050]">
                  <th className="text-left text-slate-500 font-mono text-xs py-2 pr-6">METRIC</th>
                  <th className="text-left text-slate-500 font-mono text-xs py-2 pr-6">VALUE</th>
                  <th className="text-left text-slate-500 font-mono text-xs py-2">INTERPRETATION</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r) => (
                  <tr key={r.metric} className="border-b border-[#1a3050]/50 hover:bg-[#0d1b2e]/40">
                    <td className="py-3 pr-6 text-slate-300 font-mono text-xs">{r.metric}</td>
                    <td className="py-3 pr-6 text-emerald-400 font-mono font-semibold text-sm">{r.value}</td>
                    <td className="py-3 text-slate-500 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <h3 className="text-slate-200 font-semibold mb-4">Delivery Roadmap</h3>
          <div className="space-y-3">
            {phases.map((p) => (
              <div key={p.phase} className="flex items-start gap-4 p-4 border border-[#1a3050] rounded-lg bg-[#0d1b2e]/60">
                <div className="shrink-0 mt-0.5">
                  {p.status === 'done' ? (
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                      <span className="text-emerald-400 text-xs">✓</span>
                    </span>
                  ) : p.status === 'planned' ? (
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                      <span className="text-blue-400 text-xs">○</span>
                    </span>
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-slate-700/40 border border-slate-600/40 flex items-center justify-center">
                      <span className="text-slate-600 text-xs">·</span>
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-0.5">
                    <span className="text-slate-500 font-mono text-xs">{p.phase}</span>
                    <span className="text-slate-200 text-sm font-medium">{p.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs ${
                        p.status === 'done'
                          ? 'bg-emerald-500/10 text-emerald-500'
                          : p.status === 'planned'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-slate-700/40 text-slate-500'
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
