import { MailIcon } from '@/components/icons/CustomIcons'
import { Button } from '@/components/Button'

export default function Contact() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Let's connect</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        I'm available from December 2023 for a full time job.
      </p>
      <div className="mt-6 flex justify-start gap-4 sm:justify-between sm:gap-0">
        <Button href={'mailto:enzo.bacqueyrisses@gmail.com'}>
          Contact me via e-mail
        </Button>
        <Button
          target={'_blank'}
          href={'https://www.linkedin.com/in/bacqueyrisses/'}
          variant={'linkedin'}
        >
          Or send me an inMail
        </Button>
      </div>
    </div>
  )
}
