// All site copy lives here so it can be edited without touching components.
import { photos, type Photo } from "./photos";

export const nav = [
  { label: "Program", href: "/program" },
  { label: "Career Paths", href: "/career-paths" },
  { label: "Mentors", href: "/mentors" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
];

/* ------------------------------------------------------------------ */
/* Home — hero slider                                                  */
/* ------------------------------------------------------------------ */
export const heroSlides: { photo: Photo; tag: string; caption: string }[] = [
  { photo: photos.heroFocus, tag: "Build your thing", caption: "Your own project, with people close by when you get stuck." },
  { photo: photos.heroCommunity, tag: "Community", caption: "Study groups where nobody laughs at a 'basic' question." },
  { photo: photos.heroMentor, tag: "1:1 mentorship", caption: "That moment when it finally clicks. We're there for it." },
  { photo: photos.heroSession, tag: "Mentor sessions", caption: "Honest feedback from people who do this every day." },
];

export const heroPoints = ["8 career paths", "Weekly 1:1 sessions", "Built around WAT evenings"];

/* ------------------------------------------------------------------ */
/* Home — why FMP                                                     */
/* ------------------------------------------------------------------ */
export const why = {
  eyebrow: "Why we started FMP",
  title: "Most people don't quit tech because it's hard. They quit because they're <em>on their own.</em>",
  paragraphs: [
    "You've probably been there. Three tutorials in, a project that almost works, and nobody to ask why the build keeps failing. You spend a whole weekend on something a senior dev would spot in five minutes, and slowly you start to think maybe this isn't for you.",
    "FMP exists for that exact moment. We match you with someone who has already made the mistakes you're about to make, and we keep you building until you have work you're proud to show people.",
  ],
  points: [
    { title: "A real person, every week", body: "Not a chatbot or a pre-recorded course. A mentor who knows your name and your project." },
    { title: "Work you can show", body: "You leave with a finished project, a clean GitHub or Behance, and the story behind it." },
    { title: "People going the same way", body: "A cohort of people at your level, so you're never the only one stuck." },
  ],
};

/* ------------------------------------------------------------------ */
/* Tracks                                                              */
/* ------------------------------------------------------------------ */
export type Track = {
  key: string;
  title: string;
  short: string;
  intro: string;
  learn: string[];
  tools: string[]; // simple-icons keys
  forYou: string;
  project: string;
  photo: Photo;
};

export const tracks: Track[] = [
  {
    key: "frontend",
    title: "Frontend Engineering",
    short: "Build the part of the product people actually see, click and fall in love with.",
    intro: "You'll go from 'I can follow a tutorial' to 'I can build this from a Figma file'. We care about the details: layouts that don't break on small phones, pages that load fast on a 3G network, and code another developer can pick up.",
    learn: ["Semantic HTML, modern CSS and responsive layouts", "JavaScript and TypeScript you actually understand", "React and Next.js, the way teams use them", "Working with APIs, forms and state", "Accessibility and performance basics"],
    tools: ["Html5", "Css", "Javascript", "Typescript", "React", "Nextdotjs", "Tailwindcss", "Git"],
    forYou: "Anyone who likes seeing their work come to life on screen. Complete beginners are welcome.",
    project: "A multi-page web app built from a real design file and deployed with a custom domain.",
    photo: photos.frontend,
  },
  {
    key: "backend",
    title: "Backend Engineering",
    short: "APIs, databases and the quiet work that keeps an app from falling over.",
    intro: "Every login, payment and notification runs on something behind the screen. You'll learn to design that something: how data is stored, how services talk to each other, and how to keep it secure when real users show up.",
    learn: ["Node.js or Python on the server", "Designing REST and GraphQL APIs", "SQL and NoSQL databases", "Authentication and authorisation", "Testing, logging and handling errors properly"],
    tools: ["Nodedotjs", "Express", "Python", "Django", "Postgresql", "Mongodb", "Redis", "Postman"],
    forYou: "People who enjoy logic and problem-solving more than pixels. Some programming basics help.",
    project: "A production-ready API with auth, a database and documentation other developers can use.",
    photo: photos.backend,
  },
  {
    key: "design",
    title: "Product Design (UI/UX)",
    short: "Understand users, then design screens that make sense to them.",
    intro: "Good design starts long before Figma. You'll learn to talk to users, find the real problem, sketch ideas quickly and turn them into interfaces that developers can build and people can use without a manual.",
    learn: ["User research and interviewing", "Wireframing and information architecture", "Visual design, type and colour", "Prototyping and usability testing", "Design systems and developer handoff"],
    tools: ["Figma", "Framer", "Notion", "Miro"],
    forYou: "Curious people who notice when an app is confusing and wonder how it could be better.",
    project: "A full case study, from research to a tested high-fidelity prototype.",
    photo: photos.design,
  },
  {
    key: "mobile",
    title: "Mobile Development",
    short: "Ship apps people carry around in their pockets every day.",
    intro: "Most people here experience the internet on a phone first. You'll learn to build apps that feel smooth on mid-range Android devices, work with patchy data, and make it all the way to the app stores.",
    learn: ["Cross-platform apps with Flutter or React Native", "Navigation, state and offline storage", "Working with device features like the camera", "Push notifications", "Publishing to Play Store and App Store"],
    tools: ["Flutter", "Dart", "React", "Expo", "Kotlin", "Android", "Firebase"],
    forYou: "Anyone who has ever opened an app and thought 'I could build this better'.",
    project: "A published mobile app with real users, even if the first ten are your friends.",
    photo: photos.mobile,
  },
  {
    key: "cloud",
    title: "Cloud & DevOps",
    short: "Deploy, automate and keep things running while everyone else sleeps.",
    intro: "Writing code is half the story. Someone has to get it onto servers, keep it online and make releases boring. You'll learn the tools and habits that let teams ship every day without fear.",
    learn: ["Linux and the command line", "Containers with Docker", "CI/CD pipelines", "Cloud basics on Google Cloud and friends", "Infrastructure as code and monitoring"],
    tools: ["Linux", "Docker", "Kubernetes", "Githubactions", "Googlecloud", "Terraform", "Nginx"],
    forYou: "People who like systems, automation and knowing exactly how things work under the hood.",
    project: "A fully automated pipeline that tests, builds and deploys an app to the cloud.",
    photo: photos.cloud,
  },
  {
    key: "data",
    title: "Data & AI",
    short: "Turn messy spreadsheets into answers people can act on.",
    intro: "Businesses are sitting on data they don't understand. You'll learn to clean it, question it and explain what it means, then move into machine learning once the foundations are solid.",
    learn: ["Python for data work", "SQL for analysis", "Cleaning and visualising data", "Statistics you'll actually use", "Intro to machine learning models"],
    tools: ["Python", "Pandas", "Jupyter", "Postgresql", "Tensorflow", "Pytorch"],
    forYou: "Curious minds who like patterns, numbers and asking 'but why?'.",
    project: "An analysis of a real Nigerian dataset, written up so a non-technical person can follow it.",
    photo: photos.data,
  },
  {
    key: "security",
    title: "Cybersecurity",
    short: "Learn how attacks happen so you can stop them.",
    intro: "Every new app is a new target. You'll learn how attackers think, how to find weaknesses before they do, and how to help teams build things that are secure from day one.",
    learn: ["Networking fundamentals", "Linux and scripting for security", "Common web vulnerabilities (OWASP Top 10)", "Ethical hacking and testing tools", "Incident response basics"],
    tools: ["Linux", "Kalilinux", "Wireshark", "Python", "Docker"],
    forYou: "People who enjoy puzzles and are the first to ask 'what if someone tried to break this?'.",
    project: "A documented security assessment of a practice application, with fixes.",
    photo: photos.security,
  },
  {
    key: "product",
    title: "Product Management",
    short: "Decide what gets built, why, and get the whole team moving together.",
    intro: "Product managers sit between users, designers, engineers and the business. You'll learn to find problems worth solving, write clear specs, prioritise ruthlessly and measure whether any of it worked.",
    learn: ["Discovery and problem framing", "Writing PRDs and user stories", "Prioritisation and roadmaps", "Working with designers and engineers", "Metrics and product analytics"],
    tools: ["Jira", "Notion", "Figma", "Miro", "Linear"],
    forYou: "Organised communicators who care about the 'why' as much as the 'what'.",
    project: "A product strategy and launch plan for a real problem, presented to a panel.",
    photo: photos.product,
  },
];

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */
export const steps: { n: string; title: string; body: string; details: string[]; photo: Photo }[] = [
  {
    n: "01",
    title: "Apply",
    body: "Tell us where you are right now and where you want to be. It takes about five minutes, and honest answers help us more than impressive ones.",
    details: ["Pick a career path (you can change it early on)", "Share how many hours a week you can give", "Link any work you've done, even if it's rough"],
    photo: photos.apply,
  },
  {
    n: "02",
    title: "Get matched",
    body: "We read every application ourselves. Then we pair you with a mentor based on your career path, level, goals and the times that work for both of you.",
    details: ["A short intro call to make sure it fits", "Your mentor sets goals with you", "You're added to your cohort's group"],
    photo: photos.matched,
  },
  {
    n: "03",
    title: "Build with support",
    body: "Weekly 1:1s, reviews on your work and a real project that grows with you. When you get stuck, you have people to ask.",
    details: ["Weekly sessions with your mentor", "Code and design reviews", "Study groups with your cohort"],
    photo: photos.build,
  },
  {
    n: "04",
    title: "Show what you built",
    body: "Present your project at demo day in front of mentors, your cohort and guests from the industry. Then keep going, with a network that doesn't disappear.",
    details: ["Demo day presentation", "Portfolio and CV review", "Alumni community access"],
    photo: photos.showcase,
  },
];

/* ------------------------------------------------------------------ */
/* Program                                                             */
/* ------------------------------------------------------------------ */
export const perks: { title: string; body: string; photo: Photo }[] = [
  { title: "1:1 mentor sessions", body: "A regular call with someone who does this job every day. Bring your questions, your bugs and your doubts.", photo: photos.oneOnOne },
  { title: "Honest reviews", body: "Feedback on your code and designs that tells you what's wrong, why it matters and how to fix it.", photo: photos.reviews },
  { title: "A real project", body: "Not another to-do app. You build something with real users in mind that you can talk through in an interview.", photo: photos.projects },
  { title: "A community that shows up", body: "Study groups, accountability partners and people a few months ahead of you who remember how it felt.", photo: photos.community },
  { title: "Evenings and weekends", body: "Sessions run around WAT evenings and weekends, so you can keep school, work or your side hustle going.", photo: photos.evenings },
  { title: "Career support", body: "CV and portfolio reviews, mock interviews, and honest advice on landing your first role or your next one.", photo: photos.career },
];

export const phases = [
  { weeks: "Weeks 1–2", title: "Settle in", body: "Meet your mentor, set clear goals, and get your tools and learning plan in place." },
  { weeks: "Weeks 3–6", title: "Build the foundations", body: "Focused learning with small weekly tasks, so nothing important gets skipped." },
  { weeks: "Weeks 7–10", title: "Real project", body: "Plan and build your main project, with reviews at every step." },
  { weeks: "Weeks 11–12", title: "Polish and demo day", body: "Tidy up, write the story behind your work, and present it to a live audience." },
];

export const weekRhythm = [
  { day: "Mon", title: "Plan the week", body: "Pick your goals for the week in the cohort group." },
  { day: "Wed", title: "1:1 with your mentor", body: "Evening call to unblock you and review progress." },
  { day: "Thu", title: "Study group", body: "Work alongside your cohort, cameras optional." },
  { day: "Sat", title: "Build session", body: "Longer focused time on your project, with mentors dropping in." },
  { day: "Sun", title: "Show & tell", body: "Share what you shipped this week, however small." },
];

export const expectations = [
  "Around 6 to 10 hours a week, consistently",
  "Show up to sessions, or say early if you can't",
  "Ask questions, even the ones that feel basic",
  "Be kind in the community. Everyone started somewhere",
];

/* ------------------------------------------------------------------ */
/* Mentors page                                                        */
/* ------------------------------------------------------------------ */
export const mentorPromises = [
  { title: "They've done the job", body: "Every mentor works in their field today, at startups, agencies, banks and global remote teams." },
  { title: "They make time", body: "Mentors commit to regular sessions with their mentees. Not a one-off chat, an actual relationship." },
  { title: "They tell you the truth", body: "Kind, but honest. You'll hear what you need to hear, not just what feels good." },
];

export const becomeMentor = [
  "You've worked in tech for three years or more",
  "You can give about two hours a week",
  "You remember what starting out felt like",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export const faqGroups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Joining",
    items: [
      { q: "Do I need to know how to code before joining?", a: "No. Some paths start from the very basics. What we care about is that you can commit a few hours every week and do the work between sessions." },
      { q: "Who is FMP for?", a: "Students, career switchers, self-taught developers and early-career techies who want structure, feedback and people to learn with. If you're serious about growing, you're who we built this for." },
      { q: "How do you choose who gets in?", a: "We read every application. We're not looking for the most experienced people, we're looking for people who are clear about their goals and ready to show up." },
      { q: "Can I apply if I'm outside Nigeria?", a: "Yes. Everything happens online, and sessions are scheduled around West Africa Time. If you can make those hours work, you're welcome." },
    ],
  },
  {
    title: "During the program",
    items: [
      { q: "Is the program online or physical?", a: "Mentorship happens online, so you can join from anywhere. We host in-person meetups and demo days in Lagos for people who can make it." },
      { q: "How much time will it take each week?", a: "Plan for about 6 to 10 hours: your mentor session, study group, and time working on your project." },
      { q: "What if my network or power goes off during a session?", a: "It happens to all of us. Let your mentor know and reschedule. Key cohort sessions are recorded where possible, so you can catch up." },
      { q: "Can I switch paths after I've started?", a: "Yes, within the first two weeks. Talk to your mentor and we'll help you move to the path that fits you better." },
    ],
  },
  {
    title: "Mentors & after FMP",
    items: [
      { q: "Can I choose my mentor?", a: "You can tell us who you'd like to work with, and we'll try. In the end we match based on career path, level and availability so everyone gets proper attention." },
      { q: "What happens after the 12 weeks?", a: "You join the alumni community. Many people stay in touch with their mentors, and some come back later to mentor others." },
      { q: "How do I become a mentor?", a: "If you've worked in tech for a while and want to give back, apply as a mentor and we'll set up a short call." },
    ],
  },
];

export const contact = {
  email: "hello@example.com",
  location: "Online, with meetups in Lagos",
};
