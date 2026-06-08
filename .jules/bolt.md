## 2025-05-15 - [Optimize collision detection in Snake]
**Learning:** Using `Array.prototype.some()` for spatial occupancy checks (like snake collisions) results in O(n) complexity. In a game loop, this can lead to performance degradation as the data structure grows.
**Action:** Use a `Set` with coordinate strings ("x,y") to achieve O(1) lookups for spatial occupancy checks.
