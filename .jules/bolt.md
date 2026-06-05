## 2025-05-14 - [Snake Game Loop Optimization]
**Learning:** Transitioning from `setTimeout` to `requestAnimationFrame` with timestamp-based throttling provides a more stable frame rate and better browser resource management. Additionally, using a `Set` for coordinate occupancy checks reduces collision detection and food placement logic from O(n) to O(1).
**Action:** Always prefer `requestAnimationFrame` for game loops and `Set`/`Map` for spatial occupancy checks to ensure constant-time lookups.
