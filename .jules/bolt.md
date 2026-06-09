## 2025-06-09 - Optimized spatial occupancy checks in Snake
**Learning:** Replacing `Array.some()` with `Set.has()` for coordinate occupancy checks in the Snake game resulted in a ~85x speedup (2.175s vs 15.581ms for 1M iterations with 1k segments). Stringifying coordinates as "x,y" is a simple and effective way to use a `Set` for 2D spatial lookups.
**Action:** Always prefer `Set` or `Map` for frequent occupancy or collision checks in game logic or spatial indexing.

## 2025-06-09 - Improved frame timing with requestAnimationFrame
**Learning:** Transitioning from `setTimeout` to `requestAnimationFrame` with timestamp-based throttling provides a more stable frame rate and is more CPU-efficient as it aligns with the browser's refresh rate and pauses when the tab is inactive.
**Action:** Use `requestAnimationFrame` for all animation and game loops in the frontend.
