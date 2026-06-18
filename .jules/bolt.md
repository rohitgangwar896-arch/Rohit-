## 2025-05-14 - Optimized Snake Collision Detection
**Learning:** For grid-based games with frequent spatial occupancy checks, using a `Set` of coordinate strings (e.g., `"x,y"`) provides a significant performance boost over $O(n)$ array searches (like `Array.some`). Benchmarking showed a ~100x improvement for a snake of length 500 (2074ms vs 21ms for 1M iterations).
**Action:** Always prefer `Set` or `Map` for spatial lookups in games or large data structures where membership tests are frequent. Synchronize the set carefully during data modifications (add/delete).
