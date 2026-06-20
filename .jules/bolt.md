## 2026-06-20 - Numeric Coordinate Hashing vs String Serialization
**Learning:** Using template literals or string concatenation for coordinate hashes (e.g., `set.has(`${x},${y}`)`) in a `Set` lookup incurs significant serialization overhead in tight loops. While still O(1) algorithmically, numeric hashing (e.g., `x * tileCount + y`) is measurably faster as it avoids string creation and garbage collection pressure.
**Action:** Always prefer numeric hashes for 2D spatial lookups in performance-critical loops like collision detection or pathfinding.
