import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import Image from 'next/image'
import coffee from '@/images/logos/coffee.png'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-10 flex-none sm:mt-32">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-10 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Enzo Bacqueyrisses
              </p>
              <Link
                href={'https://www.buymeacoffee.com/bacqueyrisses'}
                target={'_blank'}
                className={'cursor-pointer'}
              >
                <Image
                  src={coffee}
                  width={80}
                  height={10}
                  alt={"Enzo Bacqueyrisses' Buy Me a Coffee logo"}
                />
              </Link>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
