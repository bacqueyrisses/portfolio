import { MailIcon } from "./icons/CustomIcons";
import { Button } from "./Button";

export default function Contact() {
  return (
    <div
      id="contact-section"
      className="flex scroll-mt-10 flex-col justify-between rounded-xl border border-zinc-100 p-6 dark:border-zinc-700/40 dark:bg-black sm:scroll-mt-16 md:scroll-mt-28"
    >
      <div>
        <h2 className="flex items-center gap-2 font-sans text-base font-semibold text-neutral-600 dark:text-neutral-200">
          <MailIcon className="size-4" />
          <span>Let's connect</span>
        </h2>
        <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
          Let's build something unique together! For professional inquiries,
          feel free to reach out, and let's turn your vision into reality with
          our combined expertise and creativity.
        </p>
      </div>
      <div className="mt-6 flex flex-col justify-start gap-4 sm:justify-between">
        <Button
          className={"hidden sm:block"}
          href={"mailto:Enzo Bacqueyrisses<bacqueyrisses@duck.com>"}
        >
          Contact me via e-mail
        </Button>
        <Button
          className={"block sm:hidden"}
          href={"mailto:Enzo Bacqueyrisses<bacqueyrisses@duck.com>"}
        >
          Send an e-mail
        </Button>
        <Button
          className={"hidden sm:block"}
          target={"_blank"}
          href={"https://www.linkedin.com/in/bacqueyrisses/"}
          variant={"linkedin"}
        >
          Or send me an InMail
        </Button>
        <Button
          className={"block sm:hidden"}
          target={"_blank"}
          href={"https://www.linkedin.com/in/bacqueyrisses/"}
          variant={"linkedin"}
        >
          Send an InMail
        </Button>
      </div>
    </div>
  );
}
