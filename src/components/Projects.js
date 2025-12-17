// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard'; 
import { projects } from '@/data/projects'; 

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Meus <span className="text-cyan-400">Projetos</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;