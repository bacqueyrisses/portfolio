import { Container } from '@/components/Container'

import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/icons/SocialIcons'
import { CameraIcon } from '@/components/icons/CustomIcons'
import HomeClient from './home-page'
import SocialLink from '@/components/SocialLink'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Link from 'next/link'
import AnimatedTitle from '@/components/AnimatedTitle'

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <AnimatedTitle />
          <p className="mt-6 text-base tracking-tight text-zinc-600 dark:text-zinc-400 sm:tracking-normal">
            I'm Enzo, my goal is to create optimized and beautiful websites
            using the latest technologies in the JavaScript full-stack
            ecosystem. I'm passionate about open source projects and have
            specialized in Next.js & TypeScript.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/bacqueyrisses"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.github.com/bacqueyrisses"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/bacqueyrisses/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <Link
              href={'https://www.photos.enzo.codes'}
              className="group -m-1 scale-[0.85] p-1"
              target={'_blank'}
            >
              <CameraIcon className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-700 dark:fill-zinc-400 dark:group-hover:fill-zinc-200" />
            </Link>
          </div>
        </div>
      </Container>

      <HomeClient>
        <Contact />
        <Resume />
      </HomeClient>
    </>
  )
}
