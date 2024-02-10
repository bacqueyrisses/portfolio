export default function AnimatedTitle() {
  return (
    <>
      <h1 className="hidden select-none space-y-1 text-5xl font-bold leading-none tracking-tight sm:block">
        <span
          data-content="Full-stack developer,"
          className="relative bottom-0 left-0 top-0 whitespace-nowrap before:absolute before:z-0 before:animate-gradient-background-1 before:text-zinc-800 before:content-[attr(data-content)] dark:before:text-zinc-100"
        >
          <span className="animate-gradient-foreground-1 bg-gradient-to-r from-gradient-1-start to-gradient-1-end bg-clip-text text-transparent">
            Full-stack developer,{' '}
          </span>
        </span>
        <span
          data-content="typescript"
          className="relative bottom-0 left-0 top-0 whitespace-nowrap before:absolute before:z-0 before:animate-gradient-background-2 before:text-zinc-800 before:content-[attr(data-content)] dark:before:text-zinc-100"
        >
          <span className="animate-gradient-foreground-2 bg-gradient-to-r from-gradient-2-start to-gradient-2-end bg-clip-text text-transparent">
            typescript
          </span>
        </span>
        <div>
          <span
            data-content="enthusiast"
            className="relative bottom-0 left-0 top-0 whitespace-nowrap before:absolute before:z-0 before:animate-gradient-background-2 before:text-zinc-800 before:content-[attr(data-content)] dark:before:text-zinc-100"
          >
            <span className="animate-gradient-foreground-2 bg-gradient-to-r from-gradient-2-start to-gradient-2-end bg-clip-text text-transparent">
              enthusiast
            </span>
          </span>
          <span> and </span>
          <span
            data-content="next.js lover."
            className="relative bottom-0 left-0 top-0 whitespace-nowrap before:absolute before:z-0 before:animate-gradient-background-3 before:text-zinc-800 before:content-[attr(data-content)] dark:before:text-zinc-100"
          >
            <span className="animate-gradient-foreground-3 bg-gradient-to-r from-gradient-3-start to-gradient-3-end bg-clip-text text-transparent">
              next.js lover.
            </span>
          </span>
        </div>
      </h1>
      <h1 className="block select-none space-y-1 text-4xl font-bold leading-none tracking-tight sm:hidden">
        <span
          data-content="Full-stack developer,"
          className="relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:animate-gradient-background-1 before:text-zinc-800 before:content-[attr(data-content)] dark:before:text-zinc-100"
        >
          <span className="animate-gradient-foreground-1 bg-gradient-to-r from-gradient-1-start to-gradient-1-end bg-clip-text text-transparent">
            {' '}
            Full-stack developer,
          </span>
        </span>
        <span
          data-content="typescript enthusiast"
          className="relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:animate-gradient-background-2 before:text-zinc-800 before:content-[attr(data-content)] dark:before:text-zinc-100"
        >
          <span className="animate-gradient-foreground-2 bg-gradient-to-r from-gradient-2-start to-gradient-2-end bg-clip-text text-transparent">
            {' '}
            typescript enthusiast
          </span>
        </span>
        <span className={'inline-block'}>and</span>{' '}
        <span
          data-content="next.js lover."
          className="relative inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:animate-gradient-background-3 before:text-zinc-800 before:content-[attr(data-content)] dark:before:text-zinc-100"
        >
          <span className="animate-gradient-foreground-3 bg-gradient-to-r from-gradient-3-start to-gradient-3-end bg-clip-text text-transparent">
            {' '}
            next.js lover.
          </span>
        </span>
      </h1>
    </>
  )
}
