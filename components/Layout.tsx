import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="z-50 w-full rounded-t-[1.6rem]  bg-white dark:bg-zinc-900 sm:rounded-t-3xl sm:border sm:border-zinc-800/5 sm:dark:border-white/5" />
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
