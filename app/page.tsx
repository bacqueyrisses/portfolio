import { Container } from "@/components/Container"

import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons/SocialIcons"
import HomeClient from "./home-page"
import SocialLink from "@/components/SocialLink"
import Resume from "@/components/Resume"
import Contact from "@/components/Contact"

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full-stack developer, typescript enthusiast and next.js lover.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
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
