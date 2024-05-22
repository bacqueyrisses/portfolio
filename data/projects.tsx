export type Project = {
  id: number;
  title: string;
  description: string;
  date: number;
  link: string;
  live: boolean;
};

export const projects: Array<Project> = [
  {
    id: 1,
    title: "NextAI",
    description:
      "Discover Next.js effortlessly with this AI-powered documentation search. Experience daily updates for the most up-to-date information.",
    date: 2023,
    link: "https://www.nextai.dev/",
    live: true,
  },
  {
    id: 2,
    title: "PostAI",
    description:
      "Design and send AI-crafted, location-based virtual postcards. Share personalized moments creatively. Send yours now!",
    date: 2023,
    link: "https://www.postai.enzo.codes/",
    live: true,
  },
  {
    id: 3,
    title: "Ouvrage",
    description:
      "Expand your vocabulary, discover new words, bolster your existing writing skills and get access to your favorites ones easily, all in one place.",
    date: 2022,
    link: "https://www.ouvrage.dev/",
    live: true,
  },
];
