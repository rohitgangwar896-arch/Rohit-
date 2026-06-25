# Bolt's Journal

## 2026-06-25 - [O(1) Collision Detection with Numeric Hashes]
**Learning:** Using a `Set` with numeric hashes (`x * tileCount + y`) for coordinate lookups is significantly faster than using `Array.some` ((n)$) or even a `Set` with stringified coordinates (`${x},${y}`). Numeric hashing avoids serialization overhead while maintaining (1)$ complexity.
**Action:** Use numeric hashes for spatial occupancy checks in grid-based games or data structures.
