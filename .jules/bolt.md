## 2026-06-04 - [Snake Game Optimization]
**Learning:** Transitioning from `setTimeout` to `requestAnimationFrame` with timestamp-based throttling provides more consistent frame timing and better CPU efficiency by syncing with the browser's refresh rate and pausing automatically when the tab is backgrounded. Replacing `innerHTML` with `textContent` for text-only updates avoids the overhead of the HTML parser.
**Action:** Always prefer `requestAnimationFrame` for game loops and `textContent` for plain text DOM updates in web-based projects.
