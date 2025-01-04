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
      <div className="flex flex-col items-start gap-16 xl:grid xl:grid-cols-3">
        <PersonIntroCard
          className="xl:col-span-1"
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
      <div className="flex w-full grid-rows-1 flex-col gap-8 xl:grid xl:grid-cols-4">
        <EducationCard />
        <Experience />
      </div>

      <h2
        id="skills"
        className="mt-4 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-3xl md:leading-14"
      >
        Skills & Experiences
      </h2>
      <div className="flex w-full grid-rows-1 flex-col gap-8 xl:grid xl:grid-cols-3">
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
      <div className="flex w-full flex-col gap-8 xl:grid xl:grid-cols-2 xl:grid-rows-1">
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
          desc={
            'Shipfast is a beautifully designed, feature-packed template built to streamline the process of launching SaaS applications quickly and efficiently.'
          }
          img={'/static/images/shipfast.webp'}
          stack={[
            { icon: 'nextjs2', name: 'NextJs' },
            { icon: 'reactjs', name: 'React' },
            { icon: 'typescript', name: 'Typescript' },
            { icon: 'tailwindcss', name: 'Tailwind' },
            { icon: 'postgresql', name: 'PostgreSQL' },
          ]}
        />
        <ProjectCard
          link={'https://github.com/jansoft54/Building-Llama3-100M'}
          finished={true}
          title={'TinyLlama 3'}
          desc={
            'A from-scratch, 50M-parameter implementation of Meta’s LLaMA 3 model. It supports RoPE (rotary positional encodings), grouped query attention (GQA), and a KV cache. Trained on the TinyStories dataset, the model is capable of generating short, coherent stories.'
          }
          img={'/static/images/llama3.webp'}
          stack={[
            { icon: 'python', name: 'Python' },
            { icon: 'pytorch', name: 'PyTorch' },
          ]}
        />
      </div>
    </>
  )
}
