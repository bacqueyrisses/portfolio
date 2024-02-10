export default function AnimatedTitle() {
  return (
    <h1 className="select-none space-y-2 text-4xl font-bold leading-none tracking-tight text-zinc-800 dark:text-zinc-100 sm:space-y-0 sm:text-5xl">
      <span
        data-content="Full-stack developer,"
        className="relative bottom-0 left-0 top-0 whitespace-nowrap before:absolute before:z-0 before:animate-gradient-background-1 before:text-black before:content-[attr(data-content)]"
      >
        <span className="animate-gradient-foreground-1 bg-gradient-to-r from-gradient-1-start to-gradient-1-end bg-clip-text text-transparent">
          Full-stack developer,{' '}
        </span>
      </span>
      <span
        data-content="typescript"
        className="relative bottom-0 left-0 top-0 whitespace-nowrap before:absolute before:z-0 before:animate-gradient-background-2 before:text-black before:content-[attr(data-content)]"
      >
        <span className="animate-gradient-foreground-2 bg-gradient-to-r from-gradient-2-start to-gradient-2-end bg-clip-text text-transparent">
          typescript
        </span>
      </span>
      <div>
        <span
          data-content="enthusiast"
          className="relative bottom-0 left-0 top-0 whitespace-nowrap before:absolute before:z-0 before:animate-gradient-background-2 before:text-black before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-2 bg-gradient-to-r from-gradient-2-start to-gradient-2-end bg-clip-text text-transparent">
            enthusiast
          </span>
        </span>
        <span> and </span>
        <span
          data-content="next.js lover."
          className="relative bottom-0 left-0 top-0 whitespace-nowrap before:absolute before:z-0 before:animate-gradient-background-3 before:text-black before:content-[attr(data-content)]"
        >
          <span className="animate-gradient-foreground-3 bg-gradient-to-r from-gradient-3-start to-gradient-3-end bg-clip-text text-transparent">
            next.js lover.
          </span>
        </span>
      </div>
    </h1>
  )
}
