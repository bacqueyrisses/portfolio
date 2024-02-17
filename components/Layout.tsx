import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { headers } from 'next/headers'
import { isOnSafariMobile } from '@/utils/safari'

export function Layout({ children }: { children: React.ReactNode }) {
  const isSafariMobile = isOnSafariMobile(headers())

  return (
    <>
      <div
        className={
          'fixed left-0 right-0 top-0 flex h-lvh justify-center sm:px-8'
        }
      >
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full rounded-t-[1.6rem] bg-white dark:bg-zinc-900 sm:rounded-t-3xl sm:border sm:border-zinc-800/5 sm:dark:border-white/5" />
        </div>
      </div>
      <div className="relative flex w-full flex-col px-2.5 sm:px-0">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
