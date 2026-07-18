function Projects({ projects }) {
  return (
    <section>
      <h1>Projects</h1>
      <p>This page highlights sample projects and reusable components.</p>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
