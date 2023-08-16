import ProjectCard from '@/components/ProjectCard';

const projectsData = [
  {
    name: 'Anime-diffusion',
    description: 'Simple Text-to-Image generator in anime style.',
    techStack: ['HTML','CSS','JavaScript','Hugging Face'],
    link: 'https://github.com/ThamerMalki/anime-diffusion',
    repo: 'https://github.com/ThamerMalki/anime-diffusion',
  },
  {
    name: 'Carta',
    description: 'A website for downloading customized greeting cards for Eid Al-Fitr and Eid Al-Adhaa.',
    techStack: ['HTML','CSS','JavaScript','Bootstrap'],
    link: 'https://thamermalki.github.io/Carta/',
    repo: 'https://github.com/ThamerMalki/Carta',
  },
  {
    name: 'Auto-claim channel points',
    description: 'Firefox extension to auto-claim channel points for Twitch.',
    techStack: ['JavaScript','manifest.json'],
    link: 'https://addons.mozilla.org/en-US/firefox/addon/twitch-cp-collector/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search',
    repo: 'https://github.com/ThamerMalki/Twitch-channel-points-collector',
  },
  {
    name: 'CoderHub challanges solutions.',
    description: 'My solutions for the CoderHub challanges.',
    techStack: ['Java'],
    link: 'https://github.com/ThamerMalki/CoderHub-Challenges',
    repo: 'https://github.com/ThamerMalki/CoderHub-Challenges',
  },
  {
    name: 'Mid-point-circle-drawing-Algo',
    description: 'This is an implementation of the Mid-point circle drawing Algorithm in OpenGL.',
    techStack: ['C++','OpenGL'],
    link: 'https://github.com/ThamerMalki/Mid-point-circle-drawing-Algo',
    repo: 'https://github.com/ThamerMalki/Mid-point-circle-drawing-Algo',
  },
  {
    name: 'Anime-List',
    description: 'This is an AnimeList project using the Jikan API (UNOFFICIAL MYANIMELIST API).',
    techStack: ['C++','OpenGL'],
    link: 'https://github.com/ThamerMalki/Anime-List',
    repo: 'https://github.com/ThamerMalki/Anime-List',
  },
];

export default function ProjectsPage() {
  return (
    <section className="text-gray-300 pb-32 lg:px-24 xl:px-0   ">
      <div className="flex justify-between text-transparent pb-8">
        <div className=" bg-clip-text  bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-500">
          <h1 className="text-5xl font-mono leading-none pb-4  font-extrabold sm:text-[2rem] lg:text-[3rem] fon">
            Projects
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3  gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.name + '-card'}
            name={project.name}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
}
