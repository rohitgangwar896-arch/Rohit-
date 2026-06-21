# Bolt's Journal - Critical Performance Learnings

## 2025-05-15 - Numeric Hashing for Spatial Sets
**Learning:** Using numeric hashes (e.g., `x * tileCount + y`) in a `Set` for spatial occupancy checks is significantly faster than using string templates (e.g., `${x},${y}`). Benchmark showed ~10ms vs ~23ms for 1M lookups.
**Action:** Always prefer numeric hashes over string keys when implementing coordinate-based lookup sets in performance-critical loops.
