## 2025-05-15 - [Snake Game Optimization: Set vs Array for Spatial Lookups]
**Learning:** For collision detection in grid-based games, using a `Set` of coordinate strings ("x,y") for occupancy checks is significantly faster than `Array.prototype.some()`. My benchmark showed a ~137x speedup (2.024s vs 14.7ms for 1M iterations with a 500-segment snake).
**Action:** Use hash-based structures (`Set` or `Map`) for frequent spatial lookups instead of iterating over arrays.
