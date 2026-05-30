# Deployment Guide

## Backend Deployment
1. **Node.js Server:**
   - Containerize using Docker.
   - Deploy to Google Cloud Run or AWS ECS.
   - Use a Load Balancer to handle traffic scaling.
2. **Firebase:**
   - Create a Firebase Project in the Firebase Console.
   - Download the `serviceAccountKey.json` from the Firebase Project Settings (Service Accounts tab) and place it in the `backend/` directory.
   - Configure Firestore rules for data security.
   - Set up Cloud Functions for background tasks.

## Frontend Deployment
1. **Flutter App:**
   - Build for Android: `flutter build apk --release`.
   - Build for iOS: `flutter build ios --release`.
   - Distribute via Google Play Console and Apple App Store.

### Google Play Store Submission (Detailed)
1. **Developer Account**: Register for a Google Play Developer account.
2. **App Bundle**: Generate a signed Android App Bundle (AAB) in Flutter: `flutter build appbundle --release`.
3. **Store Listing**:
   - Provide high-resolution screenshots and gameplay trailers.
   - Write localized descriptions (Title, Short Description, Full Description).
   - Set up Content Rating based on game violence levels.
4. **Privacy Policy**: Link to a privacy policy hosted on the backend or a dedicated site.
5. **Testing**:
   - Use **Internal Testing** for team members.
   - Use **Closed Testing (Alpha/Beta)** for select external users.
   - Use **Open Testing** for public stress testing before launch.
6. **Production**: Once approved, promote the build to the Production track.
2. **Unity Engine:**
   - Export Unity project as a library.
   - Integrate Unity as a Library (UaaL) into the Flutter project.

## CI/CD Pipeline
- Use GitHub Actions for automated testing and deployment.
- Automated builds for each platform on every merge to the main branch.

## Monitoring
- Integration with Firebase Crashlytics and Google Analytics.
- Backend logging using Winston or Morgan.
