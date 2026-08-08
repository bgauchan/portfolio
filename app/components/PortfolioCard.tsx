import Image from 'next/image';
import { Project } from '../types/project';

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  const isPopsql = project.logo === '/popsql-white.svg';
  const isDescript = project.logo === '/descript-logo.svg';

  return (
    <li
      style={{
        background: isDescript ? undefined : project.bgColor,
        color: project.bgColor ? 'white' : undefined,
        boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.05)',
      }}
      className={`bg-white px-5 py-6 md:p-8 rounded-xl grid ${
        project.bgColor
          ? isPopsql
            ? 'md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_380px]'
            : 'md:grid-cols-[1fr_300px]'
          : 'md:grid-cols-[1fr_300px]'
      } 2xl:grid-cols-1 gap-10 border border-[#ede8e2] items-center ${
        isDescript ? 'bg-[radial-gradient(180%_180%_at_20%_0%,#651a39_0%,#822041_75%)]' : ''
      }`}
    >
      <div>
        <div className="flex gap-4 items-center mb-6">
          <Image
            src={project.logo}
            alt={`${project.ctaText} logo`}
            height={project.logoHeight ?? 20}
            width={project.logoWidth ?? 120}
          />
        </div>

        <p className="mb-6">{project.desc}</p>

        <a
          className={`${
            project.bgColor ? 'text-white' : 'text-black'
          } border py-2 px-4 rounded-md text-sm font-medium inline-flex gap-2 hover:bg-black hover:border-black hover:text-white`}
          href={project.ctaUrl}
          target="_blank"
          rel="noreferrer"
        >
          {project.ctaText}
          <Image
            className="transform rotate-90"
            src={`/open_link_arrow${project.bgColor ? '_white' : ''}.svg`}
            alt="arrow link icon"
            height={10}
            width={8}
          />
        </a>
      </div>

      {project.images && (
        <div>
          <div className="grid grid-cols-2 gap-3 max-w-lg">
            {project.images.map((img, index) => (
              <Image
                key={index}
                className="border rounded-lg"
                src={img}
                alt={`thumbnail ${index}`}
                height={100}
                width={250}
              />
            ))}
          </div>
        </div>
      )}

      {project.image && (
        <div className="max-w-lg">
          <Image
            className="rounded-lg"
            src={project.image}
            alt={`${project.ctaText} preview`}
            height={120}
            width={500}
          />
        </div>
      )}
    </li>
  );
};

export default PortfolioCard;
