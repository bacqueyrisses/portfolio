import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import avatarImage from '@/images/logos/logo.webp'
import avatarDarkImage from '@/images/logos/whitelogo.webp'

export default function ScrollableLogo({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  large?: boolean
}) {
  const [scrollPosition, setScrollPosition] = useState<number>(1)
  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const css = { transform: 'rotate(' + scrollPosition + 'deg)' }

  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        style={css}
        src={avatarImage}
        alt={'logo enzo bacqueyrisses'}
        width={60}
        height={60}
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:hidden dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        priority
      />

      <Image
        style={css}
        src={avatarDarkImage}
        alt={'logo enzo bacqueyrisses'}
        width={60}
        height={60}
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'hidden rounded-full bg-zinc-100 object-cover dark:inline dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        priority
      />
    </Link>
  )
}
