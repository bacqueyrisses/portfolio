"use client";

import { useState } from "react";

import { Container } from "@/components/Container";
import Websites from "@/components/Websites";
import Projects from "@/components/Projects";

export default function HomeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [focusedProject, setFocusedProject] = useState<null | number>(null);

  return (
    <>
      <Websites setFocusedProject={setFocusedProject} />
      <Container className="mt-20 lg:mt-24">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <Projects focusedProject={focusedProject} />
          <div className="space-y-10 lg:pl-16 xl:pl-24">{children}</div>
        </div>
      </Container>
    </>
  );
}
