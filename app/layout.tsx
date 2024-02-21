import "@/styles/tailwind.css";

import { type Metadata, Viewport } from "next";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"h-full antialiased"} suppressHydrationWarning>
      <body className="bg-dotted flex h-full bg-zinc-100/70 dark:bg-black dark:bg-none">
        <Providers>
          <div className="flex h-full w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
