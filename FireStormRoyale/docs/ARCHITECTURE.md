# FireStorm Royale - Architecture

## Overview
FireStorm Royale is a high-performance, real-time multiplayer Battle Royale game designed for mobile platforms. It leverages a hybrid architecture combining Flutter for UI/UX and Unity 3D for the core gameplay engine.

## System Architecture
- **Frontend (Launcher/UI):** Developed in Flutter to ensure a smooth, cross-platform experience for menus, character customization, and social features.
- **Gameplay Engine:** Built in Unity 3D to deliver AAA-style graphics, realistic physics, and 60 FPS performance.
- **Backend:** Node.js API server for non-real-time operations (matchmaking, user profiles, battle pass).
- **Multiplayer Networking:** Powered by Photon Fusion or Mirror for low-latency, high-tick-rate synchronization.
- **Database:** Firebase Firestore for real-time player data and Firebase Authentication for secure access.

## Gameplay Loop
1. **Lobby:** Players join a lobby, customize characters, and form squads.
2. **Matchmaking:** Backend assigns players to a match instance.
3. **Deployment:** Players parachute from an aircraft onto the island.
4. **Survival:** Looting, combat, and vehicle navigation within a shrinking safe zone.
5. **Outcome:** Ranking, rewards calculation, and progression updates.

## Networking Structure
- **Server-Authoritative:** To prevent cheating, the game state is managed on a dedicated server.
- **Client Prediction & Reconciliation:** Used to hide latency for smooth movement and combat.
- **Voice/Text Chat:** Integrated via Vivox or Photon Voice.
- **Spectator Mode:** After elimination, players can spectate teammates or their killer, with state synced via the networking layer.
