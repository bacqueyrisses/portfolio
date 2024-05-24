import "@/styles/tailwind.css";

import { type Metadata } from "next";

import { Providers } from "@/components/providers/Providers";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: {
    template: "%s - Enzo Bacqueyrisses",
    default: "Enzo Bacqueyrisses | Next.js Developer",
  },
  description:
    "I’m Enzo, a full-stack developer specialised in Next.js, TypeScript & Node.JS.",
  openGraph: {
    title: "▲ Enzo Bacqueyrisses",
    description:
      "Full-stack developer specialised in Next.js, TypeScript & Node.JS",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"h-full antialiased"} suppressHydrationWarning>
      <body className="relative flex justify-center bg-zinc-100/70 bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
        <Providers>
          <div className="flex justify-center">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
