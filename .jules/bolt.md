## 2025-05-15 - [Game Loop Optimization]
**Learning:** The core game logic in `game.js` uses `setTimeout` for the game loop and `Array.prototype.some` for collision detection, which is O(N).
**Action:** Optimize the game loop using `requestAnimationFrame` and improve collision detection performance with a more efficient check.
