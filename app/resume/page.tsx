import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import PersonIntroCard from '@/components/PersonIntroCard'

export const metadata = genPageMetadata({ title: 'About' })

const ResumeSection = ({ title, children }) => (
  <div className=" mb-6 cursor-pointer rounded-2xl p-8 shadow-lg duration-500 hover:scale-105 dark:bg-zinc-900">
    <h2 className="mb-2 border-b-[1px] border-gray-200 pb-2 text-xl font-bold text-primary-500 dark:border-gray-700">
      {title}
    </h2>
    <div className="mt-2">{children}</div>
  </div>
)

const Resume = () => {
  return (
    <div className="col-span-2 h-full overflow-auto rounded-lg p-6 ">
      <h1 className="mb-4 text-3xl font-bold">Resume</h1>

      <ResumeSection title="Education">
        <ul className=" pl-5">
          <li>
            <strong>10.2024 - present:</strong> M.Sc. in Computer Science, University of Bonn
            <ul className="list-circle pl-5">
              <li>Expected graduation: Autumn 2026</li>
            </ul>
            <strong>2020 - 10.2024:</strong> B.Sc. in Computer Science, University of Bonn
            <ul className="list-circle pl-5">
              <li>
                Bachelor's thesis:
                <a
                  className="italic text-primary-500 underline hover:text-primary-300"
                  href={
                    'https://www.dice.uni-bonn.de/hpca/documents/abschlussarbeiten/2024_bachelor_jan_niclas_hardtke.pdf'
                  }
                  target="_blank"
                >
                  "Second Order Methods for Neural Network Optimization"
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>2018:</strong> Abitur (German high school diploma)
            <ul className="list-circle pl-5">
              <li>Grade: 1.6 (German grading system, equivalent to approx. 3.4 GPA)</li>
            </ul>
          </li>
        </ul>
      </ResumeSection>

      <ResumeSection title="Professional Experience">
        <div className="mb-4">
          <h3 className="font-semibold">Working Student, BWI (Winter 2023 - Present)</h3>
          <ul className=" pl-5">
            <li>Focused on the development of a secure messenger based on the Matrix protocol</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">
            Co-Founder and Developer, CraftOne / FH Applications UG (2021 - 2023)
          </h3>
          <ul className="pl-5">
            <li>
              Developed an innovative website editor with manual and LLM-guided design capabilities
            </li>
            <li>
              Tech stack:
              <ul className=" pl-5">
                <li>Frontend: TypeScript, Tailwind CSS, React, Next.js</li>
                <li>Backend: Python, Golang, GraphQL</li>
                <li>Database: MongoDB (replica set)</li>
              </ul>
            </li>
            <li>
              Implemented custom hosting infrastructure:
              <ul className=" pl-5">
                <li>Designed and developed a cluster file system</li>
                <li>
                  Orchestrated a container cluster using HashiCorp Nomad (Kubernetes alternative)
                </li>
                <li>Implemented service discovery using HashiCorp Consul</li>
              </ul>
            </li>
          </ul>
        </div>
      </ResumeSection>

      <ResumeSection title="Skills">
        <ul className=" pl-5">
          <li>Programming Languages: TypeScript, Python, Golang</li>
          <li>Web Technologies: React, Next.js, Tailwind CSS, GraphQL</li>
          <li>Databases: MongoDB</li>
          <li>DevOps: Docker, HashiCorp Nomad, HashiCorp Consul</li>
          <li>System Architecture: Microservices, Distributed Systems</li>
          <li>Machine Learning: Neural Network Optimization (academic focus)</li>
        </ul>
      </ResumeSection>

      <ResumeSection title="Projects">
        <ul className="pl-5">
          <li>
            <strong>Secure Messenger Development:</strong> Contributing to the creation of a secure
            communication platform using the Matrix protocol.
          </li>
          <li>
            <strong>Website Editor with LLM Integration:</strong> Developed a cutting-edge website
            editor that combines manual design capabilities with AI-driven suggestions and
            automation.
          </li>
          <li>
            <strong>Custom Hosting Infrastructure:</strong> Built a scalable and resilient hosting
            solution, including a custom cluster file system and container orchestration.
          </li>
        </ul>
      </ResumeSection>

      <ResumeSection title="Languages">
        <ul className=" pl-5">
          <li>German (native)</li>
          <li>English (proficient)</li>
        </ul>
      </ResumeSection>
    </div>
  )
}

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div className="grid grid-cols-3 items-start gap-16">
        <PersonIntroCard className="col-span-1" />
        <Resume />
      </div>
    </>
  )
}
