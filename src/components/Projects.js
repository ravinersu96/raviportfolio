// src/components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project One</h3>
          <p>
            A description of the project. What tech you used, challenges you
            solved, etc.
          </p>
          <a
            href="https://github.com/yourusername/project-one"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
        <li>
          <h3>Project Two</h3>
          <p>
            A description of the project. What tech you used, challenges you
            solved, etc.
          </p>
          <a
            href="https://github.com/yourusername/project-two"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
