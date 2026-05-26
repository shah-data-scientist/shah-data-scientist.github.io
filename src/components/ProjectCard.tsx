import { Project, domainColorMap } from '@/data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const domainClass = domainColorMap[project.domainColor] ?? 'bg-slate-500/10 text-slate-400 border-slate-500/20'

  return (
    <div className="group relative flex flex-col p-6 border border-[#1a3050] rounded-xl bg-[#0d1b2e]/80 hover:border-emerald-500/25 transition-all duration-300 hover:bg-[#0f2236]/80">
      {/* Capstone badge */}
      {project.isCapsone && (
        <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`inline-block px-2.5 py-0.5 text-xs border rounded-full mb-2 ${domainClass}`}>
            {project.domain}
          </span>
          <h3 className="text-slate-100 font-semibold text-base leading-snug group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-500 text-sm mt-0.5">{project.subtitle}</p>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 transition-colors ml-4 shrink-0"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {project.metrics.map((m) => (
          <div key={m.label} className="text-center p-2 bg-[#07111f]/60 rounded-lg border border-[#1a3050]">
            <div className="text-emerald-400 font-mono font-semibold text-sm">{m.value}</div>
            <div className="text-slate-600 text-xs mt-0.5 leading-tight">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 6).map((t) => (
          <span key={t} className="px-2 py-0.5 bg-[#07111f] border border-[#1a3050] text-slate-500 rounded text-xs font-mono">
            {t}
          </span>
        ))}
        {project.tech.length > 6 && (
          <span className="px-2 py-0.5 text-slate-600 text-xs">+{project.tech.length - 6}</span>
        )}
      </div>
    </div>
  )
}
