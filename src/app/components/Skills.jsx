const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'REST APIs', 'PHP', 'SQL', 'NoSQL'],
  },
  {
    title: 'Data & AI',
    icon: '📊',
    skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
  },
  {
    title: 'Other',
    icon: '🚀',
    skills: ['Agile', 'Scrum', 'UI/UX', 'WordPress'],
  },
];

const coreStack = ['React', 'Next.js', 'Node.js', 'Python', 'SQL'];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 animate-fadeIn">
          <span className="inline-block px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
            Tech Stack
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Technologies I use to build modern web applications, APIs, and data-driven projects.
          </p>
        </div>

        {/* Core stack
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {coreStack.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/20 text-white text-sm font-medium shadow-lg shadow-blue-500/10"
            >
              {skill}
            </span>
          ))}
        </div> */}

        {/* Skill cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm bg-white/10 text-gray-200 border border-white/10 transition-all duration-200 hover:bg-white/15 hover:text-white hover:border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-400">
            Currently focused on <span className="text-white font-medium">Next.js</span>,
            <span className="text-white font-medium"> React</span>,
            <span className="text-white font-medium"> Node.js</span>, and
            <span className="text-white font-medium"> Python</span>.
          </p>
        </div>
      </div>
    </section>
  );
}