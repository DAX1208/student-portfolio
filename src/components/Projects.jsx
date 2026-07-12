function Projects({ projects }) {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <strong>{project.title}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
