import PersonIntroCard from '@/components/PersonIntroCard'
import EducationCard from '@/components/bentoGrid/EducationCard'
import Experience from '@/components/bentoGrid/Experience'
import Frontend from '@/components/bentoGrid/skills/Frontend'
import Backend from '@/components/bentoGrid/skills/Backend'
import Devops from '@/components/bentoGrid/skills/Devops'
import Database from '@/components/bentoGrid/skills/Database'
import Languages from '@/components/bentoGrid/skills/Languages'
import Cloud from '@/components/bentoGrid/skills/Cloud'
import Posts from './Posts'
import ProjectCard from '@/components/bentoGrid/projects/ProjectCard'

export default function Home({ posts }) {
  return (
    <>
      <div className="grid grid-cols-3 items-start gap-16">
        <PersonIntroCard
          className="col-span-1"
          animProps={{
            initial: { x: '-20%', opacity: 0 },
            whileInView: { x: 0, opacity: 1 },
            viewport: { once: true, amount: 0 },
            transition: { duration: 0.3, delay: 0, ease: 'easeIn' },
          }}
        />
        <Posts
          posts={posts}
          animProps={{
            initial: { x: '20%', opacity: 0 },
            whileInView: { x: 0, opacity: 1 },
            viewport: { once: true, amount: 0 },
            transition: { duration: 0.3, delay: 0, ease: 'easeIn' },
          }}
        />
      </div>
      <h2
        id="resume"
        className="mt-16 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14"
      >
        Resume
      </h2>
      <div className=" grid w-full grid-cols-4 grid-rows-1 gap-8">
        <EducationCard />
        <Experience />
      </div>

      <h2
        id="skills"
        className="mt-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14"
      >
        Skills & Experiences
      </h2>
      <div className="grid w-full grid-cols-3 grid-rows-1 gap-8">
        <Frontend />
        <Backend />
        <Devops />
        <Database />
        <Languages />
        <Cloud />
      </div>
      <h2
        id="projects"
        className="mt-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14"
      >
        Projects
      </h2>
      <div className="grid w-full grid-cols-2 grid-rows-1 gap-8">
        <ProjectCard
          link={''}
          finished={true}
          title={'CraftOne'}
          desc={
            'CraftOne was a lightweight and user-friendly website builder optimized for high performance. It featured AI-guided design assistance powered by a LLM.'
          }
          img={'/static/images/craftone.png'}
          stack={[
            { icon: 'nextjs2', name: 'NextJs' },
            { icon: 'reactjs', name: 'React' },
            { icon: 'typescript', name: 'Typescript' },
            { icon: 'tailwindcss', name: 'Tailwind' },
            { icon: 'mongodb', name: 'MongoDB' },
          ]}
        />
        <ProjectCard
          link={''}
          finished={false}
          title={'ShipFaster'}
          desc={' It featured AI-guided design assistance powered by a LLM.'}
          img={'/static/images/shipfast.webp'}
          stack={[
            { icon: 'nextjs2', name: 'NextJs' },
            { icon: 'reactjs', name: 'React' },
            { icon: 'typescript', name: 'Typescript' },
            { icon: 'tailwindcss', name: 'Tailwind' },
            { icon: 'postgresql', name: 'PostgreSQL' },
          ]}
        />
      </div>
    </>
  )
}
