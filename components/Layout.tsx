import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { headers } from "next/headers";
import { isSafariMobile } from "@/utils/safari";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative mb-2 mt-2 flex h-fit flex-col rounded-[1.6rem] bg-white dark:bg-zinc-900 sm:rounded-t-3xl sm:border sm:border-zinc-800/10 sm:dark:border-white/5">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
