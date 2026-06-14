## 2025-05-15 - [Snake] Optimized occupancy checks and game loop
**Learning:** For a snake game with 400 segments, `Set.has()` (using stringified "x,y" keys) was ~180x faster than `Array.some()` for occupancy checks (8.1ms vs 1.5s for 1M iterations). Additionally, `requestAnimationFrame` with timestamp-based throttling provides more stable frame timing than recursive `setTimeout`, which can drift.
**Action:** Use `Set` for spatial occupancy checks in grid-based games. Prefer `requestAnimationFrame` for game loops to ensure better synchronization with the display and smoother performance.
