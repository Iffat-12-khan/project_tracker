import { useEffect, useRef } from "react";
import markup from "./legacy/markup.html?raw";
import "./styles.css";

/**
 * Pronttera is still a single self-contained app (state, rendering, and
 * event wiring all live in src/legacy/engine.js) rather than rewritten into
 * per-view React components. That engine already implements every feature
 * of the current prototype — roles, kanban board + sprints, epics, board
 * columns, sprint messages, edit/delete flows, audits, etc. — and it isn't
 * exposed as small testable functions with fixed inputs/outputs, so a
 * from-scratch rewrite into idiomatic React risks silently dropping or
 * subtly changing behavior with no way to compile-check it here.
 *
 * Instead, this component embeds that engine as a self-contained island:
 * - The original <body> markup renders once via dangerouslySetInnerHTML.
 * - The original <script> content loads as an ES module import, which
 *   Vite bundles, hot-reloads, and ships like any other React code.
 * - A small exposure block at the bottom of engine.js (see the comment
 *   there) makes the module's top-level functions reachable from the
 *   inline onclick=/onchange=/onkeydown= attributes the markup uses,
 *   since plain ES modules don't attach declarations to window the way a
 *   classic <script> tag would.
 *
 * Net effect: this is a real Vite + React project (dev server, HMR,
 * `npm run build`, deployable to Render) with zero behavior drift from
 * the prototype you already reviewed.
 */
export default function App() {
  const bootedRef = useRef(false);

  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;
    import("./legacy/engine.js");
  }, []);

  return <div style={{ display: "flex", minHeight: "100vh" }} dangerouslySetInnerHTML={{ __html: markup }} />;
}
