import Heading from './Heading';
import ProjectSection from './ProjectSection';
import projects from '../projects';

const PortfolioGrid = () => {
  return (
    <section className="px-6 md:px-12 py-10 w-full overflow-scroll flex flex-col gap-10">
      <Heading type="h2">Work</Heading>
      <ProjectSection title="Design Engineer" projects={projects.marketing} />
      <ProjectSection title="Product Designer" projects={projects.design} />
      <ProjectSection title="UX Engineer" projects={projects.eng} />
    </section>
  );
};

export default PortfolioGrid;
