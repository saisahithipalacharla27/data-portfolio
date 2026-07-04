import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">

      {/* IMAGE */}
      {project.image ? (
        <div className="bg-gray-100 flex items-center justify-center h-72">
  <img
    src={project.image}
    alt={project.title}
    className="max-w-full max-h-full object-contain"
  />
</div>
      ) : (
        <div className="w-full h-60 bg-gradient-to-br from-blue-100 via-slate-100 to-cyan-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 flex flex-col items-center justify-center">
          <div className="text-6xl">📊</div>
          <p className="mt-3 font-semibold text-slate-700 dark:text-slate-200">
            Dashboard Preview
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Upload Image
          </p>
        </div>
      )}

      {/* CONTENT */}
      <div className="p-7">

        {/* TITLE */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
          {project.description}
        </p>

        {/* HIGHLIGHTS */}
        {project.highlights && (
          <div className="mt-6 space-y-3">
            {project.highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span className="text-slate-700 dark:text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-900 dark:bg-slate-800 text-white px-5 py-3 rounded-lg hover:bg-black transition"
          >
            <FaGithub />
            GitHub
          </a>

           {/* <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-blue-600 text-blue-600 dark:text-blue-400 px-5 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>  */}

        </div>

      </div>
    </div>
  );
}