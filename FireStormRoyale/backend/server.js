const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const admin = require('firebase-admin');

// Initialize Firebase Admin (requires serviceAccountKey.json)
// admin.initializeApp({
//   credential: admin.credential.cert(require('./serviceAccountKey.json')),
//   databaseURL: "https://firestorm-royale.firebaseio.com"
// });

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'FireStorm Royale Backend is running' });
});

// Authentication Middleware (Stub)
const authenticate = (req, res, next) => {
  const idToken = req.headers.authorization;
  if (!idToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // Verify token with Firebase Admin
  // admin.auth().verifyIdToken(idToken)...
  next();
};

// Player Routes
app.get('/api/player/:uid', (req, res) => {
  const { uid } = req.params;
  // Fetch player data from Firestore
  res.status(200).json({ uid, username: 'Player1', level: 10, rank: 'Silver' });
});

app.post('/api/player/update', authenticate, (req, res) => {
  const { uid, stats } = req.body;
  // Update player stats in Firestore
  res.status(200).json({ message: 'Player stats updated' });
});

// Matchmaking Routes
app.post('/api/matchmaking/join', authenticate, (req, res) => {
  const { uid, mode } = req.body;
  // Add player to matchmaking queue
  res.status(200).json({ status: 'queued', queueId: 'q123' });
});

// Admin Routes (Protected)
app.get('/api/admin/players', authenticate, (req, res) => {
  // Fetch all players for admin dashboard
  res.status(200).json({ players: [] });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
