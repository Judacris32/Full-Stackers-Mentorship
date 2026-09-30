# Full Stackers Mentorship Program (FMP)

Frontend-only landing site. Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion. No backend yet.

## Run
npm install
npm run dev

## Where things live
- data/site.ts      — all landing copy (tracks, steps, perks, FAQ)
- data/mentors.ts   — the 8 mentors (name, track, role, image path)
- app/globals.css   — Ocean Breeze colour tokens for light (default) and dark mode
- public/brand/     — logo files (full logo, mark, light-S version for dark mode)

## Adding mentor picture cards
Save each image as public/mentors/mentor-1.jpg ... mentor-8.jpg (4:5, e.g. 800x1000).
The card shows the photo automatically; until the file exists it shows the branded placeholder.
Then update the names/roles in data/mentors.ts.
