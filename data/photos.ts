/**
 * Photography — all from Unsplash (free to use under the Unsplash License).
 * Photographer credits are kept here. Swap any URL for your own event photos
 * later; drop them in /public and use "/your-photo.jpg" instead.
 */
const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photos = {
  // Hero slider — FMP's own images (public/hero)
  heroFocus: { src: "/hero/hero-1.jpg", alt: "A young woman working on her laptop in a busy co-working space", credit: "FMP" },
  heroCommunity: { src: "/hero/hero-2.jpg", alt: "Three women talking through an idea together on a sofa", credit: "FMP" },
  heroMentor: { src: "/hero/hero-3.jpg", alt: "A mentor pointing something out on a mentee's laptop as they both smile", credit: "FMP" },
  heroSession: { src: "/hero/hero-4.jpg", alt: "A mentor explaining a concept to two mentees around a laptop", credit: "FMP" },

  // "Why we started FMP" feature image — FMP's own (public/why)
  whyTeam: { src: "/why/why-fmp.jpg", alt: "A mentor walking three mentees through something on a laptop", credit: "FMP" },

  // Mentors page — FMP's own (public/mentors-page)
  mentorsHero: { src: "/mentors-page/hero.jpg", alt: "A mentor's desk at dusk with a mentor-session notebook, laptop and mentorship books", credit: "FMP" },
  mentorsBecome: { src: "/mentors-page/become.jpg", alt: "Two laptops facing each other across a table in a quiet lounge, ready for a mentoring session", credit: "FMP" },

  // How it works page header — FMP's own
  howHero: { src: "/how-it-works/hero.jpg", alt: "Four young techies laughing and talking around a table of laptops", credit: "FMP" },

  // Program page header — FMP's own
  programHero: { src: "/program/hero.jpg", alt: "A mentor presenting to a room of mentees around a table of laptops", credit: "FMP" },

  // Apply page header — FMP's own
  applyHero: { src: "/apply/hero.jpg", alt: "A young woman working through her application on a laptop at night", credit: "FMP" },

  // Earlier Unsplash picks (no longer used in the hero)
  pairReview: { src: u("1637856794303-d864ce316444"), alt: "Two developers reviewing work together on a laptop", credit: "Francis Odeyemi" },
  focusedCoding: { src: u("1531482615713-2afd69097998"), alt: "A developer working through code while a teammate looks on", credit: "@disruptxn" },
  laughingPair: { src: u("1641760271214-8f63859d2cb3"), alt: "Two young techies laughing while working on a laptop", credit: "Francis Odeyemi" },
  womenTalking: { src: u("1655720357872-ce227e4164ba"), alt: "Three women talking through an idea around a laptop", credit: "Iwaria Inc." },

  // Tracks
  frontend: { src: "/paths/frontend.jpg", alt: "A laptop showing React code beside the website it builds", credit: "FMP" },
  backend: { src: u("1730130054404-c2bd8e7038c2"), alt: "A developer with headphones working in a terminal", credit: "Olumuyiwa Sobowale" },
  design: { src: "/paths/design.jpg", alt: "Hand-drawn mobile wireframes with user-flow sticky notes", credit: "FMP" },
  mobile: { src: "/paths/mobile.jpg", alt: "A phone on a stand showing an app, with code open on a laptop behind it", credit: "FMP" },
  cloud: { src: "/paths/cloud.jpg", alt: "An engineer checking server racks in a data centre with a tablet", credit: "FMP" },
  data: { src: "/paths/data.jpg", alt: "An analytics dashboard with charts and model metrics on a laptop", credit: "FMP" },
  security: { src: "/paths/security.jpg", alt: "A security operations dashboard showing live threats", credit: "FMP" },
  product: { src: "/paths/product.jpg", alt: "A whiteboard mapping a product from problem to roadmap", credit: "FMP" },
  workspace: { src: "/paths/workspace.jpg", alt: "A developer workspace with code, a live site and wireframe sketches", credit: "FMP" },

  // How it works
  apply: { src: "/steps/apply.jpg", alt: "A laptop open on the FMP application form beside an application checklist", credit: "FMP" },
  matched: { src: "/steps/matched.jpg", alt: "The FMP matching screen on a laptop and a tablet showing a mentee's mentor match", credit: "FMP" },
  build: { src: "/steps/build.jpg", alt: "A desk with code, a project progress board and notes from a mentor", credit: "FMP" },
  showcase: { src: "/steps/showcase.jpg", alt: "An FMP demo day stage set up for the project showcase", credit: "FMP" },

  // Program perks
  oneOnOne: { src: "/program/one-on-one.jpg", alt: "A mentee on a video call with her mentor, taking notes", credit: "FMP" },
  reviews: { src: "/program/reviews.jpg", alt: "A mentor pointing out a line of code on a laptop during a review", credit: "FMP" },
  projects: { src: "/program/project.jpg", alt: "A mentee designing app screens on his laptop and monitor", credit: "FMP" },
  community: { src: "/program/community.jpg", alt: "Four friends laughing and talking on campus steps with a laptop", credit: "FMP" },
  evenings: { src: "/program/evenings.jpg", alt: "A mentee in headphones on an evening group call, with code open on screen", credit: "FMP" },
  career: { src: "/program/career.jpg", alt: "A mentor going through CV and portfolio feedback with a mentee", credit: "FMP" },

  // Page headers + bands
  meeting: { src: u("1573164574511-73c773193279"), alt: "A team meeting in a bright conference room", credit: "Christina @ wocintechchat.com" },
  gathering: { src: u("1578665277794-88bc5dfe703d"), alt: "Friends sharing ideas around a table", credit: "Shina Memud" },
  mentorSmile: { src: u("1651924143831-e13890f51f3e"), alt: "A smiling engineer in a colourful sweater at his laptop", credit: "Francis Odeyemi" },
  phoneChat: { src: u("1644043350898-2f4ff1e17912"), alt: "Two friends looking at a phone together", credit: "Francis Odeyemi" },
  womanMacbook: { src: u("1573167101669-476636b96cea"), alt: "A woman working on her MacBook", credit: "Christina @ wocintechchat.com" },
  glassReflection: { src: u("1573164713712-03790a178651"), alt: "A woman holding a tablet in a modern office", credit: "Christina @ wocintechchat.com" },
} as const;

export type Photo = (typeof photos)[keyof typeof photos];
