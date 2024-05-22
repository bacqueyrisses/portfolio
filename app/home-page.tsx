"use client";

import { Container } from "@/components/Container";
import BentoGridDemo from "@/components/Bento";

export default function HomeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container className="mt-12 lg:mt-16">
        <BentoGridDemo />
      </Container>
      <Container className="mt-12 lg:mt-16">
        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
          {children}
        </div>
      </Container>
    </>
  );
}
