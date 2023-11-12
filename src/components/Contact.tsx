import { MailIcon } from '@/components/icons/CustomIcons'
import { Button } from '@/components/Button'

export default function Contact() {
  return (
    <div
      id="contact-section"
      className="scroll-mt-10 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 sm:scroll-mt-24 md:scroll-mt-28"
    >
      <h2 className="flex text-sm font-medium text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Let's connect</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Let's build something unique together! For professional inquiries, feel
        free to reach out.
      </p>
      <div className="mt-6 flex justify-start gap-4 sm:justify-between">
        <Button
          className={'hidden w-1/2 sm:block'}
          href={'mailto:enzo.bacqueyrisses@gmail.com'}
        >
          Contact me via e-mail
        </Button>
        <Button
          className={'block w-1/2 sm:hidden'}
          href={'mailto:enzo.bacqueyrisses@gmail.com'}
        >
          Send an e-mail
        </Button>
        <Button
          className={'hidden w-1/2 sm:block'}
          target={'_blank'}
          href={'https://www.linkedin.com/in/bacqueyrisses/'}
          variant={'linkedin'}
        >
          Or send me an InMail
        </Button>
        <Button
          className={'block w-1/2 sm:hidden'}
          target={'_blank'}
          href={'https://www.linkedin.com/in/bacqueyrisses/'}
          variant={'linkedin'}
        >
          Send an InMail
        </Button>
      </div>
    </div>
  )
}
