# Bolt's Performance Journal

## 2025-05-15 - [Snake Game Loop Optimization]
**Learning:** The Snake game implementation uses `setTimeout` for its game loop. This is less efficient than `requestAnimationFrame` as it doesn't align with the browser's refresh rate and can lead to unnecessary battery drain and stuttering.
**Action:** Use `requestAnimationFrame` with a timestamp-based frame rate limiter for smoother animations and better resource management.
