## 2025-05-14 - [Snake Game Collision Optimization]
**Learning:** Replacing `Array.some` with `Set.has` using numeric hashes for coordinate checks in a 2D grid significantly improves performance (from ~1s to ~8ms for 1M iterations with a 400-segment snake). Numeric hashes (`x * tileCount + y`) are faster than string-based keys (`${x},${y}`) because they avoid string serialization overhead.
**Action:** Use numeric hash `Set` or `Map` for spatial occupancy checks in grid-based games or simulations. Always synchronize the `Set` state with the source-of-truth array during every mutation.
