## 2025-05-14 - Numeric Coordinate Hashing for O(1) Spatial Lookups
**Learning:** Using numeric encoding (e.g., `x * width + y`) for 2D coordinates in a `Set` or `Map` is significantly faster (~3x in my benchmark) than string serialization (e.g., `"${x},${y}"`) due to avoided string creation and garbage collection overhead in tight game loops.
**Action:** Prefer numeric coordinate hashes over string representations for spatial lookups in performance-critical paths.
