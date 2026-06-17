## 2025-05-14 - [Snake Game Optimization: Set vs Array]
**Learning:** Using a `Set` for spatial occupancy checks improves lookup performance from O(n) to O(1), but requires careful synchronization. In a Snake game, removing the tail *before* adding the head to the `Set` is critical to allow the snake to follow its own tail without triggering a false collision or removing a shared coordinate from the `Set`.
**Action:** Always consider the order of operations when synchronizing multiple data structures (like an Array and a Set) that represent the same state, especially when elements can overlap or "follow" each other.

## 2025-05-14 - [String Serialization Overhead]
**Learning:** Micro-benchmarks for `Set.has()` can be misleading if they don't account for string serialization overhead (e.g., template literals `${x},${y}`). While still faster for large collections, the cost of string creation should be factored into the optimization decision.
**Action:** When benchmarking hash-based lookups, use the exact serialization method that will be used in the production code.
