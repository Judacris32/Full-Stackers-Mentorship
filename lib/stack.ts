import * as icons from "simple-icons";

export type StackIcon = { slug: string; title: string; hex: string; path: string; darkIcon: boolean };

type SimpleIcon = { title: string; hex: string; path: string; slug: string };

function luminance(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Look up brand icons by simple-icons key (e.g. "React" -> siReact). */
export function getIcons(keys: string[]): StackIcon[] {
  return keys
    .map((k) => (icons as unknown as Record<string, SimpleIcon>)[`si${k}`])
    .filter(Boolean)
    .map((i) => ({ slug: i.slug, title: i.title, hex: `#${i.hex}`, path: i.path, darkIcon: luminance(i.hex) < 0.22 }));
}

// Two marquee rows on the home page
export const stackRowOne = [
  "Html5", "Css", "Javascript", "Typescript", "React", "Nextdotjs", "Vuedotjs", "Tailwindcss", "Figma", "Framer",
  "Flutter", "Dart", "Kotlin", "Swift", "Android", "Expo", "Git", "Github", "Postman",
];
export const stackRowTwo = [
  "Nodedotjs", "Express", "Nestjs", "Python", "Django", "Fastapi", "Postgresql", "Mongodb", "Mysql", "Redis",
  "Graphql", "Supabase", "Firebase", "Prisma", "Docker", "Kubernetes", "Googlecloud", "Vercel", "Terraform", "Linux",
  "Tensorflow", "Pytorch", "Jupyter", "Pandas", "Kalilinux", "Wireshark", "Jira", "Notion",
];
