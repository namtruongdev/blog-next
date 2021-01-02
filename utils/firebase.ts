import firebase from 'firebase/app';

import 'firebase/database';

if (!firebase.apps.length)
  firebase.initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  });

export default firebase.database();
