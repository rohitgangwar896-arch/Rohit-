## 2025-05-22 - Numeric Hashing for Coordinate-Based Lookups
**Learning:** Using a `Set` with numeric hashes (`x * width + y`) for coordinate lookups in a 2D grid is significantly faster (~2.3x faster in benchmarks) than using string serialization (e.g., template literals like `${x},${y}`). It avoids the overhead of string allocation and serialization in hot loops.
**Action:** Always prefer numeric hashing for 2D coordinate lookups in performance-critical paths when the grid dimensions are known and stable.
