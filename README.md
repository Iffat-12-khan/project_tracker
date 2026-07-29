# Pronttera — Vite + React

This is the Pronttera prototype packaged as a Vite + React project, ready to
push to a git repo and deploy on Render.

## Project structure

```
src/
  main.jsx           React entry point
  App.jsx             Mounts the app and boots the engine (see below)
  styles.css           All styling (unchanged from the prototype)
  legacy/
    markup.html         The app's HTML structure (sidebar, topbar, all views, modals)
    engine.js            All state, data, and rendering logic
```

## How it's wired together

Pronttera's logic (roles, kanban board + sprints, epics, board columns,
sprint messages, edit/delete flows, audits, etc.) lives in one cohesive
script rather than as small, independently testable functions. Rewriting
that from scratch into per-view React components risked silently dropping
or subtly changing behavior you've already reviewed, with no build step
available in this environment to catch mistakes.

So instead of a rewrite, this embeds the existing engine as a self-contained
island inside a real React app:

- `App.jsx` renders `legacy/markup.html` once via `dangerouslySetInnerHTML`.
- After that markup is committed to the DOM, `App.jsx` dynamically imports
  `legacy/engine.js`, which is the original script almost verbatim.
- Because ES modules don't attach top-level declarations to `window` the
  way a classic `<script>` tag does, `engine.js` ends with a block that
  exposes its functions to `window` — that's the only change made to the
  original logic, and it's purely additive (see the comment at the bottom
  of that file).

The result is a genuine Vite + React project — dev server, hot reload,
`npm run build`, deployable to Render — with the exact same behavior as
the prototype you already reviewed.

**Note:** `<React.StrictMode>` is intentionally not used, since the legacy
engine wasn't written with React's dev-mode double-invoke behavior in mind.

## Local development

```bash
npm install
npm run dev
```

## Deploying to Render

1. Push this project to a git repository (GitHub/GitLab/etc.).
2. In Render, create a new **Web Service** from that repo.
3. Build command: `npm install && npm run build`
4. Start command: `npm run preview`
5. Render sets a `PORT` environment variable automatically — `npm run preview`
   already reads it (see `vite.config.js`), so no extra configuration is needed.

Alternatively, deploy it as a Render **Static Site** instead of a Web Service:
- Build command: `npm install && npm run build`
- Publish directory: `dist`
