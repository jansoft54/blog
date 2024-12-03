import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import PersonIntroCard from '@/components/PersonIntroCard'
import EducationCard from '@/components/bentoGrid/EducationCard'
import Experience from '@/components/bentoGrid/Experience'
import Frontend from '@/components/bentoGrid/Frontend'
import Backend from '@/components/bentoGrid/Backend'
import Devops from '@/components/bentoGrid/Devops'
import Database from '@/components/bentoGrid/Database'
import Languages from '@/components/bentoGrid/Languages'
import Cloud from '@/components/bentoGrid/Cloud'

const MAX_DISPLAY = 4

export default function Home({ posts }) {
  return (
    <>
      <div className="grid grid-cols-3 items-start gap-16">
        <PersonIntroCard className="col-span-1" />

        <div className=" col-span-2 divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Posts
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-center rounded-md bg-primary-500 p-3 text-base font-medium leading-6 shadow-md">
              <Link
                href="/blog"
                className="text-white duration-200 hover:scale-90"
                aria-label="All posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
      <div id="resume" className="mt-16 grid w-full grid-cols-4 grid-rows-1 gap-8">
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
    </>
  )
}
