import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">03 / projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
        <p className="text-slate-500 mb-12 max-w-xl">
          Production ML systems across security, finance, healthcare, agriculture, and AI — each
          deployed with a REST API, tests, and documentation.
        </p>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Divider */}
        {others.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-[#1a3050]" />
              <span className="text-slate-600 text-xs font-mono tracking-wider">OTHER PROJECTS</span>
              <div className="h-px flex-1 bg-[#1a3050]" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* All projects CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/shah-data-scientist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a3050] hover:border-emerald-500/40 text-slate-400 hover:text-slate-200 rounded-lg transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View all repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
