## 2025-06-28 - [Snake Collision Optimization]
**Learning:** Using a numeric hash (`x * tileCount + y`) for spatial coordinate lookups in a `Set` is significantly faster than template literal strings (e.g., `${x},${y}`) in JavaScript.
**Action:** Always prefer numeric hashing over string serialization for high-frequency spatial lookups in tight loops like game engines or simulations.
