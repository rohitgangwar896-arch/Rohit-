# FireStorm Royale - Unity Project Structure

## Overview
This directory contains the core gameplay engine built with Unity 3D. It focuses on real-time multiplayer networking, AAA graphics, and realistic mechanics.

## Folder Structure
- **Assets/Scripts/**: Core gameplay logic (C#).
- **Assets/Prefabs/**: Reusable game objects (Players, Weapons, Vehicles).
- **Assets/Scenes/**: Main island map, training ground, and lobby scenes.
- **Assets/Models/**: 3D models for characters and environment.
- **Assets/Plugins/**: Third-party SDKs (Photon Fusion, Firebase Unity SDK).

## Networking (Photon Fusion)
We use Photon Fusion for high-performance networking.
- **NetworkManager**: Handles connection, matchmaking, and spawning.
- **NetworkPlayer**: Manages synchronized player state (position, health, inventory).
- **NetworkRigidbody**: Syncs vehicle and object physics.

## Core Scripts
1. `PlayerController.cs`: Handles movement, shooting, and animations.
2. `InventorySystem.cs`: Manages weapons, ammo, and loot.
3. `VehicleSystem.cs`: Logic for cars, bikes, and boats.
4. `SafeZoneController.cs`: Manages the shrinking circle logic.
5. `LootSpawner.cs`: Spawns items and crates across the map.
