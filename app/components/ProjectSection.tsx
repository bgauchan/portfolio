import Heading from './Heading';
import PortfolioCard from './PortfolioCard';
import { Project } from '../types/project';

interface ProjectSectionProps {
  title: string;
  projects: Project[];
}

const ProjectSection = ({ title, projects }: ProjectSectionProps) => {
  return (
    <div className="mt-2">
      <Heading>{title}</Heading>
      <ul className="mt-6 grid gap-3 2xl:grid-cols-2 4xl:grid-cols-4">
        {projects.map((proj) => (
          <PortfolioCard key={proj.id} project={proj} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectSection;
