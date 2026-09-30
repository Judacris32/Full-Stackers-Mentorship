/**
 * FMP mentors
 * ------------------------------------------------------------------
 * Each mentor's picture card already shows their name, role and focus,
 * so the site displays the image on its own. The text below is used for
 * accessibility (screen readers) and search engines only.
 *
 * To add or replace a mentor: save the card as /public/mentors/mentor-<n>.webp
 * (805 x 1085, transparent background) and add/update an entry here.
 */
export type Mentor = {
  id: number;
  name: string;
  role: string;
  focus: string;
  image: string;
  linkedin?: string;
};

export const mentors: Mentor[] = [
  { id: 1, name: "Adebowale Samuel Lipede", role: "Founder & Technical Architect, ART Services LTD", focus: "Full-Stack Architecture & Developer Experience", image: "/mentors/mentor-1.webp" },
  { id: 2, name: "Prosper Otemuyiwa", role: "Co-Founder, Eden Life & Lead DevRel (ex-Auth0)", focus: "API Architecture & Engineering Performance", image: "/mentors/mentor-2.webp" },
  { id: 3, name: "Farida Bedwei", role: "Tech Entrepreneur & Software Engineer", focus: "Cloud Platforms, Micro-Fintech Systems & Inclusive Architecture", image: "/mentors/mentor-3.webp" },
  { id: 4, name: "Mahmoud Tokura", role: "Full-stack Engineer", focus: "Core Backend Systems & Scalable Architecture", image: "/mentors/mentor-4.webp" },
  { id: 5, name: "Ada Nduka Oyom", role: "Founder, She Code Africa", focus: "Backend Engineering & Open Source", image: "/mentors/mentor-5.webp" },
  { id: 6, name: "Kelvin Umechukwu", role: "CEO & Co-Founder, Bumpa", focus: "Shipping Production Products & Scale", image: "/mentors/mentor-6.webp" },
  { id: 7, name: "Kene Udeze", role: "Lead Product Designer & UX Strategist", focus: "Bridging Design Systems & Engineering", image: "/mentors/mentor-7.webp" },
  { id: 8, name: "Ire Aderinokun", role: "CTO & Co-Founder, Helicarrier", focus: "Web Performance & Technical Leadership", image: "/mentors/mentor-8.webp" },
];
