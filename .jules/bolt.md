## 2025-05-15 - [Snake Game Optimization]
**Learning:** Transitioning from O(n) array lookups to O(1) Set lookups for spatial occupancy (collision/food) provides a significant performance boost (~85x for length 1000). Additionally, using requestAnimationFrame with timestamp-based throttling provides more stable frame timing (~0.14ms jitter vs ~0.2ms with setTimeout) and is more CPU-efficient in background tabs.
**Action:** Always prefer Sets for coordinate-based occupancy checks and requestAnimationFrame for game loops.
