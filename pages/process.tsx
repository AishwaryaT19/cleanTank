import dynamic from "next/dynamic";
import React from "react";
import { processSubHead, projects } from "../components/Info";

const ProcessCard = dynamic(() => {
  return import("components/home/process-card");
});

export default function Process() {
  return (
    <section className="projects">
      <h2>Process</h2>
      <span>{processSubHead}</span>
      <div className="projects-container">
        {projects.slice(0, 7).map((proj, index) => {
          return <ProcessCard proj={proj} key={String(index)} />;
        })}
      </div>
    </section>
  );
}
