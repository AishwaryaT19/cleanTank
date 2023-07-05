import dynamic from "next/dynamic";
import React from "react";
import { projects, projectSubHead } from "../components/Info";

const ProjectCard = dynamic(() => {
  return import("components/home/project-card");
});

export default function Process() {
  return (
    <section className="projects">
      <h2>Process</h2>
      <span>{projectSubHead}</span>
      <div className="projects-container">
        {projects.slice(0, 7).map((proj, index) => {
          return <ProjectCard proj={proj} key={String(index)} />;
        })}
      </div>
    </section>
  );
}
