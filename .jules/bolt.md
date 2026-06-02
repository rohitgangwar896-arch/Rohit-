## 2025-06-02 - [Snake Game Optimization]
**Learning:** Implementing a spatial `Set` for grid-based games reduces collision detection and occupancy checks from O(n) to O(1), which is critical as the snake grows longer. Combining this with `requestAnimationFrame` and `textContent` provides a comprehensive performance boost for legacy JS games.
**Action:** Always check for coordinate-based array searches in grid games and suggest `Set` or `Map` for O(1) lookups.
