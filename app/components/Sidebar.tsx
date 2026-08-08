import Image from 'next/image';
import Heading from './Heading';
import Button from './Button';

const Sidebar = () => {
  return (
    <aside className="bg-white px-6 md:px-12 pb-12 xl:pb-16 xl:min-h-screen border-b xl:border-r border-[#ede8e2]">
      <div>
        <Image
          src="/character.svg"
          alt="character illustration"
          height={60}
          width={110}
          className="rotate-180 transition hover:-translate-y-5"
        />
      </div>

      <div className="mt-16 md:mt-[10vh]">
        <Heading type="h1">
          Hey, I&apos;m Bardan <span className="text-5xl">👋🏼</span>
        </Heading>

        <p className="mt-6 md:mt-12 text-lg lg:text-[1.07rem] leading-7">
          I&apos;m currently residing in Calgary, Canada and currently work remotely as a
          Webmaster at{' '}
          <a
            href="https://descript.com/"
            target="_blank"
            className="text-black font-medium hover:underline"
          >
            Descript
          </a>
          .
          <br />
          <br />
          In the past, I have worked in roles such as Product Designer and UX Engineer. My true
          passion lies in creating and bringing designs to life through code.
        </p>

        <div className="mt-8 md:mt-10 flex gap-5">
          <a
            href="https://www.linkedin.com/in/bgauchan/"
            target="_blank"
            className="transition hover:scale-125"
          >
            <Image src="/linkedin.svg" alt="linkedin icon" height={32} width={32} />
          </a>
          <a
            href="https://github.com/bgauchan"
            target="_blank"
            className="transition hover:scale-125"
          >
            <Image src="/github.svg" alt="github icon" height={32} width={32} />
          </a>
          <a
            href="https://dribbble.com/iisbardan"
            target="_blank"
            className="transition hover:scale-125"
          >
            <Image src="/dribbble.svg" alt="dribbble icon" height={32} width={32} />
          </a>
          <a
            href="https://codepen.io/iisbardan"
            target="_blank"
            className="transition hover:scale-125"
          >
            <Image src="/codepen.svg" alt="codepen icon" height={32} width={32} />
          </a>
        </div>

        <div className="mt-12 md:mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
          <Button link="/resume.pdf">
            View my Resume
          </Button>
          <Button link="mailto:bardan.gauchan@gmail.com" type="primary">
            Let&apos;s work together
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
