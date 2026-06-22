## 2025-05-14 - Numeric Coordinate Hashing for O(1) Lookups
**Learning:** Using template literals for coordinate strings (e.g., `${x},${y}`) in a `Set` lookup for grid-based games incurs significant serialization overhead. While still O(1) algorithmically, this overhead can be avoided in tight loops by using numeric hashes like `x * tileCount + y`.
**Action:** Always prefer numeric hashing for spatial occupancy checks on fixed-size grids to maximize performance.
