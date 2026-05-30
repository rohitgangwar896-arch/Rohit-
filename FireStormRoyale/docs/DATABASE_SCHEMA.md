# Database Schema (Firestore)

## Collections

### `users`
- `uid`: string (Primary Key)
- `username`: string
- `email`: string
- `level`: number
- `experience`: number
- `coins`: number
- `diamonds`: number
- `rank`: string
- `stats`: map
    - `kills`: number
    - `wins`: number
    - `matchesPlayed`: number
- `createdAt`: timestamp

### `matches`
- `matchId`: string (Primary Key)
- `status`: enum (waiting, ongoing, completed)
- `mode`: enum (solo, duo, team)
- `players`: array [uid]
- `startTime`: timestamp
- `endTime`: timestamp
- `winner`: string (uid)

### `items` (Global Game Data)
- `itemId`: string (Primary Key)
- `name`: string
- `type`: enum (weapon, armor, cosmetic, consumable)
- `stats`: map
- `price`: map (coins, diamonds)

### `battle_pass`
- `seasonId`: string
- `levels`: array of maps (reward, expRequired)
- `userProgress`: sub-collection
    - `uid`: string
    - `currentLevel`: number
    - `unlockedRewards`: array [rewardId]

### `social`
- `friends`: collection
    - `uid`: string (Primary Key)
    - `friendList`: array [uid]
    - `incomingRequests`: array [uid]
    - `outgoingRequests`: array [uid]

### `leaderboards`
- `global`: sub-collection
    - `uid`: string
    - `score`: number
    - `rank`: number
