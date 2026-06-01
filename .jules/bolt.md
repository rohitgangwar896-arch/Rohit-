# Bolt's Journal - Performance Learnings

## 2026-06-01 - [Snake Game Optimization]
**Learning:** Standard game loops using `setTimeout` are inefficient because they don't sync with the display's refresh rate and continue running even when the tab is hidden. `requestAnimationFrame` provides better performance and power management. Additionally, using `innerHTML` for simple text updates is significantly slower than `textContent` due to HTML parsing overhead.
**Action:** Always prefer `requestAnimationFrame` for animation loops and `textContent`/`innerText` for simple text updates.
