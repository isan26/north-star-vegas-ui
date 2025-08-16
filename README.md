# North Star Vegas UI

A beautiful, Duolingo-style wizard application built with React and Material-UI for AI consultant applications.

## Features

- 🎨 Beautiful, animated wizard interface inspired by Duolingo
- 📱 Fully responsive design
- 🔥 Firebase integration for data storage
- ✨ Smooth animations with Framer Motion
- 🎊 Confetti celebrations
- 📊 Progress tracking

## Wizard Flow

1. **Interest Screen**: Asks if the user is interested in working as an AI consultant
2. **Contact Form**: Collects name, email, and phone number (if interested)
3. **Thank You Pages**: Different thank you pages based on user's response

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Get your Firebase configuration from Project Settings > General > Your apps
4. Replace the configuration in `src/firebase.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-actual-app-id"
};
```

### 3. Firestore Security Rules

In your Firebase console, set up Firestore security rules. For development, you can use:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ai-consultant-applications/{document} {
      allow write: if true; // Allow writes for the application
      allow read: if false; // Prevent reads for privacy
    }
  }
}
```

### 4. Start Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── components/
│   ├── InterestStep.js          # Initial interest question
│   ├── ContactFormStep.js       # Contact information form
│   ├── ThankYouGenericStep.js   # Thank you for not interested users
│   ├── ThankYouSuccessStep.js   # Thank you for applicants
│   └── ProgressBar.js          # Progress indicator
├── firebase.js                 # Firebase configuration
├── theme.js                    # Material-UI theme
├── App.js                      # Main app component
└── index.js                    # Entry point
```

## Technologies Used

- **React 18** - UI framework
- **Material-UI 5** - Component library and design system
- **Framer Motion** - Animations
- **Firebase** - Backend and data storage
- **React Confetti** - Celebration effects

## Customization

### Colors
The app uses a Duolingo-inspired color scheme defined in `src/theme.js`:
- Primary: #58cc02 (Duolingo Green)
- Secondary: #1cb0f6 (Duolingo Blue)
- Warning: #ffc800 (Yellow)
- Error: #ff4b4b (Red)

### Animations
All animations are handled by Framer Motion with carefully timed delays for a smooth, engaging experience.

## Deployment

### Build for Production

```bash
npm run build
```

The build folder will contain the optimized production build.

### Deploy to Firebase Hosting (Optional)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.
