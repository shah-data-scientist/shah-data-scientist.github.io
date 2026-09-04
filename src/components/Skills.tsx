const skillGroups = {
  'Audit & Compliance': {
    icon: '🏛️',
    accent: 'border-emerald-500/20 hover:border-emerald-500/40',
    tag: 'bg-emerald-500/10 text-emerald-400',
    items: ['SOX', 'EU GDPR', 'EU AI Act', 'ISO 27001', 'ITGC', 'ITAC', 'SoD Analysis', 'IT Audit Programme Design', 'Risk & Controls'],
  },
  'AI Governance': {
    icon: '⚖️',
    accent: 'border-blue-500/20 hover:border-blue-500/40',
    tag: 'bg-blue-500/10 text-blue-400',
    items: ['AI Risk Assessment', 'AI Model Governance', 'LLM Fine-tuning Governance', 'LLM Red-Teaming', 'LLM Evaluation (RAGAS)', 'LangSmith Tracing', 'ML Model Evaluation', 'EU AI Act Compliance', 'Algorithmic Auditing', 'NIST SP 800-53 Mapping'],
  },
  'SAP & ERP': {
    icon: '🔧',
    accent: 'border-orange-500/20 hover:border-orange-500/40',
    tag: 'bg-orange-500/10 text-orange-400',
    items: ['SAP GRC Access Control', 'SAP Authorizations', 'SAP FI/CO', 'SAP ABAP', 'Master Data Governance', 'Process Mining (Signavio)', 'SoD Risk Remediation'],
  },
  'Machine Learning': {
    icon: '🤖',
    accent: 'border-purple-500/20 hover:border-purple-500/40',
    tag: 'bg-purple-500/10 text-purple-400',
    items: ['scikit-learn', 'XGBoost', 'LightGBM', 'PyTorch', 'SHAP', 'NMF', 'CatBoost', 'SMOTE', 'MLflow', 'ONNX Runtime', 'Optuna'],
  },
  'LLM & RAG': {
    icon: '🧠',
    accent: 'border-indigo-500/20 hover:border-indigo-500/40',
    tag: 'bg-indigo-500/10 text-indigo-400',
    items: ['Mistral AI', 'Google Gemini', 'Claude Haiku', 'LangChain', 'LangGraph', 'LangSmith', 'FAISS', 'RAGAS', 'QLoRA / LoRA', 'unsloth', 'CLIP', 'ResNet-50', 'Vector Search', 'Embeddings'],
  },
  'MLOps & DevOps': {
    icon: '⚙️',
    accent: 'border-yellow-500/20 hover:border-yellow-500/40',
    tag: 'bg-yellow-500/10 text-yellow-400',
    items: ['Docker', 'GitHub Actions', 'FastAPI', 'Streamlit', 'Gradio', 'LangSmith (Observability)', 'Logfire', 'PostgreSQL', 'Redis', 'Nginx', 'Alembic', 'Poetry'],
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a1828]/60">
      <div className="max-w-5xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">03 / skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Expertise Stack</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          A rare combination: 15 years of audit and GRC practice with Master-level AI/ML engineering credentials.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillGroups).map(([category, { icon, accent, tag, items }]) => (
            <div
              key={category}
              className={`p-6 border rounded-xl bg-[#0d1b2e]/80 transition-colors ${accent}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{icon}</span>
                <span className="text-slate-200 font-semibold text-sm">{category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium ${tag}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Science Methods bar */}
        <div className="mt-8 p-6 border border-[#1a3050] rounded-xl bg-[#0d1b2e]/80">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📐</span>
            <span className="text-slate-200 font-semibold text-sm">Data Science Methods</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Exploratory Data Analysis',
              'Feature Engineering',
              'Cross-validation & Model Selection',
              'Statistical Hypothesis Testing',
              'Cost-sensitive Learning',
              'Semi-supervised Learning',
              'Transfer Learning',
              'Instruction Tuning',
              'RAG Architecture Design',
              'Multi-agent System Design',
              'CRISP-DM',
            ].map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-purple-500/10 text-purple-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Professional skills bar */}
        <div className="mt-8 p-6 border border-[#1a3050] rounded-xl bg-[#0d1b2e]/80">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🤝</span>
            <span className="text-slate-200 font-semibold text-sm">Professional Skills</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Stakeholder Communication',
              'Executive Report Writing',
              'Risk Quantification',
              'Independent Assessment',
              'Regulatory Interpretation',
              'Vendor Management (External Audit Firms)',
              'Programme Management',
              'Cross-functional Leadership',
              'Change Management',
            ].map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-700/40 text-slate-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages bar */}
        <div className="mt-8 p-6 border border-[#1a3050] rounded-xl bg-[#0d1b2e]/80">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">💬</span>
            <span className="text-slate-200 font-semibold text-sm">Programming &amp; Query Languages</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { lang: 'Python', level: 'Advanced' },
              { lang: 'SQL', level: 'Advanced' },
              { lang: 'SAP ABAP', level: 'Proficient' },
              { lang: 'Power Query (M)', level: 'Proficient' },
              { lang: 'Bash / Makefile', level: 'Proficient' },
            ].map(({ lang, level }) => (
              <div key={lang} className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/60 rounded-md">
                <span className="text-slate-200 text-xs font-mono">{lang}</span>
                <span className="text-slate-600 text-xs">—</span>
                <span className="text-slate-500 text-xs">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
