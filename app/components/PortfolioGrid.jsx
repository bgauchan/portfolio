
import Heading from "./Heading";
import Image from "next/image";
import projects from "../projects";

const Portfolio = ({ project }) => {
  const isPopsql = project.logo === '/popsql-white.svg';

  return (
    <li
      style={{ 
        background: project.bgColor,
        color: project.bgColor && 'white',
        boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.05)'
      }}
      className={`bg-white px-5 py-6 md:p-8 rounded-xl grid ${project.bgColor ? (isPopsql ? 'lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_380px]' : '') : 'md:grid-cols-[1fr_300px]'} 2xl:grid-cols-1 gap-10 border border-[#ede8e2] items-center ${isPopsql ? 'lg:col-span-2 2xl:col-span-1' : ''}`}>
      <div>
        <div className="flex gap-4 items-center mb-6">
          <img
            src={project.logo}
            alt="logo"
            height={project.logoHeight || 20}
            width={project.logoWidth || 120}
            loading="lazy"
          />
        </div>

        <p className={`mb-6`}>{project.desc}</p>

        <a className={`${project.bgColor ? 'text-white' : 'text-black'} border py-2 px-4 rounded-md text-sm font-medium inline-flex gap-2 hover:bg-black hover:border-black hover:text-white`} href={project.ctaUrl} target="_blank">
          {project.ctaText}
          <Image className="transform rotate-90" src={`/open_link_arrow${project.bgColor ? '_white' : ''}.svg`} alt="arrow link icon" height="10" width="8" />
        </a>
      </div>

      {project.images && (
        <div>
          <div className="grid grid-cols-2 gap-3 max-w-lg">
            {project.images.map((img, index) => (
              <img
                key={index}
                className="border rounded-lg"
                src={img}
                alt={'thumbnail ' + index}
                height="100"
                width="250"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}

      {project.image && (
        <div className="max-w-lg">
          <img
            className="rounded-lg"
            src={project.image}
            alt="thumbnail"
            height="120"
            width="500"
            loading="lazy"
          />
        </div>
      )}
    </li>
  )
}

const PortfolioGrid = () => {
  return (
    <section className="px-6 md:px-12 py-10 w-full overflow-scroll flex flex-col gap-10">
      <Heading type="h2">Work</Heading>
      <div>
        <Heading>Design Engineer</Heading>
        <ul className="mt-6 grid gap-3 lg:grid-cols-2 2xl:grid-cols-3">
          {projects.marketing.map((proj) => (
            <Portfolio key={proj.id} project={proj} />
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <Heading>Product Designer</Heading>

        <ul className="mt-6 grid gap-4 2xl:grid-cols-2">
          {projects.design.map((proj) => (
            <Portfolio key={proj.id} project={proj} />
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <Heading>UX Engineer</Heading>

        <ul className="mt-6 grid gap-3 2xl:grid-cols-2">
          {projects.eng.map((proj) => (
            <Portfolio key={proj.id} project={proj} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PortfolioGrid;