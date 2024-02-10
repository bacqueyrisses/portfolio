import Link from 'next/link'

import { ContainerInner, ContainerOuter } from './Container'
import Image from 'next/image'
import whiteCoffee from '@/public/images/logos/white-button.png'
import darkCoffee from '@/public/images/logos/black-button.png'

export function Footer() {
  return (
    <footer className="mt-10 flex-none sm:mt-32">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-10 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Enzo Bacqueyrisses
              </p>
              <Link
                href={'https://www.buymeacoffee.com/bacqueyrisses'}
                target={'_blank'}
                className={'cursor-pointer'}
              >
                <Image
                  src={whiteCoffee}
                  width={100}
                  height={100}
                  alt={"Enzo Bacqueyrisses' Buy Me a Coffee logo"}
                  className={'block dark:hidden'}
                />
                <Image
                  src={darkCoffee}
                  width={100}
                  height={100}
                  alt={"Enzo Bacqueyrisses' Buy Me a Coffee logo dark mode"}
                  className={'hidden dark:block'}
                />
              </Link>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
