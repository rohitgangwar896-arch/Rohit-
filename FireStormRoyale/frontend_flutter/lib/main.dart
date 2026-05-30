import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const FireStormRoyaleApp());
}

class FireStormRoyaleApp extends StatelessWidget {
  const FireStormRoyaleApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FireStorm Royale',
      theme: ThemeData(
        brightness: Brightness.dark,
        primarySwatch: Colors.orange,
        textTheme: GoogleFonts.oswaldTextTheme(ThemeData.dark().textTheme),
      ),
      home: const MainMenu(),
    );
  }
}

class MainMenu extends StatelessWidget {
  const MainMenu({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: NetworkImage('https://placeholder.com/background.jpg'),
            fit: BoxFit.cover,
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'FIRESTORM ROYALE',
                style: TextStyle(fontSize: 60, fontWeight: FontWeight.bold, color: Colors.orangeAccent),
              ),
              const SizedBox(height: 50),
              _buildMenuButton('START GAME', () {}),
              _buildMenuButton('CHARACTER CUSTOMIZATION', () {}),
              _buildMenuButton('BATTLE PASS', () {}),
              _buildMenuButton('SETTINGS', () {}),
              _buildMenuButton('EXIT', () {}),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildMenuButton(String label, VoidCallback onPressed) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.black87,
          minimumSize: const Size(300, 60),
          side: const BorderSide(color: Colors.orange, width: 2),
        ),
        onPressed: onPressed,
        child: Text(label, style: const TextStyle(fontSize: 20)),
      ),
    );
  }
}
