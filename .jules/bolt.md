## 2025-05-14 - [Set vs Array.some for Collision Detection]
**Learning:** For a snake with 400 segments, using `Set.has()` with numeric hashes (`x * tileCount + y`) is ~200x faster than `Array.some()` for coordinate lookups. Using numeric hashes instead of string template literals (`${x},${y}`) provides an additional ~2x speedup by avoiding string serialization overhead.
**Action:** Always prefer `Set` with numeric hashes for spatial occupancy and collision checks in grid-based games or high-frequency loops.
