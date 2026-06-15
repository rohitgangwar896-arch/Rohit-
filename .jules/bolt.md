## 2025-05-14 - Optimized Snake Game Occupancy Checks
**Learning:** For game state lookups (like collision detection), using a `Set` of coordinate strings ("x,y") is significantly faster (~180x) than `Array.some()` as the snake length increases.
**Action:** Always prefer `Set` or `Map` for spatial occupancy checks in JavaScript-based games.

## 2025-05-14 - Improved Game Loop Efficiency
**Learning:** `requestAnimationFrame` provides better synchronization with the display's refresh rate and is more battery-efficient than `setTimeout` for game loops.
**Action:** Use `requestAnimationFrame` with timestamp-based throttling for fixed-rate game updates.
