## 2026-06-06 - Optimize Snake collision detection with O(1) Set
**Learning:** For frequent spatial occupancy checks in an array-based data structure (like the Snake body), converting coordinates to string keys and using a `Set` provides massive performance gains (\~85x speedup for 1000 segments).
**Action:** Always consider using a `Set` for O(1) lookup when checking for existence in a list of items that can be uniquely keyed, especially in high-frequency loops like game frames.
