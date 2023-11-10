import Image from 'next/image'
import clsx from 'clsx'
import nextai from '@/images/websites/nextai.webp'
import postai from '@/images/websites/postai.webp'
import ouvrage from '@/images/websites/ouvrage.webp'
import { SetStateAction } from 'react'

interface IWebsites {
  setFocusedProject: React.Dispatch<SetStateAction<number | null>>
}
export default function Websites({ setFocusedProject }: IWebsites) {
  const handleClick = (index: number) => {
    const element = document.getElementById('projects-section')
    element && element.scrollIntoView({ behavior: 'smooth' })

    setFocusedProject(index + 1)

    setTimeout(() => {
      setFocusedProject(null)
    }, 3000)
  }
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex flex-col items-center justify-center gap-5 overflow-hidden px-4 py-4 sm:flex-row sm:gap-8">
        {[nextai, postai, ouvrage].map((image, imageIndex) => (
          <button
            onClick={() => handleClick(imageIndex)}
            key={image.src}
            className={clsx(
              'relative aspect-[16/10] w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-96 sm:rounded-2xl',
            )}
          >
            <Image
              src={image}
              alt="enzo bacqueyrisses website"
              className="h-11/12 absolute inset-0 m-auto w-11/12 rounded-xl object-cover transition duration-500 ease-in-out  hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
