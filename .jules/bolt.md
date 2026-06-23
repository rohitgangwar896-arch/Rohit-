## 2025-05-14 - [Snake Game Optimization]
**Learning:** Using numeric hashes (`x * tileCount + y`) for coordinate lookups in a `Set` is significantly faster (~4x) than string-based keys (e.g., `${x},${y}`) because it avoids string serialization overhead.
**Action:** Always prefer numeric hashing for 2D coordinate occupancy checks in tight loops.

**Learning:** Replacing `innerHTML` with `textContent` for simple text updates is a quick win for reducing DOM parsing overhead, even if the impact is small for single elements.
**Action:** Use `textContent` for all non-HTML text updates.
