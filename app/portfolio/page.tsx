import projects from "./projects"; // Import projects list

export default function Portfolio() {
  return (
    <div className="py-16 pt-22">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-700">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              {/* Always show the "Read More" button */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 rounded-lg text-blue-700"
              >
                Read More
              </a>

              {/* Show the "View Code" button only if a GitHub link exists */}
              {project.code && (
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-lg text-blue-700"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}