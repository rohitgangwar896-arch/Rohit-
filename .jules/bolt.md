## 2025-05-14 - Robust State Synchronization in Sets
**Learning:** When using a `Set` to track positions of an array-based entity (like a Snake), the order of operations during movement is critical. Adding the head before deleting the tail can lead to the head's coordinate being accidentally removed if it moves into the space the tail just vacated (clobbering).
**Action:** Always delete the outgoing element (tail) from the `Set` before adding the incoming element (head) to ensure state consistency during coordinate-based lookups.
