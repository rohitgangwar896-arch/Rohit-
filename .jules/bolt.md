## 2025-05-15 - Snake Occupancy Optimization
**Learning:** Using `Set.has()` for spatial occupancy checks (formatted as "x,y" strings) is ~120x faster than `Array.some()` on an array of 400 objects.
**Action:** Replace `Array.some()` with `Set` for collision detection and food placement in grid-based games to maintain O(1) lookup performance as the entity grows.
