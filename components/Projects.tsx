import Link from 'next/link'
import { ChevronRightIcon } from './icons/CustomIcons'

import { projects } from '@/data/projects'

interface IProjects {
  focusedProject: number | null
}
export default function Projects({ focusedProject }: IProjects) {
  return (
    <div
      id="projects-section"
      className="flex flex-col gap-16 sm:scroll-mt-24 md:scroll-mt-28"
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className={'group relative flex flex-col items-start'}
        >
          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <div
              className={`absolute -inset-x-4 -inset-y-6 z-0 opacity-0 transition duration-500 ease-in-out group-hover:scale-100 group-hover:bg-zinc-50 group-hover:opacity-100 dark:group-hover:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl ${
                focusedProject === project.id
                  ? 'scale-[0.98] bg-zinc-50 opacity-100 transition-all dark:bg-zinc-800/50'
                  : 'scale-95'
              }`}
            />
            <Link target={'_blank'} href={project.link}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">
                <div
                  className={
                    'relative z-10 order-first mb-3 flex items-center justify-between pl-3.5 text-sm text-zinc-400 dark:text-zinc-500'
                  }
                >
                  {project.date}
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  </span>
                  <div
                    className={
                      'bg-secondary group inline-flex flex-grow-0 items-center space-x-2 self-start rounded-full border border-transparent px-2.5 py-0.5 text-zinc-600 transition-colors dark:text-zinc-400'
                    }
                  >
                    <span
                      className={`${
                        project.live
                          ? 'bg-teal-400 group-hover:animate-pulse'
                          : 'bg-yellow-500'
                      } h-2.5 w-2.5 rounded-full`}
                    ></span>
                    <span
                      className={
                        'text-xs font-normal md:text-sm md:font-medium'
                      }
                    >
                      {project.live ? 'Live' : 'WIP'}
                    </span>
                  </div>
                </div>
                {project.title}
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                >
                  Visit website
                  <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
                </div>
              </span>
            </Link>
          </h2>
        </div>
      ))}
    </div>
  )
}
