import LinkCard from '@/components/LinkCard';
export default function Home() {
  const fire = 'from-amber-500 via-red-500 to-yellow-500';
  const atmosphere = 'from-green-300 via-blue-500 to-purple-600';
  const gradientFire = 'bg-gradient-to-br ' + fire;
  const gradientAtmosphere = 'bg-gradient-to-br ' + atmosphere;
  return (
    <section className="h-full flex flex-col justify-evenly">
      <div className="flex justify-between gap-x-6 sm:gap-x-0 text-transparent">
        <div className={`w-fit sm:w-1/3  md:w-1/2 lg:w-1/2  pb-4 bg-clip-text ${gradientFire}`}>
          <h1
            className={` text-5xl font-san text-left leading-none font-extrabold sm:text-[4rem] lg:text-[5rem] xl:text-[6rem]`}
          >
            Thamer Al-Malki
          </h1>
        </div>
        <div className={`w-fit sm:w-1/3 lg:w-1/3 bg-clip-text pb-4 ${gradientAtmosphere} `}>
          <h2
            className={`text-3xl font-sans text-right pt-14 leading-none font-extrabold sm:text-[3rem] lg:text-[3rem] xl:text-[4rem]`}
          >
            Senior CS Student
          </h2>
        </div>
      </div>
      <div className="pt-16">
        <div>
          <p className="my-5  text-neutral-200  text-2xl lg:text-4xl">
            Hello👋, my name is Thamer. I'm a <b>Senior CS Student at Taif University.</b>
          </p>
          <p className="my-5  text-neutral-200 text-xl">
            I'm Intrested in <b>Game development</b>, <b>networks</b> and everything related to <b>programming</b>. With a deep-rooted curiosity
            of learning new technologies and running through new experiences.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-center pt-16 ">
        <LinkCard
          name="Projects"
          description="All of my projects."
          link="/projects"
        />
        <LinkCard
          name="Resume"
          description="Semi-formal version of my resume in a web format"
          link="/resume"
        />
      </div>
    </section>
  );
}
