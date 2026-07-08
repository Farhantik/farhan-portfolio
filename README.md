# Portfolio landing page (React + Node.js)

A clone of the layout at profile-jade-ten.vercel.app — navbar, hero intro,
"download CV" + social links, and a stats row — rebuilt with a React (Vite)
frontend and an Express backend for the contact form and CV download.

```
farhan-portfolio/
├── frontend/   React app (Vite)
└── backend/    Express API
```

## Customize it

Almost everything on the page — name, tagline, stats, social links, photos,
skills, and work items — lives in one file: `frontend/src/data/profile.js`.
Edit that and the whole page updates.

Drop your real CV at `backend/assets/cv.pdf` so the "Download CV" button works.

### Your assets are already wired in

Everything from the assets zip you sent lives in `frontend/public/assets/`
and is already used across the site:

- `photo.png` → hero photo, `photo3.png` → resume page photo, `photo2.png` →
  spare, referenced in `profile.js` as `photoAlt` if you want to use it too.
- `skills/*.svg` → the tools strip on the home page.
- `resume/icons/*.svg`, `resume/cap.svg`, `resume/badge.svg` → the resume
  page's skills row and education/certification cards (the text for those
  cards is still placeholder — edit `education` in `profile.js`).
- `work/thumb1.png`–`thumb11.png` → the Work page. The first 6 are grouped
  into three featured case studies (Bondowoso / Karawang / Kediri hospital
  record modules); the rest sit in a "more work" gallery. Adjust titles,
  descriptions, and thumb assignments in `featuredWork` / `moreWork`.
- `project/*.html` → the original print-form mockups, linked as downloadable
  documents under each featured case study.

## Run it in development

Open two terminals.

**Backend:**
```bash
cd backend
npm install
npm run dev        # http://localhost:5000
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev         # http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to the backend, so the contact
form and CV download work straight away at http://localhost:5173.

## Run it in production

```bash
cd frontend && npm install && npm run build
cd ../backend && npm install && npm start
```

The Express server serves the built frontend and the API from a single port
(http://localhost:5000 by default — set `PORT` in the environment to change it).

## What's included

- Sticky navbar with the same links as the reference (home / services / resume
  / work / contact) using React Router, plus a "Hire me" button.
- Hero section: eyebrow role tag, name, tagline, "Download CV" button, social
  icons, and a code-window-style photo frame with floating tech-stack chips.
- Stats row (years of experience / projects completed / technologies mastered
  / code commits), styled like terminal comments.
- A working contact form that POSTs to `/api/contact` on the Node backend and
  stores messages in `backend/data/messages.json`.
- Placeholder pages for services/resume/work so the nav links resolve to
  something — fill them in with your real content.
