## 2026-07-08 - [O(1) Spatial Occupancy in JS]
**Learning:** For game loops (like Snake) requiring frequent collision detection or occupancy checks, replacing `Array.some()` (O(n)) with `Set.has()` (O(1)) provides a massive performance boost (observed ~60x in benchmarks for a 400-segment snake). Using a numeric hash `x * tileCount + y` instead of string templates `${x},${y}` avoids serialization overhead in the critical path.
**Action:** Always prefer `Set` with numeric hashes for coordinate-based lookups in performance-sensitive JavaScript loops.
