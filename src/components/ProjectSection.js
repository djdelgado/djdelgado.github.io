import React from 'react';

import InfoCard from "./InfoCard"

const ProjectSection = () => (
  <section id="projects" className="project-section text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-white mb-5">Projects</h2>
          <InfoCard title="POA"/>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectSection;
