import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { headers } from "next/headers";
import { isSafariMobile } from "@/utils/safari";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex h-fit flex-col rounded-[1.6rem] bg-white dark:bg-zinc-900 sm:rounded-2xl sm:border sm:border-zinc-200/20 sm:dark:border-zinc-700/40">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
