## 2025-05-14 - Robust State Synchronization in Sets
**Learning:** When using a `Set` to track positions from an array (like a Snake body), simply adding the head and deleting the tail can lead to state divergence if the head moves into the tail's previous position. In that case, adding then deleting the same coordinate removes it entirely from the Set.
**Action:** Always remove the tail from the `Set` BEFORE adding the new head when the snake moves without eating. This ensures the coordinate remains correctly represented in the `Set` for subsequent ticks.
