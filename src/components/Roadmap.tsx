const gaps = [
  {
    icon: '🌐',
    title: 'Multi-Cloud IAM Coverage (Azure RBAC / GCP IAM)',
    why: 'P14 covers AWS IAM only. Swiss financial institutions and international organisations run multi-cloud environments. Extending the fine-tuned model to generate Azure RBAC role definitions and GCP IAM policies would make P14 a cross-cloud governance tool — a direct match for the target employer profile.',
    project: 'Extend the P14 dataset with Azure RBAC and GCP IAM examples. Fine-tune a second LoRA adapter or extend the existing one. Evaluate cross-cloud policy correctness and least-privilege compliance.',
    priority: 'Medium',
  },
  {
    icon: '🔗',
    title: 'AI Supply Chain & SBOM for Machine Learning',
    why: 'EU AI Act Article 13 and emerging AI supply chain regulations require documentation of training data provenance, model dependencies, and third-party components. No candidate in this programme will have a working AI Bill of Materials — but every financial sector employer will need one within 2 years.',
    project: 'Produce an AI SBOM for the IAM Policy Generator (P14): document base model lineage (Meta Llama 3.2), training data provenance (AWS docs + Gemini-synthetic), dependency chain (unsloth, trl, PEFT), and known vulnerabilities. Use CycloneDX ML extension format.',
    priority: 'Low',
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">05 / roadmap</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Towards Rounded AI Governance
        </h2>
        <p className="text-slate-400 mb-3 max-w-2xl">
          LLM fine-tuning, multi-agent systems, RAG evaluation, drift monitoring, EU AI Act
          conformity assessment, and LLM red-teaming are all shipped. Two additions would
          complete the profile for the broadest senior AI Governance mandate:
        </p>
        <p className="text-slate-500 text-sm mb-12 max-w-2xl">
          Multi-cloud IAM extends P14 beyond AWS to match the full enterprise footprint of
          Swiss financial institutions. An AI SBOM positions the portfolio ahead of emerging
          EU AI Act supply chain traceability requirements.
        </p>

        <div className="space-y-5">
          {gaps.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-[#1a3050] rounded-xl bg-[#0d1b2e]/80 hover:border-emerald-500/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-slate-100 font-semibold text-sm">{item.title}</h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs border ${
                        item.priority.startsWith('Critical')
                          ? 'bg-red-500/10 text-red-400 border-red-500/20'
                          : item.priority === 'High'
                          ? 'bg-orange-500/10 text-orange-400 border-orange-500/20'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      }`}
                    >
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-3 leading-relaxed">{item.why}</p>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 text-xs shrink-0 mt-0.5">→</span>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.project}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
