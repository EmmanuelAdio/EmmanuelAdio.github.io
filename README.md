# Emmanuel Adio — Portfolio

My personal portfolio: a single-page **React + TypeScript** site built on the
**Emmanuel Adio design system** (deep-space indigo, three brand fonts, hairline
cards with a lift-and-glow hover). Live at **https://EmmanuelAdio.github.io**.

Most updates — adding a project or a job — are a quick edit to one data file.
This README shows exactly how.

---

## Project map

| Folder | What's in it | Edit it when… |
|---|---|---|
| `src/components/` | The page sections (Hero, About, Projects, Experience, Contact, Footer, NavBar) | You change wording or layout of a section |
| `src/components/projectsData.ts` | **The list of projects** | You add / edit / remove a project |
| `src/components/experienceData.ts` | **The list of experiences** | You add / edit / remove a job |
| `src/design-system/` | Reusable UI pieces (Button, Card, Tag, …) | Rarely — only to change how a component works everywhere |
| `src/styles/tokens/` | Brand colours, fonts, spacing | You want to restyle the whole site |
| `src/styles/portfolio.css` | Section layout (grid, hero, timeline, modal) | You want to change a section's layout |
| `public/assets/` | Images. Screenshots live in `public/assets/projects/` | You add an image |

> The full design-system source lives in `emmanuel-adio-portfolio-design-system/`
> for reference — you don't normally touch it.

---

## Run it locally

```powershell
npm start
```

Opens **http://localhost:3000** with hot-reload (the page refreshes as you save).
Press `Ctrl+C` to stop.

### ⚠️ OneDrive gotcha (important)

This repo lives inside OneDrive, which keeps trying to offload `node_modules` to
the cloud. When that happens Node crashes with `UNKNOWN: read` or
`Failed to load plugin 'jsx-a11y'`. **This is never a code problem — it's OneDrive.**

It's already fixed: `node_modules` is a *junction* (a transparent link) pointing
to `C:\dev\ea-portfolio-node_modules`, which sits **outside** OneDrive. You don't
need to think about it day to day.

**The one thing to remember:** if you ever delete `node_modules` and reinstall,
recreate the junction *first*, or the errors come back:

```powershell
# from the project folder
cmd /c rmdir node_modules                     # remove the old link/folder
New-Item -ItemType Directory -Force C:\dev\ea-portfolio-node_modules | Out-Null
New-Item -ItemType Junction -Path node_modules -Target C:\dev\ea-portfolio-node_modules
npm install                                   # installs into the linked folder
```

---

## How to update the site

### ➕ Add a project

1. Open `src/components/projectsData.ts`.
2. Copy the template block from the comment at the top and paste it into the
   `PROJECTS` array (position in the array = position on the page).
3. Fill in the fields.
4. **Image:** either
   - drop a screenshot (roughly 16:10) into `public/assets/projects/` and set
     `img: "/assets/projects/your-file.png"`, **or**
   - skip the image and set `glyph` + `accent` to get the branded placeholder
     (a glowing symbol). Use one or the other, not both.
5. Save — the browser refreshes. Click the card to check the pop-up detail.

### ➕ Add an experience

1. Open `src/components/experienceData.ts`.
2. Copy the template from the top comment into the `EXPERIENCES` array.
3. Fill it in. **Put the most recent job first** — the top entry shows expanded
   by default, the rest start collapsed.
4. `url` is optional; if you add one it shows a `./visit` button.

### ✏️ Edit the hero / about text, stats, or tech list

- **Hero headline & intro paragraph:** `src/components/Hero.tsx`
- **About paragraphs, the "technologies I work with" list, and the stats
  (1st / 100% / 100+):** `src/components/About.tsx` — the `TECHS` array and the
  `about__stats` block are marked with comments.

---

## Deploy it live

Two separate steps:

```powershell
npm run deploy      # 1. builds the site and publishes it to the gh-pages branch
```

```powershell
git add -A
git commit -m "Describe your change"
git push            # 2. saves your source code to GitHub
```

`npm run deploy` is what actually updates **https://EmmanuelAdio.github.io** (it
pushes the built site to the `gh-pages` branch). The `git` commands save your
source — do both so the live site and the code stay in sync.

---

## Available scripts

| Command | Does |
|---|---|
| `npm start` | Run locally at http://localhost:3000 |
| `npm run build` | Produce an optimized build in `build/` |
| `npm run deploy` | Build **and** publish to the `gh-pages` branch (the live site) |
| `npm test` | Run tests (none written yet) |

Bootstrapped with Create React App; TypeScript throughout.
