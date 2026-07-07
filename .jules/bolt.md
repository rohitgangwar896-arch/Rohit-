## 2026-07-07 - [O(n) to O(1) Collision Detection in Grid Games]
**Learning:** Using Array.some() for occupancy checks in a grid game results in O(n) performance, which degrades as the snake grows. A Set with numeric hashes (x * tileCount + y) provides O(1) lookups and significantly better performance (~80x improvement in micro-benchmarks for large snakes).
**Action:** Always prefer coordinate Sets over array scans for spatial occupancy or collision detection in tile-based games or high-frequency loops.
